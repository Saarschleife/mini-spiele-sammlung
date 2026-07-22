/* Code erst dann starten, wenn die HTML-Seite fertig geladen wurde
DOMContentLoaded bedeutet: DOM (interne Baumstruktur der Webseite) ist fertig aufgebaut
*/

document.addEventListener('DOMContentLoaded', () => {
   
    // Elemente aus dem HTML holen
    const btnPruefen = document.getElementById('btn-pruefen');
    const eingabeFeld = document.getElementById('eingabe-feld');
    const meldung = document.getElementById('meldung');

    // Variablen
    let zufallsZahl;
    let versuche;
    let spielLaeuft = true;

    // Methode für Start/Reset
    function spielStarten(){
    // Math.random() liefert 0.something, * 100 macht es 0-99.99, Math.floor rundet ab, +1 macht 1-100 
    zufallsZahl = Math.floor(Math.random() * 100) + 1;
    versuche = 0;
    spielLaeuft = true;
    console.log("Neue geheime Zahl: ", zufallsZahl); //zum Testen

     meldung.textContent = "";
     meldung.style.color = "green";
     eingabeFeld.value = "";
     btnPruefen.textContent = "Prüfen";
     btnPruefen.disabled = false;
     eingabeFeld.focus();
    }

    // Methode aufrufen
    spielStarten();

    // Event-Listener für die Schaltfläche
    btnPruefen.addEventListener('click', () => {

        // Spiel vorbei? Neue Runde starten
        if (!spielLaeuft) {
            spielStarten(); //Methode aufrufen
            return;
        }


        // Den Wert aus dem Input-Feld auslesen und in eine Zahl umwandeln (parseInt)
        const tipp = parseInt(eingabeFeld.value);

        // Validierung: Hat der Nutzer überhaupt eine Zahl eingegeben?
        if (isNaN(tipp)) {
            meldung.textContent = "Bitte gib eine gültige Zahl ein!";
            return; // Beendet die Funktion hier vorzeitig
        }

        // Versuch hochzählen
        versuche++;

        // Logischer Vergleich (If-Else)
        if (tipp === zufallsZahl) {
            meldung.textContent = `Glückwunsch! Du hast die Zahl ${zufallsZahl} nach ${versuche} Versuchen erraten! 🎉`;
            meldung.style.color = "green";
            btnPruefen.textContent = "Nochmal spielen"; //Text auf Schaltfläche ändern
            spielLaeuft = false; //Spiel beendet          
        } else if (tipp < zufallsZahl) {
            meldung.textContent = `Versuch ${versuche}: Die gesuchte Zahl ist HÖHER! 📈`;
            meldung.style.color = "orange";
        } else {
            meldung.textContent = `Versuch ${versuche}: Die gesuchte Zahl ist NIEDRIGER! 📉`;
            meldung.style.color = "orange";
        }       
    });
});

