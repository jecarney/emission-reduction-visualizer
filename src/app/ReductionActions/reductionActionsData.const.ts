import SECTORS from '../Sector/sectors.const';
import { ReductionAction } from './reduction-action.model';

// TODO: the initial study said, "Our results show that such dietary change could reduce annual agricultural production emissions of high-income nations’ diets by 61% while sequestering as much as 98.3 (55.6–143.7) GtCO2 equivalent, equal to approximately 14 years of current global agricultural emissions until natural vegetation matures.". There are a few more ways we could allow the user to get to reductions... could allow including sequestration, could allow reducing by percentage. We could also have a slider for the number of years so we can see how the changes affect carbon emissions over time? for now, I just took calculated the 61% annual reduction, this only handles one year. Probably even better as a first step would be to have a slider for percentage of population... so you can adjust what percent of a population doing a given thing would make a difference.
const reductionActions: ReductionAction[] = [
  {
    sector: SECTORS.AGRICULTURE,
    links: ['https://www.nature.com/articles/s43016-021-00431-5'],
    annualReduction: 42,
    notes:
      'This is a reduction in agricultural emissions, based on the study linked. The study says that a 61% reduction in agricultural emissions could be achieved by changing diets.',
    name: 'Everyone Goes Vegan',
    id: 1,
  },
  {
    sector: SECTORS.AGRICULTURE,
    links: [
      'https://www.foodincanada.com/food-in-canada/a-study-by-the-meatless-farm-finds-majority-of-canadians-see-reducing-red-meat-as-important-143446/',
    ],
    annualReduction: 30,
    notes:
      'Each Canadian who swaps out just one beef-based meal for a plant-based meal each week will reduce their greenhouse gas contribution by five per cent each year. If the entire country made the once-weekly swap, Canada could reduce annual greenhouse gas emissions by 30 million tonnes of CO2 – the equivalent to taking six million cars off the road.',
    name: 'Each Canadian swaps one beef-based meal per week for a plant-based meal',
    id: 2,
  },
  {
    sector: SECTORS.TRANSPORT,
    links: [
      'https://ourworldindata.org/grapher/per-capita-co2-domestic-aviation?tab=table',
    ],
    annualReduction: 3,
    notes:
      'CO2 emissions from domestic aviation in 2018 were 168.27 kg CO2 per capita (https://ourworldindata.org/grapher/per-capita-co2-domestic-aviation?tab=table). The population of Canada in 2018 was 37.07 million, so CO2 emissions from domestic flights were about 6 mt. If we were to cut this by 50%, we could reduce CO2 emissions by about 3 mt',
    name: 'Reduce per capita CO2 emissions from domestic aviation by 50%',
    id: 3,
  },
  {
    sector: SECTORS.TRANSPORT,
    links: [
      'https://ourworldindata.org/grapher/per-capita-co2-international-aviation?tab=table&country=~CAN',
    ],
    annualReduction: 5,
    notes:
      'CO2 emissions from international aviation in 2018 were 294.5 kg kg CO2 per capita (https://ourworldindata.org/grapher/per-capita-co2-domestic-aviation?tab=table). The population of Canada in 2018 was 37.07 million, so CO2 emissions from international flights were about 11 mt. If we were to cut this by 50%, we could reduce CO2 emissions by about 5 mt.',
    name: 'Reduce per capita CO2 emissions from international flights by 50%',
    id: 4,
  },
  {
    sector: SECTORS.TRANSPORT,
    links: ['https://applications.icao.int/icec/Home/Index'],
    annualReduction: 0.0023,
    notes:
      'There are dozens of flights between Montreal and Toronto daily - for instance a quick check for next Thursday shows 43. According to the ICAO calculator, the Aircraft Fuel Burn for this journey would be 6363.70 kg. If we were to cancel 1 flight per day, we would annually save 2322750.5 kg/0.0023 mt, which is surprisingly little - not enough to show up on the chart',
    name: 'Cut one short-haul flight per day between Montreal and Toronto',
    id: 5,
  },
  {
    sector: SECTORS.OIL_AND_GAS,
    links: [
      'https://globalnews.ca/news/9277605/emissions-cap-canadian-oil-gas-2023-minister/',
    ],
    annualReduction: 61,
    notes:
      'The Canadian government has set a tentative cap of 110 Mt of CO2 emissions per year for the oil and gas sector for 2030 in its Emissions Reduction Plan. Initially we saw 171 mt for the oil and gas sector for 2005, so this is reduction of 61 mt.',
    name: 'Emissions Reduction Plan to reduce oil and gas emissions by 61 mt for 2030',
    id: 6,
  },
];

export default reductionActions;
