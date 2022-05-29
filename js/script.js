const form = document.querySelector("#form");
form.addEventListener("submit", getFormValue);
function getFormValue(event) {
  event.preventDefault();
  let day = form.querySelector('[name="day"]');
  let month = form.querySelector('[name="month"]');
  let year = form.querySelector('[name="year"]');

  const data = {
    day: day.value,
    month: month.value,
    year: year.value,
  };

  console.log("data", resultPsiPotret(data));
}

function resultPsiPotret(data) {
  const p1 = Number(data.day) > 22 ? Number(data.day) - 22 : Number(data.day);
  const p2 = Number(data.month);
  const p3 = data.year
    .split("")
    .reduce((sum, current) => Number(sum) + Number(current));
  const p4 = p1 + p2 > 22 ? p1 + p2 - 22 : p1 + p2;
  const p5 = p2 + p3 > 22 ? p2 + p3 - 22 : p2 + p3;
  const p6 = p4 + p5 > 22 ? p4 + p5 - 22 : p4 + p5;
  const p7 = p1 + p5 > 22 ? p1 + p5 - 22 : p1 + p5;
  const p8 = p2 + p6 > 22 ? p2 + p6 - 22 : p2 + p6;
  const p12 = p7 + p8 > 22 ? p7 + p8 - 22 : p7 + p8;
  const p13 = p1 + p4 + p6 > 22 ? p1 + p4 + p6 - 22 : p1 + p4 + p6;
  const p14 = p3 + p5 + p6 > 22 ? p3 + p5 + p6 - 22 : p3 + p5 + p6;

  return { p1, p2, p3, p4, p5, p6, p7, p8, p12, p13, p14 };
}

getFormValue();
