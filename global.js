// JavaScript Document
var stranky=[];
var pocet=0;

function breadcrumbs(){
if(localStorage.getItem("poleS")!=null)
	{stranky=JSON.parse(localStorage.getItem("poleS"));}
stranky.push([document.title,document.URL]);
if(stranky.length>5){ stranky.shift();}
var kod="";
for(var i=0;i<stranky.length;i++){
kod=kod+"<li><a href=\""+stranky[i][1]+"\">"+stranky[i][0]+"</a></li>";
if(i<stranky.length-1){kod+="&#8921";}
}
document.getElementById("breadCrumbUl").innerHTML=kod;
localStorage.setItem("poleS",JSON.stringify(stranky));
//localStorage.clear();
}


function pocetPristupov(){
//pocet=JSON.parse(localStorage.getItem("pocetP"));
if(localStorage.getItem("pocetP")==null) {pocet=1;}
else {pocet=JSON.parse(localStorage.getItem("pocetP"));pocet++;}
document.getElementById("pocetPristup").innerHTML=pocet;
localStorage.setItem("pocetP",JSON.stringify(pocet));
//localStorage.clear();
}