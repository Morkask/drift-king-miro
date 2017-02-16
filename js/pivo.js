function pivo(x, y) {
    this.x = x;
    this.y = y;
    this.width= 60;
	this.height= 72;
	pivoIMG = new Image();
	pivoIMG.src = 'img/objects/pivo.png';
	vybuch = new Image();
	vybuch.src = 'img/objects/vybuch.png';

    this.render = function(){
    	obj.drawImage(pivoIMG, this.x, this.y, this.width, this.height);

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
				car.score+=10;
				burp.pause();
				burp.currentTime = 0;
				burp.play();

		}
    };
}