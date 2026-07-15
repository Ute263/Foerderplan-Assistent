# Hotfix – Mathematik-Vorschlagsbutton

## Fehler
In der Praxiskorrektur v294 enthielt `composedMath12SelectionSuggestion(...)` einen Verweis auf die nicht definierte Variable `istStandModules`. Beim Klick auf „Vorschlag aus Kompetenzraster erstellen“ brach die Vorschlagserzeugung deshalb mit einem JavaScript-Fehler ab und es erschien kein Text.

## Korrektur
Der fehlerhafte Aufruf wurde auf die bereits vorhandene Funktion `composeMath12SelectionIstStand(selectedTopics)` umgestellt. Diese Funktion erzeugt den gebündelten Mathematik-Ist-Stand für die ausgewählten Themen.

## Unverändert
Förderketten, Ziele, Maßnahmen, Evaluationen, Speichern, Druck, Word und CSS wurden nicht verändert.

## Versionen
- `script.js`: v294 → v295
- Cache: v296 → v297
- CSS: unverändert v193
- Textmodule: unverändert v196

## Prüfung
- Syntaxcheck `script.js`: bestanden
- Syntaxcheck `service-worker.js`: bestanden
- fehlerhafter undefinierter Variablenverweis entfernt
