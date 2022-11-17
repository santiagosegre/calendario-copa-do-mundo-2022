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
  createMenu("ri-table-line", "Grupos", "grupos")

function createGame(estadio, hour, player1, placar1, placar2, player2) {
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
    <span>X</span>
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

//CRIAR JOGOS

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "domingo",
    createGame("AL BAYT", "13:00 *", "qatar", "", "", "ecuador")
  ) +
  createCard(
    "21/11",
    "segunda",
    createGame("INTERNACIONAL KHALIFA", "10:00 *", "england", "", "", "iran") +
      createGame("AL THUMAMA", "13:00 *", "senegal", "", "", "netherlands") +
      createGame("AHMAD BIN ALI", "16:00 *", "united-states", "", "", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("LUSAIL", "07:00 *", "argentina", "", "", "saudi-arabia") +
      createGame(
        "CIDADE DA EDUCAÇÃO",
        "10:00 *",
        "denmark",
        "",
        "",
        "tunisia"
      ) +
      createGame("ESTÁDIO 974", "13:00 *", "mexico", "", "", "poland") +
      createGame("AL JANOUB", "16:00 *", "france", "", "", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("AL BAYT", "07:00 *", "morocco", "", "", "croatia") +
      createGame(
        "INTERNACIONAL KHALIFA",
        "10:00 *",
        "germany",
        "",
        "",
        "japan"
      ) +
      createGame("AL THUMAMA", "13:00 *", "spain", "", "", "costa-rica") +
      createGame("AHMAD BIN ALI", "16:00 *", "belgium", "", "", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("AL JANOUB", "07:00 *", "switzerland", "", "", "cameroon") +
      createGame(
        "CIDADE DA EDUCAÇÃO",
        "10:00 *",
        "uruguay",
        "",
        "",
        "south-korea"
      ) +
      createGame("ESTÁDIO 974", "13:00 *", "portugal", "", "", "ghana") +
      createGame("LUSAIL", "16:00 *", "brazil", "", "", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("AHMAD BIN ALI", "07:00 *", "wales", "", "", "iran") +
      createGame("AL THUMAMA", "10:00 *", "qatar", "", "", "senegal") +
      createGame(
        "INTERNACIONAL KHALIFA",
        "13:00 *",
        "netherlands",
        "",
        "",
        "ecuador"
      ) +
      createGame("AL BAYT ", "16:00 *", "england", "", "", "united-states")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("AL JANOUB", "07:00 *", "tunisia", "", "", "australia") +
      createGame(
        "CIDADE DA EDUCAÇÃO",
        "10:00 *",
        "poland",
        "",
        "",
        "saudi-arabia"
      ) +
      createGame("ESTÁDIO 974 ", "13:00 *", "france", "", "", "denmark") +
      createGame("LUSAIL", "16:00 *", "argentina", "", "", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("AHMAD BIN ALI", "07:00 *", "japan", "", "", "costa-rica") +
      createGame("AL THUMAMA", "10:00 *", "belgium", "", "", "morocco") +
      createGame(
        "INTERNACIONAL KHALIFA",
        "13:00 *",
        "croatia",
        "",
        "",
        "canada"
      ) +
      createGame("AL BAYT", "16:00 *", "spain", "", "", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("AL JANOUB", "07:00 *", "cameroon", "", "", "serbia") +
      createGame(
        "CIDADE DA EDUCAÇÃO",
        "10:00 *",
        "south-korea",
        "",
        "",
        "ghana"
      ) +
      createGame("ESTÁDIO 974", "13:00 *", "brazil", "", "", "switzerland") +
      createGame("LUSAIL", "16:00 *", "portugal", "", "", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("AL BAYT", "12:00 *", "netherlands", "", "", "qatar") +
      createGame(
        "INTERNACIONAL KHALIFA",
        "12:00 *",
        "ecuador",
        "",
        "",
        "senegal"
      ) +
      createGame("AHMAD BIN ALI", "16:00 *", "wales", "", "", "england") +
      createGame("AL THUMAMA", "16:00 *", "iran", "", "", "united-states")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("AL JANOUB", "12:00 *", "australia", "", "", "denmark") +
      createGame("CIDADE DA EDUCAÇÃO", "12:00 *", "tunisia", "", "", "france") +
      createGame("ESTÁDIO 974", "16:00 *", "poland", "", "", "argentina") +
      createGame("LUSAIL", "16:00 *", "saudi-arabia", "", "", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("AHMAD BIN ALI", "12:00 *", "croatia", "", "", "belgium") +
      createGame("AL THUMAMA ", "12:00 *", "canada", "", "", "morocco") +
      createGame(
        "INTERNACIONAL KHALIFA ",
        "16:00 *",
        "japan",
        "",
        "",
        "spain"
      ) +
      createGame("AL BAYT", "16:00 *", "costa-rica", "", "", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("AL JANOUB", "12:00 *", "ghana", "", "", "uruguay") +
      createGame(
        "CIDADE DA EDUCAÇÃO",
        "12:00 *",
        "south-korea",
        "",
        "",
        "portugal"
      ) +
      createGame("ESTÁDIO 974", "16:00 *", "serbia", "", "", "switzerland") +
      createGame("LUSAIL", "16:00 *", "cameroon", "", "", "brazil")
  )
