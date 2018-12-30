function tick() {
	if (gameState == "loading") {
		if (Key.space == true) {
			Key.space = false;
			gameState = "instructions";
		}
	}
	if (gameState == "instructions") {
		if (Key.space == true) {
			Key.space = false;
			gameState = "ingame";
		}
		if (Key.space == true) {
			Key.space = false;
			gameState = "ingame";
		}
		if (Key.keyX == true) {
			Key.keyX = false;
			selectedCar = "FORD ESCORT";
		}
		if (Key.keyC == true) {
			Key.keyC = false;
			selectedCar = "FELICIA PICKUP";
		}
		if (Key.keyV == true) {
			Key.keyV = false;
			selectedCar = "JAWA MOSQUIT";
		}
	}
	if (gameState == "ingame") {
		audioMain.loop = true;
		audioMain.play();
		carObject.tick();
		for (i in gameObjects) {
			gameObjects[i].tick();
		}
		if (Key.space == true) {
			carObject.shoot();
		}
		for (i in gunShots) {
			gunShots[i].tick();
		}
		roadObject.tick();
		if (carObject.lives < 1) {
			audioOutro.currentTime = 0;
			gameState = "gameover";

			audioMain.pause();
			carObject.lives = numberOfLives;
			if (carObject.score > hiScore) {
				hiScore = carObject.score;
				localStorage.setItem("hiscore", carObject.score);
				hiScoreReached = true;
			}
		}
	}
	if (gameState == "gameover") {
		audioOutro.play();
		if (Key.space == true) {
			Key.space = false;
			gameState = "instructions";
			audioOutro.pause();
			initializeGame()
		}
	}
}