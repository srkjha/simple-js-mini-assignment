var keys = document.querySelectorAll("#keyboard>div");
var bag = "";

for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", myCalculator);
}

function myCalculator() {
  var targetNumber = event.target.innerText;

  if (targetNumber == "C") {
    bag = "";
    document.querySelector("#display").innerText = "";
  } else if (targetNumber == "=") {
    console.log(eval(bag));
    document.querySelector("#display").innerText = eval(bag);
  } else {
    bag = bag + targetNumber;
    document.querySelector("#display").innerText = bag;
  }
}