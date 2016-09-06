function zivot(x, y) {
    this.x = x;
    this.y = y;
    this.width= 80;
	this.height= 72;
	heartIMG = new Image();
	heartIMG.src = '../img/objects/heart.png';
	
    this.render = function(){
    	obj.drawImage(heartIMG, this.x, this.y, this.width, this.height);

    };

    this.tick = function(){
			this.y+=speed;
    	if(this.y>canvas.height){
    		itemy.splice(itemy.indexOf(this),1);
				for(var i=0;i<=9;i++){
					if((this.x>=i*80)&&(this.x<i*80+80)){
						pozicie[i]=false;
					}
				}
				pridajItem();
    	}
    	if(collision(this, car)){
				itemy.splice(itemy.indexOf(this),1);
				for(var i=0;i<=9;i++){
					if((this.x>=i*80)&&(this.x<i*80+80)){
						pozicie[i]=false;
					}
				}
				pridajItem();
				if(car.lives<=20)
					car.lives+=1;
				else
					car.score+=100;
				alert.pause();
				alert.currentTime = 0;
				alert.play();

		}
    };
}