/* DOMContentLoaded sorgt dafür, dass der enthaltene Code erst ausgeführt wird, 
wenn der Browser die gesamte HTML-Struktur (das DOM - Document Object Model) fertig geladen hat.
() => { ... } Kurzschreibweise für eine Funktion in JavaScript
*/

document.addEventListener('DOMContentLoaded', () => {
    console.log("Das Hauptprogramm wurde geladen.");

    // Elemente finden:
    // holt Referenz auf HTML-Element mit der spezifischen ID btn-hangman.
    // verbindet HTML-Element mit einer JavaScript-Variablen.
    const btnZahlenraten = document.getElementById('btn-zahlenraten');
    const btnHangman = document.getElementById('btn-hangman');
    const btnTicTacToe = document.getElementById('btn-tictactoe');

    // Funktionen zuweisen (Event Listener)
    // registriert eine Funktion, die der Browser immer dann aufruft, wenn der Benutzer auf diese Schaltfläche klickt.
      btnZahlenraten.addEventListener('click', () => {
        starteSpiel('Zahlen raten');
    });

    btnHangman.addEventListener('click', () => {
        starteSpiel('Hangman');
    });

    btnTicTacToe.addEventListener('click', () => {
        starteSpiel('TicTacToe');
    });
});

/**
 * Zentrale Funktion zum Starten von Spielen
 * @param {string} spielName - Name des Spiels
 */
function starteSpiel(spielName) {
   if (spielName === 'Zahlen raten'){
    window.location.href = 'spiele/zahlenraten.html';
   }
}