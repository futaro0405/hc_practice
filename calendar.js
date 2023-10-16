const { parseArgs } = require("node:util");

"use strict";

const show = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth();
  const week = ["日", "月", "火", "水", "木", "金", "土"];

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

const setOption = () => {
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
  const parsedArgs = parseArgs({options, args});
  const today = new Date();
  const setYear = parsedArgs.values.year || today.getFullYear();
  const setMonth = parsedArgs.values.month -1 || today.getMonth();

  if(setMonth < 0 || setMonth > 11) {
    throw new Error(`${setMonth + 1} is neither a month number (1..12) nor a name`);
  }else if (setYear < 1000 || setYear > 9999) {
    throw new Error(`${setYear} is an invalid number (1000..9999)`);
  }

  return [setYear, setMonth];
};

try {
  let [year, month] = setOption();
  let showDate = new Date(year, month, 1);
  show(showDate);
} catch(e) {
  console.error(e.message);
}
