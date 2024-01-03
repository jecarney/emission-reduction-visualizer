import { TileLayer } from '@deck.gl/geo-layers';
import { BitmapLayer, LineLayer } from '@deck.gl/layers';
import DeckGL from '@deck.gl/react';

import { FC } from 'react';
import { Map } from 'react-map-gl';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
};

// Data to be used by the LineLayer
const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781],
  },
];

/* const terrain = new TerrainLayer({
  id: 'terrain-source',
  // Data source: https://www.mapzen.com/blog/terrain-tile-service/
  elevationData:
    'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png',
  elevationDecoder: {
    rScaler: 256,
    gScaler: 1,
    bScaler: 1 / 256,
    offset: -32768,
  },
  texture: null,
  maxZoom: 14,
  material: {
    diffuse: 1,
  },
  operation: 'terrain+draw',
}); */

const terrain = new TileLayer({
  // https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
  data: 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png',

  minZoom: 0,
  maxZoom: 19,
  tileSize: 256,
  pickable: true,
  // onHover: (pickinginfo) => {
  //   if (pickinginfo.bitmap) {
  //     console.log('hover on TileLayer:', pickinginfo);
  //   }
  // },

  renderSubLayers: (props) => {
    const {
      bbox: { west, south, east, north },
    } = props.tile;

    return new BitmapLayer(props, {
      data: null,
      image: props.data,
      bounds: [west, south, east, north],
      pickable: true,
      // desaturate: 1,//greyscale
      tintColor: [1, 1, 255, 0.5],
    });
  },
});

const layers = [
  terrain,
  new LineLayer({ id: 'line-layer', data, pickable: true }),
];
//pk.eyJ1IjoibWlsYWRueXUiLCJhIjoiY2xnZTg3ZnZhMGUzbDNlbnRib3o5ZXU0cSJ9.Sfq2eXGGFyRAJreDOpqxzQ
const TempMap: FC = () => {
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
      getTooltip={(pickinginfo) => {
        // console.log('tooltip', pickinginfo);
        const [red, green, blue, opacity] = pickinginfo.color ?? [];
        //(red * 256 + green + blue / 256) - 32768

        const height =
          red && green && blue ? red * 256 + green + blue / 256 - 32768 : 0;
        console.log('height', height);
        return {
          html: `<p style={{ width: '200px', height: '200px' }}>
              Hi I'm bob ${height}
            </p>`,
        };
      }}
      // onClick={({ object }) => {
      //   console.log('click', object);
      // }}
    >
      <Map
        mapboxAccessToken={
          'pk.eyJ1IjoibWlsYWRueXUiLCJhIjoiY2xnZTg3ZnZhMGUzbDNlbnRib3o5ZXU0cSJ9.Sfq2eXGGFyRAJreDOpqxzQ'
        }
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </DeckGL>
  );
};

export default TempMap;
