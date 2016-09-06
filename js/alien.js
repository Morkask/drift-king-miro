function alien(x, y) {
    this.x = x;
    this.y = y;
    this.width= 80;
	this.height= 40;
	alienIMG = new Image();
	alienIMG.src = '../img/objects/alien.png';

    this.render = function(){
    	obj.drawImage(alienIMG, this.x, this.y, this.width, this.height);
    };

    this.tick = function(){
    	this.y+=speed;
    	if(this.y>canvas.height){
    		itemy.splice(itemy.indexOf(this),1);
				for(var i=0;i<=9;i++){
					if(this.x>=i*80&&this.x<i*80+80){
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
				//car.lives--;
				car.score+=10;
				car.gun=10;
				alienHUDBA.pause();
				alienHUDBA.currentTime = 0;
				alienHUDBA.play();
		}
		if(gunshots[0]!=null){
			if(collision(this, gunshots[0])){
					itemy.splice(itemy.indexOf(this),1);
					for(var i=0;i<=9;i++){
						if((this.x>=i*80)&&(this.x<i*80+80)){
							pozicie[i]=false;
						}
					}
					pridajItem();
					car.score+=10;
					alienSCREAM.pause();
					alienSCREAM.currentTime = 0;
					alienSCREAM.play();
			}
	}
    }
}