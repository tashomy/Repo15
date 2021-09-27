const milili = [10, 25, 4];

function myArr(mili) {
  "use strict";

  var temp = mili[0];
  mili[0] = mili[mili.length - 1];
  var temp2 = mili[1];
  mili[1] = temp;
  mili[2] = temp2;

  return mili;
}

console.log(myArr(milili));
console.log(milili);

module.exports = myArr;
