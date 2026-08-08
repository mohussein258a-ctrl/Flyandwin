// sync.js
const socket = io("https://game-backend-service.onrender.com"); // Use your Render backend URL here

socket.on("sync", (state) => {
    if (state.isFlying) {
        // Hooks into your existing display variables
        currentMultiplier = parseFloat(state.currentOdd);
    }
});

socket.on("takeoff", () => {
    // This tells your frontend to start the flight animation when the server says go
});

socket.on("tick", (data) => {
    // Updates the multiplier value coming straight from the server
    currentMultiplier = parseFloat(data.currentOdd);
});

socket.on("crash", (data) => {
    // Handles the crash sequence when the server signals the end of the round
    crashPoint = parseFloat(data.finalOdd);
});
