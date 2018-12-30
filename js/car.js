class Car {

	constructor() {
		this.x = canvas.width / 2 - 35;
		this.y = canvas.height - 158;
		this.carSpeed = 10;
		this.isBreaking = false;
		this.left = false;
		this.right = false;
		this.width = 70;
		this.height = 158;
		this.score = 0;
		this.lives = numberOfLives;
		this.gun = 0;
		this.soundGun = new Audio("music/sfx/gun.mp3");
	}

	tick() {
		this.isBreaking = false;
		this.right = false;
		this.left = false;
		if (Key.right) {
			this.x += this.carSpeed;
			this.right = true;
		}
		if (Key.left) {
			this.x -= this.carSpeed;
			this.left = true;
		}
		if (Key.up) {
			this.y -= this.carSpeed;
		}
		if (Key.down) {
			this.isBreaking = true;
			this.y += this.carSpeed;
		}
		if (this.x > canvas.width - 70) {
			this.x = canvas.width - 70;
		}
		if (this.x < 0) {
			this.x = 0;
		}
		if (this.y > canvas.height - 158) {
			this.y = canvas.height - 158;
		}
		if (this.y < 0) {
			this.y = 0;
		}
	}

	render() {
		if (selectedCar == "FORD ESCORT") {
			this.carIMG = new Image();
			this.carIMG.src = 'img/objects/cars/ford/car.png';
			this.carIMGb = new Image();
			this.carIMGb.src = 'img/objects/cars/ford/car-breaks.png';
			this.carIMGl = new Image();
			this.carIMGl.src = 'img/objects/cars/ford/car-left.png';
			this.carIMGr = new Image();
			this.carIMGr.src = 'img/objects/cars/ford/car-right.png';
		} else if (selectedCar == "FELICIA PICKUP") {
			this.carIMG = new Image();
			this.carIMG.src = 'img/objects/cars/felicia/car.png';
			this.carIMGb = new Image();
			this.carIMGb.src = 'img/objects/cars/felicia/car-breaks.png';
			this.carIMGl = new Image();
			this.carIMGl.src = 'img/objects/cars/felicia/car-left.png';
			this.carIMGr = new Image();
			this.carIMGr.src = 'img/objects/cars/felicia/car-right.png';
		} else if (selectedCar == "JAWA MOSQUIT") {
			this.carIMG = new Image();
			this.carIMG.src = 'img/objects/cars/jawa/car.png';
			this.carIMGb = new Image();
			this.carIMGb.src = 'img/objects/cars/jawa/car-breaks.png';
			this.carIMGl = new Image();
			this.carIMGl.src = 'img/objects/cars/jawa/car-left.png';
			this.carIMGr = new Image();
			this.carIMGr.src = 'img/objects/cars/jawa/car-right.png';
		}
		if (this.isBreaking) {
			objectsContext.drawImage(this.carIMGb, this.x, this.y, this.width, this.height);
		} else if (this.left) {
			objectsContext.drawImage(this.carIMGl, this.x, this.y, this.width, this.height);
		} else if (this.right) {
			objectsContext.drawImage(this.carIMGr, this.x, this.y, this.width, this.height);

		} else {
			objectsContext.drawImage(this.carIMG, this.x, this.y, this.width, this.height);
		}
	}

	shoot() {
		if (this.gun > 0) {
			if (gunShots[0] == null) {
				gunShots.push(new Gunshot(this.x + this.width / 2 - 5, this.y));
				this.gun--;
				this.soundGun.pause();
				this.soundGun.currentTime = 0;
				this.soundGun.play();
			}
		}
	}
}