/*
Förderplanung Direkt
© 2026 Ute Holzschneider-Riedl. Alle Rechte vorbehalten.

Diese App unterstützt die anonyme Erstellung von Förderplänen.
Keine echten Schülerdaten im Code oder in Beispieldaten speichern.
*/

window.FOERDERPLAN_TEXT_MODULES = (() => {
  const meta = {
    status: "example",
    isFinal: false,
    note: "Beispielbausteine zur Prüfung der Appstruktur; noch nicht vollständig oder final."
  };

  const sentenceStarters = {
    istStand: [
      "_ zeigt im Bereich … bereits erste Sicherheiten.",
      "_ benötigt bei … noch Unterstützung.",
      "In vertrauten Situationen gelingt es #ihm/ihr# bereits, …",
      "Bei neuen Anforderungen ist #er/sie# noch auf … angewiesen."
    ],
    ziele: [
      "… zunehmend selbstständig nutzen.",
      "Sicherheit im Bereich … erweitern.",
      "… in bekannten Situationen anwenden."
    ],
    massnahmen: [
      "_ erhält klare Teilschritte und kurze Rückmeldungen.",
      "Die Arbeit mit … unterstützt _, …",
      "Visualisierungen und feste Strukturen unterstützen #ihn/sie#."
    ],
    evaluation: [
      "Die Entwicklung wird durch Unterrichtsbeobachtung überprüft.",
      "Ausgewählte Arbeitsproben werden verglichen.",
      "Die Maßnahme wird im nächsten Förderzeitraum evaluiert."
    ]
  };

  function topic(fields = {}) {
    return {
      istStand: fields.istStand || [],
      ziele: fields.ziele || [],
      massnahmen: fields.massnahmen || [],
      evaluation: fields.evaluation || []
    };
  }

  function baustein(text, varianten = []) {
    return {
      text,
      varianten: [text, ...varianten]
    };
  }

  const areas = {
    "Emotionalität, Sozialverhalten": {
      Emotionsregulation: topic({
        istStand: [
          "_ zeigt Gefühle im Schulalltag deutlich.",
          "_ benötigt Unterstützung, um Gefühle angemessen zu regulieren.",
          "_ beruhigt sich mit verlässlicher Begleitung zunehmend schneller."
        ],
        ziele: [
          "Gefühle wahrnehmen und angemessen benennen.",
          "Vereinbarte Strategien zur Beruhigung nutzen.",
          "In belastenden Situationen Unterstützung annehmen."
        ],
        massnahmen: [
          "Gefühle werden mit Bildkarten, Skalen oder kurzen Gesprächen sichtbar gemacht.",
          "Beruhigungsstrategien werden eingeübt und regelmäßig erinnert.",
          "_ erhält ruhige, klare Rückmeldungen in belastenden Situationen."
        ],
        evaluation: [
          "Die Nutzung vereinbarter Strategien wird beobachtet.",
          "Belastende Situationen und gelungene Regulation werden dokumentiert.",
          "Überprüft wird, ob _ vereinbarte Beruhigungsstrategien in herausfordernden Situationen zunehmend nutzt."
        ]
      }),
      Konfliktverhalten: topic({
        istStand: [
          "_ benötigt in Konfliktsituationen noch Unterstützung.",
          "_ kann eigene Anteile am Konflikt mit Hilfe erkennen.",
          "_ nimmt Klärungsgespräche in ruhiger Begleitung eher an."
        ],
        ziele: [
          "Konflikte zunehmend verbal klären.",
          "Vereinbarte Gesprächsregeln in Konflikten nutzen.",
          "Handlungsalternativen in Konfliktsituationen erproben."
        ],
        massnahmen: [
          "Konflikte werden zeitnah und ruhig nachbesprochen.",
          "Handlungsalternativen werden mit Rollenspiel oder Bildkarten eingeübt.",
          "Klare Gesprächsregeln unterstützen die Konfliktklärung."
        ],
        evaluation: [
          "Konfliktsituationen werden im Förderzeitraum beobachtet.",
          "Die Nutzung vereinbarter Klärungsschritte wird dokumentiert.",
          "Überprüft wird, ob _ eigene Sichtweisen ruhiger beschreibt und vereinbarte Gesprächsschritte häufiger nutzt."
        ]
      }),
      Regelverhalten: topic({
        istStand: [
          "_ hält bekannte Regeln mit Erinnerung ein.",
          "_ benötigt klare und verlässliche Absprachen.",
          "_ orientiert sich in strukturierten Situationen sicherer."
        ],
        ziele: [
          "Vereinbarte Klassenregeln zunehmend einhalten.",
          "Auf Erinnerungen angemessen reagieren.",
          "Regeln auch in Übergängen und offenen Situationen beachten."
        ],
        massnahmen: [
          "Regeln werden sichtbar gemacht und regelmäßig kurz erinnert.",
          "Positives Regelverhalten wird unmittelbar rückgemeldet.",
          "Übergänge werden klar angekündigt und begleitet."
        ],
        evaluation: [
          "Das Regelverhalten wird in Unterricht und Pausen beobachtet.",
          "Rückmeldungen aus unterschiedlichen Situationen werden einbezogen.",
          "Dokumentiert wird, ob _ vereinbarte Regeln auch in Übergängen und offenen Situationen zunehmend beachtet."
        ]
      }),
      Kontaktverhalten: topic({
        istStand: [
          "_ nimmt Kontakt zu Mitschülerinnen und Mitschülern mit Unterstützung auf.",
          "_ zeigt sich im Kontakt mit vertrauten Personen offener.",
          "_ benötigt noch Hilfe, um angemessen auf andere zuzugehen."
        ],
        ziele: [
          "Kontakt angemessen aufnehmen und halten.",
          "Gesprächs- und Spielregeln mit anderen beachten.",
          "Positive Kontakte im Klassenverband ausbauen."
        ],
        massnahmen: [
          "Partner- und Kleingruppenaufgaben werden gezielt begleitet.",
          "Angemessene Kontaktaufnahme wird vorbesprochen und geübt.",
          "Gelungene soziale Situationen werden positiv verstärkt."
        ],
        evaluation: [
          "Kontaktaufnahme und Zusammenarbeit werden beobachtet.",
          "Rückmeldungen aus Partner- und Gruppenphasen werden einbezogen.",
          "Überprüft wird, ob _ Kontakt in bekannten Situationen mit weniger Unterstützung aufnimmt und hält."
        ]
      }),
      Frustrationstoleranz: topic({
        istStand: [
          "_ reagiert bei Misserfolg noch schnell enttäuscht oder verärgert.",
          "_ benötigt Ermutigung, um nach Fehlern weiterzuarbeiten.",
          "_ kann mit Unterstützung wieder in die Aufgabe zurückfinden."
        ],
        ziele: [
          "Fehler als Teil des Lernens annehmen.",
          "Bei Schwierigkeiten vereinbarte Hilfen nutzen.",
          "Frustrationen schrittweise besser aushalten."
        ],
        massnahmen: [
          "Fehler werden wertschätzend besprochen und als Lernchance genutzt.",
          "_ erhält kurze Hilfen zum Weiterarbeiten.",
          "Erfolge in kleinen Schritten werden sichtbar gemacht."
        ],
        evaluation: [
          "Der Umgang mit Fehlern und Misserfolg wird beobachtet.",
          "Gelungene Weiterarbeit nach schwierigen Situationen wird dokumentiert.",
          "Überprüft wird, ob _ nach kleinen Misserfolgen vereinbarte Hilfen nutzt und die Aufgabe wieder aufnimmt."
        ]
      }),
      "Selbstbild / Selbstwirksamkeit": topic({
        istStand: [
          "_ benötigt noch Unterstützung, eigene Stärken und Fortschritte wahrzunehmen.",
          "In vertrauten Aufgaben erkennt _ mit konkreter Rückmeldung, was bereits gelungen ist.",
          "Bei neuen Aufgaben wartet _ noch häufig auf Ermutigung, bevor #er/sie# einen ersten Versuch beginnt.",
          "Fehler oder unerwartete Ergebnisse verunsichern #ihn/sie# noch; mit Begleitung gelingt ein weiterer Versuch.",
          "Positive Rückmeldungen kann _ annehmen, wenn sie sich konkret auf einen beobachtbaren Arbeitsschritt beziehen.",
          "Hilfe nutzt _ zunehmend, benötigt aber noch Unterstützung, sie als Teil des eigenen Lernwegs einzuordnen."
        ],
        ziele: [
          "Eigene Stärken und gelungene Arbeitsschritte zunehmend benennen.",
          "Sich mit angemessener Unterstützung an neue Aufgaben heranwagen.",
          "Fehler als Lernanlass nutzen und einen weiteren Versuch beginnen.",
          "Eigene Fortschritte wahrnehmen und konkrete Rückmeldungen für die Weiterarbeit nutzen."
        ],
        massnahmen: [
          "Positive Rückmeldungen werden konkret auf beobachtbare Arbeitsschritte und Fortschritte bezogen.",
          "In kurzen Reflexionsphasen werden eigene Stärken, Erfolge und nächste erreichbare Teilziele festgehalten.",
          "_ erhält bei neuen Aufgaben überschaubare Einstiegsschritte und ausreichend Zeit für einen ersten Versuch.",
          "Fehler werden wertschätzend als Lernanlass besprochen und mit einer konkreten nächsten Handlung verbunden."
        ],
        evaluation: [
          "Beobachtet wird, ob _ eigene Stärken oder gelungene Arbeitsschritte zunehmend benennen kann.",
          "Dokumentiert wird, ob _ neue Aufgaben häufiger mit einem ersten eigenen Versuch beginnt.",
          "Überprüft wird, ob _ Rückmeldungen und Hilfe für einen nächsten Arbeitsschritt nutzt."
        ]
      }),
      "Selbstkontrolle / Impulssteuerung": topic({
        istStand: [
          "In emotional herausfordernden Situationen fällt es #ihm/ihr# noch schwer, eigene Impulse kurz zu unterbrechen.",
          "Das Abwarten der eigenen Reihe gelingt _ in kurzen Gesprächs- oder Spielsituationen mit Erinnerung.",
          "Vereinbarte Stoppsignale nutzt _ noch nicht durchgängig ohne Begleitung.",
          "Bei Aufregung nimmt _ ruhige Unterstützung zunehmend an.",
          "Handlungsalternativen werden nach einer kurzen Reflexion mit Unterstützung erprobt.",
          "In überschaubaren Gesprächen und Spielen hält _ vereinbarte Regeln bereits teilweise ein."
        ],
        ziele: [
          "Eigene Impulse in kurzen Situationen wahrnehmen und einen Moment unterbrechen.",
          "Vereinbarte Stoppsignale zunehmend sicher nutzen.",
          "In Gesprächs- und Spielsituationen die eigene Reihe häufiger abwarten.",
          "Bei Aufregung Unterstützung annehmen und eine vereinbarte Handlungsalternative erproben."
        ],
        massnahmen: [
          "Vereinbarte Stoppsignale und kurze Rituale zum Innehalten werden sichtbar gemacht und regelmäßig geübt.",
          "In kurzen Gesprächs- und Spielsituationen werden Abwarten, Sprecherwechsel und Regelgebrauch überschaubar eingeübt.",
          "_ erhält bei Aufregung eine ruhige, knappe Begleitung und eine Auswahl passender Handlungsalternativen.",
          "In kurzen Reflexionsphasen werden gelungene Unterbrechungen und alternative Reaktionen konkret rückgemeldet."
        ],
        evaluation: [
          "Beobachtet wird, ob _ vereinbarte Stoppsignale häufiger nutzt und Handlungen kurz unterbricht.",
          "Dokumentiert wird, ob das Abwarten in kurzen Gesprächs- oder Spielsituationen sicherer gelingt.",
          "Überprüft wird, ob _ bei Aufregung Unterstützung annimmt und eine vereinbarte Alternative erprobt."
        ]
      }),
      "Belastbarkeit / Rückkehr in die Situation": topic({
        istStand: [
          "Nach Enttäuschungen benötigt _ noch Unterstützung, um wieder an eine begonnene Aufgabe anzuknüpfen.",
          "Nach Konflikten gelingt die Rückkehr in die Gruppe mit ruhiger Begleitung zunehmend besser.",
          "Veränderungen oder unerwartete Übergänge führen noch zu Unsicherheit.",
          "Kleine Misserfolge kann _ in überschaubaren Situationen mit Ermutigung zunehmend aushalten.",
          "Vereinbarte Pausen oder Hilfen unterstützen #ihn/sie# dabei, sich nach emotionaler Anspannung zu beruhigen.",
          "Nach einer Unterbrechung benötigt _ noch Orientierung für den nächsten Arbeits- oder Handlungsschritt."
        ],
        ziele: [
          "Nach einer Enttäuschung eine vereinbarte Hilfe nutzen und die Tätigkeit wieder aufnehmen.",
          "Nach Konflikten mit Unterstützung in die gemeinsame Lern- oder Gruppensituation zurückkehren.",
          "Veränderungen und Übergänge mithilfe bekannter Rituale zunehmend sicher bewältigen.",
          "Nach emotionaler Anspannung zur Aufgabe oder zum nächsten Handlungsschritt zurückfinden."
        ],
        massnahmen: [
          "Vereinbarte Pausen-, Beruhigungs- und Rückkehrrituale werden sichtbar gemacht und wiederkehrend genutzt.",
          "Übergänge und Veränderungen werden klar angekündigt und mit einem nächsten konkreten Schritt verbunden.",
          "_ erhält nach Enttäuschungen oder Konflikten eine kurze ruhige Begleitung für die Rückkehr in die Situation.",
          "Erfolgreiches Wiederanknüpfen an Aufgaben oder Gruppensituationen wird konkret und wertschätzend rückgemeldet."
        ],
        evaluation: [
          "Beobachtet wird, ob _ nach Enttäuschungen oder Unterbrechungen häufiger zur Tätigkeit zurückfindet.",
          "Dokumentiert wird, welche vereinbarten Hilfen bei Übergängen und Rückkehrsituationen genutzt werden.",
          "Überprüft wird, ob _ nach Konflikten mit weniger Begleitung wieder an der Gruppensituation teilnimmt."
        ]
      }),
      Kooperationsverhalten: topic({
        istStand: [
          "_ arbeitet in klar strukturierten Partneraufgaben mit Unterstützung mit anderen zusammen.",
          "Rollen in Partner- oder Gruppenaufgaben werden noch nicht durchgängig selbstständig übernommen.",
          "Absprachen hält _ sicherer ein, wenn Aufgabe und Zeitraum überschaubar sind.",
          "Das Teilen und gemeinsame Nutzen von Material gelingt mit klarer Vereinbarung zunehmend besser.",
          "Eigene Ideen bringt _ mit Unterstützung ein; Beiträge anderer werden noch nicht immer einbezogen.",
          "Bei unterschiedlichen Lösungsvorschlägen benötigt _ noch Begleitung, um an einer gemeinsamen Lösung weiterzuarbeiten."
        ],
        ziele: [
          "Eine vereinbarte Rolle in Partner- oder Gruppenaufgaben übernehmen.",
          "Absprachen einhalten und Material angemessen mit anderen nutzen.",
          "Eigene Ideen verständlich einbringen und Beiträge anderer berücksichtigen.",
          "Sich bei unterschiedlichen Vorschlägen auf eine gemeinsame Lösung einlassen."
        ],
        massnahmen: [
          "Partner- und Gruppenaufgaben werden mit klaren Rollen, kurzen Zeitabschnitten und sichtbaren Absprachen strukturiert.",
          "Gemeinsam werden Regeln für Materialnutzung, Zuhören und das Einbringen eigener Ideen vereinbart.",
          "_ erhält Satzanfänge für Vorschläge, Zustimmung, Rückfragen und gemeinsame Entscheidungen.",
          "Gelungene Zusammenarbeit und eingehaltene Absprachen werden zeitnah konkret rückgemeldet."
        ],
        evaluation: [
          "Beobachtet wird, ob _ vereinbarte Rollen und Absprachen in Partner- oder Gruppenaufgaben einhält.",
          "Dokumentiert wird, ob eigene Ideen und Beiträge anderer zunehmend verbunden werden.",
          "Überprüft wird, ob _ Material teilt und bei einer gemeinsamen Aufgabe mit weniger Begleitung weiterarbeitet."
        ]
      }),
      "Empathie / Hilfsbereitschaft": topic({
        istStand: [
          "Gefühle oder Bedürfnisse anderer nimmt _ in eindeutigen Situationen mit Unterstützung wahr.",
          "In gemeinsamen Situationen benötigt _ noch Erinnerung, die Bedürfnisse anderer zu berücksichtigen.",
          "Hilfe bietet _ eher an, wenn der Unterstützungsbedarf klar benannt oder sichtbar ist.",
          "Hilfsangebote anderer kann _ mit Begleitung zunehmend annehmen.",
          "Auf veränderte Stimmungen in der Gruppe reagiert _ noch nicht durchgängig situationspassend.",
          "Ein Perspektivwechsel gelingt mit konkreten Fragen und kurzen Beispielen zunehmend besser."
        ],
        ziele: [
          "Gefühle und Bedürfnisse anderer in eindeutigen Situationen zunehmend wahrnehmen.",
          "In gemeinsamen Situationen häufiger Rücksicht auf andere nehmen.",
          "Hilfe situationsangemessen anbieten und Unterstützung annehmen.",
          "Eine andere Sichtweise mithilfe konkreter Fragen nachvollziehen."
        ],
        massnahmen: [
          "Gefühle, Bedürfnisse und unterschiedliche Sichtweisen werden an kurzen Alltagssituationen gemeinsam besprochen.",
          "In Partner- und Gruppensituationen werden Rücksichtnahme und freundliche Hilfsangebote konkret vorbereitet.",
          "_ erhält Satzanfänge für Hilfsangebote, Nachfragen und das Annehmen von Unterstützung.",
          "Hilfsbereite und rücksichtsvolle Handlungen werden zeitnah und konkret rückgemeldet."
        ],
        evaluation: [
          "Beobachtet wird, ob _ Gefühle oder Bedürfnisse anderer in bekannten Situationen häufiger wahrnimmt.",
          "Dokumentiert wird, ob _ Hilfe situationsangemessen anbietet oder annimmt.",
          "Überprüft wird, ob _ bei gemeinsamen Aufgaben die Sichtweise anderer mit Unterstützung berücksichtigt."
        ]
      }),
      "Kritikfähigkeit / Rückmeldung annehmen": topic({
        istStand: [
          "Rückmeldungen kann _ in ruhiger Begleitung zunehmend anhören.",
          "Konkrete Hinweise zur Verbesserung werden noch nicht durchgängig in die Weiterarbeit übertragen.",
          "Eigene Arbeit überarbeitet _ sicherer, wenn wenige Korrekturschritte klar benannt sind.",
          "Sachliche Rückmeldung und persönliche Bewertung werden noch nicht zuverlässig unterschieden.",
          "Nach einem Korrekturhinweis benötigt _ noch Zeit und Orientierung für den nächsten Arbeitsschritt.",
          "Fehler kann _ mit Unterstützung zunehmend als Teil des Lernprozesses einordnen."
        ],
        ziele: [
          "Konkrete Rückmeldungen anhören und den nächsten Arbeitsschritt benennen.",
          "Vereinbarte Korrekturhinweise zunehmend für die Überarbeitung nutzen.",
          "Sachliche Rückmeldung und persönliche Bewertung besser unterscheiden.",
          "Nach einer Rückmeldung die Arbeit mit angemessener Unterstützung fortsetzen."
        ],
        massnahmen: [
          "Rückmeldungen erfolgen ruhig, konkret und auf wenige beobachtbare Arbeitsschritte bezogen.",
          "In kurzen Reflexionsphasen werden Rückmeldung, nächster Schritt und gelungene Überarbeitung miteinander verbunden.",
          "_ erhält überschaubare Korrekturaufträge und ausreichend Zeit für die Weiterarbeit.",
          "Fehler und Verbesserungen werden wertschätzend als sichtbare Lernschritte dokumentiert."
        ],
        evaluation: [
          "Beobachtet wird, ob _ konkrete Rückmeldungen häufiger anhört und einen nächsten Schritt benennt.",
          "Dokumentiert wird, ob vereinbarte Korrekturen in der eigenen Arbeit umgesetzt werden.",
          "Überprüft wird, ob _ nach Rückmeldungen mit weniger Begleitung weiterarbeitet."
        ]
      })
    },

    "Lern- und Leistungsverhalten": {
      Aufgabenbeginn: topic({
        istStand: [
          baustein("_ beginnt Aufgaben mit Unterstützung.", [
            "Aufgaben beginnt _ derzeit noch mit Unterstützung.",
            "Mit kurzer Unterstützung findet _ in den Aufgabenbeginn."
          ]),
          baustein("_ benötigt klare Startsignale und überschaubare Arbeitsaufträge.", [
            "Klare Startsignale und überschaubare Arbeitsaufträge helfen #ihm/ihr# beim Arbeitsbeginn.",
            "Bei überschaubaren Arbeitsaufträgen findet _ leichter in die Arbeit."
          ]),
          baustein("_ findet mit Hilfe zunehmend in die Arbeitsphase.", [
            "Mit Hilfe findet _ zunehmend in die Arbeitsphase.",
            "In bekannten Aufgabenformaten gelingt der Einstieg in die Arbeitsphase zunehmend besser."
          ])
        ],
        ziele: [
          baustein("Aufgaben zunehmend selbstständig beginnen.", [
            "Nach kurzer Orientierung eigenständig mit Aufgaben starten."
          ]),
          baustein("Arbeitsaufträge erfassen und erste Schritte eigenständig umsetzen.", [
            "Erste Handlungsschritte aus Arbeitsaufträgen ableiten."
          ]),
          baustein("Vereinbarte Startstrategien nutzen.", [
            "Die Startkarte oder Schrittfolge beim Aufgabenbeginn einsetzen."
          ])
        ],
        massnahmen: [
          "Arbeitsaufträge werden kurz, klar und ggf. visualisiert angeboten.",
          "_ nutzt eine Startkarte oder kurze Schrittfolge.",
          "Der Arbeitsbeginn wird durch direkte Rückmeldung unterstützt."
        ],
        evaluation: [
          "Der Aufgabenbeginn wird im Unterricht beobachtet.",
          "Die Nutzung der Startstrategie wird regelmäßig überprüft.",
          "Dokumentiert wird, ob _ nach einem vereinbarten Startsignal mit weniger Unterstützung beginnt."
        ]
      }),
      Konzentration: topic({
        istStand: [
          baustein("_ arbeitet in kurzen Phasen konzentriert mit.", [
            "In kurzen Phasen arbeitet _ konzentriert mit.",
            "Kurze Arbeitsphasen kann _ zunehmend konzentriert bearbeiten."
          ]),
          baustein("_ lässt sich durch Reize im Umfeld noch leicht ablenken.", [
            "Reize im Umfeld lenken #ihn/sie# noch leicht von der Aufgabe ab.",
            "Bei Ablenkungen im Umfeld verliert _ die Aufgabe noch aus dem Blick."
          ]),
          baustein("_ benötigt Erinnerung, um bei der Aufgabe zu bleiben.", [
            "Erinnerungen helfen #ihm/ihr#, bei der Aufgabe zu bleiben.",
            "Mit kurzer Rückmeldung kann _ wieder zur Aufgabe zurückfinden."
          ])
        ],
        ziele: [
          baustein("Die Aufmerksamkeit schrittweise länger aufrechterhalten.", [
            "Über eine vereinbarte Arbeitszeit bei der Aufgabe bleiben."
          ]),
          baustein("Ablenkungen zunehmend besser ausblenden.", [
            "Nach Ablenkungen wieder zur Aufgabe zurückfinden."
          ]),
          baustein("Vereinbarte Konzentrationshilfen nutzen.", [
            "Timer, Arbeitsplatzhilfe oder kurze Erinnerung als Konzentrationshilfe einsetzen."
          ])
        ],
        massnahmen: [
          "Arbeitsphasen werden kurz und klar begrenzt.",
          "Ein reizreduzierter Arbeitsplatz unterstützt #ihn/sie#.",
          "Kurze Rückmeldungen helfen #ihm/ihr#, bei der Aufgabe zu bleiben."
        ],
        evaluation: [
          "Die Konzentrationsdauer wird beobachtet.",
          "Arbeitsphasen und Arbeitsergebnisse werden regelmäßig gesichtet.",
          "Überprüft wird, ob _ über die vereinbarte Arbeitszeit häufiger bei der Aufgabe bleibt."
        ]
      }),
      Ausdauer: topic({
        istStand: [
          baustein("_ beendet Aufgaben noch nicht immer vollständig.", [
            "Aufgaben beendet _ noch nicht immer vollständig.",
            "Begonnene Aufgaben bleiben teilweise noch unvollständig."
          ]),
          baustein("_ benötigt Ermutigung, um bei schwierigen Aufgaben weiterzuarbeiten.", [
            "Bei schwierigen Aufgaben hilft #ihm/ihr# Ermutigung, weiterzuarbeiten.",
            "Ermutigung unterstützt #ihn/sie# dabei, schwierige Aufgaben fortzuführen."
          ]),
          baustein("_ arbeitet ausdauernder, wenn die Aufgabe klar strukturiert ist.", [
            "Klar strukturierte Aufgaben bearbeitet _ ausdauernder.",
            "Bei klarer Struktur gelingt es #ihm/ihr# besser, an der Aufgabe zu bleiben."
          ])
        ],
        ziele: [
          "Aufgaben über einen angemessenen Zeitraum bearbeiten.",
          "Begonnene Aufgaben möglichst vollständig abschließen.",
          "Bei Schwierigkeiten vereinbarte Hilfen nutzen."
        ],
        massnahmen: [
          "Aufgaben werden in überschaubare Teilschritte gegliedert.",
          "Pausen und kurze Rückmeldungen werden gezielt eingesetzt.",
          "_ erhält Rückmeldung zu begonnenen und abgeschlossenen Arbeitsschritten."
        ],
        evaluation: [
          "Vollständigkeit und Bearbeitungsdauer werden beobachtet.",
          "Arbeitsergebnisse werden im Förderzeitraum verglichen.",
          "Dokumentiert wird, ob _ begonnene Aufgaben auch bei Schwierigkeiten häufiger abschließt."
        ]
      }),
      Selbstständigkeit: topic({
        istStand: [
          baustein("_ fragt bei Unsicherheiten häufig nach Bestätigung.", [
            "Bei Unsicherheiten fragt _ häufig nach Bestätigung.",
            "Unsichere Arbeitsschritte klärt _ noch häufig durch Nachfragen ab."
          ]),
          baustein("_ arbeitet mit Strukturhilfen zunehmend selbstständiger.", [
            "Mit Strukturhilfen arbeitet _ zunehmend selbstständiger.",
            "Strukturhilfen unterstützen #ihn/sie# dabei, Aufgaben eigenständiger zu bearbeiten."
          ]),
          baustein("_ benötigt noch Unterstützung bei der Auswahl passender Hilfen.", [
            "Bei der Auswahl passender Hilfen braucht #er/sie# noch Unterstützung.",
            "Passende Hilfen wählt _ noch nicht durchgängig selbst aus."
          ])
        ],
        ziele: [
          "Bekannte Hilfen selbstständiger nutzen.",
          "Einfache Arbeitsschritte eigenständig ausführen.",
          "Bei Unsicherheiten angemessen Hilfe einfordern."
        ],
        massnahmen: [
          "Checklisten und Beispielaufgaben werden bereitgestellt.",
          "_ übt, zunächst bekannte Hilfen zu nutzen, bevor #er/sie# nachfragt.",
          "Selbstständige Arbeitsschritte werden positiv rückgemeldet."
        ],
        evaluation: [
          "Die Nutzung von Hilfen wird beobachtet.",
          "Selbstständig bearbeitete Arbeitsschritte werden dokumentiert.",
          "Überprüft wird, ob _ bekannte Arbeitsschritte mit weniger direkter Begleitung ausführt."
        ]
      }),
      Arbeitsorganisation: topic({
        istStand: [
          baustein("_ benötigt Unterstützung beim Bereitlegen von Material.", [
            "Beim Bereitlegen von Material braucht #er/sie# noch Unterstützung.",
            "Mit einer Materialliste kann _ den Arbeitsplatz geordneter vorbereiten."
          ]),
          baustein("_ verliert bei mehrschrittigen Aufgaben noch leicht den Überblick.", [
            "Bei mehrschrittigen Aufgaben verliert _ noch leicht den Überblick.",
            "Mehrschrittige Aufgaben fallen #ihm/ihr# leichter, wenn die Schritte sichtbar sind."
          ]),
          baustein("_ arbeitet geordneter, wenn Materialien klar strukturiert sind.", [
            "Klar strukturierte Materialien unterstützen #ihn/sie# beim geordneten Arbeiten.",
            "Mit übersichtlichem Material arbeitet _ geordneter."
          ])
        ],
        ziele: [
          "Benötigtes Material zunehmend selbstständig bereitlegen.",
          "Arbeitsschritte in sinnvoller Reihenfolge bearbeiten.",
            "Den Arbeitsplatz übersichtlicher organisieren."
        ],
        massnahmen: [
          "Materiallisten, feste Abläufe und klare Ablageorte werden genutzt.",
          "Mehrschrittige Aufgaben werden sichtbar gegliedert.",
            "Den Arbeitsplatz mithilfe einer kurzen Checkliste kontrollieren."
        ],
        evaluation: [
          "Arbeitsplatz, Materialnutzung und Reihenfolge der Arbeitsschritte werden beobachtet.",
          "Die Nutzung organisatorischer Hilfen wird regelmäßig überprüft.",
          "Dokumentiert wird, ob _ benötigtes Material und vereinbarte Ordnungssysteme zunehmend selbstständiger nutzt."
        ]
      })
    },

    "Sprache / Kommunikation": {
      "Arbeitsaufträge verstehen": topic({
        istStand: [
          baustein("_ versteht kurze Arbeitsaufträge mit Unterstützung.", [
            "Kurze Arbeitsaufträge versteht _ mit Unterstützung.",
            "Mit kurzer Klärung kann _ einfache Arbeitsaufträge besser verstehen."
          ]),
          baustein("_ benötigt Wiederholungen oder zusätzliche Visualisierungen.", [
            "Wiederholungen oder zusätzliche Visualisierungen erleichtern #ihm/ihr# das Verstehen.",
            "Bei mündlichen Aufträgen helfen #ihm/ihr# Wiederholungen und Visualisierungen."
          ]),
          baustein("_ setzt einfache Aufträge in vertrauten Situationen um.", [
            "Einfache Aufträge setzt _ in vertrauten Situationen um.",
            "In vertrauten Situationen gelingt die Umsetzung einfacher Aufträge zunehmend."
          ])
        ],
        ziele: [
          baustein("Arbeitsaufträge sicherer verstehen und umsetzen.", [
            "Kurze Arbeitsaufträge mit weniger Hilfe ausführen."
          ]),
          baustein("Bei Unklarheiten gezielt nachfragen.", [
            "Nachfragen nutzen, wenn ein Arbeitsauftrag unklar ist."
          ]),
          baustein("Wichtige Handlungsschritte aus einem Auftrag entnehmen.", [
            "Mehrschrittige Aufträge in einzelne Handlungsschritte gliedern."
          ])
        ],
        massnahmen: [
          "Arbeitsaufträge werden kurz, klar und ggf. visualisiert formuliert.",
          "_ wiederholt den Auftrag mit eigenen Worten.",
          "Mehrschrittige Aufträge werden in Einzelschritte zerlegt."
        ],
        evaluation: [
          "Die Umsetzung mündlicher Arbeitsaufträge wird beobachtet.",
          "Die Selbstständigkeit bei Arbeitsaufträgen wird regelmäßig überprüft."
        ]
      }),
      Wortschatz: topic({
        istStand: [
          baustein("_ nutzt bekannte Wörter in vertrauten Situationen.", [
            "Bekannte Wörter nutzt _ in vertrauten Situationen.",
            "In vertrauten Situationen greift _ auf bekannte Wörter zurück."
          ]),
          baustein("_ benötigt Unterstützung beim Verstehen neuer Begriffe.", [
            "Beim Verstehen neuer Begriffe braucht #er/sie# noch Unterstützung.",
            "Neue Begriffe erschließt _ mit sprachlicher Vorentlastung leichter."
          ]),
          baustein("_ kann Inhalte besser ausdrücken, wenn Wortmaterial vorgegeben ist.", [
            "Vorgegebenes Wortmaterial hilft #ihm/ihr#, Inhalte verständlicher auszudrücken.",
            "Mit Wortkarten oder Wortfeldern kann _ Inhalte besser ausdrücken."
          ])
        ],
        ziele: [
          baustein("Wortschatzkenntnisse erweitern und sicherer nutzen.", [
            "Den Wortschatz erweitern und sicherer nutzen.",
            "Bekannte und neue Begriffe passender verwenden."
          ]),
          baustein("Neue Begriffe verstehen und anwenden.", [
            "Geübte Begriffe in mündlichen und schriftlichen Situationen nutzen."
          ]),
          baustein("Passende Wörter zur Beschreibung von Inhalten verwenden.", [
            "Inhalte mit treffenden Wörtern verständlicher beschreiben."
          ])
        ],
        massnahmen: [
          "Neue Begriffe werden vorentlastet, visualisiert und wiederholt.",
          "Wortkarten, Bildkarten und Satzmuster unterstützen #ihn/sie#.",
          "_ nutzt Wörter in mündlichen und schriftlichen Übungsphasen."
        ],
        evaluation: [
          "Die Verwendung neuer Begriffe wird im Unterricht beobachtet.",
          "Mündliche und schriftliche Beiträge werden ausgewertet."
        ]
      }),
      Satzbildung: topic({
        istStand: [
          baustein("_ bildet einfache Sätze mit Unterstützung.", [
            "Einfache Sätze bildet _ mit Unterstützung.",
            "Mit Satzmustern kann _ einfache Sätze verständlicher bilden."
          ]),
          baustein("_ benötigt Satzanfänge, um Inhalte verständlich zu formulieren.", [
            "Satzanfänge helfen #ihm/ihr#, Inhalte verständlich zu formulieren.",
            "Mit Satzanfängen gelingen #ihm/ihr# eigene Aussagen strukturierter."
          ]),
          baustein("_ lässt in längeren Äußerungen noch Satzteile aus.", [
            "In längeren Äußerungen lässt _ noch Satzteile aus.",
            "Längere Äußerungen bleiben teilweise noch unvollständig."
          ])
        ],
        ziele: [
          "Vollständige Sätze bilden.",
          "Satzmuster sicherer verwenden.",
          "Eigene Aussagen verständlicher strukturieren."
        ],
        massnahmen: [
          "Satzanfänge und Satzmuster werden angeboten und eingeübt.",
          "Aussagen werden gemeinsam erweitert und umformuliert.",
          "Bildimpulse unterstützen #ihn/sie# beim Formulieren."
        ],
        evaluation: [
          "Mündliche und schriftliche Sätze werden regelmäßig betrachtet.",
          "Die Nutzung von Satzmustern wird beobachtet."
        ]
      }),
      Gesprächsverhalten: topic({
        istStand: [
          baustein("_ beteiligt sich in vertrauten Situationen am Gespräch.", [
            "In vertrauten Situationen beteiligt sich _ am Gespräch.",
            "An Gesprächen beteiligt sich _ in vertrauten Situationen zunehmend."
          ]),
          baustein("_ benötigt Erinnerung, um zuzuhören oder abzuwarten.", [
            "Erinnerungen helfen #ihm/ihr#, zuzuhören oder abzuwarten.",
            "Beim Zuhören und Abwarten braucht #er/sie# noch kurze Erinnerungen."
          ]),
          baustein("_ kann eigene Beiträge mit Unterstützung einbringen.", [
            "Eigene Beiträge kann _ mit Unterstützung einbringen.",
            "Mit Satzanfängen oder Impulsen bringt _ eigene Beiträge ein."
          ])
        ],
        ziele: [
          "Gesprächsregeln zunehmend beachten.",
          "Eigene Beiträge verständlich einbringen.",
          "Auf Beiträge anderer angemessen reagieren."
        ],
        massnahmen: [
          "Gesprächsregeln werden sichtbar gemacht und eingeübt.",
          "Kurze Gesprächsanlässe in Partner- oder Kleingruppenarbeit werden genutzt.",
          "_ erhält Satzanfänge für eigene Beiträge."
        ],
        evaluation: [
          "Das Gesprächsverhalten wird in Unterrichtsgesprächen beobachtet.",
          "Beteiligung, Zuhören und Abwarten werden regelmäßig rückgemeldet."
        ]
      })
    },

    Motorik: {
      Feinmotorik: topic({
        istStand: [
          "_ zeigt bei feinmotorischen Aufgaben noch Unsicherheiten.",
          "_ benötigt Unterstützung beim Schneiden, Kleben oder Falten.",
          "_ arbeitet genauer, wenn Material und Auftrag übersichtlich sind."
        ],
        ziele: [
          "Feinmotorische Bewegungen sicherer ausführen.",
          "Arbeitsmaterial gezielter nutzen.",
          "Feinmotorische Aufgaben sorgfältiger bearbeiten."
        ],
        massnahmen: [
          "Feinmotorische Übungen werden regelmäßig kurz eingebunden.",
          "_ erhält geeignetes Material und klare Handlungsschritte.",
          "Schneide-, Klebe- und Faltaufgaben werden kleinschrittig begleitet."
        ],
        evaluation: [
          "Die Genauigkeit feinmotorischer Aufgaben wird beobachtet.",
          "Arbeitsproben werden im Förderzeitraum verglichen.",
          "Überprüft wird, ob _ feinmotorische Aufgaben mit weniger Unterstützung und zunehmender Genauigkeit ausführt."
        ]
      }),
      Graphomotorik: topic({
        istStand: [
          "_ benötigt Unterstützung bei einer lockeren und sicheren Stifthaltung.",
          "_ schreibt noch mit wechselnder Druckstärke oder Linienführung.",
          "_ ermüdet bei Schreibaufgaben schnell."
        ],
        ziele: [
          "Stiftführung verbessern.",
          "Buchstaben und Ziffern formklarer schreiben.",
          "Schreibbewegungen flüssiger ausführen."
        ],
        massnahmen: [
          "Schwungübungen, Nachspuraufgaben und kurze Schreibphasen werden eingesetzt.",
          "Auf Stifthaltung, Sitzhaltung und angemessenen Schreibdruck wird geachtet.",
          "Schreibaufgaben werden in überschaubare Abschnitte gegliedert."
        ],
        evaluation: [
          "Schriftproben werden regelmäßig verglichen.",
          "Stifthaltung, Druck und Linienführung werden beobachtet.",
          "Dokumentiert wird, ob _ vereinbarte Schreibphasen mit stabilerer Stiftführung und weniger Ermüdung bewältigt."
        ]
      }),
      Grobmotorik: topic({
        istStand: [
          "_ zeigt bei grobmotorischen Bewegungsabläufen noch Unsicherheiten.",
          "_ benötigt Unterstützung bei Koordination und Gleichgewicht.",
          "_ beteiligt sich an Bewegungsangeboten mit Ermutigung."
        ],
        ziele: [
          "Bewegungsabläufe sicherer koordinieren.",
          "Gleichgewicht und Körperkontrolle weiterentwickeln.",
          "Sich an Bewegungsangeboten aktiver beteiligen."
        ],
        massnahmen: [
          "Bewegungsübungen zu Gleichgewicht, Koordination und Körperwahrnehmung werden angeboten.",
          "_ erhält klare Bewegungsaufträge und ausreichend Übungszeit.",
          "Erfolge werden sichtbar gemacht und positiv rückgemeldet."
        ],
        evaluation: [
          "Die Teilnahme an Bewegungsangeboten wird beobachtet.",
          "Koordination und Bewegungssicherheit werden im Förderzeitraum eingeschätzt.",
          "Überprüft wird, ob _ bekannte grobmotorische Bewegungsabläufe mit weniger Unterstützung sicherer ausführt."
        ]
      }),
      "Bilaterale Koordination": topic({
        istStand: [
          "_ setzt beide Körperseiten bei Bewegungsaufgaben noch nicht durchgängig koordiniert ein.",
          "Bei beidhändigen Tätigkeiten übernimmt die unterstützende Hand ihre Aufgabe noch nicht zuverlässig.",
          "Schneiden, Falten, Kleben oder Festhalten gelingen sicherer, wenn die Aufgabenfolge vorgemacht wird.",
          "Das Überkreuzen der Körpermitte ist bei Bewegungs- und Materialaufgaben noch unsicher.",
          "Rhythmische Bewegungen mit beiden Händen oder Füßen werden noch nicht durchgängig abgestimmt ausgeführt.",
          "Rechte und linke Körperseite werden in mehrteiligen Bewegungsabläufen noch nicht sicher aufeinander abgestimmt."
        ],
        ziele: [
          "Beide Körperseiten bei einfachen Bewegungsaufgaben koordinierter einsetzen.",
          "Beidhändige Tätigkeiten wie Schneiden, Falten oder Kleben sicherer ausführen.",
          "Die Körpermitte bei bekannten Bewegungsabläufen gezielter überkreuzen.",
          "Rhythmische Bewegungen mit beiden Händen oder Füßen zunehmend abgestimmt umsetzen."
        ],
        massnahmen: [
          "In kurzen Bewegungsphasen werden beidseitige und überkreuzende Bewegungsmuster wiederholt geübt.",
          "Schneide-, Falt- und Klebeaufgaben werden so angeboten, dass Halte- und Arbeitshand klar eingesetzt werden.",
          "Bewegungsabläufe mit beiden Händen oder Füßen werden vorgemacht, rhythmisiert und schrittweise erweitert.",
          "_ erhält Markierungen oder kurze Bewegungsfolgen zur Orientierung von rechter und linker Körperseite."
        ],
        evaluation: [
          "Beobachtet wird, ob _ beide Körperseiten bei bekannten Aufgaben koordinierter einsetzt.",
          "Dokumentiert wird, ob beidhändige Tätigkeiten mit weniger Unterstützung gelingen.",
          "Überprüft wird, ob _ überkreuzende oder rhythmische Bewegungsfolgen zunehmend sicher ausführt."
        ]
      }),
      "Gleichgewicht / vestibuläre Sicherheit": topic({
        istStand: [
          "_ hält das Gleichgewicht auf einer Linie oder einer schmalen Bewegungsfläche noch nicht durchgängig sicher.",
          "Der Einbeinstand gelingt für kurze Zeit mit Unterstützung oder zusätzlicher Stabilisierung.",
          "Bei Hüpfen, Springen oder Drehen wird die Bewegung noch nicht zuverlässig kontrolliert beendet.",
          "Nach Lage- oder Richtungswechseln benötigt _ noch Zeit, um den Körper wieder zu stabilisieren.",
          "Treppen, Höhenunterschiede oder Bewegungsparcours werden mit klarer Führung sicherer bewältigt.",
          "Bewegungstempo und Krafteinsatz werden beim Abbremsen noch nicht durchgängig passend dosiert."
        ],
        ziele: [
          "Auf einer Linie oder einer schmalen Bewegungsfläche zunehmend sicher balancieren.",
          "Den Einbeinstand für eine vereinbarte kurze Zeit stabil halten.",
          "Hüpf-, Sprung- und Drehbewegungen kontrollierter ausführen und beenden.",
          "Treppen, Höhenunterschiede oder bekannte Bewegungsparcours mit weniger Unterstützung bewältigen."
        ],
        massnahmen: [
          "In kurzen Bewegungsphasen werden Balancieren, Einbeinstand und kontrolliertes Landen wiederholt geübt.",
          "Bewegungsparcours werden übersichtlich aufgebaut und in einzelne motorische Schritte gegliedert.",
          "Zur Unterstützung werden feste Start- und Stoppsignale sowie klar markierte Bewegungswege genutzt.",
          "Hüpfen, Springen, Drehen und Abbremsen werden mit angepasstem Tempo schrittweise eingeübt."
        ],
        evaluation: [
          "Beobachtet wird, ob _ auf bekannten Bewegungswegen stabiler balanciert.",
          "Dokumentiert wird, wie lange _ den Einbeinstand hält und wie sicher Landungen gelingen.",
          "Überprüft wird, ob _ Lagewechsel, Treppen oder Bewegungsparcours mit weniger motorischer Unterstützung bewältigt."
        ]
      }),
      "Motorische Handlungsplanung": topic({
        istStand: [
          "_ benötigt bei mehrschrittigen Bewegungsaufgaben noch Unterstützung, um den Ablauf vor Beginn zu erfassen.",
          "Die Reihenfolge einzelner Bewegungs- oder Handlungsschritte geht während der Ausführung noch verloren.",
          "Neue motorische Aufgaben gelingen sicherer, wenn sie vorgemacht und in Teilschritte gegliedert werden.",
          "Bei veränderten Bewegungsanforderungen wird ein bekannter Ablauf noch nicht selbstständig angepasst.",
          "Benötigte Materialien werden für motorische Handlungen noch nicht durchgängig passend ausgewählt oder eingesetzt.",
          "Nach Unterbrechungen findet _ noch nicht zuverlässig zum nächsten Handlungsschritt zurück."
        ],
        ziele: [
          "Einfache Bewegungsabläufe vor der Ausführung in ihrer Reihenfolge erfassen.",
          "Mehrschrittige motorische Aufgaben zunehmend vollständig umsetzen.",
          "Bekannte Bewegungsabläufe an veränderte Anforderungen gezielter anpassen.",
          "Passende Materialien für eine motorische Handlung auswählen und zweckmäßig einsetzen."
        ],
        massnahmen: [
          "Bewegungsabläufe werden vorgemacht, gemeinsam benannt und mit Bild- oder Schrittkarten gesichert.",
          "Mehrschrittige motorische Aufgaben werden zunächst in kurze, klar erkennbare Teilhandlungen gegliedert.",
          "_ erhält vor der Ausführung Zeit, Reihenfolge und benötigtes Material kurz zu planen.",
          "Bekannte Abläufe werden mit kleinen Veränderungen wiederholt und anschließend gemeinsam reflektiert."
        ],
        evaluation: [
          "Beobachtet wird, ob _ Bewegungsabläufe in der vereinbarten Reihenfolge ausführt.",
          "Dokumentiert wird, bei welchen Teilschritten noch Vormachen oder Erinnerung notwendig ist.",
          "Überprüft wird, ob _ Material und Bewegungsablauf bei veränderten Aufgaben zunehmend passend anpasst."
        ]
      }),
      Körperschema: topic({
        istStand: [
          "_ benennt oder bewegt einzelne Körperteile bei Bewegungsaufträgen noch nicht durchgängig sicher.",
          "Rechts und links werden am eigenen Körper noch nicht zuverlässig unterschieden.",
          "Bewegungen werden ohne Vormachen noch nicht sicher am eigenen Körper orientiert.",
          "Die Körperhaltung wird bei wechselnden Bewegungsanforderungen noch nicht durchgängig angepasst.",
          "Körpergrenzen werden in Bewegungsaufgaben mit anderen Personen oder Materialien noch nicht sicher berücksichtigt.",
          "Räumliche Bewegungsaufträge werden am eigenen Körper mit klaren Markierungen sicherer umgesetzt."
        ],
        ziele: [
          "Wichtige Körperteile sicherer benennen und gezielt bewegen.",
          "Rechts und links am eigenen Körper zunehmend sicher unterscheiden.",
          "Die eigene Körperhaltung an bekannte Bewegungsanforderungen anpassen.",
          "Bewegungen räumlich am eigenen Körper orientieren und gezielter steuern."
        ],
        massnahmen: [
          "In kurzen Bewegungsphasen werden Körperteile benannt, gezeigt und gezielt bewegt.",
          "Rechts-links-Markierungen, Spiegelübungen und eindeutige Bewegungsaufträge werden wiederkehrend genutzt.",
          "Bewegungen werden am eigenen Körper vorgemacht und anschließend in unterschiedlichen Raumrichtungen ausgeführt.",
          "_ erhält klare Rückmeldungen zu Körperhaltung, Körpergrenzen und räumlicher Ausrichtung."
        ],
        evaluation: [
          "Beobachtet wird, ob _ benannte Körperteile gezielter bewegt.",
          "Dokumentiert wird, ob Rechts-links-Aufträge am eigenen Körper sicherer umgesetzt werden.",
          "Überprüft wird, ob _ Körperhaltung und räumliche Ausrichtung bei bekannten Bewegungsaufgaben zunehmend selbstständig anpasst."
        ]
      })
    },

    Wahrnehmung: {
      "Visuomotorische Koordination": topic({
        istStand: [
          "_ benötigt noch Unterstützung, um Auge und Hand bei Schreib-, Nachspur- oder Schneideaufgaben sicher aufeinander abzustimmen.",
          "Linien, Begrenzungen oder einfache Formen werden bei visuomotorischen Aufgaben noch nicht durchgängig eingehalten.",
          "Bei fein abgestimmten Auge-Hand-Aufgaben geht die Linie noch leicht verloren.",
          "Startpunkte, Linienverläufe oder Begrenzungen werden bei visuomotorischen Aufgaben noch nicht zuverlässig erfasst.",
          "Nachspur-, Ausmal- oder Schneideaufgaben werden noch nicht durchgängig entlang der vorgegebenen Begrenzung ausgeführt."
        ],
        ziele: [
          "Linien, Begrenzungen und einfache Formen zunehmend genauer einhalten.",
          "Auge und Hand bei kurzen Arbeitsaufgaben sicherer koordinieren.",
          "Nachspur-, Schneide- oder Zeichenaufgaben mit weniger Unterstützung ausführen.",
          "Startpunkte, Linienverläufe und Begrenzungen zunehmend sicher erfassen."
        ],
        massnahmen: [
          "Im Unterricht werden Nachspur-, Punktverbindungs-, Ausmal- und Schneideaufgaben in kurzen Übungsphasen angeboten.",
          "Vorlagen werden vergrößert, Begrenzungen markiert und Arbeitsschritte sichtbar gemacht.",
          "_ erhält klare Startpunkte, Linienführungen und kurze Rückmeldungen zur Genauigkeit.",
          "Die Anforderungen werden von breiten, klaren Spuren zu feineren Linien schrittweise gesteigert."
        ],
        evaluation: [
          "Beobachtet wird, ob _ Linien, Begrenzungen und einfache Formen zunehmend genauer einhält.",
          "Dokumentiert wird, ob Nachspur-, Schneide- oder Zeichenaufgaben mit weniger Unterstützung gelingen.",
          "Überprüft wird, ob _ Auge und Hand bei kurzen visuomotorischen Aufgaben sicherer koordiniert."
        ]
      }),
      "Figur-Grund-Wahrnehmung": topic({
        istStand: [
          "_ benötigt noch Unterstützung, um wichtige Informationen in unruhigen Bildern, Vorlagen oder Arbeitsblättern sicher herauszufinden.",
          "Gesuchte Elemente werden auf Arbeitsblättern noch nicht zuverlässig vom Hintergrund unterschieden.",
          "In visuell unruhigem Material geht die Orientierung noch leicht verloren.",
          "Relevante Informationen werden in dicht gestalteten Vorlagen noch nicht zuverlässig gefunden.",
          "Das Verfolgen von Linien zwischen anderen Linien gelingt noch unsicher."
        ],
        ziele: [
          "Relevante Informationen in übersichtlichen Vorlagen zunehmend sicher finden.",
          "Wichtige Elemente vom Hintergrund mit weniger Unterstützung unterscheiden.",
          "Suchwege, Linien oder Bildausschnitte genauer verfolgen.",
          "Relevante Informationen auch in dichter gestalteten Vorlagen gezielter auffinden."
        ],
        massnahmen: [
          "Vorlagen werden reduziert, klar gegliedert und wichtige Informationen werden bei Bedarf markiert.",
          "Such-, Vergleichs- und Zuordnungsaufgaben werden in kurzen, überschaubaren Einheiten eingesetzt.",
          "_ nutzt Abdeckhilfen, farbige Markierungen oder einen Lesestreifen zur Orientierung.",
          "Unruhiges Material wird zunächst vereinfacht und anschließend schrittweise erweitert."
        ],
        evaluation: [
          "Beobachtet wird, ob _ gesuchte Informationen in Bildern oder Arbeitsblättern zunehmend sicher findet.",
          "Dokumentiert wird, ob Markierungen oder Abdeckhilfen seltener benötigt werden.",
          "Überprüft wird, ob _ relevante Elemente vom Hintergrund sicherer unterscheidet."
        ]
      }),
      "Wahrnehmungskonstanz": topic({
        istStand: [
          "_ erkennt Formen, Farben oder Merkmale bei veränderter Größe, Lage oder Darstellung noch nicht durchgängig sicher wieder.",
          "Ähnliche Formen oder Zeichen werden noch häufig verwechselt.",
          "Form, Farbe und Größe werden noch nicht immer getrennt beachtet.",
          "Gleiche Merkmale werden in unterschiedlichen Darstellungen noch nicht sicher zugeordnet.",
          "Bekannte Formen oder Merkmale werden in ungewohnter Darstellung noch nicht sicher zugeordnet."
        ],
        ziele: [
          "Gleiche Formen oder Merkmale in unterschiedlichen Darstellungen zunehmend sicher erkennen.",
          "Ähnliche Formen, Farben oder Zeichen genauer unterscheiden.",
          "Form, Farbe und Größe zunehmend getrennt beachten.",
          "Gleichbleibende Merkmale bei wechselnder Darstellung sicherer erkennen."
        ],
        massnahmen: [
          "Formen, Farben und Größen werden in Sortier-, Vergleichs- und Zuordnungsaufgaben gegenübergestellt.",
          "Klare Vergleichsbeispiele, wiederkehrende Sortierkriterien und markierte Merkmale werden genutzt.",
          "_ arbeitet mit variierenden Darstellungen derselben Form oder desselben Merkmals.",
          "Ähnliche Formen oder Zeichen werden gezielt nebeneinandergelegt und versprachlicht."
        ],
        evaluation: [
          "Beobachtet wird, ob _ Formen und Merkmale trotz veränderter Darstellung sicherer wiedererkennt.",
          "Dokumentiert wird, ob ähnliche Formen oder Zeichen seltener verwechselt werden.",
          "Überprüft wird, ob _ Form, Farbe und Größe in Sortieraufgaben zunehmend getrennt beachtet."
        ]
      }),
      "Raum-Lage-Wahrnehmung": topic({
        istStand: [
          "_ benötigt noch Unterstützung, um Raumlagen, Richtungen sowie gedrehte oder gespiegelte Zeichen sicher zu unterscheiden.",
          "Rechts und links werden noch nicht durchgängig sicher unterschieden.",
          "Ähnlich aussehende Buchstaben oder Zahlen werden noch verwechselt.",
          "Aufgaben mit Drehungen oder Spiegelungen gelingen noch unsicher.",
          "Rechts-links-Zuordnungen werden in wechselnden Darstellungen noch nicht sicher übertragen."
        ],
        ziele: [
          "Rechts und links sowie Raum-Lage-Begriffe zunehmend sicher unterscheiden.",
          "Gedrehte oder gespiegelte Formen und Zeichen genauer erkennen.",
          "Ähnlich aussehende Buchstaben oder Zahlen sicherer unterscheiden.",
          "Richtungs- und Lageveränderungen in wechselnden Darstellungen sicherer erkennen."
        ],
        massnahmen: [
          "Raum-Lage-Begriffe werden handelnd, bildlich und auf Arbeitsblättern wiederkehrend geübt.",
          "Zeichen werden vergrößert, farbig markiert und in kurzen Vergleichsübungen gegenübergestellt.",
          "_ nutzt Rechts-links-Markierungen, Pfeile, Lagekarten oder konkrete Bewegungsaufgaben.",
          "Drehungen und Spiegelungen werden zunächst mit Material gelegt und anschließend bildlich übertragen."
        ],
        evaluation: [
          "Beobachtet wird, ob _ Raum-Lage-Begriffe in bekannten Aufgaben zunehmend sicher anwendet.",
          "Dokumentiert wird, ob ähnlich aussehende Buchstaben oder Zahlen seltener verwechselt werden.",
          "Überprüft wird, ob _ gedrehte oder gespiegelte Formen mit weniger Unterstützung erkennt."
        ]
      }),
      "Räumliche Beziehungen": topic({
        istStand: [
          "_ verliert bei komplexeren Arbeitsseiten, Mustern oder räumlichen Anordnungen noch leicht die Orientierung.",
          "Geforderte Stellen im Heft, Buch oder auf dem Arbeitsblatt werden noch nicht sicher gefunden.",
          "Muster oder Punktebilder werden noch nicht zuverlässig übertragen.",
          "Einfache räumliche Beziehungen auf Bildern werden noch unsicher angegeben.",
          "Startpunkte oder geforderte Bearbeitungsstellen werden in komplexeren Vorlagen noch nicht zuverlässig erkannt."
        ],
        ziele: [
          "Sich auf Arbeitsblättern, Heftseiten und Buchseiten zunehmend sicher orientieren.",
          "Geforderte Stellen in übersichtlichen Vorlagen mit weniger Unterstützung finden.",
          "Muster oder Punktebilder genauer nachlegen und übertragen.",
          "Einfache räumliche Beziehungen nachvollziehbar beschreiben."
        ],
        massnahmen: [
          "Arbeitsseiten werden klar gegliedert und Suchwege, Startpunkte oder relevante Stellen werden markiert.",
          "Muster, Punktebilder und räumliche Anordnungen werden handelnd gelegt, beschrieben und übertragen.",
          "_ erhält Schritt-für-Schritt-Orientierung auf der Seite und reduziert gestaltete Vorlagen.",
          "Räumliche Begriffe werden an konkretem Material, Bildern und Arbeitsblättern wiederholt genutzt."
        ],
        evaluation: [
          "Beobachtet wird, ob _ geforderte Stellen auf Arbeitsseiten zunehmend sicher findet.",
          "Dokumentiert wird, ob Muster, Punktebilder oder Lagebeziehungen genauer übertragen werden.",
          "Überprüft wird, ob _ bei komplexeren Vorlagen weniger Orientierungshilfe benötigt."
        ]
      }),
      "Auditive Differenzierung": topic({
        istStand: [
          "_ benötigt noch Unterstützung, um Geräusche, Lautstärken oder ähnlich klingende Laute und Wörter sicher zu unterscheiden.",
          "Ähnlich klingende Laute werden noch häufig verwechselt.",
          "Unterschiede zwischen ähnlich klingenden Wörtern werden noch nicht zuverlässig gehört.",
          "Ähnliche auditive Informationen werden noch nicht durchgängig unterschieden.",
          "Hintergrundgeräusche erschweren #ihm/ihr# das genaue Hinhören."
        ],
        ziele: [
          "Geräusche, Lautstärken und ähnlich klingende Laute zunehmend genauer unterscheiden.",
          "Unterschiede zwischen ähnlich klingenden Wörtern sicherer heraushören.",
          "Gehörte Unterschiede in bekannten Übungen passenden Beispielen zuordnen.",
          "Auditive Informationen in ruhigen Hörsituationen gezielter aufnehmen."
        ],
        massnahmen: [
          "Hörübungen, Geräuschvergleiche und Lautunterscheidungen werden kurz und wiederkehrend eingesetzt.",
          "Lautbeispiele und Wörter werden deutlich, in angemessenem Tempo und bei Bedarf wiederholt angeboten.",
          "_ arbeitet mit Hörbeispielen, Lautpaaren und klar begrenzten auditiven Aufgaben.",
          "Störgeräusche werden reduziert und auditive Informationen werden bei Bedarf zusätzlich visualisiert."
        ],
        evaluation: [
          "Beobachtet wird, ob _ Geräusche oder ähnlich klingende Laute zunehmend sicher unterscheidet.",
          "Dokumentiert wird, ob Wiederholungen bei auditiv ähnlichen Informationen seltener notwendig sind.",
          "Überprüft wird, ob _ gehörte Unterschiede in bekannten Übungen passenden Beispielen zuordnet."
        ]
      }),
      "Auditive Gliederung / phonologische Wahrnehmung": topic({
        istStand: [
          "_ benötigt noch Unterstützung, um Wörter auditiv zu gliedern und Anlaute, Endlaute, Silben oder Lautpositionen sicher wahrzunehmen.",
          "Anlaute, Endlaute oder Inlaute werden noch nicht sicher herausgehört.",
          "Wörter werden noch nicht zuverlässig in Silben oder einzelne Laute gegliedert.",
          "Silben und einzelne Laute werden noch nicht durchgängig voneinander abgegrenzt.",
          "Lautliche Strukturen in bekannten Wörtern werden noch unsicher erkannt."
        ],
        ziele: [
          "Anlaute, Endlaute oder Silben in bekannten Wörtern zunehmend sicher heraushören.",
          "Wörter mit Unterstützung genauer in Silben oder Laute gliedern.",
          "Laute im Wort zunehmend sicherer lokalisieren.",
          "Lautliche Strukturen in wiederholten Übungen sicherer erkennen."
        ],
        massnahmen: [
          "Reim-, Silben-, Anlaut- und Endlautübungen werden regelmäßig in kurzen Einheiten durchgeführt.",
          "Silbenbögen, Lautgebärden, rhythmisches Klatschen und Bildkarten werden genutzt.",
          "_ zerlegt Wörter handelnd, mündlich und mit visuellen Hilfen in Silben oder Laute.",
          "Lautpositionen werden an bekannten Wörtern kleinschrittig markiert und wiederholt."
        ],
        evaluation: [
          "Beobachtet wird, ob _ Anlaute, Endlaute oder Silben zunehmend sicher heraushört.",
          "Dokumentiert wird, ob _ Wörter mit weniger Unterstützung gliedert.",
          "Überprüft wird, ob _ lautliche Strukturen in bekannten Wörtern sicherer erkennt."
        ]
      }),
      "Auditive Identifikation": topic({
        istStand: [
          "_ erkennt Reime, gleiche Lautanfänge, Auslaute oder wiederkehrende Klangmuster noch nicht durchgängig sicher.",
          "Reimwörter werden noch nicht sicher erkannt.",
          "Wörter mit gleichem Anlaut oder Auslaut werden noch nicht zuverlässig gefunden.",
          "Wörter werden nach Klangmerkmalen noch unsicher unterschieden.",
          "Passende Wörter werden einem vorgegebenen Klangmerkmal noch nicht sicher zugeordnet."
        ],
        ziele: [
          "Reimwörter und wiederkehrende Lautmuster zunehmend sicher erkennen.",
          "Wörter mit gleichem Anlaut oder Auslaut mit weniger Unterstützung finden.",
          "Wörter nach Klangmerkmalen genauer zuordnen.",
          "Reim- und Lautspiele zum Erkennen bekannter Klangmuster nutzen."
        ],
        massnahmen: [
          "Reimspiele, Lautspiele und Zuordnungsaufgaben mit gleichen An- oder Auslauten werden regelmäßig angeboten.",
          "Lautbeispiele werden deutlich vorgesprochen, bildlich gestützt und wiederholt.",
          "_ sortiert Wörter nach Klangmerkmalen und vergleicht Reime, Anlaute oder Auslaute.",
          "Bekannte Klangmuster werden in kurzen spielerischen Übungen wiederholt gesichert."
        ],
        evaluation: [
          "Beobachtet wird, ob _ Reimwörter oder gleiche Lautanfänge zunehmend sicher erkennt.",
          "Dokumentiert wird, ob _ passende Wörter zu einem Lautbeispiel mit weniger Hilfe findet.",
          "Überprüft wird, ob _ Wörter nach Klangmerkmalen sicherer zuordnet."
        ]
      }),
      "Auditives Gedächtnis": topic({
        istStand: [
          "_ behält kurze mündliche Informationen, Sätze, Reime, Rhythmen oder mehrteilige Aufträge noch nicht durchgängig sicher.",
          "Bei mehrteiligen mündlichen Aufträgen gehen einzelne Schritte noch verloren.",
          "Längere mündliche Informationen werden nur teilweise wiedergegeben.",
          "Nach einer Unterbrechung werden zuvor gehörte Informationen noch nicht sicher abgerufen.",
          "Gehörte Informationen werden noch nicht vollständig oder in veränderter Reihenfolge wiedergegeben."
        ],
        ziele: [
          "Kurze mündliche Informationen und zentrale Auftragsschritte zunehmend sicher behalten.",
          "Gehörte Informationen mit Unterstützung nachvollziehbar wiedergeben.",
          "Zentrale Inhalte und Reihenfolgen in kurzen Hörinformationen sicherer behalten.",
          "Einfache Rhythmen, kurze Sätze oder Reime nach kurzer Darbietung wiedererkennen oder wiedergeben."
        ],
        massnahmen: [
          "Mündliche Informationen werden kurz formuliert, wiederholt und bei Bedarf visualisiert.",
          "Aufträge werden in einzelne Schritte gegliedert und mit Symbolen gesichert.",
          "_ ordnet Bildfolgen, Rhythmuskarten oder Symbole nach kurzen Hörinformationen in der gehörten Reihenfolge.",
          "Wiederholungsrituale und kurze Merkstrategien werden regelmäßig eingesetzt."
        ],
        evaluation: [
          "Beobachtet wird, ob _ kurze mündliche Informationen zunehmend sicher behält.",
          "Dokumentiert wird, ob bei mehrteiligen Aufträgen weniger Schritte verloren gehen.",
          "Überprüft wird, ob _ gehörte Informationen mit weniger Unterstützung wiedergeben kann."
        ]
      }),
      "Taktil-kinästhetische Wahrnehmung": topic({
        istStand: [
          "_ benötigt noch Unterstützung, um Berührungen, Materialien, Körperpositionen oder taktile Eindrücke sicher wahrzunehmen und einzuordnen.",
          "Berührungen oder taktile Eindrücke werden am eigenen Körper noch unsicher lokalisiert.",
          "Formen, Gegenstände oder Oberflächen werden durch Tasten noch nicht zuverlässig erkannt.",
          "Taktile Eindrücke werden noch nicht zuverlässig nach ihren Merkmalen unterschieden.",
          "Unangekündigte Berührungen führen in einzelnen Situationen zu einer deutlichen Reaktion."
        ],
        ziele: [
          "Berührungen und taktile Eindrücke am eigenen Körper zunehmend sicher lokalisieren.",
          "Materialien, Oberflächen oder Gegenstände durch Tasten genauer unterscheiden.",
          "Taktile Eindrücke nachvollziehbarer benennen.",
          "Anspannung, Entspannung oder Körperbewegungen in kurzen Übungen bewusster wahrnehmen."
        ],
        massnahmen: [
          "Tast-, Material- und Körperwahrnehmungsaufgaben werden klar angekündigt und überschaubar durchgeführt.",
          "Unterschiedliche Materialien, Tastbeutel und sprachliche Vergleichsbegriffe werden genutzt.",
          "_ erhält kurze Übungen zum Lokalisieren von Berührungen und zum bewussten An- und Entspannen einzelner Körperteile.",
          "Empfindlichkeiten werden beachtet und taktile Erfahrungen werden schrittweise vorbereitet."
        ],
        evaluation: [
          "Beobachtet wird, ob _ Berührungen oder Materialien zunehmend sicher einordnet.",
          "Dokumentiert wird, ob taktile Eindrücke verständlicher benannt werden.",
          "Überprüft wird, ob _ Körperpositionen oder Anspannung mit weniger Unterstützung wahrnimmt."
        ]
      }),
      "Vestibuläre Wahrnehmung": topic({
        istStand: [
          "_ benötigt noch Unterstützung, Veränderungen der Körperlage und Bewegungsrichtung sicher wahrzunehmen und einzuordnen.",
          "Nach Dreh-, Schaukel- oder Lageveränderungen benötigt _ noch Zeit, um sich räumlich zu orientieren.",
          "Langsame und schnelle Bewegungsreize werden noch nicht durchgängig unterschieden.",
          "Bewegungsreize werden in einzelnen Situationen wiederholt gesucht oder deutlich vermieden.",
          "Bei unerwarteten Lageveränderungen zeigt _ eine deutliche Reaktion."
        ],
        ziele: [
          "Veränderungen der Körperlage in vorbereiteten Situationen sicherer wahrnehmen und einordnen.",
          "Langsame, schnelle und wechselnde Bewegungsreize zunehmend unterscheiden.",
          "Eigene Reaktionen auf Bewegungsreize mit Unterstützung anzeigen oder benennen.",
          "Nach vestibulären Eindrücken zunehmend sicherer zur räumlichen Orientierung zurückfinden."
        ],
        massnahmen: [
          "Bewegungsreize werden vorhersehbar angekündigt, kurz dosiert und gemeinsam eingeordnet.",
          "Langsame, schnelle, lineare und drehende Bewegungsreize werden in klar begrenzten Situationen angeboten und verglichen.",
          "_ erhält Möglichkeiten, Körperlage und Bewegungsrichtung mit Bildern, Gesten oder Begriffen zuzuordnen.",
          "Reaktionen auf Bewegungsreize werden beobachtet; Intensität und Dauer werden angepasst."
        ],
        evaluation: [
          "Beobachtet wird, ob _ Veränderungen der Körperlage und Bewegungsrichtung sicherer einordnet.",
          "Dokumentiert wird, auf welche Bewegungsreize _ deutlich reagiert und wie sich die Orientierung anschließend entwickelt.",
          "Überprüft wird, ob _ langsame, schnelle oder wechselnde Bewegungsreize zunehmend unterscheidet."
        ]
      })
    },

    Kognition: {
      Merkfähigkeit: topic({
        istStand: [
          "_ benötigt Wiederholungen, um neue Inhalte zu sichern.",
          "_ merkt sich kurze Arbeitsaufträge besser mit visueller Unterstützung.",
          "_ ruft bekannte Inhalte mit Hilfe wieder ab."
        ],
        ziele: [
          "Neue Inhalte schrittweise sicherer behalten.",
          "Merkhilfen gezielt nutzen.",
          "Bekannte Inhalte in Übungssituationen abrufen."
        ],
        massnahmen: [
          "Inhalte werden wiederholt, visualisiert und in kleinen Schritten angeboten.",
          "_ nutzt Merkkarten, Symbole oder kurze Notizen.",
          "Wiederholungsphasen werden regelmäßig eingeplant."
        ],
        evaluation: [
          "Der Abruf bekannter Inhalte wird beobachtet.",
          "Übungsaufgaben zu wiederholten Inhalten werden verglichen."
        ]
      }),
      "Langfristiges Behalten / Abruf": topic({
        istStand: [
          "_ ruft geübte Inhalte nach mehreren Tagen noch nicht durchgängig sicher ab.",
          "Bekannte Regeln oder Begriffe müssen vor der Anwendung noch einmal aktiviert werden.",
          "Nach längeren Unterbrechungen benötigt _ Wiederholungen, um an geübte Inhalte anzuknüpfen.",
          "Inhalte werden in vertrauten Aufgaben eher abgerufen als in späteren oder veränderten Situationen.",
          "Merkhilfen, Bilder oder konkrete Beispiele unterstützen #ihn/sie# beim Wiederabruf.",
          "Wiederkehrende Routinen helfen #ihm/ihr#, bekannte Inhalte erneut zu nutzen."
        ],
        ziele: [
          "Geübte Inhalte über mehrere Tage sicherer behalten und wieder abrufen.",
          "Bekannte Regeln, Begriffe oder Handlungsschritte in späteren Aufgaben nutzen.",
          "Merkhilfen und Wiederholungsstrategien beim Abruf gezielt einsetzen.",
          "Neue Inhalte mit Beispielen, Bildern oder Handlungen verknüpfen."
        ],
        massnahmen: [
          "In kurzen Übungsphasen werden zentrale Inhalte zeitlich versetzt wiederholt.",
          "Neue Inhalte werden mit Beispielen, Bildern, Handlungen und bekannten Begriffen verknüpft.",
          "_ erhält Merkkarten, Abrufhilfen und wiederkehrende Routinen für spätere Übungsphasen.",
          "Gemeinsam werden passende Merkhilfen ausgewählt und ihr Einsatz schrittweise eingeübt."
        ],
        evaluation: [
          "Beobachtet wird, ob _ geübte Inhalte nach mehreren Tagen sicherer abruft.",
          "Dokumentiert wird, ob bekannte Regeln oder Handlungsschritte in späteren Aufgaben genutzt werden.",
          "Überprüft wird, ob _ vereinbarte Merkhilfen beim Wiederabruf gezielt einsetzt."
        ]
      }),
      Strategien: topic({
        istStand: [
          "_ nutzt Lernstrategien noch nicht durchgängig selbstständig.",
          "_ benötigt Unterstützung beim Planen von Lösungswegen.",
          "_ arbeitet sicherer, wenn Strategien sichtbar vorliegen."
        ],
        ziele: [
          "Bekannte Strategien gezielter auswählen.",
          "Lösungswege schrittweise planen.",
          "Hilfen zur Selbstkontrolle nutzen."
        ],
        massnahmen: [
          "Strategien werden modelliert, gemeinsam angewendet und wiederholt.",
          "Schrittfolgen, Checklisten und Beispielaufgaben werden genutzt.",
          "_ versprachlicht Lösungswege mit Unterstützung."
        ],
        evaluation: [
          "Die Strategieanwendung wird im Unterricht beobachtet.",
          "Bearbeitete Aufgaben werden auf Vorgehen und Selbstkontrolle überprüft."
        ]
      }),
      Problemlösen: topic({
        istStand: [
          "_ benötigt Unterstützung beim Finden eigener Lösungswege.",
          "_ probiert Lösungswege mit Ermutigung aus.",
          "_ gibt bei ungewohnten Aufgaben noch schnell auf."
        ],
        ziele: [
          "Bei neuen Aufgaben erste Lösungswege erproben.",
          "Bekannte Strategien auf ähnliche Aufgaben übertragen.",
          "Bei Schwierigkeiten passende Hilfen nutzen."
        ],
        massnahmen: [
          "Aufgaben werden kleinschrittig erschlossen und gemeinsam besprochen.",
          "_ erhält Impulsfragen statt direkter Lösungen.",
          "Erfolgreiche Lösungswege werden sichtbar gesammelt."
        ],
        evaluation: [
          "Der Umgang mit neuen Aufgaben wird beobachtet.",
          "Lösungswege und genutzte Hilfen werden dokumentiert."
        ]
      }),
      Transfer: topic({
        istStand: [
          "_ wendet Gelerntes in vertrauten Aufgaben sicherer an als in neuen Situationen.",
          "_ benötigt Unterstützung beim Übertragen bekannter Strategien.",
          "_ erkennt ähnliche Aufgabenformate mit Hilfe."
        ],
        ziele: [
          "Bekannte Inhalte auf ähnliche Aufgaben übertragen.",
          "Gemeinsamkeiten zwischen Aufgaben erkennen.",
          "Strategien auch in neuen Situationen nutzen."
        ],
        massnahmen: [
          "Ähnliche Aufgabenformate werden verglichen und versprachlicht.",
          "Bekannte Strategien werden in neuen Zusammenhängen bewusst aufgegriffen.",
          "_ erhält Impulse zum Erkennen von Gemeinsamkeiten."
        ],
        evaluation: [
          "Transferleistungen werden anhand ähnlicher und neuer Aufgaben beobachtet.",
          "Die Anwendung bekannter Strategien in neuen Situationen wird überprüft."
        ]
      }),
      "Schlussfolgern / Zusammenhänge erkennen": topic({
        istStand: [
          "_ erkennt Gemeinsamkeiten und Unterschiede in Beispielen noch nicht durchgängig sicher.",
          "Einfache Ursache-Wirkungs-Zusammenhänge werden mit Unterstützung hergestellt.",
          "Informationen aus mehreren Darstellungen werden noch nicht zuverlässig miteinander verbunden.",
          "Beim Ableiten einer Regel aus Beispielen benötigt _ noch strukturierende Fragen.",
          "Vermutungen werden noch nicht durchgängig mit passenden Beobachtungen begründet.",
          "Lösungswege anderer werden mit Hilfe schrittweise nachvollzogen."
        ],
        ziele: [
          "Gemeinsamkeiten und Unterschiede zwischen Beispielen genauer benennen.",
          "Einfache Ursache-Wirkungs-Zusammenhänge nachvollziehbar herstellen.",
          "Aus mehreren Beispielen eine einfache Regel ableiten.",
          "Vermutungen und Lösungswege mit passenden Informationen begründen."
        ],
        massnahmen: [
          "Gemeinsam werden Beispiele verglichen und wichtige Merkmale sichtbar markiert.",
          "Ursache und Wirkung werden mit Bildfolgen, Handlungen oder kurzen Wenn-dann-Sätzen erarbeitet.",
          "_ erhält Leitfragen zum Verbinden von Informationen und zum Begründen von Vermutungen.",
          "Lösungswege werden schrittweise nachvollzogen, verglichen und in eigenen Worten wiedergegeben."
        ],
        evaluation: [
          "Beobachtet wird, ob _ Gemeinsamkeiten, Unterschiede und einfache Zusammenhänge sicherer erkennt.",
          "Dokumentiert wird, ob _ aus Beispielen eine passende Regel oder Vermutung ableitet.",
          "Überprüft wird, ob Informationen und Lösungsschritte nachvollziehbar miteinander verbunden werden."
        ]
      }),
      "Symbolverständnis / Ordnungssysteme": topic({
        istStand: [
          "Bekannte Symbole, Zeichen oder Piktogramme werden noch nicht durchgängig sicher mit ihrer Bedeutung verknüpft.",
          "_ benötigt Unterstützung bei der Orientierung in Tabellen, Plänen oder vorgegebenen Ordnungssystemen.",
          "Informationen werden noch nicht zuverlässig nach vorgegebenen Kategorien sortiert.",
          "Mehrere Sortiermerkmale werden noch nicht durchgängig gleichzeitig beachtet.",
          "Arbeitsmaterial wird mit klaren Markierungen und festen Ablageplätzen sicherer geordnet.",
          "Bekannte Ordnungssysteme werden in neuen Arbeitssituationen noch nicht selbstständig genutzt."
        ],
        ziele: [
          "Bekannte Symbole, Zeichen und Piktogramme sicherer mit ihrer Bedeutung verknüpfen.",
          "Tabellen, Pläne und vorgegebene Ordnungssysteme gezielter nutzen.",
          "Informationen nach vereinbarten Merkmalen sortieren und Kategorien bilden.",
          "Arbeitsmaterial mithilfe bekannter Strukturen zunehmend selbstständig ordnen."
        ],
        massnahmen: [
          "Symbole und Piktogramme werden mit konkreten Handlungen, Begriffen und Beispielen verknüpft.",
          "Zur Unterstützung werden Tabellen, Pläne und Ablagesysteme schrittweise eingeführt und wiederholt genutzt.",
          "Gemeinsam werden Sortierkriterien benannt, markiert und auf unterschiedliche Materialien angewendet.",
          "_ erhält klar gekennzeichnete Ablageplätze und kurze Checklisten für bekannte Ordnungssysteme."
        ],
        evaluation: [
          "Beobachtet wird, ob _ bekannte Symbole und Piktogramme sicherer deutet und nutzt.",
          "Dokumentiert wird, ob Informationen nach vorgegebenen Kriterien passend sortiert werden.",
          "Überprüft wird, ob _ Tabellen, Pläne oder Ablagesysteme mit weniger Unterstützung anwendet."
        ]
      })
    },

    Deutsch: {
      "Klasse 1/2": {
        "Laut-Buchstaben-Zuordnung": topic({
          istStand: [
            "_ erkennt einzelne bekannte Buchstaben sicher.",
            "_ ordnet gehörte Laute passenden Buchstaben noch mit Unterstützung zu.",
            "_ kann Anlaute in einfachen Wörtern bereits heraushören."
          ],
          ziele: [
            "Bekannte Buchstaben sicher benennen und unterscheiden.",
            "Laute in Wörtern genauer wahrnehmen.",
            "Laute und Buchstaben beim Lesen und Schreiben gezielter verbinden."
          ],
          massnahmen: [
            "Laut- und Buchstabenkarten werden regelmäßig in kurzen Übungsphasen genutzt.",
            "Bildkarten, Lautgebärden und deutliches Mitsprechen unterstützen #ihn/sie#.",
            "An-, In- und Endlaute werden an vertrauten Wörtern geübt."
          ],
          evaluation: [
            "Die Sicherheit bei der Laut-Buchstaben-Zuordnung wird regelmäßig überprüft.",
            "Kurze Lese- und Schreibproben zeigen, ob _ die Zuordnung sicherer nutzt."
          ]
        }),
        Silben: topic({
          istStand: [
            "_ erkennt Silben in bekannten Wörtern mit Unterstützung.",
            "_ nutzt das Silbenschwingen bereits bei einzelnen Wörtern.",
            "_ benötigt noch Hilfe, um Wörter vollständig in Silben zu gliedern."
          ],
          ziele: [
            "Wörter sicherer in Silben gliedern.",
            "Silbenbögen als Hilfe beim Lesen und Schreiben nutzen.",
            "Silbenstrukturen in einfachen Wörtern erkennen."
          ],
          massnahmen: [
            "Wörter werden geklatscht, geschwungen und mit Silbenbögen markiert.",
            "_ arbeitet mit Silbenkarten und bekannten Übungswörtern.",
            "Silben werden regelmäßig als Strategie beim Lesen und Schreiben aufgegriffen."
          ],
          evaluation: [
            "Arbeitsproben mit Silbenbögen werden verglichen.",
            "Im Unterricht wird beobachtet, ob _ die Silbenstrategie selbstständiger nutzt."
          ]
        }),
        "Wörter lesen": topic({
          istStand: [
            baustein("_ erliest lautgetreue Wörter mit Unterstützung.", [
              "Lautgetreue Wörter erliest _ mit Unterstützung.",
              "Mit Silbenhilfe kann _ lautgetreue Wörter zunehmend erlesen."
            ]),
            baustein("_ erkennt häufig geübte Wörter bereits wieder.", [
              "Häufig geübte Wörter erkennt _ bereits wieder.",
              "Bei wiederholtem Üben erkennt _ bekannte Wörter zunehmend schneller."
            ]),
            baustein("_ liest Wörter noch langsam und braucht dabei Zeit zum Zusammenziehen.", [
              "Wörter liest _ noch langsam und braucht Zeit zum Zusammenziehen.",
              "Beim Zusammenziehen von Lauten zu Wörtern braucht _ noch Zeit."
            ])
          ],
          ziele: [
            baustein("Lautgetreue Wörter sicherer erlesen.", [
              "Beim Lesen Silben und bekannte Laut-Buchstaben-Verbindungen nutzen."
            ]),
            baustein("Häufig geübte Wörter schneller wiedererkennen.", [
              "Bekannte Wörter zunehmend flüssiger lesen."
            ]),
            baustein("Beim Lesen geeignete Strategien nutzen.", [
              "Silben, Wortteile und wiederholtes Lesen als Hilfen einsetzen."
            ])
          ],
          massnahmen: [
            "_ übt regelmäßig mit kurzen, lautgetreuen Wörtern.",
            "Silbenmarkierungen und wiederholtes Lesen unterstützen den Aufbau von Sicherheit.",
            "Geübte Wörter werden in kleinen Mengen wiederholt und angewendet."
          ],
          evaluation: [
            "Leseproben mit bekannten und neuen Wörtern werden verglichen.",
            "Die Lesesicherheit wird in kurzen Übungsphasen beobachtet."
          ]
        }),
        "Sätze lesen": topic({
          istStand: [
            baustein("_ liest kurze Sätze mit Unterstützung.", [
              "Kurze Sätze liest _ mit Unterstützung.",
              "Mit überschaubarem Satzmaterial gelingt das Lesen zunehmend besser."
            ]),
            baustein("_ versteht einfache Sätze, wenn diese übersichtlich angeboten werden.", [
              "Einfache Sätze versteht _ besser, wenn sie übersichtlich angeboten werden.",
              "Übersichtlich angebotene Sätze kann _ inhaltlich besser erfassen."
            ]),
            baustein("_ braucht beim genauen Lesen von Sätzen noch Zeit.", [
              "Beim genauen Lesen von Sätzen braucht _ noch Zeit.",
              "Das genaue Lesen kurzer Sätze gelingt noch nicht durchgängig flüssig."
            ])
          ],
          ziele: [
            "Kurze Sätze sicherer und genauer lesen.",
            "Den Inhalt einfacher Sätze erfassen.",
            "Satzgrenzen beim Lesen beachten."
          ],
          massnahmen: [
            "Kurze Sätze werden wiederholt gelesen und inhaltlich besprochen.",
            "Satzkarten und passende Bilder unterstützen das Leseverständnis.",
            "Lesematerial wird im Umfang überschaubar gehalten."
          ],
          evaluation: [
            "Das Satzverständnis wird durch kurze Fragen oder Zuordnungsaufgaben überprüft.",
            "Die Lesegenauigkeit wird anhand kurzer Leseproben beobachtet."
          ]
        }),
        "Texte verstehen": topic({
          istStand: [
            baustein("_ entnimmt kurzen Texten mit Unterstützung einzelne Informationen.", [
              "Kurzen Texten entnimmt _ mit Unterstützung einzelne Informationen.",
              "Mit Leitfragen findet _ einzelne Informationen in kurzen Texten."
            ]),
            baustein("_ versteht Texte besser, wenn Bilder oder Fragen vorentlasten.", [
              "Bilder oder Fragen erleichtern #ihm/ihr# das Verstehen kurzer Texte.",
              "Vorentlastende Bilder und Fragen helfen #ihm/ihr# beim Textverständnis."
            ]),
            baustein("_ benötigt Hilfe, um Wichtiges im Text zu finden.", [
              "Beim Finden wichtiger Informationen im Text braucht #er/sie# noch Hilfe.",
              "Wichtige Informationen findet _ mit Markierhilfen zunehmend besser."
            ])
          ],
          ziele: [
            "Kurze Texte sinnentnehmend lesen.",
            "Einfache Fragen zum Text beantworten.",
            "Wichtige Informationen im Text markieren oder benennen."
          ],
          massnahmen: [
            "Texte werden übersichtlich gegliedert und bei Bedarf gekürzt.",
            "Vor dem Lesen werden zentrale Wörter und Inhalte besprochen.",
            "Markierhilfen, Bildimpulse und Leitfragen unterstützen #ihn/sie#."
          ],
          evaluation: [
            "Das Textverständnis wird anhand kurzer Aufgaben überprüft.",
            "Bearbeitete Leseaufgaben werden im Förderzeitraum verglichen."
          ]
        }),
        "Leseflüssigkeit/Vorlesen": topic({
          istStand: [
            "_ liest noch stockend und braucht beim Vorlesen Unterstützung.",
            "_ liest geübte Texte sicherer als unbekannte Texte.",
            "_ gewinnt beim wiederholten Lesen an Sicherheit."
          ],
          ziele: [
            "Kurze geübte Texte flüssiger vorlesen.",
            "Beim Lesen Satzgrenzen und Pausen beachten.",
            "Lesesicherheit durch regelmäßiges Üben ausbauen."
          ],
          massnahmen: [
            "Kurze Texte werden wiederholt und in angemessenem Tempo gelesen.",
            "Tandemlesen, Chorlesen oder Mitlesen unterstützen #ihn/sie#.",
            "Vorlesesituationen werden kleinschrittig vorbereitet."
          ],
          evaluation: [
            "Die Leseflüssigkeit wird durch wiederholte Leseproben beobachtet.",
            "Fortschritte beim Vorlesen werden im Förderzeitraum dokumentiert."
          ]
        }),
        "Lautgetreues Schreiben": topic({
          istStand: [
            baustein("_ schreibt einfache lautgetreue Wörter mit Unterstützung.", [
              "Einfache lautgetreue Wörter schreibt _ mit Unterstützung.",
              "Mit deutlichem Sprechen gelingt das Schreiben lautgetreuer Wörter zunehmend besser."
            ]),
            baustein("_ lässt beim Schreiben noch einzelne Laute aus.", [
              "Beim Schreiben lässt _ noch einzelne Laute aus.",
              "Einzelne Laute werden beim Schreiben noch nicht durchgängig verschriftet."
            ]),
            baustein("_ hört Laute in Wörtern zunehmend genauer.", [
              "Laute in Wörtern hört _ zunehmend genauer.",
              "Beim Abhören von Wörtern zeigt _ zunehmend mehr Sicherheit."
            ])
          ],
          ziele: [
            baustein("Lautgetreue Wörter vollständiger schreiben.", [
              "Beim Schreiben fehlende Laute zunehmend erkennen."
            ]),
            baustein("Wörter vor dem Schreiben deutlich sprechen und abhören.", [
              "Laute in Wörtern vor dem Schreiben genauer wahrnehmen."
            ]),
            baustein("Bekannte Laut-Buchstaben-Zuordnungen beim Schreiben nutzen.", [
              "Gehörte Laute passenden Buchstaben zuordnen und verschriften."
            ])
          ],
          massnahmen: [
            "Wörter werden gemeinsam gesprochen, geschwungen und verschriftet.",
            "Lautgebärden, Silbenbögen und Bildkarten unterstützen den Schreibprozess.",
            "_ übt mit kurzen Wörtern aus bekanntem Wortmaterial."
          ],
          evaluation: [
            "Schreibproben werden regelmäßig verglichen.",
            "Die Vollständigkeit lautgetreu geschriebener Wörter wird überprüft."
          ]
        }),
        Abschreiben: topic({
          istStand: [
            "_ schreibt Wörter und kurze Sätze mit Unterstützung ab.",
            "_ benötigt beim genauen Abschreiben noch Kontrolle.",
            "_ übersieht beim Abschreiben gelegentlich Buchstaben oder Wortgrenzen."
          ],
          ziele: [
            "Wörter und kurze Sätze genauer abschreiben.",
            "Eine einfache Abschreibstrategie anwenden.",
            "Abgeschriebene Wörter selbst kontrollieren."
          ],
          massnahmen: [
            "Die Strategie Lesen – Merken – Schreiben – Kontrollieren wird eingeübt.",
            "Abschreibtexte werden kurz und übersichtlich angeboten.",
            "_ kontrolliert abgeschriebene Wörter mithilfe einer Vorlage."
          ],
          evaluation: [
            "Abschreibproben werden auf Vollständigkeit und Genauigkeit verglichen.",
            "Die Nutzung der Kontrollstrategie wird beobachtet."
          ]
        }),
        "Eigene Sätze schreiben": topic({
          istStand: [
            "_ schreibt eigene Sätze mit Satzanfängen oder Bildimpulsen.",
            "_ benötigt Unterstützung, um eigene Gedanken schriftlich zu ordnen.",
            "_ verschriftet einfache Inhalte bereits verständlich."
          ],
          ziele: [
            "Einfache eigene Sätze verständlich schreiben.",
            "Satzanfänge passend nutzen.",
            "Eigene Schreibideen klarer ausdrücken."
          ],
          massnahmen: [
            "Bildimpulse, Wortkarten und Satzanfänge unterstützen den Schreibprozess.",
            "Eigene Sätze werden gemeinsam gelesen und bei Bedarf überarbeitet.",
            "Schreibaufgaben werden kleinschrittig vorbereitet."
          ],
          evaluation: [
            "Schreibproben werden gesammelt und verglichen.",
            "Die Verständlichkeit eigener Sätze wird regelmäßig überprüft."
          ]
        }),
        Rechtschreibgrundlagen: topic({
          istStand: [
            "_ nutzt erste Rechtschreibstrategien mit Unterstützung.",
            "_ schreibt geübte Wörter sicherer als neue Wörter.",
            "_ benötigt bei schwierigen Stellen im Wort noch Anleitung."
          ],
          ziele: [
            "Einfache Rechtschreibstrategien anwenden.",
            "Geübte Wörter sicherer schreiben.",
            "Schwierige Stellen in Wörtern bewusster wahrnehmen."
          ],
          massnahmen: [
            "Wörter werden silbisch gesprochen, markiert und wiederholt geschrieben.",
            "Merkwörter werden in kleinen Portionen geübt.",
            "Strategien werden an bekanntem Wortmaterial regelmäßig angewendet."
          ],
          evaluation: [
            "Geübte Wörter werden in kurzen Schreibproben überprüft.",
            "Die Anwendung vereinbarter Rechtschreibstrategien wird beobachtet."
          ]
        }),
        "Großschreibung/Nomen": topic({
          istStand: [
            "_ erkennt Nomen mit Unterstützung.",
            "_ nutzt Artikel als Hilfe noch nicht sicher.",
            "_ beachtet die Großschreibung in geübten Wörtern bereits teilweise."
          ],
          ziele: [
            "Nomen mithilfe von Artikeln erkennen.",
            "Nomen in geübten Sätzen großschreiben.",
            "Die Großschreibung am Satzanfang sicherer beachten."
          ],
          massnahmen: [
            "Nomen werden mit Artikeln gesammelt, sortiert und markiert.",
            "Kurze Sätze werden gemeinsam auf Großschreibung überprüft.",
            "Sortier- und Markieraufgaben unterstützen #ihn/sie#."
          ],
          evaluation: [
            "Markieraufgaben und Schreibproben werden verglichen.",
            "Die Beachtung der Großschreibung wird in kurzen Texten überprüft."
          ]
        })
      },
      "Klasse 3/4": {
        Leseflüssigkeit: topic({
          istStand: [
            baustein("_ liest geübte Texte sicherer als unbekannte Texte.", [
              "Geübte Texte liest _ sicherer als unbekannte Texte.",
              "Bei bekannten Texten zeigt _ mehr Lesesicherheit als bei unbekanntem Material."
            ]),
            baustein("_ liest noch stockend und benötigt Zeit zum Erfassen längerer Wörter.", [
              "Kurze Texte liest _ noch nicht durchgängig flüssig.",
              "Beim Lesen längerer Wörter gerät der Lesefluss noch ins Stocken."
            ]),
            baustein("_ beachtet Satzgrenzen und Betonung beim Vorlesen noch unsicher.", [
              "Satzgrenzen und Betonung beachtet _ beim Vorlesen noch unsicher.",
              "Beim Vorlesen braucht _ noch Orientierung an Satzgrenzen und Sinnabschnitten."
            ])
          ],
          ziele: [
            baustein("Altersangemessene Texte flüssiger und genauer lesen.", [
              "Lesegenauigkeit und Lesetempo bei geübten Texten erweitern."
            ]),
            baustein("Beim Vorlesen Satzzeichen und Sinnabschnitte beachten.", [
              "Satzgrenzen und Betonung beim Vorlesen gezielter nutzen."
            ]),
            baustein("Lesesicherheit durch regelmäßiges Üben erweitern.", [
              "Die Lesesicherheit durch regelmäßiges Üben erweitern.",
              "Geübte Texte zunehmend sicher und betont vorlesen."
            ])
          ],
          massnahmen: [
            "Kurze Texte werden wiederholt gelesen und in angemessenem Tempo geübt.",
            "Tandemlesen, Chorlesen oder Lesepartnerarbeit unterstützen #ihn/sie#.",
            "Vorlesephasen werden vorbereitet und kleinschrittig aufgebaut."
          ],
          evaluation: [
            "Die Leseflüssigkeit wird durch wiederholte Leseproben beobachtet.",
            "Fortschritte beim genauen und betonten Lesen werden dokumentiert."
          ]
        }),
        "Texte verstehen": topic({
          istStand: [
            baustein("_ entnimmt Texten einzelne Informationen mit Unterstützung.", [
              "Texten entnimmt _ mit Unterstützung einzelne Informationen.",
              "Mit Leitfragen findet _ einzelne Informationen im Text."
            ]),
            baustein("_ benötigt Hilfe, um wichtige Aussagen im Text zu erkennen.", [
              "Beim Erkennen wichtiger Aussagen im Text braucht #er/sie# noch Hilfe.",
              "Wichtige Aussagen erkennt _ besser, wenn der Text vorstrukturiert ist."
            ]),
            baustein("_ beantwortet einfache Fragen zum Text sicherer als weiterführende Fragen.", [
              "Einfache Fragen zum Text beantwortet _ sicherer als weiterführende Fragen.",
              "Bei weiterführenden Fragen zum Text braucht #er/sie# noch Orientierung."
            ])
          ],
          ziele: [
            baustein("Informationen aus Texten gezielter entnehmen.", [
              "Wichtige Informationen im Text finden und markieren."
            ]),
            baustein("Fragen zum Text zunehmend selbstständig beantworten.", [
              "Antworten mit passenden Textstellen begründen."
            ]),
            baustein("Zentrale Aussagen eines Textes verständlich wiedergeben.", [
              "Textinhalte in eigenen Worten zusammenfassen."
            ])
          ],
          massnahmen: [
            "Texte werden vorentlastet und in Sinnabschnitte gegliedert.",
            "Leitfragen, Markierhilfen und kurze Zwischenstopps unterstützen #ihn/sie#.",
            "Textinhalte werden mündlich besprochen und anschließend schriftlich gesichert."
          ],
          evaluation: [
            "Das Textverständnis wird anhand mündlicher und schriftlicher Aufgaben überprüft.",
            "Bearbeitete Leseaufgaben werden im Förderzeitraum verglichen."
          ]
        }),
        Lesestrategien: topic({
          istStand: [
            "_ nutzt Lesestrategien noch nicht durchgängig selbstständig.",
            "_ benötigt Unterstützung beim Markieren wichtiger Informationen.",
            "_ kann mit Hilfe Vermutungen zum Textinhalt bilden."
          ],
          ziele: [
            "Einfache Lesestrategien gezielt anwenden.",
            "Wichtige Informationen markieren und nutzen.",
            "Vor, während und nach dem Lesen passende Strategien einsetzen."
          ],
          massnahmen: [
            "Strategien wie Überschrift beachten, markieren, Fragen stellen und zusammenfassen werden eingeübt.",
            "Lesestrategien werden mit Symbolkarten sichtbar gemacht.",
            "_ wendet Strategien zunächst gemeinsam und später selbstständiger an."
          ],
          evaluation: [
            "Die Anwendung vereinbarter Lesestrategien wird im Unterricht beobachtet.",
            "Markierungen, Notizen und Antworten zum Text werden ausgewertet."
          ]
        }),
        "Schreiben eigener Texte": topic({
          istStand: [
            "_ schreibt eigene Texte mit Unterstützung durch Satzanfänge oder Schreibimpulse.",
            "_ bringt eigene Ideen ein, benötigt aber Hilfe bei Aufbau und Ausformulierung.",
            "_ schreibt verständliche Sätze, verliert bei längeren Texten jedoch teilweise den roten Faden."
          ],
          ziele: [
            "Eigene Texte klarer und vollständiger formulieren.",
            "Gedanken geordneter verschriftlichen.",
            "Passende Satzanfänge und Verbindungswörter nutzen."
          ],
          massnahmen: [
            "Bildimpulse, Wortgeländer und Satzanfänge unterstützen die Textproduktion.",
            "Texte werden vor dem Schreiben mündlich geplant.",
            "Kurze Schreibphasen mit anschließender Rückmeldung werden regelmäßig eingesetzt."
          ],
          evaluation: [
            "Schreibproben werden gesammelt und verglichen.",
            "Aufbau, Verständlichkeit und Vollständigkeit eigener Texte werden überprüft."
          ]
        }),
        "Texte planen/überarbeiten": topic({
          istStand: [
            "_ beginnt Schreibaufgaben häufig ohne ausreichende Planung.",
            "_ benötigt Unterstützung, um Texte zu gliedern.",
            "_ kann eigene Texte mit Hilfe überarbeiten."
          ],
          ziele: [
            "Texte vor dem Schreiben einfacher planen.",
            "Eigene Texte mithilfe einer Checkliste überarbeiten.",
            "Rückmeldungen nutzen, um Texte zu verbessern."
          ],
          massnahmen: [
            "Planungshilfen wie Stichwortsammlung, Schreibplan oder Checkliste werden genutzt.",
            "Texte werden gemeinsam gelesen und gezielt überarbeitet.",
            "Überarbeitungsschritte werden auf wenige klare Kriterien begrenzt."
          ],
          evaluation: [
            "Entwürfe und überarbeitete Texte werden verglichen.",
            "Die Nutzung von Planungs- und Überarbeitungshilfen wird beobachtet."
          ]
        }),
        Rechtschreibstrategien: topic({
          istStand: [
            "_ nutzt Rechtschreibstrategien noch nicht sicher.",
            "_ erkennt schwierige Stellen in Wörtern mit Unterstützung.",
            "_ schreibt geübte Wörter sicherer als ungeübte Wörter."
          ],
          ziele: [
            "Vereinbarte Rechtschreibstrategien gezielter anwenden.",
            "Schwierige Stellen in Wörtern erkennen und markieren.",
            "Geübte Wörter zunehmend sicher schreiben."
          ],
          massnahmen: [
            "Strategien wie Silbieren, Verlängern, Ableiten und Merken werden wiederholt geübt.",
            "Wörter werden markiert, sortiert und in kurzen Schreibübungen angewendet.",
            "_ nutzt eine Kontrollhilfe zur Überarbeitung eigener Schreibprodukte."
          ],
          evaluation: [
            "Schreibproben werden im Hinblick auf vereinbarte Strategien ausgewertet.",
            "Die Anwendung der Strategien wird bei geübtem Wortmaterial überprüft."
          ]
        }),
        Wortarten: topic({
          istStand: [
            "_ erkennt Nomen, Verben und Adjektive mit Unterstützung.",
            "_ benötigt Hilfe, um Wortarten sicher zu unterscheiden.",
            "_ nutzt Artikel, Endungen oder Proben noch nicht zuverlässig."
          ],
          ziele: [
            "Nomen, Verben und Adjektive sicherer erkennen.",
            "Einfache Proben zur Bestimmung von Wortarten nutzen.",
            "Wortarten in Sätzen markieren und unterscheiden."
          ],
          massnahmen: [
            "Wortarten werden mit Farben, Symbolen und Sortieraufgaben geübt.",
            "Artikelprobe, Tunwortprobe und Adjektivprobe werden regelmäßig angewendet.",
            "_ arbeitet mit kurzen übersichtlichen Sätzen und Wortkarten."
          ],
          evaluation: [
            "Markier- und Sortieraufgaben werden regelmäßig überprüft.",
            "Die Sicherheit beim Bestimmen von Wortarten wird im Unterricht beobachtet."
          ]
        }),
        "Satzglieder/Satzbau": topic({
          istStand: [
            "_ bildet einfache Sätze, benötigt aber Hilfe bei vollständigen Satzstrukturen.",
            "_ erkennt Satzgrenzen noch nicht immer sicher.",
            "_ braucht Unterstützung beim Umstellen oder Erweitern von Sätzen."
          ],
          ziele: [
            "Vollständige Sätze sicherer bilden.",
            "Satzgrenzen beachten und passende Satzzeichen setzen.",
            "Einfache Sätze erweitern und umstellen."
          ],
          massnahmen: [
            "Sätze werden mit Satzkarten gelegt, umgestellt und erweitert.",
            "Satzanfänge, Satzzeichen und Satzgrenzen werden gezielt geübt.",
            "_ nutzt Satzbauhilfen und kurze Kontrollfragen."
          ],
          evaluation: [
            "Eigene Sätze werden auf Vollständigkeit und Satzzeichen überprüft.",
            "Arbeitsproben zum Umstellen und Erweitern von Sätzen werden verglichen."
          ]
        }),
        "Abschreiben/Kontrollieren": topic({
          istStand: [
            "_ schreibt Texte mit Unterstützung ab.",
            "_ macht beim Abschreiben noch Auslassungen oder Übertragungsfehler.",
            "_ kontrolliert eigene Schreibprodukte noch nicht zuverlässig."
          ],
          ziele: [
            "Texte genauer und vollständiger abschreiben.",
            "Eine Abschreib- und Kontrollstrategie anwenden.",
            "Eigene Texte mithilfe einer Vorlage überprüfen."
          ],
          massnahmen: [
            "Die Strategie Lesen – Merken – Schreiben – Kontrollieren wird eingeübt.",
            "Abschreibtexte werden in kurze Abschnitte gegliedert.",
            "_ kontrolliert eigene Texte mit Checkliste oder Partnerkontrolle."
          ],
          evaluation: [
            "Abschreibproben werden auf Genauigkeit und Vollständigkeit verglichen.",
            "Die Nutzung der Kontrollstrategie wird beobachtet."
          ]
        }),
        "Arbeitsverhalten Deutsch": topic({
          istStand: [
            "_ beteiligt sich mit Unterstützung an Aufgaben im Deutschunterricht.",
            "_ benötigt klare Arbeitsaufträge und überschaubare Arbeitsschritte.",
            "_ beginnt schriftliche Aufgaben sicherer, wenn Strukturhilfen vorhanden sind."
          ],
          ziele: [
            "Aufgaben im Deutschunterricht selbstständiger beginnen.",
            "Vereinbarte Arbeitsschritte nutzen.",
            "Schreib- und Leseaufgaben sorgfältiger abschließen."
          ],
          massnahmen: [
            "Arbeitsaufträge werden kurz, klar und ggf. visualisiert angeboten.",
            "_ nutzt Checklisten, Satzanfänge oder Beispielaufgaben.",
            "Kurze Rückmeldungen unterstützen #ihn/sie# während der Arbeitsphase."
          ],
          evaluation: [
            "Arbeitsbeginn, Ausdauer und Vollständigkeit werden beobachtet.",
            "Arbeitsergebnisse im Deutschunterricht werden regelmäßig gesichtet."
          ]
        })
      }
    },

    Mathematik: {
      "Klasse 1/2": {
        Zahlverständnis: topic({
          istStand: [
            "_ orientiert sich im bekannten Zahlenraum mit Material.",
            "_ erkennt Zahlbeziehungen bei anschaulicher Darstellung.",
            "_ benötigt noch Unterstützung, um Zahlen sicher zu vergleichen."
          ],
          ziele: [
            "Sich im bekannten Zahlenraum sicherer orientieren.",
            "Zahlbeziehungen erkennen und beschreiben.",
            "Zahlen vergleichen, ordnen und darstellen."
          ],
          massnahmen: [
            "Zahlen werden handelnd, bildlich und symbolisch dargestellt.",
            "Zahlenstrahl, Zwanzigerfeld und Plättchen werden gezielt genutzt.",
            "Kurze Übungen zur Zahlorientierung werden regelmäßig eingebunden."
          ],
          evaluation: [
            "Die Orientierung im Zahlenraum wird anhand konkreter Aufgaben überprüft.",
            "Arbeitsproben zur Zahlordnung und Zahldarstellung werden verglichen."
          ]
        }),
        "Mengen/Zahlen zuordnen": topic({
          istStand: [
            "_ zählt Mengen mit Unterstützung ab.",
            "_ erkennt kleine Mengen in strukturierter Darstellung.",
            "_ benötigt beim Zuordnen von Menge und Zahl noch Übung."
          ],
          ziele: [
            "Mengen sicherer erfassen.",
            "Zahlen passenden Mengen zuordnen.",
            "Mengen strukturiert legen, darstellen und vergleichen."
          ],
          massnahmen: [
            "Mengen werden mit Plättchen, Würfelbildern und Zehnerfeld dargestellt.",
            "_ übt das Bündeln, Vergleichen und Zuordnen von Mengen.",
            "Strukturierte Darstellungen werden regelmäßig versprachlicht."
          ],
          evaluation: [
            "Zuordnungsaufgaben werden regelmäßig überprüft.",
            "Die Sicherheit beim Erfassen und Darstellen von Mengen wird beobachtet."
          ]
        }),
        "Zahlenreihe/Zahlordnung": topic({
          istStand: [
            "_ zählt vorwärts sicherer als rückwärts.",
            "_ findet Vorgänger und Nachfolger mit Unterstützung.",
            "_ ordnet Zahlen mithilfe des Zahlenstrahls."
          ],
          ziele: [
            "Zahlen im bekannten Zahlenraum sicher ordnen.",
            "Vorgänger, Nachfolger und Nachbarzahlen bestimmen.",
            "Sich am Zahlenstrahl sicherer orientieren."
          ],
          massnahmen: [
            "Zahlenstrahl und Zahlenkarten werden regelmäßig eingesetzt.",
            "Vorgänger, Nachfolger und Nachbarzahlen werden in kurzen Übungen gefestigt.",
            "Zählübungen werden handlungsorientiert und spielerisch eingebunden."
          ],
          evaluation: [
            "Die Zahlordnung wird durch kurze Übungen überprüft.",
            "Die Orientierung am Zahlenstrahl wird im Unterricht beobachtet."
          ]
        }),
        Zahlzerlegung: topic({
          istStand: [
            "_ zerlegt Zahlen mit Material.",
            "_ kennt einzelne Zerlegungen bereits sicher.",
            "_ benötigt beim Finden mehrerer Zerlegungen noch Unterstützung."
          ],
          ziele: [
            "Zahlen sicherer zerlegen.",
            "Zerlegungen als Hilfe beim Rechnen nutzen.",
            "Bekannte Zerlegungen schneller abrufen."
          ],
          massnahmen: [
            "Zahlzerlegungen werden mit Plättchen, Schüttelboxen und Zerlegungshäusern geübt.",
            "_ wiederholt Partnerzahlen in kurzen Übungsphasen.",
            "Zerlegungen werden mit Plus- und Minusaufgaben verknüpft."
          ],
          evaluation: [
            "Bekannte Zerlegungen werden regelmäßig abgefragt.",
            "Die Nutzung von Zerlegungen beim Rechnen wird beobachtet."
          ]
        }),
        Addition: topic({
          istStand: [
            "_ löst Plusaufgaben mit Material.",
            "_ nutzt beim Addieren noch häufig zählende Strategien.",
            "_ versteht einfache Hinzufügesituationen."
          ],
          ziele: [
            "Plusaufgaben im bekannten Zahlenraum sicherer lösen.",
            "Geeignete Strategien beim Addieren nutzen.",
            "Ergebnisse zunehmend ohne vollständiges Abzählen finden."
          ],
          massnahmen: [
            "Plusaufgaben werden handelnd gelegt und anschließend bildlich dargestellt.",
            "Weiterzählen, Verdoppeln und Zerlegen werden als Strategien geübt.",
            "Rechenwege werden gemeinsam besprochen und verglichen."
          ],
          evaluation: [
            "Plusaufgaben und Rechenwege werden regelmäßig überprüft.",
            "Die Strategieanwendung wird anhand ausgewählter Aufgaben beobachtet."
          ]
        }),
        Subtraktion: topic({
          istStand: [
            "_ löst Minusaufgaben mit Anschauungsmaterial.",
            "_ versteht einfache Wegnehmsituationen.",
            "_ benötigt beim Finden passender Rechenwege noch Unterstützung."
          ],
          ziele: [
            "Minusaufgaben im bekannten Zahlenraum sicherer lösen.",
            "Geeignete Strategien beim Subtrahieren anwenden.",
            "Rechensituationen als Minusaufgaben erkennen."
          ],
          massnahmen: [
            "Wegnehmen, Zurückzählen und Ergänzen werden handelnd geübt.",
            "Material und Zahlenstrahl unterstützen das Finden des Rechenwegs.",
            "Rechengeschichten werden nachgespielt und verschriftet."
          ],
          evaluation: [
            "Minusaufgaben werden in kurzen Übungsformaten überprüft.",
            "Die Wahl und Erklärung des Rechenwegs wird beobachtet."
          ]
        }),
        Zehnerübergang: topic({
          istStand: [
            "_ löst Aufgaben mit Zehnerübergang noch mit Unterstützung.",
            "_ nutzt Zerlegungen beim Rechnen über den Zehner noch unsicher.",
            "_ profitiert bei Aufgaben mit Zehnerübergang von Material."
          ],
          ziele: [
            "Aufgaben mit Zehnerübergang schrittweise sicherer lösen.",
            "Zerlegungen bis zum Zehner als Strategie nutzen.",
            "Rechenwege über den Zehner nachvollziehbar darstellen."
          ],
          massnahmen: [
            "Der Zehnerübergang wird mit Zehnerfeld, Plättchen und Zahlenstrahl erarbeitet.",
            "Aufgaben werden in Teilschritte zerlegt und versprachlicht.",
            "_ übt wiederholt Aufgabenformate mit Übergang über den Zehner."
          ],
          evaluation: [
            "Aufgaben mit Zehnerübergang werden regelmäßig verglichen.",
            "Die Nutzung der Zerlegungsstrategie wird beobachtet."
          ]
        }),
        Rechenstrategien: topic({
          istStand: [
            "_ nutzt einzelne Rechenstrategien mit Anleitung.",
            "_ greift noch häufig auf zählendes Rechnen zurück.",
            "_ erkennt einfache Aufgabenbeziehungen mit Unterstützung."
          ],
          ziele: [
            "Passende Rechenstrategien bewusster auswählen.",
            "Zählendes Rechnen schrittweise reduzieren.",
            "Bekannte Aufgabenbeziehungen beim Rechnen nutzen."
          ],
          massnahmen: [
            "Rechenstrategien werden handelnd, bildlich und symbolisch erarbeitet.",
            "Verdoppeln, Halbieren, Nachbaraufgaben und Tauschaufgaben werden geübt.",
            "_ erklärt Rechenwege mithilfe von Material oder Zeichnungen."
          ],
          evaluation: [
            "Rechenwege werden dokumentiert und gemeinsam besprochen.",
            "Die Strategieauswahl wird anhand kurzer Aufgaben beobachtet."
          ]
        }),
        Kopfrechnen: topic({
          istStand: [
            "_ löst einfache Kopfrechenaufgaben mit Unterstützung.",
            "_ ruft bekannte Aufgaben noch nicht sicher ab.",
            "_ benötigt beim Kopfrechnen noch Zeit."
          ],
          ziele: [
            "Einfache Aufgaben sicherer automatisieren.",
            "Bekannte Zahlzerlegungen und Aufgaben schneller abrufen.",
            "Kopfrechenaufgaben im bekannten Zahlenraum sicherer lösen."
          ],
          massnahmen: [
            "Kurze tägliche Kopfrechenübungen werden eingesetzt.",
            "Blitzaufgaben und wiederkehrende Aufgabenformate festigen bekannte Aufgaben.",
            "Aufgaben werden in kleinen Mengen regelmäßig wiederholt."
          ],
          evaluation: [
            "Kopfrechenaufgaben werden regelmäßig kurz überprüft.",
            "Sicherheit und Bearbeitungstempo werden im Förderzeitraum beobachtet."
          ]
        }),
        Sachaufgaben: topic({
          istStand: [
            "_ versteht einfache Rechengeschichten mit Unterstützung.",
            "_ benötigt Hilfe, um wichtige Informationen zu entnehmen.",
            "_ findet die passende Rechnung noch nicht sicher."
          ],
          ziele: [
            "Einfache Sachaufgaben besser verstehen.",
            "Wichtige Informationen erkennen und nutzen.",
            "Passende Rechnungen zu Sachsituationen finden."
          ],
          massnahmen: [
            "Sachaufgaben werden vorgelesen, nachgespielt und visualisiert.",
            "Wichtige Informationen werden markiert und gemeinsam geordnet.",
            "_ nutzt Bild, Handlung, Rechnung und Antwortsatz als feste Struktur."
          ],
          evaluation: [
            "Bearbeitete Sachaufgaben werden gesammelt und verglichen.",
            "Der Lösungsweg wird anhand einfacher Aufgaben besprochen."
          ]
        }),
        "Geometrie/Formen/Muster": topic({
          istStand: [
            "_ erkennt einfache Formen in vertrauten Aufgaben.",
            "_ setzt Muster mit Unterstützung fort.",
            "_ benötigt beim Beschreiben von Lagebeziehungen noch Hilfe."
          ],
          ziele: [
            "Formen sicherer benennen und unterscheiden.",
            "Einfache Muster erkennen, fortsetzen und beschreiben.",
            "Lagebeziehungen mit passenden Begriffen ausdrücken."
          ],
          massnahmen: [
            "Formen und Muster werden gelegt, sortiert und beschrieben.",
            "Bau- und Legematerial unterstützt das handelnde Lernen.",
            "Fachbegriffe werden anschaulich eingeführt und wiederholt."
          ],
          evaluation: [
            "Lege-, Sortier- und Beschreibungsaufgaben werden beobachtet.",
            "Arbeitsproben zu Formen und Mustern werden verglichen."
          ]
        }),
        "Umgang mit Material": topic({
          istStand: [
            "_ nutzt Plättchen, Würfel, Punktefelder oder Rechenrahmen noch mit Anleitung zur Darstellung mathematischer Inhalte.",
            "Rechenhandlungen mit Material werden noch nicht durchgängig mit Bild oder Rechnung verknüpft.",
            "_ benötigt noch Unterstützung, mathematisches Material passend zur Aufgabe auszuwählen und strukturiert einzusetzen."
          ],
          ziele: [
            "Mathematisches Material gezielt zur Darstellung von Mengen und Rechenhandlungen nutzen.",
            "Den Zusammenhang zwischen Handlung, Bild und Rechnung erkennen.",
            "Rechenwege mithilfe von Material erklären."
          ],
          massnahmen: [
            "Plättchen, Würfel, Punktefelder und Rechenrahmen werden gezielt zur Darstellung mathematischer Inhalte eingeführt und schrittweise reduziert.",
            "_ stellt Aufgaben handelnd dar und überträgt sie in Zeichnung und Rechnung.",
            "Materialhandlung, Zeichnung und symbolische Aufgabe werden regelmäßig miteinander verknüpft."
          ],
          evaluation: [
            "Der zielgerichtete Materialeinsatz wird beobachtet.",
            "Die Übertragung von Handlung zur Rechnung wird anhand von Aufgaben überprüft."
          ]
        })
      },
      "Klasse 3/4": {
        "Zahlenraum und Zahlvorstellung": topic({
          istStand: [
            "_ orientiert sich im größeren Zahlenraum mit Unterstützung.",
            "_ stellt Zahlen mit Material, Stellenwerttafel oder Zahlenstrahl dar.",
            "_ benötigt noch Hilfe beim Vergleichen und Ordnen größerer Zahlen."
          ],
          ziele: [
            "Zahlen im bekannten Zahlenraum sicher darstellen, vergleichen und ordnen.",
            "Zahlbeziehungen erkennen und für Aufgaben nutzen.",
            "Sich am Zahlenstrahl und in der Stellenwerttafel sicherer orientieren."
          ],
          massnahmen: [
            "Zahlen werden mit Stellenwertmaterial, Zahlenstrahl und Stellenwerttafel dargestellt.",
            "_ übt das Vergleichen, Ordnen und Zerlegen größerer Zahlen.",
            "Zahlbeziehungen werden versprachlicht und an Beispielen sichtbar gemacht."
          ],
          evaluation: [
            "Aufgaben zur Zahldarstellung und Zahlordnung werden verglichen.",
            "Die Orientierung im Zahlenraum wird durch kurze Übungsformate überprüft."
          ]
        }),
        Stellenwertverständnis: topic({
          istStand: [
            "_ erkennt Einer, Zehner und Hunderter mit Unterstützung.",
            "_ benötigt Hilfe beim Bündeln und Entbündeln.",
            "_ nutzt die Stellenwerttafel noch nicht sicher."
          ],
          ziele: [
            "Stellenwerte sicher benennen und nutzen.",
            "Zahlen stellenwertgerecht darstellen und zerlegen.",
            "Bündeln und Entbündeln als Grundlage für Rechenwege verstehen."
          ],
          massnahmen: [
            "Stellenwerte werden mit Material handelnd aufgebaut.",
            "_ arbeitet regelmäßig mit Stellenwerttafel und Mehrsystemblöcken.",
            "Zahlen werden zerlegt, gelesen, gelegt und verglichen."
          ],
          evaluation: [
            "Die Nutzung der Stellenwerttafel wird beobachtet.",
            "Aufgaben zum Zerlegen und Darstellen von Zahlen werden überprüft."
          ]
        }),
        "Addition und Subtraktion": topic({
          istStand: [
            "_ löst Additions- und Subtraktionsaufgaben mit Unterstützung.",
            "_ benötigt beim Finden eines passenden Rechenwegs noch Hilfe.",
            "_ rechnet sicherer, wenn Aufgaben anschaulich dargestellt werden."
          ],
          ziele: [
            "Additions- und Subtraktionsaufgaben sicherer lösen.",
            "Rechenwege nachvollziehbar darstellen.",
            "Geeignete Strategien auswählen und anwenden."
          ],
          massnahmen: [
            "Aufgaben werden handelnd, bildlich und symbolisch erarbeitet.",
            "Rechenwege werden verglichen und versprachlicht.",
            "_ nutzt Zahlenstrahl, Stellenwerttafel oder Rechenstriche als Hilfe."
          ],
          evaluation: [
            "Rechenwege und Ergebnisse werden anhand ausgewählter Aufgaben überprüft.",
            "Die Strategieauswahl wird im Unterricht beobachtet."
          ]
        }),
        "Schriftliche Rechenverfahren": topic({
          istStand: [
            "_ führt schriftliche Rechenverfahren mit Unterstützung aus.",
            "_ macht noch Fehler bei Stellenwerten oder Überträgen.",
            "_ benötigt klare Schrittfolgen zur Bearbeitung."
          ],
          ziele: [
            "Schriftliche Rechenverfahren sicherer und geordneter anwenden.",
            "Stellenwerte und Überträge sorgfältig beachten.",
            "Ergebnisse durch Überschlagen oder Nachrechnen kontrollieren."
          ],
          massnahmen: [
            "Rechenschritte werden kleinschrittig eingeführt und visualisiert.",
            "_ nutzt Rechenkästchen, Stellenwertfarben oder eine Schrittkarte.",
            "Kontrollstrategien wie Überschlagen und Gegenrechnen werden geübt."
          ],
          evaluation: [
            "Rechenproben werden auf Rechenweg, Stellenwertbeachtung und Ergebnis überprüft.",
            "Die selbstständige Nutzung der Schrittfolge wird beobachtet."
          ]
        }),
        "Multiplikation und Division": topic({
          istStand: [
            "_ kennt einzelne Malaufgaben sicher.",
            "_ benötigt beim Ableiten von Aufgaben noch Unterstützung.",
            "_ versteht Divisionsaufgaben besser mit Material oder Bildern."
          ],
          ziele: [
            "Kernaufgaben und Ableitungsstrategien sicherer nutzen.",
            "Multiplikation und Division als zusammenhängende Operationen verstehen.",
            "Aufgaben des kleinen Einmaleins sicherer abrufen."
          ],
          massnahmen: [
            "Malreihen werden mit Punktefeldern, Plättchen und Handlungssituationen erarbeitet.",
            "Kernaufgaben, Tauschaufgaben und Nachbaraufgaben werden gezielt genutzt.",
            "Divisionssituationen werden handelnd gelegt und versprachlicht."
          ],
          evaluation: [
            "Mal- und Divisionsaufgaben werden regelmäßig kurz überprüft.",
            "Die Nutzung von Ableitungsstrategien wird beobachtet."
          ]
        }),
        "Rechenstrategien und Kopfrechnen": topic({
          istStand: [
            "_ nutzt Rechenstrategien noch nicht durchgängig selbstständig.",
            "_ greift bei Kopfrechenaufgaben teilweise auf zählende Verfahren zurück.",
            "_ erkennt Rechenvorteile mit Unterstützung."
          ],
          ziele: [
            "Passende Kopfrechenstrategien bewusster auswählen.",
            "Aufgabenbeziehungen zum schnelleren Rechnen nutzen.",
            "Rechenwege erklären und vergleichen."
          ],
          massnahmen: [
            "Strategien wie Zerlegen, Verdoppeln, Halbieren, Ergänzen und Tauschaufgaben werden geübt.",
            "_ erklärt Rechenwege mündlich, mit Skizze oder Rechenstrich.",
            "Kurze regelmäßige Kopfrechenphasen sichern bekannte Aufgaben."
          ],
          evaluation: [
            "Kopfrechenaufgaben werden regelmäßig überprüft.",
            "Die Strategieanwendung wird anhand erklärter Rechenwege eingeschätzt."
          ]
        }),
        Sachaufgaben: topic({
          istStand: [
            "_ versteht einfache Sachaufgaben mit Unterstützung.",
            "_ benötigt Hilfe beim Entnehmen wichtiger Informationen.",
            "_ findet die passende Rechnung noch nicht immer sicher."
          ],
          ziele: [
            "Sachaufgaben strukturierter erschließen.",
            "Wichtige Informationen erkennen und passende Rechnungen auswählen.",
            "Antwortsätze mit Bezug zur Frage formulieren."
          ],
          massnahmen: [
            "Sachaufgaben werden gelesen, markiert, gezeichnet und besprochen.",
            "_ nutzt eine feste Schrittfolge: Frage, Daten, Rechnung, Antwort.",
            "Rechengeschichten werden handelnd oder bildlich dargestellt."
          ],
          evaluation: [
            "Bearbeitete Sachaufgaben werden gesammelt und verglichen.",
            "Die Nutzung der Schrittfolge wird im Unterricht beobachtet."
          ]
        }),
        Größen: topic({
          istStand: [
            "_ arbeitet mit Größen noch unsicher.",
            "_ benötigt Unterstützung beim Auswählen passender Einheiten.",
            "_ löst Größenaufgaben sicherer, wenn sie alltagsnah eingebettet sind."
          ],
          ziele: [
            "Größen und passende Einheiten sicherer zuordnen.",
            "Mit Geld, Zeit, Längen oder Gewichten zunehmend sicher rechnen.",
            "Einfache Größenangaben vergleichen und umwandeln."
          ],
          massnahmen: [
            "Größen werden mit realem Material und Alltagssituationen erarbeitet.",
            "_ übt das Messen, Vergleichen und Schätzen regelmäßig.",
            "Tabellen, Skizzen und Rechengeschichten unterstützen #ihn/sie#."
          ],
          evaluation: [
            "Praktische Mess- und Vergleichsaufgaben werden beobachtet.",
            "Arbeitsproben zu Größen werden regelmäßig ausgewertet."
          ]
        }),
        Geometrie: topic({
          istStand: [
            "_ erkennt geometrische Formen und Körper mit Unterstützung.",
            "_ benötigt Hilfe beim Beschreiben von Eigenschaften.",
            "_ bearbeitet Zeichen- und Bauaufgaben noch nicht durchgängig genau."
          ],
          ziele: [
            "Geometrische Formen und Körper sicherer benennen und unterscheiden.",
            "Eigenschaften beschreiben und vergleichen.",
            "Zeichnungen und Bauaufgaben sorgfältiger ausführen."
          ],
          massnahmen: [
            "Formen und Körper werden handelnd sortiert, gebaut und beschrieben.",
            "_ nutzt Lineal, Geodreieck oder Rasterhilfen angeleitet.",
            "Fachbegriffe werden an konkretem Material wiederholt."
          ],
          evaluation: [
            "Zeichen-, Bau- und Sortieraufgaben werden verglichen.",
            "Die Nutzung geometrischer Fachbegriffe wird beobachtet."
          ]
        }),
        "Daten, Tabellen und Diagramme": topic({
          istStand: [
            "_ entnimmt Tabellen oder Diagrammen Informationen mit Unterstützung.",
            "_ benötigt Hilfe beim Darstellen eigener Daten.",
            "_ versteht einfache Übersichten besser nach gemeinsamer Besprechung."
          ],
          ziele: [
            "Informationen aus Tabellen und Diagrammen sicherer entnehmen.",
            "Einfache Daten ordnen und darstellen.",
            "Ergebnisse aus Darstellungen verständlich beschreiben."
          ],
          massnahmen: [
            "Tabellen und Diagramme werden gemeinsam gelesen und versprachlicht.",
            "_ sammelt, ordnet und vergleicht Daten in überschaubaren Aufgaben.",
            "Darstellungen werden mit Fragen, Farben oder Markierungen unterstützt."
          ],
          evaluation: [
            "Aufgaben zu Tabellen und Diagrammen werden überprüft.",
            "Die Beschreibung von Daten und Ergebnissen wird beobachtet."
          ]
        }),
        "Arbeitsverhalten Mathematik": topic({
          istStand: [
            "_ benötigt klare Arbeitsaufträge und überschaubare Aufgabenmengen.",
            "_ beginnt mathematische Aufgaben sicherer mit Strukturhilfe.",
            "_ braucht Rückmeldung, um Rechenwege sorgfältig zu kontrollieren."
          ],
          ziele: [
            "Mathematische Aufgaben selbstständiger beginnen.",
            "Rechenwege geordneter darstellen.",
            "Ergebnisse sorgfältiger kontrollieren."
          ],
          massnahmen: [
            "Aufgaben werden klar gegliedert und bei Bedarf reduziert.",
            "_ nutzt Rechenkästchen, Schrittfolgen oder Kontrollkarten.",
            "Kurze Rückmeldungen unterstützen #ihn/sie# während der Arbeitsphase."
          ],
          evaluation: [
            "Arbeitsbeginn, Sorgfalt und Vollständigkeit werden beobachtet.",
            "Arbeitsergebnisse und Kontrollverhalten werden regelmäßig gesichtet."
          ]
        })
      }
    },

    "Weitere Fächer": {
      "Fachunterricht allgemein": topic({
        istStand: [
          "_ beteiligt sich mit Unterstützung am Fachunterricht.",
          "_ benötigt klare Arbeitsaufträge und passende Hilfen.",
          "_ zeigt Interesse an ausgewählten Unterrichtsinhalten."
        ],
        ziele: [
          "Sich aktiver am Fachunterricht beteiligen.",
          "Fachliche Aufgaben mit Unterstützung bearbeiten.",
          "Arbeitsergebnisse zunehmend vollständig sichern."
        ],
        massnahmen: [
          "Aufgaben werden anschaulich, kleinschrittig und übersichtlich angeboten.",
          "_ erhält passende Hilfen, Beispiele oder Partnerunterstützung.",
          "Fachinhalte werden mündlich, bildlich und handelnd gesichert."
        ],
        evaluation: [
          "Mitarbeit und Arbeitsergebnisse werden im Fachunterricht beobachtet.",
          "Ausgewählte Arbeitsproben werden im Förderzeitraum gesichtet."
        ]
      }),
      Sachunterricht: topic({
        istStand: [
          "_ erschließt sachunterrichtliche Inhalte mit Unterstützung.",
          "_ beteiligt sich an Gesprächen zu vertrauten Themen.",
          "_ benötigt Hilfe beim Sichern wichtiger Informationen."
        ],
        ziele: [
          "Sachinformationen gezielter entnehmen und wiedergeben.",
          "Beobachtungen und Ergebnisse verständlich beschreiben.",
          "Fachbegriffe zunehmend sicher verwenden."
        ],
        massnahmen: [
          "Sachinhalte werden anschaulich, handelnd und sprachlich vorentlastet.",
          "Bildkarten, Wortkarten und einfache Forscheraufträge unterstützen #ihn/sie#.",
          "Ergebnisse werden gemeinsam geordnet und gesichert."
        ],
        evaluation: [
          "Mündliche Beiträge, Arbeitsblätter und Beobachtungsaufgaben werden ausgewertet.",
          "Die Nutzung von Fachbegriffen wird beobachtet."
        ]
      })
    },

    "ggf. Herkunftssprachlicher Unterricht": {
      "Wortschatz und Ausdruck": topic({
        istStand: [
          "_ nutzt vorhandene sprachliche Kompetenzen mit Unterstützung.",
          "_ benötigt Hilfe beim Verwenden passender Wörter und Satzmuster.",
          "_ beteiligt sich in vertrauten sprachlichen Situationen eher."
        ],
        ziele: [
          "Den Wortschatz erweitern.",
          "Inhalte verständlicher ausdrücken.",
          "Bekannte Satzmuster sicherer nutzen."
        ],
        massnahmen: [
          "Wortschatzarbeit, Bildkarten und Satzmuster werden regelmäßig eingesetzt.",
          "_ erhält sprachliche Vorentlastung und Wiederholungen.",
          "Mehrsprachige Ressourcen können unterstützend einbezogen werden."
        ],
        evaluation: [
          "Mündliche und schriftliche Beiträge werden beobachtet.",
          "Die Nutzung geübter Wörter und Satzmuster wird überprüft."
        ]
      }),
      "Lesen und Schreiben": topic({
        istStand: [
          "_ bearbeitet Lese- und Schreibaufgaben mit Unterstützung.",
          "_ benötigt Hilfe beim Übertragen sprachlicher Inhalte.",
          "_ nutzt bekannte Wörter und Strukturen zunehmend sicher."
        ],
        ziele: [
          "Einfache Texte besser verstehen.",
          "Geübte Wörter und Satzmuster schriftlich anwenden.",
          "Inhalte zunehmend verständlich wiedergeben."
        ],
        massnahmen: [
          "Kurze Texte, Wortkarten und Satzanfänge unterstützen #ihn/sie#.",
          "Lese- und Schreibaufgaben werden kleinschrittig vorbereitet.",
          "Geübte Wörter werden wiederholt gelesen, gesprochen und geschrieben."
        ],
        evaluation: [
          "Lese- und Schreibaufgaben werden regelmäßig gesichtet.",
          "Fortschritte werden anhand ausgewählter Beiträge dokumentiert."
        ]
      })
    }
  };

  const previousLearningTopics = areas["Lern- und Leistungsverhalten"] || {};
  areas["Lern- und Leistungsverhalten"] = {
    "Lernbereitschaft / Motivation": topic({
      istStand: [
        "_ benötigt noch Unterstützung, um sich auf neue Lernangebote einzulassen.",
        "In vertrauten Aufgabenformaten beteiligt sich _ sicherer als bei neuen Anforderungen.",
        "Nach kurzer Ermutigung beginnt _ eine überschaubare Aufgabe zunehmend eher.",
        "Bei Unsicherheit wird die Mitarbeit noch häufig unterbrochen.",
        "Rückmeldungen kann _ mit ruhiger Begleitung zunehmend für die Weiterarbeit nutzen.",
        "Eigene Lernfortschritte nimmt _ mit konkreten Hinweisen zunehmend wahr."
      ],
      ziele: [
        "Sich auf ein überschaubares Lernangebot einlassen und einen ersten Arbeitsschritt beginnen.",
        "Bei Unsicherheit eine vereinbarte Hilfe nutzen und an der Aufgabe weiterarbeiten.",
        "Konkrete Rückmeldungen annehmen und für den nächsten Arbeitsschritt nutzen.",
        "Eigene Lernfortschritte anhand vereinbarter Teilziele wahrnehmen und benennen."
      ],
      massnahmen: [
        "Lernangebote werden mit klaren, erreichbaren Teilzielen und einem überschaubaren Einstieg angeboten.",
        "_ erhält kurze Ermutigungen und zeitnahe Rückmeldungen zu gelungenen Arbeitsschritten.",
        "Erfolge und Fortschritte werden in kurzen Reflexionsphasen sichtbar gemacht.",
        "Bekannte und neue Aufgabenformate werden schrittweise verbunden und verlässlich angekündigt."
      ],
      evaluation: [
        "Beobachtet wird, ob _ sich häufiger auf neue Lernangebote einlässt und einen ersten Arbeitsschritt beginnt.",
        "Dokumentiert wird, ob _ bei Unsicherheit vereinbarte Hilfen nutzt und weiterarbeitet.",
        "Überprüft wird, ob _ konkrete Rückmeldungen zunehmend für den nächsten Arbeitsschritt nutzt."
      ]
    }),
    Aufgabenverständnis: topic({
      istStand: [
        "Aufgabenstellungen werden von _ noch nicht durchgängig sicher erfasst.",
        "Der zentrale Arbeitsauftrag muss für _ häufig noch einmal geklärt werden.",
        "Wichtige Schlüsselwörter in Aufgabenstellungen werden noch nicht zuverlässig erkannt.",
        "Mehrschrittige Aufgaben benötigen noch eine klare Gliederung in einzelne Bearbeitungsschritte.",
        "Beispiele oder Modelle helfen _, das erwartete Vorgehen zu erfassen.",
        "Bei Unklarheiten stellt _ noch nicht durchgängig eine passende Rückfrage."
      ],
      ziele: [
        "Den zentralen Arbeitsauftrag in einer überschaubaren Aufgabe erfassen.",
        "Wichtige Schlüsselwörter erkennen und den Auftrag mit eigenen Worten wiedergeben.",
        "Mehrschrittige Aufgaben in eine passende Reihenfolge von Bearbeitungsschritten gliedern.",
        "Bei Unklarheiten eine gezielte Rückfrage stellen."
      ],
      massnahmen: [
        "Arbeitsaufträge werden kurz formuliert, visualisiert und in eindeutige Schritte gegliedert.",
        "Schlüsselwörter werden gemeinsam markiert und mit dem erwarteten Bearbeitungsschritt verbunden.",
        "_ gibt den Arbeitsauftrag vor Beginn mit eigenen Worten wieder.",
        "Beispiele und Modelle werden gezielt genutzt und anschließend schrittweise reduziert."
      ],
      evaluation: [
        "Beobachtet wird, ob _ den zentralen Arbeitsauftrag mit weniger Klärung erfasst.",
        "Dokumentiert wird, ob _ Schlüsselwörter erkennt und passende Bearbeitungsschritte benennt.",
        "Überprüft wird, ob _ bei Unklarheiten zunehmend gezielte Rückfragen stellt."
      ]
    }),
    Aufgabenbeginn: previousLearningTopics.Aufgabenbeginn,
    "Konzentration / Aufmerksamkeit": previousLearningTopics.Konzentration,
    Ausdauer: previousLearningTopics.Ausdauer,
    Selbstständigkeit: previousLearningTopics.Selbstständigkeit,
    "Arbeitsorganisation / Material": previousLearningTopics.Arbeitsorganisation,
    "Sorgfalt / Genauigkeit": topic({
      istStand: [
        "Aufgaben werden von _ noch nicht durchgängig vollständig und sorgfältig bearbeitet.",
        "Bei längeren Arbeitsphasen lässt die Genauigkeit noch nach.",
        "Arbeitsanweisungen zur Ausführung werden noch nicht zuverlässig beachtet.",
        "Eigene Fehler werden beim Kontrollieren noch nicht sicher erkannt.",
        "Korrekturen werden ohne Erinnerung noch nicht vollständig umgesetzt.",
        "Arbeitsblätter oder Heftseiten bleiben ohne Strukturhilfe noch unübersichtlich."
      ],
      ziele: [
        "Überschaubare Aufgaben vollständig und in der vereinbarten Form bearbeiten.",
        "Eigene Ergebnisse mithilfe einer kurzen Kontrollstrategie überprüfen.",
        "Gefundene Fehler verbessern und vereinbarte Korrekturen umsetzen.",
        "Arbeitsblätter und Heftseiten zunehmend übersichtlich gestalten."
      ],
      massnahmen: [
        "Arbeitsaufträge werden mit wenigen sichtbaren Kriterien für Vollständigkeit und Genauigkeit verbunden.",
        "Eine kurze Kontrollkarte unterstützt _ beim Prüfen und Verbessern eigener Ergebnisse.",
        "In kurzen Arbeitsphasen werden Genauigkeit und vollständige Bearbeitung gezielt rückgemeldet.",
        "Übersichtliche Vorlagen und feste Ordnungsstrukturen unterstützen die Gestaltung von Arbeitsblättern und Heftseiten."
      ],
      evaluation: [
        "Beobachtet wird, ob _ überschaubare Aufgaben häufiger vollständig und sorgfältig bearbeitet.",
        "Dokumentiert wird, ob _ mithilfe der vereinbarten Kontrolle eigene Fehler findet und verbessert.",
        "Verglichen wird, ob Arbeitsblätter und Heftseiten zunehmend übersichtlich und vollständig gestaltet werden."
      ]
    }),
    "Arbeitstempo / Arbeitszeit nutzen": topic({
      istStand: [
        "Die verfügbare Arbeitszeit wird von _ noch nicht durchgängig passend genutzt.",
        "Der Arbeitsbeginn erfolgt noch so verzögert, dass für die Bearbeitung wenig Zeit verbleibt.",
        "Das Arbeitstempo wechselt in längeren Arbeitsphasen noch deutlich.",
        "An einzelnen Aufgaben verweilt _ noch so lange, dass weitere Arbeitsschritte offenbleiben.",
        "Bei begrenzter Zeit werden Aufgaben noch häufig vorschnell oder unvollständig abgeschlossen.",
        "Die Orientierung zwischen Arbeitsphasen, Teilzielen und Pausen benötigt noch klare Zeitstrukturen."
      ],
      ziele: [
        "Nach einem vereinbarten Startsignal zeitnah mit der Aufgabe beginnen.",
        "In einem angemessenen Tempo an einem vereinbarten Teilziel arbeiten.",
        "Die verfügbare Arbeitszeit mithilfe einer Zeitstruktur zunehmend passend einteilen.",
        "Bei Zeitdruck vereinbarte Prioritäten nutzen und Aufgaben geordnet weiterbearbeiten."
      ],
      massnahmen: [
        "Arbeitsphasen werden mit sichtbaren Zeitabschnitten, Teilzielen und kurzen Zwischenstopps strukturiert.",
        "Ein Timer oder eine Zeitleiste unterstützt _ bei der Orientierung in der Arbeitszeit.",
        "Aufgaben werden in zeitlich erreichbare Abschnitte gegliedert und nach Wichtigkeit geordnet.",
        "Kurze Rückmeldungen helfen _, Arbeitstempo und Genauigkeit passend aufeinander abzustimmen."
      ],
      evaluation: [
        "Beobachtet wird, ob _ nach dem Startsignal zeitnah beginnt und die Arbeitszeit häufiger nutzt.",
        "Dokumentiert wird, welche vereinbarten Teilziele _ innerhalb der vorgesehenen Zeit bearbeitet.",
        "Überprüft wird, ob _ Timer, Zeitleiste oder Zwischenstopps zunehmend selbstständiger zur Zeiteinteilung nutzt."
      ]
    })
  };

  const paket1DeutschMathe = {
    Deutsch: {
      "Klasse 1/2": {
        "Laut-Buchstaben-Zuordnung": {
          ziele: [
            "Anlaute, Inlaute und Endlaute genauer heraushören.",
            "Bekannte Buchstaben sicher erkennen, benennen und schreiben.",
            "Laute und Buchstaben beim Lesen und Schreiben gezielter verbinden."
          ],
          massnahmen: [
            "Lautübungen mit Bildkarten, Lautgebärden und Anlautmaterial einsetzen.",
            "Buchstaben regelmäßig hören, sehen, sprechen, legen und schreiben.",
            "Kurze Übungen zur Lautanalyse in bekannte Wörter einbauen."
          ]
        },
        Silben: {
          ziele: [
            "Wörter sicherer in Silben gliedern.",
            "Silbenbögen beim Lesen und Schreiben nutzen.",
            "Silben als Hilfe zur Wortdurchgliederung anwenden."
          ],
          massnahmen: [
            "Wörter klatschen, schwingen und mit Silbenbögen markieren.",
            "Silbenkarten und Silbenteppiche regelmäßig einsetzen.",
            "Lesen und Schreiben mit silbisch gegliedertem Wortmaterial üben."
          ]
        },
        "Wörter lesen": {
          ziele: [
            "Lautgetreue Wörter sicherer erlesen.",
            "Häufig geübte Wörter schneller wiedererkennen.",
            "Beim Lesen Silben und bekannte Wortteile nutzen."
          ],
          massnahmen: [
            "Kurze Wörter wiederholt und in kleinen Portionen lesen.",
            "Wortkarten, Silbenmarkierungen und Blitzlesen einsetzen.",
            "Geübte Wörter in Sätzen und kurzen Texten wieder aufnehmen."
          ]
        },
        "Sätze lesen": {
          ziele: [
            "Kurze Sätze genauer und sicherer lesen.",
            "Satzgrenzen und Satzzeichen beim Lesen beachten.",
            "Den Inhalt einfacher Sätze erfassen."
          ],
          massnahmen: [
            "Kurze Sätze wiederholt lesen und mit Bildern zuordnen.",
            "Satzkarten legen, lesen und inhaltlich besprechen.",
            "Lesematerial in Umfang und Schwierigkeit anpassen."
          ]
        },
        "Texte verstehen": {
          ziele: [
            "Kurze Texte sinnentnehmend lesen.",
            "Einfache Fragen zum Text beantworten.",
            "Wichtige Informationen im Text finden."
          ],
          massnahmen: [
            "Texte vorentlasten und mit Bildern unterstützen.",
            "Leitfragen vor, während und nach dem Lesen nutzen.",
            "Wichtige Wörter oder Informationen markieren lassen."
          ]
        },
        "Lautgetreues Schreiben": {
          ziele: [
            "Lautgetreue Wörter vollständiger schreiben.",
            "Wörter vor dem Schreiben deutlich sprechen und abhören.",
            "Fehlende Laute zunehmend selbst erkennen."
          ],
          massnahmen: [
            "Wörter sprechen, schwingen, abhören und anschließend schreiben.",
            "Lautgebärden, Silbenbögen und Anlautbilder nutzen.",
            "Kurze Schreibübungen mit bekanntem Wortmaterial durchführen."
          ]
        },
        Abschreiben: {
          ziele: [
            "Wörter und kurze Sätze genauer abschreiben.",
            "Abgeschriebene Wörter selbst kontrollieren.",
            "Die Strategie Lesen-Merken-Schreiben-Kontrollieren anwenden."
          ],
          massnahmen: [
            "Abschreibtexte kurz und übersichtlich anbieten.",
            "Abschreibstrategie gemeinsam einüben und visualisieren.",
            "Kontrollphasen mit Vorlage oder Partnerkontrolle einbauen."
          ]
        },
        "Eigene Sätze schreiben": {
          ziele: [
            "Einfache eigene Sätze verständlich schreiben.",
            "Satzanfänge passend nutzen.",
            "Eigene Gedanken geordneter verschriftlichen."
          ],
          massnahmen: [
            "Bildimpulse, Wortkarten und Satzanfänge bereitstellen.",
            "Sätze mündlich vorplanen und anschließend schreiben.",
            "Eigene Sätze gemeinsam lesen und gezielt überarbeiten."
          ]
        },
        Rechtschreibgrundlagen: {
          ziele: [
            "Einfache Rechtschreibstrategien zunehmend anwenden.",
            "Geübte Wörter sicherer schreiben.",
            "Schwierige Stellen im Wort bewusster wahrnehmen."
          ],
          massnahmen: [
            "Wörter silbisch sprechen, markieren und wiederholt schreiben.",
            "Merkwörter in kleinen Portionen üben.",
            "Schreibproben gemeinsam auf vereinbarte Strategien überprüfen."
          ]
        },
        "Großschreibung/Nomen": {
          ziele: [
            "Nomen mithilfe von Artikeln erkennen.",
            "Nomen in geübten Sätzen großschreiben.",
            "Satzanfänge zunehmend sicher großschreiben."
          ],
          massnahmen: [
            "Nomen mit Artikeln sammeln, sortieren und markieren.",
            "Kurze Sätze gemeinsam auf Großschreibung prüfen.",
            "Sortier- und Markieraufgaben zu Nomen einsetzen."
          ]
        }
      },
      "Klasse 3/4": {
        Leseflüssigkeit: {
          ziele: [
            "Altersangemessene Texte flüssiger und genauer lesen.",
            "Satzzeichen und Sinnabschnitte beim Vorlesen beachten.",
            "Lesetempo und Lesegenauigkeit weiterentwickeln."
          ],
          massnahmen: [
            "Wiederholtes Lesen kurzer Textabschnitte einsetzen.",
            "Tandemlesen, Chorlesen oder Lesepartnerarbeit nutzen.",
            "Vorlesephasen vorbereiten und mit Rückmeldung begleiten."
          ]
        },
        "Texte verstehen": {
          ziele: [
            "Informationen aus Texten gezielter entnehmen.",
            "Fragen zum Text selbstständiger beantworten.",
            "Zentrale Aussagen eines Textes verständlich wiedergeben."
          ],
          massnahmen: [
            "Texte in Sinnabschnitte gliedern und vorentlasten.",
            "Leitfragen, Markierhilfen und Zwischenstopps nutzen.",
            "Textinhalte mündlich besprechen und schriftlich sichern."
          ]
        },
        Lesestrategien: {
          ziele: [
            "Vor, während und nach dem Lesen passende Strategien nutzen.",
            "Wichtige Informationen markieren und weiterverwenden.",
            "Vermutungen zum Textinhalt bilden und überprüfen."
          ],
          massnahmen: [
            "Strategiekarten für Markieren, Fragen, Zusammenfassen und Klären einsetzen.",
            "Lesestrategien an kurzen Texten gemeinsam modellieren.",
            "Strategien zunächst angeleitet, dann selbstständiger anwenden lassen."
          ]
        },
        "Schreiben eigener Texte": {
          ziele: [
            "Eigene Texte klarer und vollständiger formulieren.",
            "Gedanken geordneter verschriftlichen.",
            "Passende Satzanfänge und Verbindungswörter nutzen."
          ],
          massnahmen: [
            "Schreibpläne, Wortgeländer und Satzanfänge bereitstellen.",
            "Texte vor dem Schreiben mündlich planen.",
            "Kurze Schreibphasen mit gezielter Rückmeldung einsetzen."
          ]
        },
        "Texte planen/überarbeiten": {
          ziele: [
            "Texte vor dem Schreiben einfacher planen.",
            "Eigene Texte mithilfe einer Checkliste überarbeiten.",
            "Rückmeldungen nutzen, um Texte zu verbessern."
          ],
          massnahmen: [
            "Stichwortsammlung, Schreibplan und Checkliste einsetzen.",
            "Überarbeitung auf wenige klare Kriterien begrenzen.",
            "Entwürfe und überarbeitete Fassungen vergleichen."
          ]
        },
        Rechtschreibstrategien: {
          ziele: [
            "Silbieren, Verlängern, Ableiten und Merken gezielter anwenden.",
            "Schwierige Stellen in Wörtern erkennen und markieren.",
            "Geübte Wörter sicherer schreiben."
          ],
          massnahmen: [
            "Rechtschreibstrategien an bekanntem Wortmaterial wiederholen.",
            "Wörter sortieren, markieren und in kurzen Schreibübungen anwenden.",
            "Kontrollhilfen für eigene Texte nutzen."
          ]
        },
        Wortarten: {
          ziele: [
            "Nomen, Verben und Adjektive sicherer erkennen.",
            "Einfache Proben zur Bestimmung von Wortarten nutzen.",
            "Wortarten in Sätzen markieren und unterscheiden."
          ],
          massnahmen: [
            "Wortarten mit Farben, Symbolen und Sortieraufgaben üben.",
            "Artikelprobe, Tunwortprobe und Adjektivprobe regelmäßig anwenden.",
            "Kurze übersichtliche Sätze und Wortkarten nutzen."
          ]
        },
        "Satzglieder/Satzbau": {
          ziele: [
            "Vollständige Sätze sicherer bilden.",
            "Satzgrenzen beachten und passende Satzzeichen setzen.",
            "Einfache Sätze erweitern und umstellen."
          ],
          massnahmen: [
            "Sätze mit Satzkarten legen, umstellen und erweitern.",
            "Satzanfänge, Satzzeichen und Satzgrenzen gezielt üben.",
            "Satzbauhilfen und Kontrollfragen einsetzen."
          ]
        },
        "Abschreiben/Kontrollieren": {
          ziele: [
            "Texte genauer und vollständiger abschreiben.",
            "Eine Abschreib- und Kontrollstrategie anwenden.",
            "Eigene Texte mithilfe einer Vorlage überprüfen."
          ],
          massnahmen: [
            "Abschreibtexte in kurze Abschnitte gliedern.",
            "Lesen-Merken-Schreiben-Kontrollieren als feste Strategie nutzen.",
            "Checkliste oder Partnerkontrolle einsetzen."
          ]
        }
      }
    },
    Mathematik: {
      "Klasse 1/2": {
        Zahlverständnis: {
          ziele: [
            "Zahlen im bekannten Zahlenraum sicherer darstellen und vergleichen.",
            "Zahlbeziehungen erkennen und nutzen.",
            "Sich am Zahlenstrahl und im Zwanzigerfeld besser orientieren."
          ],
          massnahmen: [
            "Zahlen handelnd, bildlich und symbolisch darstellen.",
            "Zahlenstrahl, Zwanzigerfeld und Plättchen gezielt einsetzen.",
            "Kurze Übungen zur Zahlorientierung regelmäßig wiederholen."
          ]
        },
        "Mengen/Zahlen zuordnen": {
          ziele: [
            "Mengen sicherer erfassen.",
            "Zahlen passenden Mengen zuordnen.",
            "Mengen strukturiert legen, darstellen und vergleichen."
          ],
          massnahmen: [
            "Mengen mit Plättchen, Würfelbildern und Zehnerfeld darstellen.",
            "Bündeln, Vergleichen und Zuordnen von Mengen üben.",
            "Strukturierte Mengendarstellungen versprachlichen."
          ]
        },
        "Zahlenreihe/Zahlordnung": {
          ziele: [
            "Zahlen in der richtigen Reihenfolge benennen.",
            "Vorgänger, Nachfolger und Nachbarzahlen bestimmen.",
            "Zahlen im bekannten Zahlenraum ordnen."
          ],
          massnahmen: [
            "Zahlenstrahl und Zahlenkarten regelmäßig einsetzen.",
            "Vorgänger, Nachfolger und Nachbarzahlen in kurzen Übungen festigen.",
            "Zählübungen vorwärts und rückwärts spielerisch einbauen."
          ]
        },
        Zahlzerlegung: {
          ziele: [
            "Zahlen sicherer zerlegen.",
            "Zerlegungen als Grundlage für Plus- und Minusaufgaben nutzen.",
            "Bekannte Partnerzahlen schneller abrufen."
          ],
          massnahmen: [
            "Zerlegungen mit Plättchen, Schüttelboxen und Zerlegungshäusern üben.",
            "Partnerzahlen in kurzen wiederkehrenden Phasen sichern.",
            "Zerlegungen mit Rechenaufgaben verknüpfen."
          ]
        },
        Addition: {
          ziele: [
            "Plusaufgaben im bekannten Zahlenraum sicherer lösen.",
            "Geeignete Strategien beim Addieren nutzen.",
            "Ergebnisse zunehmend ohne vollständiges Abzählen finden."
          ],
          massnahmen: [
            "Plusaufgaben handelnd legen und bildlich darstellen.",
            "Weiterzählen, Verdoppeln und Zerlegen als Strategien üben.",
            "Rechenwege gemeinsam vergleichen und besprechen."
          ]
        },
        Subtraktion: {
          ziele: [
            "Minusaufgaben im bekannten Zahlenraum sicherer lösen.",
            "Geeignete Strategien beim Subtrahieren anwenden.",
            "Rechensituationen als Minusaufgaben erkennen."
          ],
          massnahmen: [
            "Wegnehmen, Zurückzählen und Ergänzen handelnd üben.",
            "Material und Zahlenstrahl zur Unterstützung nutzen.",
            "Rechengeschichten nachspielen und verschriftlichen."
          ]
        },
        Zehnerübergang: {
          ziele: [
            "Aufgaben mit Zehnerübergang schrittweise sicherer lösen.",
            "Zerlegungen bis zum Zehner als Strategie nutzen.",
            "Rechenwege über den Zehner nachvollziehbar darstellen."
          ],
          massnahmen: [
            "Zehnerübergang mit Zehnerfeld, Plättchen und Zahlenstrahl erarbeiten.",
            "Aufgaben in Teilschritte zerlegen und versprachlichen.",
            "Wiederholte Aufgabenformate mit Übergang über den Zehner einsetzen."
          ]
        },
        Rechenstrategien: {
          ziele: [
            "Passende Rechenstrategien bewusster auswählen.",
            "Zählendes Rechnen schrittweise reduzieren.",
            "Bekannte Aufgabenbeziehungen nutzen."
          ],
          massnahmen: [
            "Strategien handelnd, bildlich und symbolisch erarbeiten.",
            "Verdoppeln, Halbieren, Nachbaraufgaben und Tauschaufgaben üben.",
            "Rechenwege mit Material oder Zeichnungen erklären lassen."
          ]
        },
        Sachaufgaben: {
          ziele: [
            "Einfache Sachaufgaben besser verstehen.",
            "Wichtige Informationen erkennen und nutzen.",
            "Passende Rechnungen zu Sachsituationen finden."
          ],
          massnahmen: [
            "Sachaufgaben vorlesen, nachspielen und visualisieren.",
            "Wichtige Informationen markieren und ordnen.",
            "Bild, Handlung, Rechnung und Antwortsatz als feste Struktur nutzen."
          ]
        }
      },
      "Klasse 3/4": {
        "Zahlenraum und Zahlvorstellung": {
          ziele: [
            "Zahlen im größeren Zahlenraum sicher darstellen, vergleichen und ordnen.",
            "Zahlbeziehungen erkennen und für Aufgaben nutzen.",
            "Sich am Zahlenstrahl und in der Stellenwerttafel sicherer orientieren."
          ],
          massnahmen: [
            "Zahlen mit Stellenwertmaterial, Zahlenstrahl und Stellenwerttafel darstellen.",
            "Vergleichen, Ordnen und Zerlegen größerer Zahlen regelmäßig üben.",
            "Zahlbeziehungen an Beispielen sichtbar machen und versprachlichen."
          ]
        },
        Stellenwertverständnis: {
          ziele: [
            "Stellenwerte sicher benennen und nutzen.",
            "Zahlen stellenwertgerecht darstellen und zerlegen.",
            "Bündeln und Entbündeln als Grundlage für Rechenwege verstehen."
          ],
          massnahmen: [
            "Stellenwerte mit Material handelnd aufbauen.",
            "Regelmäßig mit Stellenwerttafel und Mehrsystemblöcken arbeiten.",
            "Zahlen lesen, legen, zerlegen und vergleichen."
          ]
        },
        "Addition und Subtraktion": {
          ziele: [
            "Additions- und Subtraktionsaufgaben sicherer lösen.",
            "Rechenwege nachvollziehbar darstellen.",
            "Geeignete Strategien auswählen und anwenden."
          ],
          massnahmen: [
            "Aufgaben handelnd, bildlich und symbolisch erarbeiten.",
            "Rechenwege vergleichen und versprachlichen.",
            "Zahlenstrahl, Stellenwerttafel oder Rechenstrich gezielt nutzen."
          ]
        },
        "Schriftliche Rechenverfahren": {
          ziele: [
            "Schriftliche Rechenverfahren geordneter anwenden.",
            "Stellenwerte und Überträge sorgfältig beachten.",
            "Ergebnisse durch Überschlagen oder Gegenrechnen kontrollieren."
          ],
          massnahmen: [
            "Rechenschritte kleinschrittig einführen und visualisieren.",
            "Rechenkästchen, Stellenwertfarben oder Schrittkarte nutzen.",
            "Kontrollstrategien wie Überschlagen und Gegenrechnen üben."
          ]
        },
        "Multiplikation und Division": {
          ziele: [
            "Kernaufgaben und Ableitungsstrategien sicherer nutzen.",
            "Multiplikation und Division als zusammenhängende Operationen verstehen.",
            "Aufgaben des kleinen Einmaleins sicherer abrufen."
          ],
          massnahmen: [
            "Malreihen mit Punktefeldern, Plättchen und Handlungssituationen erarbeiten.",
            "Kernaufgaben, Tauschaufgaben und Nachbaraufgaben nutzen.",
            "Divisionssituationen handelnd legen und versprachlichen."
          ]
        },
        "Rechenstrategien und Kopfrechnen": {
          ziele: [
            "Passende Kopfrechenstrategien bewusster auswählen.",
            "Aufgabenbeziehungen zum schnelleren Rechnen nutzen.",
            "Rechenwege erklären und vergleichen."
          ],
          massnahmen: [
            "Zerlegen, Verdoppeln, Halbieren, Ergänzen und Tauschaufgaben üben.",
            "Rechenwege mündlich, mit Skizze oder Rechenstrich erklären lassen.",
            "Kurze regelmäßige Kopfrechenphasen einsetzen."
          ]
        },
        Sachaufgaben: {
          ziele: [
            "Sachaufgaben strukturierter erschließen.",
            "Wichtige Informationen erkennen und passende Rechnungen auswählen.",
            "Antwortsätze mit Bezug zur Frage formulieren."
          ],
          massnahmen: [
            "Sachaufgaben lesen, markieren, zeichnen und besprechen.",
            "Feste Schrittfolge nutzen: Frage, Daten, Rechnung, Antwort.",
            "Rechengeschichten handelnd oder bildlich darstellen."
          ]
        },
        Größen: {
          ziele: [
            "Größen und passende Einheiten sicherer zuordnen.",
            "Mit Geld, Zeit, Längen oder Gewichten zunehmend sicher rechnen.",
            "Größenangaben vergleichen und einfache Umwandlungen durchführen."
          ],
          massnahmen: [
            "Größen mit realem Material und Alltagssituationen erarbeiten.",
            "Messen, Schätzen und Vergleichen regelmäßig üben.",
            "Tabellen, Skizzen und Rechengeschichten unterstützend nutzen."
          ]
        },
        Geometrie: {
          ziele: [
            "Formen und Körper sicherer benennen und unterscheiden.",
            "Geometrische Eigenschaften beschreiben und vergleichen.",
            "Zeichnungen und Bauaufgaben sorgfältiger ausführen."
          ],
          massnahmen: [
            "Formen und Körper handelnd sortieren, bauen und beschreiben.",
            "Lineal, Geodreieck oder Rasterhilfen angeleitet nutzen.",
            "Fachbegriffe an konkretem Material wiederholen."
          ]
        },
        "Daten, Tabellen und Diagramme": {
          ziele: [
            "Informationen aus Tabellen und Diagrammen sicherer entnehmen.",
            "Einfache Daten ordnen und darstellen.",
            "Ergebnisse aus Darstellungen verständlich beschreiben."
          ],
          massnahmen: [
            "Tabellen und Diagramme gemeinsam lesen und versprachlichen.",
            "Daten in überschaubaren Aufgaben sammeln, ordnen und vergleichen.",
            "Darstellungen mit Fragen, Farben oder Markierungen unterstützen."
          ]
        }
      }
    }
  };

  const paket2Entwicklung = {
    "Lern- und Leistungsverhalten": {
      Aufgabenbeginn: {
        ziele: [
          "Arbeitsaufträge erfassen und mit weniger Unterstützung beginnen.",
          "Vereinbarte Startstrategien selbstständiger nutzen.",
          "Benötigtes Material vor Arbeitsbeginn bereitlegen.",
          "Nach einer kurzen Orientierung zügiger in die Arbeitsphase finden.",
          "Bei Unsicherheiten gezielt nachfragen, statt die Aufgabe abzubrechen."
        ],
        massnahmen: [
          "Arbeitsaufträge kurz, klar und sichtbar formulieren.",
          "Startkarte oder Schrittfolge am Arbeitsplatz bereitstellen.",
          "Arbeitsbeginn durch ein klares Signal oder eine kurze persönliche Ansprache unterstützen.",
          "Aufgaben in überschaubare erste Schritte gliedern.",
          "Gelungenen selbstständigen Arbeitsbeginn unmittelbar rückmelden."
        ]
      },
      Konzentration: {
        ziele: [
          "Die Aufmerksamkeit über eine vereinbarte Arbeitszeit halten.",
          "Ablenkungen im Umfeld zunehmend besser ausblenden.",
          "Bei Unterbrechungen selbstständiger zur Aufgabe zurückfinden.",
          "Vereinbarte Konzentrationshilfen nutzen.",
          "Kurze Arbeitsphasen möglichst vollständig bearbeiten."
        ],
        massnahmen: [
          "Arbeitsphasen zeitlich überschaubar strukturieren.",
          "Reizreduzierten Arbeitsplatz oder Sichtschutz anbieten.",
          "Kurze Rückmeldungen während der Arbeitsphase geben.",
          "Timer, Arbeitsampel oder Konzentrationskarte einsetzen.",
          "Bewegungs- oder Entlastungspausen gezielt einplanen."
        ]
      },
      Ausdauer: {
        ziele: [
          "Begonnene Aufgaben über einen angemessenen Zeitraum weiterbearbeiten.",
          "Auch bei schwierigen Aufgaben mit Unterstützung weiterarbeiten.",
          "Arbeitsaufträge vollständiger abschließen.",
          "Pausen und Hilfen angemessen nutzen, ohne die Aufgabe aufzugeben.",
          "Die eigene Arbeitsbereitschaft schrittweise stabilisieren."
        ],
        massnahmen: [
          "Aufgabenmenge überschaubar anpassen.",
          "Zwischenziele sichtbar machen und abhaken lassen.",
          "Kurze Ermutigungen und konkrete Rückmeldungen geben.",
          "Arbeitsphasen mit kurzen Pausen strukturieren.",
          "Fertiggestellte Teilschritte sichtbar würdigen."
        ]
      },
      Selbstständigkeit: {
        ziele: [
          "Bekannte Hilfen eigenständiger nutzen.",
          "Einfache Arbeitsschritte ohne direkte Begleitung ausführen.",
          "Bei Unsicherheiten angemessen Hilfe einfordern.",
          "Aufgaben mit Hilfe einer Checkliste selbstständiger bearbeiten.",
          "Eigene Arbeitsergebnisse vor Abgabe kontrollieren."
        ],
        massnahmen: [
          "Checklisten, Beispielaufgaben und Lösungswege bereitstellen.",
          "Vor dem Nachfragen die Nutzung vereinbarter Hilfen einüben.",
          "Selbstständige Arbeitsschritte gezielt rückmelden.",
          "Aufgabenformate wiederkehrend und verlässlich gestalten.",
          "Kurze Reflexion am Ende der Arbeitsphase einbauen."
        ]
      },
      Arbeitsorganisation: {
        ziele: [
          "Den Arbeitsplatz übersichtlicher vorbereiten.",
          "Benötigte Materialien selbstständiger bereitlegen.",
          "Mehrschrittige Aufgaben in sinnvoller Reihenfolge bearbeiten.",
          "Arbeitsblätter und Hefte sorgfältiger führen.",
          "Vereinbarte Ordnungssysteme nutzen."
        ],
        massnahmen: [
          "Materialliste oder Arbeitsplatz-Checkliste einsetzen.",
          "Feste Ablageorte und wiederkehrende Routinen nutzen.",
          "Mehrschrittige Aufgaben sichtbar gliedern.",
          "Mappen-, Heft- und Materialführung regelmäßig kurz kontrollieren.",
          "Arbeitsplatz gemeinsam strukturieren und schrittweise Verantwortung übergeben."
        ]
      }
    },
    "Emotionalität, Sozialverhalten": {
      Emotionsregulation: {
        ziele: [
          "Eigene Gefühle wahrnehmen und benennen.",
          "Vereinbarte Beruhigungsstrategien in belastenden Situationen nutzen.",
          "Unterstützung annehmen, bevor eine Situation eskaliert.",
          "Nach emotionaler Belastung schneller in die Lern- oder Spielsituation zurückfinden.",
          "Gefühle angemessen ausdrücken, ohne andere zu verletzen."
        ],
        massnahmen: [
          "Gefühlskarten, Skalen oder Ampelsysteme einsetzen.",
          "Beruhigungsstrategien regelmäßig einüben und sichtbar machen.",
          "In belastenden Situationen ruhig, kurz und eindeutig begleiten.",
          "Nachbesprechungen zeitnah und wertschätzend durchführen.",
          "Gelungene Regulation unmittelbar positiv rückmelden."
        ]
      },
      Konfliktverhalten: {
        ziele: [
          "Konflikte zunehmend verbal klären.",
          "Eigene Anteile an Konflikten mit Unterstützung erkennen.",
          "Vereinbarte Gesprächsregeln in Konfliktsituationen nutzen.",
          "Handlungsalternativen in Konflikten anwenden.",
          "Hilfe einfordern, bevor ein Konflikt eskaliert."
        ],
        massnahmen: [
          "Konflikte ruhig und zeitnah nachbesprechen.",
          "Gesprächsregeln visualisieren und regelmäßig üben.",
          "Handlungsalternativen mit Rollenspiel oder Bildkarten erarbeiten.",
          "Klärungsgespräche klar strukturieren.",
          "Gelungene Konfliktlösungen sichtbar positiv verstärken."
        ]
      },
      Regelverhalten: {
        ziele: [
          "Vereinbarte Klassenregeln sicherer einhalten.",
          "Auf Erinnerungen angemessen reagieren.",
          "Regeln auch in Übergängen und offenen Situationen beachten.",
          "Eigenes Verhalten zunehmend an bekannten Absprachen ausrichten.",
          "Regeln im Umgang mit Material und Mitschüler:innen beachten."
        ],
        massnahmen: [
          "Regeln sichtbar und sprachlich klar formulieren.",
          "Regelverhalten vor Übergängen kurz erinnern.",
          "Positives Regelverhalten unmittelbar rückmelden.",
          "Konsequenzen vorhersehbar und ruhig umsetzen.",
          "Kurze Reflexionen zu gelungenen Situationen einbauen."
        ]
      },
      Kontaktverhalten: {
        ziele: [
          "Kontakt angemessen aufnehmen.",
          "Gesprächs- und Spielregeln mit anderen beachten.",
          "Positive Kontakte im Klassenverband ausbauen.",
          "In Partner- und Gruppenarbeiten kooperativer handeln.",
          "Auf Beiträge anderer angemessen reagieren."
        ],
        massnahmen: [
          "Partner- und Kleingruppenphasen gezielt vorbereiten.",
          "Angemessene Kontaktaufnahme vorbesprechen und üben.",
          "Kooperative Aufgaben mit klaren Rollen anbieten.",
          "Gelungene soziale Situationen positiv hervorheben.",
          "Satzanfänge für Kontaktaufnahme und Rückmeldung anbieten."
        ]
      },
      Frustrationstoleranz: {
        ziele: [
          "Fehler als Teil des Lernens annehmen.",
          "Bei Misserfolg vereinbarte Hilfen nutzen.",
          "Nach schwierigen Situationen wieder in die Aufgabe zurückfinden.",
          "Frustrationen schrittweise besser aushalten.",
          "Eigene Anstrengungsbereitschaft bei herausfordernden Aufgaben erweitern."
        ],
        massnahmen: [
          "Fehler wertschätzend besprechen und als Lernchance nutzen.",
          "Hilfekarten oder kurze Handlungsstrategien anbieten.",
          "Aufgaben in erreichbare Teilschritte gliedern.",
          "Fortschritte sichtbar machen und gezielt rückmelden.",
          "Kurze Entlastungsphasen bei Überforderung ermöglichen."
        ]
      }
    },
    "Sprache / Kommunikation": {
      "Arbeitsaufträge verstehen": {
        ziele: [
          "Arbeitsaufträge sicherer verstehen und umsetzen.",
          "Wichtige Handlungsschritte aus einem Auftrag entnehmen.",
          "Bei Unklarheiten gezielt nachfragen.",
          "Mehrschrittige Aufträge mit Unterstützung strukturieren.",
          "Mündliche Anweisungen zunehmend selbstständiger umsetzen."
        ],
        massnahmen: [
          "Arbeitsaufträge kurz, klar und in einfacher Sprache formulieren.",
          "Mehrschrittige Aufträge in einzelne Handlungsschritte zerlegen.",
          "Aufträge zusätzlich visualisieren oder vormachen.",
          "_ wiederholt den Auftrag mit eigenen Worten.",
          "Verständnissicherung vor Arbeitsbeginn kurz einbauen."
        ]
      },
      Wortschatz: {
        ziele: [
          "Den aktiven Wortschatz erweitern.",
          "Neue Begriffe verstehen und passend anwenden.",
          "Fachbegriffe in Unterrichtssituationen sicherer nutzen.",
          "Passende Wörter zur Beschreibung von Handlungen und Inhalten verwenden.",
          "Wortbedeutungen zunehmend genauer erfassen."
        ],
        massnahmen: [
          "Neue Begriffe vorentlasten, visualisieren und wiederholen.",
          "Wortkarten, Bildkarten und Wortfelder einsetzen.",
          "Fachbegriffe in kurzen Gesprächs- und Schreibanlässen anwenden.",
          "Wörter sammeln, sortieren und in Sätzen nutzen.",
          "Wiederkehrende Satzmuster zur Anwendung neuer Wörter anbieten."
        ]
      },
      Satzbildung: {
        ziele: [
          "Vollständige Sätze bilden.",
          "Satzmuster sicherer verwenden.",
          "Eigene Aussagen verständlicher strukturieren.",
          "Satzanfänge passend nutzen.",
          "Mündliche und schriftliche Äußerungen klarer formulieren."
        ],
        massnahmen: [
          "Satzanfänge und Satzmuster sichtbar anbieten.",
          "Aussagen gemeinsam erweitern und umformulieren.",
          "Bildimpulse zur Satzbildung nutzen.",
          "Kurze Satzbauübungen in Unterrichtssituationen einbauen.",
          "Modellsätze wiederholt lesen, sprechen und anwenden."
        ]
      },
      Gesprächsverhalten: {
        ziele: [
          "Gesprächsregeln zunehmend beachten.",
          "Eigene Beiträge verständlich einbringen.",
          "Auf Beiträge anderer angemessen reagieren.",
          "Zuhören und Abwarten in Gesprächen üben.",
          "In Partner- und Gruppengesprächen aktiver teilnehmen."
        ],
        massnahmen: [
          "Gesprächsregeln visualisieren und regelmäßig erinnern.",
          "Kurze strukturierte Gesprächsanlässe anbieten.",
          "Satzanfänge für eigene Beiträge und Rückmeldungen nutzen.",
          "Partner- und Kleingruppengespräche gezielt begleiten.",
          "Gelungene Gesprächsbeiträge positiv rückmelden."
        ]
      }
    }
  };

  Object.entries(paket1DeutschMathe).forEach(([areaName, gradeLevels]) => {
    Object.entries(gradeLevels).forEach(([gradeLevel, topics]) => {
      Object.entries(topics).forEach(([topicName, fields]) => {
        const target = areas[areaName]?.[gradeLevel]?.[topicName];
        if (!target) return;
        ["ziele", "massnahmen"].forEach((fieldName) => {
          const existing = Array.isArray(target[fieldName]) ? target[fieldName] : [];
          const additions = (fields[fieldName] || []).filter((entry) => !existing.includes(entry));
          target[fieldName] = [...existing, ...additions];
        });
      });
    });
  });

  Object.entries(paket2Entwicklung).forEach(([areaName, topics]) => {
    Object.entries(topics).forEach(([topicName, fields]) => {
      const target = areas[areaName]?.[topicName];
      if (!target) return;
      ["ziele", "massnahmen"].forEach((fieldName) => {
        const existing = Array.isArray(target[fieldName]) ? target[fieldName] : [];
        const additions = (fields[fieldName] || []).filter((entry) => !existing.includes(entry));
        target[fieldName] = [...existing, ...additions];
      });
    });
  });

  const evaluationsergaenzungen = {
    Deutsch: {
      "Klasse 1/2": {
        "Laut-Buchstaben-Zuordnung": "Dokumentiert wird, ob _ unbekannte lautgetreue Wörter zunehmend sicher über Laut-Buchstaben-Zuordnungen erschließt.",
        Silben: "Überprüft wird, ob _ unbekannte Wörter zunehmend selbstständig in Silben gliedert.",
        "Wörter lesen": "Dokumentiert wird, ob _ geübte und neue Wörter zunehmend flüssiger und genauer liest.",
        "Sätze lesen": "Verglichen wird, ob _ kurze Sätze zunehmend genauer liest und inhaltlich passend zuordnet.",
        "Texte verstehen": "Überprüft wird, ob _ zentrale Informationen aus kurzen Texten zunehmend selbstständig entnimmt.",
        "Leseflüssigkeit/Vorlesen": "Verglichen wird, ob _ einen geübten Abschnitt zunehmend genauer, flüssiger und sinngestaltender vorliest.",
        "Lautgetreues Schreiben": "Dokumentiert wird, ob _ alle hörbaren Laute in neuen lautgetreuen Wörtern zunehmend vollständig notiert.",
        Abschreiben: "Überprüft wird, ob _ Buchstaben und Wörter vollständig überträgt und Fehler mithilfe der vereinbarten Kontrolle findet.",
        "Eigene Sätze schreiben": "Dokumentiert wird, ob eigene Sätze vollständig, verständlich und mit passendem Satzschluss formuliert werden.",
        Rechtschreibgrundlagen: "Verglichen wird, ob _ bekannte Rechtschreibmuster in neuen Wörtern zunehmend anwendet.",
        "Großschreibung/Nomen": "Dokumentiert wird, ob _ Nomen in eigenen Sätzen zunehmend sicher großschreibt."
      },
      "Klasse 3/4": {
        Leseflüssigkeit: "Verglichen wird, ob _ ungeübte Textabschnitte zunehmend genau, flüssig und sinngestaltend liest.",
        "Texte verstehen": "Überprüft wird, ob _ zentrale Aussagen aus altersangemessenen Texten entnimmt und mit Textstellen belegt.",
        Lesestrategien: "Dokumentiert wird, ob _ eine passende Lesestrategie zunehmend selbstständig auswählt und anwendet.",
        "Schreiben eigener Texte": "Verglichen wird, ob eigene Texte zunehmend klar gegliedert, verständlich und inhaltlich vollständig verfasst werden.",
        "Texte planen/überarbeiten": "Dokumentiert wird, welche inhaltlichen oder sprachlichen Änderungen _ mithilfe vereinbarter Kriterien vornimmt.",
        Rechtschreibstrategien: "Überprüft wird, ob _ bekannte Rechtschreibstrategien auf ungeübte Wörter und eigene Texte überträgt.",
        Wortarten: "Dokumentiert wird, ob _ Wortarten in Sätzen zunehmend sicher bestimmt und die Zuordnung begründet.",
        "Satzglieder/Satzbau": "Überprüft wird, ob _ Satzglieder erkennt, umstellt und dabei den Satzsinn erhält.",
        "Abschreiben/Kontrollieren": "Dokumentiert wird, ob _ Abweichungen beim Kontrollieren zunehmend selbstständig findet und verbessert."
      }
    },
    Mathematik: {
      "Klasse 1/2": {
        Zahlverständnis: "Überprüft wird, ob _ Zahlen als Mengen darstellt und Zahlbeziehungen zunehmend sicher vergleicht.",
        "Mengen/Zahlen zuordnen": "Dokumentiert wird, ob _ auch unübersichtlich angeordnete Mengen passend erfasst und Zahlen zuordnet.",
        "Zahlenreihe/Zahlordnung": "Überprüft wird, ob _ Zahlen ordnet sowie Vorgänger und Nachfolger zunehmend sicher bestimmt.",
        Zahlzerlegung: "Überprüft wird, ob _ Zahlzerlegungen im bearbeiteten Zahlenraum zunehmend sicher nutzt.",
        Addition: "Dokumentiert wird, ob _ Plusaufgaben mit einer passenden Strategie löst und den Rechenweg nachvollziehbar darstellt.",
        Subtraktion: "Überprüft wird, ob _ Minusaufgaben passend als Wegnehmen oder Ergänzen deutet und sicherer löst.",
        Zehnerübergang: "Dokumentiert wird, ob _ den Zehnerübergang mit passenden Zerlegungen und nachvollziehbaren Zwischenschritten bewältigt.",
        Rechenstrategien: "Überprüft wird, ob _ zu einer Aufgabe eine passende Rechenstrategie auswählt und erklärt.",
        Kopfrechnen: "Verglichen wird, ob _ geübte Kopfrechenaufgaben zunehmend sicher ohne zählende Hilfen löst.",
        Sachaufgaben: "Dokumentiert wird, ob _ wichtige Angaben erkennt, eine passende Rechnung wählt und die Frage beantwortet.",
        "Geometrie/Formen/Muster": "Überprüft wird, ob _ Formen unterscheidet, Musterregeln erkennt und Muster passend fortsetzt.",
        "Umgang mit Material": "Dokumentiert wird, ob _ Mengen oder Rechenhandlungen mit passendem Material darstellt und in eine Rechnung überträgt."
      },
      "Klasse 3/4": {
        "Zahlenraum und Zahlvorstellung": "Überprüft wird, ob _ größere Zahlen sicher darstellt, vergleicht und in den Zahlenraum einordnet.",
        Stellenwertverständnis: "Dokumentiert wird, ob _ Zahlen nach Stellenwerten zerlegt und zwischen Material, Stellenwerttafel und Zahl wechselt.",
        "Addition und Subtraktion": "Überprüft wird, ob _ einen passenden Rechenweg auswählt, nachvollziehbar darstellt und das Ergebnis kontrolliert.",
        "Schriftliche Rechenverfahren": "Dokumentiert wird, ob _ das schriftliche Verfahren stellengerecht und mit korrekten Überträgen ausführt.",
        "Multiplikation und Division": "Überprüft wird, ob _ Zusammenhänge zwischen Multiplikation und Division für Ableitungen und Kontrollen nutzt.",
        "Rechenstrategien und Kopfrechnen": "Verglichen wird, ob _ Zahlbeziehungen und Hilfsaufgaben beim flexiblen Kopfrechnen zunehmend sicher nutzt.",
        Sachaufgaben: "Dokumentiert wird, ob _ auch mehrschrittige Sachaufgaben mit passenden Rechnungen und nachvollziehbarer Antwort löst.",
        Größen: "Überprüft wird, ob _ passende Einheiten auswählt, Messwerte vergleicht und einfache Umwandlungen sicherer ausführt.",
        Geometrie: "Dokumentiert wird, ob _ geometrische Eigenschaften erkennt und Zeichnungen oder Konstruktionen zunehmend genau ausführt.",
        "Daten, Tabellen und Diagramme": "Überprüft wird, ob _ Informationen aus Tabellen und Diagrammen korrekt entnimmt, vergleicht und beschreibt."
      }
    }
  };

  Object.entries(evaluationsergaenzungen).forEach(([areaName, gradeLevels]) => {
    Object.entries(gradeLevels).forEach(([gradeLevel, topics]) => {
      Object.entries(topics).forEach(([topicName, evaluation]) => {
        const target = areas[areaName]?.[gradeLevel]?.[topicName];
        if (!target || !Array.isArray(target.evaluation) || target.evaluation.includes(evaluation)) return;
        target.evaluation.push(evaluation);
      });
    });
  });

  const variantAreas = new Set([
    "Emotionalität, Sozialverhalten",
    "Sprache / Kommunikation",
    "Motorik",
    "Wahrnehmung",
    "Kognition",
    "Mathematik",
    "Weitere Fächer",
    "ggf. Herkunftssprachlicher Unterricht"
  ]);

  const bausteinVarianten = {
    "_ zeigt Gefühle im Schulalltag deutlich.": [
      "Im Schulalltag zeigt _ Gefühle deutlich.",
      "Gefühle werden im Schulalltag bei _ deutlich sichtbar."
    ],
    "_ benötigt Unterstützung, um Gefühle angemessen zu regulieren.": [
      "Bei der Regulation von Gefühlen braucht #er/sie# noch Unterstützung.",
      "In emotional belastenden Situationen fällt die Regulation noch schwer."
    ],
    "_ beruhigt sich mit verlässlicher Begleitung zunehmend schneller.": [
      "Mit verlässlicher Begleitung beruhigt sich _ zunehmend schneller.",
      "Ruhige Begleitung hilft #ihm/ihr#, schneller wieder zur Ruhe zu finden."
    ],
    "_ benötigt in Konfliktsituationen noch Unterstützung.": [
      "In Konfliktsituationen braucht #er/sie# noch Unterstützung.",
      "Konfliktsituationen gelingen #ihm/ihr# mit klarer Begleitung besser."
    ],
    "_ kann eigene Anteile am Konflikt mit Hilfe erkennen.": [
      "Mit Hilfe kann _ eigene Anteile am Konflikt erkennen.",
      "Eigene Anteile an Konflikten erkennt _ mit ruhiger Begleitung."
    ],
    "_ hält bekannte Regeln mit Erinnerung ein.": [
      "Bekannte Regeln hält _ mit Erinnerung ein.",
      "Mit kurzen Erinnerungen kann _ bekannte Regeln einhalten."
    ],
    "_ nimmt Kontakt zu Mitschülerinnen und Mitschülern mit Unterstützung auf.": [
      "Mit Unterstützung nimmt _ Kontakt zu Mitschülerinnen und Mitschülern auf.",
      "Kontakt zu Mitschülerinnen und Mitschülern gelingt #ihm/ihr# mit Begleitung leichter."
    ],
    "_ reagiert bei Misserfolg noch schnell enttäuscht oder verärgert.": [
      "Bei Misserfolg reagiert _ noch schnell enttäuscht oder verärgert.",
      "Misserfolge lösen bei _ noch schnell Enttäuschung oder Verärgerung aus."
    ],
    "Gefühle wahrnehmen und angemessen benennen.": [
      "Gefühle wahrnehmen und angemessen benennen.",
      "Eigene Gefühle mit passenden Begriffen ausdrücken."
    ],
    "Konflikte zunehmend verbal klären.": [
      "Konflikte zunehmend verbal klären.",
      "Verbale Klärungswege in Konflikten nutzen."
    ],

    "_ versteht kurze Arbeitsaufträge mit Unterstützung.": [
      "Kurze Arbeitsaufträge versteht _ mit Unterstützung.",
      "Mit kurzer Klärung kann _ einfache Arbeitsaufträge besser verstehen."
    ],
    "_ benötigt Wiederholungen oder zusätzliche Visualisierungen.": [
      "Wiederholungen oder zusätzliche Visualisierungen erleichtern #ihm/ihr# das Verstehen.",
      "Bei mündlichen Aufträgen helfen #ihm/ihr# Wiederholungen und Visualisierungen."
    ],
    "_ nutzt bekannte Wörter in vertrauten Situationen.": [
      "Bekannte Wörter nutzt _ in vertrauten Situationen.",
      "In vertrauten Situationen greift _ auf bekannte Wörter zurück."
    ],
    "_ bildet einfache Sätze mit Unterstützung.": [
      "Einfache Sätze bildet _ mit Unterstützung.",
      "Mit Satzmustern kann _ einfache Sätze verständlicher bilden."
    ],
    "_ beteiligt sich in vertrauten Situationen am Gespräch.": [
      "In vertrauten Situationen beteiligt sich _ am Gespräch.",
      "An Gesprächen beteiligt sich _ in vertrauten Situationen zunehmend."
    ],

    "_ zeigt bei feinmotorischen Aufgaben noch Unsicherheiten.": [
      "Bei feinmotorischen Aufgaben zeigt _ noch Unsicherheiten.",
      "Feinmotorische Aufgaben gelingen #ihm/ihr# noch nicht durchgängig sicher."
    ],
    "_ benötigt Unterstützung beim Schneiden, Kleben oder Falten.": [
      "Beim Schneiden, Kleben oder Falten braucht #er/sie# noch Unterstützung.",
      "Schneide-, Klebe- und Faltaufgaben gelingen mit Anleitung besser."
    ],
    "_ schreibt noch mit wechselnder Druckstärke oder Linienführung.": [
      "Beim Schreiben wechseln Druckstärke oder Linienführung noch.",
      "Druckstärke und Linienführung sind beim Schreiben noch nicht durchgängig stabil."
    ],
    "_ beteiligt sich an Bewegungsangeboten mit Ermutigung.": [
      "Mit Ermutigung beteiligt sich _ an Bewegungsangeboten.",
      "Bewegungsangebote nimmt _ mit Zuspruch eher an."
    ],
    "Feinmotorische Bewegungen sicherer ausführen.": [
      "Feinmotorische Bewegungen sicherer ausführen.",
      "Arbeitsmaterial gezielter und kontrollierter einsetzen."
    ],

    "_ benötigt Unterstützung beim genauen Hinsehen und Vergleichen.": [
      "Beim genauen Hinsehen und Vergleichen braucht #er/sie# noch Unterstützung.",
      "Genaues Hinsehen und Vergleichen gelingen mit klaren Markierungen besser."
    ],
    "_ zeigt Unsicherheiten bei der Unterscheidung ähnlicher Formen, Zeichen oder Buchstaben.": [
      "Ähnliche Formen, Zeichen oder Buchstaben unterscheidet _ noch unsicher.",
      "Bei ähnlichen Formen, Zeichen oder Buchstaben zeigt _ noch Unsicherheiten."
    ],
    "_ benötigt Unterstützung beim genauen Hinhören.": [
      "Beim genauen Hinhören braucht #er/sie# noch Unterstützung.",
      "Genaues Hinhören gelingt #ihm/ihr# mit reduzierter Geräuschkulisse besser."
    ],
    "_ unterscheidet ähnlich klingende Laute noch unsicher.": [
      "Ähnlich klingende Laute unterscheidet _ noch unsicher.",
      "Bei ähnlich klingenden Lauten braucht #er/sie# noch genaue Hörimpulse."
    ],
    "Visuelle Details genauer wahrnehmen.": [
      "Visuelle Details genauer wahrnehmen.",
      "Unterschiede und Gemeinsamkeiten genauer erkennen."
    ],

    "_ benötigt Wiederholungen, um neue Inhalte zu sichern.": [
      "Wiederholungen helfen #ihm/ihr#, neue Inhalte zu sichern.",
      "Neue Inhalte sichert _ mit Wiederholungen und Visualisierungen besser."
    ],
    "_ merkt sich kurze Arbeitsaufträge besser mit visueller Unterstützung.": [
      "Kurze Arbeitsaufträge merkt sich _ mit visueller Unterstützung besser.",
      "Visuelle Unterstützung erleichtert #ihm/ihr# das Behalten kurzer Arbeitsaufträge."
    ],
    "_ nutzt Lernstrategien noch nicht durchgängig selbstständig.": [
      "Lernstrategien nutzt _ noch nicht durchgängig selbstständig.",
      "Bekannte Strategien werden noch nicht durchgängig eigenständig eingesetzt."
    ],
    "_ probiert Lösungswege mit Ermutigung aus.": [
      "Mit Ermutigung probiert _ Lösungswege aus.",
      "Lösungswege erprobt _ eher, wenn die Aufgabe begleitet wird."
    ],
    "Merkhilfen gezielt nutzen.": [
      "Merkhilfen gezielt nutzen.",
      "Symbole, Merkkarten oder Notizen als Gedächtnisstütze einsetzen."
    ],

    "_ orientiert sich im bekannten Zahlenraum mit Material.": [
      "Mit Material orientiert sich _ im bekannten Zahlenraum.",
      "Im bekannten Zahlenraum gelingt die Orientierung mit Anschauungsmaterial besser."
    ],
    "_ erkennt Zahlbeziehungen bei anschaulicher Darstellung.": [
      "Bei anschaulicher Darstellung erkennt _ Zahlbeziehungen.",
      "Anschauliche Darstellungen helfen #ihm/ihr#, Zahlbeziehungen zu erkennen."
    ],
    "_ benötigt noch Unterstützung, um Zahlen sicher zu vergleichen.": [
      "Beim sicheren Vergleichen von Zahlen braucht #er/sie# noch Unterstützung.",
      "Zahlen vergleicht _ mit Material und Zahlenstrahl zunehmend genauer."
    ],
    "_ löst Plusaufgaben mit Material.": [
      "Plusaufgaben löst _ mit Material.",
      "Mit Anschauungsmaterial kann _ Plusaufgaben bearbeiten."
    ],
    "_ nutzt beim Addieren noch häufig zählende Strategien.": [
      "Beim Addieren nutzt _ noch häufig zählende Strategien.",
      "Zählende Strategien stehen beim Addieren noch deutlich im Vordergrund."
    ],
    "_ versteht einfache Sachaufgaben mit Unterstützung.": [
      "Einfache Sachaufgaben versteht _ mit Unterstützung.",
      "Mit Handlung oder Bild kann _ einfache Sachaufgaben besser erfassen."
    ],
    "_ orientiert sich im größeren Zahlenraum mit Unterstützung.": [
      "Im größeren Zahlenraum orientiert sich _ mit Unterstützung.",
      "Mit Zahlenstrahl oder Stellenwerttafel gelingt die Orientierung im größeren Zahlenraum besser."
    ],
    "_ nutzt Rechenstrategien noch nicht durchgängig selbstständig.": [
      "Rechenstrategien nutzt _ noch nicht durchgängig selbstständig.",
      "Bekannte Rechenstrategien werden noch nicht regelmäßig eigenständig angewendet."
    ],
    "Zahlen im bekannten Zahlenraum sicherer darstellen und vergleichen.": [
      "Zahlen im bekannten Zahlenraum sicherer darstellen und vergleichen.",
      "Zahlbeziehungen im bekannten Zahlenraum erkennen und nutzen."
    ],
    "Rechenwege nachvollziehbar darstellen.": [
      "Rechenwege nachvollziehbar darstellen.",
      "Eigene Rechenwege erklären und vergleichen."
    ],

    "_ beteiligt sich mit Unterstützung am Fachunterricht.": [
      "Mit Unterstützung beteiligt sich _ am Fachunterricht.",
      "Am Fachunterricht beteiligt sich _ mit passenden Hilfen eher."
    ],
    "_ benötigt klare Arbeitsaufträge und passende Hilfen.": [
      "Klare Arbeitsaufträge und passende Hilfen unterstützen #ihn/sie# im Fachunterricht.",
      "Bei fachlichen Aufgaben helfen #ihm/ihr# klare Arbeitsaufträge und passende Hilfen."
    ],
    "_ erschließt sachunterrichtliche Inhalte mit Unterstützung.": [
      "Sachunterrichtliche Inhalte erschließt _ mit Unterstützung.",
      "Mit Anschauung und sprachlicher Vorentlastung kann _ sachunterrichtliche Inhalte besser erfassen."
    ],
    "_ zeigt Interesse an ausgewählten fachlichen Inhalten.": [
      "An ausgewählten fachlichen Inhalten zeigt _ Interesse.",
      "Ausgewählte Unterrichtsinhalte sprechen _ erkennbar an."
    ],
    "Sich aktiver am Fachunterricht beteiligen.": [
      "Sich aktiver am Fachunterricht beteiligen.",
      "Fachliche Beiträge mit Unterstützung einbringen."
    ],

    "_ nutzt vorhandene sprachliche Kompetenzen mit Unterstützung.": [
      "Mit Unterstützung nutzt _ vorhandene sprachliche Kompetenzen.",
      "Vorhandene sprachliche Kompetenzen kann _ mit Hilfen einbringen."
    ],
    "_ benötigt Hilfe beim Verwenden passender Wörter und Satzmuster.": [
      "Beim Verwenden passender Wörter und Satzmuster braucht #er/sie# noch Hilfe.",
      "Passende Wörter und Satzmuster nutzt _ mit sprachlicher Vorentlastung besser."
    ],
    "_ bearbeitet Lese- und Schreibaufgaben mit Unterstützung.": [
      "Lese- und Schreibaufgaben bearbeitet _ mit Unterstützung.",
      "Mit kurzen Hilfen kann _ Lese- und Schreibaufgaben bearbeiten."
    ],
    "_ nutzt bekannte Wörter und Strukturen zunehmend sicher.": [
      "Bekannte Wörter und Strukturen nutzt _ zunehmend sicher.",
      "In vertrauten sprachlichen Aufgaben greift _ zunehmend auf bekannte Strukturen zurück."
    ],
    "Inhalte verständlicher ausdrücken.": [
      "Inhalte verständlicher ausdrücken.",
      "Gedanken mit bekannten Satzmustern klarer formulieren."
    ]
  };

  const istStandErgaenzungen = {
    "Emotionalität, Sozialverhalten": {
      Emotionsregulation: [
        "_ benennt eigene Gefühle in ruhigen Situationen mit Unterstützung.",
        "Bei emotionaler Belastung benötigt #er/sie# noch Zeit und klare Orientierung.",
        "Nach einer kurzen Entlastung kann _ mit Begleitung wieder an die Situation anknüpfen."
      ],
      Konfliktverhalten: [
        "In Konflikten beschreibt _ die eigene Sichtweise mit Unterstützung.",
        "Stopp-Signale oder vereinbarte Gesprächsschritte werden noch nicht sicher genutzt.",
        "Nach einer ruhigen Klärung kann _ wieder eher in die gemeinsame Situation zurückfinden."
      ],
      Regelverhalten: [
        "_ orientiert sich an Regeln, wenn Erwartungen sichtbar und kurz erinnert werden.",
        "In Übergängen oder offenen Situationen braucht #er/sie# noch klare Hinweise.",
        "Nach Erinnerung findet _ zunehmend zum vereinbarten Verhalten zurück."
      ],
      Kontaktverhalten: [
        "_ nimmt in vertrauten Situationen eher Kontakt zu anderen Kindern auf.",
        "Offene Kontaktsituationen verunsichern #ihn/sie# noch.",
        "Mit Satzanfängen oder klaren Rollen gelingt die Beteiligung sicherer."
      ],
      Frustrationstoleranz: [
        "Bei Fehlern oder Misserfolg unterbricht _ die Arbeit noch häufig.",
        "Erreichbare Teilschritte erleichtern #ihm/ihr# das Weiterarbeiten.",
        "Nach Ermutigung kann _ einen nächsten Arbeitsschritt wieder aufnehmen."
      ]
    },
    "Lern- und Leistungsverhalten": {
      Aufgabenbeginn: [
        "_ beginnt bekannte Aufgaben nach kurzer Orientierung zunehmend selbstständiger.",
        "Bei offenen Aufgabenformaten benötigt #er/sie# noch klare Startimpulse.",
        "Mit visualisierten Arbeitsschritten findet _ leichter in den ersten Arbeitsschritt."
      ],
      Konzentration: [
        "_ bleibt bei überschaubaren Aufgabenphasen zunehmend besser bei der Sache.",
        "Bei längeren Arbeitsphasen lässt die Aufmerksamkeit noch deutlich nach.",
        "Eine ruhige Arbeitsumgebung und klare Zeitabschnitte unterstützen #ihn/sie#."
      ],
      Ausdauer: [
        "_ hält bei bekannten Aufgaben länger durch als bei neuen Anforderungen.",
        "Bei Schwierigkeiten braucht #er/sie# noch Ermutigung zum Weiterarbeiten.",
        "Nach kurzen Pausen kann _ die Arbeit mit Unterstützung wieder aufnehmen."
      ],
      Selbstständigkeit: [
        "_ übernimmt einzelne bekannte Arbeitsschritte bereits selbstständiger.",
        "Bei Unsicherheit unterbricht #er/sie# die Arbeit noch häufig.",
        "Mit Checkliste oder Symbolhilfe kann _ Aufgaben eigenständiger fortführen."
      ],
      Arbeitsorganisation: [
        "_ findet benötigte Materialien mit einer festen Ordnung zunehmend sicherer.",
        "Bei mehreren Arbeitsschritten verliert #er/sie# noch leicht den Überblick.",
        "Visualisierte Abläufe helfen _, Aufgaben geordneter zu bearbeiten."
      ]
    },
    "Sprache / Kommunikation": {
      "Arbeitsaufträge verstehen": [
        "_ erfasst kurze Arbeitsaufträge sicherer, wenn Schlüsselwörter hervorgehoben werden.",
        "Mehrschrittige Aufträge müssen für #ihn/sie# noch gegliedert werden.",
        "Nach Wiederholung in einfacher Sprache kann _ den Auftrag eher umsetzen."
      ],
      Wortschatz: [
        "_ verwendet bekannte Begriffe in vertrauten Unterrichtssituationen zunehmend passend.",
        "Neue Fachwörter müssen für #ihn/sie# noch bildlich oder handelnd gesichert werden.",
        "Wenn Wörter fehlen, nutzt _ Umschreibungen oder braucht sprachliche Impulse."
      ],
      Satzbildung: [
        "_ bildet mit Satzmustern zunehmend verständliche Äußerungen.",
        "In freien Äußerungen bleiben Sätze noch häufig kurz oder unvollständig.",
        "Bildimpulse und Satzanfänge helfen #ihm/ihr#, Gedanken geordneter zu formulieren."
      ],
      Gesprächsverhalten: [
        "_ beteiligt sich in kleinen Gesprächsrunden eher als in großen Gruppen.",
        "Das Aufgreifen von Beiträgen anderer gelingt noch nicht durchgängig.",
        "Mit visualisierten Gesprächsregeln kann _ Zuhören und Abwarten besser einhalten."
      ]
    },
    Motorik: {
      Feinmotorik: [
        "_ führt kleine Materialien mit zunehmender Genauigkeit, wenn die Handlung vorgemacht wird.",
        "Bei längeren feinmotorischen Aufgaben lässt die Genauigkeit noch nach.",
        "Wiederkehrende Handlungsabläufe geben #ihm/ihr# bei feinmotorischen Aufgaben Sicherheit."
      ],
      Graphomotorik: [
        "_ hält Linien und Schreibräume mit Orientierungshilfen zunehmend besser ein.",
        "Die Schreibbewegungen wirken bei längeren Schreibphasen noch angespannt.",
        "Bei kurzen, klar begrenzten Schreibaufgaben bleibt die Stiftführung sicherer."
      ],
      Grobmotorik: [
        "_ setzt einfache Bewegungsaufträge nach Vormachen zunehmend sicherer um.",
        "Bei Bewegungsaufgaben mit mehreren Schritten braucht #er/sie# noch Orientierung.",
        "In überschaubaren Bewegungsräumen beteiligt sich _ sicherer."
      ]
    },
    Wahrnehmung: {
      "Visuomotorische Koordination": [
        "Bei Nachspur-, Schneide- oder Zeichenaufgaben werden Begrenzungen noch nicht durchgängig eingehalten.",
        "Auge und Hand sind bei fein abgestimmten Aufgaben noch nicht sicher koordiniert."
      ],
      "Figur-Grund-Wahrnehmung": [
        "In unruhigen Vorlagen werden wichtige und unwichtige Informationen noch nicht sicher unterschieden.",
        "Eine Linie oder ein Suchweg wird zwischen anderen Bildelementen noch nicht zuverlässig verfolgt."
      ],
      "Wahrnehmungskonstanz": [
        "Formen oder Merkmale werden bei veränderter Darstellung noch nicht sicher wiedererkannt.",
        "Ähnliche Formen oder Zeichen werden noch häufig verwechselt."
      ],
      "Raum-Lage-Wahrnehmung": [
        "Raumlagen, Richtungen oder gedrehte Zeichen werden noch unsicher unterschieden.",
        "Lageveränderungen gedrehter oder gespiegelter Zeichen werden noch nicht durchgängig erkannt."
      ],
      "Räumliche Beziehungen": [
        "Räumliche Beziehungen werden bei mehreren gleichzeitig dargestellten Elementen noch nicht sicher erfasst.",
        "Mehrschrittige räumliche Anordnungen werden noch nicht vollständig nachvollzogen."
      ],
      "Auditive Differenzierung": [
        "Lautunterschiede werden bei normalem Sprechtempo noch nicht zuverlässig wahrgenommen.",
        "Gehörte Unterschiede werden noch nicht sicher passenden Lautbeispielen zugeordnet."
      ],
      "Auditive Gliederung / phonologische Wahrnehmung": [
        "Wörter werden beim auditiven Durchgliedern noch nicht vollständig erfasst.",
        "Die Position einzelner Laute im Wort wird noch nicht zuverlässig bestimmt."
      ],
      "Auditive Identifikation": [
        "Reime, gleiche Lautanfänge oder Klangmuster werden noch nicht sicher erkannt.",
        "Bekannte Klangmuster werden in neuen Wortbeispielen noch nicht durchgängig wiedererkannt."
      ],
      "Auditives Gedächtnis": [
        "Bei mehrteiligen Hörinformationen werden Reihenfolge und Einzelheiten noch nicht zuverlässig behalten.",
        "Einfache Rhythmen oder kurze Sätze werden noch nicht zuverlässig wiederholt."
      ],
      "Taktil-kinästhetische Wahrnehmung": [
        "Berührungen, Materialien oder Körperpositionen werden noch unsicher eingeordnet.",
        "Anspannung und Entspannung einzelner Körperteile werden noch nicht zuverlässig wahrgenommen oder unterschieden."
      ],
      "Vestibuläre Wahrnehmung": [
        "Körperlage und Bewegungsrichtung werden noch nicht zuverlässig benannt oder angezeigt.",
        "Bei Veränderungen der Kopf- oder Körperposition geht die Orientierung noch leicht verloren."
      ]
    },
    Kognition: {
      Merkfähigkeit: [
        "_ erinnert bekannte Inhalte in vertrauten Aufgabenformaten zunehmend sicherer.",
        "Nach Pausen muss der Arbeitsstand häufig erneut geklärt werden.",
        "Symbole, Notizen oder kurze Wiederholungen unterstützen #ihn/sie# beim Behalten."
      ],
      Strategien: [
        "_ nutzt bekannte Strategien eher, wenn sie sichtbar vorliegen.",
        "Bei neuen Aufgaben wählt #er/sie# passende Strategien noch nicht sicher aus.",
        "Nach Erinnerung kann _ eine bekannte Strategie wieder aufnehmen."
      ],
      Problemlösen: [
        "_ entwickelt erste Lösungsideen, wenn die Aufgabe anschaulich vorbereitet ist.",
        "Offene Problemstellungen verunsichern #ihn/sie# noch schnell.",
        "Konkretes Material und Beispiele erleichtern _ den Zugang zu neuen Lösungswegen."
      ],
      Transfer: [
        "_ erkennt Gemeinsamkeiten zwischen bekannten und neuen Aufgaben mit Unterstützung.",
        "Bei veränderten Aufgabenstellungen braucht #er/sie# noch klare Orientierung.",
        "Gelerntes wird in ähnlichen Situationen eher genutzt als in neuen Zusammenhängen."
      ]
    },
    Deutsch: {
      "Klasse 1/2": {
        "Laut-Buchstaben-Zuordnung": [
          "_ erkennt geübte Buchstaben in vertrauten Wörtern zunehmend sicherer.",
          "Bei ähnlichen Lauten oder Buchstaben braucht #er/sie# noch Unterstützung.",
          "Lautgebärden, Bilder oder Anlaute helfen _, Laute und Buchstaben zu verbinden."
        ],
        Silben: [
          "_ gliedert bekannte Wörter mit Unterstützung in Silben.",
          "Beim Lesen längerer Wörter helfen #ihm/ihr# Silbenbögen und Mitsprechen.",
          "In geübten Wörtern nutzt _ Silben zunehmend als Orientierung."
        ],
        "Wörter lesen": [
          "_ erliest kurze lautgetreue Wörter in bekannten Übungen zunehmend sicherer.",
          "Bei unbekannten Wörtern greift #er/sie# noch häufig auf lautierendes Lesen zurück.",
          "Wiederholtes Lesen hilft _, Wörter schneller wiederzuerkennen."
        ],
        "Sätze lesen": [
          "_ liest kurze Sätze sicherer, wenn Satzgrenzen deutlich sichtbar sind.",
          "Beim genauen Erfassen des Satzinhalts braucht #er/sie# noch Unterstützung.",
          "Wiederholtes Lesen kurzer Sätze gibt _ zunehmend Sicherheit."
        ],
        "Texte verstehen": [
          "_ versteht kurze Texte besser, wenn zentrale Wörter vorab geklärt werden.",
          "Bei Fragen zum Text benötigt #er/sie# noch gezielte Hinweise.",
          "Bilder, Markierungen oder Leitfragen helfen _, wichtige Informationen zu finden."
        ],
        "Leseflüssigkeit/Vorlesen": [
          "_ liest kurze geübte Abschnitte zunehmend flüssiger.",
          "Bei unbekannten Texten stockt der Lesefluss noch deutlich.",
          "Mit Vorbereitung kann _ Vorlesesituationen sicherer bewältigen."
        ],
        "Lautgetreues Schreiben": [
          "_ verschriftet einzelne bekannte Laute zunehmend sicherer.",
          "Beim Abhören der Lautfolge braucht #er/sie# noch Unterstützung.",
          "Mit Silbenklatschen oder deutlichem Sprechen gelingen lautgetreue Wörter eher."
        ],
        Abschreiben: [
          "_ orientiert sich in kurzen Vorlagen zunehmend besser.",
          "Beim Abschreiben längerer Abschnitte gehen noch Buchstaben oder Wörter verloren.",
          "Markierungen in der Vorlage helfen _, genauer abzuschreiben."
        ],
        "Eigene Sätze schreiben": [
          "_ schreibt mit Wortmaterial oder Satzanfängen zunehmend verständliche Sätze.",
          "Beim freien Formulieren braucht #er/sie# noch Unterstützung, Gedanken zu ordnen.",
          "In vertrauten Schreibanlässen bringt _ eigene Ideen eher schriftlich ein."
        ],
        Rechtschreibgrundlagen: [
          "_ beachtet einfache Wortgrenzen in geübten Sätzen zunehmend sicherer.",
          "Bekannte Rechtschreibmuster werden bei neuen Wörtern noch nicht sicher übertragen.",
          "Merkwörter und Markierungen unterstützen #ihn/sie# beim sicheren Schreiben."
        ],
        "Großschreibung/Nomen": [
          "_ erkennt Nomen in geübten Wortlisten zunehmend sicherer.",
          "Bei eigenen Sätzen wird die Großschreibung noch nicht durchgängig beachtet.",
          "Artikelproben und Markierungen helfen _, Nomen zu erkennen."
        ]
      },
      "Klasse 3/4": {
        Leseflüssigkeit: [
          "_ liest überschaubare Textabschnitte nach Vorbereitung flüssiger.",
          "Bei längeren oder unbekannten Wörtern wird der Lesefluss noch unterbrochen.",
          "Wiederholtes Lesen unterstützt #ihn/sie# dabei, Tempo und Genauigkeit zu verbessern."
        ],
        "Texte verstehen": [
          "_ entnimmt kurzen Textabschnitten mit Markierungen zunehmend wichtige Informationen.",
          "Bei längeren Texten verliert #er/sie# noch schnell den Überblick.",
          "Vorwissen, Wortklärung und Zwischenüberschriften unterstützen _ beim Textverständnis."
        ],
        Lesestrategien: [
          "_ nutzt bekannte Lesestrategien mit Erinnerung zunehmend sicherer.",
          "Das Markieren wichtiger Stellen gelingt noch nicht selbstständig.",
          "Strategiekarten helfen #ihm/ihr#, vor, während und nach dem Lesen strukturiert vorzugehen."
        ],
        "Schreiben eigener Texte": [
          "_ bringt eigene Ideen in kurzen Texten zunehmend verständlich ein.",
          "Der rote Faden bleibt bei längeren Texten noch nicht durchgängig erkennbar.",
          "Stichwörter, Schreibpläne oder Satzstarter unterstützen #ihn/sie# beim Formulieren."
        ],
        "Texte planen/überarbeiten": [
          "_ sammelt Ideen mit Unterstützung und ordnet sie in ersten Schritten.",
          "Überarbeitungshinweise werden noch nicht selbstständig genutzt.",
          "Mit Checkliste kann _ einzelne Textstellen gezielter prüfen."
        ],
        Rechtschreibstrategien: [
          "_ nutzt einzelne Rechtschreibstrategien in geübten Wörtern zunehmend sicherer.",
          "Bei freien Schreibaufgaben werden Strategien noch nicht durchgängig angewendet.",
          "Silbieren, Verlängern oder Ableiten brauchen noch sichtbare Erinnerung."
        ],
        Wortarten: [
          "_ unterscheidet geübte Wortarten mit Unterstützung zunehmend sicherer.",
          "Bei unbekannten Wörtern ist die Zuordnung zur Wortart noch unsicher.",
          "Sortieraufgaben und Markierungen helfen #ihm/ihr#, sprachliche Merkmale zu erkennen."
        ],
        "Satzglieder/Satzbau": [
          "_ erkennt einfache Satzstrukturen mit Unterstützung.",
          "Beim Umstellen oder Erweitern von Sätzen braucht #er/sie# noch Orientierung.",
          "Satzstreifen und Markierungen unterstützen _ beim Untersuchen von Satzbau."
        ],
        "Abschreiben/Kontrollieren": [
          "_ kontrolliert kurze Abschriften mit einer Vorlage zunehmend genauer.",
          "Eigene Fehler werden beim Überarbeiten noch nicht zuverlässig gefunden.",
          "Checklisten helfen #ihm/ihr#, Abschriften Schritt für Schritt zu prüfen."
        ],
        "Arbeitsverhalten Deutsch": [
          "_ beginnt Deutschaufgaben sicherer, wenn Material und erster Schritt sichtbar sind.",
          "Bei längeren Lese- oder Schreibaufgaben braucht #er/sie# noch Zwischenziele.",
          "Mit klarer Struktur bleibt _ im Deutschunterricht eher bei der Aufgabe."
        ]
      }
    },
    Mathematik: {
      "Klasse 1/2": {
        Zahlverständnis: [
          "_ erfasst kleine Mengen in strukturierten Darstellungen zunehmend sicherer.",
          "Beim Darstellen von Zahlen braucht #er/sie# noch konkretes Material.",
          "Zahlen werden in vertrauten Darstellungen sicherer erkannt als in neuen Formen."
        ],
        "Mengen/Zahlen zuordnen": [
          "_ ordnet kleinen Mengen passende Zahlen mit Unterstützung zu.",
          "Bei unstrukturierten Mengen zählt #er/sie# noch häufig einzeln nach.",
          "Würfelbilder, Fingerbilder oder Zehnerfelder erleichtern _ die Zuordnung."
        ],
        "Zahlenreihe/Zahlordnung": [
          "_ bewegt sich in bekannten Zahlenräumen zunehmend sicherer.",
          "Vorgänger, Nachfolger und Zahlennachbarn müssen noch häufig geklärt werden.",
          "Ein Zahlenstrahl unterstützt #ihn/sie# beim Ordnen und Vergleichen von Zahlen."
        ],
        Zahlzerlegung: [
          "_ legt Zahlzerlegungen mit Material zunehmend sicherer.",
          "Zerlegungen werden noch nicht zuverlässig aus dem Gedächtnis abgerufen.",
          "Strukturierte Darstellungen helfen #ihm/ihr#, Teil-Ganzes-Beziehungen zu erkennen."
        ],
        Addition: [
          "_ löst einfache Additionsaufgaben mit Material zunehmend sicherer.",
          "Beim Addieren greift #er/sie# häufig noch auf zählende Strategien zurück.",
          "Strukturierte Darstellungen helfen _, Plusaufgaben besser nachzuvollziehen."
        ],
        Subtraktion: [
          "_ versteht Minusaufgaben mit Material zunehmend besser.",
          "Beim Subtrahieren nutzt #er/sie# noch häufig zählende Schritte.",
          "Handlungssituationen und Rechenbilder unterstützen _ beim Erfassen der Subtraktion."
        ],
        Zehnerübergang: [
          "_ erkennt bei Aufgaben mit Zehnerübergang einzelne Zwischenschritte mit Unterstützung.",
          "Das Ergänzen bis zum Zehner ist noch nicht sicher automatisiert.",
          "Zehnerfeld oder Rechenrahmen helfen #ihm/ihr#, den Übergang sichtbar zu machen."
        ],
        Rechenstrategien: [
          "_ nutzt bekannte Rechenstrategien mit Erinnerung zunehmend häufiger.",
          "Bei neuen Aufgaben wird noch oft zählend gerechnet.",
          "Strategiekarten und Material helfen #ihm/ihr#, passende Rechenwege auszuwählen."
        ],
        Kopfrechnen: [
          "_ löst geübte Kopfrechenaufgaben zunehmend schneller.",
          "Zahlzerlegungen und einfache Aufgaben sind noch nicht sicher abrufbar.",
          "Kurze Wiederholungen helfen #ihm/ihr#, Ergebnisse sicherer zu speichern."
        ],
        Sachaufgaben: [
          "_ versteht einfache Sachaufgaben besser, wenn sie handelnd dargestellt werden.",
          "Wichtige Informationen werden noch nicht zuverlässig erkannt.",
          "Bilder, Markierungen oder Material helfen _, Rechengeschichten zu klären."
        ],
        "Geometrie/Formen/Muster": [
          "_ erkennt bekannte Formen in übersichtlichen Darstellungen zunehmend sicherer.",
          "Beim Fortsetzen von Mustern braucht #er/sie# noch Orientierung.",
          "Legen, Sortieren und Nachbauen helfen _, geometrische Strukturen zu erfassen."
        ],
        "Umgang mit Material": [
          "_ nutzt mathematisches Anschauungsmaterial mit klarer Anleitung zunehmend zielgerichteter.",
          "Bei freier Materialwahl ist #er/sie# noch unsicher, welches Rechenmaterial zur Aufgabe passt.",
          "Strukturierte Anordnungen mit Plättchen, Rechenrahmen oder Punktefeldern werden noch nicht sicher auf Rechnungen übertragen."
        ]
      },
      "Klasse 3/4": {
        "Zahlenraum und Zahlvorstellung": [
          "_ orientiert sich im größeren Zahlenraum mit Zahlenstrahl zunehmend sicherer.",
          "Zahlbeziehungen werden in neuen Darstellungen noch nicht sicher erkannt.",
          "Stellenwertmaterial und strukturierte Zahlbilder unterstützen #ihn/sie#."
        ],
        Stellenwertverständnis: [
          "_ stellt Zahlen mit Stellenwertmaterial zunehmend nachvollziehbar dar.",
          "Beim Bündeln und Entbündeln entstehen noch Unsicherheiten.",
          "Eine Stellenwerttafel hilft #ihm/ihr#, Zahlen genauer zu ordnen."
        ],
        "Addition und Subtraktion": [
          "_ löst Additions- und Subtraktionsaufgaben mit bekannten Hilfen zunehmend sicherer.",
          "Bei Aufgaben mit Übergängen braucht #er/sie# noch Orientierung an Zwischenschritten.",
          "Material oder Skizzen helfen _, Rechenwege nachzuvollziehen."
        ],
        "Schriftliche Rechenverfahren": [
          "_ beachtet einzelne Schritte schriftlicher Verfahren mit Unterstützung.",
          "Überträge oder Entbündelungen werden noch nicht zuverlässig berücksichtigt.",
          "Eine Schrittfolge hilft #ihm/ihr#, schriftliche Verfahren geordneter auszuführen."
        ],
        "Multiplikation und Division": [
          "_ erkennt Multiplikation und Division in anschaulichen Situationen mit Unterstützung.",
          "Einmaleinsaufgaben sind noch nicht durchgängig sicher abrufbar.",
          "Punktefelder, Reihen oder Material helfen _, Zusammenhänge zu verstehen."
        ],
        "Rechenstrategien und Kopfrechnen": [
          "_ nutzt einzelne Kopfrechenstrategien in geübten Aufgaben zunehmend sicherer.",
          "Bei komplexeren Aufgaben greift #er/sie# noch auf unsichere Rechenwege zurück.",
          "Hilfsaufgaben und Zerlegungen unterstützen _ beim flexibleren Rechnen."
        ],
        Sachaufgaben: [
          "_ entnimmt Sachaufgaben mit Markierungen zunehmend wichtige Angaben.",
          "Die passende Rechenoperation wird noch nicht sicher ausgewählt.",
          "Skizzen, Tabellen oder Handlungssituationen helfen #ihm/ihr#, Sachsituationen zu klären."
        ],
        Größen: [
          "_ ordnet bekannte Größen in Alltagssituationen zunehmend sicherer ein.",
          "Einheiten und Umwandlungen werden noch nicht zuverlässig angewendet.",
          "Messgeräte, Vergleichswerte und Tabellen unterstützen #ihn/sie# beim Arbeiten mit Größen."
        ],
        Geometrie: [
          "_ erkennt geometrische Formen und Körper in vertrauten Aufgaben zunehmend sicherer.",
          "Beim Beschreiben von Eigenschaften braucht #er/sie# noch passende Begriffe.",
          "Zeichnen, Legen oder Bauen unterstützt _ beim Erfassen geometrischer Zusammenhänge."
        ],
        "Daten, Tabellen und Diagramme": [
          "_ liest einfache Tabellen oder Diagramme mit Unterstützung.",
          "Wichtige Informationen werden in Darstellungen noch nicht sicher gefunden.",
          "Markierungen und Leitfragen helfen #ihm/ihr#, Daten gezielter zu entnehmen."
        ],
        "Arbeitsverhalten Mathematik": [
          "_ beginnt Mathematikaufgaben sicherer, wenn Material und Rechenweg sichtbar sind.",
          "Bei mehrschrittigen Aufgaben braucht #er/sie# noch klare Zwischenschritte.",
          "Mit strukturierten Hilfen bleibt _ im Mathematikunterricht eher bei der Aufgabe."
        ]
      }
    },
    "Weitere Fächer": {
      "Fachunterricht allgemein": [
        "_ beteiligt sich an fachlichen Aufgaben eher, wenn der Arbeitsauftrag klar eingegrenzt ist.",
        "Bei neuen fachlichen Inhalten benötigt #er/sie# noch Vorentlastung und Anschauung.",
        "Mit passenden Hilfen kann _ fachliche Beiträge zunehmend sicherer einbringen."
      ],
      Sachunterricht: [
        "_ erschließt Sachthemen besser, wenn Inhalte handelnd oder bildlich angeboten werden.",
        "Fachbegriffe und Zusammenhänge müssen für #ihn/sie# noch wiederholt gesichert werden.",
        "In vertrauten Themenbereichen zeigt _ Interesse und erste fachliche Sicherheit."
      ]
    },
    "ggf. Herkunftssprachlicher Unterricht": {
      "Wortschatz und Ausdruck": [
        "_ nutzt bekannte Wörter und Satzmuster in vertrauten Sprachsituationen zunehmend sicherer.",
        "Beim Formulieren neuer Inhalte braucht #er/sie# noch sprachliche Vorentlastung.",
        "Bildimpulse oder Wortfelder helfen _, Gedanken verständlicher auszudrücken."
      ],
      "Lesen und Schreiben": [
        "_ bearbeitet kurze Lese- und Schreibaufgaben mit Unterstützung zunehmend sicherer.",
        "Bei unbekannten Wörtern oder Schriftmustern braucht #er/sie# noch Orientierung.",
        "Wiederholung und bekannte Textmuster unterstützen _ beim Lesen und Schreiben."
      ]
    }
  };

  function normalizeModuleTextKey(value) {
    return String(value || "")
      .trim()
      .toLocaleLowerCase("de-DE")
      .replace(/[.!?]+$/, "")
      .replace(/\s+/g, " ");
  }

  function moduleEntryTexts(entry) {
    if (typeof entry === "string") return [entry];
    if (!entry || typeof entry !== "object") return [];
    return [entry.text, ...(Array.isArray(entry.varianten) ? entry.varianten : [])].filter(Boolean);
  }

  function appendModuleEntries(targetTopic, sourceTopic) {
    if (!targetTopic || !sourceTopic) return;
    ["istStand", "ziele", "massnahmen", "evaluation"].forEach((fieldName) => {
      if (!Array.isArray(targetTopic[fieldName]) || !Array.isArray(sourceTopic[fieldName])) return;
      const existing = new Set(targetTopic[fieldName].flatMap(moduleEntryTexts).map(normalizeModuleTextKey));
      sourceTopic[fieldName].forEach((entry) => {
        const texts = moduleEntryTexts(entry);
        const key = normalizeModuleTextKey(texts[0] || "");
        if (!key || texts.some((text) => existing.has(normalizeModuleTextKey(text)))) return;
        targetTopic[fieldName].push(entry);
        texts.forEach((text) => existing.add(normalizeModuleTextKey(text)));
      });
    });
  }

  function appendIstStandAdditions(topicNode, additions = []) {
    if (!topicNode || !Array.isArray(topicNode.istStand)) return;
    const existing = new Set(topicNode.istStand.flatMap(moduleEntryTexts).map(normalizeModuleTextKey));
    additions.forEach((addition) => {
      const text = String(addition || "").trim();
      const key = normalizeModuleTextKey(text);
      if (!text || existing.has(key)) return;
      topicNode.istStand.push(text);
      existing.add(key);
    });
  }

  function applyIstStandErgaenzungen(targetNode, additionsNode) {
    if (!targetNode || !additionsNode) return;
    if (Array.isArray(additionsNode)) {
      appendIstStandAdditions(targetNode, additionsNode);
      return;
    }
    Object.entries(additionsNode).forEach(([key, childAdditions]) => {
      applyIstStandErgaenzungen(targetNode[key], childAdditions);
    });
  }

  function applyBausteinVariants(targetAreas) {
    Object.entries(targetAreas).forEach(([areaName, areaLibrary]) => {
      if (!variantAreas.has(areaName)) return;
      const visit = (node) => {
        if (!node || typeof node !== "object") return;
        ["istStand", "ziele", "massnahmen", "evaluation"].forEach((fieldName) => {
          if (!Array.isArray(node[fieldName])) return;
          node[fieldName] = node[fieldName].map((entry) => {
            if (typeof entry !== "string") return entry;
            const variants = bausteinVarianten[entry];
            return variants ? baustein(entry, variants) : entry;
          });
        });
        Object.values(node).forEach((child) => {
          if (child && typeof child === "object" && !Array.isArray(child)) visit(child);
        });
      };
      visit(areaLibrary);
    });
  }

  const previousSpeechTopics = areas["Sprache / Kommunikation"] || {};
  const speechExpansionTopics = {
    "Aussprache / Artikulation": topic({
      istStand: [
        "_ bildet einzelne Laute noch nicht durchgängig verständlich.",
        "In längeren Äußerungen werden Laute oder Silben teilweise ausgelassen.",
        "Ähnlich klingende Laute werden beim Sprechen noch nicht sicher unterschieden.",
        "Auf Wortebene ist _ besser verständlich als in längeren Aussagen.",
        "Bei neuen oder längeren Wörtern benötigt #er/sie# noch Zeit und Rückmeldung."
      ],
      ziele: [
        "vereinbarte Laute in geübten Wörtern deutlicher bilden.",
        "Laute und Silben in kurzen Äußerungen vollständiger sprechen.",
        "die Verständlichkeit in vertrauten Sprechsituationen erhöhen.",
        "Rückmeldungen zur Aussprache annehmen und in Übungsphasen nutzen."
      ],
      massnahmen: [
        "In kurzen Sprechübungen werden Ziellaute in Wörtern und kurzen Sätzen geübt.",
        "_ erhält ruhige Rückmeldung und ein korrektes Sprachmodell ohne Sprechdruck.",
        "Bildkarten, Silbenklatschen und langsames Nachsprechen unterstützen die Lautbildung.",
        "Geübte Wörter werden in kleinen Sprechanlässen wiederholt."
      ],
      evaluation: [
        "Beobachtet wird, ob _ vereinbarte Laute in geübten Wörtern deutlicher bildet.",
        "Dokumentiert wird, ob die Verständlichkeit in kurzen Sprechsituationen zunimmt.",
        "Überprüft wird, ob Rückmeldungen zur Aussprache in Übungsphasen genutzt werden."
      ]
    }),
    "Lautwahrnehmung / phonologische Bewusstheit": topic({
      istStand: [
        "_ erkennt Reime noch nicht sicher.",
        "Wörter werden noch nicht zuverlässig in Silben gegliedert.",
        "Anlaute und Endlaute werden noch nicht durchgängig herausgehört.",
        "Ähnlich klingende Laute werden noch unsicher unterschieden.",
        "Lautfolgen gehen ohne Wiederholung noch leicht verloren."
      ],
      ziele: [
        "Reime, Silben und Anlaute in geübten Aufgaben sicherer erkennen.",
        "Wörter in Silben gliedern und Lautpositionen genauer wahrnehmen.",
        "ähnlich klingende Laute in kurzen Hörübungen unterscheiden.",
        "phonologische Aufgaben mit weniger Unterstützung bearbeiten."
      ],
      massnahmen: [
        "Reim-, Silben- und Lautübungen werden regelmäßig in kurzen Sequenzen genutzt.",
        "Wörter werden geklatscht, gelegt, gesprochen und mit Bildkarten gesichert.",
        "Ähnlich klingende Laute werden kontrastierend gehört und sortiert.",
        "_ erhält wiederkehrende Hörimpulse mit klarer Wiederholung."
      ],
      evaluation: [
        "Beobachtet wird, ob _ Reime, Silben oder Anlaute sicherer erkennt.",
        "Dokumentiert wird, ob Lautunterscheidungen in kurzen Hörübungen gelingen.",
        "Überprüft wird, ob phonologische Aufgaben mit weniger Hilfe bearbeitet werden."
      ]
    }),
    "Wortschatz / Wortbedeutung": topic({
      istStand: [
        "Der aktive Wortschatz ist in Unterrichtssituationen noch eingeschränkt.",
        "Passende Wörter werden nicht immer sicher gefunden.",
        "Neue Begriffe müssen häufig wiederholt und veranschaulicht werden.",
        "Wortbedeutungen werden noch nicht immer sicher unterschieden.",
        "Bei fehlenden Wörtern nutzt _ Umschreibungen oder benötigt sprachliche Impulse."
      ],
      ziele: [
        "geübte Wörter und Fachbegriffe in passenden Situationen nutzen.",
        "Wortbedeutungen genauer unterscheiden und mit eigenen Worten erklären.",
        "passende Wörter für eigene Gedanken zunehmend sicherer finden.",
        "Oberbegriffe und Wortfelder als Orientierung nutzen."
      ],
      massnahmen: [
        "Neue Begriffe werden mit Bildern, Gegenständen, Handlungen und Beispielsätzen gesichert.",
        "Wortfelder und Oberbegriffe werden sichtbar gesammelt und wiederholt.",
        "_ erhält Satzanfänge und Wortkarten für mündliche und schriftliche Beiträge.",
        "Geübte Wörter werden in kurzen Sprechanlässen und Aufgaben wieder angewendet."
      ],
      evaluation: [
        "Beobachtet wird, ob _ geübte Begriffe im Unterricht passender nutzt.",
        "Dokumentiert wird, ob Wortbedeutungen mit weniger Hilfe erklärt werden.",
        "Überprüft wird, ob Wortkarten und Wortfelder zunehmend selbstständiger genutzt werden."
      ]
    }),
    "Sprachverständnis / Arbeitsaufträge": topic({
      istStand: [
        "Mündliche Arbeitsaufträge werden noch nicht durchgängig sicher verstanden.",
        "Mehrteilige Aufträge müssen noch gegliedert und wiederholt werden.",
        "Einzelne Schlüsselwörter im Auftrag werden noch nicht zuverlässig erfasst.",
        "Bei längeren Erklärungen geht der Arbeitsauftrag teilweise verloren.",
        "Rückfragen werden bei Unklarheiten noch nicht sicher gestellt."
      ],
      ziele: [
        "kurze Arbeitsaufträge mit weniger Unterstützung umsetzen.",
        "Schlüsselwörter in Arbeitsaufträgen erkennen und nutzen.",
        "mehrteilige Aufträge in einzelne Handlungsschritte gliedern.",
        "bei Unklarheiten gezielt nachfragen."
      ],
      massnahmen: [
        "Arbeitsaufträge werden kurz formuliert und mit Symbolen oder Schrittkarten visualisiert.",
        "_ wiederholt zentrale Handlungsschritte mit eigenen Worten.",
        "Mehrteilige Aufträge werden gemeinsam markiert und in Einzelschritte gegliedert.",
        "Nachfrage-Sätze werden eingeführt und in Unterrichtssituationen geübt."
      ],
      evaluation: [
        "Beobachtet wird, ob _ kurze Arbeitsaufträge mit weniger Hilfe umsetzt.",
        "Dokumentiert wird, ob Schlüsselwörter und Schrittkarten genutzt werden.",
        "Überprüft wird, ob _ bei Unklarheiten gezielter nachfragt."
      ]
    }),
    "Grammatik / Satzbildung": topic({
      istStand: [
        "Äußerungen bleiben häufig kurz oder unvollständig.",
        "Satzstrukturen sind noch nicht sicher aufgebaut.",
        "Wörter werden in Sätzen nicht immer passend angeordnet.",
        "Verbformen oder Endungen werden noch nicht durchgängig sicher verwendet.",
        "Beim Bilden von Frage- oder Verbindungssätzen benötigt _ noch Satzmuster."
      ],
      ziele: [
        "einfache vollständige Sätze verständlicher bilden.",
        "Wortstellung und Verbformen in geübten Satzmustern sicherer nutzen.",
        "Fragesätze und Satzverbindungen mit Unterstützung aufbauen.",
        "eigene Aussagen mithilfe von Satzanfängen erweitern."
      ],
      massnahmen: [
        "Satzmuster, Satzstreifen und Bildimpulse werden regelmäßig genutzt.",
        "Aussagen werden gemeinsam erweitert, geordnet und modelliert.",
        "_ erhält Satzanfänge für Antworten, Fragen und Begründungen.",
        "Verbformen und Wortstellung werden in kurzen, wiederkehrenden Übungen gesichert."
      ],
      evaluation: [
        "Beobachtet wird, ob _ vollständige Sätze häufiger passend bildet.",
        "Dokumentiert wird, ob Satzmuster und Satzanfänge genutzt werden.",
        "Überprüft wird, ob Wortstellung und Verbformen in geübten Sätzen sicherer werden."
      ]
    }),
    "Erzählfähigkeit / Versprachlichen": topic({
      istStand: [
        "Erlebnisse werden noch nicht sicher in zeitlicher Reihenfolge erzählt.",
        "Handlungsabläufe werden noch nicht vollständig beschrieben.",
        "Beim Erklären eigener Lösungswege fehlen noch Zwischenschritte.",
        "Erzählungen enthalten noch nicht durchgängig Anfang, Verlauf und Ende.",
        "Beim Thema bleiben gelingt ohne Impuls noch nicht sicher."
      ],
      ziele: [
        "Erlebnisse oder Bildfolgen geordneter erzählen.",
        "Handlungsabläufe mit wichtigen Zwischenschritten beschreiben.",
        "eigene Lösungswege verständlicher versprachlichen.",
        "beim Erzählen stärker beim Thema bleiben."
      ],
      massnahmen: [
        "Bildfolgen, Erzählkarten und Reihenfolgewörter werden als Strukturhilfen genutzt.",
        "Lösungswege werden zunächst handelnd gezeigt und anschließend sprachlich begleitet.",
        "_ erhält Satzanfänge für Anfang, Verlauf und Abschluss einer Erzählung.",
        "Kurze Erzählsituationen werden vorbereitet, geübt und gemeinsam reflektiert."
      ],
      evaluation: [
        "Beobachtet wird, ob _ Abläufe geordneter erzählt.",
        "Dokumentiert wird, ob wichtige Zwischenschritte beim Versprachlichen genannt werden.",
        "Überprüft wird, ob Strukturhilfen beim Erzählen zunehmend genutzt werden."
      ]
    }),
    "Kommunikation / Gesprächsverhalten": topic({
      istStand: [
        "Sprachliche Kontaktaufnahme gelingt noch nicht sicher.",
        "Wünsche und Bedürfnisse werden noch nicht zuverlässig sprachlich geäußert.",
        "Eigene Beiträge passen noch nicht immer zum Gespräch.",
        "Zuhören und Abwarten gelingen noch nicht durchgängig.",
        "Rückfragen werden noch nicht sicher gestellt."
      ],
      ziele: [
        "Wünsche, Bedürfnisse oder Meinungen verständlicher äußern.",
        "Gesprächsregeln in kurzen Gesprächsanlässen sicherer beachten.",
        "auf Beiträge anderer passender reagieren.",
        "bei Unklarheiten Rückfragen stellen."
      ],
      massnahmen: [
        "Gesprächsregeln werden sichtbar gemacht und in kurzen Rollen geübt.",
        "_ erhält Satzanfänge für Wünsche, Meinungen und Rückfragen.",
        "Partner- und Kleingruppengespräche werden mit klaren Rollen strukturiert.",
        "Sprecherwechsel werden durch Symbole, Karten oder vereinbarte Signale unterstützt."
      ],
      evaluation: [
        "Beobachtet wird, ob _ Gesprächsregeln in kurzen Situationen sicherer nutzt.",
        "Dokumentiert wird, ob eigene Beiträge verständlicher eingebracht werden.",
        "Überprüft wird, ob Rückfragen und Reaktionen auf andere Beiträge zunehmen."
      ]
    }),
    "Stimme / Sprechweise": topic({
      istStand: [
        "Die Lautstärke ist in Gesprächssituationen noch nicht passend angepasst.",
        "Sprechtempo und Verständlichkeit sind noch nicht sicher aufeinander abgestimmt.",
        "Betonung und Sprechmelodie wirken in einzelnen Situationen noch nicht passend.",
        "In Gruppen ist die Stimme noch schwer zu regulieren.",
        "Bei Unsicherheit verändert sich die Sprechweise deutlich."
      ],
      ziele: [
        "Lautstärke und Sprechtempo situationspassender einsetzen.",
        "in kurzen Sprechanlässen verständlicher und ruhiger sprechen.",
        "Betonung und Stimme bewusster an die Situation anpassen.",
        "Rückmeldungen zur Sprechweise aufnehmen und erproben."
      ],
      massnahmen: [
        "Sprechanlässe werden kurz vorbereitet und mit klarer Situation verbunden.",
        "_ erhält Rückmeldung zu Lautstärke, Tempo und Verständlichkeit.",
        "Sprechproben werden mit Symbolen für leise, passend und laut begleitet.",
        "Kurze Vorlese- oder Erklärphasen werden in ruhigem Rahmen geübt."
      ],
      evaluation: [
        "Beobachtet wird, ob _ Lautstärke und Tempo situationspassender einsetzt.",
        "Dokumentiert wird, ob die Verständlichkeit in kurzen Sprechanlässen zunimmt.",
        "Überprüft wird, ob Rückmeldungen zur Sprechweise genutzt werden."
      ]
    }),
    "Redefluss / Wortfindung": topic({
      istStand: [
        "Beim Formulieren entstehen noch längere Pausen.",
        "Passende Wörter werden nicht immer rechtzeitig gefunden.",
        "Füllwörter oder Satzabbrüche treten noch häufig auf.",
        "Gedanken werden beim Sprechen noch nicht sicher geordnet.",
        "Bei komplexeren Inhalten benötigt _ noch Zeit zum Formulieren."
      ],
      ziele: [
        "Gedanken mithilfe von Stichwörtern geordneter formulieren.",
        "passende Wörter in vorbereiteten Sprechanlässen sicherer finden.",
        "Sätze mit weniger Abbrüchen oder Füllwörtern aufbauen.",
        "Denkzeit und Formulierungshilfen gezielt nutzen."
      ],
      massnahmen: [
        "Vor dem Sprechen werden Stichwörter, Bilder oder Satzanfänge gesammelt.",
        "_ erhält ausreichend Denkzeit und kurze, vorbereitete Sprechanlässe.",
        "Wortfindungsstrategien wie Umschreiben, Zeigen oder Auswählen werden geübt.",
        "Antworten werden zunächst in Partnerarbeit vorbereitet und danach eingebracht."
      ],
      evaluation: [
        "Beobachtet wird, ob _ Wörter in vorbereiteten Sprechanlässen sicherer findet.",
        "Dokumentiert wird, ob Pausen, Füllwörter oder Satzabbrüche abnehmen.",
        "Überprüft wird, ob Stichwörter und Denkzeit gezielt genutzt werden."
      ]
    })
  };

  const speechBlockTopicAliases = {
    "Arbeitsaufträge verstehen": "Sprachverständnis / Arbeitsaufträge",
    "Anweisungsverständnis": "Sprachverständnis / Arbeitsaufträge",
    "Sprachverständnis": "Sprachverständnis / Arbeitsaufträge",
    "Sprachverständnis / Anweisungen": "Sprachverständnis / Arbeitsaufträge",
    "Sprach- und Anweisungsverständnis": "Sprachverständnis / Arbeitsaufträge",
    "Wortschatz": "Wortschatz / Wortbedeutung",
    "Wortschatz allgemein": "Wortschatz / Wortbedeutung",
    "Wortschatz / Satzbildung": "Wortschatz / Wortbedeutung",
    "Satzbildung": "Grammatik / Satzbildung",
    "Satzbildung / Grammatik": "Grammatik / Satzbildung",
    "Satzbildung einfache Sätze": "Grammatik / Satzbildung",
    "Gesprächsverhalten": "Kommunikation / Gesprächsverhalten",
    "Gesprächsverhalten / Zuhören": "Kommunikation / Gesprächsverhalten",
    "Gesprächsverhalten / Erzählen": "Kommunikation / Gesprächsverhalten",
    "Lautwahrnehmung": "Lautwahrnehmung / phonologische Bewusstheit",
    "Aussprache": "Aussprache / Artikulation",
    "Artikulation": "Aussprache / Artikulation",
    "Artikulation / Aussprache": "Aussprache / Artikulation"
  };
  Object.entries(speechBlockTopicAliases).forEach(([legacyTopic, targetTopic]) => {
    appendModuleEntries(speechExpansionTopics[targetTopic], previousSpeechTopics[legacyTopic]);
  });

  areas["Sprache / Kommunikation"] = speechExpansionTopics;

  applyIstStandErgaenzungen(areas, istStandErgaenzungen);
  applyBausteinVariants(areas);

  return { meta, sentenceStarters, areas };
})();
