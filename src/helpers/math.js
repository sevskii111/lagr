function lagrange(x, xs, ys) {
  const [x_arr, y_arr] = sort_arrs(xs, ys);
  const n = x_arr.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let l = 1;
    for (let j = 0; j < n; j++)
      if (j != i) {
        l = (l * (x - x_arr[j])) / (x_arr[i] - x_arr[j]);
      }

    sum += y_arr[i] * l;
  }
  return sum;
}

function sort_arrs(x_arr, y_arr) {
  let pairs = [];
  for (const i in x_arr) {
    pairs.push({ x: x_arr[i], y: y_arr[i] });
  }
  pairs.sort((a, b) => a.x - b.x);
  return [pairs.map((p) => p.x), pairs.map((p) => p.y)];
}

export { lagrange };
