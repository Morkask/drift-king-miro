function strela(x, y) {
    this.x = x;
    this.y = y;
    this.width= 10;
	this.height= 30;
	gunshotIMG = new Image();
	gunshotIMG.src = 'img/objects/gunshot.png';
	this.speed=10;

    this.render = function(){
    	obj.drawImage(gunshotIMG, this.x, this.y, this.width, this.height);
    };

    this.tick = function(){
    	this.y-=this.speed;
    	if(this.y+this.height<0)
            gunshots.splice(gunshots.indexOf(this), 1);

    }
}