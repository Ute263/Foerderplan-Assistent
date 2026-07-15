# FörderKompass – Textbausteine und Vorschlagslogik stabilisiert

## Datum
15.07.2026

## Ausgangsstand
- `script.js?v=292`
- `style.css?v=193`
- `textModules.js?v=196`
- Cache `foerderplan-assistent-cache-v294`

## Vorgehen
Der aktuelle Projektstand wurde direkt anhand der hochgeladenen Projekt-ZIP geprüft. Es wurden keine alten Sicherungen und keine externen Repositories verwendet.

Der automatisierte Textaudit wurde nicht als Liste von 9.463 gleichwertigen App-Fehlern behandelt. Stattdessen wurden die tatsächlich sichtbaren, systematischen Ursachen in der finalen Vorschlagsausgabe untersucht.

## Durchgeführte Korrekturen

### 1. Einheitliche Großschreibung sichtbarer Listenpunkte
Die finale Ausgabe von Zielen, Maßnahmen und Evaluationen schreibt nun das erste sichtbare Wort eines Listenpunkts groß.

Platzhalter am Satzanfang bleiben unverändert:
- `_`
- `#er/sie#`
- `#Er/Sie#`

Die fachlichen Quelltexte und Förderketten-IDs wurden dabei nicht verändert.

### 2. Sprachziele bei Mehrfachauswahlen grammatisch bereinigt
Die Umwandlung vollständiger Sprachziele in gemeinsame Ziellisten wurde erweitert. Dadurch entstehen bei Mehrfachauswahlen keine Konstruktionen mehr wie:

- „und unterscheidet … erkennen“
- „einfache Satzmuster … und bildet … nutzen“

Geprüft wurden alle 511 nicht leeren Kombinationen der neun Sprachkompetenzen. In diesem Test blieb kein Treffer der bekannten fehlerhaften Zielmuster bestehen.

### 3. Fehlende Wahrnehmungsvorschläge geschlossen
Wenn für eine Wahrnehmungs-Mehrfachauswahl keine exakte Kombinationsvorlage vorhanden ist, werden nun die vorhandenen vollständigen Einzelvorlagen der tatsächlich ausgewählten Kompetenzen zusammengeführt.

Exakte Förderketten bleiben vorrangig. Die 80 Wahrnehmungs-Förderketten wurden nicht verändert.

### 4. Fehlende Mathematik-3/4-Vorschläge geschlossen
Mathematik Klasse 3/4 verwendet nun dieselbe sichere Grundlogik wie Mathematik Klasse 1/2:

- exakte Kombination zuerst,
- andernfalls Zusammensetzung aus den vollständigen Einzelvorlagen der ausgewählten Kompetenzen.

Die Mathematik-3/4-Bibliothek und ihre fachlichen Texte wurden nicht verändert.

### 5. Grammatisch fehlerhafte Ergänzung im Ist-Stand verbessert
Die allgemeine Ergänzung fehlender Kompetenzschwerpunkte erzeugt keine Verbindung mehr nach dem Muster:

„beim Umgang mit … und bei … zeigen sich“

Die einleitenden Bereichsangaben werden nun grammatisch passend normalisiert, etwa zu „im Umgang …“, „in der …“ oder „im Bereich …“.

## Prüfungen

- Syntaxcheck `script.js`: bestanden
- Syntaxcheck `service-worker.js`: bestanden
- 22 zuvor als „fehlende Bausteine“ gemeldete Kombinationen erneut geprüft: **22 von 22 vollständig**
- 511 Sprach-Kompetenzkombinationen auf die bekannten fehlerhaften Zielmuster geprüft: **511 von 511 ohne Treffer**
- Stichproben für Wahrnehmung, Mathematik 3/4, Deutsch 1/2 und Sprache: vollständige vier Felder
- Druck-, Word-, Speicher- und Buttonlogik: nicht verändert
- Förderketten-IDs und Bestandszahlen: nicht verändert

## Neue Versionen
- `script.js?v=293`
- `style.css?v=193` unverändert
- `textModules.js?v=196` unverändert
- Cache `foerderplan-assistent-cache-v295`

## Einordnung
Diese Version behebt die klar nachgewiesenen systematischen Ausgabeprobleme. Sie behauptet nicht, dass jeder pädagogische Satz jeder theoretischen Kombination redaktionell perfekt ist. Der frühere Audit enthielt zahlreiche Meldungen zu internen Quell- und Zwischenbausteinen, die nicht mit sichtbaren Endfehlern gleichgesetzt werden dürfen.

Die App sollte nun zuerst mit wenigen normalen Auswahlfällen kontrolliert werden. Weitere Änderungen sollten nur anhand eines konkret sichtbaren Fehlers und seiner tatsächlichen Ursache erfolgen.
