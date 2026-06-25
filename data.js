window.FOERDERPLAN_DATA = (() => {
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
    return {
      id: `${areaId}_${id}`,
      shortId: id,
      label,
      tags: tagList,
      competencies: competencies.map((item) => makeItem(areaId, id, item, tagList))
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
      ["aussprache", "Artikulation / Aussprache", ["aussprache"], ["spricht verständlich", "bildet Laute zunehmend korrekt"]],
      ["wortschatz", "Wortschatz", ["wortschatz"], ["verwendet Nomen", "verwendet Verben", "verwendet Adjektive", "verwendet passende Artikel"]],
      ["satzbau", "Satzbildung / Grammatik", ["satzbildung", "grammatik"], ["bildet einfache Sätze", "bildet vollständige Sätze", "nutzt passende Wortstellung"]],
      ["verstehen", "Sprach- und Anweisungsverständnis", ["sprachverstaendnis", "anweisungen"], ["versteht einfache Anweisungen", "versteht mehrteilige Anweisungen", "fragt nach, wenn etwas unklar ist"]],
      ["gespraech", "Gesprächsverhalten / Erzählen", ["gespraech", "erzaehlen"], ["antwortet sachbezogen", "hört Gesprächspartnern zu", "wartet Gesprächsregeln ab", "erzählt zu Bildern", "beschreibt Gegenstände oder Situationen"]]
    ], [
      rule("speech_understanding", "speech", "Sprachverständnis / Anweisungen", ["sprachverstaendnis", "anweisungen"], {
        stand: "_ benötigt noch Unterstützung, um mündliche Arbeitsaufträge sicher zu verstehen und in passende Handlungsschritte umzusetzen.",
        goals: "_ versteht kurze, klar formulierte Arbeitsaufträge zunehmend sicher und setzt sie mit weniger Unterstützung um.",
        measures: "Arbeitsaufträge werden kurz, eindeutig und bei Bedarf zusätzlich visualisiert. _ wiederholt zentrale Handlungsschritte und erhält Zeit zur Umsetzung.",
        evaluation: "Die Entwicklung wird durch Beobachtung bei mündlichen Arbeitsaufträgen und kurze Rückmeldungen zu erledigten Handlungsschritten überprüft."
      }),
      rule("speech_words", "speech", "Wortschatz / Satzbildung", ["wortschatz", "satzbildung", "grammatik"], {
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
      ["visuell", "Visuelle Wahrnehmung", ["visuell", "wahrnehmung"], ["erkennt gleiche Formen", "erkennt Formen in unterschiedlicher Größe", "findet Bildausschnitte", "erkennt Veränderungen in Bildern", "verfolgt Linien mit den Augen"]],
      ["raumlage", "Raum-Lage-Wahrnehmung / Orientierung", ["raumlage", "arbeitsblatt"], ["unterscheidet ähnliche Zeichen oder Buchstaben", "erkennt rechts und links", "findet Stellen auf Arbeitsblättern", "orientiert sich auf einer Buchseite oder einem Arbeitsblatt"]],
      ["auditiv", "Auditive Wahrnehmung / Merkfähigkeit", ["auditiv", "merkfaehigkeit"], ["unterscheidet Geräusche", "unterscheidet ähnlich klingende Laute", "hört Anlaute", "merkt sich kurze Aufträge", "merkt sich Reihenfolgen"]],
      ["muster", "Formen, Muster und Übertragung", ["muster"], ["überträgt Muster", "legt Muster nach", "erkennt Formen in Anordnungen"]]
    ], [
      rule("perception_visual", "perception", "visuelle Wahrnehmung / Raumlage", ["visuell", "raumlage", "arbeitsblatt"], {
        stand: "_ benötigt noch Unterstützung, um Formen, Zeichen, Raumlagen und Anordnungen sicher zu unterscheiden. Auf Arbeitsblättern fällt es #ihm/ihr# teilweise schwer, sich zu orientieren.",
        goals: "_ stärkt die visuelle Wahrnehmung und Raum-Lage-Orientierung, indem #er/sie# Formen, Zeichen und Positionen zunehmend sicher erkennt, unterscheidet und zuordnet.",
        measures: "_ erhält Such-, Zuordnungs-, Muster- und Nachspuraufgaben. Arbeitsblätter werden übersichtlich gestaltet und wichtige Stellen bei Bedarf markiert.",
        evaluation: "Die Entwicklung wird durch Beobachtung bei Arbeitsblättern, kurze Wahrnehmungsaufgaben und den Vergleich ausgewählter Arbeitsergebnisse überprüft."
      })
    ]),

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
    storageKey: "foerderplanAssistent:drafts:v2",
    columns,
    columnLabels,
    ratingOptions,
    priorityOptions,
    developmentRows,
    subjectRows,
    competencyAreas
  };
})();
