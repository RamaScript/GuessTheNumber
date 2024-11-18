document.querySelector("#play").addEventListener("click", () => {
  let max = document.querySelector("#maxNum").value;
document.querySelector(".maxNumInput").style.visibility = "hidden";
  document.querySelector(".guessNumInput").style.visibility = "visible";
  document.querySelector(
    "#instruction"
  ).innerHTML = `Enter the number between 1 to ${max} : `;

  const random = Math.floor(Math.random() * max) + 1;
  console.log(`Random no between 1 to ${max} is ${random}`);

  document.querySelector("#enter").addEventListener("click", function () {
    let hint = document.querySelector("#hint");
    while (1) {
      let guessNum = document.querySelector("#num").value;
      if (guessNum == random) {
        hint.innerHTML = "Congrats you guessed it right...";
        break;
      } else if (guessNum == "Q" || guessNum == "q") {
        hint.innerHTML = "You lost...";
        break;
      } else if (guessNum > random) {
        hint.innerHTML = `wrong! try again (hint: enter smaller number)`;
        if (guessNum > max) {
          hint.innerHTML = `Out of Range... guess the number between 1 to ${max}`;
          break;
        }
        break;
      } else if (guessNum < random) {
        hint.innerHTML = `wrong! try again (hint: enter bigger number)`;
        if (guessNum > max) {
          hint.innerHTML = `Out of Range... guess the number between 1 to ${max}`;
          break;
        }
        break;
      } else {
        break;
      }
    }
  });
});
