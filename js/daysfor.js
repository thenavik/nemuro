const table = document.querySelector("#table");
const form = document.querySelector("#form");
const form2 = document.querySelector("#form2");
const date1 = document.querySelector("#date1");
const date2 = document.querySelector("#date2");
const date3 = document.querySelector("#date3");
const button = document.querySelector("#count-btn");
const button2 = document.querySelector("#count-btn2");

button.addEventListener("click", getFormValue);
button2.addEventListener("click", getFormValue);
function getFormValue(event) {
  event.preventDefault();
  calculateLeft();
  calculateRight();
}
function calculateRight() {
  const left = document.getElementById("right_table");
  const day1 = form2.querySelector('[id="day3"]');
  const month1 = form2.querySelector('[id="month3"]');
  const year1 = form2.querySelector('[id="year3"]');

  const left2 = document.getElementById("right_table2");
  const day2 = form2.querySelector('[id="day4"]');
  const month2 = form2.querySelector('[id="month4"]');
  const year2 = form2.querySelector('[id="year4"]');

  const dataRight = {
    day: day1.value,
    month: month1.value,
    year: year1.value,
  };
  const dataRight2 = {
    day: day2.value,
    month: month2.value,
    year: year2.value,
  };
  calculate(resultPsiPotretLeft(dataRight), left, dataRight);
  calculate(resultPsiPotretLeft(dataRight2), left2, dataRight2);
  calculateAnswerRight(dataRight, dataRight2);
}
function calculateLeft() {
  const left = document.getElementById("left_table");
  const day1 = form.querySelector('[id="day1"]');
  const month1 = form.querySelector('[id="month1"]');
  const year1 = form.querySelector('[id="year1"]');

  const left2 = document.getElementById("left_table2");
  const day2 = form.querySelector('[id="day2"]');
  const month2 = form.querySelector('[id="month2"]');
  const year2 = form.querySelector('[id="year2"]');

  const dataLeft = {
    day: day1.value,
    month: month1.value,
    year: year1.value,
  };

  const dataLeft2 = {
    day: day2.value,
    month: month2.value,
    year: year2.value,
  };

  calculate(resultPsiPotretLeft(dataLeft), left, dataLeft);
  calculate(resultPsiPotretLeft(dataLeft2), left2, dataLeft2);
  calculateAnswerLeft(dataLeft, dataLeft2);
}

function calculate(result, contentNode, date) {
  const content = `
    <table border="0" align="center">
      <tbody>
        <tr>
          <td width="14%" align="center" valign="middle">
            <table border="0">
              <tbody>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s">13</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="ind_s" id="p13R">${romanize(result.p13)}</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s" id="rightAnswer13"
                      >${romanize(result.p1)} + ${romanize(
    result.p4
  )} + ${romanize(result.p6)}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td width="14%">&nbsp;</td>
          <td width="14%">&nbsp;</td>
          <td width="14%">&nbsp;</td>
          <td width="14%">&nbsp;</td>
          <td width="14%">&nbsp;</td>
          <td width="14%" align="center" valign="middle">
            <table border="0">
              <tbody>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s">14</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="ind_s" id="p14R">${romanize(result.p14)}</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s" id="rightAnswer14"
                      >${romanize(result.p3)} + ${romanize(
    result.p5
  )} + ${romanize(result.p6)}</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td
            align="center"
            valign="middle"
            colspan="7"
            class="tbh"
            id="date1"
          >
            ${validDate(date.day)} . ${validDate(date.month)} . ${date.year}
          </td>
        </tr>
        <tr>
          <td width="14%" align="center" valign="middle">
            <table border="0">
              <tbody>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s">12</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="ind_s" id="p12L">${romanize(result.p12)}</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s" id="leftAnswer12"
                      >${romanize(result.p7)} + ${romanize(result.p8)}</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td width="14%" align="center" valign="middle">
            <table border="0">
              <tbody>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s">1</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="ind_s" id="p1R">${romanize(result.p1)}</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td width="14%">&nbsp;</td>
          <td width="14%" align="center" valign="middle">
            <table border="0">
              <tbody>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s">2</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="ind_s" id="p2R">${romanize(result.p2)}</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td width="14%">&nbsp;</td>
          <td width="14%" align="center" valign="middle">
            <table border="0">
              <tbody>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s">3</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="ind_s" id="p3R">${romanize(result.p3)}</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td width="14%" align="center" valign="middle">
            <table border="0">
              <tbody>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s">7</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="ind_s" id="p7R">${romanize(result.p7)}</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s" id="rightAnswer7"
                      >${romanize(result.p1)} + ${romanize(result.p5)}</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td width="14%">&nbsp;</td>
          <td width="14%">&nbsp;</td>
          <td width="14%" align="center" valign="middle">
            <table border="0">
              <tbody>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s">4</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="ind_s" id="p4R">${romanize(result.p4)}</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s" id="rightAnswer4"
                      >${romanize(result.p1)} + ${romanize(result.p2)}</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td width="14%">&nbsp;</td>
          <td width="14%" align="center" valign="middle">
            <table border="0">
              <tbody>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s">5</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="ind_s" id="p5R">${romanize(result.p5)}</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s" id="rightAnswer5"
                      >${romanize(result.p2)} + ${romanize(result.p3)}</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td width="14%">&nbsp;</td>
          <td width="14%">&nbsp;</td>
        </tr>
        <tr>
          <td width="14%">&nbsp;</td>
          <td width="14%">&nbsp;</td>
          <td width="14%">&nbsp;</td>
          <td width="14%" align="center" valign="middle">
            <table border="0">
              <tbody>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s">6</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="ind_s" id="p6R">${romanize(result.p6)}</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s" id="rightAnswer6"
                      >${romanize(result.p4)} + ${romanize(result.p5)}</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td width="14%">&nbsp;</td>
          <td width="14%">&nbsp;</td>
          <td width="14%">&nbsp;</td>
        </tr>
        <tr>
          <td width="14%">&nbsp;</td>
          <td width="14%">&nbsp;</td>
          <td width="14%">&nbsp;</td>
          <td width="14%" align="center" valign="middle">
            <table border="0">
              <tbody>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s">8</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="ind_s" id="p8R">${romanize(result.p8)}</span>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="middle">
                    <span class="sub_s" id="rightAnswer8"
                      >${romanize(result.p2)} + ${romanize(result.p6)}</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td width="14%">&nbsp;</td>
          <td width="14%">&nbsp;</td>
          <td width="14%">&nbsp;</td>
        </tr>
      </tbody>
    </table>`;
  contentNode.innerHTML = content;
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

function resultPsiPotretLeft(data) {
  const p1 = Number(data.day) > 22 ? Number(data.day) - 22 : Number(data.day);
  const p2 = Number(data.month);
  const p3 = sumYear(data.year);
  const p4 = summPositions(p1, p2);
  const p5 = summPositions(p2, p3);
  const p6 = summPositions(p4, p5);
  const p7 = summPositions(p1, p5);
  const p8 = summPositions(p2, p6);
  const p12 = summPositions(p7, p8);
  const p13 = summPositions(p1, p4, p6);
  const p14 = summPositions(p3, p5, p6);

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

function validDate(value) {
  if (value <= 9) {
    return `0${Number(value)}`;
  }
  return value;
}

function summPositions(pos1, pos2, pos3 = 0) {
  let res = Number(pos1) + Number(pos2) + Number(pos3);

  while (res > 22) {
    res -= 22;
  }
  if (res === 0) {
    res = 22;
  }
  return res;
}

function calculateAnswerLeft(dataLeft, dataRight) {
  const resultLeft = resultPsiPotretLeft(dataLeft);
  const resultRight = resultPsiPotretLeft(dataRight);
  const content = document.getElementById("answer_left");
  calculateAnswer(resultLeft, resultRight, content, dataLeft, dataRight);
}

function calculateAnswerRight(dataLeft, dataRight) {
  const resultLeft = resultPsiPotretLeft(dataLeft);
  const resultRight = resultPsiPotretLeft(dataRight);
  const content = document.getElementById("answer_right");
  calculateAnswer(resultLeft, resultRight, content, dataLeft, dataRight);
}
function calculateAnswer(
  resultLeft,
  resultRight,
  contentNode,
  dateLeft,
  dateRight
) {
  const content = `
  <table width="100%" border="0" align="center">
              <tbody>
                <tr>
                  <td width="14%" align="center" valign="middle">
                    <table border="0">
                      <tbody>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub">13</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="ind" id="all13">${romanize(
                              summPositions(resultLeft.p13, resultRight.p13)
                            )}</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub" id="bottomAnswer13"
                              >${romanize(resultLeft.p13)} + ${romanize(
    resultRight.p13
  )}</span
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%" align="center" valign="middle">
                    <table border="0">
                      <tbody>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub">14</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="ind" id="all14">${romanize(
                              summPositions(resultLeft.p14, resultRight.p14)
                            )}</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub" id="bottomAnswer14"
                              >${romanize(resultLeft.p14)} + ${romanize(
    resultRight.p14
  )}</span
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td
                    align="center"
                    valign="middle"
                    colspan="7"
                    class="tbh"
                    id="date3"
                  >
                    ${
                      validDate(dateLeft.day) +
                      "." +
                      validDate(dateLeft.month) +
                      "." +
                      dateLeft.year
                    } и ${
    validDate(dateRight.day) +
    "." +
    validDate(dateRight.month) +
    "." +
    dateRight.year
  }
                  </td>
                </tr>
                <tr>
                  <td width="14%">&nbsp;</td>
                  <td width="14%" align="center" valign="middle">
                    <table border="0">
                      <tbody>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub">1</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="ind" id="all1">${romanize(
                              summPositions(resultLeft.p1, resultRight.p1)
                            )}</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub" id="bottomAnswer1">${romanize(
                              resultLeft.p1
                            )} + ${romanize(resultRight.p1)}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%" align="center" valign="middle">
                    <table border="0">
                      <tbody>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub">2</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="ind" id="all2">${romanize(
                              summPositions(resultLeft.p2, resultRight.p2)
                            )}</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub" id="bottomAnswer2">${romanize(
                              resultLeft.p2
                            )} + ${romanize(resultRight.p2)}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%" align="center" valign="middle">
                    <table border="0">
                      <tbody>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub">3</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="ind" id="all3">${romanize(
                              summPositions(resultLeft.p3, resultRight.p3)
                            )}</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub" id="bottomAnswer3">${romanize(
                              resultLeft.p3
                            )} + ${romanize(resultRight.p3)}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="14%" align="center" valign="middle">
                    <table border="0">
                      <tbody>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub">7</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="ind" id="all7">${romanize(
                              summPositions(resultLeft.p7, resultRight.p7)
                            )}</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub" id="bottomAnswer7"
                              >${romanize(resultLeft.p7)} + ${romanize(
    resultRight.p7
  )}</span
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td width="14%">&nbsp;</td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%" align="center" valign="middle">
                    <table border="0">
                      <tbody>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub">4</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="ind" id="all4">${romanize(
                              summPositions(resultLeft.p4, resultRight.p4)
                            )}</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub" id="bottomAnswer4">${romanize(
                              resultLeft.p4
                            )} + ${romanize(resultRight.p4)}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%" align="center" valign="middle">
                    <table border="0">
                      <tbody>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub">5</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="ind" id="all5">${romanize(
                              summPositions(resultLeft.p5, resultRight.p5)
                            )}</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub" id="bottomAnswer5">${romanize(
                              resultLeft.p5
                            )} + ${romanize(resultRight.p5)}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%">&nbsp;</td>
                </tr>
                <tr>
                  <td width="14%">&nbsp;</td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%" align="center" valign="middle">
                    <table border="0">
                      <tbody>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub">6</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="ind" id="all6">${romanize(
                              summPositions(resultLeft.p6, resultRight.p6)
                            )}</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub" id="bottomAnswer6">${romanize(
                              resultLeft.p6
                            )} + ${romanize(resultRight.p6)}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%">&nbsp;</td>
                </tr>
                <tr>
                  <td width="14%">&nbsp;</td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%" align="center" valign="middle">
                    <table border="0">
                      <tbody>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub">8</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="ind" id="all8">${romanize(
                              summPositions(resultLeft.p8, resultRight.p8)
                            )}</span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" valign="middle">
                            <span class="sub" id="bottomAnswer8">${romanize(
                              resultLeft.p8
                            )} + ${romanize(resultRight.p8)}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%">&nbsp;</td>
                  <td width="14%">&nbsp;</td>
                </tr>
              </tbody>
            </table>
  `;
  contentNode.innerHTML = content;
}

calculateLeft();
calculateRight();
