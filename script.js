// =======================
// DATI UTENZE
// =======================
const utenze = [
  {
    descrizione: "SPAPPOLATORE 2 FINE MACCHINA (SOFT STARTER)",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.2",
    utenza: "UT.2"
  },
  {
    descrizione: "POMPA SPAPPOLATORE FINE MACCHINA",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.3",
    utenza: "UT.3"
  },
  {
    descrizione: "RESISTENZE SCALDABAGNO ALIMENTAZIONE LIGNINA 1",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.4",
    utenza: "UT.6"
  },
  {
    descrizione: "TERMOCONVETTORE 5",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.4",
    utenza: "UT.12"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO 1 BOBINOVIA MAG.LATERALE C1",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.4",
    utenza: "UT.104"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO POZZI E CARROPONTI",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.4",
    utenza: "UT.103"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO CENTRALE KUSTER",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.4",
    utenza: "UT.109"
  },
  {
    descrizione: "ALIMENTAZIONE CARROPONTE DEPOSITO FELTRI EX OFFICINA",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.5",
    utenza: "UT.7"
  },
  {
    descrizione: "ALIMENTAZIONE BLINDO LINEA CARROPONTI PM1",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.5",
    utenza: "UT.106"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO AMIDO SIZE PRESS",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.5",
    utenza: "UT.107"
  },
  {
    descrizione: "ALIMENTAZIONE PULPITO POPE",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.5",
    utenza: "UT.110"
  },
  {
    descrizione: "TERMOCONVETTORE 1",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.7",
    utenza: "UT.8"
  },
  {
    descrizione: "TERMOCONVETTORE 2",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.7",
    utenza: "UT.9"
  },
  {
    descrizione: "TERMOCONVETTORE 3",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.7",
    utenza: "UT.10"
  },
  {
    descrizione: "TERMOCONVETTORE 4",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.7",
    utenza: "UT.11"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO SEGA ANIME PM1",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.7",
    utenza: "UT.115"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO IBS CAMBIO ROTOLO",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.7",
    utenza: "UT.116"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO REGGIATRICE",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.7",
    utenza: "UT.117"
  },
  {
    descrizione: "ALIMENTAZIONE 220V GRUPPO CARICA BATTERIE",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.7",
    utenza: "UT.118"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO FINESTRE RIBOBINA PM1",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.7",
    utenza: "UT.119"
  },
  // >>> Aquí puedes seguir copiando todas las demás filas del PDF <<<
];

// =======================
// LOGICA DI RICERCA
// =======================
const inputDescrizione = document.getElementById("descrizione");
const selectCabina = document.getElementById("cabina");
const inputQuadro = document.getElementById("quadro");
const inputSezione = document.getElementById("sezione");
const inputUtenza = document.getElementById("utenza");
const btnCerca = document.getElementById("btnCerca");
const btnPulisci = document.getElementById("btnPulisci");
const listaRisultati = document.getElementById("listaRisultati");

btnCerca.addEventListener("click", () => {
  const descVal = inputDescrizione.value.trim().toLowerCase();
  const cabVal = selectCabina.value.trim().toLowerCase();
  const quadroVal = inputQuadro.value.trim().toLowerCase();
  const sezioneVal = inputSezione.value.trim().toLowerCase();
  const utenzaVal = inputUtenza.value.trim().toLowerCase();

  const risultati = utenze.filter(u => {
    const matchDesc =
      !descVal || u.descrizione.toLowerCase().includes(descVal);
    const matchCab =
      !cabVal || u.cabina.toLowerCase() === cabVal;
    const matchQuadro =
      !quadroVal || u.quadro.toLowerCase().includes(quadroVal);
    const matchSezione =
      !sezioneVal || u.sezione.toLowerCase().includes(sezioneVal);
    const matchUtenza =
      !utenzaVal || u.utenza.toLowerCase().includes(utenzaVal);

    return matchDesc && matchCab && matchQuadro && matchSezione && matchUtenza;
  });

  mostraRisultati(risultati);
});

btnPulisci.addEventListener("click", () => {
  inputDescrizione.value = "";
  selectCabina.value = "";
  inputQuadro.value = "";
  inputSezione.value = "";
  inputUtenza.value = "";
  listaRisultati.innerHTML =
    '<p class="vuoto">Filtri puliti. Inserisci nuovi criteri e premi "Cerca utenze".</p>';
});

function mostraRisultati(risultati) {
  listaRisultati.innerHTML = "";

  if (risultati.length === 0) {
    listaRisultati.innerHTML =
      '<p class="vuoto">Nessuna utenza trovata con i criteri inseriti.</p>';
    return;
  }

  risultati.forEach(u => {
    const card = document.createElement("article");
    card.className = "card-utenza";

    card.innerHTML = `
      <span class="tag">${u.utenza || "UTENZA N.D."}</span>
      <h3>${u.descrizione}</h3>
      <dl>
        <dt>Cabina:</dt><dd>${u.cabina}</dd>
        <dt>Quadro:</dt><dd>${u.quadro}</dd>
        <dt>Sezione:</dt><dd>${u.sezione}</dd>
        <dt>Utenza:</dt><dd>${u.utenza}</dd>
      </dl>
    `;

    listaRisultati.appendChild(card);
  });
}
