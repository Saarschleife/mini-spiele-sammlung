### Projektdokumentation: Spiele-Plattform

## Projektbeschreibung
Dieses Projekt ist eine modulare Spiele-Plattform, die als Übungsprojekt entwickelt wurde. Ziel ist die Implementierung verschiedener kleiner Spiele in einer einheitlichen Web-Umgebung unter Einhaltung moderner Prinzipien wie der Trennung der Belange (Separation of Concerns).

https://saarschleife.github.io/mini-spiele-sammlung/

## Technische Umsetzung
    HTML5: Strukturierung des Inhalts und semantischer Aufbau.
    CSS3: Modular gestaltetes Design durch Trennung von globalen Basis-Stilen und seiten-spezifischen Layouts.
    JavaScript (ES6+): Logische Steuerung der Spielfunktionen und Interaktions-Logik.


## Verzeichnisstruktur
Spielplatz/
├── index.html            # Haupteinstiegspunkt der Anwendung
├── css/
│   ├── basis.css         # Globale Styles (Typografie, Farben, Reset)
│   └── startseite.css    # Layout-Definitionen für die Lobby
├── js/
│   ├── hauptprogramm.js  # Zentrale Steuerung und Event-Handling
│   └── spiele.js         # Implementierung der Spiellogik
└── ressourcen/           # Bilder, Icons und Mediendateien


## Design
    Trennung der Belange: Durch die Aufteilung in verschiedene CSS- und JS-Dateien wird die Wartbarkeit erhöht. Fehlerquellen können so gezielt isoliert werden.

    Erweiterbarkeit: Das Projekt ist so konzipiert, dass neue Spiele einfach als Modul in spiele.js hinzugefügt und über das hauptprogramm.js eingebunden werden können.

    Backend-Vorbereitung: Die Struktur ist bewusst so gewählt, dass eine spätere Anbindung an eine serverseitige Logik (z.B. mittels Node.js) ohne grundlegende Umstrukturierung des Frontends möglich ist.


## Zukünftige Erweiterungen (Roadmap)

    [ ] Implementierung der Spiellogik für "Hangman" und "TicTacToe".

    [ ] Dynamisches Nachladen von Spielinhalten ohne Neuladen der Seite.

    [ ] Anbindung eines Backends zur Speicherung von Highscores.
