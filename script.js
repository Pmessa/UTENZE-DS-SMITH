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
//  FUNZIONE: CREA UNA CARTA UTENZA
// ===============================
function creaCartaUtenza(u, index) {
  const carta = document.createElement("div");
  carta.className = "carta-utenza";

  carta.innerHTML = `
    <div class="carta-header">
      <div><strong>Cabina:</strong> ${u.cabina}</div>
      <div><strong>Quadro:</strong> ${u.quadro}</div>
      <div><strong>Utenza:</strong> ${u.utenza}</div>
      <div><strong>Scomparto:</strong> ${u.sezione}</div>
    </div>

    <div class="carta-extra" id="extra-${index}">
      <div><strong>TAG:</strong> ${u.tag}</div>
      <div><strong>Sede tecnica UT:</strong> ${u.sede_tecnica_ut}</div>
      <div><strong>Descrizione:</strong> ${u.descrizione}</div>
      <div><strong>Sezionatore B.M.:</strong> ${u.sezionatore_bm}</div>
      <div><strong>Sede tecnica BM:</strong> ${u.sede_tecnica_bm}</div>
      <div><strong>ITLU:</strong> ${u.itlu}</div>
    </div>

    <button class="btn-dettagli" onclick="toggleDettagli(${index})">
      Dettagli tecnici
    </button>
  `;

  return carta;
}


// ===============================
//  FUNZIONE: MOSTRA RISULTATI
// ===============================
function renderRisultati(dati) {
  listaRisultati.innerHTML = "";

  if (!dati || dati.length === 0) {
    listaRisultati.innerHTML = `<p class="vuoto">Nessuna utenza trovata con i criteri inseriti.</p>`;
    return;
  }

  dati.forEach((u, i) => {
    listaRisultati.appendChild(creaCartaUtenza(u, i));
  });
}


// ===============================
//  FUNZIONE: APRI/CHIUDI DETTAGLI
// ===============================
function toggleDettagli(id) {
  const box = document.getElementById("extra-" + id);
  box.style.display = box.style.display === "block" ? "none" : "block";
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
