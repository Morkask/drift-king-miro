class Trash {

	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 80;
		this.height = 118;
		this.trashIMG = new Image();
		this.trashIMG.src = 'img/objects/trash.png';
		this.crashIMG = new Image();
		this.crashIMG.src = 'img/objects/crash.png';
		this.sound = new Audio('music/sfx/bum.mp3');
	}


	render() {
		objectsContext.drawImage(this.trashIMG, this.x, this.y, this.width, this.height);
	};

	tick() {
		this.y += gameSpeed;
		if (this.y > canvas.height) {
			this.remove();
			addNewGameObject();
		}
		if (collision(this, carObject)) {
			this.remove();
			addNewGameObject();
			carObject.lives--;
			this.playSound();
			objectsContext.drawImage(this.crashIMG, this.x, this.y, this.width, this.height);
		}
		if (gunShots[0] != null) {
			if (collision(this, gunShots[0])) {
				gunShots.splice(0, 1);
				this.remove();
				addNewGameObject();
				this.playSound();
				objectsContext.drawImage(this.crashIMG, this.x, this.y, this.width, this.height);
			}
		}
	}

	remove() {
		gameObjects.splice(gameObjects.indexOf(this), 1);
		for (var i = 0; i <= 9; i++) {
			if (this.x >= i * 80 && this.x < i * 80 + 80) {
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