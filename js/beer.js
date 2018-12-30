class Beer {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 60;
		this.height = 72;
		this.img = new Image();
		this.img.src = 'img/objects/pivo.png';
		this.sound = new Audio("music/sfx/burp.mp3");
	}

	render() {
		objectsContext.drawImage(this.img, this.x, this.y, this.width, this.height);
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
			carObject.score += 10;
			this.playSound();
		}
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