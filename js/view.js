//View
function vykreslenie(){
	if(stavHry == "loading") {
		efekty.clearRect(0, 0, canvas.width, canvas.height);
  		context.drawImage(ldng, 0, 0);
  		GUI.fillStyle = "#00ffa8";
		GUI.font = "bold 18px consolas";
		GUI.fillText("Press SPACE to start.", canvas.width/2-90, (canvas.height/2)+20);
  		for(i in artefakty){
			artefakty[i].render();
		}
	}
	if(stavHry == "instructions"){
		efekty.clearRect(0, 0, canvas.width, canvas.height);
		context.clearRect(0, 0, canvas.width, canvas.height);
		GUI.clearRect(0, 0, canvas.width, canvas.height);
		GUI.fillStyle = "00ffa8";
		GUI.font = "bold 20px arial";
		GUI.textAlign = "center";
		GUI.fillText("FORD ESCORT: press X || FELICIA PICKUP: press C || JAWA MOSQUIT: press V", canvas.width/2, (canvas.height/2)-260);
		if(selectCAR=="FORD ESCORT"){
			GUI.fillStyle = "blue";
			carIMG = new Image();
			carIMG.src = '../img/objects/carBLUE/car.png';
			carLOGO=new Image();
			carLOGO.src= '../img/logoFORD.png';
		}
		if(selectCAR=="FELICIA PICKUP"){
			GUI.fillStyle = "white";
			carIMG = new Image();
			carIMG.src = '../img/objects/carRED/car.png';
			carLOGO=new Image();
			carLOGO.src= '../img/logoSKODA.png';
		}
		if(selectCAR=="JAWA MOSQUIT"){
			GUI.fillStyle = "red";
			carIMG = new Image();
			carIMG.src = '../img/objects/carBLACK/car.png';
			carLOGO=new Image();
			carLOGO.src= '../img/logoJAWA.png';
		}
		GUI.fillText("CURRENT CAR IS: "+selectCAR, canvas.width/2, (canvas.height/2)-230);
		obj.drawImage(carIMG, canvas.width/2-car.width/2, canvas.height/2-200, 70, 158);
		obj.drawImage(carLOGO, canvas.width/2-240/2, canvas.height/2-0, 240, 90);
		GUI.fillStyle = "#00ffa8";
		GUI.font = "bold 18px arial";
		GUI.textAlign = "center";
		GUI.fillText("Use WASD or arrows to control Miro.", canvas.width/2, (canvas.height/2)+180);
		GUI.fillText("Use SPACE to shoot if you have GUNSHOTS.", canvas.width/2, (canvas.height/2)+200);
		GUI.fillText("Press SPACE to start.", canvas.width/2, (canvas.height/2)+220);
		for(i in artefakty){
			artefakty[i].render();
		}
	}
	if(stavHry == "hra") {
		context.clearRect(0, 0, canvas.width, canvas.height);
		efekty.clearRect(0, 0, canvas.width, canvas.height);
		GUI.clearRect(0, 0, canvas.width, canvas.height);
    	road.render();
    	for(i in itemy){
    		itemy[i].render();
    	}
    	for(i in gunshots)
			gunshots[i].render();
    	car.render();
    	GUIo.render();
    }
   
    if(stavHry=="gameover"){
    	context.clearRect(0, 0, canvas.width, canvas.height);
		efekty.clearRect(0, 0, canvas.width, canvas.height);
		GUI.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(gmover, 0, 0, canvas.width, canvas.height);
		GUI.fillStyle = "#ca0000";
		GUI.font = "bold 72px consolas";
		GUI.textAlign = "center";
		GUI.fillText("GAME OVER MIRO", canvas.width/2, (canvas.height/2)-130);
		GUI.fillStyle = "#00ffa8";
		GUI.font = "bold 18px arial";
		GUI.textAlign = "center";
		GUI.fillText("Press SPACE to start again.", canvas.width/2, (canvas.height/2)-105);
		GUI.textAlign = "left";
		GUI.fillStyle = "rgba(255, 93, 0, 0.87)";
		GUI.font = "bold 50px consolas";
		GUI.fillText("SCORE: "+Math.floor(car.score), canvas.width/2-20, (canvas.height/2)-50);
	}
}

var GUIo={
	tick: function(){
	},

	render: function(){
		GUI.textAlign = "left";
		GUI.clearRect(0, 0, canvas.width, canvas.height);
		GUI.fillStyle = "#00ffa8";
		GUI.font = "bold 18px consolas";
		if(car.gun>0){
			GUI.fillText("GUN SHOTS: "+car.gun, 5, (canvas.height)-60);
		}
		GUI.fillStyle = "#00ffa8";
		GUI.font = "bold 18px consolas";
		GUI.fillText("LIVES: ", 5, (canvas.height)-40);
		for(i=0; i<car.lives;i++){
			GUI.fillStyle = "red";
			GUI.font = "bold 18px consolas";
			GUI.fillText("♥ ", 65+i*12, (canvas.height)-40);
		}

		GUI.fillStyle = "#00ffa8";
		GUI.font = "bold 18px consolas";
		GUI.fillText("SCORE:"+Math.floor(car.score), 5, (canvas.height)-20);
	}
};

var road={
	roadX:0,
	roadY:0,
	
	tick: function(){
		this.roadY+=speed;
		speed+=0.001;
		car.score+=1/60;
		if(this.roadY>canvas.height)
			this.roadY=0;
	},

	render: function(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(roadTexture, 0, this.roadY);
		context.drawImage(roadTexture, 0, this.roadY-canvas.height);
	}
};

