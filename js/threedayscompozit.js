const form = document.querySelector("#form");

const rightTable = document.querySelector("#right-table");
const leftTable = document.querySelector("#left-table");
const centerTable = document.querySelector("#center-table");

const leftTableDate = document.querySelector("#left-table-date");
const rightTableDate = document.querySelector("#right-table-date");
const centerTableDate = document.querySelector("#center-table-date");

//Romanazed dates from left table
const leftPosition1 = document.querySelector("#position1");
const leftPosition2 = document.querySelector("#position2");
const leftPosition3 = document.querySelector("#position3");
const leftPosition4 = document.querySelector("#position4");
const leftPosition5 = document.querySelector("#position5");
const leftPosition6 = document.querySelector("#position6");
const leftPosition7 = document.querySelector("#position7");
const leftPosition8 = document.querySelector("#position8");
const leftPosition12 = document.querySelector("#position12");
const leftPosition13 = document.querySelector("#position13");
const leftPosition14 = document.querySelector("#position14");

//
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
  const dataRight = {
    day: day2.value,
    month: month2.value,
    year: year2.value,
  };
  const dataCenter = {
    day: day3.value,
    month: month3.value,
    year: year3.value,
  };

  //Writing to document the date
  leftTableDate.innerHTML = `${dataRight.day}.${dataRight.month}.${dataRight.year}`;
  rightTableDate.innerHTML = `${dataLeft.day}.${dataLeft.month}.${dataLeft.year}`;
  centerTableDate.innerHTML = `${dataCenter.day}.${dataCenter.month}.${dataCenter.year}`;
  //Result of LEFT TABLE
  const leftTable = resultLeftTable(dataLeft);
  //romanizing & Writing to document
  leftPosition1.innerHTML = romanize(resultLeftTable.leftPosition1);
  leftPosition2.innerHTML = romanize(resultLeftTable.leftPosition2);
  leftPosition3.innerHTML = romanize(resultLeftTable.leftPosition3);
  leftPosition4.innerHTML = romanize(resultLeftTable.leftPosition4);
  leftPosition5.innerHTML = romanize(resultLeftTable.leftPosition5);
  leftPosition6.innerHTML = romanize(resultLeftTable.leftPosition6);
  leftPosition7.innerHTML = romanize(resultLeftTable.leftPosition7);
  leftPosition8.innerHTML = romanize(resultLeftTable.leftPosition8);
  leftPosition12.innerHTML = romanize(resultLeftTable.leftPosition12);
  leftPosition13.innerHTML = romanize(resultLeftTable.leftPosition13);
  leftPosition14.innerHTML = romanize(resultLeftTable.leftPosition14);
}

//---------------Counting the left TABLE------------
function sumYear(year) {
  return year
    .split("")
    .reduce((sum, current) =>
      Number(sum) + Number(current) > 22
        ? Number(sum) + Number(current) - 22
        : Number(sum) + Number(current)
    );
}

function resultLeftTable(data) {
  const leftPosition1 =
    Number(data.day) > 22 ? Number(data.day) - 22 : Number(data.day);
  const leftPosition2 = Number(data.month);
  const leftPosition3 = sumYear(data.year);
  const leftPosition4 =
    leftPosition1 + leftPosition2 > 22
      ? leftPosition1 + leftPosition2 - 22
      : leftPosition1 + leftPosition2;
  const leftPosition5 =
    leftPosition2 + leftPosition3 > 22
      ? leftPosition2 + leftPosition3 - 22
      : leftPosition2 + leftPosition3;
  const leftPosition6 =
    leftPosition4 + leftPosition5 > 22
      ? leftPosition4 + leftPosition5 - 22
      : leftPosition4 + leftPosition5;
  const leftPosition7 =
    leftPosition1 + leftPosition5 > 22
      ? leftPosition1 + leftPosition5 - 22
      : leftPosition1 + leftPosition5;
  const leftPosition8 =
    leftPosition2 + leftPosition6 > 22
      ? leftPosition2 + leftPosition6 - 22
      : leftPosition2 + leftPosition6;
  const leftPosition12 =
    leftPosition7 + leftPosition8 > 22
      ? leftPosition7 + leftPosition8 - 22
      : leftPosition7 + leftPosition8;
  const leftPosition13 =
    leftPosition1 + leftPosition4 + leftPosition6 > 22
      ? leftPosition1 + leftPosition4 + leftPosition6 - 22
      : leftPosition1 + leftPosition4 + leftPosition6;
  const leftPosition14 =
    leftPosition3 + leftPosition5 + leftPosition6 > 22
      ? leftPosition3 + leftPosition5 + leftPosition6 - 22
      : leftPosition3 + leftPosition5 + leftPosition6;

  return {
    leftPosition1,
    leftPosition2,
    leftPosition3,
    leftPosition4,
    leftPosition5,
    leftPosition6,
    leftPosition7,
    leftPosition8,
    leftPosition12,
    leftPosition13,
    leftPosition14,
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
