let utenze = [];

async function caricaDati() {
  try {
    console.log("DEBUG — Iniciando carga del archivo utenze.json...");

    const risposta = await fetch("utenze.json");
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

    // 🔶 Llenar automáticamente la lista de QUADRI
    popolaListaQuadri();

  } catch (err) {
    console.error("🔥 ERROR — No se pudo cargar el JSON:", err);
  }
}

caricaDati();

const inputDescrizione = document.getElementById("descrizione");
const selectCabina = document.getElementById("cabina");
const selectQuadro = document.getElementById("quadro");
const listaRisultati = document.getElementById("listaRisultati");

/* ---------------------------------------------------------
   🔶 RELLENAR LISTA DE QUADRI AUTOMÁTICAMENTE
--------------------------------------------------------- */
function popolaListaQuadri() {
  const quadriUnici = [...new Set(utenze.map(u => u.quadro))].sort();

  quadriUnici.forEach(q => {
    if (q && q.trim() !== "") {
      const opt = document.createElement("option");
      opt.value = q;
      opt.textContent = q;
      selectQuadro.appendChild(opt);
    }
  });

  console.log("DEBUG — Quadri cargados:", quadriUnici.length);
}

/* ---------------------------------------------------------
   🔶 CREAR TARJETA DE UTENZA (versión compacta)
--------------------------------------------------------- */
function creaCartaUtenza(u, index) {
  const carta = document.createElement("div");
  carta.className = "carta-utenza";

  carta.innerHTML = `
    <div class="carta-header">
      <div><strong>Descrizione:</strong> ${u.descrizione}</div>
      <div><strong>Cabina:</strong> ${u.cabina}</div>
      <div><strong>Quadro:</strong> ${u.quadro}</div>
      <div><strong>Utenza:</strong> ${u.utenza}</div>
    </div>

    <div class="carta-extra" id="extra-${index}">
      <div><strong>Scomparto:</strong> ${u.sezione}</div>
      <div><strong>TAG:</strong> ${u.tag}</div>
      <div><strong>Sede tecnica UT:</strong> ${u.sede_tecnica_ut}</div>
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

/* ---------------------------------------------------------
   🔶 RENDER DE RESULTADOS
--------------------------------------------------------- */
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

/* ---------------------------------------------------------
   🔶 MOSTRAR / OCULTAR DETTAGLI
--------------------------------------------------------- */
function toggleDettagli(id) {
  const box = document.getElementById("extra-" + id);
  box.style.display = box.style.display === "block" ? "none" : "block";
}

/* ---------------------------------------------------------
   🔶 FILTRO PRINCIPAL
--------------------------------------------------------- */
function filtraUtenze() {
  const testo = inputDescrizione.value.trim().toLowerCase();
  const cabina = selectCabina.value;
  const quadro = selectQuadro.value;

  console.log("DEBUG — Filtro aplicado:", { testo, cabina, quadro });

  const filtrate = utenze.filter(u => {
    const matchCabina = cabina === "" || u.cabina === cabina;
    const matchQuadro = quadro === "" || u.quadro === quadro;
    const matchTesto =
      testo === "" ||
      (u.descrizione && u.descrizione.toLowerCase().includes(testo));

    return matchCabina && matchQuadro && matchTesto;
  });

  console.log("DEBUG — Resultados filtrados:", filtrate.length);

  renderRisultati(filtrate);
}

/* ---------------------------------------------------------
   🔶 EVENTOS
--------------------------------------------------------- */
inputDescrizione.addEventListener("input", filtraUtenze);
selectCabina.addEventListener("change", filtraUtenze);
selectQuadro.addEventListener("change", filtraUtenze);

listaRisultati.innerHTML = `
  <p class="vuoto">Nessuna ricerca effettuata. Inserisci dei criteri e premi "Cerca utenze".</p>
`;
