class Alien {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.width = 80;
		this.height = 40;
		this.alienIMG = new Image();
		this.alienIMG.src = 'img/objects/alien.png';
		this.sound = new Audio("music/sfx/alien.mp3");
		this.soundScream = new Audio("music/sfx/alienSCREAM.mp3");
	}

	render() {
		objectsContext.drawImage(this.alienIMG, this.x, this.y, this.width, this.height);
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
			carObject.gun = 10;
			this.playSound();
		}
		if (gunShots[0] != null) {
			if (collision(this, gunShots[0])) {
				gunShots.splice(0, 1);
				this.remove();
				addNewGameObject();
				carObject.score += 10;
				this.playScreamSound();
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

	playScreamSound() {
		this.soundScream.pause();
		this.soundScream.currentTime = 0;
		this.soundScream.play();
	}
}