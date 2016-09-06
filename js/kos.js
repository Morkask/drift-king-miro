function kos(x, y) {
    this.x = x;
    this.y = y;
    this.width= 80;
	this.height= 118;
	kosIMG = new Image();
	kosIMG.src = '../img/objects/kos.png';

    this.render = function(){
    	obj.drawImage(kosIMG, this.x, this.y, this.width, this.height);
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
				car.lives--;
				bum.pause();
				bum.currentTime = 0;
				bum.play();
				obj.drawImage(vybuch, this.x, this.y, this.width, this.height);
		}
		if(gunshots[0]!=null){
			if(collision(this, gunshots[0])){
					itemy.splice(itemy.indexOf(this),1);
					gunshots.splice(0, 1);
					for(var i=0;i<=9;i++){
						if((this.x>=i*80)&&(this.x<i*80+80)){
							pozicie[i]=false;
						}
					}
					pridajItem();
					bum.pause();
					bum.currentTime = 0;
					bum.play();
					obj.drawImage(vybuch, this.x, this.y, this.width, this.height);

			}
	}
    }
}