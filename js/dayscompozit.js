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

  const data = {
    day1: day1.value,
    month1: month1.value,
    year1: year1.value,

    day2: day2.value,
    month2: month2.value,
    year2: year2.value,
  };

  const result = resultPsiPotret(data);
  //left
  p1HtmlL.innerHTML = result.p1L;
  p2HtmlL.innerHTML = result.p2L;
  p3HtmlL.innerHTML = result.p3L;
  p4HtmlL.innerHTML = result.p4L;
  p5HtmlL.innerHTML = result.p5L;
  p6HtmlL.innerHTML = result.p6L;
  p7HtmlL.innerHTML = result.p7L;
  p8HtmlL.innerHTML = result.p8L;
  p12HtmlL.innerHTML = result.p12L;
  p13HtmlL.innerHTML = result.p13L;
  p14HtmlL.innerHTML = result.p14L;

  //right
  p1HtmlR.innerHTML = result.p1R;
  p2HtmlR.innerHTML = result.p2R;
  p3HtmlR.innerHTML = result.p3R;
  p4HtmlR.innerHTML = result.p4R;
  p5HtmlR.innerHTML = result.p5R;
  p6HtmlR.innerHTML = result.p6R;
  p7HtmlR.innerHTML = result.p7R;
  p8HtmlR.innerHTML = result.p8R;
  p12HtmlR.innerHTML = result.p12R;
  p13HtmlR.innerHTML = result.p13R;
  p14HtmlR.innerHTML = result.p14R;

  console.log("data", data);
  //   table.classList.remove("none");
}

function getValueSelect() {
  const value = select.options.selectedIndex + 1;
  console.log(value);
}

function resultPsiPotret(data) {
  const p1 = Number(data.day) > 22 ? Number(data.day) - 22 : Number(data.day);
  const p2 = Number(data.month);
  const p3 = data.year
    .split("")
    .reduce((sum, current) =>
      Number(sum) + Number(current) > 22
        ? Number(sum) + Number(current) - 22
        : Number(sum) + Number(current)
    );
  const p4 = p1 + p2 > 22 ? p1 + p2 - 22 : p1 + p2;
  const p5 = p2 + p3 > 22 ? p2 + p3 - 22 : p2 + p3;
  const p6 = p4 + p5 > 22 ? p4 + p5 - 22 : p4 + p5;
  const p7 = p1 + p5 > 22 ? p1 + p5 - 22 : p1 + p5;
  const p8 = p2 + p6 > 22 ? p2 + p6 - 22 : p2 + p6;
  const p12 = p7 + p8 > 22 ? p7 + p8 - 22 : p7 + p8;
  const p13 = p1 + p4 + p6 > 22 ? p1 + p4 + p6 - 22 : p1 + p4 + p6;
  const p14 = p3 + p5 + p6 > 22 ? p3 + p5 + p6 - 22 : p3 + p5 + p6;

  return {
    p1: romanize(p1),
    p2: romanize(p2),
    p3: romanize(p3),
    p4: romanize(p4),
    p5: romanize(p5),
    p6: romanize(p6),
    p7: romanize(p7),
    p8: romanize(p8),
    p12: romanize(p12),
    p13: romanize(p13),
    p14: romanize(p14),
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
