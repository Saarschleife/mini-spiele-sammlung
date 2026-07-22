### --- Zahlenraten --- ###
Datei spiel-logik-zahlenraten.js


## Zufallsgenerator
const zufallsZahl = Math.floor(Math.random() * 100) + 1;

Math.random() erzeugt eine Zufallszahl zwischen 0.000000 und 0.999999
Beispiele: 0.25, 0.73, 0.91

Mal 100, also Math.random() * 100, macht daraus 0 - 99.999
Beispiele: 0.25 * 100 = 25, 0.73 * 100 = 73

Abrunden mit Math.floor() entfernt die Nachkommastellen.
Beispiel: Math.floor(73.89) ergibt 73

Jetzt haben wir: 0 bis 99 
+1 weil wir nicht 0 bis 99 wollen, sondern 1 bis 100

Also: Math.floor(Math.random() * 100) + 1
ergibt: 1, 2, 3, ..., 100


## DOM-Zugriff 
Zugriff auf HTML-Elemente

# Schaltfläche holen: 
const btnPruefen = document.getElementById('btn-pruefen');
HTML:
<button id="btn-pruefen">
Prüfen
</button>
JavaScript sucht dieses Element, danach können wir damit arbeiten: btnPruefen.disabled = true;


# Eingabefeld holen:
const eingabeFeld = document.getElementById('eingabe-feld');
HTML:
<input id="eingabe-feld">
Damit können wir den eingegebenen Wert lesen: eingabeFeld.value


# Meldungsfeld holen:
const meldung = document.getElementById('meldung');
HTML:
<p id="meldung"></p>
Dort schreiben wir unsere Antworten hinein.


# Versuche zählen:
let versuche = 0;
Hier benutzen wir let, nicht const, Weil sich der Wert verändert.

Start:
versuche = 0

Nach erstem Tipp:
versuche = 1

Nach zweitem Tipp:
versuche = 2


## Event Listener

# Auf die Schaltfläche reagieren



## Kontrollstrukturen