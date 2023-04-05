import SECTORS from '../../Sector/sectors.const';
import { ReductionAction } from './reduction-action.model';

// TODO: the initial study said, "Our results show that such dietary change could reduce annual agricultural production emissions of high-income nations’ diets by 61% while sequestering as much as 98.3 (55.6–143.7) GtCO2 equivalent, equal to approximately 14 years of current global agricultural emissions until natural vegetation matures.". There are a few more ways we could allow the user to get to reductions... could allow including sequestration, could allow reducing by percentage. We could also have a slider for the number of years so we can see how the changes affect carbon emissions over time? for now, I just took calculated the 61% annual reduction, this only handles one year. Probably even better as a first step would be to have a slider for percentage of population... so you can adjust what percent of a population doing a given thing would make a difference.
const builtinReductionActions: ReductionAction[] = [
  {
    sector: SECTORS.AGRICULTURE,
    link: 'https://www.nature.com/articles/s43016-021-00431-5',
    annualReduction: 42,
    notes:
      'This is a reduction in agricultural emissions, based on the study linked. The study says that a 61% reduction in agricultural emissions could be achieved by changing diets.',
    name: 'Everyone Goes Vegan',
    id: 1,
  },
  {
    sector: SECTORS.AGRICULTURE,
    link: 'https://www.foodincanada.com/food-in-canada/a-study-by-the-meatless-farm-finds-majority-of-canadians-see-reducing-red-meat-as-important-143446/',
    annualReduction: 30,
    notes:
      'Each Canadian who swaps out just one beef-based meal for a plant-based meal each week will reduce their greenhouse gas contribution by five per cent each year. If the entire country made the once-weekly swap, Canada could reduce annual greenhouse gas emissions by 30 million tonnes of CO2 – the equivalent to taking six million cars off the road.',
    name: 'Each Canadian swaps one beef-based meal per week for a plant-based meal',
    id: 2,
  },
];

export default builtinReductionActions;
