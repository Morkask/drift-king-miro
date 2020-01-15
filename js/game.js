/**
 * CANVASES
 */
var canvas = document.getElementById('objects');
var objectsContext = canvas.getContext('2d');
var guiContext = document.getElementById('gui').getContext('2d');

/**
 * MUSIC
 */
var audioMain = document.getElementById('main-audio');
var audioOutro = document.getElementById('outro-audio');

/**
 * IMAGES
 */
var imageLoading = new Image();
imageLoading.src = 'img/backgrounds/loading.jpg';
var imageGameOver = new Image();
imageGameOver.src = 'img/backgrounds/gameover.jpg';

/**
 * GAME VARIABLES
 */
var framesPerSecond = 60;
var numberOfLives = 5;
var gameState = "loading";
var numberOfGameObjects = 5;
var gameObjectsPositions = [false, false, false, false, false, false, false, false, false, false];
var gameSpeed = 5;
var gameSpeedingAmount = 0.001;
var initialGameSpeed = gameSpeed;
var selectedCar = "FORD ESCORT";
var hiScore = localStorage.getItem("hiscore") == null ? 0 : localStorage.getItem("hiscore");
var hiScoreReached = false;

/**
 * GAME OBJECTS
 */
var gameObjects = [];
var carObject = new Car();
var roadObject = new Road();
var gunShots = [];

/**
 * Creates gameobjects for the start of the game
 */
function initializeGame() {
	hiScoreReached = false;
	audioMain.currentTime = 0;
	gameSpeed = initialGameSpeed;
	gameObjectsPositions = [false, false, false, false, false, false, false, false, false, false];
	gameObjects = [];
	carObject = new Car();
	roadObject = new Road();
	gunShots = [];
	for (var i = 0; i < numberOfGameObjects; i++) {
		addNewGameObject();
	}
};

document.addEventListener("DOMContentLoaded", function (event) {
	initializeGame();
	setInterval(function () {
		render();
		tick();
	}, 1000 / framesPerSecond);
});

