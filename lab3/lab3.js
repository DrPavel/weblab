var lab=false;
var r=0.000;
var m=0.000;
var h=0.000;
var h0=0.000;
var q=0.000;
var time=0.000;



function tel_poz(){
	if((h<1)&(lab==true)){
	
		//var a=rs*m*g/1;
		h=(1-h0)+0.046*m*9.82*time*time/(8*0.220*r);
		q=h*360*6.9197;
		block.style.top=((h)*384+15)+"px";
		ver.style.height=((h)*384+6)+"px";
		kol.style.transform=" rotate(-"+(q)+"deg)";
		document.getElementById("time").innerHTML="t="+Math.abs((Math.floor(time*100)/100))+" с."
		time+=0.01;
		setTimeout(tel_poz,10);
	}
}

function start_l(){
	
	r=parseFloat(document.getElementById("rad").value);
	m=parseFloat(document.getElementById("mass").value);
	h0=parseFloat(document.getElementById("h0").value);
	lab=true;
	setTimeout(tel_poz,1);
}

function stop_l(){
	lab=false;
}

function res_l(){
	lab=false;
	h=1-h0;
	time=0;
	q=h*360*6.9197;
	block.style.top=((h)*384+15)+"px";
	ver.style.height=((h)*384+6)+"px";
	kol.style.transform=" rotate(-"+(q)+"deg)";
	document.getElementById("time").innerHTML="t=0 c."
	document.getElementById("graf_speed").innerHTML="";
	document.getElementById("graf_poz").innerHTML="";
}

function poz_block(){
	h=1-parseFloat(document.getElementById("h0").value);
	q=h*360*6.9197;
	block.style.top=((h)*384+15)+"px";
	ver.style.height=((h)*384+6)+"px";
	kol.style.transform=" rotate(-"+(q)+"deg)";
	poz_kol();
	
}

function poz_kol(){
	r=parseFloat(document.getElementById("rad").value);
	kol1.style.top=(137+(r)*384)+"px";
	kol2.style.top=(102-(r)*384)+"px";
	kol3.style.left=(103-(r)*384)+"px";
	kol4.style.left=(138+(r)*384)+"px";
}