//Canvas+context
var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
var obj = document.getElementById('objekty');
obj = canvas.getContext('2d');
var canvas = document.getElementById('efekty');
efekty = canvas.getContext('2d');
var canvas = document.getElementById('GUI');
GUI = canvas.getContext('2d');

//Hudba & Zvuky
var intro = document.getElementById('intro');
var bangr = document.getElementById('bangr');
var outro = document.getElementById('outro');
var bum = document.getElementById('bum');
var burp = document.getElementById('burp');
var alert = document.getElementById('alert');
var tada = document.getElementById('tada');
var alienHUDBA = document.getElementById('alien');
var alienSCREAM = document.getElementById('alienSCREAM');
var gunSOUND = document.getElementById('gunSOUND');
intro.loop=true;
intro.play();

//Images
ldng = new Image();
ldng.src = '../img/backgrounds/loading.jpg';
gmover = new Image();
gmover.src = '../img/backgrounds/gameover.jpg';
roadTexture= new Image();
roadTexture.src= '../img/backgrounds/road.jpg';

//Premenne suvisiave s hrou
var FPS = 60;
var zivoty = 5;
var stavHry = "loading";
var pocetArtefaktov = 500;
var pocetItemov = 5;
var speed = 5;
var povodnaSpeed = speed;
var selectCAR="FORD ESCORT";

//Polia objektov
var artefakty = [];
var itemy = [];
var gunshots = [];
