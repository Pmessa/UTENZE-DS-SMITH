// ===============================
//  CARICAMENTO DATABASE UTENZE
// ===============================
let utenze = [];

async function caricaDati() {
  try {
    const risposta = await fetch("utenze.json");
    utenze = await risposta.json();
    console.log("Utenze caricate:", utenze.length);
  } catch (err) {
    console.error("Errore nel caricamento del JSON:", err);
  }
}

caricaDati();


// ===============================
//  RIFERIMENTI DOM
// ===============================
const inputDescrizione = document.getElementById("descrizione");
const selectCabina = document.getElementById("cabina");
const btnCerca = document.getElementById("btnCerca");
const btnPulisci = document.getElementById("btnPulisci");
const listaRisultati = document.getElementById("listaRisultati");


// ===============================
//  HEADER RISULTATI
// ===============================
function renderHeader() {
  const headerRow = document.createElement("div");
  headerRow.className = "riga-utenza riga-utenza-header";
  headerRow.innerHTML = `
    <span>Descrizione utenza</span>
    <span>Cabina</span>
    <span>Quadro</span>
    <span>Sez.</span>
    <span>UT.</span>
  `;
  return headerRow;
}


// ===============================
//  RENDER RISULTATI
// ===============================
function renderRisultati(dati) {
  listaRisultati.innerHTML = "";

  if (!dati || dati.length === 0) {
    listaRisultati.innerHTML = `<p class="vuoto">Nessuna utenza trovata con i criteri inseriti.</p>`;
    return;
  }

  listaRisultati.appendChild(renderHeader());

  dati.forEach(u => {
    const row = document.createElement("div");
    row.className = "riga-utenza";
    row.innerHTML = `
      <span data-label="Descrizione">${u.descrizione}</span>
      <span data-label="Cabina">${u.cabina}</span>
      <span data-label="Quadro">${u.quadro}</span>
      <span data-label="Sezione">${u.sezione}</span>
      <span data-label="Utenza">${u.utenza}</span>
    `;
    listaRisultati.appendChild(row);
  });
}


// ===============================
//  FILTRO PRINCIPALE
// ===============================
function filtraUtenze() {
  const testo = inputDescrizione.value.trim().toLowerCase();
  const cabina = selectCabina.value;

  const filtrate = utenze.filter(u => {
    const matchCabina = cabina === "" || u.cabina === cabina;
    const matchTesto =
      testo === "" ||
      (u.descrizione && u.descrizione.toLowerCase().includes(testo));

    return matchCabina && matchTesto;
  });

  renderRisultati(filtrate);
}


// ===============================
//  EVENTI
// ===============================

// Ricerca istantanea
inputDescrizione.addEventListener("input", filtraUtenze);
selectCabina.addEventListener("change", filtraUtenze);

// Bottone "Cerca"
btnCerca.addEventListener("click", (e) => {
  e.preventDefault();
  filtraUtenze();
});

// Bottone "Pulisci"
btnPulisci.addEventListener("click", (e) => {
  e.preventDefault();
  inputDescrizione.value = "";
  selectCabina.value = "";
  listaRisultati.innerHTML = `
    <p class="vuoto">Filtri puliti. Inserisci dei criteri e premi "Cerca utenze".</p>
  `;
});


// ===============================
//  STATO INIZIALE
// ===============================
listaRisultati.innerHTML = `
  <p class="vuoto">Nessuna ricerca effettuata. Inserisci dei criteri e premi "Cerca utenze".</p>
`;
