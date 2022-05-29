const form = document.querySelector("#form");
const table = document.querySelector("#table");
// получаем все позиции
const p1Html = document.querySelector("#p1");
const p2Html = document.querySelector("#p2");
const p3Html = document.querySelector("#p3");
const p4Html = document.querySelector("#p4");
const p5Html = document.querySelector("#p5");
const p6Html = document.querySelector("#p6");
const p7Html = document.querySelector("#p7");
const p8Html = document.querySelector("#p8");
const p12Html = document.querySelector("#p12");
const p13Html = document.querySelector("#p13");
const p14Html = document.querySelector("#p14");
//Полyчаем sub
const subP13 = document.querySelector("#sub-p13");

const date = document.querySelector("#date");

form.addEventListener("submit", getFormValue);
function getFormValue(event) {
  event.preventDefault();
  table.classList.remove("none");
  let day = form.querySelector('[name="day"]');
  let month = form.querySelector('[name="month"]');
  let year = form.querySelector('[name="year"]');

  const data = {
    day: day.value,
    month: month.value,
    year: year.value,
  };
  const result = resultPsiPotret(data);
  p1Html.innerHTML = result.p1;
  p2Html.innerHTML = result.p2;
  p3Html.innerHTML = result.p3;
  p4Html.innerHTML = result.p4;
  p5Html.innerHTML = result.p5;
  p6Html.innerHTML = result.p6;
  p7Html.innerHTML = result.p7;
  p8Html.innerHTML = result.p8;
  p12Html.innerHTML = result.p12;
  p13Html.innerHTML = result.p13;
  p14Html.innerHTML = result.p14;

  date.innerHTML = `${data.day}.${data.month}.${data.year}`;
  //   console.log("data", );
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
