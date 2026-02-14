const keys = [];

document.addEventListener("keydown", function (event) {
  if (event.key == "Backspace") {keys.pop();}
  else if (event.key == "Shift") {}
  else if (event.key == "Enter") {}
  else {keys.push(event.key);}
  document.getElementById("demo").innerHTML = ": " + keys.join("");
});
