// array om waarden op te slaan
let geschiedenis = [];

// functie om dobbelsteen te rollen
function rollDobbelsteen() {
	// genereer willekeurig getal tussen 1 en 6
	let waarde = Math.floor(Math.random() * 6) + 1;

	// veranderd afbeelding van dobbelsteen op basis van waarde
	const dice = document.getElementById("dice");
	dice.src = "dice" + waarde + ".jpg";

	// voeg waarde toe aan geschiedenis
	geschiedenis.push(waarde);

	// toon geschiedenis op het scherm
	let GeschiedenisText = "";
	for (const element of geschiedenis) {
		GeschiedenisText += element + " ";
	}
	const GeschiedenisElement = document.getElementById("Geschiedenis");
	GeschiedenisElement.innerText = GeschiedenisText;
    console.log(geschiedenis);  
	
	//telt het aantal items in de array geschiedenis.
	let length = geschiedenis.length;
	// roept sum array aan om de variable array totaal. het totaal te maken van de array geschiedenis 
	let arraytotal= sumArray(geschiedenis);
	//deze functie alle items in de array geschiedenis bij elkaar op.
	  function sumArray(geschiedenis) {
		//tijdelijke variable voor de functie
		let sum = 0; 
		//telt de variable sum op met het volgende item uit het array
		geschiedenis.forEach(item => {
		  sum += item;
		});
		return sum;
	  }
	  //variable om het eindresultaat op te slaan
	  let endresult;
	  //berekend gemiddlede uit
	  function gemiddled(length,arraytotal){
		endresult =  (arraytotal/length);
		return endresult;
	  }
	//Voert gemiddled functie uit
	gemiddled(length,arraytotal);
	//zet gemiddlede in de html pagina
	const gemiddledElement = document.getElementById("gemiddled");
	gemiddledElement.innerText = endresult;
    console.log(endresult);  
	//het aantal keer een nummer is gevallen in de html pagina
	const aantal = ()=>{ document.querySelector('#amt' + waarde).innerHTML++;}
	aantal()
}
