import SECTORS from '../Sector/sectors.const';
import { ReductionAction } from './reduction-action.model';

const reductionActions: ReductionAction[] = [
  {
    sector: SECTORS.AGRICULTURE,
    links: ['https://www.nature.com/articles/s43016-021-00431-5'],
    annualReduction: 42,
    notes:
      'This is a reduction in agricultural emissions, based on the study linked. The study says that a 61% reduction in agricultural emissions could be achieved by changing diets.',
    name: '100% go vegan',
    id: 1,
  },
  // {
  //   sector: SECTORS.AGRICULTURE,
  //   links: [
  //     'https://www.foodincanada.com/food-in-canada/a-study-by-the-meatless-farm-finds-majority-of-canadians-see-reducing-red-meat-as-important-143446/',
  //   ],
  //   annualReduction: 30,
  //   notes:
  //     'Each Canadian who swaps out just one beef-based meal for a plant-based meal each week will reduce their greenhouse gas contribution by five per cent each year. If the entire country made the once-weekly swap, Canada could reduce annual greenhouse gas emissions by 30 million tonnes of CO2 – the equivalent to taking six million cars off the road.',
  //   name: '-1 beef meal per week',
  //   id: 2,
  // },
  // {
  //   sector: SECTORS.TRANSPORT,
  //   links: [
  //     'https://ourworldindata.org/grapher/per-capita-co2-domestic-aviation?tab=table',
  //   ],
  //   annualReduction: 3,
  //   notes:
  //     'CO2 emissions from domestic aviation in 2018 were 168.27 kg CO2 per capita (https://ourworldindata.org/grapher/per-capita-co2-domestic-aviation?tab=table). The population of Canada in 2018 was 37.07 million, so CO2 emissions from domestic flights were about 6 mt. If we were to cut this by 50%, we could reduce CO2 emissions by about 3 mt',
  //   name: ' - 50% CO2 emissions domestic aviation',
  //   id: 3,
  // },
  // {
  //   sector: SECTORS.TRANSPORT,
  //   links: [
  //     'https://ourworldindata.org/grapher/per-capita-co2-international-aviation?tab=table&country=~CAN',
  //   ],
  //   annualReduction: 5,
  //   notes:
  //     'CO2 emissions from international aviation in 2018 were 294.5 kg kg CO2 per capita (https://ourworldindata.org/grapher/per-capita-co2-domestic-aviation?tab=table). The population of Canada in 2018 was 37.07 million, so CO2 emissions from international flights were about 11 mt. If we were to cut this by 50%, we could reduce CO2 emissions by about 5 mt.',
  //   name: '-50% CO2 emissions from international flights%',
  //   id: 4,
  // },
  // {
  //   sector: SECTORS.TRANSPORT,
  //   links: ['https://applications.icao.int/icec/Home/Index'],
  //   annualReduction: 0.0023,
  //   notes:
  //     'There are dozens of flights between Montreal and Toronto daily - for instance a quick check for next Thursday shows 43. According to the ICAO calculator, the Aircraft Fuel Burn for this journey would be 6363.70 kg. If we were to cancel 1 flight per day, we would annually save 2322750.5 kg/0.0023 mt, which is surprisingly little - not enough to show up on the chart',
  //   name: 'Cut 1 Montreal-Toronto short-haul flight per day',
  //   id: 5,
  // },
  // {
  //   sector: SECTORS.OIL_AND_GAS,
  //   links: [
  //     'https://globalnews.ca/news/9277605/emissions-cap-canadian-oil-gas-2023-minister/',
  //   ],
  //   annualReduction: 61,
  //   notes:
  //     'The Canadian government has set a tentative cap of 110 Mt of CO2 emissions per year for the oil and gas sector for 2030 in its Emissions Reduction Plan. Initially we saw 171 mt for the oil and gas sector for 2005, so this is reduction of 61 mt.',
  //   name: 'Emissions Reduction Plan',
  //   id: 6,
  // },
];

export default reductionActions;
