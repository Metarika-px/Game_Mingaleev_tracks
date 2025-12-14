const LEVEL_NAMES = {
  easy: "Легко",
  normal: "Нормально",
  hard: "Сложно",
};

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("results-tbody");
  const currentBlock = document.getElementById("current-result-block");

  const allGames = loadRating();

  if (allGames.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5">Пока нет результатов.</td></tr>';
    currentBlock.textContent = "Сыграйте первую игру, чтобы увидеть результат.";
  } else {
    // последняя сыгранная игра последний элемент массива
    const lastGame = allGames[allGames.length - 1];

    const formattedLastDate = new Date(lastGame.date).toLocaleString("ru-RU", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    currentBlock.textContent =
      `Последняя игра: ${lastGame.name}, очки: ${lastGame.score}, ` +
      `уровень: ${LEVEL_NAMES[lastGame.level]}, дата: ${formattedLastDate}`;

    const ratingSorted = allGames.slice().sort((a, b) => b.score - a.score);

    tbody.innerHTML = "";

    ratingSorted.forEach((rec, index) => {
      const tr = document.createElement("tr");

      const tdIndex = document.createElement("td");

      if (index === 0 || index === 1 || index === 2) {
        const span = document.createElement("span");
        span.classList.add("medal");

        if (index === 0) span.classList.add("medal-gold");
        else if (index === 1) span.classList.add("medal-silver");
        else if (index === 2) span.classList.add("medal-bronze");

        span.textContent = index + 1;
        tdIndex.appendChild(span);
      } else {
        tdIndex.textContent = index + 1;
        tdIndex.style.textAlign = "center";
      }

      const tdName = document.createElement("td");
      tdName.textContent = rec.name;

      const tdScore = document.createElement("td");
      tdScore.textContent = rec.score;

      const tdLevel = document.createElement("td");
      tdLevel.textContent = LEVEL_NAMES[rec.level] || rec.level;

      const tdDate = document.createElement("td");
      tdDate.textContent = new Date(rec.date).toLocaleString("ru-RU", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });

      tr.appendChild(tdIndex);
      tr.appendChild(tdName);
      tr.appendChild(tdScore);
      tr.appendChild(tdLevel);
      tr.appendChild(tdDate);

      tbody.appendChild(tr);
    });
  }

  const playAgainBtn = document.getElementById("play-again-btn");
  const clearRatingBtn = document.getElementById("clear-rating-btn");

  if (playAgainBtn) {
    playAgainBtn.addEventListener("click", () => {
      window.location.href = "game.html";
    });
  }

  if (clearRatingBtn) {
    clearRatingBtn.addEventListener("click", () => {
      if (confirm("Точно очистить рейтинг?")) {
        clearRating();
        window.location.reload();
      }
    });
  }
});
