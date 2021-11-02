function findingUsersActiveMinutes(logs, k) {
  let uam = [];
  let obj = {};
  for (let i = 0; i < logs.length; i++) {
    if (Object.keys(obj).includes(String(logs[i][0]))) {
      if (!obj[logs[i][0]].includes(logs[i][1])) {
        obj[logs[i][0]].push(logs[i][1]);
      }
      // console.log(obj[logs[i][0]]);
    } else {
      obj[logs[i][0]] = [logs[i][1]];
      // console.log(obj[logs[i][0]]);
    }
  }
  for (let i = 0; i < k; i++) {
    uam[i] = 0;
  }

  for (let key in obj) {
    if (obj[key].length <= k) {
      uam[obj[key].length - 1] += 1;
    }
    // console.log(obj[key]);
  }

  return uam;
}

let logs = [
    [1, 1],
    [2, 2],
    [2, 3],
  ],
  k = 4;
console.log(findingUsersActiveMinutes(logs, k));

var findingUsersActiveMinutes2 = function (logs, k) {
  // create a map with key as id and value as a set of time (unique values)
  const map = new Map();
  logs.forEach(([id, time]) => {
    // O(n)
    const set = map.has(id) ? map.get(id) : new Set();
    set.add(time);
    map.set(id, set);
  });
  // iterate over the key-value pair in the map and create the resultant array using the size of each set
  const result = new Array(k).fill(0);
  map.forEach((value, key) => {
    // O(n)
    if (value.size <= k) {
      result[value.size - 1] += 1;
    }
  });
  return result;
};
