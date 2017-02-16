//Logika
function tick(){
	if(stavHry=="loading"){
		for(i in artefakty){
			artefakty[i].tick();
		}
		if(Key.space == true){
			Key.space = false;
			stavHry = "instructions";
		}
	}
	if(stavHry == "instructions"){
		for(i in artefakty){
			artefakty[i].tick();
		}
		if(Key.space == true){
			Key.space = false;
			stavHry = "hra";
		}
		if(Key.space == true){
			Key.space = false;
			stavHry = "hra";
		}
		if(Key.keyX == true){
			Key.keyX = false;
			selectCAR = "FORD ESCORT";
		}
		if(Key.keyC == true){
			Key.keyC = false;
			selectCAR = "FELICIA PICKUP";
		}
		if(Key.keyV == true){
			Key.keyV = false;
			selectCAR = "JAWA MOSQUIT";
		}
	}
	if(stavHry=="hra"){
		intro.pause();
		bangr.loop = true;
		bangr.play();
		car.tick();
		for(i in itemy){
			itemy[i].tick();
		}
		if(Key.space == true)
			car.shoot();
		for(i in gunshots)
			gunshots[i].tick();
		GUIo.tick();
		road.tick();
		if(car.lives<1){
			outro.currentTime = 0;
			stavHry="gameover";
			
			bangr.pause();
			car.lives=zivoty;
			if(car.score>hiScore){
				hiScore=car.score;
				localStorage.setItem("hiscore", car.score);
				nowHi = true;
			}
		}
	}
	if(stavHry=="gameover"){
		outro.play();
		if(Key.space == true){
			nowHi=false;
			Key.space = false;
			stavHry = "instructions";
			outro.pause();
			bangr.currentTime = 0;
			car.score=0;
			car.gun=0;
			speed=povodnaSpeed;
			car.x= canvas.width/2-35;
			car.y= canvas.height-158;
			for(i in itemy){
				itemy.splice(i);
			}
			for(i in gunshots){
				gunshots.splice(i);
			}
			inItemy(pocetItemov);
		}
	}
}