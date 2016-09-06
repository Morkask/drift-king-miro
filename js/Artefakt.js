function Artefakt(x, y){
	this.x = x;
	this.y = y;
	this.size = Math.floor(Math.random() * 1.5);

	this.render = function(){
		if(Math.random>0.5){
			efekty.fillStyle = "green";
		}
		else{
			efekty.fillStyle = "blue";
		}
		efekty.fillRect(this.x, this.y, this.size, this.size);
	};

	this.tick = function(){
		this.y = Math.random()*canvas.height;
		this.x = Math.random()*canvas.width;
	};
};
