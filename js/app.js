// Enemy class
var Enemy = function(x,y,speed,img) {
    //class variable
	this.x=x;
	this.y=y;
	this.speed=speed;	
    this.sprite = img;
};

// Update Enemy speed
Enemy.prototype.update = function(dt) {
	this.x+=this.speed;
};

// Drawing Enemy on screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player class
var Player=function(x,y){
	this.x=x;
	this.y=y;
	this.sprite = 'images/char-princess-girl.png';
};

//Update player position checking collision detection
Player.prototype.update=function(dt){
	for (let Enemy of allEnemies){
		if (this.x < Enemy.x + 65 && 
		this.x + 65 > Enemy.x && 
		this.y < Enemy.y + 40 
		&& 40 + this.y > Enemy.y) {
			// collision detected!
			collision.play();  //collisiom detected then play song			
			this.x = 200;
			this.y = 300;
			//updating score
			var score = document.getElementById("score").innerHTML;
			if(score!=0){
				document.getElementById("score").textContent = Number(score)-5;
			}
		}
			
	}
	//if player reached at water then he/she won the game.
	if(this.y==-20){
		time.stoptimer=1;
		allScores=[];
		won.play();
		var score = document.getElementById("score").innerHTML;
		document.getElementById("scoreInfo").textContent = "Your score:"+score+" AND "+"Time taken"+time.h+":"+time.m+":"+time.s;
		document.getElementById("myModal").style.display = "block";
	}

};//end update

//Drawing player
Player.prototype.render=function(){
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}//render end

//UP/Down/Left/Right key pressed then change Player position
Player.prototype.handleInput=function(param){
	footStep.play();
	if(param=='up'){
		this.y-=80;
		
		if(this.y<-20 || this.y>=400)
			this.y+=80;
		 
	}
	else if(param=='down'){
		this.y+=80;
		if(this.y<-20 || this.y>=400)
			this.y-=80;
	}
	else if(param=='left'){
		this.x-=100;
		if(this.x<0 || this.x>=500)
			this.x+=100;
	}
	else if(param=='right'){
		this.x+=100;
		if(this.x<0 || this.x>=500)
			this.x-=100;
	}	
	
};//end handleInput

//Score class
var Score=function(x,y,img){
	this.x=x;
	this.y=y;
	this.sprite = img;
};

//if player catch star
Score.prototype.update=function(dt){
	for (let Score of allScores){
		if (Score.x < player.x + 90 && 
			Score.x + 90 > player.x && 
			Score.y < player.y + 40 
			&& 40 + Score.y > player.y) {
			scoreAudio.play();
			delete Score.x;
			delete Score.y;
			//updating score Info
			var score = document.getElementById("score").innerHTML;
			document.getElementById("score").textContent = Number(score)+5;
		}
	}
};//end update

//Drawing star/gems
Score.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};//render end


 //Timer class
 var Time=function(){
	this.s=0;  //second
	this.m=0;	//minute
	this.h=0;	//hours	
	this.stoptimer=0;	//flag for won game stop timer

 }
 
 Time.prototype.getTime=function(){
	this.s++;
    if(this.s<10){
		this.s = "0"+this.s;
    }else if(this.s>=60 && this.m<60){
		this.m++;
		this.s=0;
	}else if(this.m>=60)
	{
		this.h++;
		 this.m=0;
		 this.s=0;
	}

    //$(".timer").text(h+" : "+m+" : "+s);
	document.getElementById("timer").textContent=this.h+" : "+this.m+" : "+this.s; 
	if(this.stoptimer==0){
    setTimeout(function(){time.getTime()}, 1000);
    }
 }
 
 //Enemy object creation
let enemy=new Enemy();
let allEnemies=[];

window.setInterval(function () {
	allEnemies.push(new Enemy(1, 75,3,'images/enemy-bug.png'));
}, 2000);

window.setInterval(function () {
	allEnemies.push(new Enemy(1, 150,2,'images/enemy-bug.png'));
}, 3000);

window.setInterval(function () {
	allEnemies.push(new Enemy(1, 220,5,'images/enemy-bug.png'));
}, 4000);

//Player object creation
let player=new Player(200,380);

//Score object creation
let score=new Score();
let allScores=[];
let imgArray=['images/Star.png','images/Gem-Green.png','images/Gem-Orange.png','images/Heart.png'];

window.setInterval(function () {
	allScores.push(new Score(Math.floor(Math.random()*400),Math.floor(Math.random()*300),imgArray[Math.floor(Math.random()*4)]));
}, 3000);

//disappear score object after particular time period
window.setInterval(function(){
	allScores=[];
},6000);

//Timer object creation
var time=new Time();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
window.onload=time.getTime();
document.addEventListener('keyup', function(e) {
    
	var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
