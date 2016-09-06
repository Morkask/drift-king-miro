function bonus(x, y) {
    this.x = x;
    this.y = y;
    this.width= 80;
	this.height= 100;
	bonusIMG = new Image();
	bonusIMG.src = '../img/objects/bonus.png';
	
    this.render = function(){
    	obj.drawImage(bonusIMG, this.x, this.y, this.width, this.height);

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
				car.score+=100;
				tada.pause();
				tada.currentTime = 0;
				tada.play();

		}
    };
}