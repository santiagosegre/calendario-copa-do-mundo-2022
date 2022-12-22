// CRIAR NAVEGAÇÃO TIME
function crateNav(nameTeam) {
  return `
  <h1>${nameTeam}</h1>
`
}

document.querySelector("#navigation-team").innerHTML = crateNav("Fase Final")

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
  createMenu("ri-calendar-event-line", "Calendário", "calendario")

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

document.querySelector("#cards").innerHTML =
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
    createGame("LUSAIL", "12:00 *", "argentina", "3", "4", "3", "3", "france")
  )
