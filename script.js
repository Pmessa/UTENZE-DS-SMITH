let utenze = [];

async function caricaDati() {
  try {
    console.log("DEBUG — Iniciando carga del archivo utenze.json...");

    const risposta = await fetch("utenze.json");
    console.log("DEBUG — Respuesta fetch:", risposta);

    let data = await risposta.json();
    console.log("DEBUG — JSON crudo cargado. Cantidad de objetos:", data.length);

    // Normalización de claves
    utenze = data.map(u => ({
      cabina: "CAB." + u["Cabina"],
      quadro: u["Quadro"],
      utenza: u["Utenza"],
      sezione: u["Scomp."],
      descrizione: u["Descrizione"],
      tag: u["TAG"],
      sede_tecnica_ut: u["Sede Tecnica UT"],
      sezionatore_bm: u["Sezionatore B.M."],
      sede_tecnica_bm: u["Sede Tecnica BM"],
      itlu: u["ITLU"]
    }));

    console.log("DEBUG — Utenze normalizzate:", utenze.length);

    console.log("DEBUG — Primeras 5 utenze normalizzate:");
    console.log(utenze.slice(0, 5));

    console.log("DEBUG — Cabine uniche trovate:");
    console.log([...new Set(utenze.map(u => u.cabina))].slice(0, 20));

  } catch (err) {
    console.error("🔥 ERROR — No se pudo cargar el JSON:", err);
  }
}

caricaDati();

const inputDescrizione = document.getElementById("descrizione");
const selectCabina = document.getElementById("cabina");
const btnCerca = document.getElementById("btnCerca");
const btnPulisci = document.getElementById("btnPulisci");
const listaRisultati = document.getElementById("listaRisultati");

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

function toggleDettagli(id) {
  const box = document.getElementById("extra-" + id);
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function filtraUtenze() {
  const testo = inputDescrizione.value.trim().toLowerCase();
  const cabina = selectCabina.value;

  console.log("DEBUG — Filtro aplicado:", { testo, cabina });

  const filtrate = utenze.filter(u => {
    const matchCabina = cabina === "" || u.cabina === cabina;
    const matchTesto =
      testo === "" ||
      (u.descrizione && u.descrizione.toLowerCase().includes(testo));

    return matchCabina && matchTesto;
  });

  console.log("DEBUG — Resultados filtrados:", filtrate.length);

  renderRisultati(filtrate);
}

inputDescrizione.addEventListener("input", filtraUtenze);
selectCabina.addEventListener("change", filtraUtenze);

btnCerca.addEventListener("click", (e) => {
  e.preventDefault();
  filtraUtenze();
});

btnPulisci.addEventListener("click", (e) => {
  e.preventDefault();
  inputDescrizione.value = "";
  selectCabina.value = "";
  listaRisultati.innerHTML = `
    <p class="vuoto">Filtri puliti. Inserisci dei criteri e premi "Cerca utenze".</p>
  `;
});

listaRisultati.innerHTML = `
  <p class="vuoto">Nessuna ricerca effettuata. Inserisci dei criteri e premi "Cerca utenze".</p>
`;
