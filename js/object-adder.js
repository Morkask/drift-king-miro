function addNewGameObject() {
	var randomPosition = Math.floor(Math.random() * 10);
	var randomObjectType = Math.floor(Math.random() * 100);
	var objectAdded = false;

	if (randomObjectType % 2 == 0) { // adds trash - highest possibility
		while (objectAdded == false) {
			if (gameObjectsPositions[randomPosition] == false) {
				gameObjects.push(new Trash(randomPosition * 80, 0 - 100 - Math.floor(Math.random() * 600)));
				gameObjectsPositions[randomPosition] = true;
				objectAdded = true;
			} else {
				if (randomPosition == 9)
					randomPosition = 0;
				else
					randomPosition++;
			}
		}

	} else if (randomObjectType % 13 == 0) { // adds life
		while (objectAdded == false) {
			if (gameObjectsPositions[randomPosition] == false) {
				gameObjects.push(new Heart(randomPosition * 80, 0 - 100 - Math.floor(Math.random() * 600)));
				gameObjectsPositions[randomPosition] = true;
				objectAdded = true;
			} else {
				if (randomPosition == 9)
					randomPosition = 0;
				else
					randomPosition++;
			}
		}

	} else if (randomObjectType % 15 == 0) { // adds bonus
		while (objectAdded == false) {
			if (gameObjectsPositions[randomPosition] == false) {
				gameObjects.push(new Bonus(randomPosition * 80, 0 - 100 - Math.floor(Math.random() * 600)));
				gameObjectsPositions[randomPosition] = true;
				objectAdded = true;
			} else {
				if (randomPosition == 9)
					randomPosition = 0;
				else
					randomPosition++;
			}
		}

	} else if (randomObjectType % 17 == 0) { // adds alien gun
		while (objectAdded == false) {
			if (gameObjectsPositions[randomPosition] == false) {
				gameObjects.push(new Alien(randomPosition * 80, 0 - 100 - Math.floor(Math.random() * 600)));
				gameObjectsPositions[randomPosition] = true;
				objectAdded = true;
			} else {
				if (randomPosition == 9)
					randomPosition = 0;
				else
					randomPosition++;
			}
		}
		
	} else {
		while (objectAdded == false) { // adds beer - else = pretty big chance
			if (gameObjectsPositions[randomPosition] == false) {
				gameObjects.push(new Beer(randomPosition * 80 + 5, 0 - 100 - Math.floor(Math.random() * 600)));
				gameObjectsPositions[randomPosition] = true;
				objectAdded = true;
			} else {
				if (randomPosition == 9)
					randomPosition = 0;
				else
					randomPosition++;
			}
		}
	}
}