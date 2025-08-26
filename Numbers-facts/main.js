let fact = document.getElementById("fact");
let factText = document.getElementById("factText");
let numberInput = document.getElementById("numberInput");
numberInput.addEventListener("input", fetchNumber);

function fetchNumber() {
  let number = numberInput.value;
  fetch("http://numbersapi.com/" + number)
    .then((response) => response.text())
    .then((data) => {
      if (number != "") {
        fact.style.display = "block";
        factText.innerText = data;
      }
    })
    .catch((err) => console.log(err));
}
