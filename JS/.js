
/*
Descrizione esercizio: 
1. Chiedi all’utente il suo nome,
2. poi chiedi il suo cognome,
3. poi chiedi il suo colore preferito
4. Infine scrivi sulla pagina nomecognomecolorepreferito21
*/


const name = prompt("come ti chiami?");
console.log(name);

let cognome = "ottimo! Ora il tuo cognome!";
let allerta = " sono nell'alert"

const surname = prompt(cognome);
console.log(surname);

let color = prompt("continua cosi! Il tuo colore preferito? ");
console.log(color);

let numero = 10;
numero += 11;


let somma = `Ricapitolando ti chiami ${name} ${surname}, il tuo colore preferito è  ${color}  e il tuo numero direi che potrebbe essere il...${numero}`;

document.getElementById("js").innerHTML = somma + " sono nel getelement";
document.writeln(somma + " sono nel writeln");
alert(somma + allerta);
console.log(somma + "sono nella console");
