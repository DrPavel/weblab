// JavaScript Document
var time=0;
var poz=0;
var lab=false;
var dat=0;
var old_speed=0;
var old_poz=0;
var speed=0;

function tel_poz(){
	speed_0=document.getElementById("speed_0").value;
	mass=document.getElementById("mass").value;
	corner=document.getElementById("corner").value*Math.PI / 180;
	frict=document.getElementById("frict").value;
	if((poz<110)&(lab==true)){
		tel_1.style.left=poz*(Math.PI)*Math.cos(corner)+120+"px";
		tel_1.style.top=poz*(Math.PI)*Math.sin(corner)+299+"px";
		var a=-9.82*Math.sin(corner)-frict*9.82*Math.cos(corner);
		poz=speed_0*time+a*time*time/2;
		speed=speed_0+a*time;
		if((time%10==0)&(time!=0)){
			document.getElementById("graf_speed").innerHTML+="<line x1='"+(time-10+10)+"' y1='"+(250-old_speed-10)+"' x2='"+(time+10)+"' y2='"+(250-speed-10)+"' />";
			old_speed=speed;
			document.getElementById("graf_poz").innerHTML+="<line x1='"+(time-10+10)+"' y1='"+(250-old_poz-10)+"' x2='"+(time+10)+"' y2='"+(250-poz-10)+"' />";
			old_poz=poz;
		}
		document.getElementById("time").innerHTML="t="+time+" мс."
		document.getElementById("pozition").innerHTML="x="+(poz)+" мм."
		document.getElementById("speed").innerHTML="v="+(speed)+" мм./мc."
		time++;
		setTimeout(tel_poz,1);
	}
}

function start_l(){
	lab=true;
	speed=document.getElementById("speed_0").value;
	setTimeout(tel_poz,1);
}

function stop_l(){
	lab=false;
}

function res_l(){
	lab=false;
	poz=0;
	time=0;
	tel_1.style.left=poz+120+"px";
	tel_1.style.top=poz+299+"px";
	
	document.getElementById("time").innerHTML="t=0 мс."
	document.getElementById("pozition").innerHTML="x=0 мм."
	document.getElementById("speed").innerHTML="v=0 мм./мc."
	document.getElementById("graf_speed").innerHTML="";
	document.getElementById("graf_poz").innerHTML="";
}

function corner(){
	sten.style.transform="rotate("+document.getElementById("corner").value+"deg)";
	tel_1.style.transform="rotate("+document.getElementById("corner").value+"deg)";
}

function add_dat(){
	document.getElementById("exp").innerHTML+="<div id='dat_"+dat+"' class='dat' style='top:"+(200-50*dat)+"px;'><input type='num' id='dat_poz_"+dat+"' onclick='pozit();'><br /><input type='num' id='dat_data_"+dat+"'></div>";
	dat++;
}

function pozit(n){
	corner=document.getElementById("corner").value*Math.PI/180;
	x=document.getElementById("dat_poz_0").value;
	dat_0.style.top=x*Math.sin(corner)+200+"px";
	dat_0.style.left=x*Math.cos(corner)+10+"px";
}