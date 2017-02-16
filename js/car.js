var car={
	x: canvas.width/2-35,
	y: canvas.height-158,
	carSpeed: 10,
	brzdi: 0,
	dolava: 0,
	doprava: 0,
	width: 70,
	height: 158,
	score: 0,
    lives: zivoty,
    gun: 0,

	tick: function(){
		this.brzdi=0;
		this.doprava=0;
		this.dolava=0;
		if(Key.right){
			this.x+=this.carSpeed;
			this.doprava=1;
		}
		if(Key.left){
			this.x-=this.carSpeed;
			this.dolava=1;
		}
		if(Key.up){
			this.y-=this.carSpeed;
		}
		if(Key.down){
			this.brzdi=1;
			this.y+=this.carSpeed;
		}
		if(this.x>canvas.width-70){
			this.x=canvas.width-70;
		}
		if(this.x<0){
			this.x=0;
		}
		if(this.y>canvas.height-158){
			this.y=canvas.height-158;
		}
		if(this.y<0){
			this.y=0;
		}
		
	},

	render: function(){
		if(selectCAR=="FORD ESCORT"){
			carIMG = new Image();
			carIMG.src = 'img/objects/carBLUE/car.png';
			carIMGb = new Image();
			carIMGb.src = 'img/objects/carBLUE/car-breaks.png';
			carIMGl = new Image();
			carIMGl.src = 'img/objects/carBLUE/car-left.png';
			carIMGr = new Image();
			carIMGr.src = 'img/objects/carBLUE/car-right.png';
		}
		else if(selectCAR=="FELICIA PICKUP"){
			carIMG = new Image();
			carIMG.src = 'img/objects/carRED/car.png';
			carIMGb = new Image();
			carIMGb.src = 'img/objects/carRED/car-breaks.png';
			carIMGl = new Image();
			carIMGl.src = 'img/objects/carRED/car-left.png';
			carIMGr = new Image();
			carIMGr.src = 'img/objects/carRED/car-right.png';
		}
		else if(selectCAR=="JAWA MOSQUIT"){
			carIMG = new Image();
			carIMG.src = 'img/objects/carBLACK/car.png';
			carIMGb = new Image();
			carIMGb.src = 'img/objects/carBLACK/car-breaks.png';
			carIMGl = new Image();
			carIMGl.src = 'img/objects/carBLACK/car-left.png';
			carIMGr = new Image();
			carIMGr.src = 'img/objects/carBLACK/car-right.png';
		}
		if(this.brzdi==1)
			obj.drawImage(carIMGb, this.x, this.y, this.width, this.height);
		else if(this.dolava==1)
			obj.drawImage(carIMGl, this.x, this.y, this.width, this.height);
		else if(this.doprava==1)
			obj.drawImage(carIMGr, this.x, this.y, this.width, this.height);
		else
			obj.drawImage(carIMG, this.x, this.y, this.width, this.height);
	},

	shoot: function(){
		if(this.gun>0){
			if(gunshots[0]==null){
				gunshots.push(new strela(this.x+this.width/2-5, this.y));
				this.gun--;
				gunSOUND.pause();
				gunSOUND.currentTime = 0;
				gunSOUND.play();
			}
		}
	}
};