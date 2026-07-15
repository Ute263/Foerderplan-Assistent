/*
Förderplanung Direkt
© 2026 Ute Holzschneider-Riedl. Alle Rechte vorbehalten.

Fachlich vorbereiteter Endkatalog für den Förderplan-Composer.
Diese Datei liefert Inhalte für Vorschläge und ändert keine Druck-, Speicher- oder Backup-Logik.

Wichtig:
- keine fachlichen Inhalte frei ergänzen
- vorhandene Förderketten, Gruppensätze und Bausteine nur strukturieren
- fehlende Inhalte sichtbar markieren
*/

window.FOERDERPLAN_ENDKATALOG = (() => {
  const gradeBands = ["Klasse 1/2", "Klasse 3/4"];
  const areas = [
    "Emotionalität, Sozialverhalten",
    "Lern- und Leistungsverhalten",
    "Sprache / Kommunikation",
    "Motorik",
    "Wahrnehmung",
    "Kognition",
    "Deutsch",
    "Mathematik",
    "Weitere Fächer",
    "ggf. Herkunftssprachlicher Unterricht"
  ];
  const ratings = ["gesichert", "teilweise unsicher", "unsicher"];
  const missingText = "Inhalt fehlt: bitte fachlich ergänzen.";

  const allowedPlaceholders = [
    "_",
    "#er/sie#",
    "#Er/Sie#",
    "#ihm/ihr#",
    "#sein/ihr#",
    "#seine/ihre#",
    "#ihn/sie#"
  ];

  const styleGuide = {
    klassenstufen: {
      primary: gradeBands,
      note: "Schuleingang und flexible Übergänge werden unter Klasse 1/2 mitgeführt."
    },
    bausteine: [
      "neutral-beobachtend",
      "stärkenorientiert, wo möglich",
      "förderplanbezogen",
      "konkret",
      "unterrichtsnah",
      "überprüfbar",
      "ohne Diagnosen",
      "ohne Schuldzuweisungen"
    ],
    ziele: [
      "kurz",
      "konkret",
      "überprüfbar",
      "möglichst ohne Pronomen, wenn es besser klingt"
    ],
    massnahmen: [
      "konkret im Unterricht umsetzbar",
      "direkt passend zum Ziel",
      "keine allgemeinen Floskeln"
    ],
    evaluation: [
      "beobachtbar oder überprüfbar",
      "kurz",
      "passend zu Ziel und Maßnahme"
    ],
    noGo: [
      "faul",
      "verweigert",
      "stört ständig",
      "unmotiviert",
      "kann nicht",
      "massiv auffällig",
      "mangelnde Erziehung",
      "immer",
      "nie",
      "Diagnosebegriffe ohne Grundlage"
    ]
  };

  const deutsch12LesenZuordnung = {
    "Laut-Buchstaben-Zuordnung": "Lesen auf Wort- und Satzebene",
    "Silben": "Lesen auf Wort- und Satzebene",
    "Wörter lesen": "Lesen auf Wort- und Satzebene",
    "Sätze lesen": "Lesen auf Wort- und Satzebene",
    "Leseflüssigkeit/Vorlesen": "Lesen auf Wort- und Satzebene",
    "Texte verstehen": "Leseverständnis",
    "Lautgetreues Schreiben": "Lautgetreues Schreiben",
    "Abschreiben": "Abschreiben und Kontrollieren",
    "Rechtschreibgrundlagen": "Rechtschreibgrundlagen",
    "Großschreibung/Nomen": "Rechtschreibgrundlagen",
    "Eigene Sätze schreiben": "Eigene Sätze schreiben"
  };

  const deutsch34LesenZuordnung = {
    "Leseflüssigkeit": "Leseflüssigkeit",
    "Texte verstehen": "Texte verstehen",
    "Lesestrategien": "Lesestrategien",
    "Schreiben eigener Texte": "Eigene Texte schreiben",
    "Texte planen/überarbeiten": "Eigene Texte schreiben",
    "Rechtschreibstrategien": "Rechtschreibstrategien anwenden",
    "Abschreiben/Kontrollieren": "Texte kontrollieren",
    "Wortarten": "Sprache untersuchen",
    "Satzglieder/Satzbau": "Sprache untersuchen"
  };

  const deutsch34NichtAlsDeutschKompetenz = new Set([
    "Arbeitsverhalten Deutsch"
  ]);

  const mathe12ZahlvorstellungThemen = new Set([
    "Zahlverständnis",
    "Mengen/Zahlen zuordnen",
    "Zahlenreihe/Zahlordnung",
    "Zahlzerlegung"
  ]);

  const mathe12RechnenThemen = new Set([
    "Addition",
    "Subtraktion",
    "Zehnerübergang",
    "Rechenstrategien",
    "Kopfrechnen"
  ]);

  const mathe34ZahlenRechnenThemen = new Set([
    "Zahlenraum und Zahlvorstellung",
    "Stellenwertverständnis",
    "Addition und Subtraktion",
    "Schriftliche Rechenverfahren",
    "Multiplikation und Division",
    "Rechenstrategien und Kopfrechnen"
  ]);

  const mathe34WeitereThemen = new Set([
    "Sachaufgaben",
    "Größen",
    "Geometrie",
    "Daten, Tabellen und Diagramme"
  ]);

  const mathe34NichtAlsMatheKompetenz = new Set([
    "Arbeitsverhalten Mathematik"
  ]);

  const endkatalogDeutsch12Lesen = [
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Lesen auf Wort- und Satzebene",
      gruppe: "Lesen Grundlagen",
      rating: "gesichert",
      istStandVarianten: [
        "_ erkennt geübte Buchstaben, Silben und Wörter zunehmend sicher.",
        "Bekannte Wörter und kurze Sätze liest _ in vertrauten Übungsformaten zunehmend sicher.",
        "Beim Lesen kurzer geübter Wörter nutzt _ Buchstaben, Silben und bekannte Wortteile zunehmend sicher."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Lesen auf Wort- und Satzebene",
      gruppe: "Lesen Grundlagen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Beim Erlesen von Buchstaben, Silben, Wörtern oder kurzen Sätzen zeigt _ noch Unsicherheiten.",
        "Geübte Wörter liest _ sicherer als neue oder längere Wörter.",
        "Kurze Sätze liest _ zunehmend genauer, braucht dabei aber noch Zeit und Orientierung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Buchstaben, Silben und Wörter sicherer erlesen.",
          massnahme: "Laut-, Silben- und Wortübungen werden regelmäßig in kurzen Lesephasen wiederholt.",
          evaluation: "Die Lesegenauigkeit bei geübten Buchstaben, Silben und Wörtern wird im Förderzeitraum beobachtet."
        },
        {
          ziel: "Kurze Sätze genauer und sinnbezogener lesen.",
          massnahme: "Kurze Satzkarten werden wiederholt gelesen, mit Bildern verbunden und inhaltlich besprochen.",
          evaluation: "Es wird überprüft, ob _ kurze Sätze zunehmend sicherer liest und deren Inhalt versteht."
        }
      ]
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Lesen auf Wort- und Satzebene",
      gruppe: "Lesen Grundlagen",
      rating: "unsicher",
      istStandVarianten: [
        "Das sichere Erlesen von Buchstaben, Silben, Wörtern oder kurzen Sätzen fällt #ihm/ihr# noch schwer.",
        "Beim Lesen verliert _ noch häufig den Zusammenhang zwischen Lauten, Silben und Wörtern.",
        "Neue Wörter und kurze Sätze kann _ noch nicht durchgängig sicher erlesen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Laut-Buchstaben-Zuordnung und Silbenstruktur beim Lesen nutzen.",
          massnahme: "Wörter werden silbisch gegliedert, mit Silbenbögen markiert und wiederholt gelesen.",
          evaluation: "Es wird beobachtet, ob _ Silben und bekannte Buchstaben beim Lesen zunehmend sicherer nutzt."
        },
        {
          ziel: "Kurze lautgetreue Wörter sicherer lesen.",
          massnahme: "Kurze Wörter werden in kleinen Portionen geübt, wiederholt gelesen und mit Bildmaterial unterstützt.",
          evaluation: "Die Lesegenauigkeit bei lautgetreuen Wörtern wird im Förderzeitraum verglichen."
        }
      ]
    },

    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Leseverständnis",
      gruppe: "Leseverstehen",
      rating: "gesichert",
      istStandVarianten: [
        "_ versteht kurze geübte Texte zunehmend sicher.",
        "Einfache Informationen aus kurzen Texten kann _ zunehmend entnehmen.",
        "Mit bekannten Textformaten kann _ einfache Fragen zum Inhalt zunehmend beantworten."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Leseverständnis",
      gruppe: "Leseverstehen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Kurze Texte versteht _ noch nicht durchgängig sicher.",
        "Einfache Informationen aus Texten entnimmt _ sicherer, wenn Bilder oder Leitfragen unterstützen.",
        "Beim Beantworten einfacher Fragen zum Text braucht _ noch Orientierung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Wichtige Informationen aus kurzen Texten entnehmen.",
          massnahme: "Texte werden mit Bildern, Leitfragen und kurzen Zwischenstopps bearbeitet.",
          evaluation: "Bearbeitete Leseaufgaben werden im Förderzeitraum verglichen."
        },
        {
          ziel: "Einfache Fragen zum Text beantworten.",
          massnahme: "Fragen werden vor und nach dem Lesen besprochen und wichtige Textstellen gemeinsam markiert.",
          evaluation: "Es wird überprüft, ob _ Fragen zum Text zunehmend sicherer beantwortet."
        }
      ]
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Leseverständnis",
      gruppe: "Leseverstehen",
      rating: "unsicher",
      istStandVarianten: [
        "Das sinnentnehmende Lesen kurzer Texte fällt #ihm/ihr# noch schwer.",
        "Wichtige Informationen aus kurzen Texten erkennt _ noch nicht durchgängig sicher.",
        "Beim Verstehen kurzer Texte braucht _ noch klare Vorentlastung, Bilder und gezielte Fragen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Den Inhalt kurzer Texte mit Unterstützung erschließen.",
          massnahme: "Texte werden vorentlastet, abschnittsweise gelesen und mit Bildkarten oder Leitfragen gesichert.",
          evaluation: "Es wird beobachtet, ob _ Inhalte kurzer Texte zunehmend treffender wiedergibt."
        },
        {
          ziel: "Wichtige Textinformationen erkennen und nutzen.",
          massnahme: "Wichtige Wörter oder Informationen werden gemeinsam markiert und anschließend besprochen.",
          evaluation: "Die Bearbeitung von Leseaufgaben wird auf sinnentnehmendes Lesen überprüft."
        }
      ]
    }
  ];

  const gruppenSaetzeDeutsch12Lesen = [
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      gruppe: "Lesen Grundlagen",
      istStandBundle: "Beim Erlesen von Buchstaben, Silben, Wörtern oder kurzen Sätzen zeigt _ noch Unsicherheiten.",
      hilfeSatz: "Silbische Hilfen, wiederholtes Lesen und überschaubares Wortmaterial geben #ihm/ihr# Sicherheit."
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      gruppe: "Leseverstehen",
      istStandBundle: "Kurze Texte versteht _ noch nicht durchgängig sicher und braucht klare Hilfen zur Sinnentnahme.",
      hilfeSatz: "Bilder, Leitfragen und das Markieren wichtiger Informationen unterstützen #ihn/sie# beim Textverstehen."
    }
  ];

  const endkatalogDeutsch12Schreiben = [
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Lautgetreues Schreiben",
      gruppe: "Schreiben Grundlagen",
      rating: "gesichert",
      istStandVarianten: [
        "_ verschriftlicht lautgetreue Wörter zunehmend vollständig.",
        "Beim Schreiben lautgetreuer Wörter hört _ viele Laute bereits sicher heraus.",
        "In geübten Wörtern kann _ Laute und Buchstaben zunehmend passend verbinden."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Lautgetreues Schreiben",
      gruppe: "Schreiben Grundlagen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Lautgetreue Wörter schreibt _ noch nicht immer vollständig.",
        "Beim Schreiben einzelner Wörter lässt _ noch Laute aus oder verschriftlicht sie unsicher.",
        "Wörter gelingen _ sicherer, wenn sie deutlich gesprochen und silbisch gegliedert werden."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Lautgetreue Wörter vollständiger schreiben.",
          massnahme: "Wörter werden deutlich gesprochen, geschwungen, abgehört und anschließend verschriftlicht.",
          evaluation: "Schreibproben werden daraufhin überprüft, ob Laute vollständiger verschriftlicht werden."
        },
        {
          ziel: "Laute beim Schreiben genauer abhören.",
          massnahme: "Lautgebärden, Anlautbilder und Silbenbögen werden als Schreibhilfen eingesetzt.",
          evaluation: "Es wird beobachtet, ob _ Laute beim Schreiben zunehmend genauer berücksichtigt."
        }
      ]
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Lautgetreues Schreiben",
      gruppe: "Schreiben Grundlagen",
      rating: "unsicher",
      istStandVarianten: [
        "Beim Schreiben lautgetreuer Wörter fällt es #ihm/ihr# noch schwer, Laute vollständig zu erfassen und zu verschriftlichen.",
        "Wichtige Laute, besonders Vokale, fehlen in Schreibproben noch häufig.",
        "Das genaue Abhören und Verschriften von Wörtern braucht noch klare sprachliche und visuelle Unterstützung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Wörter vor dem Schreiben genauer abhören und vollständiger verschriften.",
          massnahme: "Wörter werden in Silben gesprochen, gedehnt abgehört und mit Anlaut- oder Silbenhilfen geschrieben.",
          evaluation: "Schreibproben werden im Förderzeitraum auf vollständigere Lautverschriftung verglichen."
        },
        {
          ziel: "Vokale in Wörtern sicherer wahrnehmen und schreiben.",
          massnahme: "Silben werden deutlich gesprochen, markiert und beim Schreiben mit Silbenbögen kontrolliert.",
          evaluation: "Es wird überprüft, ob _ Vokale in geübten Wörtern zunehmend vollständiger schreibt."
        }
      ]
    },

    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Abschreiben und Kontrollieren",
      gruppe: "Schreiben kontrollieren",
      rating: "gesichert",
      istStandVarianten: [
        "_ schreibt kurze Wörter und Sätze zunehmend genauer ab.",
        "Beim Abschreiben achtet _ zunehmend auf Buchstaben, Wörter und Satzzeichen.",
        "Kurze Abschreibaufgaben kann _ mit Unterstützung zunehmend kontrollieren."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Abschreiben und Kontrollieren",
      gruppe: "Schreiben kontrollieren",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Beim Abschreiben übersieht _ noch einzelne Buchstaben, Wörter oder Satzzeichen.",
        "Kurze Abschreibaufgaben gelingen _ genauer, wenn die Vorlage übersichtlich ist.",
        "Die Kontrolle abgeschriebener Wörter und Sätze gelingt _ noch nicht immer selbstständig."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Wörter und kurze Sätze genauer abschreiben.",
          massnahme: "Die Strategie Lesen-Merken-Schreiben-Kontrollieren wird kleinschrittig eingeübt.",
          evaluation: "Abschreibübungen werden im Hinblick auf Vollständigkeit und Genauigkeit verglichen."
        },
        {
          ziel: "Abgeschriebene Wörter und Sätze kontrollieren.",
          massnahme: "Kurze Kontrollphasen mit Vorlage, Markierung oder Partnerkontrolle werden regelmäßig eingebaut.",
          evaluation: "Es wird beobachtet, ob _ Abschreibfehler zunehmend selbst erkennt und verbessert."
        }
      ]
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Abschreiben und Kontrollieren",
      gruppe: "Schreiben kontrollieren",
      rating: "unsicher",
      istStandVarianten: [
        "Das genaue Abschreiben von Wörtern und kurzen Sätzen fällt #ihm/ihr# noch schwer.",
        "Beim Abschreiben verliert _ noch häufig Buchstaben, Wörter oder Satzzeichen aus dem Blick.",
        "Eine eigene Kontrolle der abgeschriebenen Wörter gelingt _ noch nicht zuverlässig."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Kurze Abschreibaufgaben vollständig und genauer bearbeiten.",
          massnahme: "Abschreibtexte werden stark gekürzt, übersichtlich angeboten und gemeinsam kontrolliert.",
          evaluation: "Die Vollständigkeit und Genauigkeit kurzer Abschreibaufgaben wird dokumentiert."
        },
        {
          ziel: "Die Abschreibstrategie mit Unterstützung anwenden.",
          massnahme: "Lesen, merken, schreiben und kontrollieren werden mit Symbolen visualisiert und regelmäßig geübt.",
          evaluation: "Es wird überprüft, ob _ die einzelnen Schritte der Abschreibstrategie zunehmend nutzt."
        }
      ]
    },

    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Rechtschreibgrundlagen",
      gruppe: "Rechtschreibung Grundlagen",
      rating: "gesichert",
      istStandVarianten: [
        "_ beachtet einzelne geübte Rechtschreibgrundlagen zunehmend sicher.",
        "Geübte Wörter und einfache Rechtschreibregeln wendet _ in vertrauten Schreibsituationen zunehmend an.",
        "Beim Schreiben kurzer Wörter und Sätze nutzt _ erste Rechtschreibhilfen zunehmend sicher."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Rechtschreibgrundlagen",
      gruppe: "Rechtschreibung Grundlagen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Geübte Rechtschreibgrundlagen wendet _ noch nicht immer sicher an.",
        "Silben, Großschreibung, Satzanfänge oder geübte Wörter beachtet _ noch nicht durchgängig.",
        "Rechtschreibhilfen nutzt _ sicherer, wenn sie sichtbar angeboten und regelmäßig wiederholt werden."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Einfache Rechtschreibgrundlagen zunehmend nutzen.",
          massnahme: "Silben, Großschreibung, Satzanfänge und geübte Wörter werden regelmäßig markiert und wiederholt.",
          evaluation: "Schreibproben werden auf die Anwendung vereinbarter Rechtschreibgrundlagen überprüft."
        },
        {
          ziel: "Nomen und Satzanfänge zunehmend sicher großschreiben.",
          massnahme: "Nomen werden mit Artikeln gesammelt, sortiert, markiert und in kurzen Sätzen angewendet.",
          evaluation: "Es wird überprüft, ob _ Nomen und Satzanfänge in Schreibproben häufiger korrekt großschreibt."
        }
      ]
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Rechtschreibgrundlagen",
      gruppe: "Rechtschreibung Grundlagen",
      rating: "unsicher",
      istStandVarianten: [
        "Rechtschreibgrundlagen wie Silben, Großschreibung, Satzanfänge oder geübte Wörter sind noch nicht ausreichend gesichert.",
        "Beim Schreiben kurzer Wörter und Sätze berücksichtigt _ geübte Rechtschreibmerkmale noch nicht zuverlässig.",
        "Die Anwendung einfacher Rechtschreibhilfen braucht noch klare Anleitung und regelmäßige Wiederholung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Geübte Rechtschreibmerkmale in Wörtern und kurzen Sätzen beachten.",
          massnahme: "Schreibaufgaben werden auf wenige Rechtschreibmerkmale begrenzt und anschließend gezielt kontrolliert.",
          evaluation: "Schreibproben werden im Hinblick auf die vereinbarten Rechtschreibmerkmale verglichen."
        },
        {
          ziel: "Geübte Wörter sicherer schreiben.",
          massnahme: "Merkwörter und häufige Wörter werden in kleinen Portionen markiert, geschrieben und wiederholt angewendet.",
          evaluation: "Die Schreibung geübter Wörter wird im Förderzeitraum verglichen."
        }
      ]
    },

    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Eigene Sätze schreiben",
      gruppe: "Texte schreiben Grundlagen",
      rating: "gesichert",
      istStandVarianten: [
        "_ schreibt einfache eigene Sätze zunehmend verständlich.",
        "Mit bekannten Satzmustern kann _ eigene Gedanken zunehmend verschriftlichen.",
        "Kurze eigene Sätze gelingen _ besonders gut, wenn Wörter oder Bilder als Hilfe bereitstehen."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Eigene Sätze schreiben",
      gruppe: "Texte schreiben Grundlagen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Eigene Sätze formuliert _ noch nicht immer vollständig oder verständlich.",
        "Beim Schreiben eigener Sätze helfen _ Bildimpulse, Wortkarten und Satzanfänge.",
        "Eigene Gedanken kann _ besser aufschreiben, wenn der Satz vorher mündlich geplant wird."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Einfache eigene Sätze verständlich schreiben.",
          massnahme: "Bildimpulse, Wortkarten und Satzanfänge werden als Schreibhilfen genutzt.",
          evaluation: "Eigene Sätze werden im Förderzeitraum auf Verständlichkeit und Vollständigkeit überprüft."
        },
        {
          ziel: "Eigene Sätze vor dem Schreiben mündlich planen.",
          massnahme: "Sätze werden zunächst gesprochen, gemeinsam geordnet und anschließend aufgeschrieben.",
          evaluation: "Es wird beobachtet, ob _ eigene Sätze zunehmend vollständiger plant und verschriftlicht."
        }
      ]
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      kompetenz: "Eigene Sätze schreiben",
      gruppe: "Texte schreiben Grundlagen",
      rating: "unsicher",
      istStandVarianten: [
        "Das Formulieren und Aufschreiben eigener Sätze fällt #ihm/ihr# noch schwer.",
        "Eigene Sätze bleiben häufig unvollständig oder für andere schwer verständlich.",
        "Ohne Satzanfänge, Wortmaterial oder mündliche Vorplanung kann _ eigene Gedanken noch nicht sicher verschriftlichen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Eigene Gedanken mithilfe von Satzanfängen aufschreiben.",
          massnahme: "Satzstarter, Wortkarten und Bildimpulse werden regelmäßig als Schreibhilfen eingesetzt.",
          evaluation: "Es wird überprüft, ob _ eigene Sätze zunehmend vollständiger und verständlicher schreibt."
        },
        {
          ziel: "Kurze Sätze mit Unterstützung vollständig formulieren.",
          massnahme: "Sätze werden gemeinsam gesprochen, gelegt, ergänzt und anschließend geschrieben.",
          evaluation: "Eigene Sätze werden auf Vollständigkeit und Verständlichkeit überprüft."
        }
      ]
    }
  ];

  const gruppenSaetzeDeutsch12Schreiben = [
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      gruppe: "Schreiben Grundlagen",
      istStandBundle: "Beim lautgetreuen Schreiben und beim Verschriften einzelner Wörter zeigen sich noch Unsicherheiten.",
      hilfeSatz: "Deutliches Sprechen, Silbenbögen, Anlautbilder und kurze Schreibübungen unterstützen #ihn/sie# beim Schreiben."
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      gruppe: "Schreiben kontrollieren",
      istStandBundle: "Beim Abschreiben und Kontrollieren kurzer Wörter oder Sätze arbeitet _ noch nicht durchgängig genau.",
      hilfeSatz: "Übersichtliche Vorlagen, feste Kontrollschritte und kurze Vergleichsphasen unterstützen #ihn/sie# bei der Genauigkeit."
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      gruppe: "Rechtschreibung Grundlagen",
      istStandBundle: "Geübte Rechtschreibgrundlagen wendet _ beim Schreiben noch nicht durchgängig sicher an.",
      hilfeSatz: "Markierungen, Silbenhilfen, Wortkarten und kurze Kontrollphasen helfen #ihm/ihr#, Rechtschreibmerkmale bewusster zu nutzen."
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 1/2",
      gruppe: "Texte schreiben Grundlagen",
      istStandBundle: "Eigene Sätze sind noch nicht immer vollständig, geordnet oder gut verständlich.",
      hilfeSatz: "Bildimpulse, Wortkarten, Satzanfänge und mündliche Vorplanung geben #ihm/ihr# Orientierung beim Schreiben."
    }
  ];

  const endkatalogDeutsch34Lesen = [
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Leseflüssigkeit",
      gruppe: "Lesen und Verstehen",
      rating: "gesichert",
      istStandVarianten: [
        "_ liest geübte Texte zunehmend flüssig und genau.",
        "Bei bekannten Texten achtet _ zunehmend auf Lesegenauigkeit, Pausen und Satzzeichen.",
        "Kurze altersangemessene Texte kann _ in vertrauten Situationen zunehmend sicher vorlesen."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Leseflüssigkeit",
      gruppe: "Lesen und Verstehen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Altersangemessene Texte liest _ noch nicht durchgängig flüssig und sicher.",
        "Geübte Texte liest _ sicherer als unbekannte oder längere Texte.",
        "Beim Vorlesen beachtet _ Satzgrenzen, Pausen und Betonung noch nicht immer sicher."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Texte flüssiger und genauer lesen.",
          massnahme: "Kurze Textabschnitte werden wiederholt gelesen und mit kurzer Rückmeldung begleitet.",
          evaluation: "Lesegenauigkeit und Leseflüssigkeit werden anhand kurzer Leseproben verglichen."
        },
        {
          ziel: "Satzzeichen und Sinnabschnitte beim Vorlesen beachten.",
          massnahme: "Sinnabschnitte werden markiert und Satzzeichen vor dem Vorlesen gemeinsam besprochen.",
          evaluation: "Es wird beobachtet, ob _ Satzzeichen, Pausen und Sinnabschnitte beim Lesen zunehmend beachtet."
        }
      ]
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Leseflüssigkeit",
      gruppe: "Lesen und Verstehen",
      rating: "unsicher",
      istStandVarianten: [
        "Das flüssige und genaue Lesen altersangemessener Texte fällt #ihm/ihr# noch schwer.",
        "Beim Lesen längerer Wörter oder Sätze gerät der Lesefluss noch deutlich ins Stocken.",
        "Durch stockendes Lesen verliert _ noch häufig den Sinnzusammenhang des Textes."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Kurze Textabschnitte genauer und flüssiger lesen.",
          massnahme: "Texte werden in kurze Abschnitte gegliedert und mehrfach in ruhigen Lesesituationen geübt.",
          evaluation: "Wiederholte Leseproben werden im Förderzeitraum verglichen."
        },
        {
          ziel: "Wörter und Satzteile automatisierter erfassen.",
          massnahme: "Häufige Wörter, Stolperwörter und Satzteile werden vor dem Lesen geübt und markiert.",
          evaluation: "Es wird überprüft, ob _ geübte Wörter und Satzteile schneller und genauer liest."
        }
      ]
    },

    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Texte verstehen",
      gruppe: "Lesen und Verstehen",
      rating: "gesichert",
      istStandVarianten: [
        "_ entnimmt einfachen Texten zunehmend sicher wichtige Informationen.",
        "Fragen zu geübten Texten beantwortet _ zunehmend treffend.",
        "Bei überschaubaren Texten kann _ zentrale Inhalte zunehmend wiedergeben."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Texte verstehen",
      gruppe: "Lesen und Verstehen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Wichtige Informationen aus Texten entnimmt _ noch nicht immer sicher.",
        "Texte versteht _ besser, wenn sie gegliedert, vorentlastet und mit Leitfragen bearbeitet werden.",
        "Beim Beantworten von Fragen zum Text braucht _ noch Orientierung an passenden Textstellen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Informationen aus Texten gezielter entnehmen.",
          massnahme: "Texte werden in Sinnabschnitte gegliedert und mit Leitfragen bearbeitet.",
          evaluation: "Bearbeitete Leseaufgaben werden im Förderzeitraum verglichen."
        },
        {
          ziel: "Fragen zum Text mithilfe passender Textstellen beantworten.",
          massnahme: "Wichtige Textstellen werden markiert, besprochen und zur Beantwortung von Fragen genutzt.",
          evaluation: "Es wird überprüft, ob _ Antworten zunehmend mit passenden Textinformationen begründet."
        }
      ]
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Texte verstehen",
      gruppe: "Lesen und Verstehen",
      rating: "unsicher",
      istStandVarianten: [
        "Das sinnentnehmende Lesen altersangemessener Texte fällt #ihm/ihr# noch schwer.",
        "Zentrale Informationen erkennt _ in Texten noch nicht durchgängig sicher.",
        "Ohne Vorentlastung, Markierungen oder Leitfragen verliert _ beim Lesen noch leicht den Überblick."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Zentrale Informationen in Texten erkennen.",
          massnahme: "Texte werden abschnittsweise gelesen, wichtige Wörter markiert und Inhalte mündlich gesichert.",
          evaluation: "Es wird beobachtet, ob _ zentrale Informationen zunehmend treffender benennt."
        },
        {
          ziel: "Den Inhalt kurzer Texte mit Unterstützung wiedergeben.",
          massnahme: "Nach dem Lesen werden Inhalte mithilfe von Bildern, Leitfragen oder Stichwortkarten zusammengefasst.",
          evaluation: "Die Wiedergabe von Textinhalten wird im Förderzeitraum beobachtet."
        }
      ]
    },

    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Lesestrategien",
      gruppe: "Lesen und Verstehen",
      rating: "gesichert",
      istStandVarianten: [
        "_ nutzt einzelne bekannte Lesestrategien zunehmend sicher.",
        "Beim Bearbeiten überschaubarer Texte kann _ Markierungen oder Leitfragen zunehmend nutzen.",
        "Bekannte Strategien helfen _, Texte strukturierter zu erschließen."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Lesestrategien",
      gruppe: "Lesen und Verstehen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Lesestrategien nutzt _ noch nicht durchgängig, um Texte zu erschließen.",
        "Strategien wie Markieren, Nachfragen oder Zusammenfassen gelingen _ sicherer, wenn sie sichtbar angeboten werden.",
        "Beim selbstständigen Anwenden von Lesestrategien braucht _ noch Erinnerung und Anleitung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Passende Lesestrategien beim Bearbeiten von Texten nutzen.",
          massnahme: "Strategiekarten zum Markieren, Klären und Zusammenfassen werden angeleitet eingesetzt.",
          evaluation: "Es wird beobachtet, ob _ vereinbarte Lesestrategien zunehmend selbstständiger nutzt."
        },
        {
          ziel: "Wichtige Informationen markieren und weiterverwenden.",
          massnahme: "Das Markieren zentraler Wörter und Sätze wird gemeinsam modelliert und anschließend geübt.",
          evaluation: "Bearbeitete Texte werden daraufhin überprüft, ob wichtige Informationen passend markiert wurden."
        }
      ]
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Lesestrategien",
      gruppe: "Lesen und Verstehen",
      rating: "unsicher",
      istStandVarianten: [
        "Das Anwenden geeigneter Lesestrategien fällt #ihm/ihr# noch deutlich schwer.",
        "Beim Lesen nutzt _ Strategien wie Markieren, Klären oder Zusammenfassen noch nicht zuverlässig.",
        "Ohne klare Anleitung bearbeitet _ Texte noch häufig ohne gezielte Lesestrategie."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Eine vereinbarte Lesestrategie angeleitet anwenden.",
          massnahme: "Eine Strategie wird zunächst gemeinsam modelliert, sichtbar gemacht und an kurzen Texten geübt.",
          evaluation: "Es wird überprüft, ob _ die vereinbarte Strategie in kurzen Texten zunehmend anwendet."
        },
        {
          ziel: "Unbekannte Wörter oder unklare Textstellen erkennen und klären.",
          massnahme: "Unklare Wörter werden markiert, gemeinsam besprochen und mithilfe von Wortkarten oder Kontext geklärt.",
          evaluation: "Es wird beobachtet, ob _ unklare Textstellen zunehmend erkennt und nachfragt."
        }
      ]
    }
  ];

  const gruppenSaetzeDeutsch34Lesen = [
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      gruppe: "Lesen und Verstehen",
      istStandBundle: "Beim flüssigen Lesen, Verstehen und Anwenden von Lesestrategien zeigt _ noch Unsicherheiten.",
      hilfeSatz: "Wiederholtes Lesen, Sinnabschnitte, Leitfragen und Strategiekarten unterstützen #ihn/sie# beim Texterschließen."
    }
  ];

  const endkatalogDeutsch34Schreiben = [
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Eigene Texte schreiben",
      gruppe: "Texte schreiben",
      rating: "gesichert",
      istStandVarianten: [
        "_ schreibt eigene Texte zunehmend verständlich und geordnet.",
        "Mit bekannten Schreibplänen kann _ eigene Texte zunehmend strukturierter verfassen.",
        "Eigene Ideen bringt _ in Schreibaufgaben zunehmend nachvollziehbar ein."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Eigene Texte schreiben",
      gruppe: "Texte schreiben",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Eigene Texte sind noch nicht immer geordnet, vollständig oder verständlich formuliert.",
        "Beim Planen und Formulieren eigener Texte braucht _ noch Orientierung durch Schreibpläne oder Satzanfänge.",
        "Mit Wortgeländern, Stichwortsammlungen oder Checklisten gelingen _ eigene Texte strukturierter."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Eigene Texte klarer und vollständiger formulieren.",
          massnahme: "Schreibpläne, Wortgeländer und Satzanfänge werden zur Vorbereitung eigener Texte genutzt.",
          evaluation: "Eigene Texte werden anhand ausgewählter Kriterien verglichen."
        },
        {
          ziel: "Texte vor dem Schreiben einfacher planen.",
          massnahme: "Stichwortsammlung und Schreibplan werden vor kurzen Schreibaufgaben verbindlich eingesetzt.",
          evaluation: "Es wird überprüft, ob _ eigene Texte zunehmend geordneter plant und aufbaut."
        }
      ]
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Eigene Texte schreiben",
      gruppe: "Texte schreiben",
      rating: "unsicher",
      istStandVarianten: [
        "Das Planen und Formulieren eigener Texte fällt #ihm/ihr# noch deutlich schwer.",
        "Eigene Texte bleiben häufig unvollständig, ungeordnet oder für andere schwer nachvollziehbar.",
        "Ohne klare Strukturierungshilfen findet _ noch nicht sicher in eigene Schreibaufgaben."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Eigene Texte mithilfe eines Schreibplans strukturieren.",
          massnahme: "Texte werden mit Bildimpulsen, Stichwortsammlung und klaren Schreibschritten vorbereitet.",
          evaluation: "Entwürfe und fertige Texte werden im Hinblick auf Aufbau und Verständlichkeit verglichen."
        },
        {
          ziel: "Eigene Gedanken in verständlichen Sätzen verschriftlichen.",
          massnahme: "Satzanfänge, Wortmaterial und gemeinsame mündliche Planung werden vor dem Schreiben genutzt.",
          evaluation: "Es wird beobachtet, ob _ eigene Gedanken zunehmend verständlicher verschriftlicht."
        }
      ]
    },

    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Rechtschreibstrategien anwenden",
      gruppe: "Rechtschreibung und Sprache",
      rating: "gesichert",
      istStandVarianten: [
        "_ nutzt einzelne Rechtschreibstrategien in geübten Schreibsituationen zunehmend sicher.",
        "Bekannte Rechtschreibstrategien wendet _ bei geübtem Wortmaterial zunehmend an.",
        "Beim Schreiben und Kontrollieren nutzt _ vereinbarte Rechtschreibhilfen zunehmend sicher."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Rechtschreibstrategien anwenden",
      gruppe: "Rechtschreibung und Sprache",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Rechtschreibstrategien nutzt _ noch nicht immer passend und sicher.",
        "Strategien wie Silbieren, Verlängern, Ableiten, Merken oder Kontrollieren wendet _ noch nicht durchgängig an.",
        "Geübte Rechtschreibschwerpunkte gelingen _ sicherer, wenn Strategiekarten oder Wörterlisten zur Verfügung stehen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Rechtschreibstrategien gezielter anwenden.",
          massnahme: "Strategien wie Silbieren, Verlängern, Ableiten, Merken und Kontrollieren werden an bekanntem Wortmaterial wiederholt.",
          evaluation: "Schreibproben werden auf die Anwendung vereinbarter Rechtschreibstrategien überprüft."
        },
        {
          ziel: "Schwierige Schreibstellen erkennen und markieren.",
          massnahme: "Wörter werden sortiert, markiert und mit passenden Strategien begründet.",
          evaluation: "Es wird überprüft, ob _ schwierige Schreibstellen zunehmend erkennt und passende Strategien nutzt."
        }
      ]
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Rechtschreibstrategien anwenden",
      gruppe: "Rechtschreibung und Sprache",
      rating: "unsicher",
      istStandVarianten: [
        "Das Anwenden passender Rechtschreibstrategien fällt #ihm/ihr# noch deutlich schwer.",
        "Beim Schreiben nutzt _ Strategien wie Verlängern, Ableiten oder Silbieren noch nicht zuverlässig.",
        "Ohne Anleitung schreibt _ geübte Rechtschreibschwerpunkte noch häufig unsicher."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Eine vereinbarte Rechtschreibstrategie angeleitet anwenden.",
          massnahme: "Eine Strategie wird an ausgewähltem Wortmaterial eingeführt, visualisiert und wiederholt geübt.",
          evaluation: "Es wird beobachtet, ob _ die vereinbarte Strategie in Schreibproben zunehmend nutzt."
        },
        {
          ziel: "Geübte Rechtschreibschwerpunkte sicherer schreiben.",
          massnahme: "Wörter mit ausgewählten Rechtschreibschwerpunkten werden gesammelt, markiert, sortiert und in kurzen Schreibanlässen angewendet.",
          evaluation: "Die Schreibung geübter Wörter wird im Förderzeitraum verglichen."
        }
      ]
    },

    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Texte kontrollieren",
      gruppe: "Schreiben kontrollieren",
      rating: "gesichert",
      istStandVarianten: [
        "_ kontrolliert kurze eigene Texte mit Unterstützung zunehmend genauer.",
        "Beim Abschreiben und Überprüfen achtet _ zunehmend auf Vollständigkeit und vereinbarte Kriterien.",
        "Kurze Kontrollphasen nutzt _ zunehmend, um eigene Texte zu verbessern."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Texte kontrollieren",
      gruppe: "Schreiben kontrollieren",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Beim Abschreiben und Kontrollieren eigener Texte arbeitet _ noch nicht immer genau.",
        "Eigene Texte überprüft _ noch nicht durchgängig mithilfe vereinbarter Kriterien.",
        "Mit Checklisten oder Wörterlisten gelingt _ die Kontrolle eigener Texte zunehmend besser."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Texte genauer abschreiben und kontrollieren.",
          massnahme: "Kurze Textabschnitte werden mit der Strategie Lesen-Merken-Schreiben-Kontrollieren bearbeitet.",
          evaluation: "Abschreib- und Kontrollaufgaben werden im Förderzeitraum verglichen."
        },
        {
          ziel: "Eigene Texte mithilfe einer Checkliste überprüfen.",
          massnahme: "Checklisten, Wörterlisten und kurze Kontrollphasen werden verbindlich in Schreibaufgaben eingebaut.",
          evaluation: "Entwürfe und überarbeitete Texte werden im Hinblick auf Korrekturen verglichen."
        }
      ]
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Texte kontrollieren",
      gruppe: "Schreiben kontrollieren",
      rating: "unsicher",
      istStandVarianten: [
        "Eigene Texte kontrolliert _ noch nicht ausreichend gezielt auf Rechtschreibung, Vollständigkeit oder Satzgrenzen.",
        "Beim Überprüfen eigener Texte übersieht _ noch häufig Fehler oder fehlende Satzzeichen.",
        "Eine selbstständige Textkontrolle gelingt #ihm/ihr# derzeit nur mit klarer Anleitung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Eigene Texte nach vereinbarten Kriterien kontrollieren.",
          massnahme: "Kontrollschritte werden auf wenige Kriterien begrenzt und mit Symbolen sichtbar gemacht.",
          evaluation: "Es wird überprüft, ob _ eigene Texte zunehmend gezielter kontrolliert und überarbeitet."
        },
        {
          ziel: "Fehler in kurzen Texten mit Unterstützung finden und verbessern.",
          massnahme: "Kurze Texte werden gemeinsam gelesen, markiert und mithilfe von Wörterliste oder Strategiekarte überarbeitet.",
          evaluation: "Überarbeitete Texte werden im Hinblick auf gefundene und verbesserte Fehler verglichen."
        }
      ]
    },

    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Sprache untersuchen",
      gruppe: "Rechtschreibung und Sprache",
      rating: "gesichert",
      istStandVarianten: [
        "_ erkennt einzelne Wortarten oder Satzstrukturen in geübten Aufgaben zunehmend sicher.",
        "Bei bekannten Aufgaben kann _ einfache sprachliche Merkmale zunehmend bestimmen.",
        "Mit Farben, Symbolen oder Proben untersucht _ Sprache zunehmend sicherer."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Sprache untersuchen",
      gruppe: "Rechtschreibung und Sprache",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Wortarten, Satzbau oder Satzzeichen erkennt und nutzt _ noch nicht immer sicher.",
        "Sprachliche Merkmale kann _ besser bestimmen, wenn Proben, Farben oder Symbole eingesetzt werden.",
        "Beim Untersuchen von Sprache braucht _ noch Orientierung durch Beispiele und klare Arbeitsschritte."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Wortarten und einfache Satzstrukturen sicherer erkennen.",
          massnahme: "Wortarten und Satzstrukturen werden mit Farben, Symbolen, Sortieraufgaben und einfachen Proben geübt.",
          evaluation: "Es wird überprüft, ob _ Wortarten und Satzstrukturen in Aufgaben zunehmend sicherer bestimmt."
        },
        {
          ziel: "Vollständige Sätze bilden und Satzgrenzen beachten.",
          massnahme: "Sätze werden mit Satzkarten gelegt, erweitert, umgestellt und mit Satzzeichen überprüft.",
          evaluation: "Eigene Sätze werden auf Vollständigkeit, Satzgrenzen und Satzzeichen überprüft."
        }
      ]
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      kompetenz: "Sprache untersuchen",
      gruppe: "Rechtschreibung und Sprache",
      rating: "unsicher",
      istStandVarianten: [
        "Das Erkennen von Wortarten, Satzbau oder Satzgrenzen fällt #ihm/ihr# noch deutlich schwer.",
        "Sprachliche Strukturen kann _ noch nicht zuverlässig unterscheiden oder anwenden.",
        "Bei Aufgaben zur Sprachuntersuchung braucht _ noch deutliche Beispiele, Markierungen und Anleitung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Einfache sprachliche Merkmale mit Unterstützung erkennen.",
          massnahme: "Aufgaben zur Sprachuntersuchung werden mit Beispielen, Farben und klaren Proben angeleitet.",
          evaluation: "Es wird beobachtet, ob _ sprachliche Merkmale zunehmend sicherer erkennt."
        },
        {
          ziel: "Satzgrenzen und Satzzeichen sicherer anwenden.",
          massnahme: "Kurze Sätze werden gelesen, gelegt, markiert und mit passenden Satzzeichen ergänzt.",
          evaluation: "Eigene Sätze werden auf Satzgrenzen und Satzzeichen überprüft."
        }
      ]
    }
  ];

  const gruppenSaetzeDeutsch34Schreiben = [
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      gruppe: "Texte schreiben",
      istStandBundle: "Eigene Texte plant, formuliert oder überarbeitet _ noch nicht durchgängig strukturiert.",
      hilfeSatz: "Schreibpläne, Wortgeländer, Satzanfänge und Checklisten geben #ihm/ihr# Orientierung beim Schreiben."
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      gruppe: "Rechtschreibung und Sprache",
      istStandBundle: "Rechtschreibstrategien, Wortarten oder Satzstrukturen wendet _ noch nicht sicher genug an.",
      hilfeSatz: "Strategiekarten, Markierungen, Sortieraufgaben und kurze Kontrollphasen unterstützen #ihn/sie# beim sprachlichen Arbeiten."
    },
    {
      bereich: "Deutsch",
      klasse: "Klasse 3/4",
      gruppe: "Schreiben kontrollieren",
      istStandBundle: "Beim Abschreiben und Kontrollieren eigener Texte arbeitet _ noch nicht immer genau.",
      hilfeSatz: "Kurze Abschnitte, feste Kontrollschritte und Selbst- oder Partnerkontrolle unterstützen #ihn/sie# bei der Genauigkeit."
    }
  ];

  const endkatalogMathe12Zahlvorstellung = [
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Zahlverständnis",
      gruppe: "Zahlvorstellung",
      rating: "gesichert",
      istStandVarianten: [
        "_ stellt Zahlen im bekannten Zahlenraum zunehmend sicher dar.",
        "Zahlen kann _ mit Material, Bildern oder Symbolen zunehmend passend darstellen.",
        "Im bekannten Zahlenraum orientiert sich _ zunehmend sicher."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Zahlverständnis",
      gruppe: "Zahlvorstellung",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Zahlen im bekannten Zahlenraum stellt, vergleicht oder ordnet _ noch nicht immer sicher.",
        "Mit Material gelingt _ die Darstellung von Zahlen sicherer als auf symbolischer Ebene.",
        "Beim Vergleichen und Ordnen von Zahlen braucht _ noch Orientierung durch Anschauungsmaterial."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Zahlen sicherer darstellen, vergleichen und ordnen.",
          massnahme: "Zahlen werden mit Material, Zehnerfeld und Zahlenstrahl handelnd und bildlich dargestellt.",
          evaluation: "Aufgaben zur Zahlorientierung werden im Förderzeitraum verglichen."
        },
        {
          ziel: "Zahlbeziehungen im bekannten Zahlenraum erkennen.",
          massnahme: "Zahlen werden gelegt, verglichen, sortiert und am Zahlenstrahl eingeordnet.",
          evaluation: "Es wird beobachtet, ob _ Zahlbeziehungen zunehmend sicherer erkennt."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Zahlverständnis",
      gruppe: "Zahlvorstellung",
      rating: "unsicher",
      istStandVarianten: [
        "Der Aufbau einer sicheren Zahlvorstellung fällt #ihm/ihr# im bekannten Zahlenraum noch schwer.",
        "Zahlen kann _ noch nicht durchgängig sicher darstellen, vergleichen oder einordnen.",
        "Ohne Material verliert _ bei Zahlen und Zahlbeziehungen noch leicht die Orientierung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Eine tragfähigere Vorstellung von Zahlen im bekannten Zahlenraum aufbauen.",
          massnahme: "Zahlen werden regelmäßig handelnd, bildlich und symbolisch dargestellt und miteinander verglichen.",
          evaluation: "Es wird überprüft, ob _ Zahlen zunehmend sicherer darstellt und einordnet."
        },
        {
          ziel: "Zahlen am Zahlenstrahl sicherer einordnen.",
          massnahme: "Zahlenstrahl, Zahlenkarten und strukturierte Zahlbilder werden regelmäßig eingesetzt.",
          evaluation: "Die Orientierung am Zahlenstrahl wird anhand ausgewählter Aufgaben beobachtet."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Mengen/Zahlen zuordnen",
      gruppe: "Zahlvorstellung",
      rating: "gesichert",
      istStandVarianten: [
        "_ ordnet überschaubaren Mengen zunehmend sicher passende Zahlen zu.",
        "Strukturierte Mengen kann _ zunehmend erfassen und benennen.",
        "Mengen und Zahlen verbindet _ in vertrauten Aufgabenformaten zunehmend sicher."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Mengen/Zahlen zuordnen",
      gruppe: "Zahlvorstellung",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Mengen und passende Zahlen ordnet _ noch nicht immer sicher zu.",
        "Strukturierte Mengen erfasst _ sicherer als ungeordnete Mengen.",
        "Beim Vergleichen von Mengen braucht _ noch Unterstützung durch Material oder Zahlbilder."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Mengen sicherer erfassen und Zahlen zuordnen.",
          massnahme: "Mengen werden mit Plättchen, Würfelbildern und Zehnerfeld strukturiert dargestellt.",
          evaluation: "Es wird beobachtet, ob _ Mengen und Zahlen zunehmend sicherer zuordnet."
        },
        {
          ziel: "Mengen strukturiert darstellen und vergleichen.",
          massnahme: "Mengen werden gelegt, gebündelt, verglichen und mit passenden Zahlkarten verbunden.",
          evaluation: "Die Mengenerfassung wird anhand kurzer Zuordnungsaufgaben überprüft."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Mengen/Zahlen zuordnen",
      gruppe: "Zahlvorstellung",
      rating: "unsicher",
      istStandVarianten: [
        "Das sichere Erfassen und Zuordnen von Mengen und Zahlen fällt #ihm/ihr# noch schwer.",
        "Mengen zählt _ noch häufig einzeln ab und erkennt Strukturen noch nicht sicher.",
        "Zwischen Mengenbild und passender Zahl stellt _ noch nicht durchgängig eine sichere Verbindung her."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Mengen strukturiert erfassen.",
          massnahme: "Mengen werden in übersichtlichen Anordnungen gelegt, gebündelt und wiederholt mit Zahlbildern verglichen.",
          evaluation: "Es wird überprüft, ob _ Mengen zunehmend ohne vollständiges Abzählen erfassen kann."
        },
        {
          ziel: "Zahlen passenden Mengen sicherer zuordnen.",
          massnahme: "Mengenbilder, Zahlkarten und handelndes Material werden regelmäßig miteinander verbunden.",
          evaluation: "Die Zuordnung von Mengen und Zahlen wird im Förderzeitraum verglichen."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Zahlenreihe/Zahlordnung",
      gruppe: "Zahlvorstellung",
      rating: "gesichert",
      istStandVarianten: [
        "_ orientiert sich in der bekannten Zahlenreihe zunehmend sicher.",
        "Vorgänger, Nachfolger und Nachbarzahlen bestimmt _ in geübten Zahlenräumen zunehmend sicher.",
        "Zahlen ordnet _ im bekannten Zahlenraum zunehmend richtig ein."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Zahlenreihe/Zahlordnung",
      gruppe: "Zahlvorstellung",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Die Orientierung in der Zahlenreihe gelingt _ noch nicht immer sicher.",
        "Vorgänger, Nachfolger und Nachbarzahlen bestimmt _ noch nicht durchgängig sicher.",
        "Beim Vorwärts- und Rückwärtszählen braucht _ noch Orientierung am Zahlenstrahl."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Zahlen in der richtigen Reihenfolge ordnen.",
          massnahme: "Zahlenstrahl, Zahlenkarten und Übungen zu Vorgänger, Nachfolger und Nachbarzahlen werden eingesetzt.",
          evaluation: "Die Zahlorientierung wird anhand kurzer Aufgaben zur Zahlenreihe überprüft."
        },
        {
          ziel: "Vorgänger, Nachfolger und Nachbarzahlen sicherer bestimmen.",
          massnahme: "Zahlen werden regelmäßig am Zahlenstrahl eingeordnet und mit Nachbarzahlen verknüpft.",
          evaluation: "Es wird beobachtet, ob _ Nachbarzahlen zunehmend sicherer bestimmt."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Zahlenreihe/Zahlordnung",
      gruppe: "Zahlvorstellung",
      rating: "unsicher",
      istStandVarianten: [
        "Die Orientierung in der Zahlenreihe fällt #ihm/ihr# noch schwer.",
        "Beim Ordnen von Zahlen verliert _ im bekannten Zahlenraum noch leicht die Übersicht.",
        "Zählfolgen, Vorgänger und Nachfolger sind noch nicht ausreichend gesichert."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Sich in der Zahlenreihe sicherer orientieren.",
          massnahme: "Vorwärts- und Rückwärtszählen, Zahlenstrahlübungen und Zahlkarten werden regelmäßig genutzt.",
          evaluation: "Es wird überprüft, ob _ Zahlen zunehmend sicherer ordnet und benennt."
        },
        {
          ziel: "Vorgänger und Nachfolger im bekannten Zahlenraum bestimmen.",
          massnahme: "Nachbarzahlen werden mit Zahlenkarten, Zahlenstrahl und kurzen täglichen Übungen gefestigt.",
          evaluation: "Die Bestimmung von Vorgänger und Nachfolger wird im Förderzeitraum verglichen."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Zahlzerlegung",
      gruppe: "Rechnen Grundlagen",
      rating: "gesichert",
      istStandVarianten: [
        "_ zerlegt Zahlen im bekannten Zahlenraum zunehmend sicher.",
        "Bekannte Zahlzerlegungen kann _ zunehmend abrufen und nutzen.",
        "Mit Material erkennt _ Zahlzerlegungen zunehmend sicher."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Zahlzerlegung",
      gruppe: "Rechnen Grundlagen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Zahlzerlegungen nutzt _ noch nicht durchgängig sicher als Grundlage für Rechenaufgaben.",
        "Bekannte Zerlegungen ruft _ sicherer ab als neue oder ungeübte Zerlegungen.",
        "Mit Material kann _ Zahlzerlegungen besser darstellen und nachvollziehen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Zahlen sicherer zerlegen und Partnerzahlen nutzen.",
          massnahme: "Zerlegungen werden mit Plättchen, Schüttelboxen und Zerlegungshäusern geübt.",
          evaluation: "Es wird überprüft, ob _ Zerlegungen zunehmend sicherer abrufen und anwenden kann."
        },
        {
          ziel: "Zahlzerlegungen als Hilfe beim Rechnen nutzen.",
          massnahme: "Zerlegungen werden mit Plus- und Minusaufgaben verknüpft und regelmäßig versprachlicht.",
          evaluation: "Der Einsatz von Zahlzerlegungen beim Rechnen wird im Förderzeitraum beobachtet."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Zahlzerlegung",
      gruppe: "Rechnen Grundlagen",
      rating: "unsicher",
      istStandVarianten: [
        "Das sichere Zerlegen von Zahlen fällt #ihm/ihr# noch schwer.",
        "Zahlzerlegungen kann _ noch nicht zuverlässig abrufen oder für Rechenaufgaben nutzen.",
        "Ohne Material erkennt _ Zerlegungen und Partnerzahlen noch nicht durchgängig sicher."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Zahlzerlegungen handelnd aufbauen und sichern.",
          massnahme: "Zahlen werden mit Material zerlegt, gelegt, gesprochen und in Zerlegungshäusern dargestellt.",
          evaluation: "Es wird beobachtet, ob _ Zahlzerlegungen zunehmend sicherer darstellt."
        },
        {
          ziel: "Partnerzahlen im bekannten Zahlenraum sicherer nutzen.",
          massnahme: "Partnerzahlen werden täglich kurz wiederholt und mit Rechenaufgaben verknüpft.",
          evaluation: "Die Nutzung von Partnerzahlen wird anhand kurzer Rechenübungen überprüft."
        }
      ]
    }
  ];

  const gruppenSaetzeMathe12Zahlvorstellung = [
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      gruppe: "Zahlvorstellung",
      istStandBundle: "Zahlen, Mengen oder Zahlbeziehungen im bekannten Zahlenraum erfasst _ noch nicht durchgängig sicher.",
      hilfeSatz: "Material, Zehnerfeld, Zahlenstrahl und wiederkehrende Zahlübungen unterstützen #ihn/sie# beim Aufbau der Zahlvorstellung."
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      gruppe: "Rechnen Grundlagen",
      istStandBundle: "Zahlzerlegungen nutzt _ noch nicht durchgängig sicher als Grundlage für Rechenaufgaben.",
      hilfeSatz: "Handelndes Legen, Zerlegungshäuser und das Versprachlichen von Zahlbeziehungen geben #ihm/ihr# Sicherheit."
    }
  ];

  const endkatalogMathe12Rechnen = [
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Addition",
      gruppe: "Rechnen Grundlagen",
      rating: "gesichert",
      istStandVarianten: [
        "_ löst einfache Plusaufgaben im bekannten Zahlenraum zunehmend sicher.",
        "Plusaufgaben kann _ mit Material oder Zahlbildern zunehmend nachvollziehbar lösen.",
        "Bei geübten Additionsaufgaben zeigt _ zunehmend Sicherheit."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Addition",
      gruppe: "Rechnen Grundlagen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Plusaufgaben im bekannten Zahlenraum löst _ noch nicht durchgängig sicher.",
        "Additionsaufgaben gelingen _ sicherer, wenn Material oder Zahlbilder genutzt werden.",
        "Beim Addieren greift _ noch häufig auf zählende Strategien zurück."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Plusaufgaben im bekannten Zahlenraum sicherer lösen.",
          massnahme: "Plusaufgaben werden handelnd gelegt, bildlich dargestellt und mit geeigneten Strategien besprochen.",
          evaluation: "Rechenaufgaben werden im Förderzeitraum auf Strategieeinsatz und Ergebnisgenauigkeit überprüft."
        },
        {
          ziel: "Additionsstrategien bewusster nutzen.",
          massnahme: "Weiterzählen, Verdoppeln, Nachbaraufgaben und Zerlegen werden an wiederkehrenden Aufgabenformaten geübt.",
          evaluation: "Es wird beobachtet, ob _ Additionsstrategien zunehmend passend einsetzt."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Addition",
      gruppe: "Rechnen Grundlagen",
      rating: "unsicher",
      istStandVarianten: [
        "Das sichere Lösen von Plusaufgaben im bekannten Zahlenraum fällt #ihm/ihr# noch schwer.",
        "Beim Addieren zählt _ noch häufig vollständig ab und verliert dabei leicht die Übersicht.",
        "Ohne Material kann _ Additionsaufgaben noch nicht zuverlässig lösen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Plusaufgaben handelnd und bildlich nachvollziehen.",
          massnahme: "Aufgaben werden mit Plättchen, Zehnerfeld oder Rechenstreifen gelegt und anschließend versprachlicht.",
          evaluation: "Es wird überprüft, ob _ Plusaufgaben zunehmend sicherer darstellt und löst."
        },
        {
          ziel: "Zählendes Rechnen beim Addieren schrittweise reduzieren.",
          massnahme: "Bekannte Aufgaben, Verdopplungen und Zahlzerlegungen werden regelmäßig als Rechenhilfen genutzt.",
          evaluation: "Der Strategieeinsatz beim Addieren wird in kurzen Übungsphasen beobachtet."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Subtraktion",
      gruppe: "Rechnen Grundlagen",
      rating: "gesichert",
      istStandVarianten: [
        "_ löst einfache Minusaufgaben im bekannten Zahlenraum zunehmend sicher.",
        "Minusaufgaben kann _ mit Material zunehmend nachvollziehbar darstellen.",
        "Bei geübten Subtraktionsaufgaben zeigt _ zunehmend mehr Sicherheit."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Subtraktion",
      gruppe: "Rechnen Grundlagen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Minusaufgaben im bekannten Zahlenraum bearbeitet _ noch nicht durchgängig sicher.",
        "Subtraktionsaufgaben gelingen _ sicherer, wenn Material oder Zahlenstrahl genutzt werden.",
        "Beim Subtrahieren braucht _ noch Orientierung, um passende Rechenwege zu wählen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Minusaufgaben im bekannten Zahlenraum sicherer lösen.",
          massnahme: "Wegnehmen, Zurückzählen und Ergänzen werden mit Material und Zahlenstrahl geübt.",
          evaluation: "Die Bearbeitung von Minusaufgaben wird im Förderzeitraum verglichen."
        },
        {
          ziel: "Subtraktion als Wegnehmen oder Ergänzen verstehen.",
          massnahme: "Rechengeschichten werden handelnd dargestellt und mit passenden Minusaufgaben verknüpft.",
          evaluation: "Es wird beobachtet, ob _ Sachsituationen zunehmend passend als Minusaufgabe darstellt."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Subtraktion",
      gruppe: "Rechnen Grundlagen",
      rating: "unsicher",
      istStandVarianten: [
        "Das sichere Lösen von Minusaufgaben fällt #ihm/ihr# im bekannten Zahlenraum noch schwer.",
        "Beim Subtrahieren verliert _ ohne Material oder Zahlenstrahl noch leicht die Orientierung.",
        "Minusaufgaben kann _ noch nicht zuverlässig von Plusaufgaben unterscheiden und passend lösen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Minusaufgaben handelnd nachvollziehen und lösen.",
          massnahme: "Subtraktionsaufgaben werden mit Material gelegt, weggenommen, ergänzt und versprachlicht.",
          evaluation: "Es wird überprüft, ob _ Minusaufgaben zunehmend sicherer darstellt und löst."
        },
        {
          ziel: "Geeignete Strategien beim Subtrahieren nutzen.",
          massnahme: "Zurückzählen, Ergänzen und Zerlegen werden an kurzen Aufgabenserien geübt.",
          evaluation: "Der Strategieeinsatz beim Subtrahieren wird im Förderzeitraum beobachtet."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Zehnerübergang",
      gruppe: "Rechnen Grundlagen",
      rating: "gesichert",
      istStandVarianten: [
        "_ löst erste Aufgaben mit Zehnerübergang zunehmend nachvollziehbar.",
        "Mit Zehnerfeld oder Zahlenstrahl kann _ Aufgaben über den Zehner zunehmend sicher bearbeiten.",
        "Bei geübten Aufgaben nutzt _ erste Teilschritte über den Zehner zunehmend passend."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Zehnerübergang",
      gruppe: "Rechnen Grundlagen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Aufgaben mit Zehnerübergang bereiten _ noch Schwierigkeiten.",
        "Mit Material kann _ Rechenwege über den Zehner besser nachvollziehen.",
        "Beim Rechnen über den Zehner braucht _ noch Orientierung durch Teilschritte."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Aufgaben mit Zehnerübergang schrittweise lösen.",
          massnahme: "Aufgaben werden in Teilschritte zerlegt und mit Zehnerfeld oder Zahlenstrahl unterstützt.",
          evaluation: "Es wird beobachtet, ob _ Rechenwege über den Zehner zunehmend nachvollziehbar nutzt."
        },
        {
          ziel: "Zerlegungen bis zum Zehner als Rechenhilfe nutzen.",
          massnahme: "Zahlzerlegungen werden regelmäßig mit Aufgaben über den Zehner verknüpft.",
          evaluation: "Die Nutzung von Zerlegungen beim Zehnerübergang wird anhand kurzer Aufgaben überprüft."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Zehnerübergang",
      gruppe: "Rechnen Grundlagen",
      rating: "unsicher",
      istStandVarianten: [
        "Das Rechnen mit Zehnerübergang fällt #ihm/ihr# noch deutlich schwer.",
        "Beim Übergang über den Zehner verliert _ ohne Material noch häufig die Orientierung.",
        "Teilschritte beim Rechnen über den Zehner kann _ noch nicht sicher nutzen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Den Zehnerübergang handelnd und bildlich nachvollziehen.",
          massnahme: "Aufgaben werden mit Zehnerfeld, Plättchen und Zahlenstrahl gelegt, zerlegt und versprachlicht.",
          evaluation: "Es wird überprüft, ob _ Aufgaben mit Zehnerübergang zunehmend sicherer darstellt."
        },
        {
          ziel: "Aufgaben über den Zehner in Teilschritten bearbeiten.",
          massnahme: "Der Rechenweg bis zum Zehner und weiter wird kleinschrittig geübt und visualisiert.",
          evaluation: "Rechenwege mit Zehnerübergang werden im Förderzeitraum verglichen."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Rechenstrategien",
      gruppe: "Rechnen Grundlagen",
      rating: "gesichert",
      istStandVarianten: [
        "_ nutzt einzelne bekannte Rechenstrategien zunehmend sicher.",
        "Bei geübten Aufgaben kann _ passende Rechenhilfen zunehmend anwenden.",
        "Bekannte Aufgabenbeziehungen helfen _, Rechenaufgaben zunehmend sicherer zu lösen."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Rechenstrategien",
      gruppe: "Rechnen Grundlagen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Passende Rechenstrategien wählt _ noch nicht immer sicher aus.",
        "Strategien wie Verdoppeln, Zerlegen oder Ergänzen nutzt _ noch nicht durchgängig.",
        "Mit sichtbaren Strategiehilfen kann _ Rechenwege besser nachvollziehen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Geeignete Rechenstrategien bewusster nutzen.",
          massnahme: "Strategien wie Verdoppeln, Zerlegen, Ergänzen und Nachbaraufgaben werden handelnd und bildlich geübt.",
          evaluation: "Es wird beobachtet, ob _ Rechenstrategien häufiger passend einsetzt."
        },
        {
          ziel: "Rechenwege erklären und vergleichen.",
          massnahme: "Verschiedene Rechenwege werden mit Material, Rechenstrich oder Zeichnung dargestellt und besprochen.",
          evaluation: "Die Darstellung und Erklärung von Rechenwegen wird im Unterricht beobachtet."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Rechenstrategien",
      gruppe: "Rechnen Grundlagen",
      rating: "unsicher",
      istStandVarianten: [
        "Das Auswählen passender Rechenstrategien fällt #ihm/ihr# noch schwer.",
        "Beim Rechnen greift _ noch häufig auf zählende Strategien zurück.",
        "Aufgabenbeziehungen erkennt und nutzt _ noch nicht durchgängig sicher."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Eine passende Rechenstrategie mit Unterstützung auswählen.",
          massnahme: "Rechenstrategien werden einzeln eingeführt, visualisiert und an kurzen Aufgabenserien geübt.",
          evaluation: "Es wird überprüft, ob _ eine vereinbarte Strategie zunehmend passend anwendet."
        },
        {
          ziel: "Aufgabenbeziehungen beim Rechnen nutzen.",
          massnahme: "Tauschaufgaben, Nachbaraufgaben, Verdopplungen und Zerlegungen werden regelmäßig verglichen.",
          evaluation: "Der Einsatz von Aufgabenbeziehungen wird im Förderzeitraum beobachtet."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Kopfrechnen",
      gruppe: "Rechnen Grundlagen",
      rating: "gesichert",
      istStandVarianten: [
        "_ löst geübte Kopfrechenaufgaben zunehmend sicher.",
        "Einfache Aufgaben kann _ zunehmend ohne Material lösen.",
        "Bei bekannten Aufgabenformaten zeigt _ im Kopfrechnen zunehmende Sicherheit."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Kopfrechnen",
      gruppe: "Rechnen Grundlagen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Geübte Kopfrechenaufgaben löst _ noch nicht immer sicher.",
        "Beim Kopfrechnen braucht _ noch Zeit, um passende Strategien zu nutzen.",
        "Einfache Aufgaben gelingen _ sicherer, wenn Zahlbeziehungen wiederholt geübt wurden."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Geübte Kopfrechenaufgaben sicherer lösen.",
          massnahme: "Kurze regelmäßige Kopfrechenphasen mit wiederkehrenden Aufgabenformaten werden eingesetzt.",
          evaluation: "Kopfrechenaufgaben werden im Förderzeitraum auf Sicherheit und Strategieeinsatz verglichen."
        },
        {
          ziel: "Zahlbeziehungen beim Kopfrechnen nutzen.",
          massnahme: "Zerlegungen, Verdopplungen, Nachbaraufgaben und Ergänzungen werden regelmäßig wiederholt.",
          evaluation: "Es wird beobachtet, ob _ Zahlbeziehungen beim Kopfrechnen zunehmend nutzt."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Kopfrechnen",
      gruppe: "Rechnen Grundlagen",
      rating: "unsicher",
      istStandVarianten: [
        "Das sichere Lösen geübter Kopfrechenaufgaben fällt #ihm/ihr# noch schwer.",
        "Beim Kopfrechnen zählt _ noch häufig ab und benötigt dadurch viel Zeit.",
        "Geübte Zahl- und Aufgabenbeziehungen ruft _ noch nicht zuverlässig ab."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Grundlegende Kopfrechenaufgaben sicherer automatisieren.",
          massnahme: "Kurze tägliche Übungsphasen mit bekannten Aufgaben und Zahlbeziehungen werden durchgeführt.",
          evaluation: "Die Sicherheit bei geübten Kopfrechenaufgaben wird im Förderzeitraum verglichen."
        },
        {
          ziel: "Zählendes Rechnen beim Kopfrechnen schrittweise reduzieren.",
          massnahme: "Bekannte Aufgabenpaare, Zerlegungen und Verdopplungen werden als feste Rechenhilfen eingeübt.",
          evaluation: "Es wird beobachtet, ob _ beim Kopfrechnen häufiger auf bekannte Zahlbeziehungen zurückgreift."
        }
      ]
    }
  ];

  const gruppenSaetzeMathe12Rechnen = [
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      gruppe: "Rechnen Grundlagen",
      istStandBundle: "Beim Addieren, Subtrahieren, Kopfrechnen oder Rechnen über den Zehner zeigt _ noch Unsicherheiten.",
      hilfeSatz: "Handelndes Legen, bildliche Darstellungen, wiederkehrende Aufgabenformate und das Versprachlichen von Rechenwegen geben #ihm/ihr# Sicherheit."
    }
  ];

  const endkatalogMathe12Weitere = [
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Sachaufgaben",
      gruppe: "Sachrechnen",
      rating: "gesichert",
      istStandVarianten: [
        "_ versteht einfache Rechengeschichten mit Unterstützung zunehmend sicher.",
        "Wichtige Informationen in einfachen Sachaufgaben erkennt _ zunehmend besser.",
        "Mit Bild, Handlung und Antwortsatz kann _ einfache Sachaufgaben zunehmend nachvollziehbar bearbeiten."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Sachaufgaben",
      gruppe: "Sachrechnen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Einfache Sachaufgaben versteht _ noch nicht durchgängig sicher.",
        "Wichtige Informationen erkennt _ sicherer, wenn Sachaufgaben vorgelesen, nachgespielt oder visualisiert werden.",
        "Beim Finden passender Rechnungen braucht _ noch Orientierung durch Bild, Handlung und Antwortsatz."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Einfache Sachaufgaben besser verstehen.",
          massnahme: "Sachaufgaben werden vorgelesen, nachgespielt und visualisiert.",
          evaluation: "Bearbeitete Sachaufgaben werden gesammelt und verglichen."
        },
        {
          ziel: "Wichtige Informationen erkennen und passende Rechnungen finden.",
          massnahme: "Wichtige Informationen werden markiert und gemeinsam geordnet.",
          evaluation: "Der Lösungsweg wird anhand einfacher Aufgaben besprochen."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Geometrie/Formen/Muster",
      gruppe: "Geometrie Grundlagen",
      rating: "gesichert",
      istStandVarianten: [
        "_ erkennt einfache Formen in vertrauten Aufgaben zunehmend sicher.",
        "Muster setzt _ mit Unterstützung zunehmend nachvollziehbar fort.",
        "Bei Lege- und Sortieraufgaben zeigt _ zunehmend Sicherheit im Umgang mit Formen und Mustern."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Geometrie/Formen/Muster",
      gruppe: "Geometrie Grundlagen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Einfache Formen, Muster oder Lagebeziehungen erkennt _ noch nicht durchgängig sicher.",
        "Beim Fortsetzen von Mustern braucht _ noch Anschauung und klare Orientierung.",
        "Lagebeziehungen beschreibt _ sicherer, wenn Material gelegt, sortiert und gemeinsam besprochen wird."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Formen sicherer benennen und unterscheiden.",
          massnahme: "Formen und Muster werden gelegt, sortiert und beschrieben.",
          evaluation: "Lege-, Sortier- und Beschreibungsaufgaben werden beobachtet."
        },
        {
          ziel: "Einfache Muster erkennen, fortsetzen und beschreiben.",
          massnahme: "Bau- und Legematerial unterstützt das handelnde Lernen.",
          evaluation: "Arbeitsproben zu Formen und Mustern werden verglichen."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Geometrie/Formen/Muster",
      gruppe: "Geometrie Grundlagen",
      rating: "unsicher",
      istStandVarianten: [
        "Das Erkennen und Unterscheiden einfacher Formen, Muster oder Lagebeziehungen fällt #ihm/ihr# noch schwer.",
        "Beim Beschreiben von Lagebeziehungen braucht _ noch deutliche Anschauung und passende Begriffe.",
        "Geometrische Aufgaben gelingen _ noch nicht durchgängig sicher, wenn sie ohne Legematerial bearbeitet werden."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Formen handelnd erkennen und unterscheiden.",
          massnahme: "Formen werden mit Bau- und Legematerial gelegt, sortiert, verglichen und benannt.",
          evaluation: "Es wird beobachtet, ob _ einfache Formen zunehmend sicherer erkennt und unterscheidet."
        },
        {
          ziel: "Lagebeziehungen mit passenden Begriffen ausdrücken.",
          massnahme: "Fachbegriffe werden anschaulich eingeführt und wiederholt.",
          evaluation: "Arbeitsproben zu Formen, Mustern und Lagebeziehungen werden verglichen."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Umgang mit Material",
      gruppe: "Materialeinsatz",
      rating: "gesichert",
      istStandVarianten: [
        "_ nutzt Anschauungsmaterial mit Anleitung zunehmend zielgerichtet.",
        "Handelnde Zugänge helfen #ihm/ihr#, Aufgaben besser nachzuvollziehen.",
        "Material, Bild und Rechnung kann _ in vertrauten Aufgaben zunehmend miteinander verbinden."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Umgang mit Material",
      gruppe: "Materialeinsatz",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Anschauungsmaterial nutzt _ noch nicht immer zielgerichtet zur Lösung von Aufgaben.",
        "Handelnde Darstellungen gelingen _ sicherer, wenn Materialeinsatz und Arbeitsschritte angeleitet werden.",
        "Den Zusammenhang zwischen Handlung, Bild und Rechnung erkennt _ mit Unterstützung zunehmend besser."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Material bewusster zur Lösung von Aufgaben nutzen.",
          massnahme: "Der Materialeinsatz wird angeleitet und schrittweise reduziert.",
          evaluation: "Der zielgerichtete Materialeinsatz wird beobachtet."
        },
        {
          ziel: "Den Zusammenhang zwischen Handlung, Bild und Rechnung erkennen.",
          massnahme: "Material, Bild und Symbol werden regelmäßig miteinander verknüpft.",
          evaluation: "Die Übertragung von Handlung zur Rechnung wird anhand von Aufgaben überprüft."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      kompetenz: "Umgang mit Material",
      gruppe: "Materialeinsatz",
      rating: "unsicher",
      istStandVarianten: [
        "Der zielgerichtete Einsatz von Anschauungsmaterial fällt #ihm/ihr# noch schwer.",
        "Ohne Anleitung nutzt _ Material noch nicht durchgängig passend zur Aufgabenlösung.",
        "Die Übertragung von Handlung zu Bild, Symbol oder Rechnung gelingt #ihm/ihr# noch nicht ausreichend sicher."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Material angeleitet zur Darstellung von Aufgaben nutzen.",
          massnahme: "_ stellt Aufgaben handelnd dar und überträgt sie in Zeichnung und Rechnung.",
          evaluation: "Es wird beobachtet, ob _ Material zunehmend passend zur Aufgabenlösung nutzt."
        },
        {
          ziel: "Rechenwege mithilfe von Material erklären.",
          massnahme: "Material, Bild und Rechnung werden gemeinsam versprachlicht und miteinander verknüpft.",
          evaluation: "Die Übertragung von Handlung zur Rechnung wird anhand von Aufgaben überprüft."
        }
      ]
    }
  ];

  const gruppenSaetzeMathe12Weitere = [
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      gruppe: "Geometrie Grundlagen",
      istStandBundle: "Einfache Formen, Muster oder Lagebeziehungen erkennt und beschreibt _ noch nicht durchgängig sicher.",
      hilfeSatz: "Bau- und Legematerial, Sortieraufgaben und anschaulich eingeführte Fachbegriffe unterstützen #ihn/sie# beim geometrischen Lernen."
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 1/2",
      gruppe: "Materialeinsatz",
      istStandBundle: "Anschauungsmaterial nutzt _ noch nicht durchgängig zielgerichtet zur Lösung mathematischer Aufgaben.",
      hilfeSatz: "Angeleiteter Materialeinsatz und die Verknüpfung von Handlung, Bild und Rechnung geben #ihm/ihr# Orientierung."
    }
  ];

  const endkatalogMathe34ZahlenRechnen = [
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Zahlenraum und Zahlvorstellung",
      gruppe: "Zahlen und Stellenwert",
      rating: "gesichert",
      istStandVarianten: [
        "_ orientiert sich im größeren Zahlenraum zunehmend sicher.",
        "Zahlen kann _ zunehmend sicher darstellen, vergleichen und ordnen.",
        "Im Umgang mit größeren Zahlen zeigt _ zunehmend mehr Sicherheit."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Zahlenraum und Zahlvorstellung",
      gruppe: "Zahlen und Stellenwert",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Zahlen im größeren Zahlenraum stellt, vergleicht oder ordnet _ noch nicht immer sicher.",
        "Mit Stellenwerttafel, Zahlenstrahl oder Material kann _ größere Zahlen besser einordnen.",
        "Beim Vergleichen und Ordnen größerer Zahlen braucht _ noch Orientierung durch strukturierte Darstellungen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Zahlen im größeren Zahlenraum sicherer darstellen, vergleichen und ordnen.",
          massnahme: "Zahlen werden mit Stellenwerttafel, Zahlenstrahl und Stellenwertmaterial dargestellt und verglichen.",
          evaluation: "Aufgaben zur Zahlorientierung werden im Förderzeitraum verglichen."
        },
        {
          ziel: "Zahlbeziehungen im größeren Zahlenraum erkennen.",
          massnahme: "Zahlen werden zerlegt, am Zahlenstrahl eingeordnet und mit Nachbarzahlen verglichen.",
          evaluation: "Es wird beobachtet, ob _ Zahlbeziehungen zunehmend sicherer erkennt und nutzt."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Zahlenraum und Zahlvorstellung",
      gruppe: "Zahlen und Stellenwert",
      rating: "unsicher",
      istStandVarianten: [
        "Der Aufbau einer sicheren Zahlvorstellung im größeren Zahlenraum fällt #ihm/ihr# noch schwer.",
        "Größere Zahlen kann _ noch nicht durchgängig sicher darstellen, vergleichen oder ordnen.",
        "Ohne Stellenwerttafel, Zahlenstrahl oder Material verliert _ bei größeren Zahlen noch leicht die Orientierung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Eine tragfähigere Zahlvorstellung im größeren Zahlenraum aufbauen.",
          massnahme: "Zahlen werden handelnd, bildlich und symbolisch dargestellt, zerlegt und verglichen.",
          evaluation: "Es wird überprüft, ob _ größere Zahlen zunehmend sicherer darstellt und einordnet."
        },
        {
          ziel: "Zahlen am Zahlenstrahl sicherer einordnen.",
          massnahme: "Zahlenstrahl, Stellenwerttafel und Zahlenkarten werden regelmäßig zur Orientierung genutzt.",
          evaluation: "Die Orientierung am Zahlenstrahl wird anhand ausgewählter Aufgaben beobachtet."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Stellenwertverständnis",
      gruppe: "Zahlen und Stellenwert",
      rating: "gesichert",
      istStandVarianten: [
        "_ nutzt Stellenwerte in vertrauten Aufgaben zunehmend sicher.",
        "Zahlen kann _ zunehmend stellenwertgerecht darstellen und zerlegen.",
        "Mit der Stellenwerttafel arbeitet _ zunehmend sicherer."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Stellenwertverständnis",
      gruppe: "Zahlen und Stellenwert",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Stellenwerte nutzt _ noch nicht durchgängig sicher beim Darstellen und Rechnen.",
        "Beim Zerlegen und Bündeln größerer Zahlen braucht _ noch Orientierung.",
        "Die Stellenwerttafel hilft #ihm/ihr#, Zahlen strukturierter darzustellen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Stellenwerte sicherer benennen und nutzen.",
          massnahme: "Zahlen werden gelegt, gelesen, zerlegt und in der Stellenwerttafel dargestellt.",
          evaluation: "Es wird überprüft, ob _ Stellenwerte zunehmend sicherer anwendet."
        },
        {
          ziel: "Zahlen stellenwertgerecht zerlegen.",
          massnahme: "Zahlen werden regelmäßig in Einer, Zehner, Hunderter und Tausender zerlegt und mit Material veranschaulicht.",
          evaluation: "Die stellenwertgerechte Zerlegung von Zahlen wird im Förderzeitraum verglichen."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Stellenwertverständnis",
      gruppe: "Zahlen und Stellenwert",
      rating: "unsicher",
      istStandVarianten: [
        "Das sichere Verstehen und Nutzen von Stellenwerten fällt #ihm/ihr# noch schwer.",
        "Beim Bündeln, Entbündeln oder Zerlegen größerer Zahlen zeigt _ noch deutliche Unsicherheiten.",
        "Stellenwertfehler erschweren #ihm/ihr# noch das Darstellen und Rechnen mit größeren Zahlen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Stellenwerte handelnd und bildlich sichern.",
          massnahme: "Stellenwerte werden mit Mehrsystemmaterial, Stellenwerttafel und Zahlkarten aufgebaut und wiederholt.",
          evaluation: "Es wird beobachtet, ob _ Stellenwerte zunehmend sicherer erkennt und darstellt."
        },
        {
          ziel: "Bündeln und Entbündeln beim Rechnen besser verstehen.",
          massnahme: "Bündelungs- und Entbündelungsprozesse werden mit Material gelegt, versprachlicht und in Rechenaufgaben übertragen.",
          evaluation: "Die Nutzung von Stellenwerten beim Rechnen wird anhand ausgewählter Aufgaben überprüft."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Addition und Subtraktion",
      gruppe: "Operationen",
      rating: "gesichert",
      istStandVarianten: [
        "_ löst Additions- und Subtraktionsaufgaben zunehmend sicher.",
        "Bei geübten Plus- und Minusaufgaben zeigt _ zunehmend Sicherheit im Rechenweg.",
        "Additions- und Subtraktionsaufgaben kann _ zunehmend nachvollziehbar bearbeiten."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Addition und Subtraktion",
      gruppe: "Operationen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Additions- und Subtraktionsaufgaben löst _ noch nicht durchgängig sicher.",
        "Beim Rechnen mit größeren Zahlen braucht _ noch Orientierung durch Rechenstrich, Stellenwerttafel oder Material.",
        "Rechenwege kann _ besser nachvollziehen, wenn sie sichtbar dargestellt und besprochen werden."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Additions- und Subtraktionsaufgaben sicherer lösen.",
          massnahme: "Rechenwege werden mit Rechenstrich, Stellenwerttafel oder Material dargestellt und verglichen.",
          evaluation: "Rechenaufgaben werden im Förderzeitraum auf Ergebnisgenauigkeit und Rechenweg überprüft."
        },
        {
          ziel: "Rechenwege nachvollziehbar darstellen.",
          massnahme: "Aufgaben werden schrittweise gelöst, notiert und mit kurzen Erklärungen versprachlicht.",
          evaluation: "Es wird beobachtet, ob _ Rechenwege zunehmend nachvollziehbar darstellt."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Addition und Subtraktion",
      gruppe: "Operationen",
      rating: "unsicher",
      istStandVarianten: [
        "Das sichere Lösen von Additions- und Subtraktionsaufgaben fällt #ihm/ihr# noch schwer.",
        "Beim Plus- und Minusrechnen mit größeren Zahlen verliert _ noch häufig den Überblick.",
        "Stellenwertfehler oder unsichere Rechenstrategien erschweren #ihm/ihr# noch die Bearbeitung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Additions- und Subtraktionsaufgaben schrittweise bearbeiten.",
          massnahme: "Aufgaben werden kleinschrittig mit Stellenwerttafel, Material oder Rechenstrich aufgebaut.",
          evaluation: "Es wird überprüft, ob _ Aufgaben zunehmend sicherer und geordneter löst."
        },
        {
          ziel: "Stellenwerte beim Addieren und Subtrahieren beachten.",
          massnahme: "Rechenschritte werden farblich oder räumlich nach Stellenwerten geordnet und gemeinsam kontrolliert.",
          evaluation: "Die Beachtung der Stellenwerte wird anhand ausgewählter Rechenaufgaben beobachtet."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Schriftliche Rechenverfahren",
      gruppe: "Operationen",
      rating: "gesichert",
      istStandVarianten: [
        "_ führt geübte schriftliche Rechenverfahren zunehmend geordnet aus.",
        "Bei bekannten schriftlichen Verfahren achtet _ zunehmend auf Stellenwerte und Rechenschritte.",
        "Schriftliche Aufgaben kann _ mit vertrauter Schrittfolge zunehmend sicher bearbeiten."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Schriftliche Rechenverfahren",
      gruppe: "Operationen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Schriftliche Rechenverfahren führt _ noch nicht immer sicher und geordnet aus.",
        "Bei schriftlichen Verfahren braucht _ noch Orientierung durch Schrittfolge, Stellenwertfarben oder Kontrollhilfen.",
        "Überträge, Stellenwerte oder Rechenzeichen beachtet _ noch nicht durchgängig sicher."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Schriftliche Rechenverfahren geordneter anwenden.",
          massnahme: "Rechenschritte werden mit Schrittkarte, Stellenwertfarben und Kontrollstrategie eingeübt.",
          evaluation: "Schriftliche Rechenaufgaben werden im Hinblick auf Stellenwert, Übertrag und Kontrolle verglichen."
        },
        {
          ziel: "Rechenschritte bei schriftlichen Verfahren sorgfältiger kontrollieren.",
          massnahme: "Kurze Kontrollphasen mit Überschlagen, Gegenrechnen oder Schrittkarte werden fest eingeplant.",
          evaluation: "Es wird überprüft, ob _ Fehler in schriftlichen Verfahren zunehmend erkennt und verbessert."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Schriftliche Rechenverfahren",
      gruppe: "Operationen",
      rating: "unsicher",
      istStandVarianten: [
        "Schriftliche Rechenverfahren kann _ noch nicht zuverlässig und geordnet durchführen.",
        "Beim schriftlichen Rechnen führen Unsicherheiten bei Stellenwerten, Überträgen oder Rechenschritten noch häufig zu Fehlern.",
        "Ohne klare Schrittfolge verliert _ bei schriftlichen Verfahren noch leicht die Orientierung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Schriftliche Rechenverfahren mit Schrittfolge anwenden.",
          massnahme: "Jeder Rechenschritt wird mit einer sichtbaren Schrittkarte eingeführt, geübt und kontrolliert.",
          evaluation: "Die Durchführung schriftlicher Verfahren wird anhand ausgewählter Aufgaben dokumentiert."
        },
        {
          ziel: "Stellenwerte und Überträge beim schriftlichen Rechnen beachten.",
          massnahme: "Stellenwerte und Überträge werden farblich markiert und nach jedem Rechenschritt kontrolliert.",
          evaluation: "Es wird beobachtet, ob _ Stellenwerte und Überträge zunehmend sicherer berücksichtigt."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Multiplikation und Division",
      gruppe: "Operationen",
      rating: "gesichert",
      istStandVarianten: [
        "_ nutzt geübte Multiplikations- und Divisionsaufgaben zunehmend sicher.",
        "Bekannte Einmaleinsaufgaben kann _ zunehmend abrufen und anwenden.",
        "Multiplikation und Division verknüpft _ in geübten Aufgaben zunehmend sicher."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Multiplikation und Division",
      gruppe: "Operationen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Multiplikations- und Divisionsaufgaben löst _ noch nicht durchgängig sicher.",
        "Kernaufgaben und Aufgabenbeziehungen nutzt _ noch nicht immer zuverlässig.",
        "Divisionen gelingen _ sicherer, wenn sie handelnd oder mit Umkehraufgaben dargestellt werden."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Multiplikation und Division sicherer miteinander verknüpfen.",
          massnahme: "Aufgaben werden mit Punktefeldern, Kernaufgaben und Umkehraufgaben erarbeitet.",
          evaluation: "Es wird überprüft, ob _ Aufgaben des Einmaleins und passende Divisionsaufgaben sicherer nutzt."
        },
        {
          ziel: "Kernaufgaben und Ableitungsstrategien nutzen.",
          massnahme: "Kernaufgaben, Tauschaufgaben, Nachbaraufgaben und Umkehraufgaben werden regelmäßig geübt.",
          evaluation: "Der Einsatz von Ableitungsstrategien wird im Förderzeitraum beobachtet."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Multiplikation und Division",
      gruppe: "Operationen",
      rating: "unsicher",
      istStandVarianten: [
        "Das sichere Lösen von Multiplikations- und Divisionsaufgaben fällt #ihm/ihr# noch schwer.",
        "Einmaleinsaufgaben ruft _ noch nicht zuverlässig ab und kann sie noch nicht sicher auf Divisionsaufgaben übertragen.",
        "Der Zusammenhang zwischen Multiplikation und Division ist noch nicht ausreichend gesichert."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Einmaleinsaufgaben sicherer abrufen und anwenden.",
          massnahme: "Einmaleinsreihen werden mit Punktefeldern, Kernaufgaben und kurzen Wiederholungsphasen gefestigt.",
          evaluation: "Die Sicherheit bei geübten Einmaleinsaufgaben wird im Förderzeitraum verglichen."
        },
        {
          ziel: "Division als Umkehroperation der Multiplikation verstehen.",
          massnahme: "Divisionsaufgaben werden handelnd gelegt, verteilt, gebündelt und mit passenden Malaufgaben verbunden.",
          evaluation: "Es wird überprüft, ob _ zu Divisionsaufgaben passende Multiplikationsaufgaben findet."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Rechenstrategien und Kopfrechnen",
      gruppe: "Operationen",
      rating: "gesichert",
      istStandVarianten: [
        "_ nutzt einzelne Kopfrechenstrategien zunehmend sicher.",
        "Bei geübten Aufgaben kann _ passende Strategien zunehmend anwenden.",
        "Zahl- und Aufgabenbeziehungen helfen _, Kopfrechenaufgaben zunehmend sicherer zu lösen."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Rechenstrategien und Kopfrechnen",
      gruppe: "Operationen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Kopfrechenstrategien wählt _ noch nicht immer passend aus.",
        "Strategien wie Zerlegen, Ergänzen, Verdoppeln oder Halbieren nutzt _ noch nicht durchgängig sicher.",
        "Beim Kopfrechnen braucht _ noch Zeit, um Aufgabenbeziehungen zu erkennen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Kopfrechenstrategien gezielter nutzen.",
          massnahme: "Zerlegen, Verdoppeln, Halbieren, Ergänzen und Nachbaraufgaben werden regelmäßig geübt.",
          evaluation: "Der Strategieeinsatz beim Kopfrechnen wird in kurzen Übungsphasen beobachtet."
        },
        {
          ziel: "Rechenwege erklären und vergleichen.",
          massnahme: "Verschiedene Kopfrechenwege werden gesammelt, dargestellt und gemeinsam besprochen.",
          evaluation: "Es wird beobachtet, ob _ eigene Rechenwege zunehmend nachvollziehbar erklärt."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Rechenstrategien und Kopfrechnen",
      gruppe: "Operationen",
      rating: "unsicher",
      istStandVarianten: [
        "Das Auswählen und Anwenden passender Rechenstrategien fällt #ihm/ihr# noch deutlich schwer.",
        "Beim Kopfrechnen greift _ noch häufig auf unsichere oder zählende Vorgehensweisen zurück.",
        "Zahlbeziehungen und Rechenvorteile erkennt _ noch nicht durchgängig."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Eine passende Kopfrechenstrategie mit Unterstützung auswählen.",
          massnahme: "Strategien werden einzeln eingeführt, visualisiert und an kurzen Aufgabenserien geübt.",
          evaluation: "Es wird überprüft, ob _ eine vereinbarte Strategie zunehmend passend nutzt."
        },
        {
          ziel: "Aufgabenbeziehungen beim Kopfrechnen erkennen und nutzen.",
          massnahme: "Zahlbeziehungen, Nachbaraufgaben und Rechenvorteile werden gemeinsam markiert und wiederholt angewendet.",
          evaluation: "Die Nutzung von Aufgabenbeziehungen wird im Förderzeitraum beobachtet."
        }
      ]
    }
  ];

  const gruppenSaetzeMathe34ZahlenRechnen = [
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      gruppe: "Zahlen und Stellenwert",
      istStandBundle: "Zahlen im größeren Zahlenraum und Stellenwerte nutzt _ noch nicht durchgängig sicher.",
      hilfeSatz: "Stellenwerttafel, Zahlenstrahl und handelnde Darstellungen unterstützen #ihn/sie# beim Aufbau tragfähiger Zahlvorstellungen."
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      gruppe: "Operationen",
      istStandBundle: "Bei Grundrechenarten, schriftlichen Verfahren oder Kopfrechenstrategien zeigen sich noch Unsicherheiten.",
      hilfeSatz: "Materialgestützte Darstellungen, Schrittfolgen und das Vergleichen von Rechenwegen unterstützen #ihn/sie# beim Rechnen."
    }
  ];

  const endkatalogMathe34Weitere = [
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Sachaufgaben",
      gruppe: "Sachrechnen",
      rating: "gesichert",
      istStandVarianten: [
        "_ bearbeitet überschaubare Sachaufgaben zunehmend strukturiert.",
        "Wichtige Informationen in einfachen Sachaufgaben erkennt _ zunehmend sicher.",
        "Mit einer bekannten Schrittfolge kann _ Sachaufgaben zunehmend nachvollziehbar lösen."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Sachaufgaben",
      gruppe: "Sachrechnen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Sachaufgaben bearbeitet _ noch nicht durchgängig strukturiert.",
        "Wichtige Informationen erkennt _ sicherer, wenn die Aufgabe markiert oder zeichnerisch unterstützt wird.",
        "Beim Auswählen einer passenden Rechnung braucht _ noch Orientierung durch eine feste Schrittfolge."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Sachaufgaben strukturierter bearbeiten.",
          massnahme: "Sachaufgaben werden mit der Schrittfolge Frage, Daten, Rechnung und Antwort bearbeitet.",
          evaluation: "Bearbeitete Sachaufgaben werden auf passende Rechnung und Antwortsatz überprüft."
        },
        {
          ziel: "Wichtige Informationen in Sachaufgaben erkennen und nutzen.",
          massnahme: "Wichtige Angaben werden markiert, geordnet und mithilfe von Skizzen oder Tabellen dargestellt.",
          evaluation: "Es wird überprüft, ob _ relevante Informationen zunehmend sicherer auswählt."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Sachaufgaben",
      gruppe: "Sachrechnen",
      rating: "unsicher",
      istStandVarianten: [
        "Das Erschließen von Sachaufgaben fällt #ihm/ihr# noch deutlich schwer.",
        "In Sachaufgaben erkennt _ noch nicht sicher, welche Informationen für die Lösung wichtig sind.",
        "Ohne klare Schrittfolge, Skizze oder sprachliche Entlastung verliert _ bei Sachaufgaben noch leicht den Überblick."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Sachaufgaben mithilfe einer festen Schrittfolge lösen.",
          massnahme: "Frage, Daten, Rechnung und Antwort werden farblich markiert und nacheinander bearbeitet.",
          evaluation: "Es wird beobachtet, ob _ die Schrittfolge zunehmend sicherer nutzt."
        },
        {
          ziel: "Zu Sachsituationen passende Rechnungen finden.",
          massnahme: "Sachsituationen werden handelnd, bildlich oder mit Skizzen dargestellt und anschließend in Rechnungen übertragen.",
          evaluation: "Die Auswahl passender Rechnungen wird anhand ausgewählter Sachaufgaben überprüft."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Größen",
      gruppe: "Größen und Sachrechnen",
      rating: "gesichert",
      istStandVarianten: [
        "_ ordnet bekannte Größen und Einheiten zunehmend sicher zu.",
        "Mit realem Material kann _ Größen zunehmend sicher vergleichen und einschätzen.",
        "In vertrauten Sachsituationen nutzt _ Größenangaben zunehmend passend."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Größen",
      gruppe: "Größen und Sachrechnen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Größen und passende Einheiten ordnet _ noch nicht durchgängig sicher zu.",
        "Beim Schätzen, Messen oder Vergleichen von Größen braucht _ noch konkrete Anschauung.",
        "Reale Materialien helfen #ihm/ihr#, Größenangaben besser einzuordnen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Größen und Einheiten sicherer zuordnen und vergleichen.",
          massnahme: "Größen werden mit realem Material geschätzt, gemessen, verglichen und in Sachsituationen angewendet.",
          evaluation: "Aufgaben zu Größen und Einheiten werden im Förderzeitraum verglichen."
        },
        {
          ziel: "Größenangaben in Sachsituationen nutzen.",
          massnahme: "Sachsituationen mit Geld, Zeit, Längen oder Gewichten werden handelnd und bildlich unterstützt bearbeitet.",
          evaluation: "Es wird überprüft, ob _ Größenangaben zunehmend passend in Rechnungen verwendet."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Größen",
      gruppe: "Größen und Sachrechnen",
      rating: "unsicher",
      istStandVarianten: [
        "Der Umgang mit Größen, Einheiten und passenden Rechenwegen fällt #ihm/ihr# noch schwer.",
        "Größenangaben kann _ noch nicht sicher vergleichen, schätzen oder in Aufgaben nutzen.",
        "Ohne reale Anschauung oder klare Struktur verliert _ bei Größenaufgaben noch leicht die Orientierung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Grundlegende Größen und Einheiten sicherer unterscheiden.",
          massnahme: "Geld, Zeit, Längen oder Gewichte werden mit realem Material handelnd verglichen und geordnet.",
          evaluation: "Es wird beobachtet, ob _ Größen und Einheiten zunehmend sicherer zuordnet."
        },
        {
          ziel: "Einfache Größenaufgaben mit Unterstützung lösen.",
          massnahme: "Größenaufgaben werden mit Skizzen, Tabellen oder konkretem Material vorbereitet und bearbeitet.",
          evaluation: "Die Bearbeitung ausgewählter Größenaufgaben wird im Förderzeitraum verglichen."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Geometrie",
      gruppe: "Geometrie",
      rating: "gesichert",
      istStandVarianten: [
        "_ erkennt und benennt geometrische Formen und Körper zunehmend sicher.",
        "Bei handelnden geometrischen Aufgaben zeigt _ zunehmend mehr Sicherheit.",
        "Geometrische Eigenschaften kann _ in vertrauten Aufgaben zunehmend beschreiben."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Geometrie",
      gruppe: "Geometrie",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Geometrische Formen, Körper oder Eigenschaften unterscheidet _ noch nicht immer sicher.",
        "Beim Beschreiben geometrischer Eigenschaften braucht _ noch Anschauung und passende Fachbegriffe.",
        "Geometrische Aufgaben gelingen _ besser, wenn Formen und Körper handelnd sortiert oder gebaut werden."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Geometrische Formen und Körper sicherer benennen und unterscheiden.",
          massnahme: "Formen und Körper werden handelnd sortiert, gebaut, beschrieben und mit Fachbegriffen verknüpft.",
          evaluation: "Die Bearbeitung geometrischer Aufgaben wird anhand ausgewählter Arbeitsergebnisse überprüft."
        },
        {
          ziel: "Geometrische Eigenschaften genauer beschreiben.",
          massnahme: "Eigenschaften wie Ecke, Kante, Fläche, Seite oder Symmetrie werden an Material markiert und versprachlicht.",
          evaluation: "Es wird beobachtet, ob _ geometrische Eigenschaften zunehmend treffender benennt."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Geometrie",
      gruppe: "Geometrie",
      rating: "unsicher",
      istStandVarianten: [
        "Das Erkennen, Unterscheiden oder Beschreiben geometrischer Formen und Körper fällt #ihm/ihr# noch schwer.",
        "Bei geometrischen Aufgaben braucht _ noch klare Anschauung, Material und kleinschrittige Anleitung.",
        "Geometrische Fachbegriffe und Eigenschaften nutzt _ noch nicht durchgängig sicher."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Geometrische Formen und Körper handelnd erschließen.",
          massnahme: "Formen und Körper werden gelegt, gebaut, sortiert, verglichen und mit Fachbegriffen benannt.",
          evaluation: "Es wird überprüft, ob _ Formen und Körper zunehmend sicherer erkennt und unterscheidet."
        },
        {
          ziel: "Geometrische Aufgaben mit Material und Anleitung bearbeiten.",
          massnahme: "Aufgaben werden mit konkretem Material, Rasterhilfen oder Schrittfolgen vorbereitet.",
          evaluation: "Ausgewählte geometrische Arbeitsergebnisse werden im Förderzeitraum verglichen."
        }
      ]
    },

    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Daten, Tabellen und Diagramme",
      gruppe: "Daten und Darstellungen",
      rating: "gesichert",
      istStandVarianten: [
        "_ entnimmt einfachen Tabellen oder Diagrammen zunehmend sicher Informationen.",
        "In übersichtlichen Darstellungen kann _ Informationen zunehmend erkennen und nutzen.",
        "Bei bekannten Aufgabenformaten arbeitet _ zunehmend sicher mit Tabellen oder Diagrammen."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Daten, Tabellen und Diagramme",
      gruppe: "Daten und Darstellungen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Informationen aus Tabellen und Diagrammen entnimmt _ noch nicht immer sicher.",
        "Beim Lesen von Tabellen oder Diagrammen braucht _ noch Leitfragen und Markierungen.",
        "Übersichtliche Darstellungen kann _ sicherer nutzen als komplexere Tabellen oder Diagramme."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Informationen aus Tabellen und Diagrammen gezielter entnehmen.",
          massnahme: "Tabellen und Diagramme werden gemeinsam gelesen, markiert und mit Leitfragen ausgewertet.",
          evaluation: "Es wird überprüft, ob _ Informationen aus Darstellungen zunehmend sicherer entnimmt."
        },
        {
          ziel: "Daten ordnen und in einfachen Darstellungen nutzen.",
          massnahme: "Daten werden gesammelt, sortiert und in Tabellen oder einfachen Diagrammen dargestellt.",
          evaluation: "Die Bearbeitung von Aufgaben zu Daten und Darstellungen wird im Förderzeitraum verglichen."
        }
      ]
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      kompetenz: "Daten, Tabellen und Diagramme",
      gruppe: "Daten und Darstellungen",
      rating: "unsicher",
      istStandVarianten: [
        "Das Entnehmen von Informationen aus Tabellen oder Diagrammen fällt #ihm/ihr# noch schwer.",
        "In Darstellungen erkennt _ noch nicht sicher, welche Informationen wichtig sind.",
        "Ohne Markierungen, Leitfragen oder gemeinsame Auswertung verliert _ bei Tabellen und Diagrammen noch leicht die Übersicht."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Einfache Tabellen und Diagramme mit Unterstützung lesen.",
          massnahme: "Darstellungen werden schrittweise gelesen, farblich markiert und mit konkreten Fragen ausgewertet.",
          evaluation: "Es wird beobachtet, ob _ Informationen aus einfachen Darstellungen zunehmend sicherer entnimmt."
        },
        {
          ziel: "Daten in einfachen Darstellungen ordnen und beschreiben.",
          massnahme: "Daten werden gemeinsam gesammelt, sortiert und mit Satzanfängen beschrieben.",
          evaluation: "Arbeitsergebnisse zu Daten und Diagrammen werden im Förderzeitraum verglichen."
        }
      ]
    }
  ];

  const gruppenSaetzeMathe34Weitere = [
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      gruppe: "Sachrechnen",
      istStandBundle: "Sachaufgaben bearbeitet _ noch nicht durchgängig strukturiert.",
      hilfeSatz: "Die Schrittfolge Frage, Daten, Rechnung und Antwort gibt #ihm/ihr# Orientierung."
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      gruppe: "Größen und Sachrechnen",
      istStandBundle: "Größen, Einheiten und passende Rechenwege ordnet _ noch nicht sicher genug zu.",
      hilfeSatz: "Reales Material, Schätzen, Messen und Vergleichen unterstützen #ihn/sie# beim Umgang mit Größen."
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      gruppe: "Geometrie",
      istStandBundle: "Geometrische Formen, Körper oder Eigenschaften erkennt und beschreibt _ noch nicht durchgängig sicher.",
      hilfeSatz: "Bauen, Sortieren, Zeichnen und das Nutzen von Fachbegriffen unterstützen #ihn/sie# beim geometrischen Arbeiten."
    },
    {
      bereich: "Mathematik",
      klasse: "Klasse 3/4",
      gruppe: "Daten und Darstellungen",
      istStandBundle: "Informationen aus Tabellen, Diagrammen oder Darstellungen entnimmt _ noch nicht immer sicher.",
      hilfeSatz: "Markierungen, Leitfragen und gemeinsame Auswertungsschritte unterstützen #ihn/sie# beim Arbeiten mit Darstellungen."
    }
  ];

  const endkatalogEmotionalSozial = [
    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Emotionsregulation",
      gruppe: "emotionale Regulation",
      rating: "gesichert",
      istStandVarianten: [
        "_ kann eigene Gefühle in vertrauten Situationen teilweise benennen.",
        "In vertrauten Situationen zeigt _ zunehmend, wenn #er/sie# sich freut, verunsichert ist oder Hilfe braucht.",
        "Mit bekannten Bezugspersonen gelingt es #ihm/ihr# zunehmend besser, Gefühle auszudrücken."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Emotionsregulation",
      gruppe: "emotionale Regulation",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "In emotional belastenden Situationen braucht _ noch Unterstützung, um Gefühle angemessen zu regulieren.",
        "Eigene Gefühle kann _ teilweise benennen, benötigt aber noch Hilfe beim Finden passender Handlungswege.",
        "Ruhige Rückmeldungen helfen #ihm/ihr#, nach emotionaler Anspannung wieder handlungsfähiger zu werden."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Eigene Gefühle wahrnehmen und angemessen benennen.",
          massnahme: "Gefühlskarten, Skalen oder kurze Reflexionsgespräche werden regelmäßig eingesetzt.",
          evaluation: "Es wird beobachtet, ob _ Gefühle häufiger passend benennt und vereinbarte Hilfen nutzt."
        },
        {
          ziel: "In belastenden Situationen vereinbarte Beruhigungsstrategien nutzen.",
          massnahme: "Beruhigungsstrategien werden vorab eingeübt, sichtbar gemacht und in Belastungssituationen ruhig erinnert.",
          evaluation: "Die Nutzung vereinbarter Beruhigungsstrategien wird im Förderzeitraum beobachtet."
        }
      ]
    },
    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Emotionsregulation",
      gruppe: "emotionale Regulation",
      rating: "unsicher",
      istStandVarianten: [
        "In emotional belastenden Situationen fällt es #ihm/ihr# noch schwer, Gefühle angemessen zu regulieren.",
        "Starke Gefühle führen bei _ noch häufig dazu, dass #er/sie# nicht mehr angemessen reagieren kann.",
        "Nach emotionaler Anspannung findet _ noch nicht selbstständig in die Lern- oder Spielsituation zurück."
      ],
      zielMassnahmePaare: [
        {
          ziel: "In emotional belastenden Situationen wieder handlungsfähig werden.",
          massnahme: "Ein kurzer Rückzugs- oder Beruhigungsablauf wird vereinbart, eingeübt und bei Bedarf begleitet.",
          evaluation: "Es wird dokumentiert, ob _ nach Belastungssituationen schneller wieder in die Situation zurückfindet."
        },
        {
          ziel: "Gefühle angemessen ausdrücken, ohne andere zu verletzen.",
          massnahme: "Passende Ausdrucksmöglichkeiten werden mit Gefühlskarten, Rollenspiel oder kurzen Nachbesprechungen eingeübt.",
          evaluation: "Es wird beobachtet, ob _ Gefühle häufiger verbal oder mit vereinbarten Hilfen ausdrückt."
        }
      ]
    },

    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Konfliktverhalten",
      gruppe: "soziales Handeln",
      rating: "gesichert",
      istStandVarianten: [
        "_ kann einfache Konflikte mit Unterstützung zunehmend klären.",
        "In vertrauten Situationen nimmt _ Hilfe bei Konflikten zunehmend an.",
        "Bei klarer Begleitung gelingt es #ihm/ihr# zunehmend, Konflikte verbal zu besprechen."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Konfliktverhalten",
      gruppe: "soziales Handeln",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "In Konfliktsituationen gelingt es #ihm/ihr# noch nicht immer, angemessen zu reagieren.",
        "Konflikte kann _ mit Unterstützung zunehmend besprechen, braucht dabei aber noch klare Gesprächsschritte.",
        "Bei Streitigkeiten helfen #ihm/ihr# ruhige Begleitung und eine klare Struktur zur Klärung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Konflikte zunehmend verbal klären.",
          massnahme: "Konfliktsituationen werden zeitnah, ruhig und mit klaren Gesprächsschritten nachbesprochen.",
          evaluation: "Die Anwendung vereinbarter Konfliktstrategien wird im Förderzeitraum beobachtet."
        },
        {
          ziel: "Bei Konflikten Hilfe einfordern, bevor die Situation eskaliert.",
          massnahme: "Hilfe-Signale und kurze Satzmuster zur Konfliktklärung werden eingeübt und sichtbar angeboten.",
          evaluation: "Es wird beobachtet, ob _ in Konflikten häufiger Hilfe einfordert oder Gesprächsschritte nutzt."
        }
      ]
    },
    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Konfliktverhalten",
      gruppe: "soziales Handeln",
      rating: "unsicher",
      istStandVarianten: [
        "In Konfliktsituationen fällt es #ihm/ihr# noch schwer, angemessen zu reagieren und verbale Klärungswege zu nutzen.",
        "Bei Streitigkeiten reagiert _ noch häufig impulsiv oder zieht sich zurück, bevor eine Klärung möglich ist.",
        "Eigene Anteile an Konflikten erkennt _ derzeit nur mit deutlicher Begleitung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Vereinbarte Gesprächsschritte in Konflikten nutzen.",
          massnahme: "Konfliktgespräche werden mit festen Schritten, Symbolen und kurzen Satzanfängen unterstützt.",
          evaluation: "Es wird dokumentiert, ob _ vereinbarte Gesprächsschritte häufiger anwendet."
        },
        {
          ziel: "Eigene Anteile an Konflikten mit Unterstützung erkennen.",
          massnahme: "Konfliktsituationen werden mit Bildern, kurzen Fragen oder Rollenspiel wertschätzend nachbesprochen.",
          evaluation: "Die Beteiligung an Konfliktklärungen wird im Förderzeitraum beobachtet."
        }
      ]
    },

    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Regelverhalten",
      gruppe: "soziales Handeln",
      rating: "gesichert",
      istStandVarianten: [
        "_ hält bekannte Regeln in klar strukturierten Situationen zunehmend ein.",
        "In vertrauten Unterrichtssituationen orientiert sich _ zunehmend an vereinbarten Regeln.",
        "Nach kurzer Erinnerung kann _ bekannte Regeln häufiger einhalten."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Regelverhalten",
      gruppe: "soziales Handeln",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Vereinbarte Regeln hält _ noch nicht in allen Situationen sicher ein.",
        "Besonders in Übergängen oder offenen Phasen braucht _ noch Erinnerung an bekannte Regeln.",
        "Klare Absprachen und kurze Erinnerungen helfen #ihm/ihr#, das eigene Verhalten besser auszurichten."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Vereinbarte Klassenregeln zunehmend sicher einhalten.",
          massnahme: "Regeln werden vor Übergängen kurz erinnert und positives Regelverhalten unmittelbar rückgemeldet.",
          evaluation: "Das Regelverhalten wird in Unterrichts- und Übergangssituationen beobachtet."
        },
        {
          ziel: "Auf Erinnerungen angemessen reagieren.",
          massnahme: "Erinnerungen erfolgen kurz, ruhig und mit Bezug auf die vereinbarte Regel.",
          evaluation: "Es wird beobachtet, ob _ nach Erinnerungen häufiger zum vereinbarten Verhalten zurückfindet."
        }
      ]
    },
    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Regelverhalten",
      gruppe: "soziales Handeln",
      rating: "unsicher",
      istStandVarianten: [
        "In offenen Unterrichts- oder Pausensituationen gelingt es #ihm/ihr# noch nicht durchgängig, vereinbarte Regeln einzuhalten.",
        "Das Einhalten gemeinsamer Regeln fällt _ besonders dann schwer, wenn Situationen wenig strukturiert sind.",
        "Bei Regelverstößen braucht _ noch klare, vorhersehbare Rückmeldung und Begleitung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Regeln auch in offenen Situationen beachten.",
          massnahme: "Offene Phasen werden vorstrukturiert, Regeln werden visualisiert und vorab kurz besprochen.",
          evaluation: "Es wird dokumentiert, ob _ Regeln in offenen Situationen häufiger einhält."
        },
        {
          ziel: "Eigenes Verhalten stärker an bekannten Absprachen ausrichten.",
          massnahme: "Kurze Reflexionen zu gelungenen Situationen und konkreten nächsten Schritten werden regelmäßig durchgeführt.",
          evaluation: "Das Verhalten in ausgewählten Situationen wird im Förderzeitraum beobachtet und kurz reflektiert."
        }
      ]
    },

    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Kontaktverhalten",
      gruppe: "soziales Handeln",
      rating: "gesichert",
      istStandVarianten: [
        "_ nimmt in vertrauten Situationen zunehmend Kontakt zu Mitschülerinnen und Mitschülern auf.",
        "In klar strukturierten Partner- oder Gruppensituationen beteiligt sich _ zunehmend am gemeinsamen Arbeiten.",
        "Mit bekannten Kindern gelingen _ soziale Kontakte zunehmend sicherer."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Kontaktverhalten",
      gruppe: "soziales Handeln",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Der Kontakt zu Mitschülerinnen und Mitschülern gelingt #ihm/ihr# in klar strukturierten Situationen leichter als in offenen sozialen Situationen.",
        "In Partner- oder Gruppenarbeiten braucht _ noch Orientierung, um angemessen Kontakt aufzunehmen und zu halten.",
        "Klare Rollen und kurze Gesprächshilfen erleichtern #ihm/ihr# die Beteiligung in sozialen Situationen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Kontakt angemessen aufnehmen und halten.",
          massnahme: "Partner- und Kleingruppenphasen werden mit klaren Rollen und kurzen Gesprächshilfen vorbereitet.",
          evaluation: "Die Kontaktaufnahme und Mitarbeit in Partner- und Gruppensituationen werden beobachtet."
        },
        {
          ziel: "In Partner- und Gruppenarbeiten kooperativer handeln.",
          massnahme: "Kooperative Aufgaben werden mit festen Rollen, kurzen Absprachen und anschließender Rückmeldung durchgeführt.",
          evaluation: "Es wird beobachtet, ob _ Rollen und Absprachen in kooperativen Situationen häufiger einhält."
        }
      ]
    },
    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Kontaktverhalten",
      gruppe: "soziales Handeln",
      rating: "unsicher",
      istStandVarianten: [
        "Offene soziale Situationen fallen #ihm/ihr# noch schwer und führen häufig zu Unsicherheit oder unangemessener Kontaktaufnahme.",
        "Kontaktaufnahme und gemeinsames Handeln gelingen _ derzeit vor allem mit enger Begleitung.",
        "In Gruppen- oder Spielsituationen braucht _ noch klare Orientierung, um angemessen mit anderen in Kontakt zu treten."
      ],
      zielMassnahmePaare: [
        {
          ziel: "In klar strukturierten Situationen angemessen Kontakt aufnehmen.",
          massnahme: "Kontaktaufnahme wird mit Satzanfängen, Rollenspiel und konkreten Gesprächsanlässen eingeübt.",
          evaluation: "Es wird beobachtet, ob _ in strukturierten Situationen häufiger angemessen Kontakt aufnimmt."
        },
        {
          ziel: "Auf Beiträge oder Handlungen anderer angemessen reagieren.",
          massnahme: "Reaktionen auf andere werden in kurzen sozialen Übungen, Partneraufgaben und Nachbesprechungen trainiert.",
          evaluation: "Die Reaktionen auf Beiträge anderer werden in Partner- und Gruppensituationen beobachtet."
        }
      ]
    },

    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Frustrationstoleranz",
      gruppe: "emotionale Regulation",
      rating: "gesichert",
      istStandVarianten: [
        "_ kann kleinere Fehler oder Misserfolge mit Unterstützung zunehmend annehmen.",
        "Bei überschaubaren Schwierigkeiten findet _ mit Ermutigung wieder in die Aufgabe zurück.",
        "In vertrauten Situationen gelingt es #ihm/ihr# zunehmend, nach Fehlern weiterzuarbeiten."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Frustrationstoleranz",
      gruppe: "emotionale Regulation",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Bei Fehlern oder Misserfolgen fällt es #ihm/ihr# noch nicht immer leicht, ruhig zu bleiben und weiterzuarbeiten.",
        "Schwierige Aufgaben führen bei _ noch zu Verunsicherung, wenn der nächste Schritt nicht klar ist.",
        "Erreichbare Zwischenschritte helfen #ihm/ihr#, Misserfolge besser auszuhalten."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Bei Fehlern vereinbarte Hilfen nutzen und die Aufgabe wieder aufnehmen.",
          massnahme: "Fehler werden wertschätzend besprochen und erreichbare Zwischenschritte sichtbar gemacht.",
          evaluation: "Es wird beobachtet, ob _ nach Fehlern vereinbarte Hilfen nutzt und zur Aufgabe zurückfindet."
        },
        {
          ziel: "Schwierige Aufgaben mit Unterstützung weiterbearbeiten.",
          massnahme: "Aufgaben werden in kleine Teilschritte gegliedert und Fortschritte unmittelbar rückgemeldet.",
          evaluation: "Die Weiterarbeit nach schwierigen Aufgabenmomenten wird im Förderzeitraum dokumentiert."
        }
      ]
    },
    {
      bereich: "Emotionalität, Sozialverhalten",
      kompetenz: "Frustrationstoleranz",
      gruppe: "emotionale Regulation",
      rating: "unsicher",
      istStandVarianten: [
        "Bei Fehlern oder Misserfolgen fällt es #ihm/ihr# noch schwer, ruhig zu bleiben und weiterzuarbeiten.",
        "Frustration führt bei _ noch häufig dazu, dass #er/sie# die Aufgabe abbricht oder sich der Situation entzieht.",
        "Nach Misserfolgen braucht _ noch klare Begleitung, um wieder in die Aufgabe zurückzufinden."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Frustrationen schrittweise besser aushalten.",
          massnahme: "Belastende Situationen werden mit kurzen Pausen, klaren Zwischenschritten und ruhiger Rückmeldung begleitet.",
          evaluation: "Es wird beobachtet, ob _ belastende Situationen zunehmend länger aushält."
        },
        {
          ziel: "Nach Misserfolgen wieder in die Aufgabe zurückfinden.",
          massnahme: "Ein vereinbarter Rückkehrschritt wird eingeübt und in schwierigen Situationen ruhig erinnert.",
          evaluation: "Es wird dokumentiert, ob _ nach Misserfolgen häufiger zur Aufgabe zurückkehrt."
        }
      ]
    }
  ];

  const gruppenSaetzeEmotionalSozial = [
    {
      bereich: "Emotionalität, Sozialverhalten",
      gruppe: "emotionale Regulation",
      istStandBundle: "In emotional belastenden Situationen, bei Fehlern oder nach Misserfolgen fällt es #ihm/ihr# noch schwer, ruhig zu bleiben und angemessen weiterzuarbeiten.",
      hilfeSatz: "Verlässliche Absprachen, ruhige Rückmeldungen und erreichbare Zwischenschritte geben #ihm/ihr# Orientierung."
    },
    {
      bereich: "Emotionalität, Sozialverhalten",
      gruppe: "soziales Handeln",
      istStandBundle: "Konflikte, offene soziale Situationen und die Einhaltung gemeinsamer Regeln brauchen derzeit noch eine klare Begleitung.",
      hilfeSatz: "Feste Gesprächsschritte, klare Rollen und vorhersehbare Absprachen unterstützen #ihn/sie# im sozialen Handeln."
    }
  ];

  const endkatalogSpracheKommunikation = [
    {
      bereich: "Sprache / Kommunikation",
      kompetenz: "Arbeitsaufträge verstehen",
      gruppe: "Sprachverständnis",
      rating: "gesichert",
      istStandVarianten: [
        "_ setzt einfache und vertraute Arbeitsaufträge bereits um.",
        "Einfache Arbeitsaufträge versteht _ in vertrauten Situationen zunehmend sicher.",
        "In bekannten Unterrichtssituationen kann _ kurze Arbeitsaufträge umsetzen."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Sprache / Kommunikation",
      kompetenz: "Arbeitsaufträge verstehen",
      gruppe: "Sprachverständnis",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Mehrschrittige Arbeitsaufträge versteht #er/sie# noch nicht immer sicher.",
        "Bei längeren Arbeitsaufträgen braucht _ noch eine klare Strukturierung der einzelnen Handlungsschritte.",
        "Mündliche Arbeitsaufträge setzt _ sicherer um, wenn sie zusätzlich visualisiert oder wiederholt werden."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Mehrschrittige Arbeitsaufträge sicherer verstehen und umsetzen.",
          massnahme: "Arbeitsaufträge werden kurz, klar und zusätzlich visualisiert angeboten.",
          evaluation: "Die Umsetzung mehrschrittiger Arbeitsaufträge wird in wiederkehrenden Unterrichtssituationen beobachtet."
        },
        {
          ziel: "Wichtige Handlungsschritte aus Arbeitsaufträgen entnehmen.",
          massnahme: "Aufträge werden in einzelne Schritte gegliedert und vor Arbeitsbeginn kurz gesichert.",
          evaluation: "Es wird beobachtet, ob _ die einzelnen Handlungsschritte zunehmend selbstständiger umsetzt."
        }
      ]
    },
    {
      bereich: "Sprache / Kommunikation",
      kompetenz: "Arbeitsaufträge verstehen",
      gruppe: "Sprachverständnis",
      rating: "unsicher",
      istStandVarianten: [
        "Neue oder sprachlich komplexere Arbeitsaufträge fallen #ihm/ihr# noch schwer.",
        "Ohne zusätzliche Klärung beginnt _ Arbeitsaufträge häufig unsicher oder nicht zielgerichtet.",
        "Mehrschrittige mündliche Anweisungen kann _ noch nicht durchgängig behalten und umsetzen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Arbeitsaufträge mithilfe klarer Handlungsschritte umsetzen.",
          massnahme: "Arbeitsaufträge werden mit Symbolen, Bildern oder einer Schrittkarte unterstützt.",
          evaluation: "Es wird dokumentiert, ob _ Arbeitsaufträge mithilfe der visualisierten Schritte sicherer bearbeitet."
        },
        {
          ziel: "Bei unklaren Arbeitsaufträgen gezielt nachfragen.",
          massnahme: "Nachfrage-Sätze werden eingeübt und vor Arbeitsphasen sichtbar angeboten.",
          evaluation: "Es wird beobachtet, ob _ bei Unklarheiten häufiger angemessen nachfragt."
        }
      ]
    },

    {
      bereich: "Sprache / Kommunikation",
      kompetenz: "Wortschatz",
      gruppe: "Wortschatz und Begriffsbildung",
      rating: "gesichert",
      istStandVarianten: [
        "_ nutzt bekannte Begriffe in vertrauten Unterrichtssituationen zunehmend sicher.",
        "Bekannte Wörter und Fachbegriffe verwendet _ in geübten Zusammenhängen passend.",
        "In vertrauten Themenbereichen kann _ zentrale Begriffe verständlich nutzen."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Sprache / Kommunikation",
      kompetenz: "Wortschatz",
      gruppe: "Wortschatz und Begriffsbildung",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Neue Begriffe versteht und verwendet #er/sie# noch nicht durchgängig sicher.",
        "Fachbegriffe kann _ besser nutzen, wenn sie anschaulich eingeführt und wiederholt werden.",
        "Der aktive Wortschatz reicht in vertrauten Situationen eher aus als bei neuen Unterrichtsinhalten."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Neue Begriffe verstehen und passend anwenden.",
          massnahme: "Neue Begriffe werden vorentlastet, visualisiert und in wiederkehrenden Situationen angewendet.",
          evaluation: "Die Anwendung neuer Begriffe wird in Unterrichtsgesprächen und Arbeitsergebnissen beobachtet."
        },
        {
          ziel: "Fachbegriffe in Unterrichtssituationen sicherer nutzen.",
          massnahme: "Wortkarten, Bildkarten und Wortfelder werden sichtbar bereitgestellt und regelmäßig aufgegriffen.",
          evaluation: "Es wird überprüft, ob _ Fachbegriffe zunehmend passend verwendet."
        }
      ]
    },
    {
      bereich: "Sprache / Kommunikation",
      kompetenz: "Wortschatz",
      gruppe: "Wortschatz und Begriffsbildung",
      rating: "unsicher",
      istStandVarianten: [
        "Ein eingeschränkter Wortschatz erschwert #ihm/ihr# noch das Verstehen und Formulieren im Unterricht.",
        "Bei neuen Themen fehlen _ häufig passende Wörter, um Inhalte genau zu verstehen oder auszudrücken.",
        "Wortbedeutungen müssen für _ noch regelmäßig geklärt, veranschaulicht und wiederholt werden."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Den aktiven Wortschatz erweitern.",
          massnahme: "Wörter werden gesammelt, sortiert, visualisiert und in kurzen Sätzen angewendet.",
          evaluation: "Es wird dokumentiert, ob _ neue Wörter zunehmend passend verwendet."
        },
        {
          ziel: "Wortbedeutungen sicherer erfassen.",
          massnahme: "Neue Wörter werden mit Bildern, Beispielen, Handlungen oder Gegenständen verknüpft.",
          evaluation: "Die Nutzung neuer Wörter wird in mündlichen Beiträgen und Arbeitsergebnissen beobachtet."
        }
      ]
    },

    {
      bereich: "Sprache / Kommunikation",
      kompetenz: "Satzbildung",
      gruppe: "Ausdruck und Satzbildung",
      rating: "gesichert",
      istStandVarianten: [
        "_ bildet in vertrauten Situationen einfache verständliche Sätze.",
        "Einfache Aussagen kann _ in bekannten Gesprächssituationen verständlich formulieren.",
        "In geübten Zusammenhängen gelingen _ einfache Satzmuster zunehmend sicher."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Sprache / Kommunikation",
      kompetenz: "Satzbildung",
      gruppe: "Ausdruck und Satzbildung",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Eigene Aussagen sind noch nicht immer vollständig oder klar strukturiert.",
        "Beim Formulieren eigener Gedanken braucht _ noch Satzmuster oder sprachliche Impulse.",
        "Mit Satzanfängen und Bildimpulsen kann _ eigene Aussagen verständlicher formulieren."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Vollständige Sätze bilden.",
          massnahme: "Satzanfänge, Satzmuster und Bildimpulse werden als Formulierungshilfen angeboten.",
          evaluation: "Die Satzbildung wird in mündlichen und schriftlichen Unterrichtssituationen beobachtet."
        },
        {
          ziel: "Eigene Aussagen verständlicher strukturieren.",
          massnahme: "Aussagen werden gemeinsam geordnet, erweitert und mithilfe von Modellsätzen wiederholt.",
          evaluation: "Es wird überprüft, ob _ eigene Aussagen zunehmend vollständiger und verständlicher formuliert."
        }
      ]
    },
    {
      bereich: "Sprache / Kommunikation",
      kompetenz: "Satzbildung",
      gruppe: "Ausdruck und Satzbildung",
      rating: "unsicher",
      istStandVarianten: [
        "Das Formulieren vollständiger und verständlicher Sätze fällt #ihm/ihr# noch deutlich schwer.",
        "Eigene Aussagen bleiben häufig unvollständig oder für andere schwer nachvollziehbar.",
        "Beim Versprachlichen eigener Gedanken braucht _ noch klare sprachliche Modelle."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Eigene Gedanken in einfachen vollständigen Sätzen ausdrücken.",
          massnahme: "Kurze Satzmuster werden wiederholt gesprochen, gelegt, ergänzt und verschriftlicht.",
          evaluation: "Es wird beobachtet, ob _ eigene Gedanken häufiger in vollständigen Sätzen äußert."
        },
        {
          ziel: "Aussagen mithilfe vorgegebener Satzmuster verständlicher formulieren.",
          massnahme: "Satzstarter, Satzbaukarten und gemeinsame Formulierungsphasen werden regelmäßig eingesetzt.",
          evaluation: "Mündliche und schriftliche Äußerungen werden im Förderzeitraum auf Verständlichkeit überprüft."
        }
      ]
    },

    {
      bereich: "Sprache / Kommunikation",
      kompetenz: "Gesprächsverhalten",
      gruppe: "Gespräch und Kommunikation",
      rating: "gesichert",
      istStandVarianten: [
        "_ beteiligt sich in vertrauten Gesprächssituationen zunehmend am Austausch.",
        "In klar strukturierten Gesprächen bringt _ eigene Beiträge zunehmend ein.",
        "Bei bekannten Gesprächsformen kann _ einfache Gesprächsregeln zunehmend beachten."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Sprache / Kommunikation",
      kompetenz: "Gesprächsverhalten",
      gruppe: "Gespräch und Kommunikation",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Gesprächsregeln wie Zuhören, Abwarten oder Bezugnehmen gelingen #ihm/ihr# noch nicht immer sicher.",
        "In Gesprächssituationen braucht _ noch Erinnerung, um abzuwarten und auf Beiträge anderer einzugehen.",
        "Eigene Beiträge bringt _ ein, benötigt dabei aber noch Orientierung an klaren Gesprächsregeln."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Gesprächsregeln zunehmend beachten.",
          massnahme: "Gesprächsregeln werden visualisiert, vor Gesprächsanlässen erinnert und anschließend kurz reflektiert.",
          evaluation: "Das Gesprächsverhalten wird in Partner-, Gruppen- und Unterrichtsgesprächen beobachtet."
        },
        {
          ziel: "Auf Beiträge anderer angemessen reagieren.",
          massnahme: "Satzanfänge für Rückmeldungen und Bezugnahmen werden eingeführt und regelmäßig genutzt.",
          evaluation: "Es wird beobachtet, ob _ häufiger passend auf Beiträge anderer reagiert."
        }
      ]
    },
    {
      bereich: "Sprache / Kommunikation",
      kompetenz: "Gesprächsverhalten",
      gruppe: "Gespräch und Kommunikation",
      rating: "unsicher",
      istStandVarianten: [
        "In Gesprächen fällt es #ihm/ihr# noch schwer, zuzuhören, abzuwarten und eigene Beiträge passend einzubringen.",
        "Offene Gesprächssituationen überfordern _ noch häufig, wenn Rollen und Gesprächsregeln nicht klar vorgegeben sind.",
        "Eigene Beiträge sind für _ leichter möglich, wenn Gesprächsanlässe klar strukturiert sind."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Eigene Beiträge verständlich und passend einbringen.",
          massnahme: "Strukturierte Gesprächsanlässe, Satzanfänge und klare Sprecherwechsel werden regelmäßig eingeübt.",
          evaluation: "Es wird beobachtet, ob _ Gesprächsregeln häufiger einhält und Beiträge verständlicher einbringt."
        },
        {
          ziel: "In Gesprächen zuhören und abwarten.",
          massnahme: "Kurze Gesprächsrunden mit klaren Rollen, Symbolen und vereinbarten Sprecherwechseln werden eingesetzt.",
          evaluation: "Das Zuhören und Abwarten wird in ausgewählten Gesprächssituationen beobachtet."
        }
      ]
    }
  ];

  const gruppenSaetzeSpracheKommunikation = [
    {
      bereich: "Sprache / Kommunikation",
      gruppe: "Sprachverständnis",
      istStandBundle: "Mehrschrittige Arbeitsaufträge und neue sprachliche Anforderungen versteht #er/sie# noch nicht immer sicher.",
      hilfeSatz: "Kurze Formulierungen, Visualisierungen und wiederkehrende Handlungsschritte erleichtern #ihm/ihr# das Verstehen."
    },
    {
      bereich: "Sprache / Kommunikation",
      gruppe: "Wortschatz und Begriffsbildung",
      istStandBundle: "Neue Begriffe und fachsprachliche Wörter versteht und verwendet #er/sie# noch nicht durchgängig sicher.",
      hilfeSatz: "Bildkarten, Wortfelder und wiederholte Anwendungssituationen unterstützen #ihn/sie# beim Wortschatzaufbau."
    },
    {
      bereich: "Sprache / Kommunikation",
      gruppe: "Ausdruck und Satzbildung",
      istStandBundle: "Eigene Aussagen sind noch nicht immer vollständig, klar strukturiert oder für andere gut verständlich.",
      hilfeSatz: "Satzmuster, Bildimpulse und gemeinsame Formulierungsphasen geben #ihm/ihr# sprachliche Orientierung."
    },
    {
      bereich: "Sprache / Kommunikation",
      gruppe: "Gespräch und Kommunikation",
      istStandBundle: "In Gesprächen braucht #er/sie# noch klare Strukturen, um zuzuhören, abzuwarten und eigene Beiträge passend einzubringen.",
      hilfeSatz: "Visualisierte Gesprächsregeln, Satzanfänge und klare Sprecherwechsel unterstützen #ihn/sie# in Gesprächssituationen."
    }
  ];

  const endkatalogMotorik = [
    {
      bereich: "Motorik",
      kompetenz: "Feinmotorik",
      gruppe: "Feinmotorische Handlungsfähigkeit",
      rating: "gesichert",
      istStandVarianten: [
        "_ bewältigt einfache feinmotorische Anforderungen zunehmend sicher.",
        "Feinmotorische Tätigkeiten gelingen _ in vertrauten Situationen zunehmend genauer.",
        "Bei überschaubaren feinmotorischen Aufgaben zeigt _ bereits mehr Sicherheit."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Motorik",
      kompetenz: "Feinmotorik",
      gruppe: "Feinmotorische Handlungsfähigkeit",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Feinmotorische Tätigkeiten gelingen #ihm/ihr# noch nicht immer sicher und ausdauernd.",
        "Bei Schneide-, Falt- oder Klebearbeiten braucht _ noch Zeit und genaue Orientierung.",
        "Kleine Handgriffe führt _ sicherer aus, wenn Material und Arbeitsschritte übersichtlich vorbereitet sind."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Feinmotorische Tätigkeiten sicherer ausführen.",
          massnahme: "Schneide-, Falt-, Steck- und Sortieraufgaben werden regelmäßig in kurzen Übungsphasen angeboten.",
          evaluation: "Die Ausführung feinmotorischer Tätigkeiten wird anhand ausgewählter Arbeitsergebnisse beobachtet."
        },
        {
          ziel: "Feinmotorische Ausdauer bei überschaubaren Aufgaben erweitern.",
          massnahme: "Feinmotorische Aufgaben werden in kleine Arbeitsschritte gegliedert und mit kurzen Pausen verbunden.",
          evaluation: "Es wird beobachtet, ob _ feinmotorische Aufgaben zunehmend ausdauernder bearbeitet."
        }
      ]
    },
    {
      bereich: "Motorik",
      kompetenz: "Feinmotorik",
      gruppe: "Feinmotorische Handlungsfähigkeit",
      rating: "unsicher",
      istStandVarianten: [
        "Feinmotorische Anforderungen kosten #ihn/sie# noch viel Kraft und führen schnell zu Ermüdung.",
        "Das genaue Greifen, Schneiden, Falten oder Kleben fällt #ihm/ihr# noch deutlich schwer.",
        "Bei feinmotorischen Aufgaben benötigt _ noch kleinschrittige Anleitung und entlastende Pausen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Handgeschicklichkeit und feinmotorische Genauigkeit erweitern.",
          massnahme: "Feinmotorische Übungen werden kleinschrittig aufgebaut, vorgemacht und regelmäßig wiederholt.",
          evaluation: "Es wird beobachtet, ob _ feinmotorische Aufgaben zunehmend genauer ausführt."
        },
        {
          ziel: "Feinmotorische Aufgaben mit weniger Ermüdung bearbeiten.",
          massnahme: "Arbeitsumfang, Materialauswahl und Pausen werden an die motorische Belastbarkeit angepasst.",
          evaluation: "Die Ausdauer und Genauigkeit bei feinmotorischen Aufgaben werden im Förderzeitraum dokumentiert."
        }
      ]
    },

    {
      bereich: "Motorik",
      kompetenz: "Graphomotorik",
      gruppe: "Schreibmotorik",
      rating: "gesichert",
      istStandVarianten: [
        "_ kann einzelne Schreibbewegungen zunehmend kontrollierter ausführen.",
        "In kurzen Schreibphasen gelingt _ eine zunehmend sichere Linienführung.",
        "Schreibmotorische Anforderungen bewältigt _ bei überschaubarem Umfang zunehmend besser."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Motorik",
      kompetenz: "Graphomotorik",
      gruppe: "Schreibmotorik",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Beim Schreiben zeigen sich noch Unsicherheiten in Stifthaltung, Druckdosierung oder Linienführung.",
        "Das Schriftbild ist bei längeren Schreibphasen noch nicht durchgängig gleichmäßig.",
        "Kurze Schreibaufgaben gelingen _ sicherer als umfangreichere Schreibphasen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Schreibbewegungen kontrollierter ausführen.",
          massnahme: "Schwungübungen, kurze Schreibphasen und gezielte Rückmeldungen zur Stifthaltung werden eingesetzt.",
          evaluation: "Schriftbild, Linienführung und Schreibausdauer werden anhand ausgewählter Schreibproben beobachtet."
        },
        {
          ziel: "Das Schriftbild in kurzen Schreibphasen gleichmäßiger gestalten.",
          massnahme: "Lineatur, Schreibumfang und Schreibtempo werden angepasst und regelmäßig reflektiert.",
          evaluation: "Schreibproben werden im Hinblick auf Lesbarkeit und Gleichmäßigkeit verglichen."
        }
      ]
    },
    {
      bereich: "Motorik",
      kompetenz: "Graphomotorik",
      gruppe: "Schreibmotorik",
      rating: "unsicher",
      istStandVarianten: [
        "Graphomotorische Anforderungen erschweren #ihm/ihr# noch ein flüssiges und gut lesbares Schreiben.",
        "Beim Schreiben ermüdet _ noch schnell und verliert dadurch an Genauigkeit.",
        "Stifthaltung, Druckdosierung oder Linienführung gelingen #ihm/ihr# noch nicht ausreichend sicher."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Das Schriftbild lesbarer und gleichmäßiger gestalten.",
          massnahme: "Schreibumfang, Lineatur und Übungsformate werden angepasst und regelmäßig überprüft.",
          evaluation: "Es wird verglichen, ob Schreibproben im Förderzeitraum lesbarer und gleichmäßiger werden."
        },
        {
          ziel: "Schreibmotorische Ausdauer schrittweise erweitern.",
          massnahme: "Kurze Schreibsequenzen werden mit Entlastungspausen, Schwungübungen und klaren Schreibzielen verbunden.",
          evaluation: "Die Schreibausdauer und Lesbarkeit werden anhand kurzer Schreibproben dokumentiert."
        }
      ]
    },

    {
      bereich: "Motorik",
      kompetenz: "Grobmotorik",
      gruppe: "Körperkoordination",
      rating: "gesichert",
      istStandVarianten: [
        "_ beteiligt sich an Bewegungsangeboten zunehmend sicher.",
        "Grundlegende Bewegungsaufgaben gelingen _ in vertrauten Situationen zunehmend besser.",
        "Bei bekannten Bewegungsabläufen zeigt _ mehr Sicherheit und Orientierung."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Motorik",
      kompetenz: "Grobmotorik",
      gruppe: "Körperkoordination",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Bei Bewegungsaufgaben zeigen sich noch Unsicherheiten in Koordination, Gleichgewicht oder Kraftdosierung.",
        "Bewegungsabläufe gelingen _ sicherer, wenn sie vorgemacht und kleinschrittig geübt werden.",
        "In bekannten Bewegungssituationen findet _ eher Sicherheit als bei neuen Anforderungen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Bewegungsabläufe koordinierter ausführen.",
          massnahme: "Koordinations-, Gleichgewichts- und Bewegungsaufgaben werden in überschaubaren Übungsformen angeboten.",
          evaluation: "Die Ausführung ausgewählter Bewegungsaufgaben wird im Unterricht beobachtet."
        },
        {
          ziel: "Bei Bewegungsaufgaben Gleichgewicht und Kraftdosierung sicherer steuern.",
          massnahme: "Bewegungsaufgaben werden vorgemacht, wiederholt geübt und durch klare Rückmeldungen begleitet.",
          evaluation: "Es wird beobachtet, ob _ Gleichgewicht und Kraftdosierung zunehmend sicherer einsetzt."
        }
      ]
    },
    {
      bereich: "Motorik",
      kompetenz: "Grobmotorik",
      gruppe: "Körperkoordination",
      rating: "unsicher",
      istStandVarianten: [
        "Komplexere Bewegungsabläufe fallen #ihm/ihr# noch deutlich schwer.",
        "Koordination, Gleichgewicht oder Kraftdosierung gelingen #ihm/ihr# bei Bewegungsaufgaben noch nicht durchgängig sicher.",
        "Neue Bewegungsanforderungen verunsichern _ noch, besonders wenn mehrere Bewegungsanteile verbunden werden müssen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Sicherheit bei grundlegenden Bewegungsabläufen aufbauen.",
          massnahme: "Bewegungsaufgaben werden kleinschrittig angeleitet, vorgemacht und wiederholt geübt.",
          evaluation: "Es wird beobachtet, ob _ ausgewählte Bewegungsabläufe zunehmend sicherer ausführt."
        },
        {
          ziel: "Koordination und Gleichgewicht in einfachen Bewegungsaufgaben verbessern.",
          massnahme: "Gleichgewichts-, Koordinations- und Körperwahrnehmungsübungen werden regelmäßig in kurzen Sequenzen eingesetzt.",
          evaluation: "Die Sicherheit bei ausgewählten Bewegungsaufgaben wird im Förderzeitraum dokumentiert."
        }
      ]
    }
  ];

  const gruppenSaetzeMotorik = [
    {
      bereich: "Motorik",
      gruppe: "Feinmotorische Handlungsfähigkeit",
      istStandBundle: "Feinmotorische Tätigkeiten gelingen #ihm/ihr# noch nicht immer sicher, genau oder ausdauernd.",
      hilfeSatz: "Kurze feinmotorische Übungsphasen, anschauliches Material und entlastende Pausen unterstützen #ihn/sie# bei der Ausführung."
    },
    {
      bereich: "Motorik",
      gruppe: "Schreibmotorik",
      istStandBundle: "Beim Schreiben zeigen sich noch Unsicherheiten in Stifthaltung, Druckdosierung, Linienführung oder Schreibausdauer.",
      hilfeSatz: "Angepasste Schreibphasen, passende Lineatur und gezielte Rückmeldungen geben #ihm/ihr# Orientierung."
    },
    {
      bereich: "Motorik",
      gruppe: "Körperkoordination",
      istStandBundle: "Koordination, Gleichgewicht oder Kraftdosierung gelingen #ihm/ihr# bei Bewegungsaufgaben noch nicht durchgängig sicher.",
      hilfeSatz: "Kleinschrittige Bewegungsangebote, Vormachen und wiederholtes Üben unterstützen #ihn/sie# beim Aufbau motorischer Sicherheit."
    }
  ];

  const endkatalogWahrnehmung = [
    {
      bereich: "Wahrnehmung",
      kompetenz: "visuelle Wahrnehmung",
      gruppe: "visuelle Wahrnehmung",
      rating: "gesichert",
      istStandVarianten: [
        "_ nutzt visuelle Informationen in übersichtlichen Situationen zunehmend sicher.",
        "In klar strukturierten Darstellungen kann _ wichtige visuelle Informationen erfassen.",
        "Bei überschaubaren Aufgaben erkennt _ Formen, Muster oder Lagebeziehungen zunehmend sicher."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Wahrnehmung",
      kompetenz: "visuelle Wahrnehmung",
      gruppe: "visuelle Wahrnehmung",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Visuelle Informationen erfasst #er/sie# in übersichtlichen Situationen sicherer als bei komplexeren Darstellungen.",
        "Beim genauen Vergleichen, Zuordnen oder Unterscheiden visueller Merkmale braucht _ noch Orientierung.",
        "Raum-Lage-Beziehungen gelingen _ sicherer, wenn Aufgaben klar strukturiert und visuell reduziert sind."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Visuelle Informationen genauer erfassen und unterscheiden.",
          massnahme: "Such-, Sortier- und Zuordnungsaufgaben werden mit klaren visuellen Hilfen angeboten.",
          evaluation: "Die Bearbeitung visueller Aufgaben wird anhand ausgewählter Arbeitsproben beobachtet."
        },
        {
          ziel: "Raum-Lage-Beziehungen sicherer erkennen.",
          massnahme: "Übungen zu oben, unten, rechts, links, davor, dahinter und neben werden handelnd und bildlich durchgeführt.",
          evaluation: "Es wird überprüft, ob _ Raum-Lage-Beziehungen in Aufgaben zunehmend sicherer erkennt."
        }
      ]
    },
    {
      bereich: "Wahrnehmung",
      kompetenz: "visuelle Wahrnehmung",
      gruppe: "visuelle Wahrnehmung",
      rating: "unsicher",
      istStandVarianten: [
        "Das genaue Erfassen, Unterscheiden oder räumliche Einordnen visueller Informationen fällt #ihm/ihr# noch schwer.",
        "Bei unübersichtlichen Darstellungen verliert _ noch leicht die Orientierung.",
        "Visuelle Merkmale wie Form, Richtung, Lage oder Muster erkennt _ noch nicht durchgängig sicher."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Visuelle Merkmale sicherer erkennen und unterscheiden.",
          massnahme: "Übungen zu Formen, Mustern, Richtungen und visueller Differenzierung werden regelmäßig eingesetzt.",
          evaluation: "Es wird beobachtet, ob _ visuelle Merkmale zunehmend genauer erkennt und unterscheidet."
        },
        {
          ziel: "Sich in visuellen Darstellungen besser orientieren.",
          massnahme: "Arbeitsblätter und Aufgaben werden visuell reduziert, markiert und mit klaren Orientierungshilfen versehen.",
          evaluation: "Die Orientierung in visuellen Aufgaben wird anhand ausgewählter Arbeitsergebnisse überprüft."
        }
      ]
    },

    {
      bereich: "Wahrnehmung",
      kompetenz: "auditive Wahrnehmung",
      gruppe: "auditive Wahrnehmung",
      rating: "gesichert",
      istStandVarianten: [
        "_ nimmt vertraute akustische Signale und sprachliche Hinweise zunehmend sicher wahr.",
        "Kurze mündliche Hinweise kann _ in ruhigen Situationen zunehmend sicher aufnehmen.",
        "In überschaubaren Hörsituationen setzt _ akustische Informationen zunehmend passend um."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Wahrnehmung",
      kompetenz: "auditive Wahrnehmung",
      gruppe: "auditive Wahrnehmung",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Mündliche Informationen nimmt #er/sie# in ruhigen Situationen sicherer auf als bei störenden Geräuschen.",
        "Längere mündliche Hinweise kann _ noch nicht immer vollständig behalten und umsetzen.",
        "Akustische Signale und sprachliche Informationen gelingen _ besser, wenn sie kurz und klar angeboten werden."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Mündliche Informationen gezielter aufnehmen.",
          massnahme: "Mündliche Hinweise werden kurz formuliert, wiederholt und bei Bedarf visualisiert.",
          evaluation: "Es wird beobachtet, ob _ mündliche Hinweise zunehmend sicherer umsetzt."
        },
        {
          ziel: "Wichtige Informationen aus kurzen Hörimpulsen entnehmen.",
          massnahme: "Kurze Hör- und Nachsprechübungen werden regelmäßig in überschaubaren Situationen eingesetzt.",
          evaluation: "Die Umsetzung kurzer Hörimpulse wird in ausgewählten Unterrichtssituationen beobachtet."
        }
      ]
    },
    {
      bereich: "Wahrnehmung",
      kompetenz: "auditive Wahrnehmung",
      gruppe: "auditive Wahrnehmung",
      rating: "unsicher",
      istStandVarianten: [
        "Das Heraushören, Merken und Verarbeiten mündlicher Informationen fällt #ihm/ihr# noch schwer.",
        "Bei längeren oder mehreren mündlichen Informationen verliert _ noch leicht den Überblick.",
        "Störgeräusche erschweren #ihm/ihr# noch deutlich das Aufnehmen und Umsetzen sprachlicher Hinweise."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Wichtige auditive Informationen gezielter wahrnehmen und nutzen.",
          massnahme: "Hörübungen, klare Signale und kurze Wiederholungen werden regelmäßig eingesetzt.",
          evaluation: "Die Umsetzung auditiver Informationen wird in ausgewählten Unterrichtssituationen beobachtet."
        },
        {
          ziel: "Mündliche Arbeitsaufträge vollständiger behalten und umsetzen.",
          massnahme: "Mündliche Aufträge werden in kurzen Einheiten gegeben, wiederholt und durch Symbole oder Gesten unterstützt.",
          evaluation: "Es wird dokumentiert, ob _ mündliche Aufträge zunehmend vollständiger umsetzt."
        }
      ]
    }
  ];

  const gruppenSaetzeWahrnehmung = [
    {
      bereich: "Wahrnehmung",
      gruppe: "visuelle Wahrnehmung",
      istStandBundle: "Das genaue Erfassen, Unterscheiden oder räumliche Einordnen visueller Informationen fällt #ihm/ihr# noch nicht durchgängig sicher.",
      hilfeSatz: "Übersichtliche Darstellungen, Markierungen und wiederkehrende Übungen unterstützen #ihn/sie# bei der visuellen Orientierung."
    },
    {
      bereich: "Wahrnehmung",
      gruppe: "auditive Wahrnehmung",
      istStandBundle: "Mündliche Informationen nimmt und verarbeitet #er/sie# noch nicht immer sicher, besonders bei längeren Aufträgen oder Störgeräuschen.",
      hilfeSatz: "Kurze Hinweise, Wiederholungen, klare Signale und ergänzende Visualisierungen erleichtern #ihm/ihr# die Verarbeitung."
    }
  ];

  const endkatalogKognition = [
    {
      bereich: "Kognition",
      kompetenz: "Merkfähigkeit",
      gruppe: "Merkfähigkeit und Speicherung",
      rating: "gesichert",
      istStandVarianten: [
        "_ merkt sich vertraute Abläufe und Inhalte zunehmend sicher.",
        "Bekannte Routinen und wiederkehrende Inhalte kann _ zunehmend sicher abrufen.",
        "In vertrauten Situationen gelingt es _, geübte Inhalte wiederzuerkennen und anzuwenden."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Kognition",
      kompetenz: "Merkfähigkeit",
      gruppe: "Merkfähigkeit und Speicherung",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Neue Inhalte oder mehrschrittige Abläufe kann #er/sie# noch nicht immer sicher behalten.",
        "Beim Merken neuer Informationen helfen #ihm/ihr# Wiederholungen und visuelle Stützen.",
        "Geübte Inhalte ruft _ sicherer ab als neue oder wenig wiederholte Lerninhalte."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Wichtige Inhalte und Handlungsschritte besser behalten.",
          massnahme: "Inhalte werden wiederholt, visualisiert und mit festen Routinen verknüpft.",
          evaluation: "Es wird beobachtet, ob _ neue Inhalte und Handlungsschritte zunehmend sicherer erinnert."
        },
        {
          ziel: "Merkhilfen gezielter nutzen.",
          massnahme: "Bildkarten, Merksätze, Symbole oder kurze Wiederholungsphasen werden regelmäßig eingesetzt.",
          evaluation: "Die Nutzung vereinbarter Merkhilfen wird im Unterricht beobachtet."
        }
      ]
    },
    {
      bereich: "Kognition",
      kompetenz: "Merkfähigkeit",
      gruppe: "Merkfähigkeit und Speicherung",
      rating: "unsicher",
      istStandVarianten: [
        "Das Behalten und Abrufen neuer Inhalte fällt #ihm/ihr# noch deutlich schwer.",
        "Neue Informationen gehen #ihm/ihr# ohne Wiederholung und Visualisierung noch schnell verloren.",
        "Mehrschrittige Abläufe kann _ noch nicht durchgängig speichern und selbstständig abrufen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Neue Inhalte mithilfe vereinbarter Merkhilfen abrufen.",
          massnahme: "Merkhilfen, Wiederholungsphasen und kurze Abrufübungen werden regelmäßig eingesetzt.",
          evaluation: "Die Nutzung von Merkhilfen und der Abruf geübter Inhalte werden dokumentiert."
        },
        {
          ziel: "Mehrschrittige Abläufe sicherer behalten.",
          massnahme: "Abläufe werden in einzelne Schritte gegliedert, visualisiert und regelmäßig wiederholt.",
          evaluation: "Es wird überprüft, ob _ mehrschrittige Abläufe zunehmend vollständiger umsetzt."
        }
      ]
    },

    {
      bereich: "Kognition",
      kompetenz: "Strategien",
      gruppe: "Lernstrategien",
      rating: "gesichert",
      istStandVarianten: [
        "_ nutzt bekannte Strategien in vertrauten Aufgaben zunehmend sicher.",
        "In geübten Aufgabenformaten kann _ vereinbarte Strategien zunehmend anwenden.",
        "Bekannte Vorgehensweisen helfen _, Aufgaben strukturierter zu bearbeiten."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Kognition",
      kompetenz: "Strategien",
      gruppe: "Lernstrategien",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Bekannte Strategien wendet #er/sie# noch nicht immer passend oder selbstständig an.",
        "Bei neuen Aufgaben braucht _ noch Erinnerung, um bekannte Vorgehensweisen zu nutzen.",
        "Strategien setzt _ sicherer ein, wenn sie sichtbar angeboten und vor der Aufgabe besprochen werden."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Bekannte Strategien gezielter auswählen und nutzen.",
          massnahme: "Strategiekarten, Modellierungen und kurze Reflexionsphasen werden eingesetzt.",
          evaluation: "Es wird beobachtet, ob _ vereinbarte Strategien häufiger passend nutzt."
        },
        {
          ziel: "Vor dem Bearbeiten einer Aufgabe eine passende Vorgehensweise wählen.",
          massnahme: "Vor Arbeitsbeginn werden mögliche Strategien kurz besprochen und sichtbar gemacht.",
          evaluation: "Die Auswahl und Nutzung von Strategien wird anhand ausgewählter Aufgaben beobachtet."
        }
      ]
    },
    {
      bereich: "Kognition",
      kompetenz: "Strategien",
      gruppe: "Lernstrategien",
      rating: "unsicher",
      istStandVarianten: [
        "Bei neuen oder schwierigeren Aufgaben findet #er/sie# noch selten eigenständig eine passende Lösungsstrategie.",
        "Ohne klare Anleitung beginnt _ Aufgaben häufig unsicher oder bricht den Lösungsweg ab.",
        "Das Auswählen und Anwenden geeigneter Strategien fällt #ihm/ihr# noch deutlich schwer."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Eine passende Lösungsstrategie mit Unterstützung auswählen.",
          massnahme: "Lösungswege werden gemeinsam besprochen, verglichen und mit einfachen Strategiekarten gesichert.",
          evaluation: "Die Auswahl und Anwendung von Lösungsstrategien wird anhand ausgewählter Aufgaben beobachtet."
        },
        {
          ziel: "Bei schwierigen Aufgaben einen ersten sinnvollen Arbeitsschritt finden.",
          massnahme: "Aufgaben werden mit Leitfragen, Beispielen und klaren Startschritten vorbereitet.",
          evaluation: "Es wird dokumentiert, ob _ bei schwierigen Aufgaben häufiger einen ersten Arbeitsschritt beginnt."
        }
      ]
    },

    {
      bereich: "Kognition",
      kompetenz: "Problemlösen",
      gruppe: "Denken und Problemlösen",
      rating: "gesichert",
      istStandVarianten: [
        "_ findet bei überschaubaren Aufgaben zunehmend eigene Lösungsansätze.",
        "Bei klar strukturierten Aufgaben entwickelt _ zunehmend passende Ideen zur Lösung.",
        "In vertrauten Problemsituationen kann _ einfache Lösungswege erproben."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Kognition",
      kompetenz: "Problemlösen",
      gruppe: "Denken und Problemlösen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Bei offenen oder ungewohnten Aufgaben braucht #er/sie# noch Anregungen, um einen Lösungsweg zu entwickeln.",
        "Eigene Lösungsansätze gelingen _ eher, wenn die Aufgabe durch Material oder Leitfragen strukturiert wird.",
        "Ungewohnte Aufgaben bearbeitet _ sicherer, wenn mögliche erste Schritte gemeinsam geklärt werden."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Bei herausfordernden Aufgaben Lösungsansätze entwickeln.",
          massnahme: "Aufgaben werden durch Leitfragen, Material oder Skizzen strukturiert.",
          evaluation: "Es wird beobachtet, ob _ mithilfe von Leitfragen eigene Lösungsansätze findet."
        },
        {
          ziel: "Verschiedene Lösungswege erproben und vergleichen.",
          massnahme: "Lösungswege werden gemeinsam gesammelt, ausprobiert und kurz besprochen.",
          evaluation: "Die Beteiligung an der Entwicklung und dem Vergleich von Lösungswegen wird beobachtet."
        }
      ]
    },
    {
      bereich: "Kognition",
      kompetenz: "Problemlösen",
      gruppe: "Denken und Problemlösen",
      rating: "unsicher",
      istStandVarianten: [
        "Ungewohnte Aufgaben führen noch häufig dazu, dass _ abwartet oder den Lösungsprozess abbricht.",
        "Bei offenen Problemstellungen braucht _ noch klare Impulse, um einen ersten Lösungsversuch zu beginnen.",
        "Das Entwickeln eigener Lösungswege fällt #ihm/ihr# bei neuen Aufgaben noch deutlich schwer."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Bei unbekannten Aufgaben einen ersten Lösungsweg erproben.",
          massnahme: "Der Lösungsprozess wird in kleine Schritte gegliedert und mit konkretem Material unterstützt.",
          evaluation: "Es wird dokumentiert, ob _ bei unbekannten Aufgaben häufiger einen ersten Lösungsversuch beginnt."
        },
        {
          ziel: "Bei Schwierigkeiten im Lösungsprozess weiterarbeiten.",
          massnahme: "Stoppkarten, Hilfefragen und kurze Rückmeldungen werden eingesetzt, um den Lösungsprozess fortzuführen.",
          evaluation: "Es wird beobachtet, ob _ bei Schwierigkeiten vereinbarte Hilfen nutzt und weiterarbeitet."
        }
      ]
    },

    {
      bereich: "Kognition",
      kompetenz: "Transfer",
      gruppe: "Transfer",
      rating: "gesichert",
      istStandVarianten: [
        "_ kann geübte Inhalte in vertrauten Situationen zunehmend anwenden.",
        "Bekannte Aufgabenformate überträgt _ zunehmend auf ähnliche Situationen.",
        "In geübten Zusammenhängen nutzt _ bekannte Inhalte zunehmend sicher."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Kognition",
      kompetenz: "Transfer",
      gruppe: "Transfer",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Geübte Inhalte überträgt #er/sie# noch nicht immer sicher auf neue Aufgabenstellungen.",
        "Der Transfer gelingt _ eher, wenn neue Aufgaben deutlich an bekannte Beispiele anknüpfen.",
        "Bekannte Strategien nutzt _ in ähnlichen Situationen sicherer als bei veränderten Aufgaben."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Geübte Inhalte auf ähnliche Aufgaben übertragen.",
          massnahme: "Ähnliche Aufgabenformate werden verglichen und gemeinsame Strukturen sichtbar gemacht.",
          evaluation: "Es wird beobachtet, ob _ geübte Inhalte zunehmend auf ähnliche Aufgaben überträgt."
        },
        {
          ziel: "Bekannte Strategien in leicht veränderten Aufgaben anwenden.",
          massnahme: "Bekannte und neue Aufgaben werden nebeneinandergestellt, besprochen und schrittweise verändert.",
          evaluation: "Die Anwendung bekannter Strategien in ähnlichen Aufgaben wird im Förderzeitraum beobachtet."
        }
      ]
    },
    {
      bereich: "Kognition",
      kompetenz: "Transfer",
      gruppe: "Transfer",
      rating: "unsicher",
      istStandVarianten: [
        "Der Transfer geübter Inhalte auf neue Situationen fällt #ihm/ihr# noch deutlich schwer.",
        "Bekannte Inhalte nutzt _ noch selten selbstständig, wenn Aufgaben anders gestellt sind.",
        "Bei veränderten Aufgaben erkennt _ den Zusammenhang zu bereits geübten Inhalten noch nicht sicher."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Bekannte Inhalte in neuen Situationen wiedererkennen und nutzen.",
          massnahme: "Transferaufgaben werden kleinschrittig begleitet und mit bekannten Beispielen verknüpft.",
          evaluation: "Die Anwendung bekannter Inhalte in neuen Aufgaben wird im Förderzeitraum beobachtet."
        },
        {
          ziel: "Gemeinsamkeiten zwischen bekannten und neuen Aufgaben erkennen.",
          massnahme: "Aufgaben werden verglichen, gemeinsame Merkmale markiert und Lösungswege übertragen.",
          evaluation: "Es wird überprüft, ob _ Gemeinsamkeiten zwischen bekannten und neuen Aufgaben zunehmend erkennt."
        }
      ]
    }
  ];

  const gruppenSaetzeKognition = [
    {
      bereich: "Kognition",
      gruppe: "Merkfähigkeit und Speicherung",
      istStandBundle: "Neue Inhalte, Handlungsschritte oder Abläufe kann #er/sie# noch nicht immer sicher behalten und abrufen.",
      hilfeSatz: "Wiederholungen, Visualisierungen und Merkhilfen unterstützen #ihn/sie# beim Speichern und Abrufen."
    },
    {
      bereich: "Kognition",
      gruppe: "Lernstrategien",
      istStandBundle: "Bekannte Strategien wendet #er/sie# noch nicht durchgängig passend oder selbstständig an.",
      hilfeSatz: "Strategiekarten, gemeinsame Modellierungen und kurze Reflexionsphasen helfen #ihm/ihr#, Vorgehensweisen bewusster zu nutzen."
    },
    {
      bereich: "Kognition",
      gruppe: "Denken und Problemlösen",
      istStandBundle: "Offene, ungewohnte oder herausfordernde Aufgabenstellungen erschweren #ihm/ihr# noch das Entwickeln eigener Lösungswege.",
      hilfeSatz: "Leitfragen, konkretes Material und kleinschrittige Lösungswege geben #ihm/ihr# Orientierung."
    },
    {
      bereich: "Kognition",
      gruppe: "Transfer",
      istStandBundle: "Geübte Inhalte überträgt #er/sie# noch nicht sicher auf neue oder veränderte Aufgabenstellungen.",
      hilfeSatz: "Vergleiche zwischen bekannten und neuen Aufgaben unterstützen #ihn/sie# beim Übertragen gelernter Inhalte."
    }
  ];

  const endkatalogWeitereFaecherHSU = [
    {
      bereich: "Weitere Fächer",
      kompetenz: "Fachunterricht allgemein",
      gruppe: "Fachliches Lernen",
      rating: "gesichert",
      istStandVarianten: [
        "_ beteiligt sich in vertrauten fachlichen Unterrichtssituationen zunehmend sicher.",
        "Bei anschaulich erarbeiteten Themen kann _ fachliche Inhalte zunehmend nachvollziehen.",
        "In bekannten Aufgabenformaten zeigt _ mehr Sicherheit im Umgang mit fachlichen Inhalten."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Weitere Fächer",
      kompetenz: "Fachunterricht allgemein",
      gruppe: "Fachliches Lernen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Fachliche Inhalte erschließt _ in vertrauten Situationen sicherer als bei neuen oder komplexeren Aufgaben.",
        "Neue Fachbegriffe und Aufgabenstellungen versteht #er/sie# noch nicht immer sicher.",
        "Anschauliches Material und klare Arbeitsschritte helfen #ihm/ihr#, fachliche Inhalte besser zu erfassen."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Fachliche Inhalte strukturierter bearbeiten.",
          massnahme: "Arbeitsaufträge werden vorentlastet, visualisiert und in überschaubare Teilschritte gegliedert.",
          evaluation: "Die Mitarbeit und Bearbeitung fachlicher Aufgaben wird im Unterricht beobachtet."
        },
        {
          ziel: "Fachbegriffe sicherer verstehen und anwenden.",
          massnahme: "Fachbegriffe werden mit Bildern, Beispielen und kurzen Wiederholungsphasen gesichert.",
          evaluation: "Es wird beobachtet, ob _ Fachbegriffe zunehmend passend verwendet."
        }
      ]
    },
    {
      bereich: "Weitere Fächer",
      kompetenz: "Fachunterricht allgemein",
      gruppe: "Fachliches Lernen",
      rating: "unsicher",
      istStandVarianten: [
        "Neue fachliche Inhalte und Aufgabenstellungen fallen #ihm/ihr# noch deutlich schwer.",
        "Bei fachlichen Aufgaben braucht _ noch klare Anleitung, anschauliches Material und kurze Sicherungen.",
        "Ohne Vorentlastung kann _ neue Fachinhalte noch nicht durchgängig verstehen und bearbeiten."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Neue fachliche Inhalte mit Unterstützung erschließen.",
          massnahme: "Fachbegriffe, Bilder, Beispiele und kurze Sicherungsphasen werden regelmäßig eingesetzt.",
          evaluation: "Ausgewählte Arbeitsergebnisse werden im Förderzeitraum verglichen."
        },
        {
          ziel: "Fachliche Aufgaben mit klaren Teilschritten bearbeiten.",
          massnahme: "Aufgaben werden kleinschrittig angeleitet und mit Symbolen oder Beispielaufgaben unterstützt.",
          evaluation: "Es wird überprüft, ob _ fachliche Aufgaben zunehmend vollständiger bearbeitet."
        }
      ]
    },

    {
      bereich: "Weitere Fächer",
      kompetenz: "Sachunterricht",
      gruppe: "Fachliches Lernen",
      rating: "gesichert",
      istStandVarianten: [
        "_ beteiligt sich an anschaulichen sachunterrichtlichen Themen zunehmend interessiert.",
        "Sachunterrichtliche Inhalte versteht _ besonders gut, wenn sie handelnd oder bildlich erarbeitet werden.",
        "Bei bekannten Themen kann _ eigene Beobachtungen zunehmend einbringen."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "Weitere Fächer",
      kompetenz: "Sachunterricht",
      gruppe: "Fachliches Lernen",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Sachunterrichtliche Inhalte versteht _ besser, wenn sie anschaulich und handelnd erarbeitet werden.",
        "Beim Beschreiben von Beobachtungen oder Ergebnissen braucht _ noch sprachliche und fachliche Unterstützung.",
        "Fachbegriffe aus dem Sachunterricht nutzt _ noch nicht durchgängig sicher."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Sachunterrichtliche Inhalte zunehmend sicherer verstehen und wiedergeben.",
          massnahme: "Themen werden mit Anschauungsmaterial, Bildern, Experimenten oder kurzen Gesprächsphasen erarbeitet.",
          evaluation: "Die Beteiligung und die Bearbeitung sachunterrichtlicher Aufgaben werden beobachtet."
        },
        {
          ziel: "Beobachtungen und Ergebnisse verständlicher beschreiben.",
          massnahme: "Satzanfänge, Wortkarten und einfache Forscherfragen werden als Unterstützung angeboten.",
          evaluation: "Es wird beobachtet, ob _ Beobachtungen zunehmend genauer beschreibt."
        }
      ]
    },
    {
      bereich: "Weitere Fächer",
      kompetenz: "Sachunterricht",
      gruppe: "Fachliches Lernen",
      rating: "unsicher",
      istStandVarianten: [
        "Sachunterrichtliche Inhalte erschließt _ derzeit vor allem mit anschaulicher und kleinschrittiger Begleitung.",
        "Neue Sachthemen, Fachbegriffe oder Zusammenhänge fallen #ihm/ihr# noch schwer.",
        "Beim Bearbeiten sachunterrichtlicher Aufgaben braucht _ noch klare Struktur und wiederholte Sicherung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Sachunterrichtliche Inhalte mithilfe anschaulicher Materialien erschließen.",
          massnahme: "Inhalte werden handelnd, bildlich und mit wiederkehrenden Sicherungsphasen erarbeitet.",
          evaluation: "Ausgewählte Arbeitsergebnisse und mündliche Beiträge werden im Förderzeitraum beobachtet."
        },
        {
          ziel: "Fachbegriffe und einfache Zusammenhänge sicherer nutzen.",
          massnahme: "Fachbegriffe werden gesammelt, visualisiert und in kurzen Wiederholungsphasen angewendet.",
          evaluation: "Es wird überprüft, ob _ zentrale Fachbegriffe zunehmend passend verwendet."
        }
      ]
    },

    {
      bereich: "ggf. Herkunftssprachlicher Unterricht",
      kompetenz: "Wortschatz und Ausdruck",
      gruppe: "Sprachliche Ausdrucksfähigkeit",
      rating: "gesichert",
      istStandVarianten: [
        "_ nutzt bekannte Wörter und einfache Satzmuster in der Herkunftssprache zunehmend sicher.",
        "In vertrauten Themenbereichen kann _ sich in der Herkunftssprache zunehmend verständlich ausdrücken.",
        "Bekannte Begriffe verwendet _ in geübten Situationen passend."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "ggf. Herkunftssprachlicher Unterricht",
      kompetenz: "Wortschatz und Ausdruck",
      gruppe: "Sprachliche Ausdrucksfähigkeit",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Wortschatz und Ausdruck in der Herkunftssprache nutzt _ noch nicht durchgängig sicher.",
        "Neue Wörter und Satzmuster kann _ besser anwenden, wenn sie visualisiert und wiederholt werden.",
        "Beim Formulieren eigener Aussagen in der Herkunftssprache braucht _ noch sprachliche Unterstützung."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Den Wortschatz erweitern und sicherer anwenden.",
          massnahme: "Neue Wörter werden gesammelt, visualisiert, wiederholt und in kurzen Sätzen angewendet.",
          evaluation: "Es wird beobachtet, ob _ neue Wörter zunehmend passend verwendet."
        },
        {
          ziel: "Eigene Aussagen verständlicher formulieren.",
          massnahme: "Satzmuster, Bildimpulse und kurze Gesprächsanlässe werden regelmäßig eingesetzt.",
          evaluation: "Mündliche Beiträge werden im Förderzeitraum auf Verständlichkeit und Wortschatznutzung beobachtet."
        }
      ]
    },
    {
      bereich: "ggf. Herkunftssprachlicher Unterricht",
      kompetenz: "Wortschatz und Ausdruck",
      gruppe: "Sprachliche Ausdrucksfähigkeit",
      rating: "unsicher",
      istStandVarianten: [
        "Der Wortschatz in der Herkunftssprache ist noch nicht ausreichend gefestigt, um Inhalte sicher auszudrücken.",
        "Beim Verstehen und Verwenden neuer Wörter braucht _ noch deutliche Unterstützung.",
        "Eigene Aussagen in der Herkunftssprache bleiben häufig kurz oder unvollständig."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Neue Wörter in der Herkunftssprache verstehen und anwenden.",
          massnahme: "Wörter werden mit Bildern, Beispielen und wiederkehrenden Anwendungssituationen verknüpft.",
          evaluation: "Es wird dokumentiert, ob _ neue Wörter häufiger passend nutzt."
        },
        {
          ziel: "Einfache Aussagen in der Herkunftssprache verständlicher formulieren.",
          massnahme: "Kurze Satzmuster werden gesprochen, gelegt, ergänzt und wiederholt angewendet.",
          evaluation: "Es wird beobachtet, ob _ eigene Aussagen zunehmend verständlicher formuliert."
        }
      ]
    },

    {
      bereich: "ggf. Herkunftssprachlicher Unterricht",
      kompetenz: "Lesen und Schreiben",
      gruppe: "Schriftsprachliche Fähigkeiten",
      rating: "gesichert",
      istStandVarianten: [
        "_ bearbeitet einfache Lese- und Schreibaufgaben in der Herkunftssprache zunehmend sicher.",
        "Bekannte Wörter oder kurze Sätze kann _ in der Herkunftssprache zunehmend lesen und schreiben.",
        "In geübten Aufgabenformaten zeigt _ mehr Sicherheit beim Lesen und Schreiben."
      ],
      zielMassnahmePaare: []
    },
    {
      bereich: "ggf. Herkunftssprachlicher Unterricht",
      kompetenz: "Lesen und Schreiben",
      gruppe: "Schriftsprachliche Fähigkeiten",
      rating: "teilweise unsicher",
      istStandVarianten: [
        "Beim Lesen und Schreiben in der Herkunftssprache zeigen sich noch Unsicherheiten.",
        "Kurze Lese- und Schreibaufgaben gelingen _ sicherer, wenn sie sprachlich vorentlastet werden.",
        "Geübte Wörter und Satzmuster kann _ noch nicht durchgängig sicher lesen oder schreiben."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Lesen und Schreiben in der Herkunftssprache weiter festigen.",
          massnahme: "Kurze Lese- und Schreibaufgaben werden regelmäßig angeboten und sprachlich vorentlastet.",
          evaluation: "Lese- und Schreibaufgaben werden im Förderzeitraum verglichen."
        },
        {
          ziel: "Geübte Wörter und kurze Sätze sicherer lesen und schreiben.",
          massnahme: "Wörter und Satzmuster werden wiederholt gelesen, markiert und in kurzen Schreibanlässen genutzt.",
          evaluation: "Es wird überprüft, ob _ geübte Wörter und Sätze zunehmend sicherer liest und schreibt."
        }
      ]
    },
    {
      bereich: "ggf. Herkunftssprachlicher Unterricht",
      kompetenz: "Lesen und Schreiben",
      gruppe: "Schriftsprachliche Fähigkeiten",
      rating: "unsicher",
      istStandVarianten: [
        "Das Lesen und Schreiben in der Herkunftssprache fällt #ihm/ihr# noch deutlich schwer.",
        "Beim Erlesen oder Verschriften geübter Wörter braucht _ noch kleinschrittige Unterstützung.",
        "Schriftsprachliche Aufgaben in der Herkunftssprache kann _ derzeit nur mit enger Begleitung bearbeiten."
      ],
      zielMassnahmePaare: [
        {
          ziel: "Geübte Wörter in der Herkunftssprache sicherer lesen und schreiben.",
          massnahme: "Wörter werden silbisch, bildlich oder mit wiederkehrenden Übungsformaten gesichert.",
          evaluation: "Es wird beobachtet, ob _ geübte Wörter zunehmend sicherer liest und schreibt."
        },
        {
          ziel: "Kurze Lese- und Schreibaufgaben mit Unterstützung bearbeiten.",
          massnahme: "Aufgaben werden kleinschrittig vorbereitet, gemeinsam begonnen und mit kurzen Kontrollphasen abgeschlossen.",
          evaluation: "Die Bearbeitung kurzer Lese- und Schreibaufgaben wird im Förderzeitraum dokumentiert."
        }
      ]
    }
  ];

  const gruppenSaetzeWeitereFaecherHSU = [
    {
      bereich: "Weitere Fächer",
      gruppe: "Fachliches Lernen",
      istStandBundle: "Neue fachliche Inhalte, Fachbegriffe oder Aufgabenstellungen erschließt _ noch nicht durchgängig sicher.",
      hilfeSatz: "Anschauliches Material, Visualisierungen, kurze Sicherungen und überschaubare Teilschritte unterstützen #ihn/sie# im Fachunterricht."
    },
    {
      bereich: "ggf. Herkunftssprachlicher Unterricht",
      gruppe: "Sprachliche Ausdrucksfähigkeit",
      istStandBundle: "Wortschatz und Ausdruck in der Herkunftssprache sind noch nicht durchgängig sicher gefestigt.",
      hilfeSatz: "Wortkarten, wiederholte Anwendungssituationen und kurze Satzmuster unterstützen #ihn/sie# beim sprachlichen Ausdruck."
    },
    {
      bereich: "ggf. Herkunftssprachlicher Unterricht",
      gruppe: "Schriftsprachliche Fähigkeiten",
      istStandBundle: "Beim Lesen und Schreiben in der Herkunftssprache zeigen sich noch Unsicherheiten.",
      hilfeSatz: "Kurze Lese- und Schreibaufgaben, Vorentlastung und regelmäßige Wiederholung unterstützen #ihn/sie# beim Festigen schriftsprachlicher Fähigkeiten."
    }
  ];

  function sentenceCase(text) {
    const value = String(text || "").trim();
    return value ? value.charAt(0).toUpperCase() + value.slice(1) : "";
  }

  function neutralizeGoalText(text) {
    let value = String(text || "").trim();
    value = value.replace(/^_ soll\s+/i, "");
    value = value.replace(/^#seine\/ihre#\s+/i, "");
    value = value.replace(/^#sein\/ihr#\s+/i, "");
    return sentenceCase(value);
  }

  function normalizeForComparison(text) {
    return neutralizeGoalText(text)
      .toLowerCase()
      .replace(/[.]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function uniqueByMeaning(list) {
    const seen = new Set();
    return list.filter((item) => {
      const key = normalizeForComparison(item);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function normalizeModuleEntry(entry, fieldType = "") {
    if (typeof entry === "string") {
      const text = fieldType === "ziele" ? neutralizeGoalText(entry) : String(entry || "").trim();
      return { text, varianten: [text] };
    }
    const text = String(entry?.text || "").trim();
    const variants = Array.isArray(entry?.varianten)
      ? entry.varianten.map((variant) => String(variant || "").trim()).filter(Boolean)
      : [];
    const preparedText = fieldType === "ziele" ? neutralizeGoalText(text) : text;
    const preparedVariants = fieldType === "ziele"
      ? variants.map(neutralizeGoalText)
      : variants;
    const uniqueVariants = fieldType === "ziele"
      ? uniqueByMeaning([preparedText, ...preparedVariants])
      : [...new Set([preparedText, ...preparedVariants].filter(Boolean))];
    return {
      text: preparedText,
      varianten: uniqueVariants
    };
  }

  function moduleTopicsForArea(areaName, textModules) {
    const areaLibrary = textModules?.[areaName] || {};
    const hasGrades = areaLibrary["Klasse 1/2"] || areaLibrary["Klasse 3/4"];
    const result = [];
    if (hasGrades) {
      gradeBands.forEach((klasse) => {
        Object.entries(areaLibrary[klasse] || {}).forEach(([kompetenz, fields]) => {
          if (areaName === "Deutsch" && klasse === "Klasse 3/4" && deutsch34NichtAlsDeutschKompetenz.has(kompetenz)) {
            return;
          }
          if (areaName === "Mathematik" && klasse === "Klasse 3/4" && mathe34NichtAlsMatheKompetenz.has(kompetenz)) {
            return;
          }
          result.push({
            klasse,
            kompetenz: areaName === "Deutsch" && klasse === "Klasse 1/2" && deutsch12LesenZuordnung[kompetenz]
              ? deutsch12LesenZuordnung[kompetenz]
              : areaName === "Deutsch" && klasse === "Klasse 3/4" && deutsch34LesenZuordnung[kompetenz]
                ? deutsch34LesenZuordnung[kompetenz]
                : kompetenz,
            sourceKompetenz: kompetenz,
            fields
          });
        });
      });
      return result;
    }
    Object.entries(areaLibrary || {}).forEach(([kompetenz, fields]) => {
      result.push({ klasse: "", kompetenz, fields });
    });
    return result;
  }

  function mergeModuleFields(moduleTopics, klasse, kompetenz) {
    return moduleTopics
      .filter((item) => item.klasse === klasse && item.kompetenz === kompetenz)
      .reduce((merged, item) => ({
        istStand: [...(merged.istStand || []), ...(item.fields?.istStand || [])],
        ziele: [...(merged.ziele || []), ...(item.fields?.ziele || [])],
        massnahmen: [...(merged.massnahmen || []), ...(item.fields?.massnahmen || [])],
        evaluation: [...(merged.evaluation || []), ...(item.fields?.evaluation || [])]
      }), {});
  }

  function collectModuleBausteine(fields = {}) {
    const withoutInvalidPlaceholders = (entry) => !invalidPlaceholdersFor(entry.text).length
      && entry.varianten.every((variant) => !invalidPlaceholdersFor(variant).length);
    return {
      istStand: (fields.istStand || []).map((entry) => normalizeModuleEntry(entry, "istStand")).filter(withoutInvalidPlaceholders),
      ziele: uniqueByMeaning((fields.ziele || []).map((entry) => normalizeModuleEntry(entry, "ziele")).filter(withoutInvalidPlaceholders).map((entry) => entry.text))
        .map((text) => ({ text, varianten: [text] })),
      massnahmen: (fields.massnahmen || []).map((entry) => normalizeModuleEntry(entry, "massnahmen")).filter(withoutInvalidPlaceholders),
      evaluation: (fields.evaluation || []).map((entry) => normalizeModuleEntry(entry, "evaluation")).filter(withoutInvalidPlaceholders)
    };
  }

  function istStandVariantenFromChain(chain) {
    const variants = Array.isArray(chain?.istStandVarianten)
      ? chain.istStandVarianten
      : [];
    const fromVariants = variants
      .map((variant) => {
        if (typeof variant === "string") {
          return { typ: "standard", text: variant.trim() };
        }
        return {
          typ: String(variant?.typ || "standard").trim() || "standard",
          text: String(variant?.text || "").trim()
        };
      })
      .filter((variant) => variant.text);
    if (fromVariants.length) return fromVariants;
    return chain?.istStand
      ? [{ typ: "standard", text: String(chain.istStand).trim() }]
      : [];
  }

  function zielMassnahmePaareFromChain(chain) {
    const pairs = Array.isArray(chain?.zielMassnahmePaare)
      ? chain.zielMassnahmePaare
      : [];
    const fromPairs = pairs
      .map((pair) => ({
        ziel: String(pair?.ziel || "").trim(),
        massnahme: String(pair?.massnahme || "").trim(),
        evaluation: String(pair?.evaluation || "").trim()
      }))
      .filter((pair) => pair.ziel || pair.massnahme || pair.evaluation);
    if (fromPairs.length) return fromPairs;
    return chain?.ziel || chain?.massnahme || chain?.evaluation
      ? [{
          ziel: String(chain.ziel || "").trim(),
          massnahme: String(chain.massnahme || "").trim(),
          evaluation: String(chain.evaluation || "").trim()
        }]
      : [];
  }

  function groupSentencesFor(areaName, gruppe, klasse, groups) {
    return groups
      .filter((group) =>
        group.bereich === areaName
        && group.gruppe === gruppe
        && (!group.klasse || !klasse || group.klasse === klasse)
      )
      .map((group) => ({
        bereich: group.bereich,
        klasse: group.klasse || "",
        gruppe: group.gruppe,
        istStandBundle: group.istStandBundle || "",
        hilfeSatz: group.hilfeSatz || ""
      }));
  }

  function buildCatalog() {
    const deutsch12LesenSourceTopics = new Set(Object.keys(deutsch12LesenZuordnung));
    const deutsch34LesenSourceTopics = new Set(Object.keys(deutsch34LesenZuordnung));
    const endkatalogOverrideAreas = new Set([
      "Emotionalität, Sozialverhalten",
      "Weitere Fächer",
      "ggf. Herkunftssprachlicher Unterricht"
    ]);
    const baseSupportChains = (window.FOERDERPLAN_SUPPORT_CHAINS || [])
      .filter((chain) => !endkatalogOverrideAreas.has(chain.bereich))
      .filter((chain) => !(
        chain.bereich === "Deutsch"
        && chain.klasse === "Klasse 1/2"
        && deutsch12LesenSourceTopics.has(chain.kompetenz)
      ))
      .filter((chain) => !(
        chain.bereich === "Deutsch"
        && chain.klasse === "Klasse 3/4"
        && deutsch34LesenSourceTopics.has(chain.kompetenz)
      ))
      .filter((chain) => !(
        chain.bereich === "Deutsch"
        && chain.klasse === "Klasse 3/4"
        && deutsch34NichtAlsDeutschKompetenz.has(chain.kompetenz)
      ))
      .filter((chain) => !(
        chain.bereich === "Mathematik"
        && chain.klasse === "Klasse 1/2"
        && mathe12ZahlvorstellungThemen.has(chain.kompetenz)
      ))
      .filter((chain) => !(
        chain.bereich === "Mathematik"
        && chain.klasse === "Klasse 1/2"
        && mathe12RechnenThemen.has(chain.kompetenz)
      ))
      .filter((chain) => !(
        chain.bereich === "Mathematik"
        && chain.klasse === "Klasse 3/4"
        && mathe34ZahlenRechnenThemen.has(chain.kompetenz)
      ))
      .filter((chain) => !(
        chain.bereich === "Mathematik"
        && chain.klasse === "Klasse 3/4"
        && mathe34WeitereThemen.has(chain.kompetenz)
      ))
      .filter((chain) => !(
        chain.bereich === "Mathematik"
        && chain.klasse === "Klasse 3/4"
        && mathe34NichtAlsMatheKompetenz.has(chain.kompetenz)
      ));
    const baseSupportGroups = (window.FOERDERPLAN_SUPPORT_GROUPS || [])
      .filter((group) => !endkatalogOverrideAreas.has(group.bereich));
    const supportChains = [
      ...baseSupportChains,
      ...endkatalogDeutsch12Lesen,
      ...endkatalogDeutsch12Schreiben,
      ...endkatalogDeutsch34Lesen,
      ...endkatalogDeutsch34Schreiben,
      ...endkatalogMathe12Zahlvorstellung,
      ...endkatalogMathe12Rechnen,
      ...endkatalogMathe12Weitere,
      ...endkatalogMathe34ZahlenRechnen,
      ...endkatalogMathe34Weitere,
      ...endkatalogEmotionalSozial,
      ...endkatalogSpracheKommunikation,
      ...endkatalogMotorik,
      ...endkatalogWahrnehmung,
      ...endkatalogKognition,
      ...endkatalogWeitereFaecherHSU
    ];
    const supportGroups = [
      ...baseSupportGroups,
      ...gruppenSaetzeDeutsch12Lesen,
      ...gruppenSaetzeDeutsch12Schreiben,
      ...gruppenSaetzeDeutsch34Lesen,
      ...gruppenSaetzeDeutsch34Schreiben,
      ...gruppenSaetzeMathe12Zahlvorstellung,
      ...gruppenSaetzeMathe12Rechnen,
      ...gruppenSaetzeMathe12Weitere,
      ...gruppenSaetzeMathe34ZahlenRechnen,
      ...gruppenSaetzeMathe34Weitere,
      ...gruppenSaetzeEmotionalSozial,
      ...gruppenSaetzeSpracheKommunikation,
      ...gruppenSaetzeMotorik,
      ...gruppenSaetzeWahrnehmung,
      ...gruppenSaetzeKognition,
      ...gruppenSaetzeWeitereFaecherHSU
    ];
    const textModules = window.FOERDERPLAN_TEXT_MODULES?.areas || {};

    return areas.flatMap((areaName) => {
      const moduleTopics = moduleTopicsForArea(areaName, textModules);
      const chainTopics = supportChains
        .filter((chain) => chain.bereich === areaName)
        .map((chain) => ({
          klasse: chain.klasse || "",
          kompetenz: chain.kompetenz,
          fields: {}
        }));
      const topicKeys = new Map();
      [...moduleTopics, ...chainTopics].forEach((topic) => {
        const key = `${topic.klasse || ""}|${topic.kompetenz}`;
        if (!topicKeys.has(key)) topicKeys.set(key, topic);
      });

      return [...topicKeys.values()].flatMap((topic) =>
        ratings.map((rating) => {
          const chain = supportChains.find((item) =>
            item.bereich === areaName
            && item.kompetenz === topic.kompetenz
            && item.rating === rating
            && (!item.klasse || !topic.klasse || item.klasse === topic.klasse)
          );
          const gruppe = chain?.gruppe || "";
          const moduleFields = mergeModuleFields(moduleTopics, topic.klasse, topic.kompetenz);
          const bausteine = rating === "teilweise unsicher"
            ? collectModuleBausteine(moduleFields)
            : collectModuleBausteine({});
          const entry = {
            bereich: areaName,
            klasse: topic.klasse || "",
            kompetenz: topic.kompetenz,
            gruppe,
            rating,
            istStandVarianten: chain ? istStandVariantenFromChain(chain) : [],
            zielMassnahmePaare: chain ? zielMassnahmePaareFromChain(chain) : [],
            evaluation: chain?.evaluation || "",
            gruppenSaetze: gruppe ? groupSentencesFor(areaName, gruppe, topic.klasse, supportGroups) : [],
            bausteine,
            status: chain ? "vorhanden" : missingText,
            fehlendeInhalte: []
          };
          if (!entry.istStandVarianten.length) entry.fehlendeInhalte.push("Ist-Stand-Varianten fehlen.");
          if (rating !== "gesichert" && !entry.zielMassnahmePaare.length) {
            entry.fehlendeInhalte.push("Ziel-Maßnahme-Evaluation-Paare fehlen.");
          }
          if (gruppe && !entry.gruppenSaetze.length) entry.fehlendeInhalte.push("Gruppensätze fehlen.");
          if (!chain) entry.fehlendeInhalte.push(missingText);
          return entry;
        })
      );
    });
  }

  function invalidPlaceholdersFor(text) {
    const allowed = new Set(allowedPlaceholders.filter((placeholder) => placeholder.startsWith("#")));
    return [...String(text || "").matchAll(/#[^#\n]+#/g)]
      .map((match) => match[0])
      .filter((placeholder) => !allowed.has(placeholder));
  }

  function audit(catalog) {
    const placeholderIssues = [];
    const missing = [];
    catalog.forEach((entry) => {
      if (entry.fehlendeInhalte.length) missing.push(entry);
      const texts = [
        ...entry.istStandVarianten.map((item) => item.text),
        ...entry.zielMassnahmePaare.flatMap((pair) => [pair.ziel, pair.massnahme, pair.evaluation]),
        ...entry.gruppenSaetze.flatMap((group) => [group.istStandBundle, group.hilfeSatz]),
        ...Object.values(entry.bausteine).flatMap((list) => list.flatMap((item) => [item.text, ...item.varianten]))
      ];
      texts.forEach((text) => {
        const invalid = invalidPlaceholdersFor(text);
        if (invalid.length) {
          placeholderIssues.push({
            bereich: entry.bereich,
            klasse: entry.klasse,
            kompetenz: entry.kompetenz,
            rating: entry.rating,
            text,
            invalid
          });
        }
      });
    });
    return {
      missing,
      placeholderIssues
    };
  }

  const katalog = buildCatalog();

  return {
    meta: {
      status: "eingebunden",
      fachlicheFreigabe: false,
      note: "Diese Struktur liefert geprüfte Kataloginhalte für den Förderplan-Composer."
    },
    gradeBands,
    areas,
    ratings,
    allowedPlaceholders,
    styleGuide,
    katalog,
    audit: audit(katalog)
  };
})();
