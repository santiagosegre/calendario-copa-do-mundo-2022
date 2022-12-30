// CRIAR NAVEGAÇÃO TIME
function crateNav(nameTeam) {
  return `
  <h1>${nameTeam}</h1>
`
}

document.querySelector("#navigation-team").innerHTML = crateNav("Calendário")

function createMenu(icon, menu, page) {
  return `
<ul>
  <a href="${page}.html">
    <li data-aos="zoom-in">
      <i class="${icon}"></i>
      <h3>${menu}</h3>
    </li>
  </a>
</ul>
`
}

document.querySelector("#menu-options").innerHTML =
  createMenu("ri-home-5-line", "Início", "../index") +
  createMenu("ri-table-line", "Grupos", "grupos") +
  createMenu("ri-trophy-line", "Fase Final", "fase-final")

function createGame(
  estadio,
  hour,
  player1,
  placar1,
  penalty1,
  penalty2,
  placar2,
  player2
) {
  return `
<li data-aos="zoom-in">
  <div class="info-game">
  <i class="ri-map-pin-line"></i>
  <span>${estadio}</span>
  <i class="ri-time-line"></i> 
  <span>${hour}</span>
  </div>
  <div class="placar">
    <a href="${player1}.html"><img src="../assets/teams/icon-${player1}.svg" alt="flag ${player1}"></a>
    <strong class="placar1">${placar1}</strong>
    <span class="penalty1">${penalty1}</span>
    <span>X</span>
    <span class="penalty2">${penalty2}</span>
    <strong class="placar2">${placar2}</strong>
    <a href="${player2}.html"><img src="../assets/teams/icon-${player2}.svg" alt="flag ${player2}"></a>
  </div>
</li>  
`
}

function createCard(date, day, games) {
  return `
  <div class="card" data-aos="fade-up">
    <h2 data-aos="zoom-in">${date} <span>${day}</span></h2>
    <ul>
      ${games}            
    </ul>
  </div>
  `
}

function creatSpace(fase) {
  return `
  <div class="fase">
    <div class="fase-final1" data-aos="fade-up">
      <h2>
        ${fase}
      </h2>
    </div>
  </div>
  `
}

//CRIAR JOGOS

document.querySelector("#cards").innerHTML = creatSpace("Fase de Grupos") +
  createCard(
    "20/11",
    "domingo",
    createGame("AL BAYT", "13:00 *", "qatar", "0", "", "", "2", "ecuador")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame(
      "INTERNACIONAL KHALIFA",
      "10:00 *",
      "england",
      "6",
      "",
      "",
      "2",
      "iran"
    ) +
      createGame(
        "AL THUMAMA",
        "13:00 *",
        "senegal",
        "0",
        "",
        "",
        "2",
        "netherlands"
      ) +
      createGame(
        "AHMAD BIN ALI",
        "16:00 *",
        "united-states",
        "1",
        "",
        "",
        "1",
        "wales"
      )
  ) +
  createCard(
    "22/11",
    "terça",
    createGame(
      "LUSAIL",
      "07:00 *",
      "argentina",
      "1",
      "",
      "",
      "2",
      "saudi-arabia"
    ) +
      createGame(
        "CIDADE DA EDUCAÇÃO",
        "10:00 *",
        "denmark",
        "0",
        "",
        "",
        "0",
        "tunisia"
      ) +
      createGame(
        "ESTÁDIO 974",
        "13:00 *",
        "mexico",
        "0",
        "",
        "",
        "0",
        "poland"
      ) +
      createGame(
        "AL JANOUB",
        "16:00 *",
        "france",
        "4",
        "",
        "",
        "1",
        "australia"
      )
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("AL BAYT", "07:00 *", "morocco", "0", "", "", "0", "croatia") +
      createGame(
        "INTERNACIONAL KHALIFA",
        "10:00 *",
        "germany",
        "1",
        "",
        "",
        "2",
        "japan"
      ) +
      createGame(
        "AL THUMAMA",
        "13:00 *",
        "spain",
        "7",
        "",
        "",
        "0",
        "costa-rica"
      ) +
      createGame(
        "AHMAD BIN ALI",
        "16:00 *",
        "belgium",
        "1",
        "",
        "",
        "0",
        "canada"
      )
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame(
      "AL JANOUB",
      "07:00 *",
      "switzerland",
      "1",
      "",
      "",
      "0",
      "cameroon"
    ) +
      createGame(
        "CIDADE DA EDUCAÇÃO",
        "10:00 *",
        "uruguay",
        "0",
        "",
        "",
        "0",
        "south-korea"
      ) +
      createGame(
        "ESTÁDIO 974",
        "13:00 *",
        "portugal",
        "3",
        "",
        "",
        "2",
        "ghana"
      ) +
      createGame("LUSAIL", "16:00 *", "brazil", "2", "", "", "0", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("AHMAD BIN ALI", "07:00 *", "wales", "0", "", "", "2", "iran") +
      createGame(
        "AL THUMAMA",
        "10:00 *",
        "qatar",
        "1",
        "",
        "",
        "3",
        "senegal"
      ) +
      createGame(
        "INTERNACIONAL KHALIFA",
        "13:00 *",
        "netherlands",
        "1",
        "",
        "",
        "1",
        "ecuador"
      ) +
      createGame(
        "AL BAYT ",
        "16:00 *",
        "england",
        "0",
        "",
        "",
        "0",
        "united-states"
      )
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame(
      "AL JANOUB",
      "07:00 *",
      "tunisia",
      "0",
      "",
      "",
      "1",
      "australia"
    ) +
      createGame(
        "CIDADE DA EDUCAÇÃO",
        "10:00 *",
        "poland",
        "2",
        "",
        "",
        "0",
        "saudi-arabia"
      ) +
      createGame(
        "ESTÁDIO 974 ",
        "13:00 *",
        "france",
        "2",
        "",
        "",
        "1",
        "denmark"
      ) +
      createGame("LUSAIL", "16:00 *", "argentina", "2", "", "", "0", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame(
      "AHMAD BIN ALI",
      "07:00 *",
      "japan",
      "0",
      "",
      "",
      "1",
      "costa-rica"
    ) +
      createGame(
        "AL THUMAMA",
        "10:00 *",
        "belgium",
        "0",
        "",
        "",
        "2",
        "morocco"
      ) +
      createGame(
        "INTERNACIONAL KHALIFA",
        "13:00 *",
        "croatia",
        "4",
        "",
        "",
        "1",
        "canada"
      ) +
      createGame("AL BAYT", "16:00 *", "spain", "1", "", "", "1", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("AL JANOUB", "07:00 *", "cameroon", "3", "", "", "3", "serbia") +
      createGame(
        "CIDADE DA EDUCAÇÃO",
        "10:00 *",
        "south-korea",
        "2",
        "",
        "",
        "3",
        "ghana"
      ) +
      createGame(
        "ESTÁDIO 974",
        "13:00 *",
        "brazil",
        "1",
        "",
        "",
        "0",
        "switzerland"
      ) +
      createGame("LUSAIL", "16:00 *", "portugal", "2", "", "", "0", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("AL BAYT", "12:00 *", "netherlands", "2", "", "", "0", "qatar") +
      createGame(
        "INTERNACIONAL KHALIFA",
        "12:00 *",
        "ecuador",
        "1",
        "",
        "",
        "2",
        "senegal"
      ) +
      createGame(
        "AHMAD BIN ALI",
        "16:00 *",
        "wales",
        "0",
        "",
        "",
        "3",
        "england"
      ) +
      createGame(
        "AL THUMAMA",
        "16:00 *",
        "iran",
        "0",
        "",
        "",
        "1",
        "united-states"
      )
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame(
      "AL JANOUB",
      "12:00 *",
      "australia",
      "1",
      "",
      "",
      "0",
      "denmark"
    ) +
      createGame(
        "CIDADE DA EDUCAÇÃO",
        "12:00 *",
        "tunisia",
        "1",
        "",
        "",
        "0",
        "france"
      ) +
      createGame(
        "ESTÁDIO 974",
        "16:00 *",
        "poland",
        "0",
        "",
        "",
        "2",
        "argentina"
      ) +
      createGame(
        "LUSAIL",
        "16:00 *",
        "saudi-arabia",
        "1",
        "",
        "",
        "2",
        "mexico"
      )
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame(
      "AHMAD BIN ALI",
      "12:00 *",
      "croatia",
      "0",
      "",
      "",
      "0",
      "belgium"
    ) +
      createGame(
        "AL THUMAMA ",
        "12:00 *",
        "canada",
        "1",
        "",
        "",
        "2",
        "morocco"
      ) +
      createGame(
        "INTERNACIONAL KHALIFA",
        "16:00 *",
        "japan",
        "2",
        "",
        "",
        "0",
        "spain"
      ) +
      createGame(
        "AL BAYT",
        "16:00 *",
        "costa-rica",
        "2",
        "",
        "",
        "4",
        "germany"
      )
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("AL JANOUB", "12:00 *", "ghana", "0", "", "", "2", "uruguay") +
      createGame(
        "CIDADE DA EDUCAÇÃO",
        "12:00 *",
        "south-korea",
        "2",
        "",
        "",
        "1",
        "portugal"
      ) +
      createGame(
        "ESTÁDIO 974",
        "16:00 *",
        "serbia",
        "2",
        "",
        "",
        "3",
        "switzerland"
      ) +
      createGame("LUSAIL", "16:00 *", "cameroon", "1", "", "", "0", "brazil")
  ) +
  creatSpace("Oitavas de Final") +
  createCard(
    "03/12",
    "sábado",
    createGame(
      "INTERNACIONAL KHALIFA",
      "12:00 *",
      "netherlands",
      "3",
      "",
      "",
      "1",
      "united-states"
    ) +
      createGame(
        "AHMAD BIN ALI",
        "16:00 *",
        "argentina",
        "2",
        "",
        "",
        "1",
        "australia"
      )
  ) +
  createCard(
    "04/12",
    "domingo",
    createGame("AL THUMAMA", "12:00 *", "france", "3", "", "", "1", "poland") +
      createGame("AL BAYT", "16:00 *", "england", "3", "", "", "0", "senegal")
  ) +
  createCard(
    "05/12",
    "segunda",
    createGame("AL JANOUB", "12:00 *", "japan", "1", "1", "3", "1", "croatia") +
      createGame(
        "ESTÁDIO 974",
        "16:00 *",
        "brazil",
        "4",
        "",
        "",
        "1",
        "south-korea"
      )
  ) +
  createCard(
    "06/12",
    "terça",
    createGame(
      "CIDADE DA EDUCAÇÃO",
      "12:00 *",
      "morocco",
      "0",
      "3",
      "0",
      "0",
      "spain"
    ) +
      createGame(
        "LUSAIL",
        "16:00 *",
        "portugal",
        "6",
        "",
        "",
        "1",
        "switzerland"
      )
  ) +
  creatSpace("Quartas de Final") +
  createCard(
    "09/12",
    "sexta",
    createGame(
      "CIDADE DA EDUCAÇÃO",
      "12:00 *",
      "croatia",
      "1",
      "4",
      "2",
      "1",
      "brazil"
    ) +
      createGame(
        "LUSAIL",
        "16:00 *",
        "netherlands",
        "2",
        "3",
        "4",
        "2",
        "argentina"
      )
  ) +
  createCard(
    "10/12",
    "sábado",
    createGame(
      "AL THUMAMA",
      "12:00 *",
      "morocco",
      "1",
      "",
      "",
      "0",
      "portugal"
    ) + createGame("AL BAYT", "16:00 *", "england", "1", "", "", "2", "france")
  ) +
  creatSpace("SEMIFINAL") +
  createCard(
    "13/12",
    "terça",
    createGame("LUSAIL", "16:00 *", "argentina", "3", "", "", "0", "croatia")
  ) +
  createCard(
    "14/12",
    "quarta",
    createGame("AL BAYT", "16:00 *", "france", "2", "", "", "0", "morocco")
  ) +
  creatSpace("DISPUTA DO 3º LUGAR") +
  createCard(
    "17/12",
    "sábado",
    createGame(
      "INTERNACIONAL KHALIFA",
      "12:00 *",
      "croatia",
      "2",
      "",
      "",
      "1",
      "morocco"
    )
  ) +
  creatSpace("FINAL") +
  createCard(
    "18/12",
    "domingo",
    createGame("LUSAIL", "12:00 *", "argentina", "3", "4", "2", "3", "france")
  )
