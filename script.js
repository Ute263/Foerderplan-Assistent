const DATA = window.FOERDERPLAN_DATA;
const app = document.querySelector("#app");
const printRoot = document.querySelector("#print-root");
const printDialog = document.querySelector("#print-dialog");
const printNameInput = document.querySelector("#temporary-print-name");

const emptyText = () => ({ stand: "", goals: "", measures: "", evaluation: "" });
const allRows = () => [...DATA.developmentRows, ...DATA.subjectRows];
const rowForKey = (key) => allRows().find((row) => row.key === key);
const areaForKey = (key) => DATA.competencyAreas[key];
const areaList = () => allRows().map((row) => areaForKey(row.key)).filter(Boolean);

let draft = createEmptyDraft();
let statusMessage = "";
let currentStep = "start";

function createEmptyDraft() {
  const grid = {};
  allRows().forEach((row) => {
    grid[row.key] = emptyText();
  });

  return {
    id: makeId(),
    updatedAt: new Date().toISOString(),
    planType: "foerderplan",
    title: "Förderplan",
    anonymousId: "",
    periodFrom: "",
    periodTo: "",
    klasse: "",
    focus: "",
    sbj: "",
    bildungsgang: "",
    selectedAreas: [],
    ratings: {},
    subareaNotes: {},
    proposalDrafts: {},
    acceptedSuggestionIds: [],
    manualSuggestions: [],
    freeSubjects: {},
    grid,
    agreements: {
      student: "",
      parents: "",
      team: "",
      signatures: "",
      principalDate: ""
    }
  };
}

function makeId() {
  if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
  return `anonymous-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function render() {
  renderStart();
}

function setStep(step, renderer) {
  currentStep = step;
  renderer();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function progress(stepNumber) {
  const steps = ["Start", "Grunddaten", "Bereiche", "Kompetenz-Check", "Vorschläge", "Raster", "Ausgabe"];
  return `
    <nav class="progress" aria-label="Arbeitsstand">
      ${steps.map((step, index) => `<span class="${index + 1 <= stepNumber ? "active" : ""}">${escapeHtml(step)}</span>`).join("")}
    </nav>
  `;
}

function renderStart() {
  app.innerHTML = `
    <section class="panel stack">
      ${progress(1)}
      <div>
        <h2>Förderplan-Assistent</h2>
        <p class="hint">
          Die App unterstützt beim anonymen Kompetenz-Check und beim Formulieren kurzer Vorschläge für das verbindliche Förderplanraster.
          Sie ersetzt keine pädagogische Entscheidung und stellt keine Diagnosen.
        </p>
      </div>
      <div class="actions">
        <button class="primary" type="button" data-action="new-draft">Neuen anonymen Förderplan erstellen</button>
        <button type="button" data-action="load-view">Anonymen Entwurf laden</button>
        <button type="button" data-action="privacy">Datenschutz anzeigen</button>
      </div>
      <p class="notice">
        Die Bearbeitung erfolgt anonym. Namen werden nicht gespeichert. Der Name wird erst für den Ausdruck abgefragt und danach wieder gelöscht.
      </p>
    </section>
  `;
}

function renderPrivacyPage() {
  app.innerHTML = `
    <section class="panel stack privacy">
      ${progress(1)}
      <h2>Datenschutz</h2>
      <p>
        Diese App speichert keine echten Namen. Anonyme Entwürfe werden nur lokal im Browser gespeichert.
        Beim Löschen der Browserdaten können Entwürfe verloren gehen. Der Name wird erst für den Ausdruck
        eingegeben und danach wieder gelöscht. Es findet keine Übertragung an GitHub, eine Datenbank oder
        einen externen Dienst statt.
      </p>
      <p>
        Bitte speichern Sie fertige Ausdrucke oder PDF-Dateien mit Namen nur an einem schulisch zulässigen Speicherort.
      </p>
      <ul>
        <li>Keine Anmeldung, kein Tracking, keine externe KI-Schnittstelle.</li>
        <li>Keine Speicherung des echten Namens in localStorage, JSON-Export, URL, Cookies oder Session Storage.</li>
        <li>Vor Speichern und Export entfernt eine Schutzfunktion verbotene Namensfelder aus den Daten.</li>
      </ul>
      <div class="actions">
        <button type="button" data-action="start">Zur Startseite</button>
      </div>
    </section>
  `;
}

function renderPrivacyBox() {
  return `
    <section class="panel privacy">
      <h2>Datenschutz</h2>
      <p>
        Diese App speichert keine echten Namen. Anonyme Entwürfe werden nur lokal im Browser gespeichert.
        Der Name wird erst für den Ausdruck eingegeben und danach wieder gelöscht. Es findet keine Übertragung
        an GitHub, eine Datenbank oder einen externen Dienst statt.
      </p>
    </section>
  `;
}

function renderSetup() {
  app.innerHTML = `
    <form class="panel stack" data-form="setup">
      ${progress(2)}
      <div class="section-title">
        <div>
          <h2>Neuer anonymer Förderplan</h2>
          <p class="hint">Bitte keine Namen eingeben. Die Kennung dient nur zum Wiederfinden des anonymen Entwurfs.</p>
        </div>
        <span class="badge">Grunddaten</span>
      </div>
      <div class="grid two">
        <label class="field">
          <span>Anonyme Kennung</span>
          <input name="anonymousId" required placeholder="z. B. Kind A, Fuchs, Nr. 04" value="${escapeHtml(draft.anonymousId)}" />
        </label>
        <label class="field">
          <span>Förderplan-Art</span>
          <select name="planType">
            <option value="foerderplan" ${draft.planType === "foerderplan" ? "selected" : ""}>Förderplan</option>
            <option value="praeventiv" ${draft.planType === "praeventiv" ? "selected" : ""}>Präventiver Förderplan</option>
          </select>
        </label>
        <label class="field">
          <span>Zeitraum von</span>
          <input name="periodFrom" type="date" value="${escapeHtml(draft.periodFrom)}" />
        </label>
        <label class="field">
          <span>Zeitraum bis</span>
          <input name="periodTo" type="date" value="${escapeHtml(draft.periodTo)}" />
        </label>
        <label class="field">
          <span>Klasse optional</span>
          <input name="klasse" value="${escapeHtml(draft.klasse)}" />
        </label>
        <label class="field">
          <span>Förderschwerpunkt optional</span>
          <input name="focus" value="${escapeHtml(draft.focus)}" />
        </label>
        <label class="field">
          <span>Sbj. optional</span>
          <input name="sbj" value="${escapeHtml(draft.sbj)}" />
        </label>
        <label class="field">
          <span>Bildungsgang optional</span>
          <input name="bildungsgang" value="${escapeHtml(draft.bildungsgang)}" />
        </label>
      </div>
      <p class="notice">Der echte Name wird hier nicht abgefragt. Klasse, Förderschwerpunkt, Sbj. und Bildungsgang sind optional.</p>
      <div class="actions">
        <button class="primary" type="submit">Bereiche auswählen</button>
        <button type="button" data-action="start">Zurück</button>
      </div>
    </form>
  `;
}

function renderAreaSelection() {
  const checkboxes = areaList().map((area) => `
    <div class="check-card">
      <label>
        <input type="checkbox" name="area" value="${area.id}" ${draft.selectedAreas.includes(area.id) ? "checked" : ""} />
        <strong>${escapeHtml(area.label)}</strong>
      </label>
    </div>
  `).join("");

  app.innerHTML = `
    <form class="panel stack" data-form="areas">
      ${progress(3)}
      <div class="section-title">
        <div>
          <h2>Welche Bereiche sollen bearbeitet werden?</h2>
          <p class="hint">Es müssen nicht alle Bereiche ausgefüllt werden. Wählen Sie nur die Bereiche aus, die aktuell relevant sind.</p>
        </div>
        <span class="badge">Bereiche</span>
      </div>
      <div class="checkbox-grid">${checkboxes}</div>
      <div class="actions">
        <button class="primary" type="submit">Kompetenz-Check starten</button>
        <button type="button" data-action="setup">Zurück</button>
      </div>
    </form>
  `;
}

function renderCompetencyCheck() {
  const selected = draft.selectedAreas.length ? draft.selectedAreas : [];
  app.innerHTML = `
    <section class="stack">
      <div class="panel section-title">
        <div>
          ${progress(4)}
          <h2>Kompetenz-Check</h2>
          <p class="hint">
            Bewerten Sie nur Beobachtbares. „+“ fließt als Stärke ein, „o“ und „-“ können Fördervorschläge auslösen, „n. b.“ wird ignoriert.
          </p>
        </div>
        <span class="badge">${selected.length} Bereich${selected.length === 1 ? "" : "e"}</span>
      </div>
      ${selected.map(renderCompetencyArea).join("")}
      <div class="panel actions">
        <button class="primary" type="button" data-action="suggestions">Mögliche Förderschwerpunkte anzeigen</button>
        <button type="button" data-action="areas">Bereichsauswahl ändern</button>
      </div>
    </section>
  `;
}

function renderCompetencyArea(areaKey) {
  const area = areaForKey(areaKey);
  if (!area) return "";

  if (area.freeMode) return renderFreeModeArea(area);

  return `
    <article class="area-card">
      <div class="section-title">
        <div>
          <h2>${escapeHtml(area.label)}</h2>
          <p class="hint">Alle Formulierungen bleiben anonym: „_“ für den Vornamen und Pronomen als Platzhalter.</p>
        </div>
      </div>
      ${area.subareas.map((sub) => renderSubarea(area, sub)).join("")}
    </article>
  `;
}

function renderSubarea(area, sub) {
  const note = draft.subareaNotes[sub.id] || { note: "", support: "", priority: "mittel" };
  return `
    <section class="subarea">
      <div class="section-title">
        <h3>${escapeHtml(sub.label)}</h3>
        <span class="badge">${sub.competencies.length} Kompetenzen</span>
      </div>
      <div class="competency-table" role="table" aria-label="${escapeHtml(sub.label)}">
        <div class="competency-head" role="row">
          <span>Kompetenz</span>
          ${DATA.ratingOptions.map((option) => `<span title="${escapeHtml(option.description)}">${escapeHtml(option.label)}</span>`).join("")}
        </div>
        ${sub.competencies.map((item) => renderCompetencyRow(item)).join("")}
      </div>
      <div class="grid three subarea-fields">
        <label class="field">
          <span>kurze Beobachtung</span>
          <textarea data-subarea-note="${sub.id}" data-note-field="note" placeholder="Optional, anonym">${escapeHtml(note.note || "")}</textarea>
        </label>
        <label class="field">
          <span>bisher hilfreiche Unterstützung</span>
          <textarea data-subarea-note="${sub.id}" data-note-field="support" placeholder="Optional, anonym">${escapeHtml(note.support || "")}</textarea>
        </label>
        <label class="field">
          <span>Priorität</span>
          <select data-subarea-note="${sub.id}" data-note-field="priority">
            ${DATA.priorityOptions.map((option) => `<option value="${option.value}" ${note.priority === option.value ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
          </select>
        </label>
      </div>
    </section>
  `;
}

function renderCompetencyRow(item) {
  const rating = draft.ratings[item.id]?.value || "";
  return `
    <div class="competency-row" role="row">
      <span>${escapeHtml(item.label)}</span>
      ${DATA.ratingOptions.map((option) => `
        <label title="${escapeHtml(option.description)}">
          <input type="radio" name="rating-${item.id}" value="${option.value}" data-rating="${item.id}" ${rating === option.value ? "checked" : ""} />
          <span>${escapeHtml(option.label)}</span>
        </label>
      `).join("")}
    </div>
  `;
}

function renderFreeModeArea(area) {
  const text = draft.grid[area.rasterRow] || emptyText();
  return `
    <article class="area-card">
      <div class="section-title">
        <div>
          <h2>${escapeHtml(area.label)}</h2>
          <p class="hint">${area.hsuHint ? escapeHtml(area.hsuHint) : "Freier Modus für fachbezogene Beobachtungen ohne erzwungene Textbausteine."}</p>
        </div>
      </div>
      <div class="grid two">
        <label class="field">
          <span>Fach / Fachbereich</span>
          <input data-free="${area.rasterRow}" data-column="subject" value="${escapeHtml(draft.freeSubjects?.[area.rasterRow]?.subject || "")}" />
        </label>
        <label class="field">
          <span>Beobachtung</span>
          <textarea data-free="${area.rasterRow}" data-column="stand">${escapeHtml(text.stand || "")}</textarea>
        </label>
        <label class="field">
          <span>Ziel</span>
          <textarea data-free="${area.rasterRow}" data-column="goals">${escapeHtml(text.goals || "")}</textarea>
        </label>
        <label class="field">
          <span>Maßnahme</span>
          <textarea data-free="${area.rasterRow}" data-column="measures">${escapeHtml(text.measures || "")}</textarea>
        </label>
        <label class="field">
          <span>Evaluation</span>
          <textarea data-free="${area.rasterRow}" data-column="evaluation">${escapeHtml(text.evaluation || "")}</textarea>
        </label>
      </div>
    </article>
  `;
}

function renderSuggestionsView() {
  const recommendations = getRecommendations();
  app.innerHTML = `
    <section class="stack">
      <div class="panel section-title">
        <div>
          ${progress(5)}
          <h2>Mögliche Förderschwerpunkte</h2>
          <p class="hint">Empfohlen werden höchstens drei Schwerpunkte. Übernahme erfolgt nur durch Ihre Entscheidung.</p>
        </div>
        <span class="badge">${recommendations.length} Vorschlag${recommendations.length === 1 ? "" : "e"}</span>
      </div>
      ${recommendations.length ? recommendations.map(renderSuggestionCard).join("") : renderNoSuggestions()}
      ${renderManualSuggestion()}
      <div class="panel actions">
        <button class="primary" type="button" data-action="raster">Raster anzeigen</button>
        <button type="button" data-action="competencies">Kompetenz-Check erneut öffnen</button>
      </div>
    </section>
  `;
}

function renderNoSuggestions() {
  return `<p class="panel notice">Es wurde noch kein Schwerpunkt mit ausreichender Punktzahl gefunden. Sie können manuell ergänzen oder einzelne Bewertungen anpassen.</p>`;
}

function renderSuggestionCard(rec) {
  const proposal = proposalForRecommendation(rec);
  const accepted = draft.acceptedSuggestionIds.includes(rec.id);
  return `
    <article class="area-card suggestion-card" data-suggestion-card="${rec.id}">
      <div class="section-title">
        <div>
          <h2>${escapeHtml(rec.label)}</h2>
          <p class="hint">${escapeHtml(rowForKey(rec.rasterRow)?.label || rec.rasterRow)} · Punktwert ${rec.score}</p>
        </div>
        <label class="toggle-line">
          <input type="checkbox" data-accept-focus="${rec.id}" ${accepted ? "checked" : ""} />
          diesen Schwerpunkt übernehmen
        </label>
      </div>
      <div class="suggestion-grid">
        ${DATA.columns.map((column) => `
          <label class="suggestion-box">
            <span>${escapeHtml(DATA.columnLabels[column])}</span>
            <textarea data-proposal="${rec.id}" data-column="${column}">${escapeHtml(proposal[column] || "")}</textarea>
          </label>
        `).join("")}
      </div>
      <div class="actions">
        <button type="button" data-action="accept-proposal" data-id="${rec.id}">Vorschlag übernehmen</button>
        <button type="button" data-action="edit-proposal" data-id="${rec.id}">Text bearbeiten</button>
        <button type="button" data-action="alternative" data-id="${rec.id}">Alternative vorschlagen</button>
        <button type="button" data-action="clear-proposal" data-id="${rec.id}">Feld leeren</button>
        <button type="button" data-action="reject-proposal" data-id="${rec.id}">Nicht übernehmen</button>
      </div>
    </article>
  `;
}

function renderManualSuggestion() {
  return `
    <section class="panel stack">
      <div class="section-title">
        <h2>Manuell ergänzen</h2>
        <span class="badge">optional</span>
      </div>
      <p class="hint">Nutzen Sie diesen Bereich, wenn ein Schwerpunkt fachlich wichtig ist, aber nicht automatisch empfohlen wurde.</p>
      <div class="grid two">
        <label class="field">
          <span>Rasterzeile</span>
          <select id="manual-row">
            ${allRows().map((row) => `<option value="${row.key}">${escapeHtml(row.label)}</option>`).join("")}
          </select>
        </label>
        <label class="field">
          <span>Schwerpunkt</span>
          <input id="manual-label" placeholder="z. B. Lesesicherheit" />
        </label>
      </div>
      <div class="actions">
        <button type="button" data-action="add-manual">Manuellen Schwerpunkt ergänzen</button>
      </div>
    </section>
  `;
}

function getRecommendations() {
  const tagScores = {};
  const strengthsByRow = {};
  Object.values(DATA.competencyAreas).forEach((area) => {
    if (!area.subareas) return;
    area.subareas.forEach((sub) => {
      const priority = draft.subareaNotes[sub.id]?.priority || "mittel";
      const priorityBonus = priority === "hoch" ? 2 : priority === "mittel" ? 1 : 0;
      sub.competencies.forEach((item) => {
        const value = draft.ratings[item.id]?.value;
        if (!value || value === "nb") return;
        if (value === "+") {
          if (!strengthsByRow[area.rasterRow]) strengthsByRow[area.rasterRow] = [];
          strengthsByRow[area.rasterRow].push(item.label);
          return;
        }
        const base = value === "-" ? 2 : 1;
        item.tags.forEach((tag) => {
          const scoreKey = `${area.id}:${tag}`;
          if (!tagScores[scoreKey]) tagScores[scoreKey] = { score: 0, areaId: area.id, rasterRow: area.rasterRow, labels: [] };
          tagScores[scoreKey].score += base + priorityBonus;
          tagScores[scoreKey].labels.push(item.label);
        });
      });
    });
  });

  const recommendations = [];
  Object.values(DATA.competencyAreas).forEach((area) => {
    area.suggestionRules?.forEach((rule) => {
      const score = rule.conditionTags.reduce((sum, tag) => sum + (tagScores[`${area.id}:${tag}`]?.score || 0), 0);
      if (score >= 3) {
        recommendations.push({
          ...rule,
          areaId: area.id,
          score,
          strengths: strengthsByRow[rule.rasterRow] || [],
          observations: collectObservedNeeds(rule.conditionTags, area.id),
          support: collectSupport(area.id, rule.conditionTags)
        });
      }
    });
  });

  draft.manualSuggestions.forEach((manual) => recommendations.push(manual));
  return recommendations.sort((a, b) => b.score - a.score).slice(0, 3 + draft.manualSuggestions.length);
}

function collectObservedNeeds(tags, areaId) {
  const needs = [];
  Object.values(DATA.competencyAreas).forEach((area) => {
    if (areaId && area.id !== areaId) return;
    area.subareas?.forEach((sub) => {
      sub.competencies.forEach((item) => {
        const value = draft.ratings[item.id]?.value;
        if ((value === "-" || value === "o") && item.tags.some((tag) => tags.includes(tag))) needs.push(item.label);
      });
    });
  });
  return [...new Set(needs)].slice(0, 5);
}

function collectSupport(areaId, tags) {
  const supports = [];
  const area = areaForKey(areaId);
  area?.subareas?.forEach((sub) => {
    if (!sub.tags.some((tag) => tags.includes(tag))) return;
    const support = draft.subareaNotes[sub.id]?.support?.trim();
    if (support) supports.push(support);
  });
  return [...new Set(supports)].slice(0, 2);
}

function proposalForRecommendation(rec) {
  if (draft.proposalDrafts[rec.id]) return draft.proposalDrafts[rec.id];
  const strengthSentence = rec.strengths?.length ? ` Stärken zeigen sich bei ${joinList(rec.strengths.slice(0, 3))}.` : "";
  const observationSentence = rec.observations?.length ? ` Beobachtet wurden Unsicherheiten bei ${joinList(rec.observations.slice(0, 3))}.` : "";
  const supportSentence = rec.support?.length ? ` Bewährt haben sich bisher: ${joinList(rec.support)}.` : "";
  return {
    stand: `${rec.istStandTemplate || ""}${strengthSentence}${observationSentence}`.trim(),
    goals: rec.zielTemplate || "",
    measures: `${rec.massnahmenTemplate || ""}${supportSentence}`.trim(),
    evaluation: rec.evaluationTemplate || ""
  };
}

function alternativeFor(rec) {
  const current = syncProposalText(rec.id);
  return {
    stand: current.stand || `_ zeigt in vertrauten Situationen erste Ansätze im Bereich ${rec.label}, benötigt jedoch noch gezielte Unterstützung, um diese sicherer anzuwenden.`,
    goals: `_ arbeitet in den nächsten Wochen daran, ${rec.label.toLowerCase()} in überschaubaren Situationen zunehmend sicherer zu nutzen.`,
    measures: `_ erhält kurze, wiederkehrende Übungsphasen, klare Beispiele und unmittelbare Rückmeldungen. Unterstützende Materialien werden schrittweise reduziert.`,
    evaluation: "Die Entwicklung wird durch Unterrichtsbeobachtung, kurze Dokumentation und den Vergleich ausgewählter Arbeitsergebnisse überprüft."
  };
}

function joinList(items) {
  const clean = items.filter(Boolean);
  if (clean.length <= 1) return clean[0] || "";
  return `${clean.slice(0, -1).join(", ")} und ${clean.at(-1)}`;
}

function renderRasterView() {
  syncAllInputs();
  app.innerHTML = `
    <section class="stack">
      <div class="raster-toolbar">
        <div>
          ${progress(6)}
          <strong>${escapeHtml(documentTitle())}</strong>
          <div class="meta-line">Anonymer Entwurf: ${escapeHtml(draft.anonymousId || "ohne Kennung")}</div>
        </div>
        <div class="raster-actions">
          <button type="button" data-action="competencies">Kompetenz-Check</button>
          <button type="button" data-action="suggestions">Vorschläge</button>
          <button type="button" data-action="save-draft">Anonymen Entwurf speichern</button>
          <button type="button" data-action="export-draft">Anonymen Entwurf exportieren</button>
          <button type="button" data-action="duplicate-draft">Entwurf duplizieren</button>
          <button class="primary" type="button" data-action="open-print">Förderplan ausgeben / drucken</button>
        </div>
      </div>
      ${statusMessage ? `<p class="notice status">${escapeHtml(statusMessage)}</p>` : ""}
      <section class="panel">
        ${renderRasterForm()}
      </section>
      ${renderPrivacyBox()}
    </section>
  `;
}

function renderRasterForm() {
  return `
    <div data-raster>
      <div class="head-grid">
        ${renderHeadCell("Name", "", true)}
        ${renderHeadCell("Förderplan vom / bis", formatPeriod(), false, "period")}
        ${renderHeadCell("Klasse", draft.klasse, false, "klasse")}
        ${renderHeadCell("Förderschwerpunkt", draft.focus, false, "focus")}
        ${renderHeadCell("Sbj.", draft.sbj, false, "sbj")}
        ${renderHeadCell("Bildungsgang", draft.bildungsgang, false, "bildungsgang")}
      </div>
      <h2 class="plan-title">${escapeHtml(documentTitle())}</h2>
      ${renderPlanTable("Tabelle 1: Entwicklungsbereiche", DATA.developmentRows)}
      ${renderPlanTable("Tabelle 2: Fächer / Fachbereiche", DATA.subjectRows)}
      <h2>Abschlussbereich</h2>
      <div class="agreement-grid">
        ${renderAgreement("student", "Vereinbarungen mit dem/der Schüler/in")}
        ${renderAgreement("parents", "Vereinbarungen mit den Eltern/Sorgeberechtigten")}
        ${renderAgreement("team", "Vereinbarungen im Team")}
        ${renderAgreement("signatures", "Unterschriftsbereiche")}
        ${renderAgreement("principalDate", "Datum Schulleitung")}
      </div>
    </div>
  `;
}

function renderHeadCell(label, value, isName, field) {
  if (isName) {
    return `<div class="head-cell"><b>${label}</b><span class="hint">wird erst beim Ausdruck eingefügt</span></div>`;
  }
  if (field === "period") {
    return `
      <div class="head-cell">
        <b>${label}</b>
        <div class="grid two">
          <input type="date" data-meta="periodFrom" value="${escapeHtml(draft.periodFrom)}" aria-label="Förderplan vom" />
          <input type="date" data-meta="periodTo" value="${escapeHtml(draft.periodTo)}" aria-label="Förderplan bis" />
        </div>
      </div>
    `;
  }
  return `
    <div class="head-cell">
      <b>${label}</b>
      <input data-meta="${field}" value="${escapeHtml(value)}" />
    </div>
  `;
}

function renderPlanTable(title, rows) {
  return `
    <h2>${escapeHtml(title)}</h2>
    <div class="table-scroll">
      <table class="plan-table">
        <thead>
          <tr>
            <th>Bereich</th>
            ${DATA.columns.map((column) => `<th>${escapeHtml(DATA.columnLabels[column])}</th>`).join("")}
            <th class="row-tools">Aktionen</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr>
              <td class="row-label">${escapeHtml(row.label)}</td>
              ${DATA.columns.map((column) => `
                <td><textarea data-grid="${row.key}" data-column="${column}">${escapeHtml(draft.grid[row.key]?.[column] || "")}</textarea></td>
              `).join("")}
              <td class="row-tools">
                <button type="button" data-action="row-suggestions" data-row="${row.key}">Textvorschläge anzeigen</button>
                <button type="button" data-action="clear-row" data-row="${row.key}">Feld leeren</button>
                <button type="button" data-action="row-check" data-row="${row.key}">Kompetenz-Check erneut öffnen</button>
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderAgreement(key, label) {
  return `
    <label class="field">
      <span>${escapeHtml(label)}</span>
      <textarea data-agreement="${key}">${escapeHtml(draft.agreements[key] || "")}</textarea>
    </label>
  `;
}

function renderLoadDrafts() {
  const drafts = loadDrafts();
  app.innerHTML = `
    <section class="panel stack">
      ${progress(1)}
      <div class="section-title">
        <div>
          <h2>Anonymen Entwurf laden</h2>
          <p class="hint">Gespeicherte Entwürfe enthalten keinen echten Namen.</p>
        </div>
        <span class="badge">${drafts.length} Entwurf${drafts.length === 1 ? "" : "e"}</span>
      </div>
      <div class="actions">
        <button type="button" data-action="import-draft">Anonymen Entwurf importieren</button>
        <input id="import-file" class="hidden" type="file" accept="application/json,.json" />
      </div>
      <div class="draft-list">
        ${drafts.length ? drafts.map(renderDraftItem).join("") : `<p class="notice">Es sind noch keine anonymen Entwürfe gespeichert.</p>`}
      </div>
      <div class="actions">
        <button type="button" data-action="start">Zur Startseite</button>
      </div>
    </section>
  `;
}

function renderDraftItem(item) {
  const date = item.updatedAt ? new Date(item.updatedAt).toLocaleString("de-DE") : "ohne Datum";
  const areas = (item.selectedAreas || []).map((key) => areaForKey(key)?.label).filter(Boolean).join(", ") || "keine Bereiche";
  return `
    <article class="draft-item">
      <div>
        <strong>${escapeHtml(item.anonymousId || "ohne Kennung")}</strong>
        <div class="meta-line">${escapeHtml(documentTitle(item))} · ${escapeHtml(formatPeriod(item))} · ${escapeHtml(areas)} · gespeichert ${escapeHtml(date)}</div>
      </div>
      <div class="actions">
        <button type="button" data-action="load-draft" data-id="${escapeHtml(item.id)}">Laden</button>
        <button type="button" data-action="delete-draft" data-id="${escapeHtml(item.id)}">Entwurf löschen</button>
      </div>
    </article>
  `;
}

function documentTitle(item = draft) {
  return item.planType === "praeventiv" ? "Präventiver Förderplan" : "Förderplan";
}

function formatPeriod(item = draft) {
  const from = item.periodFrom || "";
  const to = item.periodTo || "";
  if (from && to) return `${from} / ${to}`;
  return from || to || "";
}

function syncAllInputs() {
  syncCompetencyInputs();
  syncProposalInputs();
  syncRasterInputs();
}

function syncCompetencyInputs() {
  document.querySelectorAll("[data-rating]:checked").forEach((field) => {
    draft.ratings[field.dataset.rating] = { value: field.value };
  });
  document.querySelectorAll("[data-subarea-note]").forEach((field) => {
    const id = field.dataset.subareaNote;
    const key = field.dataset.noteField;
    if (!draft.subareaNotes[id]) draft.subareaNotes[id] = { note: "", support: "", priority: "mittel" };
    draft.subareaNotes[id][key] = field.value;
  });
  document.querySelectorAll("[data-free]").forEach((field) => {
    const row = field.dataset.free;
    const column = field.dataset.column;
    if (column === "subject") {
      if (!draft.freeSubjects) draft.freeSubjects = {};
      if (!draft.freeSubjects[row]) draft.freeSubjects[row] = {};
      draft.freeSubjects[row].subject = field.value;
    } else {
      draft.grid[row][column] = field.value;
    }
  });
}

function syncProposalInputs() {
  document.querySelectorAll("[data-proposal]").forEach((field) => {
    const id = field.dataset.proposal;
    const column = field.dataset.column;
    if (!draft.proposalDrafts[id]) draft.proposalDrafts[id] = emptyText();
    draft.proposalDrafts[id][column] = field.value;
  });
  document.querySelectorAll("[data-accept-focus]").forEach((field) => {
    toggleAccepted(field.dataset.acceptFocus, field.checked);
  });
}

function syncProposalText(id) {
  const text = emptyText();
  document.querySelectorAll(`[data-proposal="${cssEscape(id)}"]`).forEach((field) => {
    text[field.dataset.column] = field.value;
  });
  draft.proposalDrafts[id] = text;
  return text;
}

function syncRasterInputs() {
  document.querySelectorAll("[data-grid]").forEach((field) => {
    const row = field.dataset.grid;
    const column = field.dataset.column;
    draft.grid[row][column] = field.value;
  });
  document.querySelectorAll("[data-agreement]").forEach((field) => {
    draft.agreements[field.dataset.agreement] = field.value;
  });
  document.querySelectorAll("[data-meta]").forEach((field) => {
    draft[field.dataset.meta] = field.value;
  });
}

function cssEscape(value) {
  return window.CSS && CSS.escape ? CSS.escape(value) : String(value).replace(/"/g, '\\"');
}

function acceptProposal(id) {
  syncProposalInputs();
  const rec = getRecommendations().find((item) => item.id === id);
  if (!rec) return;
  const text = draft.proposalDrafts[id] || proposalForRecommendation(rec);
  DATA.columns.forEach((column) => {
    draft.grid[rec.rasterRow][column] = text[column] || "";
  });
  toggleAccepted(id, true);
  statusMessage = `Vorschlag „${rec.label}“ wurde in das Raster übernommen.`;
  renderRasterView();
}

function toggleAccepted(id, shouldAccept) {
  const set = new Set(draft.acceptedSuggestionIds);
  if (shouldAccept) set.add(id);
  else set.delete(id);
  draft.acceptedSuggestionIds = [...set];
}

function addManualSuggestion() {
  const row = document.querySelector("#manual-row")?.value;
  const label = document.querySelector("#manual-label")?.value.trim();
  if (!row || !label) return;
  const id = `manual_${makeId()}`;
  draft.manualSuggestions.push({
    id,
    rasterRow: row,
    label,
    score: 99,
    conditionTags: [],
    istStandTemplate: `_ zeigt im Bereich ${label} bereits einzelne Ansätze und benötigt weiterhin gezielte Unterstützung.`,
    zielTemplate: `_ arbeitet in den nächsten Wochen daran, ${label.toLowerCase()} zunehmend sicherer umzusetzen.`,
    massnahmenTemplate: `_ erhält klare Beispiele, kurze Übungsphasen und regelmäßige Rückmeldung. Die Unterstützung wird an die aktuelle Lernsituation angepasst.`,
    evaluationTemplate: "Die Entwicklung wird durch Unterrichtsbeobachtung, kurze Dokumentation und den Vergleich ausgewählter Arbeitsergebnisse überprüft."
  });
  statusMessage = "Manueller Schwerpunkt ergänzt.";
  renderSuggestionsView();
}

function clearRow(row) {
  draft.grid[row] = emptyText();
  statusMessage = `Die Zeile „${rowForKey(row)?.label || row}“ wurde geleert.`;
  renderRasterView();
}

function saveDraft() {
  syncAllInputs();
  draft.updatedAt = new Date().toISOString();
  draft.title = documentTitle();
  const sanitized = sanitizeForStorage(draft);
  const drafts = loadDrafts().filter((item) => item.id !== sanitized.id);
  drafts.unshift(sanitized);
  localStorage.setItem(DATA.storageKey, JSON.stringify(drafts.slice(0, 40)));
  draft = normalizeDraft(sanitized);
  statusMessage = "Der anonyme Entwurf wurde lokal im Browser gespeichert.";
  renderRasterView();
}

function loadDrafts() {
  try {
    const parsed = JSON.parse(localStorage.getItem(DATA.storageKey) || "[]");
    return Array.isArray(parsed) ? parsed.map(normalizeDraft) : [];
  } catch {
    return [];
  }
}

function normalizeDraft(item) {
  const base = createEmptyDraft();
  const safe = sanitizeForStorage(item || {});
  const normalized = {
    ...base,
    ...safe,
    grid: { ...base.grid, ...(safe.grid || {}) },
    agreements: { ...base.agreements, ...(safe.agreements || {}) },
    ratings: safe.ratings || {},
    subareaNotes: safe.subareaNotes || {},
    proposalDrafts: safe.proposalDrafts || {},
    acceptedSuggestionIds: Array.isArray(safe.acceptedSuggestionIds) ? safe.acceptedSuggestionIds : [],
    selectedAreas: Array.isArray(safe.selectedAreas) ? safe.selectedAreas : [],
    manualSuggestions: Array.isArray(safe.manualSuggestions) ? safe.manualSuggestions : [],
    freeSubjects: safe.freeSubjects || {}
  };
  normalized.title = documentTitle(normalized);
  return normalized;
}

function sanitizeForStorage(value) {
  const allowed = JSON.parse(JSON.stringify(value || {}));
  removeForbiddenNameFields(allowed);
  return pickAllowedDraft(allowed);
}

function removeForbiddenNameFields(value) {
  if (!value || typeof value !== "object") return;
  Object.keys(value).forEach((key) => {
    if (isForbiddenNameKey(key)) {
      delete value[key];
      return;
    }
    removeForbiddenNameFields(value[key]);
  });
}

function isForbiddenNameKey(key) {
  const normalized = key.toLowerCase().replaceAll("ü", "ue").replaceAll("ä", "ae").replaceAll("ö", "oe");
  return [
    "name",
    "echtername",
    "realname",
    "studentname",
    "kindname",
    "schuelername",
    "schülername",
    "vorname",
    "nachname",
    "fullname"
  ].some((forbidden) => normalized === forbidden || normalized.endsWith(forbidden));
}

function pickAllowedDraft(item) {
  const base = createEmptyDraft();
  const allowed = {
    id: item.id || base.id,
    updatedAt: item.updatedAt || new Date().toISOString(),
    planType: item.planType === "praeventiv" ? "praeventiv" : "foerderplan",
    title: item.planType === "praeventiv" ? "Präventiver Förderplan" : "Förderplan",
    anonymousId: item.anonymousId || "",
    periodFrom: item.periodFrom || "",
    periodTo: item.periodTo || "",
    klasse: item.klasse || "",
    focus: item.focus || "",
    sbj: item.sbj || "",
    bildungsgang: item.bildungsgang || "",
    selectedAreas: Array.isArray(item.selectedAreas) ? item.selectedAreas.filter((key) => DATA.competencyAreas[key]) : [],
    ratings: item.ratings || {},
    subareaNotes: item.subareaNotes || {},
    proposalDrafts: item.proposalDrafts || {},
    acceptedSuggestionIds: Array.isArray(item.acceptedSuggestionIds) ? item.acceptedSuggestionIds : [],
    manualSuggestions: Array.isArray(item.manualSuggestions) ? item.manualSuggestions : [],
    freeSubjects: item.freeSubjects || {},
    grid: { ...base.grid, ...(item.grid || {}) },
    agreements: { ...base.agreements, ...(item.agreements || {}) }
  };
  return allowed;
}

function exportDraft() {
  syncAllInputs();
  const sanitized = sanitizeForStorage({ ...draft, updatedAt: new Date().toISOString() });
  const blob = new Blob([JSON.stringify(sanitized, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `foerderplan-entwurf-anonym-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
  statusMessage = "Der anonyme Entwurf wurde als JSON-Datei exportiert.";
  renderRasterView();
}

function importDraft(file) {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = normalizeDraft(JSON.parse(reader.result));
      imported.id = makeId();
      imported.updatedAt = new Date().toISOString();
      draft = imported;
      statusMessage = "Anonymer Entwurf importiert. Bitte prüfen und bei Bedarf speichern.";
      renderRasterView();
    } catch {
      statusMessage = "Die JSON-Datei konnte nicht importiert werden.";
      renderLoadDrafts();
    }
  });
  reader.readAsText(file);
}

function duplicateDraft() {
  syncAllInputs();
  draft.id = makeId();
  draft.anonymousId = `${draft.anonymousId || "Entwurf"} Kopie`;
  draft.updatedAt = new Date().toISOString();
  statusMessage = "Der Entwurf wurde anonym dupliziert. Speichern Sie ihn bei Bedarf.";
  renderRasterView();
}

function openPrintDialog() {
  syncAllInputs();
  printNameInput.value = "";
  printDialog.classList.remove("hidden");
  printNameInput.focus();
}

function closePrintDialog() {
  printNameInput.value = "";
  printDialog.classList.add("hidden");
}

function printWithTemporaryName() {
  const temporaryName = printNameInput.value.trim();
  printNameInput.value = "";
  printDialog.classList.add("hidden");
  printRoot.innerHTML = renderPrintDocument(temporaryName);

  let cleaned = false;
  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    printRoot.innerHTML = "";
    statusMessage = "Der Name wurde nur für die Ausgabe verwendet und nicht gespeichert.";
    renderRasterView();
    window.removeEventListener("afterprint", cleanup);
  };

  window.addEventListener("afterprint", cleanup);
  window.print();
  setTimeout(cleanup, 900);
}

function renderPrintDocument(temporaryName) {
  return `
    <article class="print-document">
      ${renderPrintHeader(temporaryName)}
      <h1>${escapeHtml(documentTitle())}</h1>
      ${renderPrintRasterTable("Entwicklungsbereiche", DATA.developmentRows)}
      ${renderPrintRasterTable("Fächer / Fachbereiche", DATA.subjectRows)}
      <p class="print-footnote">*erforderlich, falls herkunftssprachlicher Unterricht erteilt wird; auszufüllen in Absprache mit der HSU-Lehrkraft</p>
      <p class="print-section-label">Vereinbarungen:</p>
      ${renderPrintAgreements()}
      <p class="print-section-label">Unterschriften:</p>
      ${renderPrintSignatureTable()}
      ${renderPrintPrincipalTable()}
    </article>
  `;
}

function renderPrintHeader(temporaryName) {
  return `
    <table class="print-header-table">
      <tbody>
        <tr>
          <td class="print-label-cell">Name:</td>
          <td colspan="2">${escapeHtml(temporaryName)}</td>
          <td class="print-label-cell">Förderplan vom</td>
          <td>${escapeHtml(draft.periodFrom || "")}</td>
          <td class="print-label-cell">bis</td>
          <td>${escapeHtml(draft.periodTo || "")}</td>
          <td class="print-label-cell">Klasse:</td>
          <td>${escapeHtml(draft.klasse || "")}</td>
          <td class="print-label-cell">Förderschwerp.:</td>
          <td>${escapeHtml(draft.focus || "")}</td>
        </tr>
        <tr><td colspan="11">&nbsp;</td></tr>
        <tr>
          <td colspan="7">&nbsp;</td>
          <td class="print-label-cell">Sbj.:</td>
          <td>${escapeHtml(draft.sbj || "")}</td>
          <td class="print-label-cell">Bildungsgang:</td>
          <td>${escapeHtml(draft.bildungsgang || "")}</td>
        </tr>
      </tbody>
    </table>
  `;
}

function renderPrintRasterTable(title, rows) {
  return `
    <table class="print-raster-table">
      <colgroup>
        <col class="print-col-label" />
        <col />
        <col />
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th>${escapeHtml(title)}</th>
          ${DATA.columns.map((column) => `<th>${escapeHtml(DATA.columnLabels[column])}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${rows.map((row) => `
          <tr>
            <td class="print-row-label">${escapeHtml(row.printLabel || row.label)}</td>
            ${DATA.columns.map((column) => `<td>${escapeHtml(draft.grid[row.key]?.[column] || "")}</td>`).join("")}
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function renderPrintAgreements() {
  return `
    <table class="print-agreement-table">
      <tbody>
        <tr>
          ${printAgreementCell("mit dem/der Schüler/in", draft.agreements.student, true)}
          ${printAgreementCell("mit den Eltern/Sorgeberechtigten", draft.agreements.parents, true)}
          ${printAgreementCell("im Team", draft.agreements.team, false)}
        </tr>
      </tbody>
    </table>
  `;
}

function printAgreementCell(label, value, withSignature) {
  return `
    <td>
      <strong>${escapeHtml(label)}</strong>
      <div class="print-fill-text">${escapeHtml(value || "")}</div>
      ${withSignature ? `<div class="print-signature-line">Unterschrift: ___________________________</div>` : ""}
    </td>
  `;
}

function renderPrintSignatureTable() {
  const note = draft.agreements.signatures?.trim();
  return `
    <table class="print-signature-table">
      <tbody>
        <tr>
          <td>Lehrkraft für Sonderpädagogik</td>
          <td>Fachlehrer/in</td>
          <td>Fachlehrer/in</td>
          <td>Fachlehrer/in</td>
          <td>Integrationshelfer/in,<br>(sozial-) pädagogische Fachkraft, MPT, OGS</td>
        </tr>
        <tr>
          <td>${escapeHtml(note || "")}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  `;
}

function renderPrintPrincipalTable() {
  return `
    <table class="print-principal-table">
      <tbody>
        <tr>
          <td>${escapeHtml(draft.agreements.principalDate || "")}</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Datum</td>
          <td></td>
          <td>Schulleitung</td>
        </tr>
      </tbody>
    </table>
  `;
}

app.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const action = button.dataset.action;
  if (!action) return;

  if (action === "new-draft") {
    draft = createEmptyDraft();
    statusMessage = "";
    setStep("setup", renderSetup);
  }
  if (action === "start") setStep("start", renderStart);
  if (action === "privacy") setStep("privacy", renderPrivacyPage);
  if (action === "setup") setStep("setup", renderSetup);
  if (action === "areas") setStep("areas", renderAreaSelection);
  if (action === "competencies") {
    syncAllInputs();
    setStep("competencies", renderCompetencyCheck);
  }
  if (action === "suggestions") {
    syncAllInputs();
    setStep("suggestions", renderSuggestionsView);
  }
  if (action === "raster") setStep("raster", renderRasterView);
  if (action === "load-view") setStep("load", renderLoadDrafts);
  if (action === "save-draft") saveDraft();
  if (action === "export-draft") exportDraft();
  if (action === "duplicate-draft") duplicateDraft();
  if (action === "open-print") openPrintDialog();
  if (action === "import-draft") document.querySelector("#import-file")?.click();
  if (action === "add-manual") addManualSuggestion();
  if (action === "accept-proposal") acceptProposal(button.dataset.id);
  if (action === "edit-proposal") document.querySelector(`[data-proposal="${cssEscape(button.dataset.id)}"]`)?.focus();
  if (action === "alternative") {
    const rec = getRecommendations().find((item) => item.id === button.dataset.id);
    if (rec) {
      draft.proposalDrafts[rec.id] = alternativeFor(rec);
      renderSuggestionsView();
    }
  }
  if (action === "clear-proposal") {
    draft.proposalDrafts[button.dataset.id] = emptyText();
    renderSuggestionsView();
  }
  if (action === "reject-proposal") {
    toggleAccepted(button.dataset.id, false);
    statusMessage = "Vorschlag wurde nicht übernommen.";
    renderSuggestionsView();
  }
  if (action === "clear-row") clearRow(button.dataset.row);
  if (action === "row-suggestions") {
    syncRasterInputs();
    const row = button.dataset.row;
    draft.selectedAreas = [...new Set([...draft.selectedAreas, row])].filter((key) => DATA.competencyAreas[key]);
    setStep("suggestions", renderSuggestionsView);
  }
  if (action === "row-check") {
    syncRasterInputs();
    const row = button.dataset.row;
    draft.selectedAreas = [...new Set([...draft.selectedAreas, row])].filter((key) => DATA.competencyAreas[key]);
    setStep("competencies", renderCompetencyCheck);
  }
  if (action === "load-draft") {
    const found = loadDrafts().find((item) => item.id === button.dataset.id);
    if (found) {
      draft = normalizeDraft(found);
      statusMessage = "Anonymer Entwurf geladen.";
      setStep("raster", renderRasterView);
    }
  }
  if (action === "delete-draft") {
    const next = loadDrafts().filter((item) => item.id !== button.dataset.id);
    localStorage.setItem(DATA.storageKey, JSON.stringify(next));
    setStep("load", renderLoadDrafts);
  }
});

app.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  if (form.dataset.form === "setup") {
    const values = Object.fromEntries(new FormData(form).entries());
    Object.assign(draft, values);
    draft.title = documentTitle();
    setStep("areas", renderAreaSelection);
  }
  if (form.dataset.form === "areas") {
    draft.selectedAreas = [...form.querySelectorAll('input[name="area"]:checked')].map((item) => item.value);
    setStep("competencies", renderCompetencyCheck);
  }
});

app.addEventListener("change", (event) => {
  const rating = event.target.closest("[data-rating]");
  if (rating) {
    draft.ratings[rating.dataset.rating] = { value: rating.value };
  }
  const acceptFocus = event.target.closest("[data-accept-focus]");
  if (acceptFocus) {
    toggleAccepted(acceptFocus.dataset.acceptFocus, acceptFocus.checked);
  }
  const importFile = event.target.closest("#import-file");
  if (importFile?.files?.[0]) importDraft(importFile.files[0]);
});

app.addEventListener("input", (event) => {
  const subareaField = event.target.closest("[data-subarea-note]");
  if (subareaField) {
    const id = subareaField.dataset.subareaNote;
    const key = subareaField.dataset.noteField;
    if (!draft.subareaNotes[id]) draft.subareaNotes[id] = { note: "", support: "", priority: "mittel" };
    draft.subareaNotes[id][key] = subareaField.value;
  }
});

document.querySelector("#confirm-print").addEventListener("click", printWithTemporaryName);
document.querySelector("#cancel-print").addEventListener("click", closePrintDialog);

render();
