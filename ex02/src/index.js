function checkVariableScope() {
  "use strict";

  //below
  let i = "function variable";
  //above

  if (true) {
    //below
    let i = "block variable";
    //above
    console.log("Scope i is: ", i);
  }
  console.log("Scope i is: ", i);
  return i;
}

checkVariableScope();

module.exports = checkVariableScope;
