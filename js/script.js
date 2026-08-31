const helmetBtn =
  document.getElementById("helmetBtn");

const startScreen =
  document.getElementById("startScreen");

const birthdayScreen =
  document.getElementById("birthdayScreen");

const againBtn =
  document.getElementById("againBtn");

const confetti =
  document.getElementById("confetti");


helmetBtn.addEventListener("click", () => {

  helmetBtn.classList.add("disappear");

  setTimeout(() => {

    startScreen.classList.add("hidden");

    birthdayScreen.classList.remove("hidden");

    launchConfetti();

  }, 750);

});


againBtn.addEventListener("click", () => {

  birthdayScreen.classList.add("hidden");

  startScreen.classList.remove("hidden");

  helmetBtn.classList.remove("disappear");

  confetti.innerHTML = "";

});


function launchConfetti() {

  const pieces = 90;


  for (let i = 0; i < pieces; i++) {

    const piece =
      document.createElement("span");


    piece.className =
      "confetti-piece";


    piece.style.left =
      Math.random() * 100 + "vw";


    piece.style.animationDuration =
      (2.2 + Math.random() * 2.5) + "s";


    piece.style.animationDelay =
      Math.random() * .8 + "s";


    piece.style.transform =
      `rotate(${Math.random() * 360}deg)`;


    const colors = [
      "#ffd447",
      "#ff6680",
      "#6fd8ff",
      "#7cff8a",
      "#c77dff",
      "#ffffff"
    ];


    piece.style.background =
      colors[
        Math.floor(
          Math.random() * colors.length
        )
      ];


    confetti.appendChild(piece);

  }


  setTimeout(() => {

    confetti.innerHTML = "";

  }, 5500);

}