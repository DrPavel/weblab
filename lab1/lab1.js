var time=0.000;
var poz=0.000;
var lab=false;
var dat=0.000;
var old_speed=0.000;
var old_poz=0.000;
var speed=0.000;
var a=0.000;
var vor1_poz=0.01;
var vor2_poz=0.05;
var mass=1.000;
var frict=0.000;

function poz_vor_1(){
	vor1_poz=parseFloat(document.getElementById("pozition_1").value);	
	vor_1.style.left=((vor1_poz/1)*478+12)+"px";
}

function poz_vor_2(){
	vor2_poz=parseFloat(document.getElementById("pozition_2").value);	
	vor_2.style.left=((vor2_poz/1)*478+12)+"px";
}

function on_load(){
	sten.style.transform=" rotate("+document.getElementById("corner").value+"deg)";
	vor1_poz=document.getElementById("pozition_1").value;
	vor2_poz=document.getElementById("pozition_2").value;	
	vor_1.style.left=((vor1_poz/1)*478+12)+"px";
	vor_2.style.left=((vor2_poz/1)*478+12)+"px";
}

function tel_poz(){
	a=9.82*Math.sin(corner)-frict*9.82*Math.cos(corner);
	poz=speed_0*time+a*time*time/2;

	
	if((poz<=1)&&(lab==true)&&(poz>=0)&&(((frict!=0)&&(speed>0.002))||(frict==0))){
		tel_1.style.left=((poz/1)*478+3)+"px";
		if((poz<(vor1_poz+0.01))&&(poz>(vor1_poz-0.01))){
			document.getElementById("time_1").innerHTML="t<sub>1</sub>="+Math.abs((Math.floor(time*1000)/1000))+" с."
			document.getElementById("speed_1").innerHTML="v<sub>1</sub>="+Math.abs((Math.floor(speed*1000)/1000))+" м./c."
		}
		if((poz<(vor2_poz+0.01))&&(poz>(vor2_poz-0.01))){
			document.getElementById("time_2").innerHTML="t<sub>2</sub>="+Math.abs((Math.floor(time*1000)/1000))+" с."
			document.getElementById("speed_2").innerHTML="v<sub>2</sub>="+Math.abs((Math.floor(speed*1000)/1000))+" м./c."
		}
		
		
		speed=speed_0+a*time;
		if((time!=0)){
			var x1=time*100-1+10;
			var x2=time*100+10;
			var sy1=250-Math.abs(old_speed*100)-10;
			var sy2=250-Math.abs(speed*100)-10;
			var py1=250-Math.abs(old_poz*100)-10;
			var py2=250-Math.abs(poz*100)-10;
			old_speed=speed;
			old_poz=poz;
			document.getElementById("graf_speed").innerHTML+="<line x1='"+x1+"' y1='"+sy1+"' x2='"+x2+"' y2='"+sy2+"' />";
			document.getElementById("graf_poz").innerHTML+="<line x1='"+x1+"' y1='"+py1+"' x2='"+x2+"' y2='"+py2+"' />";

		}
		
		time+=0.01;
		setTimeout(tel_poz,10);
	}
}

function start_l(){
	lab=true;
	speed_0=parseFloat(document.getElementById("speed_0").value);
	speed=speed_0;
	mass=parseFloat(document.getElementById("mass").value);
	corner=parseFloat(document.getElementById("corner").value)*Math.PI / 180;
	frict=parseFloat(document.getElementById("frict").value);
	
	vor1_poz=parseFloat(document.getElementById("pozition_1").value);
	vor2_poz=parseFloat(document.getElementById("pozition_2").value);	
	
	speed=parseFloat(document.getElementById("speed_0").value);
	setTimeout(tel_poz,1);
}

function stop_l(){
	lab=false;
}

function res_l(){
	lab=false;
	poz=0;
	time=0;
	
	speed_0=parseFloat(document.getElementById("speed_0").value);
	speed=parseFloat(document.getElementById("speed_0").value);
	old_speed=parseFloat(document.getElementById("speed_0").value);
	old_poz=0;
	tel_1.style.left=poz+3+"px";
	
	document.getElementById("time_1").innerHTML="t<sub>1</sub>=0 с."
	document.getElementById("speed_1").innerHTML="v<sub>1</sub>=0 м./c."
	document.getElementById("time_2").innerHTML="t<sub>2</sub>=0 с."
	document.getElementById("speed_2").innerHTML="v<sub>2</sub>=0 м./c."
	document.getElementById("graf_speed").innerHTML="";
	document.getElementById("graf_poz").innerHTML="";
}

function corner(){
	sten.style.transform="rotate("+document.getElementById("corner").value+"deg)";
}

function add_dat(){
	document.getElementById("exp").innerHTML+="<div id='dat_"+dat+"' class='dat' style='top:"+(200-50*dat)+"px;'><input type='num' id='dat_poz_"+dat+"' onclick='pozit();'><br /><input type='num' id='dat_data_"+dat+"'></div>";
	dat++;
}

function pozit(n){
	corner=parseFloat(document.getElementById("corner").value)*Math.PI/180;
	x=parseFloat(document.getElementById("dat_poz_0").value);
	dat_0.style.top=x*Math.sin(corner)+200+"px";
	dat_0.style.left=x*Math.cos(corner)+10+"px";
}