import {
  ChangeFromBase,
  EmissionChange,
  YearOfEmissions,
} from './emission.model';

const calculateChange = (
  baseEmissions: YearOfEmissions,
  updatedEmissions: YearOfEmissions
): ChangeFromBase => {
  const emissionChanges: EmissionChange[] =
    updatedEmissions.emissionBySector.reduce<EmissionChange[]>(
      (deltasWithMatch, current) => {
        const baseEmission = baseEmissions.emissionBySector.find(
          (base) => base.sector.id === current.sector.id
        );
        if (baseEmission) {
          const difference = current.value - baseEmission.value;
          const emissionChange: EmissionChange = {
            delta: difference,
            baseEmission,
          };
          return [...deltasWithMatch, emissionChange];
        }
        return deltasWithMatch;
      },
      []
    );

  const changeFromBase = {
    changes: emissionChanges,
    currentYear: updatedEmissions.year,
    baseYear: baseEmissions.year,
  };
  return changeFromBase;
};
export default calculateChange;
