// JavaScript Document
var menu = [
	{nazov: "TIA", presmerovanie: "/~xkertys/projekt/index.html" , podmenu: [
		{nazov: "Popis Predmetu", presmerovanie: "/~xkertys/projekt/tina/popisTina.html" , podpodmenu: null},
		{nazov: "Údaje o predmete", presmerovanie: "/~xkertys/projekt/tina/udajeTina.html" , podpodmenu: null},
		{nazov: "Čo nám TIA dala?", presmerovanie: "/~xkertys/projekt/tina/coDalaTina.html" , podpodmenu: [
			{nazov: "Zadanie 1", presmerovanie: "/~xkertys/projekt/tina/zadania_popis/zad1.html" , podpodmenu: null},
			{nazov: "Zadanie 2", presmerovanie: "/~xkertys/projekt/tina/zadania_popis/zad2.html" , podpodmenu: null},
			{nazov: "Zadanie 3", presmerovanie: "/~xkertys/projekt/tina/zadania_popis/zad3.html" , podpodmenu: null},
			{nazov: "Zadanie 4", presmerovanie: "/~xkertys/projekt/tina/zadania_popis/zad4.html" , podpodmenu: null},
			{nazov: "Zadanie 5", presmerovanie: "/~xkertys/projekt/tina/zadania_popis/zad5.html" , podpodmenu: null},
			{nazov: "Zadanie 6", presmerovanie: "/~xkertys/projekt/tina/zadania_popis/zad6.html" , podpodmenu: null},
			{nazov: "Zadanie 7", presmerovanie: "/~xkertys/projekt/tina/zadania_popis/zad7.html" , podpodmenu: null},
			{nazov: "Zadanie 8", presmerovanie: "/~xkertys/projekt/tina/zadania_popis/zad8.html" , podpodmenu: null},
		]},
	  ] },
	
	{nazov: "Poznámkový Blok", presmerovanie: "/~xkertys/projekt/poznamky/poznamky.html" , podmenu:null},
	
	{nazov: "Hry", presmerovanie: "/~xkertys/projekt/hry/hry.html" , podmenu: [
		{nazov: "Sudoku", presmerovanie: "/~xkertys/projekt/hry/sudoku/sudoku_hra.html" , podpodmenu: [
			{nazov: "Pravidlá", presmerovanie: "/~xkertys/projekt/hry/sudoku/sudoku_pravidla.html" , podpodmenu: null},
			{nazov: "Hra", presmerovanie: "/~xkertys/projekt/hry/sudoku/sudoku_hra.html" , podpodmenu: null},
		]},
		{nazov: "Piškvorky v.1", presmerovanie: "/~xkertys/projekt/hry/piskvorky/piskvorky2.html" , podpodmenu: [
			{nazov: "Pravidlá", presmerovanie: "/~xkertys/projekt/hry/piskvorky/pravidlaP.html" , podpodmenu: null},
			{nazov: "Hra", presmerovanie: "/~xkertys/projekt/hry/piskvorky/piskvorky2.html" , podpodmenu: null},
		]},
		{nazov: "Hanojská veža", presmerovanie: "/~xkertys/projekt/hry/hanoi/hanoi.html" , podpodmenu: [
			{nazov: "Pravidlá", presmerovanie: "/~xkertys/projekt/hry/hanoi/hanoi_pravidla.html" , podpodmenu: null},
			{nazov: "Hra", presmerovanie: "/~xkertys/projekt/hry/hanoi/hanoi.html" , podpodmenu: null},
		]},
		{nazov: "Piškvorky v.2", presmerovanie: "/~xkertys/projekt/hry/tictactoe/html/tictactoe_game.html" , podpodmenu: [ 
			{nazov: "Pravidlá", presmerovanie: "/~xkertys/projekt/hry/tictactoe/html/tictactoe_rules.html" , podpodmenu: null},
			{nazov: "Hra", presmerovanie: "/~xkertys/projekt/hry/tictactoe/html/tictactoe_game.html" , podpodmenu: null},
		]},
	]},
	
	{nazov: "O nás", presmerovanie: "/~xkertys/projekt/onas/osobnosti.html" , podmenu: [
		{nazov: "Osobnosti", presmerovanie: "/~xkertys/projekt/onas/osobnosti.html" , podpodmenu: [
			{nazov: "Pavol Goliaš", presmerovanie: "/~xkertys/projekt/onas/osobne_stranky/osobna_palo.html" , podpodmenu: null},
			{nazov: "Jakub Kertýs", presmerovanie: "/~xkertys/projekt/onas/osobne_stranky/osobna_jakub.html" , podpodmenu: null},
			{nazov: "Andrej Kosár", presmerovanie: "/~xkertys/projekt/onas/osobne_stranky/osobna_ado.html" , podpodmenu: null},
			{nazov: "Tomáš Tarasovič", presmerovanie: "/~xkertys/projekt/onas/osobne_stranky/osobna_tomsy.html" , podpodmenu: null},
		]},
		{nazov: "Zoznam úloh", presmerovanie: "/~xkertys/projekt/onas/rozpis_uloh.html" , podpodmenu: null},
	]},

];

function menu_initialize() {
	
	var kod_vypln = "";
	//<li><a href="index.html">O mne</a></li>
	for (var i=0;i<menu.length;i++) {
		if(i < (menu.length-1)){
		kod_vypln = kod_vypln + "<li><a href=" + menu[i].presmerovanie+">" + menu[i].nazov + "</a>";
		}
		if(i == (menu.length-1)) {
			kod_vypln = kod_vypln + "<li style='border-right: solid 1px white'><a href=" + menu[i].presmerovanie+">" + menu[i].nazov + "</a>";
		}
		if(menu[i].podmenu) {
			kod_vypln = kod_vypln +	"<ul>"; //podmenu
			for(var j=0;j<menu[i].podmenu.length;j++){
				kod_vypln = kod_vypln + "<li><a href=" + menu[i].podmenu[j].presmerovanie+">" + menu[i].podmenu[j].nazov + "</a>";
				
				if(menu[i].podmenu[j].podpodmenu){
					kod_vypln = kod_vypln + "<ul>"; //podpodmenu
					for(var k=0;k<menu[i].podmenu[j].podpodmenu.length;k++){
						kod_vypln = kod_vypln + "<li><a href=" + menu[i].podmenu[j].podpodmenu[k].presmerovanie+">" + menu[i].podmenu[j].podpodmenu[k].nazov + "</a>";
						kod_vypln = kod_vypln + "</li>";
					}
					kod_vypln = kod_vypln + "</ul>"
				}
				kod_vypln = kod_vypln + "</li>";
			}
			kod_vypln = kod_vypln + "</ul>"
		}	
		kod_vypln = kod_vypln +"</li>";
	}
	document.getElementById("hlavne_menu").innerHTML= kod_vypln;

}



/*
function generuj(){
			var code="";
			for (var i=0;i<menu2.length;i++){
				code=code+"<li><a href=\""+menu2[i].linkk+"\">"+menu2[i].nazov+"</a>";
				if(menu2[i].submenu){
					code=code+"<ul class='submenu'>";
					for(var j=0;j<menu2[i].submenu.length;j++){
						code=code+"<li><a href='"+menu2[i].submenu[j].linkk+"'>"+menu2[i].submenu[j].nazov+"</a>"
						if(menu2[i].submenu[j].subsubmenu){
							code=code+"<ul class='subsubmenu'>";
							for(var k=0;k<menu2[i].submenu[j].subsubmenu.length;k++){
								code=code+"<li><a href='"+menu2[i].submenu[j].subsubmenu[k].linkk+"'>"+menu2[i].submenu[j].subsubmenu[k].nazov+"</a>"
								code=code+"</li>";
							}
							code=code+"</ul>";
						}
						code=code+"</li>";
					}
					code=code+"</ul>";
				}
				code=code+"</li>";
			}
			document.getElementById("menu").innerHTML= code;
}

**/



