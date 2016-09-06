
//Inicializacia
inicializacia();
function inicializacia(){
	var pozicie = [false, false, false, false, false, false, false, false, false, false];
	inArtefakty(pocetArtefaktov);
	inItemy(pocetItemov);
};

function inArtefakty(pocet){
	for(var i=0; i < pocet; i++){
		artefakty.push(new Artefakt(Math.random() * canvas.width, Math.random() * canvas.height));
	}
}

function inItemy(pocet){
	//10 pozicii v canvase
	pozicie = [false, false, false, false, false, false, false, false, false, false];
	for(var i=0;i<pocet;i++){
		pridajItem();
	}
}

function collision(obj1, obj2){
	return (
		obj1.x < obj2.x + obj2.width &&
		obj1.x + obj1.width > obj2.x &&
		obj1.y < obj2.y + obj2.height &&
		obj1.y + obj1.height > obj2.y
	);
};

//FPS
setInterval(function(){
	vykreslenie();
	tick();
}, 1000/FPS);

