const table = document.querySelector("#table");
const form = document.querySelector("#form");
const date1 = document.querySelector("#date1");
const date2 = document.querySelector("#date2");
const date3 = document.querySelector("#date3");

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

//All ответы сложения LEFT + Right
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

//Что с чем сложилось -----------------------------------------------------------------
//LEFT
const leftAnswer4 = document.querySelector("#leftAnswer4");
const leftAnswer5 = document.querySelector("#leftAnswer5");
const leftAnswer6 = document.querySelector("#leftAnswer6");
const leftAnswer7 = document.querySelector("#leftAnswer7");
const leftAnswer8 = document.querySelector("#leftAnswer8");
const leftAnswer12 = document.querySelector("#leftAnswer12");
const leftAnswer13 = document.querySelector("#leftAnswer13");
const leftAnswer14 = document.querySelector("#leftAnswer14");
//RIGHT
const rightAnswer4 = document.querySelector("#rightAnswer4");
const rightAnswer5 = document.querySelector("#rightAnswer5");
const rightAnswer6 = document.querySelector("#rightAnswer6");
const rightAnswer7 = document.querySelector("#rightAnswer7");
const rightAnswer8 = document.querySelector("#rightAnswer8");
const rightAnswer12 = document.querySelector("#rightAnswer12");
const rightAnswer13 = document.querySelector("#rightAnswer13");
const rightAnswer14 = document.querySelector("#rightAnswer14");
//Bottom
const bottomAnswer1 = document.querySelector("#bottomAnswer1");
const bottomAnswer2 = document.querySelector("#bottomAnswer2");
const bottomAnswer3 = document.querySelector("#bottomAnswer3");
const bottomAnswer4 = document.querySelector("#bottomAnswer4");
const bottomAnswer5 = document.querySelector("#bottomAnswer5");
const bottomAnswer6 = document.querySelector("#bottomAnswer6");
const bottomAnswer7 = document.querySelector("#bottomAnswer7");
const bottomAnswer8 = document.querySelector("#bottomAnswer8");
const bottomAnswer13 = document.querySelector("#bottomAnswer13");
const bottomAnswer14 = document.querySelector("#bottomAnswer14");

form.addEventListener("submit", getFormValue);
function getFormValue(event) {
  event.preventDefault();

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

  leftAnswer4.innerHTML = `${romanize(resultLeft.p1)} + ${romanize(
    resultLeft.p2
  )}`;

  leftAnswer5.innerHTML = `${romanize(resultLeft.p2)} + ${romanize(
    resultLeft.p3
  )}`;

  leftAnswer6.innerHTML = `${romanize(resultLeft.p4)} + ${romanize(
    resultLeft.p5
  )}`;

  leftAnswer7.innerHTML = `${romanize(resultLeft.p1)} + ${romanize(
    resultLeft.p5
  )}`;

  leftAnswer8.innerHTML = `${romanize(resultLeft.p2)} + ${romanize(
    resultLeft.p6
  )}`;

  leftAnswer12.innerHTML = `${romanize(resultLeft.p7)} + ${romanize(
    resultLeft.p8
  )}`;

  leftAnswer13.innerHTML = `${romanize(resultLeft.p1)} + ${romanize(
    resultLeft.p4
  )} + ${romanize(resultLeft.p6)}`;

  leftAnswer14.innerHTML = `${romanize(resultLeft.p3)} + ${romanize(
    resultLeft.p5
  )} + ${romanize(resultLeft.p6)}`;

  //   right answer

  rightAnswer4.innerHTML = `${romanize(resultRight.p1)} + ${romanize(
    resultRight.p2
  )}`;

  rightAnswer5.innerHTML = `${romanize(resultRight.p2)} + ${romanize(
    resultRight.p3
  )}`;

  rightAnswer6.innerHTML = `${romanize(resultRight.p4)} + ${romanize(
    resultRight.p5
  )}`;

  rightAnswer7.innerHTML = `${romanize(resultRight.p1)} + ${romanize(
    resultRight.p5
  )}`;

  rightAnswer8.innerHTML = `${romanize(resultRight.p2)} + ${romanize(
    resultRight.p6
  )}`;

  rightAnswer12.innerHTML = `${romanize(resultRight.p7)} + ${romanize(
    resultRight.p8
  )}`;

  rightAnswer13.innerHTML = `${romanize(resultRight.p1)} + ${romanize(
    resultRight.p4
  )} + ${romanize(resultRight.p6)}`;

  rightAnswer14.innerHTML = `${romanize(resultRight.p3)} + ${romanize(
    resultRight.p5
  )} + ${romanize(resultRight.p6)}`;

  //   bottom Answer
  bottomAnswer1.innerHTML = `${romanize(resultLeft.p1)} + ${romanize(
    resultRight.p1
  )}`;
  bottomAnswer2.innerHTML = `${romanize(resultLeft.p2)} + ${romanize(
    resultRight.p2
  )}`;
  bottomAnswer3.innerHTML = `${romanize(resultLeft.p3)} + ${romanize(
    resultRight.p3
  )}`;
  bottomAnswer4.innerHTML = `${romanize(resultLeft.p4)} + ${romanize(
    resultRight.p4
  )}`;
  bottomAnswer5.innerHTML = `${romanize(resultLeft.p5)} + ${romanize(
    resultRight.p5
  )}`;
  bottomAnswer6.innerHTML = `${romanize(resultLeft.p6)} + ${romanize(
    resultRight.p6
  )}`;
  bottomAnswer7.innerHTML = `${romanize(resultLeft.p7)} + ${romanize(
    resultRight.p7
  )}`;
  bottomAnswer8.innerHTML = `${romanize(resultLeft.p8)} + ${romanize(
    resultRight.p8
  )}`;
  bottomAnswer13.innerHTML = `${romanize(resultLeft.p13)} + ${romanize(
    resultRight.p13
  )}`;
  bottomAnswer14.innerHTML = `${romanize(resultLeft.p14)} + ${romanize(
    resultRight.p14
  )}`;

  date1.innerHTML = `${dataRight.day}.${dataRight.month}.${dataRight.year}`;
  date2.innerHTML = `${dataLeft.day}.${dataLeft.month}.${dataLeft.year}`;
  date3.innerHTML = `${dataRight.day}.${dataRight.month}.${dataRight.year} и ${dataLeft.day}.${dataLeft.month}.${dataLeft.year}`;

  table.classList.remove("none");
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
