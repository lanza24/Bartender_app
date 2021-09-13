
const drink_1 = "negroni";
const drink_2 = "ginlemon";
const drink_3 = "gintonic";
const drink_4 = "longisland";

const drinks = [drink_1, drink_2, drink_3, drink_4];

//btn_id sintassi: btn_nomedeldrink
function sendMessage(btn_id) {
	window.alert(btn_id);

	let i_drink = btn_id.substring(4, btn_id.length);
	window.alert(i_drink);

}





	//leggo l'id del bottone, in base a quello mando il segnale per fare un determinato drink
	//Il drink deve essere mappato

	//nel file main.js -> riga 21, controllo sull'id del bottone e di conseguenza
	//mandare il segnale per un determinato drink!!
	//DOVREBBE FUNZIONARE

	//Se non dov'esse funzionare il bluetooth cambiando pagina, spostare il bottone di connesione sulla pagina dei drink