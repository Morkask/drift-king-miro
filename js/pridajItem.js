function pridajItem(){
	var randomCislo= Math.floor(Math.random() * 10);
	var randomCislo2= Math.floor(Math.random() * 100);
	var pridalo=false;
	if(randomCislo2%2==0){
		while(pridalo==false){
			if(pozicie[randomCislo]==false){
				itemy.push(new kos(randomCislo*80, 0-100- Math.floor(Math.random() * 600)));
				pozicie[randomCislo]=true;
				pridalo=true;
			}
			else{
				if(randomCislo==9)
					randomCislo=0;
				else
					randomCislo++;
			}
		}
	}
	else if(randomCislo2%13==0){
		while(pridalo==false){
			if(pozicie[randomCislo]==false){
				itemy.push(new zivot(randomCislo*80, 0-100- Math.floor(Math.random() * 600)));
				pozicie[randomCislo]=true;
				pridalo=true;
			}
			else{
				if(randomCislo==9)
					randomCislo=0;
				else
					randomCislo++;
			}
		}
	}
	else if(randomCislo2%15==0){
		while(pridalo==false){
			if(pozicie[randomCislo]==false){
				itemy.push(new bonus(randomCislo*80, 0-100- Math.floor(Math.random() * 600)));
				pozicie[randomCislo]=true;
				pridalo=true;
			}
			else{
				if(randomCislo==9)
					randomCislo=0;
				else
					randomCislo++;
			}
		}
	}
	else if(randomCislo2%17==0){
		while(pridalo==false){
			if(pozicie[randomCislo]==false){
				itemy.push(new alien(randomCislo*80, 0-100- Math.floor(Math.random() * 600)));
				pozicie[randomCislo]=true;
				pridalo=true;
			}
			else{
				if(randomCislo==9)
					randomCislo=0;
				else
					randomCislo++;
			}
		}
	}
	else{
		while(pridalo==false){
			if(pozicie[randomCislo]==false){
				itemy.push(new pivo(randomCislo*80+5, 0-100- Math.floor(Math.random() * 600)));
				pozicie[randomCislo]=true;
				pridalo=true;
			}
			else{
				if(randomCislo==9)
					randomCislo=0;
				else
					randomCislo++;
			}
		}
	}
}