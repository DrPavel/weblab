function tel_poz(){
	
	/*
	var a=rs*m*g/;
	var h=h0+;
	var q=h*360/100;*/
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
	poz=0;
	time=0;
	block.style.left=poz+227+"px";
	block.style.top=poz+50+"px";
	
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