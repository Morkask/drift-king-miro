function render() {
	if (gameState == "loading") {
		objectsContext.drawImage(imageLoading, 0, 0);
		guiContext.fillStyle = "#00ffa8";
		guiContext.font = "bold 18px consolas";
		guiContext.fillText("Press SPACE to start.", canvas.width / 2 - 90, (canvas.height / 2) + 20);
	}
	if (gameState == "instructions") {
		guiContext.clearRect(0, 0, canvas.width, canvas.height);
		guiContext.font = "bold 20px arial";
		guiContext.textAlign = "center";
		guiContext.fillText("FORD ESCORT: press X || FELICIA PICKUP: press C || JAWA MOSQUIT: press V", canvas.width / 2, (canvas.height / 2) - 260);

		if (selectedCar == "FORD ESCORT") {
			guiContext.fillStyle = "blue";
			var carIMG = new Image();
			carIMG.src = 'img/objects/carBLUE/car.png';
			var carLOGO = new Image();
			carLOGO.src = 'img/logoFORD.png';
		} else if (selectedCar == "FELICIA PICKUP") {
			guiContext.fillStyle = "white";
			var carIMG = new Image();
			carIMG.src = 'img/objects/carRED/car.png';
			var carLOGO = new Image();
			carLOGO.src = 'img/logoSKODA.png';
		} else {
			guiContext.fillStyle = "red";
			var carIMG = new Image();
			carIMG.src = 'img/objects/carBLACK/car.png';
			var carLOGO = new Image();
			carLOGO.src = 'img/logoJAWA.png';
		}

		guiContext.fillText("CURRENT CAR IS: " + selectedCar, canvas.width / 2, (canvas.height / 2) - 230);
		guiContext.fillStyle = "#00ffa8";
		guiContext.font = "bold 18px arial";
		guiContext.textAlign = "center";
		guiContext.fillText("Use WASD or arrows to control Miro.", canvas.width / 2, (canvas.height / 2) + 180);
		guiContext.fillText("Use SPACE to shoot if you have gunShots.", canvas.width / 2, (canvas.height / 2) + 200);
		guiContext.fillText("Press SPACE to start.", canvas.width / 2, (canvas.height / 2) + 220);

		objectsContext.clearRect(0, 0, canvas.width, canvas.height);
		objectsContext.fillStyle = "black";
		objectsContext.fillRect(0, 0, canvas.width, canvas.height);

		objectsContext.drawImage(carIMG, canvas.width / 2 - carObject.width / 2, canvas.height / 2 - 200, 70, 158);
		objectsContext.drawImage(carLOGO, canvas.width / 2 - 240 / 2, canvas.height / 2 - 0, 240, 90);
	}
	if (gameState == "ingame") {
		guiContext.clearRect(0, 0, canvas.width, canvas.height);
		objectsContext.clearRect(0, 0, canvas.width, canvas.height);

		roadObject.render();
		for (i in gameObjects) {
			gameObjects[i].render();
		}
		for (i in gunShots) {
			gunShots[i].render();
		}
		carObject.render();
		renderGui();
	}

	if (gameState == "gameover") {
		objectsContext.clearRect(0, 0, canvas.width, canvas.height);
		guiContext.clearRect(0, 0, canvas.width, canvas.height);
		objectsContext.drawImage(imageGameOver, 0, 0, canvas.width, canvas.height);
		guiContext.fillStyle = "#ca0000";
		guiContext.font = "bold 45px consolas";
		guiContext.textAlign = "center";
		if (hiScoreReached) {
			guiContext.fillText("NEW HI-SCORE!!!", canvas.width / 2, (canvas.height / 2) - 200);
		}
		guiContext.font = "bold 72px consolas";
		guiContext.fillText("GAME OVER MIRO", canvas.width / 2, (canvas.height / 2) - 130);
		guiContext.fillStyle = "#00ffa8";
		guiContext.font = "bold 18px arial";
		guiContext.textAlign = "center";
		guiContext.fillText("Press SPACE to start again.", canvas.width / 2, (canvas.height / 2) - 105);
		guiContext.textAlign = "left";
		guiContext.fillStyle = "rgba(255, 93, 0, 0.87)";
		guiContext.font = "bold 40px consolas";
		guiContext.fillText("SCORE: " + Math.floor(carObject.score), canvas.width / 2 + 45, (canvas.height / 2) - 70);
		guiContext.fillText("HI-SCORE: " + Math.floor(hiScore), canvas.width / 2 - 20, (canvas.height / 2) - 35);
	}
}

function renderGui() {
	guiContext.textAlign = "left";
	guiContext.clearRect(0, 0, canvas.width, canvas.height);
	guiContext.fillStyle = "#00ffa8";
	guiContext.font = "bold 18px consolas";
	if (carObject.gun > 0) {
		guiContext.fillText("GUN SHOTS: " + carObject.gun, 5, (canvas.height) - 70);
	}
	guiContext.fillStyle = "#00ffa8";
	guiContext.font = "bold 18px consolas";
	guiContext.fillText("LIVES: ", 5, (canvas.height) - 50);
	for (i = 0; i < carObject.lives; i++) {
		guiContext.fillStyle = "red";
		guiContext.font = "bold 18px consolas";
		guiContext.fillText("♥ ", 65 + i * 12, (canvas.height) - 50);
	}

	guiContext.fillStyle = "#00ffa8";
	guiContext.font = "bold 18px consolas";
	guiContext.fillText("SCORE:" + Math.floor(carObject.score), 5, (canvas.height) - 30);
	guiContext.fillText("HI-SCORE:" + Math.floor(hiScore), 5, (canvas.height) - 10);
}


class Road {

	constructor() {
		this.y = 0;
		this.texture = new Image();
		this.texture.src = 'img/backgrounds/road.jpg';
	}

	tick() {
		this.y += gameSpeed;
		gameSpeed += gameSpeedingAmount;
		carObject.score += 1 / 60;
		if (this.y > canvas.height) {
			this.y = 0;
		}
	}

	render() {
		objectsContext.clearRect(0, 0, canvas.width, canvas.height);
		objectsContext.drawImage(this.texture, 0, this.y);
		objectsContext.drawImage(this.texture, 0, this.y - canvas.height);
	}
};