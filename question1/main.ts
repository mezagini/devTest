export function isValidWalk(walk: string[]): boolean {
  debugger
  const streetsNumberRequired = 10;
  let isValidInstructions: boolean = validateWalkInstructions(walk);


  if (!isValidInstructions) {
    return false;
  }

  return walk.length === streetsNumberRequired;

}

type cartesianPoint = 'n' | 's' | 'w' | 'e';


function validateWalkInstructions(walk: string[]): boolean {

    const walkInstructionsArray = walk.filter(x => x === n || x === s || x === w || x === e);

    const isValidInstructions = walk.length === walkInstructionsArray.length;

    return isValidInstructions;
}

export const n = 'n';
export const s = 's';
export const w = 'w';
export const e = 'e';
