document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("start-form");
  const nameInput = document.getElementById("player-name");
  const nameError = document.getElementById("name-error");
  const ratingBtn = document.getElementById("rating-btn");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const rawName = nameInput.value.trim();
    const defaultName = "Гость";

    if (!rawName) {
      nameError.hidden = true;
      nameInput.classList.remove("input-error");
    } else if (rawName.length < 3) {
      nameError.textContent = "Имя должно быть не короче 3 символов.";
      nameError.hidden = false;
      nameInput.classList.add("input-error");
      return;
    }

    const playerNameToSave = rawName || defaultName;

    nameError.hidden = true;
    nameInput.classList.remove("input-error");
    nameError.textContent = "";

    localStorage.setItem("currentPlayerName", playerNameToSave);
    localStorage.removeItem("currentGameScore");
    localStorage.removeItem("currentGameLevel");

    window.location.href = "game.html";
  });

  nameInput.addEventListener("input", () => {
    if (!nameInput.value.trim()) {
      nameError.hidden = true;
      nameInput.classList.remove("input-error");
      nameError.textContent = "";
      return;
    }
    nameError.hidden = true;
    nameInput.classList.remove("input-error");
    nameError.textContent = "";
  });

});
