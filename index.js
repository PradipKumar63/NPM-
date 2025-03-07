//const figlet=require("figlet");
const figlet = require("figlet");

figlet("Pradip kumar", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});