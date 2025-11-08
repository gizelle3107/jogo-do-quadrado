const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");

document.addEventListener("keydown", () => {
    if (!player.classList.contains("jump")) {
        player.classList.add("jump");
        setTimeout(() => player.classList.remove("jump"), 500);
    }
});

let checkCollision = setInterval(() => {
    let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("right"));

    if (obstacleLeft > 520 && obstacleLeft < 580 && playerBottom < 30) {
        alert("💥 Game Over!");
        obstacle.style.animation = "none";
        obstacle.style.display = "none";
        clearInterval(checkCollision);
    }
}, 10);
