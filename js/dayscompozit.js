const select = document.querySelector("#select");
const form = document.querySelector("#form");

function getValueSelect() {
  const value = select.options.selectedIndex + 1;
  console.log(value);
}

form.addEventListener("submit", getFormValue);
function getFormValue(event) {
  event.preventDefault();
  getValueSelect();
  //   table.classList.remove("none");
}

getFormValue();
