class Bonus {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 80;
		this.height = 100;
		this.bonusIMG = new Image();
		this.bonusIMG.src = 'img/objects/bonus.png';
		this.sound = new Audio("music/sfx/tada.mp3");
	}

	render() {
		objectsContext.drawImage(this.bonusIMG, this.x, this.y, this.width, this.height);
	}

	tick() {
		this.y += gameSpeed;
		if (this.y > canvas.height) {
			this.remove();
			addNewGameObject();
		}
		if (collision(this, carObject)) {
			this.remove();
			addNewGameObject();
			carObject.score += 100;
		}	this.playSound();
	}

	remove() {
		gameObjects.splice(gameObjects.indexOf(this), 1);
		for (var i = 0; i <= 9; i++) {
			if ((this.x >= i * 80) && (this.x < i * 80 + 80)) {
				gameObjectsPositions[i] = false;
			}
		}
	}

	playSound() {
		this.sound.pause();
		this.sound.currentTime = 0;
		this.sound.play();
	}
}