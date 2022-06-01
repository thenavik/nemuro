const form = document.querySelector("#form");

const rightTable = document.querySelector("#right-table");
const leftTable = document.querySelector("#left-table");
const centerTable = document.querySelector("#center-table");

const leftTableDate = document.querySelector("#left-table-date");
const centerTableDate = document.querySelector("#right-table-date");
const rightTableDate = document.querySelector("#center-table-date");
const fourTableDate = document.querySelector("#four-table-date");
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
//POSITIONS from four table
const fourPosition1 = document.querySelector("#for-position1");
const fourPosition2 = document.querySelector("#for-position2");
const fourPosition3 = document.querySelector("#for-position3");
const fourPosition4 = document.querySelector("#for-position4");
const fourPosition5 = document.querySelector("#for-position5");
const fourPosition6 = document.querySelector("#for-position6");
const fourPosition7 = document.querySelector("#for-position7");
const fourPosition8 = document.querySelector("#for-position8");
const fourPosition12 = document.querySelector("#for-position12");
const fourPosition13 = document.querySelector("#for-position13");
const fourPosition14 = document.querySelector("#for-position14");
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
  //Input 4 value
  const day4 = form.querySelector('[id="day4"]');
  const month4 = form.querySelector('[id="month4"]');
  const year4 = form.querySelector('[id="year4"]');

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
  const dataFour = {
    day: day4.value,
    month: month4.value,
    year: year4.value,
  };
  //Writing to document the date
  leftTableDate.innerHTML = `${dataLeft.day}.${dataLeft.month}.${dataLeft.year}`;
  rightTableDate.innerHTML = `${dataRight.day}.${dataRight.month}.${dataRight.year} `;
  centerTableDate.innerHTML = `${dataCenter.day}.${dataCenter.month}.${dataCenter.year}`;
  fourTableDate.innerHTML = `${dataFour.day}.${dataFour.month}.${dataFour.year}`;
  bottomTableDate.innerHTML = `${dataLeft.day}.${dataLeft.month}.${dataLeft.year} и ${dataCenter.day}.${dataCenter.month}.${dataCenter.year} и ${dataRight.day}.${dataRight.month}.${dataRight.year} и ${dataFour.day}.${dataFour.month}.${dataFour.year}`;
  //Result of LEFT TABLE
  const resultLeft = resultPsiPotret(dataLeft);
  const resultCenter = resultPsiPotret(dataCenter);
  const resultRight = resultPsiPotret(dataRight);
  const resultFour = resultPsiPotret(dataFour);
  const resultSumAll = resultPsiPotretAll(
    resultLeft,
    resultCenter,
    resultRight,
    resultFour
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
  //romanizing & Writing to document Four TABLE
  fourPosition1.innerHTML = romanize(resultFour.p1);
  fourPosition2.innerHTML = romanize(resultFour.p2);
  fourPosition3.innerHTML = romanize(resultFour.p3);
  fourPosition4.innerHTML = romanize(resultFour.p4);
  fourPosition5.innerHTML = romanize(resultFour.p5);
  fourPosition6.innerHTML = romanize(resultFour.p6);
  fourPosition7.innerHTML = romanize(resultFour.p7);
  fourPosition8.innerHTML = romanize(resultFour.p8);
  fourPosition12.innerHTML = romanize(resultFour.p12);
  fourPosition13.innerHTML = romanize(resultFour.p13);
  fourPosition14.innerHTML = romanize(resultFour.p14);
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

function summFourPosition(pos1, pos2, pos3, pos4) {
  let res = Number(pos1) + Number(pos2) + Number(pos3) + Number(pos4);

  while (res > 22) {
    res -= 22;
  }
  if (res === 0) {
    res = 22;
  }
  return res;
}

function resultPsiPotretAll(left, center, right, four) {
  let p1 = summFourPosition(left.p1, center.p1, right.p1, four.p1);
  let p2 = summFourPosition(left.p2, center.p2, right.p2, four.p2);
  let p3 = summFourPosition(left.p3, center.p3, right.p3, four.p3);
  let p4 = summFourPosition(left.p4, center.p4, right.p4, four.p4);
  let p5 = summFourPosition(left.p5, center.p5, right.p5, four.p5);
  let p6 = summFourPosition(left.p6, center.p6, right.p6, four.p6);
  let p7 = summFourPosition(left.p7, center.p7, right.p7, four.p7);
  let p8 = summFourPosition(left.p8, center.p8, right.p8, four.p8);
  let p13 = summFourPosition(left.p13, center.p13, right.p13, four.p13);
  let p14 = summFourPosition(left.p14, center.p14, right.p14, four.p14);

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
