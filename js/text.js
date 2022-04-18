x=Math.floor(Math.random() * 6)+1;
y=Math.floor(Math.random() * 6)+1;
var str1=" ";
var str2=" ";
for (var i =x - 1; i >= 0; i--) {
	str1+= "<div class='circle'></div>";
 	
} 

for (var i =y - 1; i >= 0; i--) {
	
 	
str2+= "<div class=' circle'></div>";
}

document.querySelector(".dice1").innerHTML=str1;
document.querySelector(".dice2").innerHTML=str2;

if(x>y)
	document.querySelector("h1").innerHTML="player1 wins!";

else if(x<y)
	document.querySelector("h1").innerHTML="player2 wins!";
else
	document.querySelector("h1").innerHTML="Refresh me!";

/*document.querySelector("h1").innerHTML="sss";

var newdiv = document.createElement('div');

    newdiv.style.className="circle";


document.getElementsByTagName('div')[0].appendChild(newdiv); */



