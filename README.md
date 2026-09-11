# FörderKompass

© 2026 Ute Holzschneider-Riedl. Alle Rechte vorbehalten.

Dieses Projekt ist für die Nutzung über einen geschützten Webzugang vorgesehen. Eine öffentliche Bereitstellung, Veränderung oder Verteilung außerhalb dieses Zugangs ist nur mit Zustimmung von Ute Holzschneider-Riedl erlaubt.

Die App unterstützt die lokale, strukturierte und alltagstaugliche Erstellung von Förderplänen. Personenbezogene Förderplandaten werden lokal im Browser gespeichert und müssen datenschutzgerecht behandelt werden. Es dürfen keine echten Schülerdaten im Code oder in Beispieldaten gespeichert werden.

Die App ist als installierbare Web-App vorbereitet. `manifest.webmanifest`, `pwa.js`, `service-worker.js` und die Icons im Projektstamm ermöglichen das Hinzufügen zum Home-Bildschirm. Der Service Worker cached nur App-Dateien; Förderplandaten werden nicht synchronisiert oder übertragen.


## Technische Bereinigung 11.09.2026

Die frühere Bibliothek `textModules.js` mit einzelnen vorgefertigten Textbausteinen ist nicht mehr Bestandteil der produktiven Förderlogik. Automatische Vorschläge basieren auf den Förderketten bzw. dem Endkatalog. Alte Entwürfe, die noch die Arbeitsweise `prefabModules` gespeichert haben, werden beim Öffnen auf das Kompetenzraster zurückgeführt. Veraltete Service-Worker-Verweise auf den früheren `assets/`-Ordner und die alte Word-Vorlage wurden entfernt. Der Word-Export selbst bleibt erhalten und wird weiterhin clientseitig erzeugt.


## Arbeitsweisen im Förderplan (v299)

- **Mit Kompetenzraster arbeiten:** automatische Vorschläge aus den hinterlegten Förderketten.
- **Förderplan frei zusammenstellen:** vorhandene Förderketten können ohne Kompetenzraster selbst ausgewählt und gemeinsam in Ist-Stand, Ziele, Maßnahmen und Evaluation übernommen werden.
- **Mit eigenen Bausteinen arbeiten:** lokal gespeicherte persönliche Bausteine.
- **Frei schreiben / Text überarbeiten:** manuelle Texteingabe und Überarbeitung.

Die frühere Bibliothek einzelner vorgefertigter Textbausteine (`textModules.js`) wird nicht mehr verwendet.


## v300 – Kombination von Wahrnehmungs-Förderketten

- Kombinationen ohne eigene Mehrfach-Förderkette werden aus den vorhandenen Einzelketten vollständig zusammengesetzt.
- Der Ist-Stand wird jetzt bereichsspezifisch für Wahrnehmung formuliert; der versehentliche Rückgriff auf die Mathematik-1/2-Ist-Stand-Funktion wurde entfernt.
- Ziele, Maßnahmen und Evaluation werden weiterhin aus den passenden Einzelketten übernommen.
- Exakt vorhandene, geprüfte Wahrnehmungs-Förderketten haben weiterhin Vorrang.


## Förderketten und manuelle Bausteine

Die automatische Förderplanung verwendet ausschließlich die hinterlegten Förderketten bzw. den Endkatalog. Die Datei `textModules.js` ist als **manuelle Bausteinbibliothek** eingebunden: Über „Einzelne Bausteine frei auswählen“ können Formulierungen gezielt ausgewählt, angepasst und übernommen werden. Diese Einzelbausteine dienen **nicht** als automatischer Fallback für fehlende Förderketten und werden nicht automatisch mit Ketten vermischt.
