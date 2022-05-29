const select = document.querySelector("#select");
const form = document.querySelector("#form");

// получаем все позиции left
const p1HtmlR = document.querySelector("#p1R");
const p2HtmlR = document.querySelector("#p2R");
const p3HtmlR = document.querySelector("#p3R");
const p4HtmlR = document.querySelector("#p4R");
const p5HtmlR = document.querySelector("#p5R");
const p6HtmlR = document.querySelector("#p6R");
const p7HtmlR = document.querySelector("#p7R");
const p8HtmlR = document.querySelector("#p8R");
const p12HtmlR = document.querySelector("#p12R");
const p13HtmlR = document.querySelector("#p13R");
const p14HtmlR = document.querySelector("#p14R");

// получаем все позиции left
const p1HtmlL = document.querySelector("#p1L");
const p2HtmlL = document.querySelector("#p2L");
const p3HtmlL = document.querySelector("#p3L");
const p4HtmlL = document.querySelector("#p4L");
const p5HtmlL = document.querySelector("#p5L");
const p6HtmlL = document.querySelector("#p6L");
const p7HtmlL = document.querySelector("#p7L");
const p8HtmlL = document.querySelector("#p8L");
const p12HtmlL = document.querySelector("#p12L");
const p13HtmlL = document.querySelector("#p13L");
const p14HtmlL = document.querySelector("#p14L");

//
const all1Html = document.querySelector("#all1");
const all2Html = document.querySelector("#all2");
const all3Html = document.querySelector("#all3");
const all4Html = document.querySelector("#all4");
const all5Html = document.querySelector("#all5");
const all6Html = document.querySelector("#all6");
const all7Html = document.querySelector("#all7");
const all8Html = document.querySelector("#all8");
const all13Html = document.querySelector("#all13");
const all14Html = document.querySelector("#all14");

form.addEventListener("submit", getFormValue);
function getFormValue(event) {
  event.preventDefault();
  getValueSelect();

  // forms input
  const day1 = form.querySelector('[id="day1"]');
  const month1 = form.querySelector('[id="month1"]');
  const year1 = form.querySelector('[id="year1"]');
  //
  const day2 = form.querySelector('[id="day2"]');
  const month2 = form.querySelector('[id="month2"]');
  const year2 = form.querySelector('[id="year2"]');

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

  const dataAll = {
    day: Number(dataLeft.day) + Number(dataRight.day),
    month: Number(dataLeft.month) + Number(dataRight.month),
    year:
      sumYear(dataLeft.year) + sumYear(dataRight.year) > 22
        ? sumYear(dataLeft.year) + sumYear(dataRight.year) - 22
        : sumYear(dataLeft.year) + sumYear(dataRight.year),
  };

  const resultLeft = resultPsiPotretLeft(dataLeft);
  const resultRight = resultPsiPotretLeft(dataRight);
  const resultAll = resultPsiPotretAll(resultLeft, resultRight);
  //left
  p1HtmlL.innerHTML = romanize(resultLeft.p1);
  p2HtmlL.innerHTML = romanize(resultLeft.p2);
  p3HtmlL.innerHTML = romanize(resultLeft.p3);
  p4HtmlL.innerHTML = romanize(resultLeft.p4);
  p5HtmlL.innerHTML = romanize(resultLeft.p5);
  p6HtmlL.innerHTML = romanize(resultLeft.p6);
  p7HtmlL.innerHTML = romanize(resultLeft.p7);
  p8HtmlL.innerHTML = romanize(resultLeft.p8);
  p12HtmlL.innerHTML = romanize(resultLeft.p12);
  p13HtmlL.innerHTML = romanize(resultLeft.p13);
  p14HtmlL.innerHTML = romanize(resultLeft.p14);

  //right
  p1HtmlR.innerHTML = romanize(resultRight.p1);
  p2HtmlR.innerHTML = romanize(resultRight.p2);
  p3HtmlR.innerHTML = romanize(resultRight.p3);
  p4HtmlR.innerHTML = romanize(resultRight.p4);
  p5HtmlR.innerHTML = romanize(resultRight.p5);
  p6HtmlR.innerHTML = romanize(resultRight.p6);
  p7HtmlR.innerHTML = romanize(resultRight.p7);
  p8HtmlR.innerHTML = romanize(resultRight.p8);
  p12HtmlR.innerHTML = romanize(resultRight.p12);
  p13HtmlR.innerHTML = romanize(resultRight.p13);
  p14HtmlR.innerHTML = romanize(resultRight.p14);

  //all table
  all1Html.innerHTML = resultAll.p1;
  all2Html.innerHTML = resultAll.p2;
  all3Html.innerHTML = resultAll.p3;
  all4Html.innerHTML = resultAll.p4;
  all5Html.innerHTML = resultAll.p5;
  all6Html.innerHTML = resultAll.p6;
  all7Html.innerHTML = resultAll.p7;
  all8Html.innerHTML = resultAll.p8;
  all13Html.innerHTML = resultAll.p13;
  all14Html.innerHTML = resultAll.p14;

  //   table.classList.remove("none");
}

function getValueSelect() {
  const value = select.options.selectedIndex + 1;
  console.log(value);
}

function sumYear(year) {
  return year
    .split("")
    .reduce((sum, current) =>
      Number(sum) + Number(current) > 22
        ? Number(sum) + Number(current) - 22
        : Number(sum) + Number(current)
    );
}

function resultPsiPotretAll(left, right) {
  console.log(left, right);
  const p1 =
    left.p1 + right.p1 > 22 ? left.p1 + right.p1 - 22 : left.p1 + right.p1;
  const p2 =
    left.p2 + right.p2 > 22 ? left.p2 + right.p2 - 22 : left.p2 + right.p2;
  const p3 =
    left.p3 + right.p3 > 22 ? left.p3 + right.p3 - 22 : left.p3 + right.p3;
  const p4 =
    left.p4 + right.p4 > 22 ? left.p4 + right.p4 - 22 : left.p4 + right.p4;
  const p5 =
    left.p5 + right.p5 > 22 ? left.p5 + right.p5 - 22 : left.p5 + right.p5;
  const p6 =
    left.p6 + right.p6 > 22 ? left.p6 + right.p6 - 22 : left.p6 + right.p6;
  const p7 =
    left.p7 + right.p7 > 22 ? left.p7 + right.p7 - 22 : left.p7 + right.p7;
  const p8 =
    left.p8 + right.p8 > 22 ? left.p8 + right.p8 - 22 : left.p8 + right.p8;
  const p13 =
    left.p13 + right.p13 > 22
      ? left.p13 + right.p13 - 22
      : left.p13 + right.p13;
  const p14 =
    left.p14 + right.p14 > 22
      ? left.p14 + right.p14 - 22
      : left.p14 + right.p14;

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

function resultPsiPotretLeft(data) {
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
