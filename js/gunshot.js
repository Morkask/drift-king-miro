class Gunshot {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 30;
        this.img = new Image();
        this.img.src = 'img/objects/gunshot.png';
        this.speed = 10;
    }

    render() {
        objectsContext.drawImage(this.img, this.x, this.y, this.width, this.height);
    };

    tick() {
        this.y -= this.speed;
        if (this.y + this.height < 0) {
            gunShots.splice(gunShots.indexOf(this), 1);
        }
    }
}