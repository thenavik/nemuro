const form = document.querySelector("#form");

const rightTable = document.querySelector("#right-table");
const leftTable = document.querySelector("#left-table");
const centerTable = document.querySelector("#center-table");

const leftTableDate = document.querySelector("#left-table-date");
const centerTableDate = document.querySelector("#right-table-date");
const rightTableDate = document.querySelector("#center-table-date");
const bottomTableDate = document.querySelector("#bottom-table-date");
//POSITIONS from LEft table
const leftPosition1 = document.querySelector("#left-position1");
const leftPosition2 = document.querySelector("#left-position2");
const leftPosition3 = document.querySelector("#left-position3");
const leftPosition4 = document.querySelector("#left-position4");
const leftPosition5 = document.querySelector("#left-position5");
const leftPosition6 = document.querySelector("#left-position6");
const leftPosition7 = document.querySelector("#left-position7");
const leftPosition8 = document.querySelector("#left-position8");
const leftPosition12 = document.querySelector("#left-position12");
const leftPosition13 = document.querySelector("#left-position13");
const leftPosition14 = document.querySelector("#left-position14");
//POSITIONS from CENTER table
const centerPosition1 = document.querySelector("#center-position1");
const centerPosition2 = document.querySelector("#center-position2");
const centerPosition3 = document.querySelector("#center-position3");
const centerPosition4 = document.querySelector("#center-position4");
const centerPosition5 = document.querySelector("#center-position5");
const centerPosition6 = document.querySelector("#center-position6");
const centerPosition7 = document.querySelector("#center-position7");
const centerPosition8 = document.querySelector("#center-position8");
const centerPosition12 = document.querySelector("#center-position12");
const centerPosition13 = document.querySelector("#center-position13");
const centerPosition14 = document.querySelector("#center-position14");
//POSITIONS from RIGHT table
const rightPosition1 = document.querySelector("#right-position1");
const rightPosition2 = document.querySelector("#right-position2");
const rightPosition3 = document.querySelector("#right-position3");
const rightPosition4 = document.querySelector("#right-position4");
const rightPosition5 = document.querySelector("#right-position5");
const rightPosition6 = document.querySelector("#right-position6");
const rightPosition7 = document.querySelector("#right-position7");
const rightPosition8 = document.querySelector("#right-position8");
const rightPosition12 = document.querySelector("#right-position12");
const rightPosition13 = document.querySelector("#right-position13");
const rightPosition14 = document.querySelector("#right-position14");
//POSITIONS from BOTTOM (result sum of 3 top tables all) table
const resultSumAll1 = document.querySelector("#sum-all-result1");
const resultSumAll2 = document.querySelector("#sum-all-result2");
const resultSumAll3 = document.querySelector("#sum-all-result3");
const resultSumAll4 = document.querySelector("#sum-all-result4");
const resultSumAll5 = document.querySelector("#sum-all-result5");
const resultSumAll6 = document.querySelector("#sum-all-result6");
const resultSumAll7 = document.querySelector("#sum-all-result7");
const resultSumAll8 = document.querySelector("#sum-all-result8");
const resultSumAll13 = document.querySelector("#sum-all-result13");
const resultSumAll14 = document.querySelector("#sum-all-result14");

//BOTTOM ANSWERS IN LEFT POSITIONS
const leftAnswer4 = document.querySelector("#leftAnswer4");
const leftAnswer5 = document.querySelector("#leftAnswer5");
const leftAnswer6 = document.querySelector("#leftAnswer6");
const leftAnswer7 = document.querySelector("#leftAnswer7");
const leftAnswer8 = document.querySelector("#leftAnswer8");
const leftAnswer12 = document.querySelector("#leftAnswer12");
const leftAnswer13 = document.querySelector("#leftAnswer13");
const leftAnswer14 = document.querySelector("#leftAnswer14");

//BOTTOM ANSWERS IN CENTER POSITIONS
const centerAnswer4 = document.querySelector("#centerAnswer4");
const centerAnswer5 = document.querySelector("#centerAnswer5");
const centerAnswer6 = document.querySelector("#centerAnswer6");
const centerAnswer7 = document.querySelector("#centerAnswer7");
const centerAnswer8 = document.querySelector("#centerAnswer8");
const centerAnswer12 = document.querySelector("#centerAnswer12");
const centerAnswer13 = document.querySelector("#centerAnswer13");
const centerAnswer14 = document.querySelector("#centerAnswer14");

//---------------------------//
form.addEventListener("submit", getFormValue);
function getFormValue(event) {
  event.preventDefault();
  //Input 1 value
  const day1 = form.querySelector('[id="day1"]');
  const month1 = form.querySelector('[id="month1"]');
  const year1 = form.querySelector('[id="year1"]');
  //Input 2 value
  const day2 = form.querySelector('[id="day2"]');
  const month2 = form.querySelector('[id="month2"]');
  const year2 = form.querySelector('[id="year2"]');
  //Input 3 value
  const day3 = form.querySelector('[id="day3"]');
  const month3 = form.querySelector('[id="month3"]');
  const year3 = form.querySelector('[id="year3"]');

  const dataLeft = {
    day: day1.value,
    month: month1.value,
    year: year1.value,
  };
  const dataCenter = {
    day: day2.value,
    month: month2.value,
    year: year2.value,
  };
  const dataRight = {
    day: day3.value,
    month: month3.value,
    year: year3.value,
  };
  //Writing to document the date
  leftTableDate.innerHTML = `${dataLeft.day}.${dataLeft.month}.${dataLeft.year}`;
  rightTableDate.innerHTML = `${dataRight.day}.${dataRight.month}.${dataRight.year} `;
  centerTableDate.innerHTML = `${dataCenter.day}.${dataCenter.month}.${dataCenter.year}`;
  bottomTableDate.innerHTML = `${dataLeft.day}.${dataLeft.month}.${dataLeft.year} и ${dataCenter.day}.${dataCenter.month}.${dataCenter.year} и ${dataRight.day}.${dataRight.month}.${dataRight.year}`;
  //Result of LEFT TABLE
  const resultLeft = resultPsiPotret(dataLeft);
  const resultCenter = resultPsiPotret(dataCenter);
  const resultRight = resultPsiPotret(dataRight);
  const resultSumAll = resultPsiPotretAll(
    resultLeft,
    resultCenter,
    resultRight
  );
  //romanizing & Writing to document LEFT TABLE
  leftPosition1.innerHTML = romanize(resultLeft.p1);
  leftPosition2.innerHTML = romanize(resultLeft.p2);
  leftPosition3.innerHTML = romanize(resultLeft.p3);
  leftPosition4.innerHTML = romanize(resultLeft.p4);
  leftPosition5.innerHTML = romanize(resultLeft.p5);
  leftPosition6.innerHTML = romanize(resultLeft.p6);
  leftPosition7.innerHTML = romanize(resultLeft.p7);
  leftPosition8.innerHTML = romanize(resultLeft.p8);
  leftPosition12.innerHTML = romanize(resultLeft.p12);
  leftPosition13.innerHTML = romanize(resultLeft.p13);
  leftPosition14.innerHTML = romanize(resultLeft.p14);
  //romanizing & Writing to document CENTER TABLE
  centerPosition1.innerHTML = romanize(resultCenter.p1);
  centerPosition2.innerHTML = romanize(resultCenter.p2);
  centerPosition3.innerHTML = romanize(resultCenter.p3);
  centerPosition4.innerHTML = romanize(resultCenter.p4);
  centerPosition5.innerHTML = romanize(resultCenter.p5);
  centerPosition6.innerHTML = romanize(resultCenter.p6);
  centerPosition7.innerHTML = romanize(resultCenter.p7);
  centerPosition8.innerHTML = romanize(resultCenter.p8);
  centerPosition12.innerHTML = romanize(resultCenter.p12);
  centerPosition13.innerHTML = romanize(resultCenter.p13);
  centerPosition14.innerHTML = romanize(resultCenter.p14);
  //romanizing & Writing to document RIGHT TABLE
  rightPosition1.innerHTML = romanize(resultRight.p1);
  rightPosition2.innerHTML = romanize(resultRight.p2);
  rightPosition3.innerHTML = romanize(resultRight.p3);
  rightPosition4.innerHTML = romanize(resultRight.p4);
  rightPosition5.innerHTML = romanize(resultRight.p5);
  rightPosition6.innerHTML = romanize(resultRight.p6);
  rightPosition7.innerHTML = romanize(resultRight.p7);
  rightPosition8.innerHTML = romanize(resultRight.p8);
  rightPosition12.innerHTML = romanize(resultRight.p12);
  rightPosition13.innerHTML = romanize(resultRight.p13);
  rightPosition14.innerHTML = romanize(resultRight.p14);
  //romanizing & Writing to document BOTTOM (sum of 3 top tables) TABLE
  resultSumAll1.innerHTML = resultSumAll.p1;
  resultSumAll2.innerHTML = resultSumAll.p2;
  resultSumAll3.innerHTML = resultSumAll.p3;
  resultSumAll4.innerHTML = resultSumAll.p4;
  resultSumAll5.innerHTML = resultSumAll.p5;
  resultSumAll6.innerHTML = resultSumAll.p6;
  resultSumAll7.innerHTML = resultSumAll.p7;
  resultSumAll8.innerHTML = resultSumAll.p8;
  resultSumAll13.innerHTML = resultSumAll.p13;
  resultSumAll14.innerHTML = resultSumAll.p14;

  //ANSWERS ****LEFT****
  leftAnswer4.innerHTML = `${romanize(resultLeft.p1)}+${romanize(
    resultLeft.p2
  )}`;

  leftAnswer5.innerHTML = `${romanize(resultLeft.p2)}+${romanize(
    resultLeft.p3
  )}`;

  leftAnswer6.innerHTML = `${romanize(resultLeft.p4)}+${romanize(
    resultLeft.p5
  )}`;

  leftAnswer7.innerHTML = `${romanize(resultLeft.p1)}+${romanize(
    resultLeft.p5
  )}`;

  leftAnswer8.innerHTML = `${romanize(resultLeft.p2)}+${romanize(
    resultLeft.p6
  )}`;

  leftAnswer12.innerHTML = `${romanize(resultLeft.p7)}+${romanize(
    resultLeft.p8
  )}`;

  leftAnswer13.innerHTML = `${romanize(resultLeft.p1)}+${romanize(
    resultLeft.p4
  )}+${romanize(resultLeft.p6)}`;

  leftAnswer14.innerHTML = `${romanize(resultLeft.p3)}+${romanize(
    resultLeft.p5
  )}+${romanize(resultLeft.p6)}`;

  //ANSWERS *****CENTER*******
  centerAnswer4.innerHTML = `${romanize(resultCenter.p1)}+${romanize(
    resultCenter.p2
  )}`;
  centerAnswer5.innerHTML = `${romanize(resultCenter.p2)}+${romanize(
    resultCenter.p3
  )}`;
  centerAnswer6.innerHTML = `${romanize(resultCenter.p4)}+${romanize(
    resultCenter.p5
  )}`;
  centerAnswer7.innerHTML = `${romanize(resultCenter.p1)}+${romanize(
    resultCenter.p5
  )}`;
  centerAnswer8.innerHTML = `${romanize(resultCenter.p2)}+${romanize(
    resultCenter.p6
  )}`;
  centerAnswer12.innerHTML = `${romanize(resultCenter.p7)}+${romanize(
    resultCenter.p8
  )}`;
  centerAnswer13.innerHTML = `${romanize(resultCenter.p1)}+${romanize(
    resultCenter.p4
  )}+${romanize(resultCenter.p6)}`;
  centerAnswer14.innerHTML = `${romanize(resultCenter.p3)}+${romanize(
    resultCenter.p5
  )}+${romanize(resultCenter.p6)}`;

  //RIGHT ANSWER POSITIONS

  rightAnswer4.innerHTML = `${romanize(resultRight.p1)}+${romanize(
    resultRight.p2
  )}`;

  rightAnswer5.innerHTML = `${romanize(resultRight.p2)}+${romanize(
    resultRight.p3
  )}`;

  rightAnswer6.innerHTML = `${romanize(resultRight.p4)}+${romanize(
    resultRight.p5
  )}`;

  rightAnswer7.innerHTML = `${romanize(resultRight.p1)}+${romanize(
    resultRight.p5
  )}`;

  rightAnswer8.innerHTML = `${romanize(resultRight.p2)}+${romanize(
    resultRight.p6
  )}`;

  rightAnswer12.innerHTML = `${romanize(resultRight.p7)}+${romanize(
    resultRight.p8
  )}`;

  rightAnswer13.innerHTML = `${romanize(resultRight.p1)}+${romanize(
    resultRight.p4
  )}+${romanize(resultRight.p6)}`;

  rightAnswer14.innerHTML = `${romanize(resultRight.p3)}+${romanize(
    resultRight.p5
  )}+${romanize(resultRight.p6)}`;

  // BOTTOM ANSWER POSITIONS
  bottomAnswer1.innerHTML = `${romanize(resultLeft.p1)} + ${romanize(
    resultCenter.p1
  )} + ${romanize(resultRight.p1)}`;
  bottomAnswer2.innerHTML = `${romanize(resultLeft.p2)} + ${romanize(
    resultCenter.p2
  )} + ${romanize(resultRight.p2)}`;
  bottomAnswer3.innerHTML = `${romanize(resultLeft.p3)} + ${romanize(
    resultCenter.p3
  )} + ${romanize(resultRight.p3)}`;
  bottomAnswer4.innerHTML = `${romanize(resultLeft.p4)} + ${romanize(
    resultCenter.p4
  )} + ${romanize(resultRight.p4)}`;
  bottomAnswer5.innerHTML = `${romanize(resultLeft.p5)} + ${romanize(
    resultCenter.p5
  )} + ${romanize(resultRight.p5)}`;
  bottomAnswer6.innerHTML = `${romanize(resultLeft.p6)} + ${romanize(
    resultCenter.p6
  )} + ${romanize(resultRight.p6)}`;
  bottomAnswer7.innerHTML = `${romanize(resultLeft.p7)} + ${romanize(
    resultCenter.p7
  )} + ${romanize(resultRight.p7)}`;
  bottomAnswer8.innerHTML = `${romanize(resultLeft.p8)} + ${romanize(
    resultCenter.p8
  )} + ${romanize(resultRight.p8)}`;
  bottomAnswer13.innerHTML = `${romanize(resultLeft.p13)} + ${romanize(
    resultCenter.p13
  )} + ${romanize(resultRight.p13)}`;
  bottomAnswer14.innerHTML = `${romanize(resultLeft.p14)} + ${romanize(
    resultCenter.p14
  )} + ${romanize(resultRight.p14)}`;
}

//---------------Counting the left TABLE------------
function sumYear(year) {
  return String(year)
    .split("")
    .reduce((sum, current) =>
      Number(sum) + Number(current) > 22
        ? Number(sum) + Number(current) - 22
        : Number(sum) + Number(current)
    );
}

function resultPsiPotret(data) {
  const p1 = Number(data.day) > 22 ? Number(data.day) - 22 : Number(data.day);
  const p2 = Number(data.month);
  const p3 = sumYear(data.year);
  const p4 = p1 + p2 > 22 ? p1 + p2 - 22 : p1 + p2;
  const p5 = p2 + p3 > 22 ? p2 + p3 - 22 : p2 + p3;
  const p6 = p4 + p5 > 22 ? p4 + p5 - 22 : p4 + p5;
  const p7 = p1 + p5 > 22 ? p1 + p5 - 22 : p1 + p5;
  const p8 = p2 + p6 > 22 ? p2 + p6 - 22 : p2 + p6;
  const p12 = p7 + p8 > 22 ? p7 + p8 - 22 : p7 + p8;
  const p13 = p1 + p4 + p6 > 22 ? p1 + p4 + p6 - 22 : p1 + p4 + p6;
  const p14 = p3 + p5 + p6 > 22 ? p3 + p5 + p6 - 22 : p3 + p5 + p6;

  return {
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p12,
    p13,
    p14,
  };
}

function summThreePosition(pos1, pos2, pos3) {
  let res = Number(pos1) + Number(pos2) + Number(pos3);

  while (res > 22) {
    res -= 22;
  }
  if (res === 0) {
    res = 22;
  }
  return res;
}

function resultPsiPotretAll(left, center, right) {
  let p1 = summThreePosition(left.p1, center.p1, right.p1);
  let p2 = summThreePosition(left.p2, center.p2, right.p2);
  let p3 = summThreePosition(left.p3, center.p3, right.p3);
  let p4 = summThreePosition(left.p4, center.p4, right.p4);
  let p5 = summThreePosition(left.p5, center.p5, right.p5);
  let p6 = summThreePosition(left.p6, center.p6, right.p6);
  let p7 = summThreePosition(left.p7, center.p7, right.p7);
  let p8 = summThreePosition(left.p8, center.p8, right.p8);
  let p13 = summThreePosition(left.p13, center.p13, right.p13);
  let p14 = summThreePosition(left.p14, center.p14, right.p14);

  return {
    p1: romanize(p1),
    p2: romanize(p2),
    p3: romanize(p3),
    p4: romanize(p4),
    p5: romanize(p5),
    p6: romanize(p6),
    p7: romanize(p7),
    p8: romanize(p8),
    p13: romanize(p13),
    p14: romanize(p14),
  };
}

//Romanizing functionality
function romanize(num) {
  if (isNaN(num)) return NaN;
  var digits = String(+num).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ],
    roman = "",
    i = 3;
  while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}
getFormValue();
