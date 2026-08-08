const socket = io("https://game-backend-service.onrender.com");

socket.on("game_state", (data) => {
  console.log("Live Sync State:", data);
  const multiplierElement = document.getElementById("multiplier");
  if (multiplierElement) {
    if (data.gameState === "RUNNING") {
      multiplierElement.innerText = data.currentMultiplier + "x";
    } else if (data.gameState === "WAITING") {
      multiplierElement.innerText = "Next round in " + data.countdown + "s";
    } else if (data.gameState === "CRASHED") {
      multiplierElement.innerText = "Crashed at " + data.currentMultiplier + "x";
    }
  }
});
