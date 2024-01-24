export function findOutlier(integers: number[]): number {
    
  let impar: number[] = [];
  let par: number[] = [];
  
  integers.forEach(x => {
    x % 2 === 0 ? par = [...par, x] : impar = [...impar, x];
  });

  const outlier = par.length === 1 ? par[0] : impar[0];

  return outlier;

  }