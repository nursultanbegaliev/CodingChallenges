function checkRecord(s) {
  let absentNum = 0;
  let lateNum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] != "L" && lateNum < 3) {
      lateNum = 0;
    }
    if (s[i] == "A") {
      absentNum++;
    }
    if (s[i] == "L") {
      lateNum++;
    }
    if (absentNum >= 2 || lateNum >= 3) {
      return false;
    }
  }
  return absentNum < 2 && lateNum < 3 ? true : false;
}

