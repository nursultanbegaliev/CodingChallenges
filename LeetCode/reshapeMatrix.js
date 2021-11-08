var matrixReshape = function (mat, r, c) {
  let storeElements = [];
  let res = [];
  let index = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      storeElements.push(mat[i][j]);
    }
  }

  for (let i = 0; i < r; i++) {
    res[i] = [];
    for (let j = 0; j < c - r; j++) {
      res[i][j] = storeElements[index];
      index++;
    }
  }
  return res;
};

let mat = [
    [1, 2],
    [3, 4],
  ],
  r = 2,
  c = 4;
console.log(matrixReshape(mat, r, c));
