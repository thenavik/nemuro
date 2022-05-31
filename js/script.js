const form = document.querySelector("#form");
const table = document.querySelector("#table");
const tableMiddle = document.querySelector("#tableMiddle");

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

const topAnswer4 = document.querySelector("#topAnswer4");
const topAnswer5 = document.querySelector("#topAnswer5");
const topAnswer6 = document.querySelector("#topAnswer6");
const topAnswer7 = document.querySelector("#topAnswer7");
const topAnswer8 = document.querySelector("#topAnswer8");
const topAnswer12 = document.querySelector("#topAnswer12");
const topAnswer13 = document.querySelector("#topAnswer13");
const topAnswer14 = document.querySelector("#topAnswer14");

// Отдельные позиции (Individual items)

const gray9 = document.querySelector("#gray9");
const gray10 = document.querySelector("#gray10");
const gray11 = document.querySelector("#gray11");
const gray15 = document.querySelector("#gray15");
const gray16 = document.querySelector("#gray16");
const gray17 = document.querySelector("#gray17");
const gray18 = document.querySelector("#gray18");
const gray19 = document.querySelector("#gray19");
const gray20 = document.querySelector("#gray20");
const gray21 = document.querySelector("#gray21");

// result Individual items
const grayAnswer9 = document.querySelector("#grayAnswer9");
const grayAnswer10 = document.querySelector("#grayAnswer10");
const grayAnswer11 = document.querySelector("#grayAnswer11");
const grayAnswer15 = document.querySelector("#grayAnswer15");
const grayAnswer16 = document.querySelector("#grayAnswer16");
const grayAnswer17 = document.querySelector("#grayAnswer17");
const grayAnswer18 = document.querySelector("#grayAnswer18");
const grayAnswer19 = document.querySelector("#grayAnswer19");
const grayAnswer20 = document.querySelector("#grayAnswer20");
const grayAnswer21 = document.querySelector("#grayAnswer21");

// taro
const taroArr1 = document.querySelector("#taroArr1");

// console.log("ff", taroArr1.children[3]);
//Полyчаем sub
const subP13 = document.querySelector("#sub-p13");

const date = document.querySelector("#date");

const taroTable = [
  {
    position: 1,
    sex: "М",
    zodiac: "/U+264A",
    time: "44Д",
    element: "../img/air.jpg",
    logic: "Л",
    aktPas: "А",
    soul: "Д",
    electric: "Э",
  },
  {
    position: 2,
    sex: "Ж",
    zodiac: "/263D",
    time: "14Д",
    element: "../img/water.jpg",
    logic: "И",
    aktPas: "П",
    soul: "Д",
    electric: "М",
  },
  {
    position: 3,
    sex: "Ж",
    zodiac: "/U+2640",
    time: "2М",
    element: "../img/earth.jpg",
    logic: "Л",
    aktPas: "П",
    soul: "М",
    electric: "М",
  },
  {
    position: 4,
    sex: "М",
    zodiac: "/U+2642",
    time: "11М",
    element: "../img/fire.jpg",
    logic: "Л",
    aktPas: "А",
    soul: "М",
    electric: "Э",
  },
  {
    position: 5,
    sex: "М",
    zodiac: "/U+2644",
    time: "15Л",
    element: "../img/air.jpg",
    logic: "И",
    aktPas: "А",
    soul: "М",
    electric: "М",
  },
  {
    position: 6,
    sex: "Н",
    zodiac: "/U+2649",
    time: "2М",
    element: "../img/water.jpg",
    logic: "И",
    aktPas: "А",
    soul: "М",
    electric: "М",
  },
  {
    position: 7,
    sex: "М",
    zodiac: "/U+26E2",
    time: "42Г",
    element: "../img/fire.jpg",
    logic: "Л",
    aktPas: "А",
    soul: "М",
    electric: "Э",
  },
  {
    position: 8,
    sex: "Ж",
    zodiac: "/U+264E",
    time: "6Л",
    element: "../img/air.jpg",
    logic: "Л",
    aktPas: "П",
    soul: "Д",
    electric: "М",
  },
  {
    position: 9,
    sex: "Н",
    zodiac: "/U+2651",
    time: "15Л",
    element: "../img/earth.jpg",
    logic: "И",
    aktPas: "А",
    soul: "Д",
    electric: "М",
  },
  {
    position: 10,
    sex: "Н",
    zodiac: "/U+264F",
    time: "6Л",
    element: "../img/earth.jpg",
    logic: "Л",
    aktPas: "А",
    soul: "М",
    electric: "Э",
  },
  {
    position: 11,
    sex: "М",
    zodiac: "/U+263C",
    time: "6М",
    element: "../img/fire.jpg",
    logic: "И",
    aktPas: "А",
    soul: "М",
    electric: "Э",
  },
  {
    position: 12,
    sex: "Н",
    zodiac: "/U+2BC9",
    time: "81Г",
    element: "../img/water.jpg",
    logic: "И",
    aktPas: "П",
    soul: "Д",
    electric: "М",
  },
  {
    position: 13,
    sex: "Ж",
    zodiac: "/U+2BD3",
    time: "Н",
    element: "../img/fire.jpg",
    logic: "И",
    aktPas: "А",
    soul: "Д",
    electric: "Э",
  },
  {
    position: 14,
    sex: "Н",
    zodiac: "/U+264D",
    time: "44Д",
    element: "../img/air.jpg",
    logic: "Л",
    aktPas: "П",
    soul: "Д",
    electric: "М",
  },
  {
    position: 15,
    sex: "М",
    zodiac: "/U+2653",
    time: "Н",
    element: "../img/fire.jpg",
    logic: "И",
    aktPas: "А",
    soul: "М",
    electric: "Э",
  },
  {
    position: 16,
    sex: "Н",
    zodiac: "/U+2650",
    time: "15Л",
    element: "../img/earth.jpg",
    logic: "Л",
    aktPas: "А",
    soul: "М",
    electric: "М",
  },
  {
    position: 17,
    sex: "Ж",
    zodiac: "/U+263F",
    time: "44Д",
    element: "../img/water.jpg",
    logic: "И",
    aktPas: "А",
    soul: "Д",
    electric: "М",
  },
  {
    position: 18,
    sex: "Ж",
    zodiac: "/U+264B",
    time: "28Д",
    element: "../img/water.jpg",
    logic: "И",
    aktPas: "П",
    soul: "Д",
    electric: "М",
  },
  {
    position: 19,
    sex: "М",
    zodiac: "/U+264C",
    time: "1Г",
    element: "../img/fire.jpg",
    logic: "Л",
    aktPas: "А",
    soul: "М",
    electric: "Э",
  },
  {
    position: 20,
    sex: "Н",
    zodiac: "/U+2643",
    time: "6Л",
    element: "../img/earth.jpg",
    logic: "Л",
    aktPas: "П",
    soul: "Д",
    electric: "М",
  },
  {
    position: 21,
    sex: "Н",
    zodiac: "/U+2652",
    time: "42Г",
    element: "../img/air.jpg",
    logic: "И",
    aktPas: "А",
    soul: "М",
    electric: "Э",
  },
  {
    position: 22,
    sex: "Н",
    zodiac: "/U+2648",
    time: "1М",
    element: "../img/fire.jpg",
    logic: "И",
    aktPas: "А",
    soul: "М",
    electric: "Э",
  },
];

form.addEventListener("submit", getFormValue);
function getFormValue(event) {
  event.preventDefault();
  table.classList.remove("none");
  tableMiddle.classList.remove("none");
  let day = form.querySelector('[name="day"]');
  let month = form.querySelector('[name="month"]');
  let year = form.querySelector('[name="year"]');

  const data = {
    day: day.value,
    month: month.value,
    year: year.value,
  };
  const result = resultPsiPotret(data);
  p1Html.innerHTML = romanize(result.p1);
  p2Html.innerHTML = romanize(result.p2);
  p3Html.innerHTML = romanize(result.p3);
  p4Html.innerHTML = romanize(result.p4);
  p5Html.innerHTML = romanize(result.p5);
  p6Html.innerHTML = romanize(result.p6);
  p7Html.innerHTML = romanize(result.p7);
  p8Html.innerHTML = romanize(result.p8);
  p12Html.innerHTML = romanize(result.p12);
  p13Html.innerHTML = romanize(result.p13);
  p14Html.innerHTML = romanize(result.p14);

  date.innerHTML = `${data.day}.${data.month}.${data.year}`;

  topAnswer4.innerHTML = `${romanize(result.p1)} + ${romanize(result.p2)}`;
  topAnswer5.innerHTML = `${romanize(result.p2)} + ${romanize(result.p3)}`;
  topAnswer6.innerHTML = `${romanize(result.p4)} + ${romanize(result.p5)}`;
  topAnswer7.innerHTML = `${romanize(result.p1)} + ${romanize(result.p5)}`;
  topAnswer8.innerHTML = `${romanize(result.p2)} + ${romanize(result.p6)}`;
  topAnswer12.innerHTML = `${romanize(result.p7)} + ${romanize(result.p8)}`;
  topAnswer13.innerHTML = `${romanize(result.p1)} + ${romanize(
    result.p4
  )} + ${romanize(result.p6)}`;
  topAnswer14.innerHTML = `${romanize(result.p3)} + ${romanize(
    result.p5
  )} + ${romanize(result.p6)}`;

  const gray9Res =
    (result.p2 - result.p1 > 22
      ? result.p2 - result.p1 - 22
      : result.p2 - result.p1) < 0
      ? result.p1 - result.p2 > 22
        ? result.p1 - result.p2 - 22
        : result.p1 - result.p2 > 22
        ? result.p1 - result.p2 - 22
        : result.p1 - result.p2
      : result.p2 - result.p1;
  const gray10Res =
    (result.p3 - result.p2 > 22
      ? result.p3 - result.p2 - 22
      : result.p3 - result.p2) < 0
      ? result.p2 - result.p3 > 22
        ? result.p2 - result.p3 - 22
        : result.p2 - result.p3
      : result.p3 - result.p2 > 22
      ? result.p3 - result.p2 - 22
      : result.p3 - result.p2;
  const gray11Res =
    gray9Res - gray10Res < 0 ? gray10Res - gray9Res : gray9Res - gray10Res;

  gray9.innerHTML = romanize(gray9Res);
  gray10.innerHTML = romanize(gray10Res);
  gray11.innerHTML = romanize(gray11Res);
  gray15.innerHTML = romanize(gray9Res + gray10Res + gray11Res);
  gray16.innerHTML = romanize(
    result.p1 + result.p3 + result.p4 + result.p5 > 22
      ? result.p1 + result.p3 + result.p4 + result.p5 - 22 > 22
        ? result.p1 + result.p3 + result.p4 + result.p5 - 22 - 22
        : result.p1 + result.p3 + result.p4 + result.p5 - 22
      : result.p1 + result.p3 + result.p4 + result.p5
  );
  gray17.innerHTML = romanize(
    gray11Res + result.p6 > 22
      ? gray11Res + result.p6 - 22
      : gray11Res + result.p6
  );
  gray18.innerHTML = romanize(
    gray11Res + result.p8 > 22
      ? gray11Res + result.p8 - 22
      : gray11Res + result.p8
  );
  gray19.innerHTML = romanize(
    result.p4 + result.p6 > 22
      ? result.p4 + result.p6 - 22
      : result.p4 + result.p6
  );
  gray20.innerHTML = romanize(
    result.p5 + result.p6 > 22
      ? result.p5 + result.p6 - 22
      : result.p5 + result.p6
  );
  gray21.innerHTML = romanize(
    result.p1 + result.p2 + result.p3 + result.p4 + result.p5 + result.p6 > 22
      ? result.p1 +
          result.p2 +
          result.p3 +
          result.p4 +
          result.p5 +
          result.p6 -
          22 >
        22
        ? result.p1 +
          result.p2 +
          result.p3 +
          result.p4 +
          result.p5 +
          result.p6 -
          22 -
          22
        : result.p1 +
          result.p2 +
          result.p3 +
          result.p4 +
          result.p5 +
          result.p6 -
          22
      : result.p1 + result.p2 + result.p3 + result.p4 + result.p5 + result.p6
  );

  grayAnswer9.innerHTML = `${romanize(result.p2)} - ${romanize(result.p1)}`;
  grayAnswer10.innerHTML = `${romanize(result.p3)} - ${romanize(result.p2)}`;
  grayAnswer11.innerHTML = `${romanize(gray10Res)} - ${romanize(gray9Res)}`;
  grayAnswer15.innerHTML = `${romanize(gray9Res)} + ${romanize(
    gray10Res
  )} + ${romanize(gray11Res)}`;
  grayAnswer16.innerHTML = `${romanize(result.p1)} + ${romanize(
    result.p3
  )} + ${romanize(result.p4)} + ${romanize(result.p5)}`;
  grayAnswer17.innerHTML = `${romanize(gray11Res)} + ${romanize(result.p6)}`;
  grayAnswer18.innerHTML = `${romanize(gray11Res)} + ${romanize(result.p8)}`;
  grayAnswer19.innerHTML = `${romanize(result.p4)} + ${romanize(result.p6)}`;
  grayAnswer20.innerHTML = `${romanize(result.p5)} + ${romanize(result.p6)}`;
  grayAnswer21.innerHTML = `${romanize(result.p1)} + ${romanize(
    result.p2
  )} + ${romanize(result.p3)} + ${romanize(result.p4)} + ${romanize(
    result.p5
  )} + ${romanize(result.p6)}`;

  function filtrTaroTable(number) {
    return taroTable.filter((el) => el.position == number);
  }
  // console.log("ff", filtrTaroTable(result.p1)[0].sex);
  taroArr1.children[0].innerHTML = filtrTaroTable(result.p1)[0].sex;
  taroArr1.children[1].innerHTML = filtrTaroTable(result.p1)[0].zodiac;
  taroArr1.children[1].title = filtrTaroTable(result.p1)[0].zodiac;
  taroArr1.children[2].children[0].src = filtrTaroTable(result.p1)[0].element;
  // taroArr1.children[3].innerHTML = filtrTaroTable(result.p1)[0].sex;
  // taroArr1.children[2].innerHTML = filtrTaroTable(result.p1)[0].sex;
  // taroArr1.children[3].innerHTML = filtrTaroTable(result.p1)[0].sex;
  // taroArr1.children[4].innerHTML = filtrTaroTable(result.p1)[0].sex;

  // {
  //   position: 1,
  //   sex: "М",
  //   zodiac: "/U+264A",
  //   time: "44Д",
  //   element: "../img/air.jpg",
  //   logic: "Л",
  //   aktPas: "А",
  //   soul: "Д",
  //   electric: "Э",
  // }
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
