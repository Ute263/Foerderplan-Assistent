# Praxistest – Mathematik und Speicherbezeichnungen

## Ausgangslage

Im praktischen Test der stabilisierten Version waren zwei Punkte auffällig:

1. Der zusammengesetzte Ist-Stand für Mathematik Klasse 1/2 war vollständig, aber zu lang und wiederholte „benötigt Unterstützung“ mehrfach.
2. Die verschiedenen Speicheraktionen wirkten gleich, weil mehrere davon im Browser eine JSON-Datei herunterladen, obwohl sie unterschiedliche Datenumfänge haben.

## Änderungen

### Mathematik Klasse 1/2

Die Zusammensetzung mehrerer ausgewählter Mathematikkompetenzen verwendet jetzt einen gruppierten Ist-Stand:

- Zahlvorstellung und Zahlbeziehungen
- Rechenoperationen und Rechenstrategien
- Anwendung in Sachaufgaben, Größen und Geometrie

Für die getestete Vierfachauswahl entsteht dadurch ein kurzer Text mit höchstens vier fachlichen Sätzen statt einer Aneinanderreihung der ersten Sätze aus vier Einzelketten.

Ziele, Maßnahmen, Evaluationen und die 80 Förderketten wurden nicht verändert.

### Speicherbereich

Die Funktionen wurden nicht verändert. Die sichtbaren Beschriftungen wurden deutlicher unterschieden:

- „Arbeitsstand als Datei sichern“
- „Arbeitsstand aus Datei öffnen“
- „Komplettsicherung herunterladen“
- „Komplettsicherung wiederherstellen“
- „Aktuellen Plan weitergeben“
- „Plan einer Kollegin importieren“

Die Erläuterungen nennen nun deutlicher den jeweiligen Datenumfang.

## Technischer Stand

- `script.js?v=294`
- `style.css?v=193`
- `textModules.js?v=196`
- Cache `foerderplan-assistent-cache-v296`

## Prüfungen

- Syntaxprüfung `script.js`: bestanden
- Syntaxprüfung `service-worker.js`: bestanden
- Druck, Word, Förderketten, Speicherfunktionen und Datenformate: unverändert
