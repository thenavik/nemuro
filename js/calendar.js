// events
document.getElementById("forecast_month").value = new Date().getMonth() + 1;
calculate();
document.getElementById("count-btn").addEventListener("click", () => {
  calculate();
});

// functional
function calculate() {
  const month = document.getElementById("forecast_month").value;
  const year = document.getElementById("forecast_year").value;

  const calendar = document.getElementById("calendar_content");
  generateCalendarData(calendar, year, month);
}

function getBirthdayPositions() {
  const day = document.getElementById("day").value;
  const month = document.getElementById("month").value;
  const year = document.getElementById("year").value;
  const date = {
    day,
    month,
    year,
  };
  return resultPsiPotret(date);
}
function generateCalendarData(elem, year, month) {
  let mon = month - 1;
  let d = new Date(year, mon);
  const birthdayPosition = getBirthdayPositions();
  console.log("fdf", birthdayPosition);

  let table = `<table width="100%" border="0">
  <tbody>
  <tr>
    <td width="14%" align="center" valign="top" class="tbh">ПН</td>
    <td width="14%" align="center" valign="top" class="tbh">ВТ</td>
    <td width="14%" align="center" valign="top" class="tbh">СР</td>
    <td width="14%" align="center" valign="top" class="tbh">ЧТ</td>
    <td width="14%" align="center" valign="top" class="tbh">ПТ</td>
    <td width="14%" align="center" valign="top" class="tbh">
      <font color="red">СБ</font>
    </td>
    <td width="14%" align="center" valign="top" class="tbh">
      <font color="red">ВС</font>
    </td>
  </tr><tr>`;

  // spaces for the first row
  // from Monday till the first day of the month
  // * * * 1  2  3  4
  for (let i = 0; i < getDay(d); i++) {
    table += `<td width="14%" align="center" valign="top">
    <table width="100%" align="center" class="tbl">
      <tbody>
        <tr>
          <td class="nil">&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  </td>`;
  }

  // <td> with actual dates
  while (d.getMonth() == mon) {
    const result = resultPsiPotret({
      day: d.getDate(),
      month: month,
      year: year,
    });
    table += `<td width="14%" align="center" class="${
      [5, 6].includes(getDay(d)) ? "color-red" : ""
    }" valign="top"><table width="100%" align="center" class="tbl">
        <tbody>
          <tr>
            <td align="center" valign="middle" colspan="5" class="tbh">
              ${d.getDate() + "." + month + "." + year}
            </td>
          </tr>
          <tr>
            <td width="20%" align="center" valign="middle">${romanize(
              summTwoPosition(birthdayPosition.p1, result.p1)
            )}</td>
            <td width="20%">&nbsp;</td>
            <td width="20%" align="center" valign="middle">${romanize(
              summTwoPosition(birthdayPosition.p2, result.p2)
            )}</td>
            <td width="20%">&nbsp;</td>
            <td width="20%" align="center" valign="middle">${romanize(
              summTwoPosition(birthdayPosition.p3, result.p3)
            )}</td>
          </tr>
          <tr>
            <td width="20%">&nbsp;</td>
            <td width="20%" align="center" valign="middle">${romanize(
              summTwoPosition(birthdayPosition.p4, result.p4)
            )}</td>
            <td width="20%">&nbsp;</td>
            <td width="20%" align="center" valign="middle">${romanize(
              summTwoPosition(birthdayPosition.p5, result.p5)
            )}</td>
            <td width="20%">&nbsp;</td>
          </tr>
          <tr>
            <td width="20%">&nbsp;</td>
            <td width="20%">&nbsp;</td>
            <td width="20%" align="center" valign="middle">${romanize(
              summTwoPosition(birthdayPosition.p6, result.p6)
            )}</td>
            <td width="20%">&nbsp;</td>
            <td width="20%">&nbsp;</td>
          </tr>
        </tbody>
      </table>
  </td>`;

    if (getDay(d) % 7 == 6) {
      // sunday, last day of week - newline
      table += "</tr><tr>";
    }

    d.setDate(d.getDate() + 1);
  }

  // add spaces after last days of month for the last row
  // 29 30 31 * * * *
  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += "<td></td>";
    }
  }

  // close the table
  table += "</tr></table>";

  elem.innerHTML = table;
}

function getDay(date) {
  // get day number from 0 (monday) to 6 (sunday)
  let day = date.getDay();
  if (day == 0) day = 7; // make Sunday (0) the last day
  return day - 1;
}

// positions
function resultPsiPotret(data) {
  const p1 = Number(data.day) > 22 ? Number(data.day) - 22 : Number(data.day);
  const p2 = Number(data.month);
  const p3 = String(data.year)
    .split("")
    .reduce((sum, current) =>
      Number(sum) + Number(current) > 22
        ? Number(sum) + Number(current) - 22
        : Number(sum) + Number(current)
    );
  const p4 = p1 + p2 > 22 ? p1 + p2 - 22 : p1 + p2;
  const p5 = p2 + p3 > 22 ? p2 + p3 - 22 : p2 + p3;
  const p6 = p4 + p5 > 22 ? p4 + p5 - 22 : p4 + p5;

  return {
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
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

function summTwoPosition(pos1, pos2) {
  let res = Number(pos1) + Number(pos2);

  while (res > 22) {
    res -= 22;
  }
  if (res === 0) {
    res = 22;
  }
  return res;
}
