# FörderKompass

© 2026 Ute Holzschneider-Riedl. Alle Rechte vorbehalten.

Dieses Projekt ist für die Nutzung über einen geschützten Webzugang vorgesehen. Eine öffentliche Bereitstellung, Veränderung oder Verteilung außerhalb dieses Zugangs ist nur mit Zustimmung von Ute Holzschneider-Riedl erlaubt.

Die App unterstützt die lokale, strukturierte und alltagstaugliche Erstellung von Förderplänen. Personenbezogene Förderplandaten werden lokal im Browser gespeichert und müssen datenschutzgerecht behandelt werden. Es dürfen keine echten Schülerdaten im Code oder in Beispieldaten gespeichert werden.

Die App ist als installierbare Web-App vorbereitet. `manifest.webmanifest`, `pwa.js`, `service-worker.js` und die Icons im Projektstamm ermöglichen das Hinzufügen zum Home-Bildschirm. Der Service Worker cached nur App-Dateien; Förderplandaten werden nicht synchronisiert oder übertragen.


## Technische Bereinigung 11.09.2026

Die frühere Bibliothek `textModules.js` mit einzelnen vorgefertigten Textbausteinen ist nicht mehr Bestandteil der produktiven Förderlogik. Automatische Vorschläge basieren auf den Förderketten bzw. dem Endkatalog. Alte Entwürfe, die noch die Arbeitsweise `prefabModules` gespeichert haben, werden beim Öffnen auf das Kompetenzraster zurückgeführt. Veraltete Service-Worker-Verweise auf den früheren `assets/`-Ordner und die alte Word-Vorlage wurden entfernt. Der Word-Export selbst bleibt erhalten und wird weiterhin clientseitig erzeugt.
