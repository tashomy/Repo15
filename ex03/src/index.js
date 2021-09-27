function printManyTimes(str) {
  "use strict";

  //below
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i += 2) {
    console.log(SENTENCE);
  }

  return SENTENCE;
  //above
}

printManyTimes("Arena");
module.exports = printManyTimes;
