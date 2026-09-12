/*
FörderKompass
© 2026 Ute Holzschneider-Riedl. Alle Rechte vorbehalten.

Diese App unterstützt die anonyme Erstellung von Förderplänen.
Keine echten Schülerdaten im Code oder in Beispieldaten speichern.
*/

window.FOERDERPLAN_DATA = (() => {
  const textModuleLibrary = window.FOERDERPLAN_TEXT_MODULES || {};
  const textModuleMeta = textModuleLibrary.meta || {};
  const textModules = textModuleLibrary.areas || {};

  const appMeta = {
    appName: "FörderKompass",
    appVersion: "2.x",
    author: "Ute Holzschneider-Riedl",
    copyright: "© 2026 Ute Holzschneider-Riedl. Alle Rechte vorbehalten."
  };

  const columns = ["stand", "goals", "measures", "evaluation"];
  const columnLabels = {
    stand: "Entwicklungs- bzw. Ist-Stand",
    goals: "(Förder-) Ziele",
    measures: "(Förder-) Maßnahmen",
    evaluation: "Evaluation / Evaluationsinstrument"
  };

  const developmentRows = [
    { key: "emotional", label: "Emotionalität, Sozialverhalten", printLabel: "Emotionalität,\nSozialverhalten" },
    { key: "learning", label: "Lern- und Leistungsverhalten", printLabel: "Lern- und\nLeistungsverhalten" },
    { key: "speech", label: "Sprache / Kommunikation", printLabel: "Sprache/\nKommunikation" },
    { key: "motor", label: "Motorik", printLabel: "Motorik" },
    { key: "perception", label: "Wahrnehmung", printLabel: "Wahrnehmung" },
    { key: "cognition", label: "Kognition", printLabel: "Kognition" }
  ];

  const subjectRows = [
    { key: "german", label: "Deutsch", printLabel: "Deutsch (immer bei LE, GG, SQ)" },
    { key: "math", label: "Mathematik", printLabel: "Mathematik (immer bei LE, GG)" },
    { key: "otherSubjects", label: "Weitere Fächer", printLabel: "Weitere Fächer" },
    { key: "hsu", label: "ggf. Herkunftssprachlicher Unterricht (HSU)", printLabel: "ggf. Herkunftssprachlicher Unterricht (HSU)*" }
  ];

  const ratingOptions = [
    { value: "+", label: "+", description: "gelingt sicher / kein aktueller Förderbedarf" },
    { value: "o", label: "o", description: "gelingt teilweise / geringer Förderbedarf" },
    { value: "-", label: "-", description: "gelingt noch unsicher / hoher Förderbedarf" },
    { value: "nb", label: "n. b.", description: "nicht beobachtet" }
  ];

  const priorityOptions = [
    { value: "niedrig", label: "niedrig" },
    { value: "mittel", label: "mittel" },
    { value: "hoch", label: "hoch" }
  ];

  const quickStatusOptions = [
    { value: "secured", label: "sicher / aktuell kein Förderbedarf" },
    { value: "need", label: "Förderbedarf" },
    { value: "unknown", label: "noch nicht einschätzbar" },
    { value: "details", label: "Details prüfen" }
  ];

  const competenceHints = {
    "Emotionsregulation": "Gefühle wahrnehmen, benennen und vereinbarte Beruhigungsstrategien nutzen.",
    "Konfliktverhalten": "Konflikte verbal klären, Hilfe annehmen, Gesprächsregeln nutzen.",
    "Regelverhalten": "Absprachen beachten, auf Erinnerungen reagieren, Regeln in Übergängen einhalten.",
    "Kontaktverhalten": "Kontakt aufnehmen, gemeinsam handeln, soziale Signale angemessen aufgreifen.",
    "Frustrationstoleranz": "Fehler aushalten, bei Schwierigkeiten weiterarbeiten, Hilfen nutzen.",
    "Selbstkontrolle / Impulssteuerung": "Impulse steuern, warten, Stopp-Signale nutzen und in angespannten Situationen handlungsfähig bleiben.",
    "Empathie / Hilfsbereitschaft": "Bedürfnisse anderer wahrnehmen, Rücksicht nehmen und Hilfen angemessen anbieten.",
    "Kritikfähigkeit / Rückmeldung annehmen": "Rückmeldungen einordnen, Korrekturen annehmen und vereinbarte Schritte nutzen.",
    "Lernbereitschaft / Motivation": "Sich auf Aufgaben einlassen, Hilfen annehmen und bei Misserfolg weiterarbeiten.",
    "Aufgabenverständnis": "Aufgabenstellungen erfassen, zentrale Informationen erkennen und bei Unklarheiten nachfragen.",
    "Aufgabenbeginn": "Arbeitsauftrag erfassen, Material bereitlegen, mit dem ersten Schritt beginnen.",
    "Konzentration": "Bei der Aufgabe bleiben, Ablenkungen ausblenden, Arbeitsphasen beenden.",
    "Ausdauer": "Über eine vereinbarte Zeit weiterarbeiten und begonnene Aufgaben abschließen.",
    "Selbstständigkeit": "Bekannte Hilfen nutzen, Arbeitsschritte ausführen, passend Unterstützung anfordern.",
    "Arbeitsorganisation": "Material ordnen, Arbeitsschritte planen, den Arbeitsplatz übersichtlich halten.",
    "Arbeitsorganisation / Material": "Material bereitlegen, Arbeitsplatz ordnen und Arbeitsschritte übersichtlich strukturieren.",
    "Sorgfalt / Genauigkeit": "Aufgaben genau bearbeiten, Ergebnisse kontrollieren und Korrekturen umsetzen.",
    "Arbeitstempo / Arbeitszeit nutzen": "Arbeitszeit einteilen, Tempo anpassen und Aufgaben in vereinbarter Zeit bearbeiten.",
    "Arbeitsaufträge verstehen": "Aufträge erfassen, Handlungsschritte entnehmen, bei Unklarheiten nachfragen.",
    "Wortschatz": "Begriffe verstehen, passende Wörter verwenden, Inhalte genauer ausdrücken.",
    "Satzbildung": "Vollständige Sätze bilden, Satzmuster nutzen, Aussagen verständlich strukturieren.",
    "Gesprächsverhalten": "Zuhören, abwarten, eigene Beiträge verständlich einbringen.",
    "Aussprache / Artikulation": "Laute, Silben und Wörter verständlich bilden und die eigene Aussprache in Sprechanlässen nutzen.",
    "Lautwahrnehmung / phonologische Bewusstheit": "Reime, Silben, Anlaute, Endlaute und ähnlich klingende Laute wahrnehmen.",
    "Wortschatz / Wortbedeutung": "Wörter verstehen, passende Begriffe finden und Wortbedeutungen im Unterrichtskontext nutzen.",
    "Sprachverständnis / Arbeitsaufträge": "Mündliche Informationen, Arbeitsaufträge und Gesprächsinhalte verstehen und umsetzen.",
    "Grammatik / Satzbildung": "Satzmuster, Wortstellung, Verbformen und Satzverbindungen verständlich nutzen.",
    "Erzählfähigkeit / Versprachlichen": "Erlebnisse, Handlungen und Lösungswege geordnet versprachlichen.",
    "Kommunikation / Gesprächsverhalten": "Kontakt aufnehmen, zuhören, Beiträge einbringen und Gesprächsregeln beachten.",
    "Stimme / Sprechweise": "Lautstärke, Tempo, Betonung und Stimme an die Situation anpassen.",
    "Redefluss / Wortfindung": "Wörter finden, Gedanken ordnen und Äußerungen möglichst flüssig aufbauen.",
    "Feinmotorik": "Schneiden, kleben, falten und Arbeitsmaterial gezielt einsetzen.",
    "Graphomotorik": "Stift sicher führen, Schreibdruck anpassen, Formen und Zeichen kontrolliert ausführen.",
    "Grobmotorik": "Bewegungen koordinieren, Gleichgewicht halten, Bewegungsangebote sicher nutzen.",
    "Bilaterale Koordination": "Beide Körperseiten abgestimmt einsetzen und Überkreuzbewegungen ausführen.",
    "Gleichgewicht / vestibuläre Sicherheit": "Gleichgewicht halten, Lageveränderungen verarbeiten und Bewegung sicher stabilisieren.",
    "Motorische Handlungsplanung": "Motorische Aufträge planen, Reihenfolgen einhalten und Bewegungsabläufe umsetzen.",
    "Körperschema": "Körperteile benennen, Körpergrenzen wahrnehmen und Bewegungen gezielt steuern.",
    "visuelle Wahrnehmung": "Formen und Zeichen unterscheiden, Details erkennen, Raum-Lage-Beziehungen beachten.",
    "auditive Wahrnehmung": "Genau hinhören, Laute unterscheiden, mündliche Informationen aufnehmen.",
    "Visuomotorische Koordination": "Sehen und Bewegung aufeinander abstimmen und Vorlagen gezielt ausführen.",
    "Figur-Grund-Wahrnehmung": "Wichtige Informationen vor Hintergrundreizen erkennen.",
    "Wahrnehmungskonstanz": "Formen, Farben und Merkmale trotz veränderter Darstellung wiedererkennen.",
    "Raum-Lage-Wahrnehmung": "Lage, Richtung und gedrehte Formen sicher unterscheiden.",
    "Räumliche Beziehungen": "Positionen, Muster und räumliche Anordnungen erfassen.",
    "Auditive Differenzierung": "Geräusche, Laute und ähnlich klingende Wörter unterscheiden.",
    "Auditive Gliederung / phonologische Wahrnehmung": "Anlaute, Endlaute, Silben und Lautfolgen heraushören.",
    "Auditive Identifikation": "Reime, gleiche Lautanfänge, Lautmuster und Klangmerkmale erkennen.",
    "Auditives Gedächtnis": "Gehörte Informationen, Sätze, Reime oder Rhythmen behalten.",
    "Taktil-kinästhetische Wahrnehmung": "Berührungen, Materialien, Druck und Körperbewegungen wahrnehmen.",
    "Vestibuläre Wahrnehmung": "Gleichgewichtsreize, Lageveränderungen und Bewegung im Raum verarbeiten.",
    "Merkfähigkeit": "Kurze Aufträge behalten, Inhalte wiedererkennen, Merkhilfen nutzen.",
    "Merkfähigkeit / Kurzzeitgedächtnis": "Kurze Aufträge, Begriffe und Zwischenschritte kurzfristig behalten.",
    "Langfristiges Behalten / Abruf": "Geübte Inhalte, Regeln und Begriffe über längere Zeit abrufen.",
    "Strategien": "Vorgehensweisen auswählen, Lösungsschritte planen, Ergebnisse kontrollieren.",
    "Problemlösen": "Lösungswege erproben, bei Schwierigkeiten Hilfen nutzen, Vorgehen anpassen.",
    "Transfer": "Bekannte Inhalte erkennen und auf ähnliche oder neue Aufgaben übertragen.",
    "Transfer / Anwendung in neuen Situationen": "Gelerntes in veränderten Aufgabenformaten und neuen Situationen anwenden.",
    "Schlussfolgern / Zusammenhänge erkennen": "Informationen verknüpfen, Zusammenhänge erkennen und begründete Schlüsse ziehen.",
    "Symbolverständnis / Ordnungssysteme": "Symbole, Kategorien und Ordnungssysteme verstehen und nutzen.",
    "Lesen": "Genau lesen, Texte verstehen, Fragen beantworten.",
    "Lesen auf Wort- und Satzebene": "Wörter und kurze Sätze genau, zunehmend sicher und sinnbezogen lesen.",
    "Leseverständnis": "Kurze Texte verstehen, Informationen entnehmen und einfache Fragen beantworten.",
    "Laut-Buchstaben-Zuordnung": "Laute hören, Buchstaben erkennen, Laut und Buchstabe sicher verbinden.",
    "Silben": "Wörter gliedern, Silben erkennen, Silben als Lese- und Schreibhilfe nutzen.",
    "Wörter lesen": "Wörter genau erlesen, häufige Wörter wiedererkennen, Lesestrategien nutzen.",
    "Sätze lesen": "Sätze genau lesen, Satzgrenzen beachten, Inhalte erfassen.",
    "Texte verstehen": "Informationen entnehmen, zentrale Aussagen erkennen, Fragen beantworten.",
    "Leseflüssigkeit/Vorlesen": "Geübte Texte flüssig lesen, Satzzeichen beachten, passend betonen.",
    "Leseflüssigkeit": "Texte genau und flüssig lesen, Sinnabschnitte und Betonung beachten.",
    "Lesestrategien": "Vorwissen nutzen, Wichtiges markieren, Fragen stellen und Inhalte zusammenfassen.",
    "Lautgetreues Schreiben": "Laute vollständig hören und passende Buchstaben beim Schreiben nutzen.",
    "Abschreiben und Kontrollieren": "Vorlage genau lesen, merken, schreiben und mit der Vorlage vergleichen.",
    "Abschreiben": "Vorlage genau erfassen, vollständig übertragen, das Ergebnis kontrollieren.",
    "Eigene Sätze schreiben": "Gedanken in verständlichen Sätzen ausdrücken und Satzanfänge passend nutzen.",
    "Eigene Texte schreiben": "Texte planen, verständlich formulieren und überarbeiten.",
    "Schreiben eigener Texte": "Ideen ordnen, verständlich formulieren, einen roten Faden entwickeln.",
    "Texte planen/überarbeiten": "Schreibideen planen, Texte gliedern, Rückmeldungen zur Überarbeitung nutzen.",
    "Rechtschreibgrundlagen": "Geübte Wörter sichern, schwierige Stellen erkennen, erste Strategien anwenden.",
    "Rechtschreibstrategien": "Silbieren, verlängern, ableiten und eigene Schreibungen kontrollieren.",
    "Rechtschreibstrategien anwenden": "Silbieren, Verlängern, Ableiten, Merken und Kontrollieren nutzen.",
    "Texte kontrollieren": "Eigene Texte mithilfe von Checkliste, Wörterliste oder Strategien überprüfen.",
    "Sprache untersuchen": "Wortarten, Satzbau und Satzzeichen zunehmend sicher erkennen und anwenden.",
    "Großschreibung/Nomen": "Nomen erkennen, Artikelprobe nutzen, Großschreibung beachten.",
    "Wortarten": "Nomen, Verben und Adjektive erkennen und mit einfachen Proben unterscheiden.",
    "Satzglieder/Satzbau": "Vollständige Sätze bilden, Satzgrenzen beachten, Sätze umstellen und erweitern.",
    "Abschreiben/Kontrollieren": "Texte genau übertragen und mit einer festen Strategie kontrollieren.",
    "Arbeitsverhalten Deutsch": "Aufgaben beginnen, Strukturhilfen nutzen, Lese- und Schreibarbeiten abschließen.",
    "Zahlverständnis": "Zahlen darstellen, vergleichen und Beziehungen im Zahlenraum erkennen.",
    "Mengen/Zahlen zuordnen": "Mengen erfassen, Zahlen zuordnen, strukturierte Darstellungen nutzen.",
    "Zahlenreihe/Zahlordnung": "Zahlen ordnen, Vorgänger und Nachfolger bestimmen, den Zahlenstrahl nutzen.",
    "Zahlzerlegung": "Zahlen zerlegen, Partnerzahlen abrufen, Zerlegungen beim Rechnen nutzen.",
    "Addition": "Plusaufgaben verstehen, passende Strategien nutzen, Ergebnisse sicher bestimmen.",
    "Subtraktion": "Minusaufgaben verstehen, Rechenwege wählen, Ergebnisse sicher bestimmen.",
    "Zehnerübergang": "Bis zum Zehner zerlegen, Teilschritte nutzen, Rechenwege darstellen.",
    "Rechenstrategien": "Aufgabenbeziehungen erkennen, passende Strategien auswählen, Rechenwege erklären.",
    "Kopfrechnen": "Bekannte Aufgaben abrufen und einfache Rechenaufgaben sicher im Kopf lösen.",
    "Sachaufgaben": "Wichtige Informationen erkennen, passende Rechnung finden, Antwort formulieren.",
    "Geometrie/Formen/Muster": "Formen erkennen, Muster fortsetzen, Lagebeziehungen beschreiben.",
    "Umgang mit Material": "Material zielgerichtet nutzen und Handlung, Bild und Rechnung verbinden.",
    "Zahlenraum und Zahlvorstellung": "Größere Zahlen darstellen, ordnen und Beziehungen am Zahlenstrahl nutzen.",
    "Stellenwertverständnis": "Stellenwerte benennen, Zahlen zerlegen, bündeln und entbündeln.",
    "Addition und Subtraktion": "Rechenwege auswählen, Aufgaben sicher lösen, Ergebnisse kontrollieren.",
    "Schriftliche Rechenverfahren": "Schritte geordnet ausführen, Stellenwerte beachten, Ergebnisse prüfen.",
    "Multiplikation und Division": "Mal- und Geteiltaufgaben verknüpfen und Ableitungsstrategien nutzen.",
    "Rechenstrategien und Kopfrechnen": "Rechenvorteile erkennen, Strategien erklären, Aufgaben sicher abrufen.",
    "Größen": "Einheiten zuordnen, messen, vergleichen und alltagsnahe Größenaufgaben lösen.",
    "Geometrie": "Formen und Körper unterscheiden, Eigenschaften beschreiben, sorgfältig zeichnen.",
    "Daten, Tabellen und Diagramme": "Daten ordnen, Darstellungen lesen und Ergebnisse beschreiben.",
    "Arbeitsverhalten Mathematik": "Aufgaben beginnen, Rechenwege ordnen, Ergebnisse sorgfältig kontrollieren.",
    "Fachunterricht allgemein": "Arbeitsaufträge umsetzen, Fachinhalte sichern, sich am Unterricht beteiligen.",
    "Sachunterricht": "Sachinformationen entnehmen, Beobachtungen beschreiben, Fachbegriffe verwenden.",
    "Wortschatz und Ausdruck": "Wörter und Satzmuster nutzen und Inhalte verständlich ausdrücken.",
    "Lesen und Schreiben": "Einfache Texte verstehen und geübte Wörter sowie Satzmuster anwenden."
  };

  function makeItem(areaId, subareaId, label, tags) {
    const id = `${areaId}_${subareaId}_${slug(label)}`;
    return {
      id,
      label,
      positiveText: `_ kann ${label} zunehmend sicher zeigen.`,
      needText: `_ benötigt noch Unterstützung im Bereich: ${label}.`,
      tags
    };
  }

  function subarea(areaId, id, label, tagList, competencies) {
    const items = competencies.map((item) => makeItem(areaId, id, item, tagList));
    return {
      id: `${areaId}_${id}`,
      shortId: id,
      label,
      tags: tagList,
      quickStatus: null,
      gradeHint: gradeHintFor(id, tagList),
      competencies: items,
      detailItems: items
    };
  }

  function gradeHintFor(id, tags) {
    const basal = ["phonologie", "buchstaben", "praenumerisch"].some((tag) => tags.includes(tag) || id.includes(tag));
    if (!basal) {
      return {
        "1": "Prüfen Sie kurz, ob dieser Bereich aktuell förderrelevant ist.",
        "2": "Prüfen Sie kurz, ob dieser Bereich aktuell förderrelevant ist.",
        "3": "Nur öffnen, wenn Beobachtungen oder Unsicherheiten vorliegen.",
        "4": "Nur öffnen, wenn Beobachtungen oder Unsicherheiten vorliegen."
      };
    }
    return {
      "1": "Dieser Bereich ist im Anfangsunterricht besonders relevant.",
      "2": "Dieser Bereich kann weiterhin für Lesen, Schreiben oder mathematische Grundlagen wichtig sein.",
      "3": "Dieser Bereich ist meist eine Basiskompetenz. Nur öffnen, wenn Unsicherheiten beobachtet werden.",
      "4": "Dieser Bereich ist meist eine Basiskompetenz. Nur öffnen, wenn Unsicherheiten beobachtet werden."
    };
  }

  function slug(text) {
    return text
      .toLowerCase()
      .replaceAll("ä", "ae")
      .replaceAll("ö", "oe")
      .replaceAll("ü", "ue")
      .replaceAll("ß", "ss")
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "")
      .slice(0, 46);
  }

  function perceptionTextBlock(id, title, tags, istStand, ziele, massnahmen, evaluation) {
    return {
      id,
      bereich: "Wahrnehmung",
      rasterRow: "perception",
      rasterRowLabel: "Wahrnehmung",
      title,
      tags: ["wahrnehmung", ...tags, ...slug(title).split("_")],
      quickAreas: [title],
      istStand,
      ziele,
      massnahmen,
      evaluation
    };
  }

  const perceptionTextBlockSpecs = [
    perceptionTextBlock("W01", "Visuomotorische Koordination", ["visuomotorik", "auge", "hand", "koordination"], "_ benötigt noch Unterstützung, um Auge und Hand bei Schreib-, Nachspur- oder Schneideaufgaben sicher aufeinander abzustimmen.", [
      "_ führt einfache Nachspur-, Schneide- oder Zeichenaufgaben mit visueller Orientierung zunehmend genauer aus.",
      "_ bleibt bei Linien, Begrenzungen und einfachen Formen zunehmend sicherer in der vorgegebenen Spur.",
      "_ koordiniert Auge und Hand bei kurzen Arbeitsaufgaben mit weniger Unterstützung.",
      "_ nutzt vergrößerte Vorlagen oder klare Begrenzungen zunehmend gezielter."
    ], [
      "Im Unterricht werden Nachspur-, Punktverbindungs-, Ausmal- und Schneideaufgaben in kurzen Übungsphasen angeboten.",
      "Zur Unterstützung werden Vorlagen vergrößert, Begrenzungen markiert und Arbeitsschritte sichtbar gemacht.",
      "_ erhält klare Startpunkte, Linienführungen und kurze Rückmeldungen zur Genauigkeit.",
      "Die Anforderungen werden von breiten, klaren Spuren zu feineren Linien schrittweise gesteigert."
    ], [
      "Beobachtet wird, ob _ Linien, Begrenzungen und einfache Formen zunehmend genauer einhält.",
      "Dokumentiert wird, ob Nachspur-, Schneide- oder Zeichenaufgaben mit weniger Unterstützung gelingen.",
      "Überprüft wird, ob _ Auge und Hand bei kurzen visuomotorischen Aufgaben sicherer koordiniert."
    ]),
    perceptionTextBlock("W02", "Figur-Grund-Wahrnehmung", ["figur", "grund", "suchaufgaben", "arbeitsblatt"], "_ benötigt noch Unterstützung, um wichtige Informationen in unruhigen Bildern, Vorlagen oder Arbeitsblättern sicher herauszufinden.", [
      "_ findet relevante Informationen in übersichtlich gestalteten Vorlagen zunehmend sicherer.",
      "_ unterscheidet wichtige Elemente vom Hintergrund mit Markierungen oder Abdeckhilfen genauer.",
      "_ verfolgt Linien oder Suchwege zwischen anderen Reizen zunehmend sicherer.",
      "_ hebt gesuchte Informationen auf Arbeitsblättern mit Unterstützung gezielter hervor."
    ], [
      "Vorlagen werden reduziert, klar gegliedert und wichtige Informationen werden bei Bedarf markiert.",
      "Such-, Vergleichs- und Zuordnungsaufgaben werden in kurzen, überschaubaren Einheiten eingesetzt.",
      "_ nutzt Abdeckhilfen, farbige Markierungen oder einen Lesestreifen zur Orientierung.",
      "Unruhiges Material wird zunächst vereinfacht und anschließend schrittweise erweitert."
    ], [
      "Beobachtet wird, ob _ gesuchte Informationen in Bildern oder Arbeitsblättern zunehmend sicher findet.",
      "Dokumentiert wird, ob Markierungen oder Abdeckhilfen seltener benötigt werden.",
      "Überprüft wird, ob _ relevante Elemente vom Hintergrund sicherer unterscheidet."
    ]),
    perceptionTextBlock("W03", "Wahrnehmungskonstanz", ["konstanz", "form", "farbe", "groesse", "vergleich"], "_ erkennt Formen, Farben oder Merkmale bei veränderter Größe, Lage oder Darstellung noch nicht durchgängig sicher wieder.", [
      "_ erkennt gleiche Formen oder Merkmale in unterschiedlichen Darstellungen zunehmend sicherer.",
      "_ unterscheidet ähnliche Formen, Farben oder Zeichen mit Vergleichshilfen genauer.",
      "_ ordnet Form, Farbe und Größe zunehmend getrennt und nachvollziehbar zu.",
      "_ nutzt Vergleichsbeispiele, um Merkmale sicherer wiederzuerkennen."
    ], [
      "Formen, Farben und Größen werden in Sortier-, Vergleichs- und Zuordnungsaufgaben gegenübergestellt.",
      "Zur Unterstützung werden klare Vergleichsbeispiele, wiederkehrende Sortierkriterien und markierte Merkmale genutzt.",
      "_ arbeitet mit variierenden Darstellungen derselben Form oder desselben Merkmals.",
      "Ähnliche Formen oder Zeichen werden gezielt nebeneinandergelegt und versprachlicht."
    ], [
      "Beobachtet wird, ob _ Formen und Merkmale trotz veränderter Darstellung sicherer wiedererkennt.",
      "Dokumentiert wird, ob ähnliche Formen oder Zeichen seltener verwechselt werden.",
      "Überprüft wird, ob _ Form, Farbe und Größe in Sortieraufgaben zunehmend getrennt beachtet."
    ]),
    perceptionTextBlock("W04", "Raum-Lage-Wahrnehmung", ["raumlage", "rechts", "links", "drehung", "spiegelung"], "_ benötigt noch Unterstützung, um Raumlagen, Richtungen sowie gedrehte oder gespiegelte Zeichen sicher zu unterscheiden.", [
      "_ unterscheidet rechts und links sowie oben, unten, vor und hinter zunehmend sicherer.",
      "_ erkennt gedrehte oder gespiegelte Formen und Zeichen mit visueller Unterstützung genauer.",
      "_ unterscheidet ähnlich aussehende Buchstaben oder Zahlen in bekannten Aufgabenformaten zunehmend sicherer.",
      "_ nutzt farbige Markierungen oder Orientierungshilfen bei Raum-Lage-Aufgaben gezielter."
    ], [
      "Raum-Lage-Begriffe werden handelnd, bildlich und auf Arbeitsblättern wiederkehrend geübt.",
      "Zur Unterstützung werden Zeichen vergrößert, farbig markiert und in kurzen Vergleichsübungen gegenübergestellt.",
      "_ nutzt Rechts-links-Markierungen, Pfeile, Lagekarten oder konkrete Bewegungsaufgaben.",
      "Drehungen und Spiegelungen werden zunächst mit Material gelegt und anschließend bildlich übertragen."
    ], [
      "Beobachtet wird, ob _ Raum-Lage-Begriffe in bekannten Aufgaben zunehmend sicher anwendet.",
      "Dokumentiert wird, ob ähnlich aussehende Buchstaben oder Zahlen seltener verwechselt werden.",
      "Überprüft wird, ob _ gedrehte oder gespiegelte Formen mit weniger Unterstützung erkennt."
    ]),
    perceptionTextBlock("W05", "Räumliche Beziehungen", ["raeumlich", "beziehungen", "seite", "muster", "orientierung"], "_ verliert bei komplexeren Arbeitsseiten, Mustern oder räumlichen Anordnungen noch leicht die Orientierung.", [
      "_ orientiert sich auf Arbeitsblättern, Heftseiten und Buchseiten zunehmend sicherer.",
      "_ findet geforderte Stellen in übersichtlichen Vorlagen mit weniger Unterstützung.",
      "_ legt Muster oder Punktebilder zunehmend genauer nach.",
      "_ beschreibt einfache räumliche Beziehungen auf Bildern oder Vorlagen zunehmend nachvollziehbar."
    ], [
      "Arbeitsseiten werden klar gegliedert und Suchwege, Startpunkte oder relevante Stellen werden markiert.",
      "Muster, Punktebilder und räumliche Anordnungen werden handelnd gelegt, beschrieben und übertragen.",
      "_ erhält Schritt-für-Schritt-Orientierung auf der Seite und reduziert gestaltete Vorlagen.",
      "Räumliche Begriffe werden an konkretem Material, Bildern und Arbeitsblättern wiederholt genutzt."
    ], [
      "Beobachtet wird, ob _ geforderte Stellen auf Arbeitsseiten zunehmend sicher findet.",
      "Dokumentiert wird, ob Muster, Punktebilder oder Lagebeziehungen genauer übertragen werden.",
      "Überprüft wird, ob _ bei komplexeren Vorlagen weniger Orientierungshilfe benötigt."
    ]),
    perceptionTextBlock("W06", "Auditive Differenzierung", ["auditiv", "differenzierung", "geraeusch", "laut"], "_ benötigt noch Unterstützung, um Geräusche, Lautstärken oder ähnlich klingende Laute und Wörter sicher zu unterscheiden.", [
      "_ unterscheidet Geräusche, Lautstärken und ähnlich klingende Laute zunehmend genauer.",
      "_ hört Unterschiede zwischen ähnlich klingenden Wörtern mit weniger Wiederholung heraus.",
      "_ benennt gehörte Unterschiede in bekannten Übungen zunehmend sicherer.",
      "_ nimmt auditive Informationen in ruhigen Hörsituationen gezielter auf."
    ], [
      "Hörübungen, Geräuschvergleiche und Lautunterscheidungen werden kurz und wiederkehrend eingesetzt.",
      "Zur Unterstützung werden deutliche Aussprache, langsames Sprechtempo und Wiederholungen genutzt.",
      "_ arbeitet mit Hörbeispielen, Lautpaaren und klar begrenzten auditiven Aufgaben.",
      "Störgeräusche werden reduziert und auditive Informationen werden bei Bedarf zusätzlich visualisiert."
    ], [
      "Beobachtet wird, ob _ Geräusche oder ähnlich klingende Laute zunehmend sicher unterscheidet.",
      "Dokumentiert wird, ob Wiederholungen bei auditiv ähnlichen Informationen seltener notwendig sind.",
      "Überprüft wird, ob _ gehörte Unterschiede in bekannten Übungen benennen kann."
    ]),
    perceptionTextBlock("W07", "Auditive Gliederung / phonologische Wahrnehmung", ["auditiv", "phonologisch", "anlaut", "silben", "laute"], "_ benötigt noch Unterstützung, um Wörter auditiv zu gliedern und Anlaute, Endlaute, Silben oder Lautpositionen sicher wahrzunehmen.", [
      "_ hört Anlaute, Endlaute oder Silben in bekannten Wörtern zunehmend sicherer heraus.",
      "_ gliedert Wörter mit Silbenbögen, Lautgebärden oder rhythmischer Unterstützung genauer.",
      "_ lokalisiert Laute im Wort mit Unterstützung zunehmend nachvollziehbar.",
      "_ erkennt lautliche Strukturen in wiederholten Übungen zunehmend sicherer."
    ], [
      "Reim-, Silben-, Anlaut- und Endlautübungen werden regelmäßig in kurzen Einheiten durchgeführt.",
      "Zur Unterstützung werden Silbenbögen, Lautgebärden, rhythmisches Klatschen und Bildkarten genutzt.",
      "_ zerlegt Wörter handelnd, mündlich und mit visuellen Hilfen in Silben oder Laute.",
      "Lautpositionen werden an bekannten Wörtern kleinschrittig markiert und wiederholt."
    ], [
      "Beobachtet wird, ob _ Anlaute, Endlaute oder Silben zunehmend sicher heraushört.",
      "Dokumentiert wird, ob _ Wörter mit weniger Unterstützung gliedert.",
      "Überprüft wird, ob _ lautliche Strukturen in bekannten Wörtern sicherer erkennt."
    ]),
    perceptionTextBlock("W08", "Auditive Identifikation", ["auditiv", "identifikation", "reim", "lautanfang", "klang"], "_ erkennt Reime, gleiche Lautanfänge, Auslaute oder wiederkehrende Klangmuster noch nicht durchgängig sicher.", [
      "_ erkennt Reimwörter und wiederkehrende Lautmuster zunehmend sicherer.",
      "_ findet Wörter mit gleichem Anlaut oder Auslaut mit weniger Unterstützung.",
      "_ ordnet Wörter nach Klangmerkmalen zunehmend genauer zu.",
      "_ nutzt Reim- und Lautspiele, um bekannte Klangmuster sicherer zu erkennen."
    ], [
      "Reimspiele, Lautspiele und Zuordnungsaufgaben mit gleichen An- oder Auslauten werden regelmäßig angeboten.",
      "Zur Unterstützung werden Lautbeispiele deutlich vorgesprochen, bildlich gestützt und wiederholt.",
      "_ sortiert Wörter nach Klangmerkmalen und vergleicht Reime, Anlaute oder Auslaute.",
      "Bekannte Klangmuster werden in kurzen spielerischen Übungen wiederholt gesichert."
    ], [
      "Beobachtet wird, ob _ Reimwörter oder gleiche Lautanfänge zunehmend sicher erkennt.",
      "Dokumentiert wird, ob _ passende Wörter zu einem Lautbeispiel mit weniger Hilfe findet.",
      "Überprüft wird, ob _ Wörter nach Klangmerkmalen sicherer zuordnet."
    ]),
    perceptionTextBlock("W09", "Auditives Gedächtnis", ["auditiv", "gedaechtnis", "merkfaehigkeit", "auftrag"], "_ behält kurze mündliche Informationen, Sätze, Reime, Rhythmen oder mehrteilige Aufträge noch nicht durchgängig sicher.", [
      "_ merkt sich kurze mündliche Informationen und zentrale Auftragsschritte zunehmend sicherer.",
      "_ gibt kurze Hörinformationen mit Unterstützung zunehmend nachvollziehbar wieder.",
      "_ nutzt Wiederholung oder Visualisierung, um gehörte Informationen besser zu behalten.",
      "_ klatscht einfache Rhythmen oder spricht kurze Sätze in bekannten Übungen genauer nach."
    ], [
      "Mündliche Informationen werden kurz formuliert, wiederholt und bei Bedarf visualisiert.",
      "Zur Unterstützung werden Aufträge in einzelne Schritte gegliedert und mit Symbolen gesichert.",
      "_ übt Nachsprechen, Rhythmusfolgen, kurze Reime und das Wiedergeben zentraler Informationen.",
      "Wiederholungsrituale und kurze Merkstrategien werden regelmäßig eingesetzt."
    ], [
      "Beobachtet wird, ob _ kurze mündliche Informationen zunehmend sicher behält.",
      "Dokumentiert wird, ob bei mehrteiligen Aufträgen weniger Schritte verloren gehen.",
      "Überprüft wird, ob _ gehörte Informationen mit weniger Unterstützung wiedergeben kann."
    ]),
    perceptionTextBlock("W10", "Taktil-kinästhetische Wahrnehmung", ["taktil", "kinaesthetisch", "koerper", "tasten", "material"], "_ benötigt noch Unterstützung, um Berührungen, Materialien, Körperpositionen oder taktile Eindrücke sicher wahrzunehmen und einzuordnen.", [
      "_ lokalisiert Berührungen und taktile Eindrücke am eigenen Körper zunehmend sicherer.",
      "_ unterscheidet Materialien, Oberflächen oder Gegenstände durch Tasten mit weniger Unterstützung.",
      "_ benennt taktile Eindrücke zunehmend nachvollziehbar.",
      "_ nimmt Anspannung, Entspannung oder Körperbewegungen in kurzen Übungen bewusster wahr."
    ], [
      "Tast-, Material- und Körperwahrnehmungsaufgaben werden klar angekündigt und überschaubar durchgeführt.",
      "Zur Unterstützung werden unterschiedliche Materialien, Tastbeutel und sprachliche Vergleichsbegriffe genutzt.",
      "_ erhält kurze Übungen zum Lokalisieren von Berührungen und zum bewussten An- und Entspannen einzelner Körperteile.",
      "Empfindlichkeiten werden beachtet und taktile Erfahrungen werden schrittweise vorbereitet."
    ], [
      "Beobachtet wird, ob _ Berührungen oder Materialien zunehmend sicher einordnet.",
      "Dokumentiert wird, ob taktile Eindrücke verständlicher benannt werden.",
      "Überprüft wird, ob _ Körperpositionen oder Anspannung mit weniger Unterstützung wahrnimmt."
    ]),
    perceptionTextBlock("W11", "Vestibuläre Wahrnehmung", ["vestibulaer", "gleichgewicht", "bewegung", "balance"], "_ wirkt bei Gleichgewichtsaufgaben, Lageveränderungen oder Bewegungsreizen noch unsicher oder wechselhaft reguliert.", [
      "_ hält das Gleichgewicht in einfachen Bewegungssituationen zunehmend sicherer.",
      "_ bewältigt Balancier-, Hüpf- oder Rückwärtsbewegungen mit weniger Unterstützung.",
      "_ steuert Bewegungen bei klar strukturierten Angeboten zunehmend kontrollierter.",
      "_ geht mit vestibulären Reizen in vorbereiteten Situationen zunehmend sicherer um."
    ], [
      "Balancier-, Gleichgewichts- und Bewegungsangebote werden klar strukturiert und schrittweise gesteigert.",
      "Zur Unterstützung werden Bewegungswege begrenzt, Übungen vorgemacht und kurze Wiederholungen angeboten.",
      "_ erhält Aufgaben wie Balancieren, Einbeinstand, Hüpfen oder rückwärts Gehen in überschaubaren Sequenzen.",
      "Bewegungsreize werden vorhersehbar angekündigt und bei Unsicherheit angepasst."
    ], [
      "Beobachtet wird, ob _ Gleichgewichtsaufgaben zunehmend sicherer bewältigt.",
      "Dokumentiert wird, ob Balancier-, Hüpf- oder Lageveränderungsaufgaben mit weniger Unterstützung gelingen.",
      "Überprüft wird, ob _ Bewegungen bei klarer Struktur kontrollierter steuert."
    ])
  ];


  const textBlockSpecs = [
    {
      "id": "D01",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Phonologische Bewusstheit: Reime und Silben",
      "tags": [
        "deutsch",
        "phonologische",
        "bewusstheit",
        "reime",
        "und",
        "silben",
        "phonologie",
        "schriftaufbau",
        "lesen"
      ],
      "quickAreas": [
        "Phonologische Bewusstheit"
      ],
      "istStand": "_ zeigt im Bereich der phonologischen Bewusstheit noch Unsicherheiten. Besonders beim Erkennen von Reimen und beim Gliedern von Wörtern in Silben benötigt #er/sie# Unterstützung.",
      "ziele": [
        "_ erkennt Reime und Silben in einfachen Wörtern zunehmend sicher.",
        "_ nutzt Silben als Hilfe beim Lesen und Schreiben."
      ],
      "massnahmen": [
        "Kurze Übungen zu Reimen, Silbenklatschen und Silbenbögen werden regelmäßig eingesetzt.",
        "Bildkarten, rhythmisches Sprechen und wiederkehrende Übungsformate unterstützen die Sicherung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch kurze Beobachtungen bei Reim- und Silbenübungen sowie ausgewählte Lese- und Schreibproben überprüft."
      ]
    },
    {
      "id": "D02",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Phonologische Bewusstheit: Anlaut, Inlaut, Auslaut",
      "tags": [
        "deutsch",
        "phonologische",
        "bewusstheit",
        "anlaut",
        "inlaut",
        "auslaut",
        "phonologie",
        "schriftaufbau",
        "laut"
      ],
      "quickAreas": [
        "Phonologische Bewusstheit"
      ],
      "istStand": "_ benötigt Unterstützung beim Heraushören von An-, In- und Auslauten in einfachen Wörtern.",
      "ziele": [
        "_ hört An-, In- und Auslaute in einfachen Wörtern zunehmend sicher heraus.",
        "_ benennt gehörte Laute mit Unterstützung passend."
      ],
      "massnahmen": [
        "_ übt mit Bildkarten, Lautgebärden, Anlautspielen und gezielten Hörübungen.",
        "Laute werden deutlich gesprochen, wiederholt und mit bekannten Wörtern verknüpft."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Lautübungen, kurze Schreibproben und Beobachtungen im Anfangsunterricht überprüft."
      ]
    },
    {
      "id": "D03",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Lautanalyse und Lautsynthese",
      "tags": [
        "deutsch",
        "lautanalyse",
        "und",
        "lautsynthese",
        "laut",
        "schriftaufbau"
      ],
      "quickAreas": [
        "Lautanalyse und Lautsynthese"
      ],
      "istStand": "_ hat noch Schwierigkeiten, Wörter in einzelne Laute zu gliedern und Laute zu Silben oder Wörtern zusammenzuführen.",
      "ziele": [
        "_ gliedert einfache Wörter zunehmend sicher in Laute.",
        "_ verbindet Laute zunehmend sicher zu Silben und Wörtern."
      ],
      "massnahmen": [
        "Lautierübungen, Lautketten, Schiebekarten und gemeinsames Zusammenschleifen werden regelmäßig eingesetzt.",
        "_ erhält kurze Übungsphasen mit lautgetreuen Wörtern."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung beim Lautieren, Leseproben und Schreibproben überprüft."
      ]
    },
    {
      "id": "D04",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Laut-Buchstaben-Zuordnung",
      "tags": [
        "deutsch",
        "laut",
        "buchstaben",
        "zuordnung",
        "schriftaufbau"
      ],
      "quickAreas": [
        "Laut-Buchstaben-Zuordnung"
      ],
      "istStand": "_ kennt einzelne Buchstaben, kann diese jedoch noch nicht durchgängig sicher den passenden Lauten zuordnen.",
      "ziele": [
        "_ sichert die Laut-Buchstaben-Zuordnung bekannter Buchstaben.",
        "_ ruft bekannte Buchstaben und Laute zunehmend zuverlässig ab."
      ],
      "massnahmen": [
        "_ übt mit Anlauttabelle, Lautgebärden, Buchstabenkarten und kurzen Wiederholungsformaten.",
        "Neue Buchstaben werden kleinschrittig eingeführt und regelmäßig wiederholt."
      ],
      "evaluation": [
        "Die Entwicklung wird durch kurze Buchstabenabfragen, Leseübungen und Schreibproben überprüft."
      ]
    },
    {
      "id": "D05",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Buchstabenkenntnis sichern",
      "tags": [
        "deutsch",
        "buchstabenkenntnis",
        "sichern",
        "buchstaben",
        "schriftaufbau"
      ],
      "quickAreas": [
        "Buchstabenkenntnis sichern"
      ],
      "istStand": "_ erkennt und benennt bekannte Buchstaben noch nicht durchgängig sicher.",
      "ziele": [
        "_ erkennt, benennt und schreibt bekannte Buchstaben zunehmend sicher."
      ],
      "massnahmen": [
        "_ wiederholt bekannte Buchstaben täglich in kurzen Einheiten.",
        "Buchstaben werden handelnd, visuell, auditiv und schreibmotorisch gesichert."
      ],
      "evaluation": [
        "Die Entwicklung wird durch kurze Buchstabenchecks und Sichtung der Schreibproben überprüft."
      ]
    },
    {
      "id": "D06",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Ähnliche Buchstaben und Laute unterscheiden",
      "tags": [
        "deutsch",
        "aehnliche",
        "buchstaben",
        "und",
        "laute",
        "unterscheiden",
        "laut",
        "schriftaufbau"
      ],
      "quickAreas": [
        "Ähnliche Buchstaben und Laute unterscheiden"
      ],
      "istStand": "_ verwechselt ähnliche Buchstaben oder ähnlich klingende Laute noch häufig.",
      "ziele": [
        "_ unterscheidet ähnliche Buchstaben und Laute zunehmend sicher."
      ],
      "massnahmen": [
        "Ähnliche Buchstaben und Laute werden gezielt gegenübergestellt, markiert und in kurzen Aufgabenformaten wiederholt.",
        "_ nutzt Lautgebärden, Markierungen und Vergleichskarten."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Lese- und Schreibproben mit den betroffenen Lauten und Buchstaben überprüft."
      ]
    },
    {
      "id": "D07",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Silbenlesen",
      "tags": [
        "deutsch",
        "silbenlesen",
        "silben",
        "lesen"
      ],
      "quickAreas": [
        "Silbenlesen"
      ],
      "istStand": "_ liest Silben noch unsicher und benötigt Unterstützung beim Zusammenschleifen.",
      "ziele": [
        "_ liest einfache Silben zunehmend sicher.",
        "_ nutzt Silben als Lesehilfe."
      ],
      "massnahmen": [
        "_ übt mit Silbenteppichen, Silbenkarten, Blitzlesen und wiederholtem Lesen bekannter Silben.",
        "Silben werden farblich oder mit Bögen markiert."
      ],
      "evaluation": [
        "Die Entwicklung wird durch kurze Silbenleseproben und Beobachtung beim Lesen überprüft."
      ]
    },
    {
      "id": "D08",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Genaues Lesen statt Raten",
      "tags": [
        "deutsch",
        "genaues",
        "lesen",
        "statt",
        "raten"
      ],
      "quickAreas": [
        "Genaues Lesen statt Raten"
      ],
      "istStand": "_ neigt beim Lesen dazu, Wörter zu erraten, statt sie genau zu erlesen.",
      "ziele": [
        "_ liest Wörter genauer, indem #er/sie# Laute und Silben bewusst beachtet."
      ],
      "massnahmen": [
        "_ erhält kurze, überschaubare Leseaufgaben mit bekannten Lauten und Silben.",
        "Lesefenster, Lesepfeil und gemeinsames lautierendes Lesen unterstützen die genaue Worterfassung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung des Leseverhaltens und kurze Leseproben überprüft."
      ]
    },
    {
      "id": "D09",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Lautgetreue Wörter lesen",
      "tags": [
        "deutsch",
        "lautgetreue",
        "woerter",
        "lesen",
        "laut",
        "schriftaufbau"
      ],
      "quickAreas": [
        "Lautgetreue Wörter lesen"
      ],
      "istStand": "_ liest lautgetreue Wörter noch langsam und unsicher.",
      "ziele": [
        "_ liest einfache lautgetreue Wörter zunehmend sicher und genauer."
      ],
      "massnahmen": [
        "_ übt regelmäßig mit lautgetreuen Wörtern, Silbenmarkierungen und wiederkehrenden Wortlisten.",
        "Bekannte Wörter werden wiederholt gelesen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch kurze Wortleseproben überprüft."
      ]
    },
    {
      "id": "D10",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Einfache Sätze lesen",
      "tags": [
        "deutsch",
        "einfache",
        "saetze",
        "lesen"
      ],
      "quickAreas": [
        "Einfache Sätze lesen"
      ],
      "istStand": "_ kann einzelne Wörter erlesen, benötigt jedoch Unterstützung beim Lesen und Verstehen einfacher Sätze.",
      "ziele": [
        "_ liest einfache Sätze zunehmend sicher und versteht deren Inhalt."
      ],
      "massnahmen": [
        "_ arbeitet mit kurzen Sätzen, Bild-Satz-Zuordnungen und wiederholtem Lesen.",
        "Satzlänge und Wortmaterial werden angepasst."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Satzleseproben und einfache Fragen zum Inhalt überprüft."
      ]
    },
    {
      "id": "D11",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Satz-Bild-Verständnis",
      "tags": [
        "deutsch",
        "satz",
        "bild",
        "verstaendnis",
        "textverstaendnis"
      ],
      "quickAreas": [
        "Satz-Bild-Verständnis"
      ],
      "istStand": "_ benötigt Unterstützung, um gelesene Sätze mit passenden Bildern oder Handlungen zu verbinden.",
      "ziele": [
        "_ ordnet einfache Sätze passenden Bildern oder Handlungen zunehmend sicher zu."
      ],
      "massnahmen": [
        "_ arbeitet mit Bild-Satz-Karten, Lese-Mal-Aufgaben und kurzen Zuordnungsübungen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Lese-Mal-Aufgaben und Satz-Bild-Zuordnungen überprüft."
      ]
    },
    {
      "id": "D12",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Kurze Texte erschließen",
      "tags": [
        "deutsch",
        "kurze",
        "texte",
        "erschliessen",
        "textverstaendnis",
        "schreiben"
      ],
      "quickAreas": [
        "Kurze Texte erschließen"
      ],
      "istStand": "_ liest kurze Texte mit Unterstützung und benötigt Hilfe, um Informationen zu entnehmen.",
      "ziele": [
        "_ entnimmt kurzen Texten zunehmend einfache Informationen."
      ],
      "massnahmen": [
        "_ arbeitet mit kurzen Texten, Lesefragen, Markierungen und gemeinsamer Sicherung des Inhalts."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Lesefragen, kurze Leseproben und mündliche Wiedergaben überprüft."
      ]
    },
    {
      "id": "D13",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Leseflüssigkeit",
      "tags": [
        "deutsch",
        "lesefluessigkeit",
        "lesen"
      ],
      "quickAreas": [
        "Leseflüssigkeit"
      ],
      "istStand": "_ liest noch stockend und benötigt viel Zeit, um Wörter und Sätze zu erfassen.",
      "ziele": [
        "_ liest bekannte Wörter, Sätze und kurze Texte zunehmend flüssiger."
      ],
      "massnahmen": [
        "Wiederholtes Lesen, Partnerlesen, Blitzlesen und kurze tägliche Lesezeiten werden eingesetzt."
      ],
      "evaluation": [
        "Die Entwicklung wird durch wiederholte Leseproben und Beobachtung der Leseflüssigkeit überprüft."
      ]
    },
    {
      "id": "D14",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Vorlesen",
      "tags": [
        "deutsch",
        "vorlesen",
        "lesen"
      ],
      "quickAreas": [
        "Vorlesen"
      ],
      "istStand": "_ liest vor anderen noch unsicher und benötigt eine geschützte Vorlesesituation.",
      "ziele": [
        "_ liest vorbereitete kurze Texte in vertrauten Situationen zunehmend sicher vor."
      ],
      "massnahmen": [
        "_ erhält kurze vorbereitete Lesetexte, Vorlesezeit in Kleingruppen und positive Rückmeldung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung beim vorbereiteten Vorlesen überprüft."
      ]
    },
    {
      "id": "D15",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Lautgetreues Schreiben",
      "tags": [
        "deutsch",
        "lautgetreues",
        "schreiben",
        "laut",
        "schriftaufbau",
        "rechtschreiben"
      ],
      "quickAreas": [
        "Lautgetreues Schreiben"
      ],
      "istStand": "_ verschriftet erste Wörter, lässt jedoch hörbare Laute aus oder ordnet Laute nicht sicher zu.",
      "ziele": [
        "_ schreibt einfache lautgetreue Wörter zunehmend vollständiger."
      ],
      "massnahmen": [
        "_ übt mit Bild-Wort-Karten, lautgetreuen Wörtern, Silbenbögen und gemeinsamen Kontrollphasen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Schreibproben und Vergleich ausgewählter Arbeitsproben überprüft."
      ]
    },
    {
      "id": "D16",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Skelettschreibung / Vokale sichern",
      "tags": [
        "deutsch",
        "skelettschreibung",
        "vokale",
        "sichern",
        "schreiben",
        "rechtschreiben"
      ],
      "quickAreas": [
        "Skelettschreibung / Vokale sichern"
      ],
      "istStand": "_ schreibt Wörter teilweise als Skelett und lässt Vokale oder andere hörbare Laute aus.",
      "ziele": [
        "_ hört und verschriftet Vokale in einfachen Wörtern zunehmend sicher."
      ],
      "massnahmen": [
        "Wörter werden deutlich gesprochen, geschwungen, in Silben gegliedert und gemeinsam abgehört.",
        "_ nutzt Silbenbögen und Lautkontrolle."
      ],
      "evaluation": [
        "Die Entwicklung wird durch kurze Schreibproben mit lautgetreuen Wörtern überprüft."
      ]
    },
    {
      "id": "D17",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Wörter vollständig schreiben",
      "tags": [
        "deutsch",
        "woerter",
        "vollstaendig",
        "schreiben",
        "rechtschreiben"
      ],
      "quickAreas": [
        "Wörter vollständig schreiben"
      ],
      "istStand": "_ benötigt Unterstützung, um Wörter vollständig und lautgetreu aufzuschreiben.",
      "ziele": [
        "_ schreibt einfache Wörter zunehmend vollständig und kontrolliert diese mit Hilfe."
      ],
      "massnahmen": [
        "_ nutzt eine Abhörstrategie, Silbenbögen, Anlauttabelle und gemeinsame Kontrollphasen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Schreibproben und kurze Wortdiktate überprüft."
      ]
    },
    {
      "id": "D18",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Abschreiben",
      "tags": [
        "deutsch",
        "abschreiben",
        "schreiben",
        "rechtschreiben"
      ],
      "quickAreas": [
        "Abschreiben"
      ],
      "istStand": "_ benötigt beim Abschreiben Unterstützung, um Vorlage, Zeile und Wortgrenzen sicher zu beachten.",
      "ziele": [
        "_ schreibt kurze Wörter und Sätze zunehmend genau ab."
      ],
      "massnahmen": [
        "_ erhält kurze Abschreibtexte, markierte Zeilen, Abdeckhilfen und eine einfache Abschreibstrategie."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Abschreibproben und Sichtung ausgewählter Hefteinträge überprüft."
      ]
    },
    {
      "id": "D19",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Schriftbild und Schreibsorgfalt im Deutschunterricht",
      "tags": [
        "deutsch",
        "schriftbild",
        "und",
        "schreibsorgfalt",
        "deutschunterricht",
        "schreiben",
        "rechtschreiben"
      ],
      "quickAreas": [
        "Schriftbild und Schreibsorgfalt im Deutschunterricht"
      ],
      "istStand": "_ schreibt im Deutschunterricht noch ungleichmäßig und benötigt Unterstützung bei Sorgfalt und Übersichtlichkeit.",
      "ziele": [
        "_ gestaltet Schreibaufgaben zunehmend lesbar, übersichtlich und sorgfältig."
      ],
      "massnahmen": [
        "_ erhält reduzierte Schreibmengen, klare Lineatur, kurze Schreibphasen und Rückmeldung zu ausgewählten Kriterien."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Vergleich ausgewählter Schreibproben überprüft."
      ]
    },
    {
      "id": "D20",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Einfache Sätze schreiben",
      "tags": [
        "deutsch",
        "einfache",
        "saetze",
        "schreiben",
        "rechtschreiben"
      ],
      "quickAreas": [
        "Einfache Sätze schreiben"
      ],
      "istStand": "_ schreibt einzelne Wörter, benötigt jedoch Unterstützung beim Bilden und Schreiben einfacher Sätze.",
      "ziele": [
        "_ schreibt einfache Sätze zunehmend verständlich und vollständig."
      ],
      "massnahmen": [
        "_ nutzt Satzanfänge, Bildimpulse, Wortkarten und gemeinsame Satzplanung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Schreibproben und kurze Satzbildungsaufgaben überprüft."
      ]
    },
    {
      "id": "D21",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Wortgrenzen und Satzgrenzen",
      "tags": [
        "deutsch",
        "wortgrenzen",
        "und",
        "satzgrenzen",
        "satz",
        "textverstaendnis",
        "wortschatz"
      ],
      "quickAreas": [
        "Wortgrenzen und Satzgrenzen"
      ],
      "istStand": "_ setzt Wortgrenzen oder Satzgrenzen noch nicht durchgängig sicher.",
      "ziele": [
        "_ beachtet Wortgrenzen und Satzgrenzen beim Schreiben zunehmend sicher."
      ],
      "massnahmen": [
        "Sätze werden gemeinsam gesprochen, geklatscht, gelegt und geschrieben.",
        "_ nutzt Satzstreifen, Wortkarten und Satzzeichenhilfen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Schreibproben und gemeinsame Textkontrollen überprüft."
      ]
    },
    {
      "id": "D22",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Grundwortschatz / Lernwörter",
      "tags": [
        "deutsch",
        "grundwortschatz",
        "lernwoerter",
        "wortschatz"
      ],
      "quickAreas": [
        "Grundwortschatz / Lernwörter"
      ],
      "istStand": "_ schreibt häufig geübte Wörter noch nicht sicher.",
      "ziele": [
        "_ sichert ausgewählte Lernwörter und nutzt diese zunehmend richtig."
      ],
      "massnahmen": [
        "_ übt wenige ausgewählte Wörter regelmäßig mit Abschreiben, Sortieren, Silbenmarkierung und kurzer Kontrolle."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Lernwortkontrollen und Sichtung der Schreibproben überprüft."
      ]
    },
    {
      "id": "D23",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Erste Rechtschreibstrategien",
      "tags": [
        "deutsch",
        "erste",
        "rechtschreibstrategien",
        "schreiben",
        "rechtschreiben"
      ],
      "quickAreas": [
        "Erste Rechtschreibstrategien"
      ],
      "istStand": "_ nutzt Rechtschreibstrategien wie Silben, Verlängern oder Ableiten noch nicht sicher.",
      "ziele": [
        "_ nutzt einfache Rechtschreibstrategien zunehmend bewusst."
      ],
      "massnahmen": [
        "Strategien werden an wenigen passenden Wörtern erklärt, markiert und wiederholt angewendet.",
        "_ erhält Merkkarten und gemeinsame Kontrollphasen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Schreibproben und Strategiegespräche überprüft."
      ]
    },
    {
      "id": "D24",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Aufgabenverständnis im Deutschunterricht",
      "tags": [
        "deutsch",
        "aufgabenverstaendnis",
        "deutschunterricht",
        "aufgabenbeginn"
      ],
      "quickAreas": [
        "Aufgabenverständnis im Deutschunterricht"
      ],
      "istStand": "_ benötigt im Deutschunterricht Unterstützung, um Arbeitsaufträge vollständig zu verstehen und umzusetzen.",
      "ziele": [
        "_ versteht kurze Arbeitsaufträge im Deutschunterricht zunehmend sicher."
      ],
      "massnahmen": [
        "Arbeitsaufträge werden kurz formuliert, visualisiert und bei Bedarf in Einzelschritte zerlegt.",
        "_ wiederholt den Auftrag oder zeigt den ersten Schritt."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Unterrichtsbeobachtung und Rückmeldungen zu begonnenen Aufgaben überprüft."
      ]
    },
    {
      "id": "D25",
      "bereich": "Deutsch",
      "rasterRow": "german",
      "rasterRowLabel": "Deutsch",
      "title": "Eigene Texte / Schreiben zu Bildern",
      "tags": [
        "deutsch",
        "eigene",
        "texte",
        "schreiben",
        "bildern",
        "textverstaendnis",
        "rechtschreiben"
      ],
      "quickAreas": [
        "Eigene Texte / Schreiben zu Bildern"
      ],
      "istStand": "_ benötigt Unterstützung, um eigene Ideen zu Bildern oder Erlebnissen in Wörter und Sätze zu übertragen.",
      "ziele": [
        "_ entwickelt zu Bildern oder Erlebnissen zunehmend eigene Wörter und kurze Sätze."
      ],
      "massnahmen": [
        "_ nutzt Bildimpulse, Wortkarten, Satzanfänge und gemeinsame mündliche Planung vor dem Schreiben."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Schreibproben und Vergleich eigener Texte überprüft.",
        "MATHEMATIK – 20 BAUSTEINE"
      ]
    },
    {
      "id": "M01",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Sortieren und Klassifizieren",
      "tags": [
        "mathematik",
        "sortieren",
        "und",
        "klassifizieren"
      ],
      "quickAreas": [
        "Sortieren und Klassifizieren"
      ],
      "istStand": "_ benötigt Unterstützung beim Sortieren und Ordnen nach Merkmalen wie Farbe, Form oder Größe.",
      "ziele": [
        "_ sortiert und ordnet Gegenstände nach vorgegebenen Merkmalen zunehmend sicher."
      ],
      "massnahmen": [
        "_ arbeitet mit Sortiermaterial, Legespielen und sprachlich begleiteten Ordnungsaufgaben."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung in handelnden Aufgaben überprüft."
      ]
    },
    {
      "id": "M02",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Muster und Reihen",
      "tags": [
        "mathematik",
        "muster",
        "und",
        "reihen"
      ],
      "quickAreas": [
        "Muster und Reihen"
      ],
      "istStand": "_ erkennt und setzt einfache Muster noch nicht durchgängig sicher fort.",
      "ziele": [
        "_ erkennt, beschreibt und setzt einfache Muster zunehmend sicher fort."
      ],
      "massnahmen": [
        "_ legt Muster mit Material nach, setzt Reihen fort und beschreibt die Regel."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Musteraufgaben und Beobachtung beim Legen überprüft."
      ]
    },
    {
      "id": "M03",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Raumbegriffe",
      "tags": [
        "mathematik",
        "raumbegriffe",
        "raumlage"
      ],
      "quickAreas": [
        "Raumbegriffe"
      ],
      "istStand": "_ verwendet Raumbegriffe wie oben, unten, vor, hinter, links und rechts noch unsicher.",
      "ziele": [
        "_ nutzt grundlegende Raumbegriffe zunehmend sicher."
      ],
      "massnahmen": [
        "_ übt Raumbegriffe handelnd, mit Bildern, Bewegungsspielen und Lageaufgaben."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung bei Raumlageaufgaben überprüft."
      ]
    },
    {
      "id": "M04",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Mengen vergleichen",
      "tags": [
        "mathematik",
        "mengen",
        "vergleichen",
        "zahlverstaendnis"
      ],
      "quickAreas": [
        "Mengen vergleichen"
      ],
      "istStand": "_ benötigt Unterstützung beim Vergleichen von Mengen.",
      "ziele": [
        "_ vergleicht Mengen nach mehr, weniger und gleich zunehmend sicher."
      ],
      "massnahmen": [
        "_ arbeitet mit Plättchen, Würfelbildern, Zuordnungsspielen und sprachlich begleiteten Vergleichsaufgaben."
      ],
      "evaluation": [
        "Die Entwicklung wird durch kurze Mengenvergleichsaufgaben überprüft."
      ]
    },
    {
      "id": "M05",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Simultane Mengenerfassung",
      "tags": [
        "mathematik",
        "simultane",
        "mengenerfassung",
        "mengen",
        "zahlverstaendnis"
      ],
      "quickAreas": [
        "Simultane Mengenerfassung"
      ],
      "istStand": "_ zählt kleine Mengen häufig einzeln ab und erkennt strukturierte Mengen noch nicht sicher.",
      "ziele": [
        "_ erfasst kleine strukturierte Mengen zunehmend auf einen Blick."
      ],
      "massnahmen": [
        "_ übt mit Würfelbildern, Fingerbildern, Zehnerfeld und Blitzblick-Aufgaben."
      ],
      "evaluation": [
        "Die Entwicklung wird durch kurze Blitzblick-Aufgaben überprüft."
      ]
    },
    {
      "id": "M06",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Zahl-Menge-Zuordnung",
      "tags": [
        "mathematik",
        "zahl",
        "menge",
        "zuordnung",
        "zahlverstaendnis",
        "mengen"
      ],
      "quickAreas": [
        "Zahl-Menge-Zuordnung"
      ],
      "istStand": "_ ordnet Zahlen und Mengen noch nicht durchgängig sicher einander zu.",
      "ziele": [
        "_ ordnet Mengen und Zahlen im bekannten Zahlenraum zunehmend sicher zu."
      ],
      "massnahmen": [
        "_ arbeitet mit Zahlenkarten, Plättchen, Zehnerfeld und Zuordnungsspielen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Zahl-Menge-Aufgaben überprüft."
      ]
    },
    {
      "id": "M07",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Zählprinzip / Eins-zu-eins-Zuordnung",
      "tags": [
        "mathematik",
        "zaehlprinzip",
        "eins",
        "zuordnung"
      ],
      "quickAreas": [
        "Zählprinzip / Eins-zu-eins-Zuordnung"
      ],
      "istStand": "_ verliert beim Abzählen teilweise die Eins-zu-eins-Zuordnung.",
      "ziele": [
        "_ zählt Mengen zunehmend sicher und ordnet jedem Gegenstand genau ein Zahlwort zu."
      ],
      "massnahmen": [
        "_ übt mit konkretem Material, Abdeckstrategien und langsamer sprachlicher Begleitung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung beim Abzählen überprüft."
      ]
    },
    {
      "id": "M08",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Zahlwortreihe",
      "tags": [
        "mathematik",
        "zahlwortreihe",
        "wortschatz",
        "zahlverstaendnis"
      ],
      "quickAreas": [
        "Zahlwortreihe"
      ],
      "istStand": "_ benötigt Unterstützung beim sicheren Vorwärts- und Rückwärtszählen.",
      "ziele": [
        "_ festigt die Zahlwortreihe und zählt im bekannten Zahlenraum zunehmend sicher."
      ],
      "massnahmen": [
        "_ übt tägliche kurze Zählroutinen, Zahlenspiele und Zahlenstrahlübungen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch kurze Zählproben überprüft."
      ]
    },
    {
      "id": "M09",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Ziffern erkennen und schreiben",
      "tags": [
        "mathematik",
        "ziffern",
        "erkennen",
        "und",
        "schreiben",
        "rechtschreiben",
        "zahlverstaendnis"
      ],
      "quickAreas": [
        "Ziffern erkennen und schreiben"
      ],
      "istStand": "_ erkennt oder schreibt Ziffern noch nicht durchgängig sicher.",
      "ziele": [
        "_ erkennt und schreibt Ziffern im bekannten Zahlenraum zunehmend sicher und formklar."
      ],
      "massnahmen": [
        "_ übt mit Zahlenkarten, Nachspuraufgaben, Zahl-Menge-Zuordnung und kurzen Schreibübungen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Ziffernchecks und Sichtung der Arbeitsproben überprüft."
      ]
    },
    {
      "id": "M10",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Zahlen ordnen / Vorgänger und Nachfolger",
      "tags": [
        "mathematik",
        "zahlen",
        "ordnen",
        "vorgaenger",
        "und",
        "nachfolger",
        "zahlverstaendnis"
      ],
      "quickAreas": [
        "Zahlen ordnen / Vorgänger und Nachfolger"
      ],
      "istStand": "_ benötigt Unterstützung beim Ordnen von Zahlen und beim Bestimmen von Vorgänger und Nachfolger.",
      "ziele": [
        "_ ordnet Zahlen zunehmend sicher und benennt Vorgänger und Nachfolger."
      ],
      "massnahmen": [
        "_ arbeitet mit Zahlenkarten, Zahlenstrahl, Zahlentreppen und Nachbarzahlübungen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch kurze Ordnungsaufgaben überprüft."
      ]
    },
    {
      "id": "M11",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Orientierung am Zahlenstrahl",
      "tags": [
        "mathematik",
        "orientierung",
        "zahlenstrahl",
        "zahlverstaendnis"
      ],
      "quickAreas": [
        "Orientierung am Zahlenstrahl"
      ],
      "istStand": "_ orientiert sich am Zahlenstrahl noch unsicher.",
      "ziele": [
        "_ findet, ordnet und vergleicht Zahlen am Zahlenstrahl zunehmend sicher."
      ],
      "massnahmen": [
        "_ übt mit Boden-Zahlenstrahl, Zahlenkarten und markierten Stützpunkten."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Zahlenstrahlaufgaben überprüft."
      ]
    },
    {
      "id": "M12",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Zahlzerlegung bis 5 / bis 10",
      "tags": [
        "mathematik",
        "zahlzerlegung",
        "bis",
        "zahlverstaendnis"
      ],
      "quickAreas": [
        "Zahlzerlegung bis 5 / bis 10"
      ],
      "istStand": "_ benötigt noch Übung beim Zerlegen von Zahlen.",
      "ziele": [
        "_ zerlegt Zahlen im bekannten Zahlenraum zunehmend sicher."
      ],
      "massnahmen": [
        "_ übt mit Zerlegungshäusern, Schüttelboxen, Wendeplättchen und Zerlegungskarten."
      ],
      "evaluation": [
        "Die Entwicklung wird durch kurze Zerlegungsaufgaben überprüft."
      ]
    },
    {
      "id": "M13",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Ergänzen bis 10",
      "tags": [
        "mathematik",
        "ergaenzen",
        "bis"
      ],
      "quickAreas": [
        "Ergänzen bis 10"
      ],
      "istStand": "_ ergänzt Zahlen bis 10 noch nicht sicher.",
      "ziele": [
        "_ ergänzt Mengen und Zahlen bis 10 zunehmend sicher."
      ],
      "massnahmen": [
        "_ übt mit Zehnerfeld, Plättchen, Partnerzahlen und kurzen Ergänzungsaufgaben."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Ergänzungsaufgaben und Rechenproben überprüft."
      ]
    },
    {
      "id": "M14",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Addition handelnd verstehen",
      "tags": [
        "mathematik",
        "addition",
        "handelnd",
        "verstehen",
        "rechnen"
      ],
      "quickAreas": [
        "Addition handelnd verstehen"
      ],
      "istStand": "_ benötigt Anschauungsmaterial, um Plusaufgaben als Dazukommen zu verstehen.",
      "ziele": [
        "_ versteht Addition als Dazukommen und löst einfache Plusaufgaben zunehmend sicher."
      ],
      "massnahmen": [
        "_ arbeitet mit Rechengeschichten, Materialhandlungen, Plättchen und Zehnerfeld."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung beim handelnden Rechnen überprüft."
      ]
    },
    {
      "id": "M15",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Subtraktion handelnd verstehen",
      "tags": [
        "mathematik",
        "subtraktion",
        "handelnd",
        "verstehen",
        "rechnen"
      ],
      "quickAreas": [
        "Subtraktion handelnd verstehen"
      ],
      "istStand": "_ benötigt Anschauungsmaterial, um Minusaufgaben als Wegnehmen zu verstehen.",
      "ziele": [
        "_ versteht Subtraktion als Wegnehmen und löst einfache Minusaufgaben zunehmend sicher."
      ],
      "massnahmen": [
        "_ arbeitet mit Rechengeschichten, Materialhandlungen und bildlichen Darstellungen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung beim handelnden Rechnen überprüft."
      ]
    },
    {
      "id": "M16",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Rechenstrategien bis 20",
      "tags": [
        "mathematik",
        "rechenstrategien",
        "bis",
        "rechnen"
      ],
      "quickAreas": [
        "Rechenstrategien bis 20"
      ],
      "istStand": "_ löst Aufgaben im Zahlenraum bis 20 noch unsicher und nutzt Rechenstrategien nicht zuverlässig.",
      "ziele": [
        "_ nutzt einfache Rechenstrategien im Zahlenraum bis 20 zunehmend sicher."
      ],
      "massnahmen": [
        "_ übt mit Zehnerfeld, Zahlenstrahl, Zerlegungskarten und wiederkehrenden Aufgabenformaten."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Rechenproben und Beobachtung der Strategieanwendung überprüft."
      ]
    },
    {
      "id": "M17",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Zählendes Rechnen reduzieren",
      "tags": [
        "mathematik",
        "zaehlendes",
        "rechnen",
        "reduzieren"
      ],
      "quickAreas": [
        "Zählendes Rechnen reduzieren"
      ],
      "istStand": "_ rechnet noch überwiegend zählend und benötigt Unterstützung beim Nutzen von Zahlbeziehungen.",
      "ziele": [
        "_ nutzt Zahlzerlegungen, Nachbaraufgaben und Ergänzungen zunehmend als Rechenhilfe."
      ],
      "massnahmen": [
        "Rechenwege werden versprachlicht und mit Material veranschaulicht.",
        "_ übt wiederkehrende Aufgabenformate zur Automatisierung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Rechenproben und Strategiegespräche überprüft."
      ]
    },
    {
      "id": "M18",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Sachaufgaben verstehen",
      "tags": [
        "mathematik",
        "sachaufgaben",
        "verstehen",
        "sachrechnen",
        "aufgabenbeginn",
        "aufgabenverstaendnis"
      ],
      "quickAreas": [
        "Sachaufgaben verstehen"
      ],
      "istStand": "_ benötigt Unterstützung, um einfache Sachaufgaben zu verstehen und passende Rechenhandlungen abzuleiten.",
      "ziele": [
        "_ erkennt in einfachen Sachsituationen zunehmend passende Rechenhandlungen."
      ],
      "massnahmen": [
        "Sachaufgaben werden handelnd, bildlich und sprachlich entlastet.",
        "_ markiert wichtige Angaben und erzählt die Situation nach."
      ],
      "evaluation": [
        "Die Entwicklung wird durch kurze Sachaufgaben und mündliche Erklärungen überprüft."
      ]
    },
    {
      "id": "M19",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Aufgabenverständnis Mathematik",
      "tags": [
        "mathematik",
        "aufgabenverstaendnis",
        "aufgabenbeginn"
      ],
      "quickAreas": [
        "Aufgabenverständnis Mathematik"
      ],
      "istStand": "_ benötigt Unterstützung, um mathematische Arbeitsaufträge sicher zu verstehen.",
      "ziele": [
        "_ versteht mathematische Arbeitsaufträge zunehmend sicher und setzt sie in passende Handlungsschritte um."
      ],
      "massnahmen": [
        "Aufgaben werden kurz erklärt, visualisiert und mit Beispielaufgaben vorbereitet.",
        "_ wiederholt den Auftrag oder zeigt den ersten Schritt."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Unterrichtsbeobachtung und Aufgabenproben überprüft."
      ]
    },
    {
      "id": "M20",
      "bereich": "Mathematik",
      "rasterRow": "math",
      "rasterRowLabel": "Mathematik",
      "title": "Umgang mit mathematischem Material",
      "tags": [
        "mathematik",
        "umgang",
        "mit",
        "mathematischem",
        "material"
      ],
      "quickAreas": [
        "Umgang mit mathematischem Material"
      ],
      "istStand": "_ nutzt mathematisches Material noch nicht durchgängig zielgerichtet.",
      "ziele": [
        "_ setzt Anschauungsmaterial zunehmend passend zur Lösung mathematischer Aufgaben ein."
      ],
      "massnahmen": [
        "Der Umgang mit Material wird eingeführt, modelliert und regelmäßig geübt.",
        "_ benennt, was #er/sie# mit dem Material darstellt."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung beim Materialeinsatz überprüft.",
        "LERN- UND LEISTUNGSVERHALTEN – 18 BAUSTEINE"
      ]
    },
    {
      "id": "L01",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Orientierung im Schulalltag",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "orientierung",
        "schulalltag"
      ],
      "quickAreas": [
        "Orientierung im Schulalltag"
      ],
      "istStand": "_ benötigt Unterstützung, um sich in Abläufen, Räumen oder Unterrichtsphasen sicher zu orientieren.",
      "ziele": [
        "_ orientiert sich im Schulalltag zunehmend sicherer."
      ],
      "massnahmen": [
        "Tagesplan, feste Rituale, visuelle Hinweise und kurze Orientierungsgespräche werden eingesetzt."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung im Schulalltag überprüft."
      ]
    },
    {
      "id": "L02",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Material bereitlegen",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "material",
        "bereitlegen"
      ],
      "quickAreas": [
        "Material bereitlegen"
      ],
      "istStand": "_ benötigt Unterstützung, um benötigte Materialien vollständig bereitzulegen.",
      "ziele": [
        "_ legt benötigte Materialien mit Hilfe eines festen Ablaufs zunehmend selbstständig bereit."
      ],
      "massnahmen": [
        "_ nutzt eine Material-Checkliste, feste Abläufe und kurze Kontrollen zu Stundenbeginn."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung und Materialchecks überprüft."
      ]
    },
    {
      "id": "L03",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Aufgabenbeginn",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "aufgabenbeginn",
        "aufgabenverstaendnis"
      ],
      "quickAreas": [
        "Aufgabenbeginn"
      ],
      "istStand": "_ benötigt noch Unterstützung, um Aufgaben selbstständig zu beginnen.",
      "ziele": [
        "_ beginnt eine überschaubare Aufgabe nach kurzer Orientierung zunehmend selbstständig."
      ],
      "massnahmen": [
        "_ nutzt eine Startkarte, klare Arbeitsaufträge und bei Bedarf eine kurze Startbegleitung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Unterrichtsbeobachtung und kurze Notizen zum Arbeitsbeginn überprüft."
      ]
    },
    {
      "id": "L04",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Arbeitsausdauer",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "arbeitsausdauer",
        "ausdauer",
        "konzentration"
      ],
      "quickAreas": [
        "Arbeitsausdauer"
      ],
      "istStand": "_ bleibt nur für kurze Zeit bei einer Aufgabe und benötigt Erinnerung, um weiterzuarbeiten.",
      "ziele": [
        "_ arbeitet für eine vereinbarte Zeit bei einer Aufgabe weiter."
      ],
      "massnahmen": [
        "_ nutzt Timer, Teilschritte und Rückmeldungen nach abgeschlossenen Arbeitsphasen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung der Arbeitsphasen überprüft."
      ]
    },
    {
      "id": "L05",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Konzentration in Stillarbeitsphasen",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "konzentration",
        "stillarbeitsphasen"
      ],
      "quickAreas": [
        "Konzentration in Stillarbeitsphasen"
      ],
      "istStand": "_ lässt sich in Stillarbeitsphasen leicht ablenken.",
      "ziele": [
        "_ arbeitet in Stillarbeitsphasen zunehmend konzentrierter an der vereinbarten Aufgabe."
      ],
      "massnahmen": [
        "_ erhält einen klar strukturierten Arbeitsplatz, kurze Aufgabenabschnitte und bei Bedarf reduzierte Ablenkung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Unterrichtsbeobachtung und Sichtung erledigter Aufgaben überprüft."
      ]
    },
    {
      "id": "L06",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Zuhören in Unterrichtsphasen",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "zuhoeren",
        "unterrichtsphasen"
      ],
      "quickAreas": [
        "Zuhören in Unterrichtsphasen"
      ],
      "istStand": "_ folgt Erklärungen im Unterricht nicht durchgängig aufmerksam.",
      "ziele": [
        "_ hört in kurzen Unterrichtsphasen zunehmend aufmerksam zu und kann zentrale Arbeitsaufträge wiedergeben."
      ],
      "massnahmen": [
        "Erklärungen werden kurz gehalten, visualisiert und durch Rückfragen gesichert."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung und kurze Rückfragen überprüft."
      ]
    },
    {
      "id": "L07",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Arbeitstempo",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "arbeitstempo"
      ],
      "quickAreas": [
        "Arbeitstempo"
      ],
      "istStand": "_ arbeitet langsam und beendet Aufgaben häufig nicht in der vorgesehenen Zeit.",
      "ziele": [
        "_ bearbeitet überschaubare Aufgaben in angemessener Zeit und beendet begonnene Aufgaben häufiger vollständig."
      ],
      "massnahmen": [
        "Der Aufgabenumfang wird angepasst. _ erhält klare Zielvorgaben, Teilschritte und Rückmeldung zum Arbeitsstand."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Sichtung ausgewählter Arbeitsergebnisse überprüft."
      ]
    },
    {
      "id": "L08",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Sorgfalt",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "sorgfalt"
      ],
      "quickAreas": [
        "Sorgfalt"
      ],
      "istStand": "_ benötigt Unterstützung, um Aufgaben sorgfältig und übersichtlich zu bearbeiten.",
      "ziele": [
        "_ bearbeitet ausgewählte Aufgaben zunehmend sorgfältig und kontrolliert."
      ],
      "massnahmen": [
        "Sorgfaltskriterien werden sichtbar gemacht. _ kontrolliert mit Hilfe wenige vereinbarte Punkte."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Vergleich ausgewählter Arbeitsproben überprüft."
      ]
    },
    {
      "id": "L09",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Aufgaben beenden",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "aufgaben",
        "beenden",
        "aufgabenbeginn",
        "aufgabenverstaendnis"
      ],
      "quickAreas": [
        "Aufgaben beenden"
      ],
      "istStand": "_ beginnt Aufgaben, führt sie jedoch häufig nicht vollständig zu Ende.",
      "ziele": [
        "_ beendet begonnene überschaubare Aufgaben zunehmend vollständig."
      ],
      "massnahmen": [
        "Aufgaben werden in Teilschritte gegliedert. Fertigstellen wird sichtbar markiert und rückgemeldet."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Sichtung erledigter Aufgaben überprüft."
      ]
    },
    {
      "id": "L10",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Selbstständigkeit",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "selbststaendigkeit",
        "selbstwahrnehmung"
      ],
      "quickAreas": [
        "Selbstständigkeit"
      ],
      "istStand": "_ benötigt häufig direkte Unterstützung, um Arbeitsschritte umzusetzen.",
      "ziele": [
        "_ setzt bekannte Arbeitsschritte zunehmend selbstständig um."
      ],
      "massnahmen": [
        "_ nutzt Ablaufkarten, Beispielaufgaben und kurze Erinnerungshilfen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Unterrichtsbeobachtung überprüft."
      ]
    },
    {
      "id": "L11",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Hilfe annehmen",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "hilfe",
        "annehmen"
      ],
      "quickAreas": [
        "Hilfe annehmen"
      ],
      "istStand": "_ nutzt angebotene Hilfen noch nicht durchgängig passend.",
      "ziele": [
        "_ nimmt angebotene Hilfen zunehmend an und setzt Hinweise um."
      ],
      "massnahmen": [
        "Hilfen werden kurz, konkret und überschaubar angeboten.",
        "_ erhält positive Rückmeldung für das Nutzen von Unterstützung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung und Rückmeldung im Team überprüft."
      ]
    },
    {
      "id": "L12",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Gezielt nachfragen",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "gezielt",
        "nachfragen"
      ],
      "quickAreas": [
        "Gezielt nachfragen"
      ],
      "istStand": "_ fragt bei Unsicherheiten noch nicht gezielt nach.",
      "ziele": [
        "_ fragt bei Unklarheiten zunehmend passend nach."
      ],
      "massnahmen": [
        "_ nutzt eine Hilfekarte, Nachfragesätze und feste Routinen zum Hilfeholen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung im Unterricht überprüft."
      ]
    },
    {
      "id": "L13",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Korrekturen umsetzen",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "korrekturen",
        "umsetzen",
        "korrektur"
      ],
      "quickAreas": [
        "Korrekturen umsetzen"
      ],
      "istStand": "_ benötigt Unterstützung, um Rückmeldungen anzunehmen und Aufgaben zu überarbeiten.",
      "ziele": [
        "_ setzt ausgewählte Korrekturen zunehmend um."
      ],
      "massnahmen": [
        "Korrekturen werden überschaubar markiert. _ erhält konkrete Hinweise und kurze Überarbeitungsphasen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Vergleich von Erst- und Überarbeitung überprüft."
      ]
    },
    {
      "id": "L14",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Motivation / Anstrengungsbereitschaft",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "motivation",
        "anstrengungsbereitschaft"
      ],
      "quickAreas": [
        "Motivation / Anstrengungsbereitschaft"
      ],
      "istStand": "_ benötigt Ermutigung, um sich auch auf schwierige Aufgaben einzulassen.",
      "ziele": [
        "_ zeigt bei überschaubaren Anforderungen zunehmend Anstrengungsbereitschaft."
      ],
      "massnahmen": [
        "Aufgaben werden erreichbar gestaltet. Fortschritte werden konkret rückgemeldet."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung in Anforderungssituationen überprüft."
      ]
    },
    {
      "id": "L15",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Fehlzeiten / Inhalte nachholen",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "fehlzeiten",
        "inhalte",
        "nachholen"
      ],
      "quickAreas": [
        "Fehlzeiten / Inhalte nachholen"
      ],
      "istStand": "_ hat durch Fehlzeiten oder Unterbrechungen Lerninhalte nicht vollständig sichern können.",
      "ziele": [
        "_ holt ausgewählte grundlegende Inhalte im Rahmen der Möglichkeiten schrittweise nach."
      ],
      "massnahmen": [
        "Wichtige Inhalte werden reduziert, priorisiert und mit vertrauten Aufgabenformaten wiederholt."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Lernproben und Sichtung nachgeholter Aufgaben überprüft."
      ]
    },
    {
      "id": "L16",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Arbeitsplanung in Teilschritten",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "arbeitsplanung",
        "teilschritten",
        "handlungsplanung"
      ],
      "quickAreas": [
        "Arbeitsplanung in Teilschritten"
      ],
      "istStand": "_ benötigt Unterstützung, um Aufgaben in sinnvolle Teilschritte zu gliedern.",
      "ziele": [
        "_ plant überschaubare Aufgaben zunehmend in einzelnen Schritten."
      ],
      "massnahmen": [
        "_ nutzt Schritt-für-Schritt-Karten, Markierungen und kurze Planungsgespräche."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung bei mehrschrittigen Aufgaben überprüft."
      ]
    },
    {
      "id": "L17",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Häusliches Üben / Hausaufgaben",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "haeusliches",
        "ueben",
        "hausaufgaben",
        "aufgabenbeginn",
        "aufgabenverstaendnis"
      ],
      "quickAreas": [
        "Häusliches Üben / Hausaufgaben"
      ],
      "istStand": "_ benötigt Unterstützung, um häusliche Übungen oder Hausaufgaben regelmäßig und passend zu bearbeiten.",
      "ziele": [
        "_ bearbeitet ausgewählte häusliche Übungen regelmäßiger und in angemessenem Umfang."
      ],
      "massnahmen": [
        "Aufgaben werden reduziert, klar markiert und mit Eltern/Sorgeberechtigten abgestimmt."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Sichtung der Aufgaben und Rückmeldung der Eltern überprüft."
      ]
    },
    {
      "id": "L18",
      "bereich": "Lern- und Leistungsverhalten",
      "rasterRow": "learning",
      "rasterRowLabel": "Lern- und Leistungsverhalten",
      "title": "Umgang mit differenziertem Material",
      "tags": [
        "lernen",
        "arbeitsverhalten",
        "umgang",
        "mit",
        "differenziertem",
        "material"
      ],
      "quickAreas": [
        "Umgang mit differenziertem Material"
      ],
      "istStand": "_ benötigt Unterstützung, um differenziertes Material anzunehmen und zielgerichtet zu bearbeiten.",
      "ziele": [
        "_ nutzt angepasstes Material zunehmend selbstverständlicher und arbeitet daran weiter."
      ],
      "massnahmen": [
        "Differenziertes Material wird positiv eingeführt und als passende Lernhilfe genutzt."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung und Sichtung der Arbeitsergebnisse überprüft.",
        "EMOTIONALITÄT / SOZIALVERHALTEN – 18 BAUSTEINE"
      ]
    },
    {
      "id": "E01",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Selbstsicherheit / Zutrauen",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "selbstsicherheit",
        "zutrauen",
        "selbststaendigkeit",
        "selbstwahrnehmung"
      ],
      "quickAreas": [
        "Selbstsicherheit / Zutrauen"
      ],
      "istStand": "_ wirkt in Anforderungssituationen unsicher und benötigt Ermutigung.",
      "ziele": [
        "_ stärkt das Zutrauen in die eigenen Fähigkeiten."
      ],
      "massnahmen": [
        "_ erhält erreichbare Aufgaben, positive Rückmeldungen und geschützte Beteiligungsmöglichkeiten."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Unterrichtsbeobachtung überprüft."
      ]
    },
    {
      "id": "E02",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Positive Selbstwahrnehmung",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "positive",
        "selbstwahrnehmung",
        "selbststaendigkeit"
      ],
      "quickAreas": [
        "Positive Selbstwahrnehmung"
      ],
      "istStand": "_ nimmt eigene Stärken noch wenig wahr.",
      "ziele": [
        "_ benennt eigene Stärken und gelungene Lernschritte zunehmend sicher."
      ],
      "massnahmen": [
        "Erfolge werden sichtbar gemacht. _ erhält kurze Reflexionsimpulse zu gelungenen Aufgaben."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Reflexionsgespräche und Beobachtung überprüft."
      ]
    },
    {
      "id": "E03",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Mündliche Beteiligung / Mut",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "muendliche",
        "beteiligung",
        "mut"
      ],
      "quickAreas": [
        "Mündliche Beteiligung / Mut"
      ],
      "istStand": "_ beteiligt sich selten mündlich oder nur in vertrauten Situationen.",
      "ziele": [
        "_ beteiligt sich in vereinbarten Situationen zunehmend mit kurzen Beiträgen."
      ],
      "massnahmen": [
        "_ erhält vorbereitete Satzanfänge, Partneraustausch und positive Rückmeldung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung der mündlichen Beteiligung überprüft."
      ]
    },
    {
      "id": "E04",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Umgang mit Lob und Rückmeldung",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "umgang",
        "mit",
        "lob",
        "und",
        "rueckmeldung"
      ],
      "quickAreas": [
        "Umgang mit Lob und Rückmeldung"
      ],
      "istStand": "_ benötigt Unterstützung, um Lob, Rückmeldung oder Korrektur angemessen anzunehmen.",
      "ziele": [
        "_ nimmt Rückmeldungen zunehmend angemessen an."
      ],
      "massnahmen": [
        "Rückmeldungen werden kurz, konkret und wertschätzend formuliert."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung in Rückmeldesituationen überprüft."
      ]
    },
    {
      "id": "E05",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Impulssteuerung",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "impulssteuerung",
        "selbstkontrolle"
      ],
      "quickAreas": [
        "Impulssteuerung"
      ],
      "istStand": "_ benötigt Unterstützung, um eigene Impulse zu steuern.",
      "ziele": [
        "_ steuert Impulse in wiederkehrenden Situationen zunehmend besser."
      ],
      "massnahmen": [
        "_ nutzt Stoppsignale, kurze Erinnerungen und klare Regeln."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Unterrichtsbeobachtung und kurze Verhaltensnotizen überprüft."
      ]
    },
    {
      "id": "E06",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Abwarten",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "abwarten"
      ],
      "quickAreas": [
        "Abwarten"
      ],
      "istStand": "_ hat Schwierigkeiten, abzuwarten oder an der Reihe zu bleiben.",
      "ziele": [
        "_ wartet in vereinbarten Situationen zunehmend ab."
      ],
      "massnahmen": [
        "Wartezeiten werden angekündigt, visualisiert und positiv rückgemeldet."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung in Gesprächs- und Spielsituationen überprüft."
      ]
    },
    {
      "id": "E07",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Gesprächsregeln",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "gespraechsregeln",
        "regeln",
        "gespraech"
      ],
      "quickAreas": [
        "Gesprächsregeln"
      ],
      "istStand": "_ achtet bei eigenen Beiträgen noch nicht durchgängig auf Gesprächsregeln.",
      "ziele": [
        "_ hält Gesprächsregeln zunehmend ein und bringt themenbezogene Beiträge ein."
      ],
      "massnahmen": [
        "Gesprächsregeln werden visualisiert. _ nutzt Meldeketten, Satzstarter und kurze Rückmeldungen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung in Unterrichtsgesprächen überprüft."
      ]
    },
    {
      "id": "E08",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Regelverhalten",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "regelverhalten",
        "regeln"
      ],
      "quickAreas": [
        "Regelverhalten"
      ],
      "istStand": "_ benötigt Unterstützung, um Klassen- und Schulregeln einzuhalten.",
      "ziele": [
        "_ hält vereinbarte Regeln in bekannten Situationen zunehmend sicher ein."
      ],
      "massnahmen": [
        "Regeln werden klar visualisiert, eingeübt und bei Gelingen positiv rückgemeldet."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung im Unterricht und in Pausen überprüft."
      ]
    },
    {
      "id": "E09",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Frustrationstoleranz",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "frustrationstoleranz",
        "frustration",
        "regulation"
      ],
      "quickAreas": [
        "Frustrationstoleranz"
      ],
      "istStand": "_ reagiert bei Fehlern, Misserfolg oder Veränderung schnell verunsichert oder angespannt.",
      "ziele": [
        "_ entwickelt zunehmend Strategien zum Umgang mit schwierigen Aufgaben und Fehlern."
      ],
      "massnahmen": [
        "_ erhält überschaubare Teilschritte, Ermutigung und vereinbarte Hilfestrategien."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung in Anforderungssituationen überprüft."
      ]
    },
    {
      "id": "E10",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Fehlerkultur",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "fehlerkultur"
      ],
      "quickAreas": [
        "Fehlerkultur"
      ],
      "istStand": "_ vermeidet Aufgaben oder reagiert unsicher, wenn Fehler auftreten.",
      "ziele": [
        "_ erlebt Fehler zunehmend als Teil des Lernens und arbeitet nach Rückmeldung weiter."
      ],
      "massnahmen": [
        "Fehler werden entlastend besprochen. _ erhält konkrete nächste Schritte."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung beim Überarbeiten überprüft."
      ]
    },
    {
      "id": "E11",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Konfliktklärung",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "konfliktklaerung",
        "konflikt"
      ],
      "quickAreas": [
        "Konfliktklärung"
      ],
      "istStand": "_ benötigt Unterstützung, um Konflikte angemessen zu klären.",
      "ziele": [
        "_ nutzt mit Unterstützung einfache Strategien zur Konfliktklärung."
      ],
      "massnahmen": [
        "Konflikte werden zeitnah begleitet. _ nutzt Gesprächsstruktur, Bildkarten oder Satzmuster."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Pausenbeobachtung und Konfliktprotokolle überprüft."
      ]
    },
    {
      "id": "E12",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Eigene Anteile reflektieren",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "eigene",
        "anteile",
        "reflektieren"
      ],
      "quickAreas": [
        "Eigene Anteile reflektieren"
      ],
      "istStand": "_ benötigt Unterstützung, um eigene Anteile an Konflikten oder Situationen zu erkennen.",
      "ziele": [
        "_ reflektiert eigene Anteile mit Unterstützung zunehmend angemessen."
      ],
      "massnahmen": [
        "Kurze Reflexionsgespräche, einfache Leitfragen und Visualisierungen werden genutzt."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Gesprächsnotizen und Beobachtung überprüft."
      ]
    },
    {
      "id": "E13",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Bedürfnisse angemessen äußern",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "beduerfnisse",
        "angemessen",
        "aeussern"
      ],
      "quickAreas": [
        "Bedürfnisse angemessen äußern"
      ],
      "istStand": "_ äußert Bedürfnisse oder Grenzen noch nicht immer angemessen.",
      "ziele": [
        "_ benennt eigene Bedürfnisse zunehmend klar und angemessen."
      ],
      "massnahmen": [
        "_ übt passende Satzmuster, Signalkarten und ruhige Gesprächssituationen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung in Alltagssituationen überprüft."
      ]
    },
    {
      "id": "E14",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Kontaktaufnahme",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "kontaktaufnahme",
        "kontakt"
      ],
      "quickAreas": [
        "Kontaktaufnahme"
      ],
      "istStand": "_ benötigt Unterstützung beim angemessenen Kontaktaufbau zu anderen Kindern.",
      "ziele": [
        "_ nimmt zunehmend passend Kontakt zu anderen Kindern auf."
      ],
      "massnahmen": [
        "_ erhält strukturierte Partnerangebote, Verabredungshilfen und Begleitung in Spielsituationen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Pausenbeobachtung überprüft."
      ]
    },
    {
      "id": "E15",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Pausen- und Spielverhalten",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "pausen",
        "und",
        "spielverhalten"
      ],
      "quickAreas": [
        "Pausen- und Spielverhalten"
      ],
      "istStand": "_ benötigt in Pausen oder Spielsituationen Unterstützung, um angemessen mit anderen Kindern zu handeln.",
      "ziele": [
        "_ beteiligt sich zunehmend an positiven Pausen- oder Spielsituationen."
      ],
      "massnahmen": [
        "Pausen werden vorbereitet. _ erhält Spielideen, feste Absprachen oder begleitete Verabredungen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Pausenbeobachtung und Teamrückmeldung überprüft."
      ]
    },
    {
      "id": "E16",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Kooperation / Partnerarbeit",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "kooperation",
        "partnerarbeit"
      ],
      "quickAreas": [
        "Kooperation / Partnerarbeit"
      ],
      "istStand": "_ benötigt Unterstützung, um mit Partnerkindern oder in Gruppen konstruktiv zu arbeiten.",
      "ziele": [
        "_ arbeitet in überschaubaren Partner- oder Gruppensituationen zunehmend kooperativ mit."
      ],
      "massnahmen": [
        "Rollen, Aufgaben und Gesprächsregeln werden klar festgelegt."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung in kooperativen Arbeitsphasen überprüft."
      ]
    },
    {
      "id": "E17",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Umgang mit Veränderungen",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "umgang",
        "mit",
        "veraenderungen"
      ],
      "quickAreas": [
        "Umgang mit Veränderungen"
      ],
      "istStand": "_ reagiert auf Veränderungen in Abläufen oder Anforderungen unsicher.",
      "ziele": [
        "_ findet sich bei angekündigten Veränderungen zunehmend besser zurecht."
      ],
      "massnahmen": [
        "Veränderungen werden früh angekündigt und visualisiert. _ erhält kurze Orientierungshilfen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung bei veränderten Abläufen überprüft."
      ]
    },
    {
      "id": "E18",
      "bereich": "Emotionalität / Sozialverhalten",
      "rasterRow": "emotional",
      "rasterRowLabel": "Emotionalität / Sozialverhalten",
      "title": "Rückzug / Überforderung",
      "tags": [
        "emotionalitaet",
        "sozialverhalten",
        "rueckzug",
        "ueberforderung"
      ],
      "quickAreas": [
        "Rückzug / Überforderung"
      ],
      "istStand": "_ zieht sich bei Überforderung zurück oder benötigt Unterstützung, um wieder handlungsfähig zu werden.",
      "ziele": [
        "_ nutzt vereinbarte Strategien, um bei Überforderung wieder zur Aufgabe zurückzufinden."
      ],
      "massnahmen": [
        "_ nutzt Pausenzeichen, Hilfekarte, Rückzugszeit oder kurze Begleitung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung und kurze Reflexionsgespräche überprüft.",
        "SPRACHE / KOMMUNIKATION – 15 BAUSTEINE"
      ]
    },
    {
      "id": "S01",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Sprachverständnis einfache Aufträge",
      "tags": [
        "sprache",
        "kommunikation",
        "sprachverstaendnis",
        "einfache",
        "auftraege",
        "anweisungen"
      ],
      "quickAreas": [
        "Sprachverständnis einfache Aufträge"
      ],
      "istStand": "_ benötigt Unterstützung, um einfache mündliche Arbeitsaufträge sicher zu verstehen.",
      "ziele": [
        "_ versteht kurze, klar formulierte Arbeitsaufträge zunehmend sicher."
      ],
      "massnahmen": [
        "Arbeitsaufträge werden kurz, klar und visualisiert gegeben."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung bei Arbeitsaufträgen überprüft."
      ]
    },
    {
      "id": "S02",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Mehrschrittige Anweisungen",
      "tags": [
        "sprache",
        "kommunikation",
        "mehrschrittige",
        "anweisungen",
        "sprachverstaendnis"
      ],
      "quickAreas": [
        "Mehrschrittige Anweisungen"
      ],
      "istStand": "_ benötigt Unterstützung beim Umsetzen mehrschrittiger Arbeitsanweisungen.",
      "ziele": [
        "_ setzt zweischrittige oder mehrschrittige Anweisungen zunehmend sicher um."
      ],
      "massnahmen": [
        "Anweisungen werden in Einzelschritte zerlegt und bei Bedarf wiederholt."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung bei mehrschrittigen Aufgaben überprüft."
      ]
    },
    {
      "id": "S03",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Wortschatz allgemein",
      "tags": [
        "sprache",
        "kommunikation",
        "wortschatz",
        "allgemein"
      ],
      "quickAreas": [
        "Wortschatz allgemein"
      ],
      "istStand": "_ verfügt über einen wachsenden Wortschatz, benötigt jedoch Unterstützung beim Finden passender Begriffe.",
      "ziele": [
        "_ erweitert den aktiven Wortschatz und nutzt Begriffe zunehmend passend."
      ],
      "massnahmen": [
        "_ arbeitet mit Bildkarten, Wortfeldern und wiederkehrenden Satzmustern."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Sprachbeobachtung und kurze Wortschatzaufgaben überprüft."
      ]
    },
    {
      "id": "S04",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Wortfelder und Oberbegriffe",
      "tags": [
        "sprache",
        "kommunikation",
        "wortfelder",
        "und",
        "oberbegriffe",
        "wortschatz"
      ],
      "quickAreas": [
        "Wortfelder und Oberbegriffe"
      ],
      "istStand": "_ benötigt Unterstützung beim Ordnen von Wörtern in Wortfelder oder Oberbegriffe.",
      "ziele": [
        "_ ordnet Wörter zunehmend passenden Wortfeldern und Oberbegriffen zu."
      ],
      "massnahmen": [
        "_ nutzt Bildkarten, Sortieraufgaben, Wortnetze und mündliche Sicherung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Wortschatzaufgaben überprüft."
      ]
    },
    {
      "id": "S05",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Fachwortschatz",
      "tags": [
        "sprache",
        "kommunikation",
        "fachwortschatz",
        "wortschatz"
      ],
      "quickAreas": [
        "Fachwortschatz"
      ],
      "istStand": "_ nutzt fachliche Begriffe im Unterricht noch unsicher.",
      "ziele": [
        "_ verwendet ausgewählte Fachbegriffe zunehmend passend."
      ],
      "massnahmen": [
        "Fachbegriffe werden visualisiert, wiederholt und in Handlungssituationen genutzt."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung im Fachunterricht überprüft."
      ]
    },
    {
      "id": "S06",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Satzbildung einfache Sätze",
      "tags": [
        "sprache",
        "kommunikation",
        "satzbildung",
        "einfache",
        "saetze",
        "satz",
        "textverstaendnis"
      ],
      "quickAreas": [
        "Satzbildung einfache Sätze"
      ],
      "istStand": "_ formuliert eigene Aussagen häufig noch unvollständig.",
      "ziele": [
        "_ formuliert einfache vollständige Sätze zunehmend sicher."
      ],
      "massnahmen": [
        "_ nutzt Satzanfänge, Satzmuster und Bildimpulse."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Sprachproben und Beobachtung überprüft."
      ]
    },
    {
      "id": "S07",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Grammatik",
      "tags": [
        "sprache",
        "kommunikation",
        "grammatik",
        "satzbildung"
      ],
      "quickAreas": [
        "Grammatik"
      ],
      "istStand": "_ zeigt Unsicherheiten bei grammatischen Strukturen wie Artikel, Plural, Verbformen oder Fällen.",
      "ziele": [
        "_ nutzt ausgewählte grammatische Strukturen zunehmend sicherer."
      ],
      "massnahmen": [
        "_ übt mit Satzmustern, Modellierung, korrektivem Feedback und spielerischen Sprachaufgaben."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Sprachbeobachtung überprüft."
      ]
    },
    {
      "id": "S08",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Artikulation / Ziellaute",
      "tags": [
        "sprache",
        "kommunikation",
        "artikulation",
        "ziellaute",
        "laut",
        "schriftaufbau",
        "aussprache"
      ],
      "quickAreas": [
        "Artikulation / Ziellaute"
      ],
      "istStand": "_ bildet einzelne Laute oder Lautverbindungen noch nicht durchgängig verständlich.",
      "ziele": [
        "_ achtet in Übungssituationen zunehmend auf vereinbarte Ziellaute oder Lautverbindungen."
      ],
      "massnahmen": [
        "_ erhält kurze Sprechanlässe, korrektives Feedback und Wiederholungsübungen in ruhiger Atmosphäre."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Sprachbeobachtung überprüft."
      ]
    },
    {
      "id": "S09",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Verständlichkeit in der Spontansprache",
      "tags": [
        "sprache",
        "kommunikation",
        "verstaendlichkeit",
        "der",
        "spontansprache"
      ],
      "quickAreas": [
        "Verständlichkeit in der Spontansprache"
      ],
      "istStand": "_ ist in der Spontansprache nicht immer gut verständlich.",
      "ziele": [
        "_ spricht in vertrauten Situationen zunehmend verständlicher."
      ],
      "massnahmen": [
        "_ erhält Zeit zum Formulieren, Rückmeldung und Modellierung verständlicher Aussagen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung in Gesprächssituationen überprüft."
      ]
    },
    {
      "id": "S10",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Erzählen",
      "tags": [
        "sprache",
        "kommunikation",
        "erzaehlen"
      ],
      "quickAreas": [
        "Erzählen"
      ],
      "istStand": "_ benötigt Unterstützung, um Erlebnisse oder Bildgeschichten geordnet zu erzählen.",
      "ziele": [
        "_ erzählt kurze Inhalte zunehmend verständlich und geordnet."
      ],
      "massnahmen": [
        "_ nutzt Bildfolgen, Erzählplan, Satzstarter und mündliche Vorbereitung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung in Erzählsituationen überprüft."
      ]
    },
    {
      "id": "S11",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Beiträge strukturieren",
      "tags": [
        "sprache",
        "kommunikation",
        "beitraege",
        "strukturieren"
      ],
      "quickAreas": [
        "Beiträge strukturieren"
      ],
      "istStand": "_ bringt Beiträge ein, findet jedoch schwer Anfang, Reihenfolge oder Ende.",
      "ziele": [
        "_ strukturiert kurze Beiträge zunehmend mit Anfang und Ende."
      ],
      "massnahmen": [
        "_ nutzt Beitragskarten, Satzstarter und kurze Vorbereitung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung in Unterrichtsgesprächen überprüft."
      ]
    },
    {
      "id": "S12",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Gesprächsverhalten / Zuhören",
      "tags": [
        "sprache",
        "kommunikation",
        "gespraechsverhalten",
        "zuhoeren",
        "gespraech"
      ],
      "quickAreas": [
        "Gesprächsverhalten / Zuhören"
      ],
      "istStand": "_ benötigt Unterstützung, um zuzuhören und auf Gesprächsbeiträge anderer Bezug zu nehmen.",
      "ziele": [
        "_ hört Gesprächspartnern zunehmend zu und reagiert passend."
      ],
      "massnahmen": [
        "Gesprächsregeln werden visualisiert. _ übt in Partner- und Kleingruppengesprächen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung in Gesprächssituationen überprüft."
      ]
    },
    {
      "id": "S13",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Korrektives Feedback nutzen",
      "tags": [
        "sprache",
        "kommunikation",
        "korrektives",
        "feedback",
        "nutzen"
      ],
      "quickAreas": [
        "Korrektives Feedback nutzen"
      ],
      "istStand": "_ übernimmt sprachliche Rückmeldungen noch nicht durchgängig.",
      "ziele": [
        "_ nimmt korrektives Feedback zunehmend auf und nutzt es in Übungssituationen."
      ],
      "massnahmen": [
        "Rückmeldungen werden wertschätzend modelliert, ohne Sprechdruck aufzubauen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Sprachbeobachtung überprüft."
      ]
    },
    {
      "id": "S14",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Sprachliche Zurückhaltung",
      "tags": [
        "sprache",
        "kommunikation",
        "sprachliche",
        "zurueckhaltung"
      ],
      "quickAreas": [
        "Sprachliche Zurückhaltung"
      ],
      "istStand": "_ zeigt sich sprachlich zurückhaltend und beteiligt sich nur selten mündlich.",
      "ziele": [
        "_ gewinnt Sicherheit im sprachlichen Handeln und beteiligt sich in vertrauten Situationen zunehmend."
      ],
      "massnahmen": [
        "_ erhält Sprechanlässe ohne Druck, Partnergespräche und Kleingruppensituationen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung der mündlichen Beteiligung überprüft."
      ]
    },
    {
      "id": "S15",
      "bereich": "Sprache / Kommunikation",
      "rasterRow": "speech",
      "rasterRowLabel": "Sprache / Kommunikation",
      "title": "Mehrsprachigkeit / Unterrichtssprache",
      "tags": [
        "sprache",
        "kommunikation",
        "mehrsprachigkeit",
        "unterrichtssprache"
      ],
      "quickAreas": [
        "Mehrsprachigkeit / Unterrichtssprache"
      ],
      "istStand": "_ benötigt Unterstützung beim Aufbau der Unterrichtssprache.",
      "ziele": [
        "_ erweitert die sprachlichen Mittel für Unterrichtsgespräche und Arbeitsaufträge."
      ],
      "massnahmen": [
        "_ nutzt Bildmaterial, Satzmuster, Wortkarten und wiederkehrende sprachliche Routinen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Unterrichtsbeobachtung und Sprachproben überprüft.",
        "MOTORIK – 7 BAUSTEINE"
      ]
    },
    {
      "id": "MO01",
      "bereich": "Motorik",
      "rasterRow": "motor",
      "rasterRowLabel": "Motorik",
      "title": "Stifthaltung",
      "tags": [
        "motorik",
        "stifthaltung",
        "graphomotorik"
      ],
      "quickAreas": [
        "Stifthaltung"
      ],
      "istStand": "_ benötigt Unterstützung bei einer entlasteten und funktionalen Stifthaltung.",
      "ziele": [
        "_ nutzt eine zunehmend sichere und entlastete Stifthaltung."
      ],
      "massnahmen": [
        "_ erhält kurze Übungen, passende Stifte oder Schreibhilfen und Rückmeldung zur Handhaltung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung beim Schreiben überprüft."
      ]
    },
    {
      "id": "MO02",
      "bereich": "Motorik",
      "rasterRow": "motor",
      "rasterRowLabel": "Motorik",
      "title": "Lineatur und Schreibgröße",
      "tags": [
        "motorik",
        "lineatur",
        "und",
        "schreibgroesse",
        "schreiben",
        "rechtschreiben",
        "graphomotorik"
      ],
      "quickAreas": [
        "Lineatur und Schreibgröße"
      ],
      "istStand": "_ hält Lineatur und Schreibgröße noch nicht durchgängig sicher ein.",
      "ziele": [
        "_ schreibt zunehmend passend in der Lineatur."
      ],
      "massnahmen": [
        "_ nutzt klare Lineatur, Markierungen und reduzierte Schreibmengen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Vergleich ausgewählter Schreibproben überprüft."
      ]
    },
    {
      "id": "MO03",
      "bereich": "Motorik",
      "rasterRow": "motor",
      "rasterRowLabel": "Motorik",
      "title": "Graphomotorische Sicherheit",
      "tags": [
        "motorik",
        "graphomotorische",
        "sicherheit"
      ],
      "quickAreas": [
        "Graphomotorische Sicherheit"
      ],
      "istStand": "_ benötigt Unterstützung bei kontrollierten Schreib- und Schwungbewegungen.",
      "ziele": [
        "_ führt Linien, Formen und Schreibbewegungen zunehmend kontrolliert aus."
      ],
      "massnahmen": [
        "_ erhält Schwungübungen, Nachspuraufgaben und kurze graphomotorische Übungsphasen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch graphomotorische Arbeitsproben überprüft."
      ]
    },
    {
      "id": "MO04",
      "bereich": "Motorik",
      "rasterRow": "motor",
      "rasterRowLabel": "Motorik",
      "title": "Feinmotorik",
      "tags": [
        "motorik",
        "feinmotorik"
      ],
      "quickAreas": [
        "Feinmotorik"
      ],
      "istStand": "_ benötigt Unterstützung bei feinmotorischen Tätigkeiten wie Schneiden, Falten oder Kleben.",
      "ziele": [
        "_ führt feinmotorische Aufgaben zunehmend sicher und selbstständig aus."
      ],
      "massnahmen": [
        "_ übt Schneiden, Falten, Kneten, Perlen und den Umgang mit Arbeitsmaterialien."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung bei feinmotorischen Aufgaben überprüft."
      ]
    },
    {
      "id": "MO05",
      "bereich": "Motorik",
      "rasterRow": "motor",
      "rasterRowLabel": "Motorik",
      "title": "Kraftdosierung",
      "tags": [
        "motorik",
        "kraftdosierung"
      ],
      "quickAreas": [
        "Kraftdosierung"
      ],
      "istStand": "_ dosiert Kraft beim Schreiben, Schneiden oder Umgang mit Material noch nicht sicher.",
      "ziele": [
        "_ dosiert Kraft bei feinmotorischen Tätigkeiten zunehmend angemessen."
      ],
      "massnahmen": [
        "_ übt mit Knete, Zangen, verschiedenen Stiften und bewusstem Druckwechsel."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung bei Arbeitsmaterialien überprüft."
      ]
    },
    {
      "id": "MO06",
      "bereich": "Motorik",
      "rasterRow": "motor",
      "rasterRowLabel": "Motorik",
      "title": "Bilaterale Koordination",
      "tags": [
        "motorik",
        "bilaterale",
        "koordination"
      ],
      "quickAreas": [
        "Bilaterale Koordination"
      ],
      "istStand": "_ benötigt Unterstützung beim koordinierten Einsatz beider Hände oder Körperseiten.",
      "ziele": [
        "_ setzt beide Körperseiten zunehmend koordiniert ein."
      ],
      "massnahmen": [
        "_ erhält Überkreuzübungen, Schneideaufgaben, Bewegungsspiele und Aufgaben mit Handwechsel."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Bewegungsbeobachtung überprüft."
      ]
    },
    {
      "id": "MO07",
      "bereich": "Motorik",
      "rasterRow": "motor",
      "rasterRowLabel": "Motorik",
      "title": "Grobmotorik / Gleichgewicht",
      "tags": [
        "motorik",
        "grobmotorik",
        "gleichgewicht"
      ],
      "quickAreas": [
        "Grobmotorik / Gleichgewicht"
      ],
      "istStand": "_ benötigt Unterstützung bei Gleichgewicht, Koordination oder sicheren Bewegungsabläufen.",
      "ziele": [
        "_ bewegt sich zunehmend sicherer und koordinierter."
      ],
      "massnahmen": [
        "_ erhält Balancieraufgaben, Bewegungsspiele und kurze koordinative Übungen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung in Bewegungsangeboten überprüft."
      ]
    },
    ...perceptionTextBlockSpecs,
    {
      "id": "K01",
      "bereich": "Kognition",
      "rasterRow": "cognition",
      "rasterRowLabel": "Kognition",
      "title": "Aufmerksamkeit fokussieren",
      "tags": [
        "kognition",
        "aufmerksamkeit",
        "fokussieren"
      ],
      "quickAreas": [
        "Aufmerksamkeit fokussieren"
      ],
      "istStand": "_ benötigt Unterstützung, um die Aufmerksamkeit auf eine Aufgabe zu richten.",
      "ziele": [
        "_ richtet die Aufmerksamkeit in überschaubaren Situationen zunehmend auf die Aufgabe."
      ],
      "massnahmen": [
        "_ erhält klare Teilschritte, visuelle Hinweise und reduzierte Ablenkung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Unterrichtsbeobachtung überprüft."
      ]
    },
    {
      "id": "K02",
      "bereich": "Kognition",
      "rasterRow": "cognition",
      "rasterRowLabel": "Kognition",
      "title": "Konzentrationsdauer",
      "tags": [
        "kognition",
        "konzentrationsdauer",
        "konzentration"
      ],
      "quickAreas": [
        "Konzentrationsdauer"
      ],
      "istStand": "_ hält die Konzentration nur über kurze Zeit aufrecht.",
      "ziele": [
        "_ arbeitet in vereinbarten kurzen Zeitfenstern zunehmend konzentriert."
      ],
      "massnahmen": [
        "_ nutzt Timer, kurze Arbeitsphasen und Rückmeldung nach abgeschlossenen Abschnitten."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung der Arbeitsphasen überprüft."
      ]
    },
    {
      "id": "K03",
      "bereich": "Kognition",
      "rasterRow": "cognition",
      "rasterRowLabel": "Kognition",
      "title": "Nach Unterbrechungen zurückfinden",
      "tags": [
        "kognition",
        "nach",
        "unterbrechungen",
        "zurueckfinden"
      ],
      "quickAreas": [
        "Nach Unterbrechungen zurückfinden"
      ],
      "istStand": "_ benötigt Unterstützung, um nach Unterbrechungen wieder zur Aufgabe zurückzufinden.",
      "ziele": [
        "_ nimmt die Arbeit nach Unterbrechungen zunehmend wieder auf."
      ],
      "massnahmen": [
        "_ nutzt Markierungen, Aufgabenkarte und kurze Erinnerungen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Unterrichtsbeobachtung überprüft."
      ]
    },
    {
      "id": "K04",
      "bereich": "Kognition",
      "rasterRow": "cognition",
      "rasterRowLabel": "Kognition",
      "title": "Arbeitsgedächtnis",
      "tags": [
        "kognition",
        "arbeitsgedaechtnis",
        "gedaechtnis"
      ],
      "quickAreas": [
        "Arbeitsgedächtnis"
      ],
      "istStand": "_ benötigt Unterstützung, um mehrere Informationen gleichzeitig zu behalten und umzusetzen.",
      "ziele": [
        "_ merkt sich kurze Arbeitsaufträge zunehmend sicherer."
      ],
      "massnahmen": [
        "Aufträge werden reduziert, visualisiert und in Teilschritte gegliedert."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung bei Arbeitsaufträgen überprüft."
      ]
    },
    {
      "id": "K05",
      "bereich": "Kognition",
      "rasterRow": "cognition",
      "rasterRowLabel": "Kognition",
      "title": "Langzeitgedächtnis / Abrufbarkeit",
      "tags": [
        "kognition",
        "langzeitgedaechtnis",
        "abrufbarkeit",
        "gedaechtnis"
      ],
      "quickAreas": [
        "Langzeitgedächtnis / Abrufbarkeit"
      ],
      "istStand": "_ benötigt häufige Wiederholungen, um erarbeitete Inhalte zu sichern und wieder abzurufen.",
      "ziele": [
        "_ festigt erarbeitete Lerninhalte und ruft diese in vertrauten Aufgabenformaten zunehmend sicher ab."
      ],
      "massnahmen": [
        "_ erhält regelmäßige Wiederholungsphasen, vertraute Aufgabenformate und kurze Abrufübungen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Lernproben und Vergleich ausgewählter Arbeitsergebnisse überprüft."
      ]
    },
    {
      "id": "K06",
      "bereich": "Kognition",
      "rasterRow": "cognition",
      "rasterRowLabel": "Kognition",
      "title": "Handlungsplanung",
      "tags": [
        "kognition",
        "handlungsplanung"
      ],
      "quickAreas": [
        "Handlungsplanung"
      ],
      "istStand": "_ benötigt Unterstützung, um mehrschrittige Aufgaben zu planen und umzusetzen.",
      "ziele": [
        "_ plant einfache Handlungsschritte zunehmend sicher."
      ],
      "massnahmen": [
        "_ nutzt Ablaufkarten, Schritt-für-Schritt-Pläne und sprachliche Begleitung."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung bei mehrschrittigen Aufgaben überprüft."
      ]
    },
    {
      "id": "K07",
      "bereich": "Kognition",
      "rasterRow": "cognition",
      "rasterRowLabel": "Kognition",
      "title": "Problemlösen",
      "tags": [
        "kognition",
        "problemloesen"
      ],
      "quickAreas": [
        "Problemlösen"
      ],
      "istStand": "_ benötigt Unterstützung, um bei Schwierigkeiten Lösungswege zu entwickeln.",
      "ziele": [
        "_ nutzt bei Problemen zunehmend vereinbarte Lösungsstrategien."
      ],
      "massnahmen": [
        "_ erhält Modellierung, Leitfragen und Hilfestrategien wie „erst überlegen, dann fragen“."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Beobachtung in Problemsituationen überprüft."
      ]
    },
    {
      "id": "K08",
      "bereich": "Kognition",
      "rasterRow": "cognition",
      "rasterRowLabel": "Kognition",
      "title": "Transfer / Anwendung in neuen Situationen",
      "tags": [
        "kognition",
        "uebertragung",
        "von",
        "wissen",
        "transfer"
      ],
      "quickAreas": [
        "Transfer / Anwendung in neuen Situationen"
      ],
      "istStand": "_ wendet geübte Inhalte in neuen Aufgabenformaten noch nicht sicher an.",
      "ziele": [
        "_ überträgt bekannte Strategien zunehmend auf ähnliche Aufgaben."
      ],
      "massnahmen": [
        "Bekannte Aufgabenformate werden variiert und Gemeinsamkeiten werden besprochen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Vergleich vertrauter und leicht veränderter Aufgaben überprüft."
      ]
    },
    {
      "id": "K09",
      "bereich": "Kognition",
      "rasterRow": "cognition",
      "rasterRowLabel": "Kognition",
      "title": "Selbstkontrolle von Arbeitsergebnissen",
      "tags": [
        "kognition",
        "selbstkontrolle",
        "von",
        "arbeitsergebnissen",
        "selbststaendigkeit",
        "selbstwahrnehmung"
      ],
      "quickAreas": [
        "Selbstkontrolle von Arbeitsergebnissen"
      ],
      "istStand": "_ überprüft eigene Arbeitsergebnisse noch nicht selbstständig.",
      "ziele": [
        "_ kontrolliert ausgewählte Arbeitsergebnisse mit Hilfe zunehmend selbstständig."
      ],
      "massnahmen": [
        "_ nutzt Kontrollkarten, Checklisten und kurze gemeinsame Reflexionsphasen."
      ],
      "evaluation": [
        "Die Entwicklung wird durch Vergleich von Erstfassung und Überarbeitung überprüft."
      ]
    }
  ];

  const textBlocks = textBlockSpecs.map((block) => createTextBlock(block));

  const agreementTextBlocks = {
    "student": [
      {
        "id": "agreement_student_01",
        "column": "student",
        "text": "_ nutzt die vereinbarte Hilfekarte.",
        "tags": [
          "student",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit dem Kind",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_student_02",
        "column": "student",
        "text": "_ meldet sich, wenn #er/sie# Unterstützung benötigt.",
        "tags": [
          "student",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit dem Kind",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_student_03",
        "column": "student",
        "text": "_ beginnt mit dem vereinbarten ersten Arbeitsschritt.",
        "tags": [
          "student",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit dem Kind",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_student_04",
        "column": "student",
        "text": "_ übt regelmäßig eine kurze vereinbarte Aufgabe.",
        "tags": [
          "student",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit dem Kind",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_student_05",
        "column": "student",
        "text": "_ nutzt die vereinbarte Lesestrategie.",
        "tags": [
          "student",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit dem Kind",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_student_06",
        "column": "student",
        "text": "_ achtet auf die vereinbarte Arbeitszeit.",
        "tags": [
          "student",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit dem Kind",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_student_07",
        "column": "student",
        "text": "_ nutzt bei schwierigen Aufgaben die vereinbarte Hilfestrategie.",
        "tags": [
          "student",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit dem Kind",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_student_08",
        "column": "student",
        "text": "_ nutzt das vereinbarte Stoppsignal.",
        "tags": [
          "student",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit dem Kind",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_student_09",
        "column": "student",
        "text": "_ kontrolliert eine ausgewählte Aufgabe mit der Kontrollkarte.",
        "tags": [
          "student",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit dem Kind",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_student_10",
        "column": "student",
        "text": "_ legt zu Stundenbeginn die vereinbarten Materialien bereit.",
        "tags": [
          "student",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit dem Kind",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_student_11",
        "column": "student",
        "text": "_ zeigt an, wenn #er/sie# eine Pause oder Hilfe benötigt.",
        "tags": [
          "student",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit dem Kind",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_student_12",
        "column": "student",
        "text": "_ arbeitet nach Rückmeldung an einer ausgewählten Aufgabe weiter.",
        "tags": [
          "student",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit dem Kind",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      }
    ],
    "parents": [
      {
        "id": "agreement_parents_01",
        "column": "parents",
        "text": "Die Eltern unterstützen durch kurze regelmäßige Übungszeiten.",
        "tags": [
          "parents",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit Eltern/Sorgeberechtigten",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_parents_02",
        "column": "parents",
        "text": "Die Eltern achten auf vollständiges Arbeitsmaterial.",
        "tags": [
          "parents",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit Eltern/Sorgeberechtigten",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_parents_03",
        "column": "parents",
        "text": "Die Eltern unterstützen die regelmäßige Lesezeit.",
        "tags": [
          "parents",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit Eltern/Sorgeberechtigten",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_parents_04",
        "column": "parents",
        "text": "Die Eltern geben Rückmeldung, wenn häusliche Übungen zu umfangreich sind.",
        "tags": [
          "parents",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit Eltern/Sorgeberechtigten",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_parents_05",
        "column": "parents",
        "text": "Die Eltern informieren die Schule über besondere Belastungen oder Fehlzeiten.",
        "tags": [
          "parents",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit Eltern/Sorgeberechtigten",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_parents_06",
        "column": "parents",
        "text": "Die Eltern unterstützen das Nachholen ausgewählter Inhalte nach Fehlzeiten.",
        "tags": [
          "parents",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit Eltern/Sorgeberechtigten",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_parents_07",
        "column": "parents",
        "text": "Die Eltern besprechen Rückmeldungen der Schule zeitnah mit dem Kind.",
        "tags": [
          "parents",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit Eltern/Sorgeberechtigten",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_parents_08",
        "column": "parents",
        "text": "Die Eltern achten auf eine kurze, regelmäßige Wiederholung vereinbarter Inhalte.",
        "tags": [
          "parents",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit Eltern/Sorgeberechtigten",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_parents_09",
        "column": "parents",
        "text": "Die Eltern geben Rückmeldung zur Umsetzbarkeit der Vereinbarungen.",
        "tags": [
          "parents",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit Eltern/Sorgeberechtigten",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_parents_10",
        "column": "parents",
        "text": "Die Eltern unterstützen die vereinbarte Materialorganisation.",
        "tags": [
          "parents",
          "vereinbarung"
        ],
        "description": "Vereinbarungen mit Eltern/Sorgeberechtigten",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      }
    ],
    "team": [
      {
        "id": "agreement_team_01",
        "column": "team",
        "text": "Das Klassenteam nutzt einheitliche Absprachen.",
        "tags": [
          "team",
          "vereinbarung"
        ],
        "description": "Vereinbarungen im Team",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_team_02",
        "column": "team",
        "text": "Die beteiligten Lehrkräfte dokumentieren kurze Beobachtungen bis zur nächsten Evaluation.",
        "tags": [
          "team",
          "vereinbarung"
        ],
        "description": "Vereinbarungen im Team",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_team_03",
        "column": "team",
        "text": "Die Maßnahmen werden regelmäßig im Team überprüft.",
        "tags": [
          "team",
          "vereinbarung"
        ],
        "description": "Vereinbarungen im Team",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_team_04",
        "column": "team",
        "text": "Die Aufgaben werden in Umfang und Struktur angepasst.",
        "tags": [
          "team",
          "vereinbarung"
        ],
        "description": "Vereinbarungen im Team",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_team_05",
        "column": "team",
        "text": "Die nächste Evaluation erfolgt am eingetragenen Termin.",
        "tags": [
          "team",
          "vereinbarung"
        ],
        "description": "Vereinbarungen im Team",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_team_06",
        "column": "team",
        "text": "Die vereinbarten Hilfen werden in den betroffenen Unterrichtsfächern einheitlich eingesetzt.",
        "tags": [
          "team",
          "vereinbarung"
        ],
        "description": "Vereinbarungen im Team",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_team_07",
        "column": "team",
        "text": "Rückmeldungen aus OGS / MPT / Integrationshilfe werden bei der Evaluation berücksichtigt.",
        "tags": [
          "team",
          "vereinbarung"
        ],
        "description": "Vereinbarungen im Team",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_team_08",
        "column": "team",
        "text": "Die Fördermaßnahmen werden in kurzen Abständen auf Alltagstauglichkeit überprüft.",
        "tags": [
          "team",
          "vereinbarung"
        ],
        "description": "Vereinbarungen im Team",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_team_09",
        "column": "team",
        "text": "Neue Beobachtungen werden im nächsten Teamgespräch zusammengeführt.",
        "tags": [
          "team",
          "vereinbarung"
        ],
        "description": "Vereinbarungen im Team",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      },
      {
        "id": "agreement_team_10",
        "column": "team",
        "text": "Die Fortschreibung erfolgt nach der vereinbarten Beobachtungsphase.",
        "tags": [
          "team",
          "vereinbarung"
        ],
        "description": "Vereinbarungen im Team",
        "style": "ausformuliert",
        "sourceLabel": "Vereinbarungsbaustein"
      }
    ]
  };

  const continuationStatuses = [
    { value: "reached", label: "erreicht" },
    { value: "partial", label: "teilweise erreicht" },
    { value: "ongoing", label: "weiterhin Förderbedarf" },
    { value: "changed", label: "Förderbedarf verändert" },
    { value: "notChecked", label: "nicht ausreichend überprüft" },
    { value: "notRelevant", label: "nicht mehr relevant" }
  ];

  function createTextBlock(block) {
    const dynamic = createDynamicProfile(block);
    return {
      ...block,
      ...dynamic,
      styles: createBlockStyles(block),
      continuationHints: createContinuationHints(block.title)
    };
  }

  function createDynamicProfile(block) {
    const profiles = {
      german: {
        contexts: ["in vertrauten Aufgabenformaten", "nach kurzer Wiederholung", "mit Silbenmarkierung", "bei kurzen Aufgaben", "nach mündlicher Vorentlastung"],
        difficulties: ["beim genauen Lesen", "beim Zusammenschleifen von Lauten", "beim Verstehen kurzer Texte", "beim lautgetreuen Schreiben", "bei Rechtschreibstrategien"],
        strengths: ["mit visueller Hilfe", "mit bekannten Wörtern", "nach gemeinsamer Vorbereitung", "bei kurzen Texten"],
        supportOptions: ["Lesefenster", "Silbenbögen", "Silbenmarkierung", "Anlauttabelle", "Bildkarten", "Wortkarten", "Satzstarter", "wiederholtes Lesen", "Partnerlesen"],
        evaluationTemplates: ["Die Entwicklung wird durch kurze Lese- oder Schreibproben und Beobachtungen in ausgewählten Aufgaben überprüft."]
      },
      math: {
        contexts: ["mit Anschauungsmaterial", "in vertrauten Aufgabenformaten", "nach gemeinsamer Beispielaufgabe", "bei kurzen Rechenphasen"],
        difficulties: ["beim Mengenerfassen", "beim Zahlverständnis", "beim Zählen", "beim Zerlegen von Zahlen", "beim Nutzen von Strategien", "beim Verstehen von Sachaufgaben"],
        strengths: ["mit Zehnerfeld", "mit Zahlenstrahl", "mit Materialhandlung", "nach kurzer Wiederholung"],
        supportOptions: ["Zehnerfeld", "Zahlenstrahl", "Rechenmaterial", "Zerlegungskarten", "Modellaufgabe", "Partnerkind", "kurze Einzelzuwendung"],
        evaluationTemplates: ["Die Entwicklung wird durch Rechenproben, Beobachtung der Strategieanwendung und kurze Gespräche über den Lösungsweg überprüft."]
      },
      learning: {
        contexts: ["in vertrauten Aufgabenformaten", "bei kurzen Aufgaben", "in Stillarbeitsphasen", "nach klarer Orientierung"],
        difficulties: ["beim Aufgabenbeginn", "beim Dranbleiben", "beim Arbeitstempo", "bei der Materialorganisation", "beim Nachfragen", "beim Beenden begonnener Aufgaben"],
        strengths: ["nach kurzer Orientierung", "mit visueller Hilfe", "mit direkter Rückmeldung", "in ruhiger Arbeitsumgebung"],
        supportOptions: ["Startkarte", "Ablaufkarte", "Beispielaufgabe", "kurze Startbegleitung", "Timer", "Teilschritte", "Material-Checkliste", "positive Rückmeldung"],
        evaluationTemplates: ["Die Entwicklung wird durch kurze Beobachtungen in ausgewählten Arbeitsphasen dokumentiert."]
      },
      emotional: {
        contexts: ["in vertrauten Situationen", "nach Ermutigung", "bei klaren Regeln", "in überschaubaren Gruppen"],
        difficulties: ["bei Frustration", "bei Fehlern", "bei Wartezeiten", "bei Konflikten", "bei Gruppenarbeit", "bei Veränderungen"],
        strengths: ["mit klaren Absprachen", "nach kurzer Reflexion", "bei positiver Rückmeldung", "in vorbereiteten Situationen"],
        supportOptions: ["Stoppsignal", "Hilfekarte", "Pausenkarte", "kurze Teilschritte", "positive Rückmeldung", "Reflexionskarte", "Kleingruppe"],
        evaluationTemplates: ["Die Entwicklung wird durch Beobachtungen in Unterrichts-, Pausen- und Gruppensituationen überprüft."]
      },
      speech: {
        contexts: ["in vertrauten Gesprächssituationen", "nach mündlicher Vorentlastung", "mit Bildimpulsen", "in Partnerarbeit"],
        difficulties: ["beim Verstehen mündlicher Aufträge", "beim Wortfinden", "beim Bilden vollständiger Sätze", "beim Erzählen", "bei Gesprächsbeiträgen"],
        strengths: ["mit Satzmustern", "mit Bildkarten", "nach kurzer Vorbereitung", "in Kleingruppen"],
        supportOptions: ["Bildkarten", "Wortkarten", "Satzstarter", "wiederkehrende Satzmuster", "Partnerkind", "Kleingruppe", "Modellierung durch die Lehrkraft"],
        evaluationTemplates: ["Die Entwicklung wird durch Sprachbeobachtung in Partner-, Kleingruppen- und Unterrichtsgesprächen überprüft."]
      },
      motor: {
        contexts: ["bei kurzen Übungsphasen", "mit klarer Lineatur", "nach Modellierung", "bei reduziertem Umfang"],
        difficulties: ["bei der Stifthaltung", "bei der Lineatur", "bei der Schreibgröße", "beim Schneiden", "bei der Kraftdosierung", "bei koordinierten Bewegungen"],
        strengths: ["mit Markierungen", "mit passenden Materialien", "nach kurzer Rückmeldung", "in ruhiger Arbeitssituation"],
        supportOptions: ["klare Lineatur", "Markierungen", "passende Stifte", "Schreibhilfe", "Nachspuraufgaben", "Bewegungsangebot", "kurze Einzelzuwendung"],
        evaluationTemplates: ["Die Entwicklung wird durch Beobachtung und den Vergleich ausgewählter motorischer Arbeitsproben überprüft."]
      },
      perception: {
        contexts: ["bei übersichtlichen Vorlagen", "mit Markierungen", "nach gemeinsamer Orientierung", "bei reduzierter Reizmenge"],
        difficulties: ["beim Unterscheiden ähnlicher Zeichen", "beim Finden wichtiger Informationen", "bei Raumlagen", "bei der Orientierung auf Arbeitsblättern", "bei Lautunterscheidungen"],
        strengths: ["mit visueller Hilfe", "mit Abdeckhilfe", "mit klarer Struktur", "in ruhiger Arbeitsumgebung"],
        supportOptions: ["Markierungen", "Abdeckhilfe", "reduzierte Vorlage", "Pfeile", "Lagekarten", "Hörübungen", "ruhiger Arbeitsplatz"],
        evaluationTemplates: ["Die Entwicklung wird durch Beobachtung in Wahrnehmungsaufgaben und bei ausgewählten Arbeitsblättern überprüft."]
      },
      cognition: {
        contexts: ["bei kurzen Aufgaben", "nach Wiederholung", "mit Ablaufkarte", "in vertrauten Aufgabenformaten"],
        difficulties: ["beim Fokussieren", "beim Merken von Aufträgen", "beim Planen von Schritten", "beim Übertragen von Wissen", "beim Problemlösen", "beim Kontrollieren eigener Ergebnisse"],
        strengths: ["mit visueller Hilfe", "mit klaren Teilschritten", "nach Modellierung", "mit kurzer Rückmeldung"],
        supportOptions: ["Ablaufkarte", "Checkliste", "Timer", "Modellaufgabe", "Leitfragen", "Hilfekarte", "gemeinsame Kontrolle"],
        evaluationTemplates: ["Die Entwicklung wird durch Unterrichtsbeobachtung, kurze Aufgabenproben und den Vergleich ausgewählter Arbeitsergebnisse überprüft."]
      }
    };
    const profile = profiles[block.rasterRow] || profiles.learning;
    return {
      baseCompetence: block.title.split(":").at(-1).trim(),
      contexts: profile.contexts,
      difficulties: profile.difficulties,
      strengths: profile.strengths,
      supportOptions: profile.supportOptions,
      goalTemplates: block.ziele,
      measureTemplates: block.massnahmen,
      evaluationTemplates: [...block.evaluation, ...profile.evaluationTemplates],
      dynamicSentenceParts: {
        progress: [
          `_ konnte im Bereich ${block.title} erste Fortschritte zeigen.`,
          `_ nutzt einzelne Hilfen im Bereich ${block.title} zunehmend sicherer.`,
          `Die Entwicklung im Bereich ${block.title} zeigt sich aktuell noch wechselhaft.`
        ],
        ongoingNeed: [
          `Bei neuen oder umfangreicheren Anforderungen zeigt sich weiterhin Unterstützungsbedarf im Bereich ${block.title}.`,
          `Unterstützung ist vor allem notwendig, wenn die Anforderungen weniger vertraut sind.`
        ],
        support: profile.supportOptions.slice(0, 3).map((support) => `${support} unterstützt _ dabei, den nächsten Lernschritt im Bereich ${block.title} zunehmend sicherer umzusetzen.`)
      },
      supportSentences: {
        low: ["Eine kurze Erinnerung reicht zunehmend häufiger aus."],
        medium: [`_ profitiert von ${profile.supportOptions.slice(0, 2).join(" und ")}.`],
        high: [`_ benötigt zunächst eine engere Begleitung und klare Modellierung.`]
      }
    };
  }

  function createBlockStyles(block) {
    return {
      kurz: {
        istStand: block.istStand,
        ziele: block.ziele.slice(0, 1),
        massnahmen: block.massnahmen.slice(0, 1),
        evaluation: block.evaluation.slice(0, 1)
      },
      stichpunkte: {
        istStand: block.istStand,
        ziele: block.ziele,
        massnahmen: block.massnahmen,
        evaluation: block.evaluation
      },
      ausformuliert: {
        istStand: block.istStand,
        ziele: block.ziele,
        massnahmen: block.massnahmen,
        evaluation: block.evaluation
      },
      praeventivKnapp: {
        istStand: block.istStand,
        ziele: block.ziele.slice(0, 1),
        massnahmen: block.massnahmen.slice(0, 1),
        evaluation: ["Der Bereich wird im Unterricht weiter beobachtet und nach der vereinbarten Förderphase überprüft."]
      }
    };
  }

  function createContinuationHints(title) {
    return {
      reached: `_ konnte im vergangenen Förderzeitraum im Bereich ${title} deutliche Fortschritte zeigen. Der Bereich ist aktuell kein vorrangiger Förderschwerpunkt mehr.`,
      partial: `_ konnte im Bereich ${title} erste Fortschritte zeigen. In vertrauten Situationen gelingt dies zunehmend besser, bei neuen oder komplexeren Anforderungen benötigt #er/sie# weiterhin Unterstützung.`,
      ongoing: `Im Bereich ${title} besteht weiterhin Förderbedarf. Die bisherigen Maßnahmen werden fortgeführt und bei Bedarf kleinschrittig angepasst.`,
      changed: `Der Förderbedarf hat sich im Bereich ${title} verändert. Während einzelne Teilbereiche sicherer gelingen, zeigt sich nun Unterstützungsbedarf bei [neuer Schwerpunkt].`,
      notChecked: `Der Bereich ${title} konnte im vergangenen Förderzeitraum noch nicht ausreichend überprüft werden. Die Beobachtung wird fortgesetzt.`,
      notRelevant: `Der Bereich ${title} ist aktuell kein Förderschwerpunkt mehr. Die erreichten Kompetenzen werden im Unterricht weiter beobachtet.`,
      positive: `_ zeigt im Bereich ${title} zunehmend mehr Sicherheit.`,
      ongoingShort: `Im Bereich ${title} besteht weiterhin Förderbedarf.`
    };
  }

  const competencyAreas = {
    german: {
      id: "german",
      label: "Deutsch",
      rasterRow: "german",
      subareas: [
        subarea("german", "phonologie", "Vorläuferfähigkeiten / phonologische Bewusstheit", ["deutsch", "phonologie", "schriftaufbau"], [
          "erkennt Reime", "klatscht Silben", "erkennt Silben in Wörtern", "hört Anlaute", "hört Auslaute", "hört Inlaute", "unterscheidet ähnlich klingende Laute", "gliedert Wörter in Silben", "gliedert einfache Wörter in Laute", "verbindet Laute zu Silben", "verbindet Silben zu Wörtern"
        ]),
        subarea("german", "buchstaben", "Buchstabenkenntnis und Laut-Buchstaben-Zuordnung", ["deutsch", "buchstaben", "schriftaufbau"], [
          "erkennt bekannte Buchstaben", "benennt bekannte Buchstaben", "ordnet Buchstaben passende Laute zu", "unterscheidet ähnlich aussehende Buchstaben", "unterscheidet ähnlich klingende Laute", "schreibt bekannte Buchstaben formklar", "nutzt die Schreibrichtung zunehmend sicher"
        ]),
        subarea("german", "lesen", "Lesen", ["deutsch", "lesen"], [
          "liest Silben", "liest lautgetreue Wörter", "liest kurze Wörter", "liest einfache Sätze", "liest kurze Texte", "nutzt Silben als Hilfe", "liest wiederholte Wörter zunehmend sicher", "liest nicht nur ratend", "bleibt beim Lesen in der Zeile", "beantwortet einfache Fragen zum Gelesenen"
        ]),
        subarea("german", "schreiben", "Schreiben / Rechtschreiben", ["deutsch", "schreiben", "rechtschreiben"], [
          "schreibt lautgetreue Wörter", "verschriftet hörbare Laute", "schreibt Wörter nicht nur als Skelett", "achtet auf Vokale", "schreibt einfache Sätze", "setzt Wortgrenzen", "schreibt bekannte Lernwörter", "nutzt Abschreibstrategien", "kontrolliert Geschriebenes mit Hilfe", "schreibt Buchstaben formklar"
        ]),
        subarea("german", "text", "Textverständnis / Umgang mit Texten", ["deutsch", "textverstaendnis"], [
          "hört kurzen Texten aufmerksam zu", "gibt Inhalte mündlich wieder", "ordnet Bilder zu einem Text", "beantwortet einfache Fragen", "findet Informationen im Text", "erzählt zu Bildern", "formuliert kurze eigene Sätze"
        ]),
        subarea("german", "sprache_untersuchen", "Sprache untersuchen / erste Rechtschreibstrategien", ["deutsch", "rechtschreiben", "strategien"], [
          "erkennt Wortgrenzen", "vergleicht Wörter", "nutzt erste Rechtschreibmuster", "achtet auf Großschreibung bekannter Nomen", "spricht Wörter zum Schreiben deutlich mit", "nutzt bekannte Merkwörter"
        ])
      ],
      suggestionRules: [
        rule("german_phonologie", "german", "phonologische Bewusstheit / Aufbau der Schriftsprache", ["phonologie", "schriftaufbau"], {
          stand: "_ zeigt beim Wahrnehmen und Gliedern von Sprache noch Unsicherheiten. Beim Erkennen von Silben, Anlauten oder einzelnen Lauten profitiert #er/sie# von klaren Beispielen und wiederholter Übung.",
          goals: "_ festigt die phonologische Bewusstheit, indem #er/sie# Silben und Laute in einfachen Wörtern zunehmend sicher erkennt und benennt.",
          measures: "_ erhält kurze wiederkehrende Übungen mit Reimen, Silben, Lauten und Bildkarten. Lautgebärden, deutliches Vorsprechen und feste Übungsrituale unterstützen #ihn/sie#.",
          evaluation: "Die Entwicklung wird durch kurze Beobachtungen, kleine Lese- und Schreibproben sowie den Vergleich ausgewählter Arbeitsproben überprüft."
        }),
        rule("german_lesen", "german", "Lesesicherheit", ["lesen"], {
          stand: "_ nutzt einzelne bekannte Buchstaben, Silben oder Wörter bereits als Hilfe, liest kurze Wörter und Sätze jedoch noch wechselnd sicher. Beim genauen Erlesen und beim Erfassen einfacher Inhalte benötigt #er/sie# Unterstützung.",
          goals: "_ erweitert #seine/ihre# Lesesicherheit, indem #er/sie# kurze lautgetreue Wörter, einfache Sätze und kurze Texte zunehmend genauer liest.",
          measures: "_ übt in kurzen Leseeinheiten mit Silbenmarkierungen, Lesefenster, Blitzlesen und wiederholtem Lesen bekannter Wörter. Die Aufgaben werden überschaubar gehalten und regelmäßig rückgemeldet.",
          evaluation: "Die Entwicklung wird durch kurze Leseproben, Beobachtung beim Vorlesen und einfache Fragen zum Text überprüft."
        }),
        rule("german_schreiben", "german", "Schreiben / Rechtschreiben", ["schreiben", "rechtschreiben"], {
          stand: "_ verschriftet erste Wörter oder Sätze, benötigt aber noch Unterstützung, um Laute vollständig wahrzunehmen, passende Buchstaben zuzuordnen und Geschriebenes zu kontrollieren.",
          goals: "_ verbessert #seine/ihre# Schreibsicherheit, indem #er/sie# Laute in einfachen Wörtern zunehmend vollständig hört und passende Buchstaben sicherer zuordnet.",
          measures: "_ erhält kurze Schreibübungen mit lautgetreuen Wörtern, Bild-Wort-Karten, Silbenhilfen und gemeinsamen Kontrollphasen. Abschreiben und Überarbeiten werden kleinschrittig angeleitet.",
          evaluation: "Die Entwicklung wird durch Schreibproben, Abschreibaufgaben und den Vergleich ausgewählter Arbeitsproben überprüft."
        }),
        rule("german_text", "german", "Textverständnis", ["textverstaendnis"], {
          stand: "_ kann sich zu Bildern oder kurzen Texten äußern, benötigt jedoch noch Unterstützung, um Inhalte geordnet wiederzugeben und einfache Informationen sicher zu entnehmen.",
          goals: "_ verbessert das Textverständnis, indem #er/sie# kurze Texte liest oder hört und einfache Fragen dazu zunehmend sicher beantwortet.",
          measures: "_ arbeitet mit kurzen Texten, Bildimpulsen, Vorlesephasen und einfachen Fragen. Inhalte werden mündlich gesichert und bei Bedarf bildlich gestützt.",
          evaluation: "Die Entwicklung wird durch Beobachtung, kurze Fragen zum Text und ausgewählte Arbeitsproben überprüft."
        })
      ]
    },

    math: {
      id: "math",
      label: "Mathematik",
      rasterRow: "math",
      subareas: [
        subarea("math", "praenumerisch", "Pränumerische Kompetenzen", ["mathematik", "praenumerisch"], ["sortiert nach Farbe, Form oder Größe", "bildet Reihen und Muster", "setzt Muster fort", "ordnet paarweise zu", "erkennt Gleichmächtigkeit", "nutzt Raumbegriffe wie oben, unten, vor, hinter, links, rechts", "legt Muster nach", "überträgt Muster"]),
        subarea("math", "mengen", "Mengenerfassung", ["mathematik", "mengen", "zahlverstaendnis"], ["erfasst kleine Mengen simultan", "erkennt Würfelbilder", "erkennt strukturierte Mengen im Zehnerfeld", "ordnet Mengen passenden Zahlen zu", "erkennt mehr, weniger, gleich", "vergleicht Mengen"]),
        subarea("math", "zaehlen", "Zählen und Zahlwortreihe", ["mathematik", "zaehlen", "zahlverstaendnis"], ["zählt vorwärts", "zählt rückwärts", "zählt von einer Zahl weiter", "zählt von einer Zahl zurück", "zählt Mengen korrekt ab", "hält die Eins-zu-eins-Zuordnung beim Zählen ein"]),
        subarea("math", "ziffern", "Ziffern und Zahlzuordnung", ["mathematik", "ziffern", "zahlverstaendnis"], ["erkennt Ziffern", "schreibt Ziffern formklar", "ordnet Ziffern Mengen zu", "bestimmt Vorgänger und Nachfolger", "ordnet Zahlen der Größe nach"]),
        subarea("math", "beziehungen", "Zahlbeziehungen", ["mathematik", "zahlbeziehungen", "zahlverstaendnis"], ["vergleicht Zahlen", "nutzt größer, kleiner, gleich", "erkennt Nachbarzahlen", "orientiert sich am Zahlenstrahl", "erkennt Zahlzerlegungen", "nutzt Zehnerstruktur"]),
        subarea("math", "zerlegung", "Zerlegung", ["mathematik", "zerlegung", "rechnen"], ["zerlegt Zahlen handelnd", "zerlegt Zahlen bildlich", "kennt Zerlegungen bis 10", "nutzt verliebte Zahlen", "ergänzt bis 10", "nutzt Zerlegungen beim Rechnen"]),
        subarea("math", "addition_subtraktion", "Addition und Subtraktion", ["mathematik", "rechnen", "bis20"], ["versteht Plus als Dazukommen", "versteht Minus als Wegnehmen", "löst Plusaufgaben handelnd", "löst Minusaufgaben handelnd", "löst Aufgaben mit Material", "löst einfache Aufgaben zunehmend ohne Material", "nutzt Rechenstrategien", "rechnet nicht ausschließlich zählend", "erklärt Rechenwege mit Unterstützung"]),
        subarea("math", "zahlenraum", "Orientierung im Zahlenraum", ["mathematik", "zahlenraum", "zahlverstaendnis"], ["orientiert sich bis 10", "orientiert sich bis 20", "orientiert sich bis 100", "liest Zahlen", "schreibt Zahlen", "ordnet Zahlen", "nutzt Zehner und Einer"]),
        subarea("math", "sachrechnen", "Sachrechnen / Größen optional", ["mathematik", "sachrechnen"], ["erfasst einfache Sachsituationen", "nutzt passende Größenbegriffe", "ordnet einfache Rechenfragen zu", "vergleicht Längen oder Mengen handelnd"])
      ],
      suggestionRules: [
        rule("math_praenumerisch", "math", "mathematische Vorläuferfähigkeiten", ["praenumerisch"], {
          stand: "_ zeigt bei grundlegenden mathematischen Vorläuferfähigkeiten noch Unsicherheiten. Beim Sortieren, Vergleichen, Fortsetzen von Mustern oder Verwenden von Raumbegriffen benötigt #er/sie# Unterstützung.",
          goals: "_ festigt mathematische Vorläuferfähigkeiten, indem #er/sie# Mengen, Formen, Muster und Raumbeziehungen zunehmend sicher erkennt, ordnet und beschreibt.",
          measures: "_ arbeitet regelmäßig mit handelndem Material. Sortier-, Muster-, Zuordnungs- und Raumlageübungen werden kleinschrittig angeboten und sprachlich begleitet.",
          evaluation: "Die Entwicklung wird durch Beobachtungen in handelnden Aufgaben, kurze Arbeitsproben und wiederholte Aufgabenformate überprüft."
        }),
        rule("math_zahlverstaendnis", "math", "Zahlverständnis", ["mengen", "zaehlen", "ziffern", "zahlbeziehungen", "zahlverstaendnis", "zahlenraum"], {
          stand: "_ erkennt einzelne Zahlen oder Mengen bereits, benötigt jedoch noch Unterstützung beim sicheren Zuordnen, Vergleichen und Ordnen im bekannten Zahlenraum.",
          goals: "_ erweitert #sein/ihr# Zahlverständnis, indem #er/sie# Mengen und Zahlen zunehmend sicher zuordnet, vergleicht und ordnet.",
          measures: "_ übt mit strukturiertem Material wie Plättchen, Würfelbildern, Zehnerfeld und Zahlenstrahl. Mengen werden handelnd, bildlich und symbolisch miteinander verknüpft.",
          evaluation: "Die Entwicklung wird durch kurze Mengen-Zahl-Aufgaben, Beobachtungen beim handelnden Arbeiten und den Vergleich ausgewählter Arbeitsproben überprüft."
        }),
        rule("math_rechnen", "math", "Rechnen bis 20", ["rechnen", "bis20", "zerlegung"], {
          stand: "_ löst einfache Plus- und Minusaufgaben mit Unterstützung. Beim Nutzen von Zahlzerlegungen, beim Ergänzen und beim Übergang vom zählenden zum strategischen Rechnen braucht #er/sie# Übung.",
          goals: "_ festigt Plus- und Minusaufgaben im Zahlenraum bis 20, indem #er/sie# Zahlzerlegungen und einfache Rechenstrategien zunehmend sicher nutzt.",
          measures: "_ erhält kurze Übungsphasen mit Anschauungsmaterial, Zehnerfeld, Zahlenstrahl und Zerlegungskarten. Rechenwege werden versprachlicht und wiederkehrende Aufgabenformate gesichert.",
          evaluation: "Die Entwicklung wird durch kurze Kopfrechenphasen, Rechenproben und Beobachtungen zur Strategieanwendung überprüft."
        })
      ]
    },

    learning: simpleArea("learning", "Lern- und Leistungsverhalten", "learning", [
      ["orientierung", "Orientierung und Selbstständigkeit", ["orientierung", "selbststaendigkeit"], ["findet sich im Klassenraum zurecht", "kennt Abläufe des Schultages", "findet benötigte Arbeitsmittel"]],
      ["aufgabenbeginn", "Aufgabenbeginn", ["aufgabenbeginn", "selbststaendigkeit"], ["beginnt Aufgaben nach Aufforderung", "beginnt Aufgaben selbstständig", "fragt bei Unklarheiten nach"]],
      ["ausdauer", "Konzentration und Ausdauer", ["ausdauer", "konzentration"], ["bleibt bei einer Aufgabe", "arbeitet über eine kurze Zeit konzentriert", "arbeitet über eine längere Zeit konzentriert", "beendet begonnene Aufgaben"]],
      ["organisation", "Arbeitsorganisation", ["organisation"], ["arbeitet sorgfältig", "hält Ordnung am Arbeitsplatz", "setzt Korrekturen um", "arbeitet nach Rückmeldung weiter"]],
      ["mitarbeit", "Motivation und Mitarbeit", ["mitarbeit"], ["beteiligt sich am Unterricht", "meldet sich passend", "arbeitet mit Partnerkindern zusammen", "präsentiert Arbeitsergebnisse mit Unterstützung"]]
    ], [
      rule("learning_start", "learning", "Aufgabenbeginn und Ausdauer", ["aufgabenbeginn", "ausdauer", "selbststaendigkeit"], {
        stand: "_ benötigt im Unterricht noch Unterstützung, um Aufgaben selbstständig zu beginnen und über eine vereinbarte Arbeitszeit bei der Aufgabe zu bleiben. Bei Schwierigkeiten helfen klare nächste Handlungsschritte.",
        goals: "_ beginnt eine überschaubare Aufgabe nach kurzer Orientierung zunehmend selbstständig und arbeitet für eine vereinbarte Zeit weiter.",
        measures: "_ erhält kurze, klar strukturierte Arbeitsaufträge, sichtbare Zwischenschritte und regelmäßige positive Rückmeldung. Eine Aufgabenkarte, ein Timer oder eine kurze Startbegleitung unterstützen #ihn/sie#.",
        evaluation: "Die Entwicklung wird durch Unterrichtsbeobachtung, kurze Notizen zu Arbeitsphasen und den Vergleich ausgewählter Arbeitsergebnisse überprüft."
      }),
      rule("learning_orga", "learning", "Arbeitsorganisation", ["organisation"], {
        stand: "_ benötigt noch Unterstützung, um benötigte Materialien bereitzulegen, den Arbeitsplatz zu ordnen und Arbeitsschritte in sinnvoller Reihenfolge auszuführen.",
        goals: "_ organisiert den Arbeitsplatz und benötigte Materialien mit Hilfe eines festen Ablaufs zunehmend selbstständig.",
        measures: "_ nutzt eine Material- und Ablaufkarte. Arbeitsphasen werden durch feste Rituale, kurze Erinnerungen und eine gemeinsame Kontrolle am Ende unterstützt.",
        evaluation: "Die Entwicklung wird durch Beobachtung der Arbeitsorganisation und kurze Checklisten überprüft."
      })
    ]),

    emotional: simpleArea("emotional", "Emotionalität, Sozialverhalten", "emotional", [
      ["selbstwahrnehmung", "Selbstwahrnehmung und Selbstsicherheit", ["selbstwahrnehmung"], ["nimmt eigene Stärken wahr", "traut sich Aufgaben zu", "äußert eigene Bedürfnisse angemessen", "spricht in vertrauten Situationen"]],
      ["selbstkontrolle", "Selbstkontrolle", ["selbstkontrolle", "regeln"], ["wartet, bis #er/sie# an der Reihe ist", "kontrolliert Impulse", "akzeptiert ein Nein", "reagiert auf Kritik zunehmend angemessen", "hält Klassenregeln ein"]],
      ["frustration", "Frustrationstoleranz", ["frustration", "regulation"], ["hält Enttäuschungen aus", "arbeitet nach Misserfolg weiter", "akzeptiert alternative Handlungsvorschläge", "bleibt in schwierigen Situationen ansprechbar"]],
      ["kontakt", "Kontakt- und Konfliktverhalten", ["kontakt", "konflikt", "gruppe"], ["löst Konflikte mit Unterstützung", "nimmt Kontakt zu anderen Kindern auf", "arbeitet mit anderen zusammen", "nimmt Rücksicht", "akzeptiert Grenzen anderer", "holt sich Hilfe bei Konflikten"]]
    ], [
      rule("emotional_selfcontrol", "emotional", "Selbstkontrolle / Regelverhalten", ["selbstkontrolle", "regeln"], {
        stand: "_ benötigt in Unterrichts- und Gruppensituationen noch Unterstützung, um abzuwarten, eigene Impulse zu steuern und vereinbarte Regeln einzuhalten.",
        goals: "_ übt, in wiederkehrenden Situationen abzuwarten, sich an vereinbarte Regeln zu erinnern und eigene Impulse zunehmend besser zu steuern.",
        measures: "_ erhält klare, vorhersehbare Regeln, kurze Erinnerungen und positive Rückmeldung bei gelungenem Verhalten. Vereinbarte Stoppsignale und kurze Reflexionsgespräche unterstützen #ihn/sie#.",
        evaluation: "Die Entwicklung wird durch Unterrichtsbeobachtung, kurze Verhaltensnotizen und regelmäßige Rückmeldungen im Team überprüft."
      }),
      rule("emotional_frustration", "emotional", "Umgang mit Misserfolg", ["frustration", "regulation"], {
        stand: "_ reagiert bei Misserfolg oder Veränderungen noch schnell verunsichert oder angespannt. In solchen Situationen benötigt #er/sie# Unterstützung, um handlungsfähig zu bleiben.",
        goals: "_ entwickelt zunehmend Strategien, um mit Fehlern, Wartezeiten und schwierigen Aufgaben angemessener umzugehen.",
        measures: "_ erhält vorbereitende Hinweise, überschaubare Teilschritte, ermutigende Rückmeldung und vereinbarte Hilfestrategien. Fehler werden als Lernchance besprochen.",
        evaluation: "Die Entwicklung wird durch Beobachtungen in Anforderungssituationen, kurze Reflexionsgespräche und Rückmeldungen der beteiligten Lehrkräfte überprüft."
      })
    ]),

    speech: simpleArea("speech", "Sprache / Kommunikation", "speech", [
      ["artikulation", "Aussprache / Artikulation", ["aussprache", "artikulation"], ["einzelne Laute werden noch nicht sicher gebildet", "Laute oder Silben werden teilweise ausgelassen", "Äußerungen sind nicht immer verständlich"]],
      ["phonologie", "Lautwahrnehmung / phonologische Bewusstheit", ["phonologie", "laute", "silben"], ["Reime werden noch nicht sicher erkannt", "Anlaute werden noch nicht sicher herausgehört", "ähnlich klingende Laute werden noch verwechselt"]],
      ["wortschatz", "Wortschatz / Wortbedeutung", ["wortschatz", "wortbedeutung"], ["passende Wörter werden noch nicht sicher gefunden", "Fachbegriffe werden noch nicht sicher verwendet", "Wortbedeutungen werden noch verwechselt"]],
      ["verstehen", "Sprachverständnis / Arbeitsaufträge", ["sprachverstaendnis", "arbeitsauftraege"], ["mündliche Aufträge werden noch nicht sicher verstanden", "mehrteilige Aufträge müssen gegliedert werden", "Rückfragen werden noch nicht sicher gestellt"]],
      ["grammatik", "Grammatik / Satzbildung", ["grammatik", "satzbildung"], ["Satzstrukturen sind noch nicht sicher aufgebaut", "Verbformen werden noch nicht sicher genutzt", "Wortstellung ist noch unsicher"]],
      ["erzaehlen", "Erzählfähigkeit / Versprachlichen", ["erzaehlen", "versprachlichen"], ["Erzählungen sind noch nicht sicher geordnet", "Abläufe werden noch nicht vollständig beschrieben", "Lösungswege werden noch nicht sicher versprachlicht"]],
      ["kommunikation", "Kommunikation / Gesprächsverhalten", ["kommunikation", "gespraech"], ["Gesprächsregeln werden noch nicht sicher eingehalten", "Beiträge passen noch nicht immer zum Gespräch", "Rückfragen werden noch nicht sicher gestellt"]],
      ["stimme", "Stimme / Sprechweise", ["stimme", "sprechweise"], ["Lautstärke ist noch nicht situationspassend", "Sprechtempo und Verständlichkeit sind noch nicht sicher abgestimmt", "Betonung ist noch nicht passend"]],
      ["redefluss", "Redefluss / Wortfindung", ["redefluss", "wortfindung"], ["passende Wörter werden noch nicht rechtzeitig gefunden", "Pausen und Satzabbrüche treten noch auf", "Gedanken werden beim Sprechen noch nicht sicher geordnet"]]
    ], [
      rule("speech_understanding", "speech", "Sprachverständnis / Arbeitsaufträge", ["sprachverstaendnis", "anweisungen"], {
        stand: "_ benötigt noch Unterstützung, um mündliche Arbeitsaufträge sicher zu verstehen und in passende Handlungsschritte umzusetzen.",
        goals: "_ versteht kurze, klar formulierte Arbeitsaufträge zunehmend sicher und setzt sie mit weniger Unterstützung um.",
        measures: "Arbeitsaufträge werden kurz, eindeutig und bei Bedarf zusätzlich visualisiert. _ wiederholt zentrale Handlungsschritte und erhält Zeit zur Umsetzung.",
        evaluation: "Die Entwicklung wird durch Beobachtung bei mündlichen Arbeitsaufträgen und kurze Rückmeldungen zu erledigten Handlungsschritten überprüft."
      }),
      rule("speech_words", "speech", "Wortschatz / Wortbedeutung", ["wortschatz", "satzbildung", "grammatik"], {
        stand: "_ verfügt über einen wachsenden Wortschatz, benötigt jedoch noch Unterstützung, um passende Begriffe zu finden und vollständige Sätze zu bilden.",
        goals: "_ erweitert den aktiven Wortschatz und formuliert eigene Aussagen zunehmend in vollständigen, verständlichen Sätzen.",
        measures: "_ erhält Sprechanlässe mit Bildmaterial, Satzanfängen, Wortkarten und wiederkehrenden Satzmustern. Neue Begriffe werden handelnd, bildlich und sprachlich gesichert.",
        evaluation: "Die Entwicklung wird durch Beobachtungen in Gesprächssituationen, kurze Sprachproben und Dokumentation neuer Begriffe überprüft."
      })
    ]),

    motor: simpleArea("motor", "Motorik", "motor", [
      ["grobmotorik", "Grobmotorik", ["grobmotorik"], ["bewegt sich sicher im Raum", "stoppt Bewegung auf Signal", "balanciert", "hält Gleichgewicht"]],
      ["feinmotorik", "Feinmotorik", ["feinmotorik"], ["nutzt beide Hände koordiniert", "schneidet entlang einer Linie", "klebt sachgemäß", "faltet mit Unterstützung", "öffnet und schließt Materialien"]],
      ["graphomotorik", "Graphomotorik", ["graphomotorik"], ["hält den Stift angemessen", "führt Linien nach", "schreibt Buchstaben formklar", "hält Lineatur ein", "schreibt in angemessener Größe"]],
      ["planung", "Bilaterale Koordination / Handlungsplanung", ["koordination", "handlungsplanung"], ["plant einfache Bewegungs- oder Arbeitsschritte", "setzt mehrteilige motorische Aufträge um"]]
    ], [
      rule("motor_graph", "motor", "Graphomotorik", ["graphomotorik"], {
        stand: "_ benötigt beim Schreiben, Nachspuren und Einhalten der Lineatur noch Unterstützung. Stiftführung und formklare Wiedergabe gelingen noch wechselnd sicher.",
        goals: "_ verbessert #seine/ihre# graphomotorische Sicherheit, indem #er/sie# Linien, Formen, Buchstaben und Zahlen zunehmend kontrolliert und formklar ausführt.",
        measures: "_ erhält kurze graphomotorische Übungen, Nachspuraufgaben, Schwungübungen und Schreibanlässe mit klarer Lineatur. Auf entlastete Stifthaltung und kurze Übungsphasen wird geachtet.",
        evaluation: "Die Entwicklung wird durch Vergleich ausgewählter Schreibproben, Beobachtung der Stifthaltung und kurze graphomotorische Aufgaben überprüft."
      })
    ]),

    perception: simpleArea("perception", "Wahrnehmung", "perception", [
      ["visuomotorik", "Visuomotorische Koordination", ["visuomotorik", "auge", "hand"], ["Linien werden noch nicht sicher nachgespurt.", "Punkte werden noch nicht zuverlässig verbunden.", "Begrenzungen werden beim Ausmalen noch überschritten.", "Schneiden entlang einer Linie benötigt noch Unterstützung.", "Auge und Hand sind bei Schreib- oder Schneideaufgaben noch nicht sicher abgestimmt.", "Bei visuomotorischen Aufgaben geht die Linie noch leicht verloren.", "Vergrößerte Vorlagen unterstützen die Orientierung.", "Einfache Formen werden mit Unterstützung nachgezeichnet."]],
      ["figur_grund", "Figur-Grund-Wahrnehmung", ["figur", "grund", "suchaufgaben"], ["Wichtige Elemente werden in unruhigen Bildern noch nicht sicher erkannt.", "Gesuchte Informationen werden auf Arbeitsblättern noch nicht zuverlässig gefunden.", "Überlagerte Formen werden noch unsicher unterschieden.", "Eine Linie zwischen anderen Linien wird noch unsicher verfolgt.", "In visuell unruhigem Material geht die Orientierung noch leicht verloren.", "Reduzierte Vorlagen sind noch hilfreich.", "Markierungen oder Abdeckhilfen erleichtern das Auffinden relevanter Informationen.", "Relevante Informationen werden mit Unterstützung hervorgehoben."]],
      ["konstanz", "Wahrnehmungskonstanz", ["konstanz", "form", "farbe", "groesse"], ["Formen werden bei veränderter Größe noch nicht sicher wiedererkannt.", "Farben werden unabhängig vom Gegenstand noch nicht zuverlässig zugeordnet.", "Formen werden trotz veränderter Darstellung noch unsicher erkannt.", "Ähnliche Formen werden noch nicht durchgängig sicher unterschieden.", "Gleiche Merkmale werden in unterschiedlichen Darstellungen noch nicht sicher zugeordnet.", "Klare Vergleichsbeispiele sind noch notwendig.", "Form, Farbe und Größe werden zunehmend getrennt beachtet.", "Ähnliche Formen oder Zeichen werden noch häufig verwechselt."]],
      ["raum_lage", "Raum-Lage-Wahrnehmung", ["raumlage", "rechts", "links"], ["Rechts und links werden noch nicht durchgängig sicher unterschieden.", "Gedrehte oder veränderte Formen werden noch unsicher wiedererkannt.", "Ähnlich aussehende Buchstaben oder Zahlen werden noch verwechselt.", "Zeichen wie b/d, p/q oder 6/9 werden noch nicht sicher unterschieden.", "Raum-Lage-Begriffe werden noch nicht zuverlässig zugeordnet.", "Aufgaben mit Drehungen oder Spiegelungen benötigen noch Unterstützung.", "Lageveränderungen in Bildern oder Zeichen werden noch nicht sicher erkannt.", "Farbige Markierungen für rechts und links geben Orientierung."]],
      ["raeumliche_beziehungen", "Räumliche Beziehungen", ["raeumlich", "beziehungen", "arbeitsblatt"], ["Geforderte Stellen im Heft, Buch oder auf dem Arbeitsblatt werden noch nicht sicher gefunden.", "Die Orientierung auf einer Arbeitsseite gelingt noch nicht durchgängig sicher.", "Einfache räumliche Beziehungen auf Bildern werden noch unsicher angegeben.", "Muster werden noch nicht zuverlässig nachgelegt.", "Punktebilder werden noch nicht sicher übertragen.", "Bei komplexen Arbeitsblättern geht die Orientierung noch leicht verloren.", "Klare Seitenstruktur und Markierungen sind noch notwendig.", "Schritt-für-Schritt-Orientierung auf der Seite unterstützt."]],
      ["auditive_differenzierung", "Auditive Differenzierung", ["auditiv", "differenzierung"], ["Verschiedene Geräusche werden noch nicht sicher unterschieden.", "Laut und leise werden noch nicht durchgängig sicher unterschieden.", "Kurze und lange Laute oder Töne werden noch unsicher unterschieden.", "Ähnlich klingende Laute werden noch häufig verwechselt.", "Unterschiede zwischen ähnlich klingenden Wörtern werden noch nicht zuverlässig gehört.", "Auditiv ähnliche Informationen benötigen noch Wiederholung.", "Deutliche Aussprache und langsames Sprechtempo unterstützen.", "Hintergrundgeräusche erschweren das genaue Hinhören."]],
      ["auditive_gliederung", "Auditive Gliederung / phonologische Wahrnehmung", ["auditiv", "phonologisch", "silben", "laute"], ["Anlaute werden noch nicht sicher herausgehört.", "Endlaute werden noch nicht sicher herausgehört.", "Inlaute werden mit Unterstützung herausgehört.", "Wörter werden noch nicht zuverlässig in Silben gegliedert.", "Wörter werden mit Unterstützung in einzelne Laute zerlegt.", "Laute werden im Wort noch nicht sicher lokalisiert.", "Silben werden rhythmisch noch nicht durchgängig sicher mitgeklatscht.", "Das Durchgliedern von Wörtern benötigt noch Unterstützung."]],
      ["auditive_identifikation", "Auditive Identifikation", ["auditiv", "identifikation", "reim"], ["Reimwörter werden noch nicht sicher erkannt.", "Wörter mit gleichem Anlaut werden noch nicht zuverlässig gefunden.", "Wörter mit gleichem Auslaut werden noch nicht sicher gefunden.", "Wiederkehrende Lautmuster werden noch nicht sicher erkannt.", "Wörter werden nach Klangmerkmalen noch unsicher unterschieden.", "Gleiche Lautanfänge werden mit Unterstützung erkannt.", "Reim- und Lautspiele unterstützen bei der Zuordnung.", "Passende Wörter zu einem Lautbeispiel werden mit Unterstützung gefunden."]],
      ["auditives_gedaechtnis", "Auditives Gedächtnis", ["auditiv", "gedaechtnis", "merkfaehigkeit"], ["Kurze Sätze werden noch nicht zuverlässig nachgesprochen.", "Reime oder kurze Verse werden noch nicht sicher behalten.", "Einfache Rhythmen werden noch nicht sicher nachgeklatscht.", "Kurze mündliche Arbeitsaufträge werden noch nicht sicher gemerkt.", "Längere mündliche Informationen benötigen noch Wiederholung.", "Bei mehrteiligen mündlichen Aufträgen gehen einzelne Schritte noch verloren.", "Visualisierte Aufträge unterstützen beim Behalten.", "Gehörte Informationen werden mit Unterstützung wiedergegeben."]],
      ["taktil_kinaesthetisch", "Taktil-kinästhetische Wahrnehmung", ["taktil", "kinaesthetisch", "koerper"], ["Berührungen am eigenen Körper werden noch nicht sicher wahrgenommen.", "Berührungen werden noch nicht sicher als angenehm oder unangenehm benannt.", "Berührungen am eigenen Körper werden noch unsicher lokalisiert.", "Formen oder Gegenstände werden durch Tasten noch nicht zuverlässig erkannt.", "Unterschiedliche Materialien werden noch unsicher wahrgenommen.", "Taktile Eindrücke benötigen beim Benennen noch Unterstützung.", "Auf bestimmte Materialien oder Berührungen reagiert _ empfindlich.", "Klar angekündigte taktile Erfahrungen geben Sicherheit."]],
      ["vestibulaer", "Vestibuläre Wahrnehmung", ["vestibulaer", "gleichgewicht", "bewegung"], ["Das Gleichgewicht wird in einfachen Bewegungssituationen noch nicht sicher gehalten.", "Balancieren auf einer Linie gelingt noch unsicher.", "Kurzzeitiges Stehen auf einem Bein gelingt noch nicht sicher.", "Hüpfen auf einem Bein gelingt noch mit Unsicherheit.", "Treppen oder Höhenunterschiede benötigen noch Unterstützung.", "Bei Gleichgewichtsaufgaben wirkt _ noch unsicher.", "Vestibuläre Reize werden gesucht oder vermieden.", "Klar strukturierte Bewegungsangebote unterstützen."]]
    ], perceptionTextBlockSpecs.map((block) => rule(`perception_${slug(block.title)}`, "perception", block.title, block.tags, {
      stand: block.istStand,
      goals: block.ziele[0],
      measures: block.massnahmen[0],
      evaluation: block.evaluation[0]
    }))),

    cognition: simpleArea("cognition", "Kognition", "cognition", [
      ["aufmerksamkeit", "Aufmerksamkeit / Konzentration", ["aufmerksamkeit", "konzentration"], ["verfolgt das Unterrichtsgeschehen", "richtet Aufmerksamkeit auf eine Tätigkeit", "arbeitet trotz Ablenkung weiter", "bleibt bei einer Aufgabe", "nimmt Arbeit nach Unterbrechung wieder auf", "führt Aufgaben zu Ende"]],
      ["gedaechtnis", "Kurzzeit- und Langzeitgedächtnis", ["merkfaehigkeit", "gedaechtnis"], ["merkt sich kurze Arbeitsaufträge", "merkt sich einfache Reihenfolgen", "ruft geübte Inhalte ab"]],
      ["denken", "Problemlösen / Übertragung", ["problemloesen", "transfer"], ["erkennt Zusammenhänge", "ordnet Bilder oder Gegenstände sinnvoll", "wendet Bekanntes auf neue Aufgaben an", "plant einfache Handlungsschritte", "überprüft Arbeitsergebnisse mit Hilfe"]]
    ], [
      rule("cognition_attention", "cognition", "Aufmerksamkeit / Konzentration", ["aufmerksamkeit", "konzentration"], {
        stand: "_ benötigt noch Unterstützung, um die Aufmerksamkeit über eine kurze Zeit auf eine Aufgabe zu richten und nach Unterbrechungen wieder zur Arbeit zurückzufinden.",
        goals: "_ hält die Aufmerksamkeit in überschaubaren Arbeitsphasen zunehmend aufrecht und findet mit vereinbarten Hilfen zur Aufgabe zurück.",
        measures: "_ arbeitet mit klaren Teilschritten, kurzen Arbeitsphasen, visuellen Hinweisen und vereinbarten Rückmeldesignalen. Ablenkungen werden reduziert und Arbeitserfolge zeitnah rückgemeldet.",
        evaluation: "Die Entwicklung wird durch Unterrichtsbeobachtung, kurze Konzentrationsnotizen und den Vergleich erledigter Aufgaben überprüft."
      })
    ]),

    otherSubjects: {
      id: "otherSubjects",
      label: "Weitere Fächer",
      rasterRow: "otherSubjects",
      freeMode: true,
      subareas: [],
      suggestionRules: []
    },

    hsu: {
      id: "hsu",
      label: "ggf. Herkunftssprachlicher Unterricht (HSU)",
      rasterRow: "hsu",
      freeMode: true,
      hsuHint: "Auszufüllen, falls herkunftssprachlicher Unterricht erteilt wird. Die Angaben sollten in Absprache mit der HSU-Lehrkraft erfolgen.",
      subareas: [],
      suggestionRules: []
    }
  };

  function simpleArea(id, label, rasterRow, subareaSpecs, rules) {
    return {
      id,
      label,
      rasterRow,
      subareas: subareaSpecs.map(([shortId, subLabel, tags, competencies]) => subarea(id, shortId, subLabel, tags, competencies)),
      suggestionRules: rules
    };
  }

  function rule(id, rasterRow, label, conditionTags, text) {
    return {
      id,
      rasterRow,
      label,
      conditionTags,
      istStandTemplate: text.stand,
      zielTemplate: text.goals,
      massnahmenTemplate: text.measures,
      evaluationTemplate: text.evaluation
    };
  }

  return {
    appMeta,
    textModuleMeta,
    textModules,
    storageKey: "foerderplanAssistent:drafts:v2",
    customBlocksKey: "foerderplanAssistent:customBlocks:v1",
    childRecordsKey: "foerderplanAssistent:childRecords:v1",
    columns,
    columnLabels,
    ratingOptions,
    priorityOptions,
    quickStatusOptions,
    competenceHints,
    continuationStatuses,
    textBlocks,
    agreementTextBlocks,
    developmentRows,
    subjectRows,
    competencyAreas
  };
})();
