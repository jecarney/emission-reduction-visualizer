import RiverChart from "./components/RiverChart/RiverChart";

const App = () => {
  return (
    <div className="app-wrapper">
      <p>
        Since 2015 and the signing of the Paris Agreement, Canada adopted 2005
        as the base year for its GHG emission reduction target. In 2021, Canada
        committed to reduce its GHG emissions by 40‑45 percent below 2005 levels
        by 2030.
        (https://www.canada.ca/en/environment-climate-change/services/environmental-indicators/greenhouse-gas-emissions.html)
      </p>
      <p>
        2005 - 741 mt
      </p>
      <p>
        2020 - 672 mt
      </p>
      <p>
        goal (calculated by me, need to check: => * .45 = **333.45** => canada emissions reduction target - 408 mt)
      </p>
      <RiverChart />
    </div>
  );
};

export default App;
