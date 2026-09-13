# v342 – Sprache: geprüfte Abschnittslogik wiederhergestellt

Ausgangsbasis: zuletzt hochgeladener GitHub-Stand (script.js v332).

Fehlerursache:
Die bereits vorhandene und geprüfte Sprach-Förderkettenlogik erzeugte weiterhin für jeden ausgewählten Sprachbereich einen eigenen Ist-Stand-Abschnitt. Ein später hinzugefügter Entwicklungs-Prototyp (`applyDevelopmentalTextPrototype`) wurde danach jedoch auch auf „Sprache / Kommunikation“ angewendet und wandelte den gegliederten Text erneut in einen zusammengezogenen Fließtext um.

Korrektur:
- „Sprache / Kommunikation“ wird nicht mehr durch `applyDevelopmentalTextPrototype` nachbearbeitet.
- Die vorhandene `speechSupportChainSuggestion` / `composeSpeechSupportChainIstStand`-Logik bleibt unverändert aktiv.
- Jeder ausgewählte Sprachbereich erscheint wieder als eigener Abschnitt.
- Nicht ausgewählte Bereiche erscheinen nicht.
- Ziele, Maßnahmen, Evaluation, Förderketten und Varianten wurden nicht verändert.
- Andere Förderbereiche wurden nicht verändert.
- Drucklayout wurde nicht verändert.

Referenz: früherer stabiler Sprach-Abschlusscheck mit 9 getrennten Sprachbereichen und 4 Varianten je Bereich.
