var lab=false;
var r=0;
var m=0;
var h=0;
var q=0;
var time=0.000;


function tel_poz(){
	if((h<100)&(lab==true)){
		r=parseInt(document.getElementById("rad").value);
		m=parseInt(document.getElementById("mass").value);
	
		//var a=rs*m*g/1;
		h=0.046*m*9.82*time*time/(8*0.220*r);
		q=h*360/100*6.9197;
		block.style.top=((h)*3.81+15)+"px";
		kol.style.transform=" rotate(-"+(q)+"deg)";
		document.getElementById("time").innerHTML="t="+Math.abs((Math.floor(time*100)/100))+" с."
		time+=0.05;
		setTimeout(tel_poz,50);
	}
}

function start_l(){
	lab=true;
	setTimeout(tel_poz,1);
}

function stop_l(){
	lab=false;
}

function res_l(){
	lab=false;
	h=0;
	time=0;
	block.style.top=((h)*3.84+15)+"px";
	kol.style.transform=" rotate(0deg)";
	document.getElementById("time").innerHTML="t=0 c."
	document.getElementById("graf_speed").innerHTML="";
	document.getElementById("graf_poz").innerHTML="";
}