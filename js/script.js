
/*
Descrizione esercizio: 
1. Chiedi all’utente il suo nome,
2. poi chiedi il suo cognome,
3. poi chiedi il suo colore preferito
4. Infine scrivi sulla pagina nomecognomecolorepreferito21
*/


let name = prompt('Scrivi il tuo Nome');
let surname = prompt('Bravo! Ora il tuo Cognome');
let color = prompt('Un ultimo sforzo! Il tuo colore preferito?');
const number = '21';

// Visualizzazione nella Console
console.log(
    `
    ${name}${surname}${color}${number}
    `
);
// Visualizzazione in Pagina
document.writeln(name + surname + color + number);


