// code your solution here

function evaluateRecord(item) {
  return item.result === "W";
}

function superbowlWin(records) {
  const winResult = records.find(evaluateRecord);
  if (winResult !== undefined) {
    return winResult.year;
  }
}
