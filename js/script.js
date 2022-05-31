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
const taroArr2 = document.querySelector("#taroArr2");
const taroArr3 = document.querySelector("#taroArr3");
const taroArr4 = document.querySelector("#taroArr4");
const taroArr5 = document.querySelector("#taroArr5");
const taroArr6 = document.querySelector("#taroArr6");

// console.log("ff", taroArr1.children[3]);
//Полyчаем sub
const subP13 = document.querySelector("#sub-p13");

const date = document.querySelector("#date");

const taroTable = [
  {
    position: 1,
    sex: {
      type: "М",
      name: "Муж",
    },
    zodiac: {
      type: "&#9807;",
      name: "Близнецы",
    },
    time: "44д",
    element: "../img/air.jpg",
    logic: {
      type: "Л",
      name: "Логика",
    },
    aktPas: {
      type: "А",
      name: "Актив",
    },
    soul: {
      type: "Д",
      name: "Душа",
    },
    electric: {
      type: "Э",
      name: "Электр",
    },
  },
  {
    position: 2,
    sex: {
      type: "Ж",
      name: "Жен",
    },
    zodiac: {
      type: "&#9789;",
      name: "Луна",
    },
    time: "14д",
    element: "../img/water.jpg",
    logic: {
      type: "И",
      name: "Интуициая",
    },
    aktPas: {
      type: "П",
      name: "Пассив",
    },
    soul: {
      type: "Д",
      name: "Душа",
    },
    electric: {
      type: "М",
      name: "Магнет",
    },
  },
  {
    position: 3,
    sex: {
      type: "Ж",
      name: "Жен",
    },
    zodiac: {
      type: "&#9792;",
      name: "Венера",
    },
    time: "2м",
    element: "../img/earth.jpg",
    logic: {
      type: "Л",
      name: "Логика",
    },
    aktPas: {
      type: "П",
      name: "Пассив",
    },
    soul: {
      type: "М",
      name: "Матер",
    },
    electric: {
      type: "М",
      name: "Магнет",
    },
  },
  {
    position: 4,
    sex: {
      type: "М",
      name: "Муж",
    },
    zodiac: {
      type: "&#9794;",
      name: "Марс",
    },
    time: "11м",
    element: "../img/fire.jpg",
    logic: {
      type: "Л",
      name: "Логика",
    },
    aktPas: {
      type: "А",
      name: "Актив",
    },
    soul: {
      type: "М",
      name: "Матер",
    },
    electric: {
      type: "Э",
      name: "Электр",
    },
  },
  {
    position: 5,
    sex: {
      type: "М",
      name: "Муж",
    },
    zodiac: {
      type: "&#9796;",
      name: "Сатурн",
    },
    time: "15л",
    element: "../img/air.jpg",
    logic: {
      type: "И",
      name: "Интуиция",
    },
    aktPas: {
      type: "А",
      name: "Актив",
    },
    soul: {
      type: "М",
      name: "Матер",
    },
    electric: {
      type: "М",
      name: "Магнет",
    },
  },
  {
    position: 6,
    sex: {
      type: "Н",
      name: "Нейтральный",
    },
    zodiac: {
      type: "&#9801;",
      name: "Телец",
    },
    time: "2м",
    element: "../img/water.jpg",
    logic: {
      type: "И",
      name: "Интуиция",
    },
    aktPas: {
      type: "А",
      name: "Актив",
    },
    soul: {
      type: "М",
      name: "Матер",
    },
    electric: {
      type: "М",
      name: "Магнет",
    },
  },
  {
    position: 7,
    sex: {
      type: "М",
      name: "Муж",
    },
    zodiac: {
      type: "&#9797;",
      name: "Уран",
    },
    time: "42г",
    element: "../img/fire.jpg",
    logic: {
      type: "Л",
      name: "Логика",
    },
    aktPas: {
      type: "А",
      name: "Актив",
    },
    soul: {
      type: "М",
      name: "Матер",
    },
    electric: {
      type: "Э",
      name: "Электр",
    },
  },
  {
    position: 8,
    sex: {
      type: "Ж",
      name: "Жен",
    },
    zodiac: {
      type: "&#9806;",
      name: "Весы",
    },
    time: "6л",
    element: "../img/air.jpg",
    logic: {
      type: "Л",
      name: "Логика",
    },
    aktPas: {
      type: "П",
      name: "Пассив",
    },
    soul: {
      type: "Д",
      name: "Душа",
    },
    electric: {
      type: "М",
      name: "Магнет",
    },
  },
  {
    position: 9,
    sex: {
      type: "Н",
      name: "Нейтральный",
    },
    zodiac: {
      type: "&#9809;",
      name: "Козерог",
    },
    time: "15л",
    element: "../img/earth.jpg",
    logic: {
      type: "И",
      name: "Интуиция",
    },
    aktPas: {
      type: "А",
      name: "Актив",
    },
    soul: {
      type: "Д",
      name: "Душа",
    },
    electric: {
      type: "М",
      name: "Магнет",
    },
  },
  {
    position: 10,
    sex: {
      type: "Н",
      name: "Нейтральный",
    },
    zodiac: {
      type: "&#9807;",
      name: "Скорпион",
    },
    time: "6л",
    element: "../img/earth.jpg",
    logic: {
      type: "Л",
      name: "Логика",
    },
    aktPas: {
      type: "А",
      name: "Актив",
    },
    soul: {
      type: "М",
      name: "Матер",
    },
    electric: {
      type: "Э",
      name: "Электр",
    },
  },
  {
    position: 11,
    sex: {
      type: "М",
      name: "Муж",
    },
    zodiac: {
      type: "&#127779;",
      name: "Солнце",
    },
    time: "6м",
    element: "../img/fire.jpg",
    logic: {
      type: "И",
      name: "Интуиция",
    },
    aktPas: {
      type: "А",
      name: "Актив",
    },
    soul: {
      type: "М",
      name: "Матер",
    },
    electric: {
      type: "Э",
      name: "Электр",
    },
  },
  {
    position: 12,
    sex: {
      type: "Н",
      name: "Нейтральный",
    },
    zodiac: {
      type: "&#9798;",
      name: "Нептун",
    },
    time: "81г",
    element: "../img/water.jpg",
    logic: {
      type: "И",
      name: "Интуиция",
    },
    aktPas: {
      type: "П",
      name: "Пассив",
    },
    soul: {
      type: "Д",
      name: "Душа",
    },
    electric: {
      type: "М",
      name: "Магнет",
    },
  },
  {
    position: 13,
    sex: {
      type: "Ж",
      name: "Жен",
    },
    zodiac: {
      type: "&#9799;",
      name: "Плутон",
    },
    time: "н",
    element: "../img/fire.jpg",
    logic: {
      type: "И",
      name: "Интуиция",
    },
    aktPas: {
      type: "А",
      name: "Актив",
    },
    soul: {
      type: "Д",
      name: "Душа",
    },
    electric: {
      type: "Э",
      name: "Электр",
    },
  },
  {
    position: 14,
    sex: {
      type: "Н",
      name: "Нейтральный",
    },
    zodiac: {
      type: "&#9805;",
      name: "Дева",
    },
    time: "44д",
    element: "../img/air.jpg",
    logic: {
      type: "Л",
      name: "Логика",
    },
    aktPas: {
      type: "П",
      name: "Пассив",
    },
    soul: {
      type: "Д",
      name: "Душа",
    },
    electric: {
      type: "М",
      name: "Магнет",
    },
  },
  {
    position: 15,
    sex: {
      type: "М",
      name: "Муж",
    },
    zodiac: {
      type: "&#9811;",
      name: "Рыбы",
    },
    time: "н",
    element: "../img/fire.jpg",
    logic: {
      type: "И",
      name: "Интуиция",
    },
    aktPas: {
      type: "А",
      name: "Акт",
    },
    soul: {
      type: "М",
      name: "Матер",
    },
    electric: {
      type: "Э",
      name: "Электр",
    },
  },
  {
    position: 16,
    sex: {
      type: "Н",
      name: "Нейтральный",
    },
    zodiac: {
      type: "&#9808;",
      name: "Стрелец",
    },
    time: "15л",
    element: "../img/earth.jpg",
    logic: {
      type: "Л",
      name: "Логика",
    },
    aktPas: {
      type: "А",
      name: "Актив",
    },
    soul: {
      type: "М",
      name: "Матер",
    },
    electric: {
      type: "М",
      name: "Магнет",
    },
  },
  {
    position: 17,
    sex: {
      type: "Ж",
      name: "Жен",
    },
    zodiac: {
      type: "&#9791;",
      name: "Меркурий",
    },
    time: "44д",
    element: "../img/water.jpg",
    logic: {
      type: "И",
      name: "Интуиция",
    },
    aktPas: {
      type: "А",
      name: "Актив",
    },
    soul: {
      type: "Д",
      name: "Душа",
    },
    electric: {
      type: "М",
      name: "Магнет",
    },
  },
  {
    position: 18,
    sex: {
      type: "Ж",
      name: "Жен",
    },
    zodiac: {
      type: "&#9803;",
      name: "Рак",
    },
    time: "28д",
    element: "../img/water.jpg",
    logic: {
      type: "И",
      name: "Интуиция",
    },
    aktPas: {
      type: "П",
      name: "Пассив",
    },
    soul: {
      type: "Д",
      name: "Душа",
    },
    electric: {
      type: "М",
      name: "Магнет",
    },
  },
  {
    position: 19,
    sex: {
      type: "М",
      name: "Муж",
    },
    zodiac: {
      type: "&#9804;",
      name: "Лев",
    },
    time: "1г",
    element: "../img/fire.jpg",
    logic: {
      type: "Л",
      name: "Логика",
    },
    aktPas: {
      type: "А",
      name: "Актив",
    },
    soul: {
      type: "М",
      name: "Матер",
    },
    electric: {
      type: "М",
      name: "Магнет",
    },
  },
  {
    position: 20,
    sex: {
      type: "Н",
      name: "Нейтральный",
    },
    zodiac: {
      type: "&#9795;",
      name: "Юпитер",
    },
    time: "6л",
    element: "../img/earth.jpg",
    logic: {
      type: "Л",
      name: "Логика",
    },
    aktPas: {
      type: "П",
      name: "Пассив",
    },
    soul: {
      type: "Д",
      name: "Душа",
    },
    electric: {
      type: "М",
      name: "Магнет",
    },
  },
  {
    position: 21,
    sex: {
      type: "Н",
      name: "Нейтральный",
    },
    zodiac: {
      type: "&#9810;",
      name: "Водолей",
    },
    time: "42г",
    element: "../img/air.jpg",
    logic: {
      type: "И",
      name: "Интуиция",
    },
    aktPas: {
      type: "А",
      name: "Актив",
    },
    soul: {
      type: "М",
      name: "Матер",
    },
    electric: {
      type: "Э",
      name: "Электр",
    },
  },
  {
    position: 22,
    sex: {
      type: "Н",
      name: "Нейтральный",
    },
    zodiac: {
      type: "&#9800;",
      name: "Овен",
    },
    time: "1м",
    element: "../img/fire.jpg",
    logic: {
      type: "И",
      name: "Интуиция",
    },
    aktPas: {
      type: "А",
      name: "Актив",
    },
    soul: {
      type: "М",
      name: "Матер",
    },
    electric: {
      type: "Э",
      name: "Электр",
    },
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

  function addToTaroTable(taro, positionTaro) {
    taro.children[0].innerHTML = filtrTaroTable(positionTaro)[0].sex.type;
    taro.children[0].title = filtrTaroTable(positionTaro)[0].sex.name;
    taro.children[1].innerHTML = filtrTaroTable(positionTaro)[0].zodiac.type;
    taro.children[1].title = filtrTaroTable(positionTaro)[0].zodiac.name;
    taro.children[2].children[0].src = filtrTaroTable(positionTaro)[0].element;
    taro.children[3].innerHTML = filtrTaroTable(positionTaro)[0].time;
    taro.children[3].title = filtrTaroTable(positionTaro)[0].time;
    taro.children[4].innerHTML = filtrTaroTable(positionTaro)[0].logic.type;
    taro.children[4].title = filtrTaroTable(positionTaro)[0].logic.name;
    taro.children[5].innerHTML = filtrTaroTable(positionTaro)[0].aktPas.type;
    taro.children[5].title = filtrTaroTable(positionTaro)[0].aktPas.name;
    taro.children[6].innerHTML = filtrTaroTable(positionTaro)[0].soul.type;
    taro.children[6].title = filtrTaroTable(positionTaro)[0].soul.name;
    taro.children[7].innerHTML = filtrTaroTable(positionTaro)[0].electric.type;
    taro.children[7].title = filtrTaroTable(positionTaro)[0].electric.name;
  }

  addToTaroTable(taroArr1, result.p1);
  addToTaroTable(taroArr2, result.p2);
  addToTaroTable(taroArr3, result.p3);
  addToTaroTable(taroArr4, result.p4);
  addToTaroTable(taroArr5, result.p5);
  addToTaroTable(taroArr6, result.p6);
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
