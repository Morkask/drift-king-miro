//Ovladanie
var Key = {
	up: false,
	down: false,
	right: false,
	left: false,
	space: false
};

addEventListener("keydown", function (e){
	var keyCode = e.keyCode;
	if(keyCode == 37 || keyCode == 65)	{ Key.left  = true; }
	if(keyCode == 38 || keyCode == 87)	{ Key.up    = true; }
	if(keyCode == 39 || keyCode == 68)	{ Key.right = true; }
	if(keyCode == 40 || keyCode == 83)	{ Key.down  = true; }
	if(keyCode == 32)					{ Key.space = true; }
	if(keyCode == 88)					{ Key.keyX = true; }
	if(keyCode == 67)					{ Key.keyC = true; }
	if(keyCode == 86)					{ Key.keyV = true; }
}, false);

addEventListener("keyup", function (e){
	var keyCode = (e.keyCode) ? (e.keyCode) : e.which;
	if(keyCode == 37 || keyCode == 65)	{ Key.left  = false; }
	if(keyCode == 38 || keyCode == 87)	{ Key.up    = false; }
	if(keyCode == 39 || keyCode == 68)	{ Key.right = false; }
	if(keyCode == 40 || keyCode == 83)	{ Key.down  = false; }
	if(keyCode == 32)				 	{ Key.space = false; }
	if(keyCode == 88)					{ Key.keyX = false; }
	if(keyCode == 67)					{ Key.keyC = false; }
	if(keyCode == 86)					{ Key.keyV = false; }
}, false);