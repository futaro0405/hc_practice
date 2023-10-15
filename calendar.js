const { parseArgs } = require("node:util");

const options = {
  year: {
    type: "string",
    short: "y",
    multiple: false,
  },
  month: {
    type: "string",
    short: "m",
    multiple: false,
  },
};

const args = process.argv.slice(2);
const parsedArgs = parseArgs({ options, args });

const today = new Date();
const setYear = parsedArgs.values.year || today.getFullYear();
const setMonth = parsedArgs.values.month - 1 || today.getMonth();

const week = ["日", "月", "火", "水", "木", "金", "土"];
let showDate = new Date(setYear, setMonth, 1);

function showProcess(date) {
  let year = date.getFullYear();
  let month = date.getMonth();
  console.log(`      ${month + 1}月 ${year}`);
  console.log(week.join(" "));

  let startDayOfWeek = new Date(year, month, 1).getDay();
  let endDate = new Date(year, month + 1, 0).getDate();
  let arrDay = [];

  for (let i = 0; i < startDayOfWeek; i++) {
    arrDay.push("   ");
  }
  for (let i = 1; i <= endDate; i++) {
    arrDay.push((" " + i).slice(-2));

    if ((startDayOfWeek + i) % 7 === 0) {
      arrDay.push('\n');
    }else {
      arrDay.push(" ");
    }
  }
  console.log(arrDay.join(""));
}


showProcess(showDate);