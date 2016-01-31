// JavaScript Document
var poleDiskov1 = [];
var poleDiskov2 = [];
var poleDiskov3 = [];
var pocetDiskov=0;
var zobrazovac;

var poleTyciek = [];
var i;
var x; //zapametanie tycky
var disk = null;
var tycka;

var b=0; //aby kamen isiel na poslednu poziciu vo vezi
var pocet;
var uroven;
var odkial = 0; //zapametam si okdial pochadza disk ktory som presunul
var oznacenie = false;
var pocetTahov = 0;
var plot;
var skore = [];
var nieco = 0;

function uloz(){
	//localStorage.setItem("pole1",JSON.stringify(poleDiskov1));
	//localStorage.setItem("pole2",JSON.stringify(poleDiskov2));
	//localStorage.setItem("pole3",JSON.stringify(poleDiskov3));
	localStorage.setItem("pocDiskov",JSON.stringify(pocetDiskov));
	localStorage.setItem("pocTahov",JSON.stringify(pocetTahov));
	localStorage.setItem("score",JSON.stringify(skore));
	localStorage.setItem("odkial",JSON.stringify(odkial));	

}

function nacitaj(){
	
	//poleDiskov1 = JSON.parse(localStorage.getItem("pole1"));
	//	poleDiskov2 = JSON.parse(localStorage.getItem("pole2"));
	//poleDiskov3 = JSON.parse(localStorage.getItem("pole3"));
	pocetDiskov = JSON.parse(localStorage.getItem("pocDiskov"));
	pocetTahov = JSON.parse(localStorage.getItem("pocTahov"));
	skore = JSON.parse(localStorage.getItem("score"));
	odkial = JSON.parse(localStorage.getItem("odkial"));

	for(var i=0;i<pocetDiskov;i++) {
		//disk[0][1].style.visibility = "visible";
		//alert(zobrazovac);
		poleDiskov1.push(document.getElementById("disk" + i));
		zobrazovac = poleDiskov1[i];
		zobrazovac.style.visibility = "visible"; 
		
  	} 
	
	pocet = document.getElementById("pocettahov").innerHTML = "Tvoj počet ťahov : " + pocetTahov;
    uroven = document.getElementById("uroven").innerHTML = "Zvolená uroveň obtiažnosti : " + pocetDiskov ;
	  
	//alert(poleDiskov1);
	//alert(poleDiskov2);
	//alert(poleDiskov3);
	//alert(pocetDiskov);
	//alert(pocetTahov);
	//alert(skore);
	//alert(odkial);
	
	
}

function vymaz_udaje() {
	localStorage.removeItem("pocDiskov");
	localStorage.removeItem("pocTahov");
	localStorage.removeItem("score");
	localStorage.removeItem("odkial");
	
}

function zacniHru() {

  pocetDiskov = document.getElementById("pocetZvolenychDiskov");
  pocetDiskov = parseInt(pocetZvolenychDiskov.options[pocetZvolenychDiskov.selectedIndex].value);
  
 // poleDiskov1 = [document.getElementById("disk0"),document.getElementById("disk1"),document.getElementById("disk2"),document.getElementById("disk3"),document.getElementById("disk4"),								                   document.getElementById("disk5"),document.getElementById("disk6")];
   poleDiskov1 = [];
   
  for(var i=0;i<pocetDiskov;i++) {
		//disk[0][1].style.visibility = "visible";
		//alert(zobrazovac);
		poleDiskov1.push(document.getElementById("disk" + i));
		zobrazovac = poleDiskov1[i];
		zobrazovac.style.visibility = "visible"; 
		
  } 
//  poleDiskov1 = [];
 /* for(var j=6;j>=pocetDiskov;j--) {
  		zobrazovac = poleDiskov1[j];
		poleDiskov1.pop();
		//alert(zobrazovac);
  		zobrazovac.style.visibility = "hidden";
  } *///zatial netreba ...

}

function zmen(i){
	
   disk = document.getElementById("disk" + i);
	if(oznacenie == false) {
		disk.style.backgroundColor = "brown";
		oznacenie = true;
	}
	else if(oznacenie = true) {
		disk.style.backgroundColor = "#9C0";
		oznacenie = false;
	}
	var stred = disk.offsetLeft + (disk.offsetWidth/2);
	//console.log("stred" + stred);  //aby som vedel na akej tycke je aktualne disk polozeny
	if (stred == 163) {
		odkial = 1;
	}
	else if(stred == 463) {
		odkial = 2;
	}
	else if(stred == 763) {
		odkial = 3;
	}
	//console.log("aktualna tycka je: " + odkial);
	
}
	
function zapametaj(x) {
	tycka = document.getElementById("tycka"+x);
	poleTyciek.push(x);
	premiestniDisk(disk,tycka);
}

function premiestniDisk(disk,tycka) {
	
	if(poleTyciek[0] == 1) {
		//console.log("prva" + odkial);
	   // console.log("prve" + poleDiskov1);
	   // console.log("druhe" + poleDiskov2);
	   // console.log("tretie" + poleDiskov3);
		if (odkial == 2) {
			
			poleDiskov2.pop();
			//alert("tento disk pochadza z 2tycky");
		}
		else if(odkial == 3) {
			poleDiskov3.pop();
			//alert("tento disk pochadza z 3tycky");
		}else if (odkial == 1) {
			//odkial = [];
			alert("neplatny tah!");
			disk.style.backgroundColor = "#9C0";
			poleDiskov1.pop();
		}
		poleTyciek = [];
		poleDiskov1.push(disk);
		var velkost=poleDiskov1.length;
			for(var a=0;a<velkost;a++) 
			{
				b = a*26 ;	
				//alert("prve:" + b);
			}
		var sirka = disk.offsetWidth;
		var vyska = disk.offsetHeight;
	    var porovnavanie = poleDiskov1[poleDiskov1.length-2];
		if( porovnavanie == null) {
			//alert("nie je s cim porovnavat");
			disk.style.left =  tycka.offsetLeft - (sirka/2) + (vyska/2) + 'px';
			disk.style.top =  tycka.offsetTop  + tycka.offsetHeight - 26 -b  +'px';  //pridanie prveho disku na volnu tycku
			disk.style.backgroundColor = "#9C0";
			pocetTahov++;
		}
		else if ( sirka > porovnavanie.offsetWidth ) {
			alert("chyba!");
			poleDiskov1.pop(); //skuska
			disk.style.backgroundColor = "#9C0";
			return;
		}
		else if ( sirka < porovnavanie.offsetWidth ){
			disk.style.left =  tycka.offsetLeft - (sirka/2) + (vyska/2) + 'px';
			disk.style.top =  tycka.offsetTop  + tycka.offsetHeight - 26 -b  +'px';
			disk.style.backgroundColor = "#9C0";
			pocetTahov++;
		}
	}
	
	if (poleTyciek[0] == 2 ) {
	
	    //console.log("prve" + poleDiskov1);
	    //console.log("druhe" + poleDiskov2);
	    //console.log("tretie" + poleDiskov3);
		if (odkial == 1) {
			//odkial = [];
			poleDiskov1.pop();
			//odkial = 2;
			//alert("tento disk pochadza z 1tycky");
		}
		else if(odkial == 3) {
			//odkial = [];
			poleDiskov3.pop();
			//odkial =2;
		//	alert("tento disk pochadza z 3tycky");
		}else if (odkial == 2) {
			//odkial = [];
			alert("neplatny tah!");
			disk.style.backgroundColor = "#9C0";
			poleDiskov2.pop();
		}
	
		poleTyciek = [];
		poleDiskov2.push(disk);
		//alert("pocet: " + poleDiskov2.length);
		var velkost=poleDiskov2.length;
			for(var a=0;a<velkost;a++) 
			{
				b = a*26 ;	
				//alert("prve:" + b);
			}
	
		var sirka = disk.offsetWidth;
		var vyska = disk.offsetHeight;
	    //	alert(vyska);
		var porovnavanie = poleDiskov2[poleDiskov2.length -2];
	    //alert("tu" + porovnavanie);
		//alert("akt sirka" + sirka);
		if( porovnavanie == null) {
			//alert("nie je s cim porovnavat");
			disk.style.left =  tycka.offsetLeft - (sirka/2) + (vyska/2) + 'px';
			disk.style.top =  tycka.offsetTop  + tycka.offsetHeight - 26 -b  +'px';  //pridanie prveho disku na volnu tycku
			disk.style.backgroundColor = "#9C0";
			pocetTahov++;
		}
		else if ( sirka > porovnavanie.offsetWidth ) {
			alert("chyba!");
			poleDiskov2.pop(); //skuska
			disk.style.backgroundColor = "#9C0";
			return;
		}
		else if ( sirka < porovnavanie.offsetWidth ){
			disk.style.left =  tycka.offsetLeft - (sirka/2) + (vyska/2) + 'px';
			disk.style.top =  tycka.offsetTop  + tycka.offsetHeight - 26 -b  +'px';
			disk.style.backgroundColor = "#9C0";
			pocetTahov++;
		
		}
		
		/*disk.style.left =  tycka.offsetLeft - (sirka/2) + (vyska/2) + 'px';
			disk.style.top =  tycka.offsetTop  + tycka.offsetHeight - 26 -b  +'px';
			disk.style.backgroundColor = "#9C0";
		*/
		//}	
	}
	
	if(poleTyciek[0]== 3) { 
	    //console.log("prve" + poleDiskov1);
	    //console.log("druhe" + poleDiskov2);
	    //console.log("tretie" + poleDiskov3);
	    if (odkial == 2) {
			poleDiskov2.pop();
		}
		else if(odkial == 1) {
			poleDiskov1.pop();
			//alert("tento disk pochadza z 1tycky");
		}
		else if (odkial == 3) {
			alert("neplatny tah!");
			disk.style.backgroundColor = "#9C0";
			poleDiskov3.pop();
		
		}
	    poleTyciek = [];
		poleDiskov3.push(disk);
		var velkost=poleDiskov3.length;
			for(var a=0;a<velkost;a++) 
			{
				b = a*26 ;	
				//alert("prve:" + b);
			}
		var sirka = disk.offsetWidth;
		var vyska = disk.offsetHeight;
		var porovnavanie = poleDiskov3[poleDiskov3.length -2];
		if( porovnavanie == null) {
			//alert("nie je s cim porovnavat");
			disk.style.left =  tycka.offsetLeft - (sirka/2) + (vyska/2) + 'px';
			disk.style.top =  tycka.offsetTop  + tycka.offsetHeight - 26 -b  +'px';  //pridanie prveho disku na volnu tycku
			disk.style.backgroundColor = "#9C0";
			pocetTahov++;
		}
		else if ( sirka > porovnavanie.offsetWidth ) {
			alert("chyba!");
			poleDiskov3.pop(); //skuska
			disk.style.backgroundColor = "#9C0";
			return;
		}
		else if ( sirka < porovnavanie.offsetWidth ){
			disk.style.left =  tycka.offsetLeft - (sirka/2) + (vyska/2) + 'px';
			disk.style.top =  tycka.offsetTop  + tycka.offsetHeight - 26 -b  +'px';
			disk.style.backgroundColor = "#9C0";
			pocetTahov++;
		}
	}
	
	pocet = document.getElementById("pocettahov").innerHTML = "Tvoj počet ťahov : " + pocetTahov;
    uroven = document.getElementById("uroven").innerHTML = "Zvolená uroveň obtiažnosti : " + pocetDiskov ;
	//alert(pocetDiskov);
	if(poleDiskov3.length == pocetDiskov) {
			alert("vyhral si!");
	}
	skore = [pocetTahov,pocetDiskov];
	
}
function kresliGraf() {
	$(vykresliGraf());
}


function vykresliGraf() {
	var graf = document.getElementById("chartdiv").style.display = "block";
	
    plot = $.jqplot('chartdiv',  [skore], {
			title : 'Graf závislosti počtu ťahov od úrovne obtiažnosti',
       	   axesDefaults:{labelRenderer: $.jqplot.CanvasAxisLabelRenderer},
			series : [
			{color:'#0085cc'}
			],
			axes : {
				xaxis : {label : "Zvolená uroveň obtiažnosti"
				},
				yaxis : {label : "Počet ťahov"
				},
			},
			highlighter : {
				show : true,
			},
			cursor : {
				show : true,
				zoom : true,
			}
		});	

}


















