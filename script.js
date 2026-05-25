// =======================
// DATI UTENZE
// =======================
const utenze = [
  // CAB.04 - Q.9 LT.A
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
    descrizione: "RESISTENZE CENTRALINA OLIO POPE",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.6",
    utenza: "UT.35"
  },
  {
    descrizione: "POMPA RICIRCOLO CENTRALINA OLIO POPE",
    cabina: "CAB.05",
    quadro: "Q.9 LT.A",
    sezione: "S.6",
    utenza: "UT.33"
  },
  {
    descrizione: "POMPA 1 CENTRALINA OLIO POPE",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.6",
    utenza: "UT.31"
  },
  {
    descrizione: "POMPA 2 CENTRALINA OLIO POPE",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.6",
    utenza: "UT.32"
  },
  {
    descrizione: "VENTILATORE RAFFREDDAMENTO CENTRALINA OLIO POPE",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.7",
    utenza: "UT.34"
  },
  {
    descrizione: "RASCHIA CILINDRO 69",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.7",
    utenza: "UT.13"
  },
  {
    descrizione: "FORMACODA SECCHERIA",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.7",
    utenza: "UT.14"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO SERVIZI CABINA 13 C2",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.1",
    utenza: ""
  },
  {
    descrizione: "ALIMENTAZIONE GENERATORE",
    cabina: "CAB.04",
    quadro: "Q.9 LT.A",
    sezione: "S.1",
    utenza: ""
  },

  // CAB.04 - Q.9 LT.B
  {
    descrizione: "SERVIZI AUX 220V UPS DA QUADRO DISTRIBUZIONE SALA YOK",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.1",
    utenza: ""
  },
  {
    descrizione: "SPAPPOLATORE 1 FINE MACCHINA INVERTER",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.2 3",
    utenza: "UT.1"
  },
  {
    descrizione: "ALIMENTAZIONE COMPRESSORE ARIA 4",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.4",
    utenza: "UT.102"
  },
  {
    descrizione: "ALIMENTAZIONE ESSICCATORE ARIA 1",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.4",
    utenza: "UT.111"
  },
  {
    descrizione: "ALIMENTAZIONE 110V QUADRO ALLARME FELTRI SECCHERIA",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.4",
    utenza: "UT.201"
  },
  {
    descrizione: "ALIMENTAZIONE SEGNALAZIONE STOP MOTORI CAPPA",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.4",
    utenza: "UT.202"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO PLC TAIL SHOOTER LISCIA",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.4",
    utenza: "UT.204"
  },
  {
    descrizione: "ALIMENTAZIONE 110V EV RISCALDAMENTO UFFICI TECNICI",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.4",
    utenza: "UT.205"
  },
  {
    descrizione: "CARROPONTE EX CALDAIA",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.5",
    utenza: "UT.4"
  },
  {
    descrizione: "ALIMENTAZIONE COMPRESSORE ARIA 1",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.5",
    utenza: "UT.101"
  },
  {
    descrizione: "CARROPONTE MAGAZZINO LATERALE C1",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.5",
    utenza: "UT.5"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO 2 BOBINOVIA EX CALDAIA",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.6",
    utenza: "UT.105"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO STOCCAGGIO AMIDO SIRAL",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.6",
    utenza: "UT.108"
  },
  {
    descrizione: "ALIMENTAZIONE PODIO BOBINOVIA AIUTO RIBOBINA C1",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.6",
    utenza: "UT.112"
  },
  {
    descrizione: "ALIMENTAZIONE LINEA PRESE 380V 220V 24V TERRAZZA",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.6",
    utenza: "UT.120"
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
    descrizione: "ALIMENTAZIONE 380V QUADRO FAIL FORCE LISCIA TAIL SHOC",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.7",
    utenza: "UT.113"
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
  {
    descrizione: "ALIMENTAZIONE QUADRO GOVONI IMPIANTO STOCCAGGIO",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.5",
    utenza: "UT.121"
  },
  {
    descrizione: "ALIMENTAZIONE LINEA PRESE 380V 220V 24V CALDAIA",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.6",
    utenza: ""
  },
  {
    descrizione: "ALIMENTAZIONE LINEA PRESE 380V 220V 24V LATO COMAND",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.6",
    utenza: ""
  },
  {
    descrizione: "ALIMENTAZIONE LINEA PRESE 380V 220V 24V LATO SERVIZIO",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.6",
    utenza: ""
  },
  {
    descrizione: "ALIMENTAZIONE LINEA PRESE 380V 220V 24V SPAPPOLATORI",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.6",
    utenza: ""
  },

  // CAB.04 - Q.MURO
  {
    descrizione: "ALIMENTAZIONE 220V CONDIZIONATORE RIBOBINA",
    cabina: "CAB.04",
    quadro: "Q.9 LT.B",
    sezione: "S.7",
    utenza: "UT.121"
  },
  {
    descrizione: "LUCI SILOS",
    cabina: "CAB.04",
    quadro: "Q.MURO",
    sezione: "S.",
    utenza: "UT.QF1"
  },
  {
    descrizione: "PRESA 220V EX MENSA",
    cabina: "CAB.04",
    quadro: "Q.MURO",
    sezione: "S.",
    utenza: "UT.QF2"
  },
  {
    descrizione: "POMPE RISCALDAMENTO UFFICI TECNICI",
    cabina: "CAB.04",
    quadro: "Q.MURO",
    sezione: "S.",
    utenza: "UT.QF3"
  },
  {
    descrizione: "LUCI EMERGENZA CABINA 04",
    cabina: "CAB.04",
    quadro: "Q.MURO",
    sezione: "S.",
    utenza: "UT.QF4"
  },
  {
    descrizione: "QUADRO ELETTRICO LUCI EMERGENZA",
    cabina: "CAB.04",
    quadro: "Q.MURO",
    sezione: "S.",
    utenza: "UT.QF5"
  },
  {
    descrizione: "LUCI CABINA 04",
    cabina: "CAB.04",
    quadro: "Q.MURO",
    sezione: "S.",
    utenza: "UT.QF6"
  },

  // CAB.05 - Q.PCC
  {
    descrizione: "AUSILIARI JEMBACKER",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.1",
    utenza: ""
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO SEDIMENTATORE PRIMARIO",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.3",
    utenza: "UT.2"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO ANTINCENDIO EUSEBI",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.3",
    utenza: "UT.6"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO THIOPAC",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.3",
    utenza: "UT.7"
  },
  {
    descrizione: "ALIMENTAZIONE INGRESSO NORD",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.3",
    utenza: "UT.29"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO ANAEROBICO",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.4",
    utenza: "UT.1"
  },
  {
    descrizione: "ALIMENTAZIONE OFFICINE",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.4",
    utenza: "UT.3"
  },
  {
    descrizione: "TORRI FARO",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.4",
    utenza: "UT.22 23"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO IONICS",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.4",
    utenza: "UT.30"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO THIOPAC 2",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.4",
    utenza: "UT.25"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO LAGUNA AEROBICO",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.5",
    utenza: "UT.5"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO ANTINCENDIO COMANDO POMPA",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.5",
    utenza: "UT.4"
  },
  {
    descrizione: "ALIMENTAZIONE 220V CARICABATTERIE GENERATORE",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.5",
    utenza: ""
  },
  {
    descrizione: "ALIMENTAZIONE 220V CARICABATTERIE ANTINCENDIO",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.5",
    utenza: "UT.17"
  },
  {
    descrizione: "ALIMENTAZIONE 220V VENTILATORI TRAFO 12",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.5",
    utenza: "UT.18"
  },
  {
    descrizione: "ALIMENTAZIONE 220V ACQUAPUR",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.5",
    utenza: "UT.19"
  },
  {
    descrizione: "ALIMENTAZIONE 220V PRESA CABINA",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.5",
    utenza: "UT.20"
  },
  {
    descrizione: "PRESE 380V 220V LAGUNA",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.5",
    utenza: "UT.8"
  },
  {
    descrizione: "PRESE 380V 220V DEPURATORE",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.5",
    utenza: "UT.9"
  },
  {
    descrizione: "ALIMENTAZIONE UPS",
    cabina: "CAB.05",
    quadro: "Q.PCC",
    sezione: "S.3",
    utenza: "UT.11"
  },

  // CAB.05 - Q.EIL
  {
    descrizione: "POMPA SOLLEVAMENTO VERTICALE",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.1",
    utenza: "UT.SCH 150"
  },
  {
    descrizione: "POMPA GRANDE VASCONI OVEST PER TINE 54 55",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.1",
    utenza: "UT.SCH 160"
  },
  {
    descrizione: "STRUMENTAZIONE",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.2",
    utenza: "UT.SCH 120"
  },
  {
    descrizione: "POMPA PICCOLA VASCONI EST PER TINE 54 55",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.2",
    utenza: "UT.SCH 230"
  },
  {
    descrizione: "POMPA SOLLEVAMENTO OVEST",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.3",
    utenza: "UT.SCH 170"
  },
  {
    descrizione: "POMPA SOLLEVAMENTO EST",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.3",
    utenza: "UT.SCH 180"
  },
  {
    descrizione: "POMPA SENTINA VASCA POMPE DI SOLLEVAMENTO",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.3",
    utenza: "UT.SCH 190"
  },
  {
    descrizione: "POMPA FANGHI EST",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.4",
    utenza: "UT.SCH 220"
  },
  {
    descrizione: "POMPA 1 POMPA 2 ACQUA FRIZZONE",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.4",
    utenza: "UT.SCH 240"
  },
  {
    descrizione: "GRIGLIA SEDIMENTATORE PRIMARIO",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.4",
    utenza: "UT.SCH 300"
  },
  {
    descrizione: "POMPA RILANCIO DA VASCA ESTERNA",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.4",
    utenza: "UT.SCH 260"
  },
  {
    descrizione: "CENTRALINA EMERGENZA PER CANCELLI ACCESSO PONTE",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.4",
    utenza: "UT.SCH 130"
  },
  {
    descrizione: "PONTE RASCHIATORE",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.4",
    utenza: "UT.SCH 140"
  },
  {
    descrizione: "MIXER 1",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.4",
    utenza: "UT.SCH 270A"
  },
  {
    descrizione: "MIXER 2",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.4",
    utenza: "UT.SCH 270B"
  },
  {
    descrizione: "MIXER 3",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.4",
    utenza: "UT.SCH 270C"
  },
  {
    descrizione: "NASTRO TRASPORTATORE GRIGLIA",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.5",
    utenza: "UT.SCH 320"
  },
  {
    descrizione: "ROTOSTACCIO",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.5",
    utenza: "UT.SCH 340"
  },
  {
    descrizione: "COCLEA SEDIMENTATORE PRIMARIO",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.5",
    utenza: "UT.SCH 350"
  },
  {
    descrizione: "POMPA FANGHI OVEST INVERTER",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.5",
    utenza: "UT.SCH 370"
  },
  {
    descrizione: "ALIMENTAZIONE 110V FLOMITE FRIZZONE",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.2",
    utenza: "UT.SCH"
  },
  {
    descrizione: "ALIMENTAZIONE 110V SEPAL LIVELLO ANTINCENDIO",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.2",
    utenza: "UT.SCH"
  },
  {
    descrizione: "ALIMENTAZIONE 110V ALIMENTATORE ET200M",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.2",
    utenza: "UT.SCH"
  },
  {
    descrizione: "ALIMENTAZIONE 110V SCATOLA ALLARMI PER LABORATORIO",
    cabina: "CAB.05",
    quadro: "Q.EIL",
    sezione: "S.2",
    utenza: "UT.SCH"
  },

  // CAB.06 - Q.ANAE
  {
    descrizione: "POMPA 4 DOSATRICE ACIDO FOSFORICO",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.1",
    utenza: "UT.17"
  },
  {
    descrizione: "POMPA 6 CARICAMENTO SODA",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.2",
    utenza: "UT.21"
  },
  {
    descrizione: "POMPA 7 DOSATRICE SODA",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.2",
    utenza: "UT.22 23"
  },
  {
    descrizione: "STABILIZZATORE",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.2",
    utenza: ""
  },
  {
    descrizione: "PLC + LIVELLI PER ROTOSTACCIO E TORRI RAFFREDDAMENTO",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.3",
    utenza: ""
  },
  {
    descrizione: "ALIMENTAZIONE QUADRI REATTORE VOITH 1",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.4",
    utenza: ""
  },
  {
    descrizione: "AGITATORE BUFFER TANK",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.4",
    utenza: "UT.32"
  },
  {
    descrizione: "POMPA 8A ALIMENTAZIONE TORRI DI RAFFREDDAMENTO A",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.4",
    utenza: "UT.33"
  },
  {
    descrizione: "POMPA 8B ALIMENTAZIONE TORRI DI RAFFREDDAMENTO B",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.4",
    utenza: "UT.34"
  },
  {
    descrizione: "POMPA 5 DOSATRICE UREA",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.5",
    utenza: "UT.19"
  },
  {
    descrizione: "ALIMENTAZIONE RISCALDAMENTO SODA",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.5",
    utenza: ""
  },
  {
    descrizione: "POMPA 10A ALIMENTO REATTORE USAB",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.5",
    utenza: "UT.35"
  },
  {
    descrizione: "POMPA 10B ALIMENTO REATTORE USAB",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.5",
    utenza: "UT.36"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO TELETTA FANGHI",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.6",
    utenza: ""
  },
  {
    descrizione: "VALVOLA MOTORIZZATA",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.6",
    utenza: "UT.25"
  },
  {
    descrizione: "POMPA ACQUA LAVAGGIO REATTORE",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.6",
    utenza: "UT.37"
  },
  {
    descrizione: "POMPA 12A ACQUE DI RISULTA A",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.6",
    utenza: "UT.39"
  },
  {
    descrizione: "POMPA 12B ACQUE DI RISULTA B INVERTER ABB A MURO",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.6",
    utenza: "UT.40"
  },
  {
    descrizione: "POMPA 9B ALIMENTO BUFFER TANK B",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.7",
    utenza: "UT.28"
  },
  {
    descrizione: "VENTILATORE 1A TORRE DI RAFFREDDAMENTO A INV.ABB",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.7",
    utenza: "UT.29"
  },
  {
    descrizione: "VENTILATORE 1B TORRE DI RAFFREDDAMENTO B INV.ABB",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.7",
    utenza: "UT.30"
  },
  {
    descrizione: "POMPA 9B ALIMENTO BUFFER TANK B",
    cabina: "CAB.06",
    quadro: "Q.ANAE",
    sezione: "S.7",
    utenza: "UT.31"
  },

  // CAB.06 - Q.VOITH
  {
    descrizione: "POMPA P04G01 RICICLO 2 REATTORE R2S",
    cabina: "CAB.06",
    quadro: "Q.VOITH",
    sezione: "S.2",
    utenza: ""
  },
  {
    descrizione: "POMPA P01G01 ALIMENTO 1 REATTORE R2S",
    cabina: "CAB.06",
    quadro: "Q.VOITH",
    sezione: "S.2",
    utenza: ""
  },
  {
    descrizione: "POMPA P03G01 RICICLO 1 REATTORE R2S",
    cabina: "CAB.06",
    quadro: "Q.VOITH",
    sezione: "S.3",
    utenza: ""
  },
  {
    descrizione: "POMPA P02G01 ALIMENTO 2 REATTORE R2S",
    cabina: "CAB.06",
    quadro: "Q.VOITH",
    sezione: "S.3",
    utenza: ""
  },

  // CAB.07 - Q,LAGUN
  {
    descrizione: "ALIMENTAZIONE QUADRO PONTE SEDIMENTATORE FINALE",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.1",
    utenza: ""
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO FILTRI SABBIA",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.1",
    utenza: ""
  },
  {
    descrizione: "TRASFORMATORI 380V 220V 110V",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.2",
    utenza: ""
  },
  {
    descrizione: "MAMMUTH 1",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.2",
    utenza: "UT.10"
  },
  {
    descrizione: "MAMMUTH 2",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.2",
    utenza: "UT.11"
  },
  {
    descrizione: "MAMMUTH 3",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.3",
    utenza: "UT.12"
  },
  {
    descrizione: "MAMMUTH 4",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.3",
    utenza: "UT.13"
  },
  {
    descrizione: "MAMMUTH 5",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.4",
    utenza: "UT.14"
  },
  {
    descrizione: "POMPA 15A RICIRCOLO FANGHI",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.4",
    utenza: "UT.15"
  },
  {
    descrizione: "POMPA 15B RICIRCOLO FANGHI",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.4",
    utenza: "UT.19"
  },
  {
    descrizione: "POMPA 14 FANGHI DI SUPERO",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.4",
    utenza: "UT.16"
  },
  {
    descrizione: "STRAMAZZO",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.4",
    utenza: "UT.17"
  },
  {
    descrizione: "POMPA 4A CONTRO LAVAGGIO FILTRI SABBIA",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.5",
    utenza: "UT.20"
  },
  {
    descrizione: "OSSIGENATORE 1",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.6",
    utenza: ""
  },
  {
    descrizione: "OSSIGENATORE 2",
    cabina: "CAB.07",
    quadro: "Q,LAGUN",
    sezione: "S.6",
    utenza: ""
  },

  // CAB.07 - Q,C.S.T.
  {
    descrizione: "POMPA 2A FILTRAZIONE A",
    cabina: "CAB.07",
    quadro: "Q,C.S.T.",
    sezione: "S.1",
    utenza: ""
  },
  {
    descrizione: "POMPA 2B FILTRAZIONE B",
    cabina: "CAB.07",
    quadro: "Q,C.S.T.",
    sezione: "S.1",
    utenza: ""
  },
  {
    descrizione: "POMPA 3A RILANCIO ACQUA A",
    cabina: "CAB.07",
    quadro: "Q,C.S.T.",
    sezione: "S.1",
    utenza: ""
  },
  {
    descrizione: "POMPA 3B RILANCIO ACQUA B",
    cabina: "CAB.07",
    quadro: "Q,C.S.T.",
    sezione: "S.1",
    utenza: ""
  },
  {
    descrizione: "POMPA 4A COMANDO AVVIAMENTO",
    cabina: "CAB.07",
    quadro: "Q,C.S.T.",
    sezione: "S.1",
    utenza: ""
  },

  // CAB.13 - Q.9
  {
    descrizione: "010T POMPA 1",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.3",
    utenza: "UT.20"
  },
  {
    descrizione: "010T POMPA 2",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.3",
    utenza: "UT.21"
  },
  {
    descrizione: "010T RESISTENZA 1",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.3",
    utenza: "UT.22"
  },
  {
    descrizione: "010T RESISTENZA 2",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.4",
    utenza: "UT.23"
  },
  {
    descrizione: "010T VENTILATORE ASPIRAZIONE CONDENSE",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.9",
    utenza: "UT.43"
  },
  {
    descrizione: "010T1 POMPA 1 RILANCIO",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.4",
    utenza: "UT.24"
  },
  {
    descrizione: "010T1 POMPA 2 RILANCIO",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.4",
    utenza: "UT.25"
  },
  {
    descrizione: "060T VENTILATORE SCAMBIATORE",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.10",
    utenza: "UT.47"
  },
  {
    descrizione: "110T POMPA 1",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.9",
    utenza: "UT.26"
  },
  {
    descrizione: "110T POMPA 1 SCAMBIATORE RAFFREDDAMENTO OLIO",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.4",
    utenza: "UT.31"
  },
  {
    descrizione: "110T POMPA 2",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.10",
    utenza: "UT.27"
  },
  {
    descrizione: "110T POMPA 2 SCAMBIATORE RAFFREDDAMENTO OLIO",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.5",
    utenza: "UT.32"
  },
  {
    descrizione: "110T RESISTENZA 1",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.5",
    utenza: "UT.28"
  },
  {
    descrizione: "110T RESISTENZA 2",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.5",
    utenza: "UT.29"
  },
  {
    descrizione: "110T RESISTENZA 3",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.5",
    utenza: "UT.30"
  },
  {
    descrizione: "110T VENTILATORE ASPIRAZIONE CONDENSE",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.9",
    utenza: "UT.44"
  },
  {
    descrizione: "110T VENTILATORE 1",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.4",
    utenza: "UT.33"
  },
  {
    descrizione: "110T VENTILATORE 2",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.5",
    utenza: "UT.34"
  },
  {
    descrizione: "110T VENTILATORE 3",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.7",
    utenza: "UT.35"
  },
  {
    descrizione: "110T VENTILATORE 4",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.8",
    utenza: "UT.36"
  },
  {
    descrizione: "110T VENTILATORE 5",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.8",
    utenza: "UT.37"
  },
  {
    descrizione: "110T VENTILATORE 6",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.8",
    utenza: "UT.38"
  },
  {
    descrizione: "110T1 POMPA 1 RILANCIO",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.8",
    utenza: "UT.39"
  },
  {
    descrizione: "110T1 POMPA 2 RILANCIO",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.8",
    utenza: "UT.40"
  },
  {
    descrizione: "110T2 POMPA 1 RILANCIO",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.9",
    utenza: "UT.41"
  },
  {
    descrizione: "110T2 POMPA 2 RILANCIO",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.9",
    utenza: "UT.42"
  },
  {
    descrizione: "CONDIZIONATORE CABINA 22",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.1",
    utenza: "UT.7"
  },
  {
    descrizione: "ESTRAZIONE ARIA COMPRESSORE 6",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.1",
    utenza: "UT.6"
  },
  {
    descrizione: "MODULE PRO L2 SALITA DISCESA ACQUATROLL PM2",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.3",
    utenza: "UT.12"
  },
  {
    descrizione: "POMPA PREMISTOPPA CUOCITORE AMIDO SIZE PRESS",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.2",
    utenza: "UT.13"
  },
  {
    descrizione: "POMPA SIZE PRESS CILINDRI CENTRALE TERMICA",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.10",
    utenza: "UT.45"
  },
  {
    descrizione: "POMPA SIZE PRESS TESTE CENTRALE TERMICA",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.10",
    utenza: "UT.46"
  },
  {
    descrizione: "POMPA 1 CONDENSE SONDEL",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.2",
    utenza: "UT.8"
  },
  {
    descrizione: "POMPA 2 CONDENSE SONDEL",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.2",
    utenza: "UT.9"
  },
  {
    descrizione: "POMPA CONDENSE SEPARATORE 5",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.3",
    utenza: "UT.15"
  },
  {
    descrizione: "POMPA TRAVASO OLIO PM2",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.3",
    utenza: "UT.16"
  },
  {
    descrizione: "POMPA WATERJET ACQUA FORMACODA",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.7",
    utenza: "UT.19"
  },
  {
    descrizione: "REFRIGERATORE ARIA 2",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.3",
    utenza: "UT.14"
  },
  {
    descrizione: "NASTRINO TAIL SHOOTER 1 SIZE PRESS",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.2",
    utenza: "UT.48"
  },
  {
    descrizione: "V15 TORRINO 1 ESTRAZIONE ARIA",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.1",
    utenza: "UT.2"
  },
  {
    descrizione: "V16 TORRINO 2 ESTRAZIONE ARIA",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.1",
    utenza: "UT.3"
  },
  {
    descrizione: "V17 TORRINO 3 ESTRAZIONE ARIA",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.1",
    utenza: "UT.4"
  },
  {
    descrizione: "V18 TORRINO 4 ESTRAZIONE ARIA",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.1",
    utenza: "UT.5"
  },
  {
    descrizione: "V219 ARIA CALDA PLAFONE 3",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.2",
    utenza: "UT.10"
  },
  {
    descrizione: "V220 ARIA CALDA PLAFONE4",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.2",
    utenza: "UT.11"
  },
  {
    descrizione: "VENTILATORE CARROPONTE",
    cabina: "CAB.13",
    quadro: "Q.9",
    sezione: "S.1",
    utenza: "UT.1"
  },

  // CAB.13/A - Q.MURO SX
  {
    descrizione: "TAIL SHOOTER TAPPETO 1",
    cabina: "CAB.13/A",
    quadro: "Q.MURO SX",
    sezione: "",
    utenza: ""
  },
  {
    descrizione: "TAIL SHOOTER TAPPETO 2",
    cabina: "CAB.13/A",
    quadro: "Q.MURO SX",
    sezione: "",
    utenza: ""
  },
  {
    descrizione: "TAIL SHOOTER TAPPETO 3",
    cabina: "CAB.13/A",
    quadro: "Q.MURO SX",
    sezione: "",
    utenza: ""
  },
  {
    descrizione: "POMPA 1 CALANDRA LISCIA",
    cabina: "CAB.13/A",
    quadro: "Q.MURO SX",
    sezione: "",
    utenza: ""
  },
  {
    descrizione: "POMPA 2 CALANDRA LISCIA",
    cabina: "CAB.13/A",
    quadro: "Q.MURO SX",
    sezione: "",
    utenza: ""
  },
  {
    descrizione: "SCAMBIATORE CALANDRA LISCIA",
    cabina: "CAB.13/A",
    quadro: "Q.MURO SX",
    sezione: "",
    utenza: ""
  },
  {
    descrizione: "POMPA 1 KUSTERS OSCILLATORE",
    cabina: "CAB.13/A",
    quadro: "Q.MURO SX",
    sezione: "",
    utenza: ""
  },
  {
    descrizione: "POMPA 2 KUSTERS OSCILLATORE",
    cabina: "CAB.13/A",
    quadro: "Q.MURO SX",
    sezione: "",
    utenza: ""
  },
  {
    descrizione: "SCAMBIATORE KUSTERS OSCILLATORE",
    cabina: "CAB.13/A",
    quadro: "Q.MURO SX",
    sezione: "",
    utenza: ""
  },
  {
    descrizione: "RESISTENZE KUSTERS OSCILLATORE",
    cabina: "CAB.13/A",
    quadro: "Q.MURO SX",
    sezione: "",
    utenza: ""
  },
  {
    descrizione: "RASCHIA SUPERIORE OSCILLATORE",
    cabina: "CAB.13/A",
    quadro: "Q.MURO",
    sezione: "SX",
    utenza: ""
  },
  {
    descrizione: "RASCHIA INFERIORE OSCILLATORE",
    cabina: "CAB.13/A",
    quadro: "Q.MURO SX",
    sezione: "",
    utenza: ""
  },
  {
    descrizione: "ALIMENTAZIONE REMOTAZIONE CENTRALI E PULPITO",
    cabina: "CAB.13/A",
    quadro: "Q.MURO SX",
    sezione: "",
    utenza: ""
  },
  {
    descrizione: "ALIMENTAZIONE CENTRALE ACQUA",
    cabina: "CAB.13/A",
    quadro: "Q.MURO SX",
    sezione: "",
    utenza: ""
  },
  {
    descrizione: "ALIMENTAZIONE CENTRALINA PASSAGGIO CODA",
    cabina: "CAB.13/A",
    quadro: "Q.MURO SX",
    sezione: "",
    utenza: ""
  },
  {
    descrizione: "VIS PM2 TELECAMERE POPE",
    cabina: "CAB.13/A",
    quadro: "",
    sezione: "",
    utenza: ""
  },

  // CAB.14 - Q.F / Q.G / Q.H / Q.7
  {
    descrizione: "AEREOTERMO EST",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.8",
    utenza: "UT.24"
  },
  {
    descrizione: "AEREOTERMO OVET",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.8",
    utenza: "UT.23"
  },
  {
    descrizione: "AGITATORE TINA 4",
    cabina: "CAB.14",
    quadro: "Q.H",
    sezione: "S.7",
    utenza: "UT.8"
  },
  {
    descrizione: "AGITATORE TINA 5",
    cabina: "CAB.14",
    quadro: "Q.G",
    sezione: "S.8",
    utenza: "UT.4"
  },
  {
    descrizione: "POMPA ALTA PRESSIONE",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.2",
    utenza: "UT.13"
  },
  {
    descrizione: "AGITATORE 28",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.M",
    utenza: "UT.13"
  },
  {
    descrizione: "AGITATORE 29",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.L",
    utenza: "UT.23"
  },
  {
    descrizione: "AGITATORE 30",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.M",
    utenza: "UT.15"
  },
  {
    descrizione: "AGITATORE 35 TINA 35",
    cabina: "CAB.14",
    quadro: "Q.G",
    sezione: "S.3",
    utenza: "UT.35"
  },
  {
    descrizione: "AGITATORE 36",
    cabina: "CAB.14",
    quadro: "Q.H",
    sezione: "S.7",
    utenza: "UT.9"
  },
  {
    descrizione: "AGITATORE 37",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.O",
    utenza: "UT.9"
  },
  {
    descrizione: "AGITATORE 38",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.C",
    utenza: "UT.92"
  },
  {
    descrizione: "AGITATORE 39",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.D",
    utenza: "UT.74"
  },
  {
    descrizione: "AGITATORE 43",
    cabina: "CAB.14",
    quadro: "Q.G",
    sezione: "S.1",
    utenza: "UT.21"
  },
  {
    descrizione: "AGITATORE TINELLO 45",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.1",
    utenza: "UT.8"
  },
  {
    descrizione: "AGITATORE 53 TINA 53",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.2",
    utenza: "UT.25"
  },
  {
    descrizione: "AGITATORE 56 TINELLO 56",
    cabina: "CAB.14",
    quadro: "Q.H",
    sezione: "S.8",
    utenza: "UT.30"
  },
  {
    descrizione: "AGITATORE 65",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.B",
    utenza: "UT.30"
  },
  {
    descrizione: "AGITATORE V2 ALTO",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.A",
    utenza: "UT.113"
  },
  {
    descrizione: "AGITATORE V2 BASSO",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.A",
    utenza: "UT.114"
  },
  {
    descrizione: "ALIMENTAZIONE Q. SPINGIDISCHI RAFFINATORI",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.N",
    utenza: "UT.114"
  },
  {
    descrizione: "ALIMENTAZIONE CELLE DI FLOTTAZIONE",
    cabina: "CAB.14",
    quadro: "Q.H",
    sezione: "S.2",
    utenza: "UT.77"
  },
  {
    descrizione: "ALIMENTAZIONE 110V QUADRO 10 (3000V)",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.E",
    utenza: "UT.12"
  },
  {
    descrizione: "ALIMENTAZIONE 110V QUADRO 11 (3000V)",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.E",
    utenza: "UT.31"
  },
  {
    descrizione: "ALIMENTAZIONE 220V BTG PTC-20",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.D",
    utenza: "UT.133"
  },
  {
    descrizione: "ALIMENTAZIONE 220V BTG TSS-70",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.D",
    utenza: "UT.134"
  },
  {
    descrizione: "ALIMENTAZIONE 220V NASTRO PULPER6",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.D",
    utenza: "UT.131"
  },
  {
    descrizione: "ALIMENTAZIONE 220V QUADRO NEW-2 YOKO",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.E",
    utenza: "UT.33"
  },
  {
    descrizione: "ALIMENTAZIONE INVERTER POMPA TINA 4",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.5",
    utenza: "UT.6"
  },
  {
    descrizione: "ALIMENTAZIONE INVERTER PULPER 6",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.G",
    utenza: ""
  },
  {
    descrizione: "ALIMENTAZIONE Q. BOBINOVIA MAG. BOBINE",
    cabina: "CAB.14",
    quadro: "Q.G",
    sezione: "S.7",
    utenza: "UT.14"
  },
  {
    descrizione: "ALIMENTAZIONE Q. TAGLIAFILI NASTRO PULPER 6",
    cabina: "CAB.14",
    quadro: "Q.G",
    sezione: "S.8",
    utenza: "UT.8"
  },
  {
    descrizione: "ALIMENTAZIONE Q. BIOCIDA",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.2",
    utenza: ""
  },
  {
    descrizione: "ALIMENTAZIONE Q. FILTRO ACQUEDOTTO IND.",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.N",
    utenza: "UT.78"
  },
  {
    descrizione: "ALIMENTAZIONE INVERTER COMBISORTER 4-5",
    cabina: "CAB.14",
    quadro: "Q.H",
    sezione: "S.5",
    utenza: ""
  },
  {
    descrizione: "ALIMENTAZIONE INVERTER POMPA TINA 5",
    cabina: "CAB.14",
    quadro: "Q.G",
    sezione: "S.4",
    utenza: "UT.5"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO SCARTI CAB.19",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.F",
    utenza: "UT.75"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO COLORE",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.F",
    utenza: "UT.202"
  },
  {
    descrizione: "ALIMENTAZIONE QUADRO SHEDDER",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.I",
    utenza: "UT.11"
  },
  {
    descrizione: "CALDAIA ELETTRICA",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.1",
    utenza: "UT.36"
  },
  {
    descrizione: "CARROPONTE COMBISORTER",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.C",
    utenza: "UT.90"
  },
  {
    descrizione: "CARROPONTE RAFFINAZIONE",
    cabina: "CAB.14",
    quadro: "Q.H",
    sezione: "S.1",
    utenza: "UT.24"
  },
  {
    descrizione: "COCLEA PULPER 6 JUNK BOX",
    cabina: "CAB.14",
    quadro: "Q.G",
    sezione: "S.1",
    utenza: "UT.20"
  },
  {
    descrizione: "COCLEA 1 SUNDS TINA38",
    cabina: "CAB.14",
    quadro: "Q.H",
    sezione: "S.8",
    utenza: "UT.28"
  },
  {
    descrizione: "COCLEA 2 SUNDS TINA39",
    cabina: "CAB.14",
    quadro: "Q.H",
    sezione: "S.8",
    utenza: "UT.29"
  },
  {
    descrizione: "COCLEA 9",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.8",
    utenza: "UT.17"
  },
  {
    descrizione: "COCLEA 10",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.8",
    utenza: "UT.18"
  },
  {
    descrizione: "COCLEA 11",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.8",
    utenza: "UT.19"
  },
  {
    descrizione: "COCLEA 12",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.8",
    utenza: "UT.20"
  },
  {
    descrizione: "COCLEA 13",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.8",
    utenza: "UT.21"
  },
  {
    descrizione: "COCLEA 14",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.8",
    utenza: "UT.22"
  },
  {
    descrizione: "COCLEA SABBIERA CICLONI RAFFINAZIONE",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.I",
    utenza: "UT.8"
  },
  {
    descrizione: "ALIMENTAZIONE INVERTER COMBISORTER 1-3",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.G",
    utenza: "UT.3"
  },
  {
    descrizione: "SEPARATORE FIBERFRACTOR LINEA 4",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.7",
    utenza: "UT.15"
  },
  {
    descrizione: "SEPARATORE FIBERFRACTOR LINEA 5",
    cabina: "CAB.14",
    quadro: "Q.G",
    sezione: "S.5",
    utenza: "UT.12"
  },
  {
    descrizione: "1º STADIO LINEA 4 FIBERSORTER",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.5",
    utenza: "UT.7"
  },
  {
    descrizione: "1º STADIO LINEA 5 FIBERSORTER",
    cabina: "CAB.14",
    quadro: "Q.G",
    sezione: "S.5",
    utenza: "UT.6"
  },
  {
    descrizione: "2° STADIO LINEA 4 FIBERSORTER",
    cabina: "CAB.14",
    quadro: "Q.F",
    sezione: "S.7",
    utenza: "UT.10"
  },
  {
    descrizione: "1º STADIO LINEA 5 FIBERSORTER",
    cabina: "CAB.14",
    quadro: "Q.G",
    sezione: "S.7",
    utenza: "UT.9"
  },
  {
    descrizione: "FLOMITI COMBISORTER",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.E",
    utenza: "UT.34"
  },
  {
    descrizione: "HYDROPURG 7 PULPER 6 SUD",
    cabina: "CAB.14",
    quadro: "Q.G",
    sezione: "S.3",
    utenza: "UT.1"
  },
  {
    descrizione: "HYDROPURG 8 PULPER 6 NORD",
    cabina: "CAB.14",
    quadro: "Q.G",
    sezione: "S.9",
    utenza: "UT.22"
  },
  {
    descrizione: "NASTRINO 6",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.I",
    utenza: "UT.6"
  },
  {
    descrizione: "NASTRINO 7",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.I",
    utenza: "UT.7"
  },
  {
    descrizione: "NASTRO PULPER 6",
    cabina: "CAB.14",
    quadro: "Q.7",
    sezione: "S.D",
    utenza: "UT.72"
  },
  {
    descrizione: "TAMBURO ASSORTITORE 1 PULPER 6 OSCILLATORE",
    cabina: "CAB.14",
    quadro: "Q.G",
    sezione: "S.1",
    utenza: "UT.3"
  }
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
