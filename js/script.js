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

  console.log(data);
}
getFormValue();
