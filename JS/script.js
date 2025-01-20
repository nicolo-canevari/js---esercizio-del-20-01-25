// array "persone"
const persone = [
    {
        id: 1,
        nome: 'Mario',
        cognome: 'Rossi',
        email: 'mario.rossi@example.com',
        codiceFiscale: 'RSSMRA78E01H501X',
        indirizzo: 'Via Roma, 123',
        anno: '1978',
        telefono: '3331234567'
    },
    {
        id: 2,
        nome: 'Anna',
        cognome: 'Verdi',
        email: 'anna.verdi@example.com',
        codiceFiscale: 'VRDANNA80A01H501X',
        indirizzo: 'Via Verdi, 456',
        anno: '1980',
        telefono: '3478901234'
    },
    {
        id: 3,
        nome: 'Luca',
        cognome: 'Bianchi',
        email: 'luca.bianchi@example.com',
        codiceFiscale: 'BNCLCA82A01H501X',
        indirizzo: 'Via Bianchi, 789',
        anno: '1982',
        telefono: '3209876543'
    },
    {
        id: 4,
        nome: 'Giulia',
        cognome: 'Neri',
        email: 'giulia.neri@example.com',
        codiceFiscale: 'NRGGIA85A01H501X',
        indirizzo: 'Via Neri, 101',
        anno: '1985',
        telefono: '3667890123'
    },
    {
        id: 5,
        nome: 'Marco',
        cognome: 'Rossi',
        email: 'marco.rossi@example.com',
        codiceFiscale: 'RSSMRC87A01H501X',
        indirizzo: 'Via Roma, 123',
        anno: '1987',
        telefono: '3921234567'
    },
    {
        id: 6,
        nome: 'Sara',
        cognome: 'Verdi',
        email: 'sara.verdi@example.com',
        codiceFiscale: 'VRDSRA89A01H501X',
        indirizzo: 'Via Verdi, 456',
        anno: '1989',
        telefono: '3898901234'
    },
    {
        id: 7,
        nome: 'Andrea',
        cognome: 'Bianchi',
        email: 'andrea.bianchi@example.com',
        codiceFiscale: 'BNCAND91A01H501X',
        indirizzo: 'Via Bianchi, 789',
        anno: '1991',
        telefono: '3409876543'
    },
    {
        id: 8,
        nome: 'Beatrice',
        cognome: 'Neri',
        email: 'beatrice.neri@example.com',
        codiceFiscale: 'NRGBRC93A01H501X',
        indirizzo: 'Via Neri, 101',
        anno: '1993',
        telefono: '3777890123'
    },
    {
        id: 9,
        nome: 'Fabio',
        cognome: 'Rossi',
        email: 'fabio.rossi@example.com',
        codiceFiscale: 'RSSFBO95A01H501X',
        indirizzo: 'Via Roma, 123',
        anno: '1995',
        telefono: '3931234567'
    },
    {
        id: 10,
        nome: 'Elena',
        cognome: 'Verdi',
        email: 'elena.verdi@example.com',
        codiceFiscale: 'VRDELN97A01H501X',
        indirizzo: 'Via Verdi, 456',
        anno: '1997',
        telefono: '3808901234'
    }
];

//   debugging
console.table(persone);

// Seleziono il contenitore principale
const container = document.querySelector(".tabella");

//  creo una variabile tableHtml e la inizializzo con una stringa vuota
let tableHTML = '<table>';

// Aggiungo una riga di intestazioni in cima a <table>
tableHTML += '<tr>';
tableHTML += '<th>ID</th>';
tableHTML += '<th>Nome</th>';
tableHTML += '<th>Cognome</th>';
tableHTML += '<th>Email</th>';
tableHTML += '<th>Codice Fiscale</th>';
tableHTML += '<th>Indirizzo</th>';
tableHTML += '<th>Anno</th>';
tableHTML += '<th>Telefono</th>';
tableHTML += '</tr>';

// Ciclo su ogni persona nell'array
for (let persona of persone) {

    // Destructuring dell'oggetto persona per estrarre le sue proprietà
    const {

        id,
        nome,
        cognome,
        email,
        codiceFiscale,
        indirizzo, anno,
        telefono

    } = persona;

    // Aggiungo una riga alla tabella
    tableHTML += '<tr>';

    // Aggiungo una cella per ciascuna proprietà destrutturata
    tableHTML += `<td>${id}</td>`;
    tableHTML += `<td>${nome}</td>`;
    tableHTML += `<td>${cognome}</td>`;
    tableHTML += `<td>${email}</td>`;
    tableHTML += `<td>${codiceFiscale}</td>`;
    tableHTML += `<td>${indirizzo}</td>`;
    tableHTML += `<td>${anno}</td>`;
    tableHTML += `<td>${telefono}</td>`;

    // Chiudo la riga
    tableHTML += '</tr>';

}

tableHTML += '</table>';

// Aggiungi la tabella nel div con class "tabella"
container.innerHTML = tableHTML;


// OPPURE

// Seleziono il contenitore principale
// const container = document.querySelector(".tabella");

// Creo una variabile tableHTML e la inizializzo con una stringa vuota
// let tableHTML = '<table>';

// Aggiungo una riga di intestazioni in cima a <table>
// tableHTML += '<tr>';
// tableHTML += '<th>ID</th>';
// tableHTML += '<th>Nome</th>';
// tableHTML += '<th>Cognome</th>';
// tableHTML += '<th>Email</th>';
// tableHTML += '<th>Codice Fiscale</th>';
// tableHTML += '<th>Indirizzo</th>';
// tableHTML += '<th>Anno</th>';
// tableHTML += '<th>Telefono</th>';
// tableHTML += '</tr>';


// Ciclo su ogni persona nell'array
// for (let persona of persone) {

// Destructuring dell'oggetto persona per estrarre le sue proprietà
//     const {

//         id,
//         nome,
//         cognome,
//         email,
//         codiceFiscale,
//         indirizzo,
//         anno,
//         telefono

//     } = persona;

// Aggiungo una cella per ciascuna proprietà destrutturata
//     tableHTML += `<td>${id}</td>`;
//     tableHTML += `<td>${nome}</td>`;
//     tableHTML += `<td>${cognome}</td>`;
//     tableHTML += `<td>${email}</td>`;
//     tableHTML += `<td>${codiceFiscale}</td>`;
//     tableHTML += `<td>${indirizzo}</td>`;
//     tableHTML += `<td>${anno}</td>`;
//     tableHTML += `<td>${telefono}</td>`;

// Aggiungo una riga alla tabella
//     tableHTML += '<tr>';

// Itero su ogni proprietà dell'oggetto persona usando for...in
//     for (let key in persona) {

// Se la chiave è una proprietà dell'oggetto (non eredita da prototipo)
//         if (persona.hasOwnProperty(key)) {

// Estraggo il valore per la proprietà corrente
//             const value = persona[key];

// Aggiungo una cella per ciascuna proprietà
//             tableHTML += `<td>${value}</td>`;

//         }

//     }

// Chiudo la riga
//     tableHTML += '</tr>';

// }

// Chiudo la tabella
// tableHTML += '</table>';

// Aggiungo la tabella nel div con classe "contenitoreTabella"
// contenitore.innerHTML = tableHTML;