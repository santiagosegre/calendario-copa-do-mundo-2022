// CRIAR NAVEGAÇÃO TIME
function crateNav(team, nameTeam) {
  return `
  <img src="../assets/teams/icon-${team}.svg" alt="flag ${team}" width="40px" height="40px">
  <h1>${nameTeam}</h1>
`
}

document.querySelector("#navigation-team").innerHTML = crateNav(
  "netherlands",
  "Holanda"
)

// CRIAR MENU DE OPÇÕES
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

// CRIAR JOGO
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

//CRIAR CARD DE DATA
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

// jogos da holanda
document.querySelector("#cards-netherlands").innerHTML =
  createCard(
    "21/11",
    "segunda",
    createGame("AL THUMAMA", "13:00 *", "senegal", "0", "2", "netherlands")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame(
      "INTERNACIONAL KHALIFA",
      "13:00 *",
      "netherlands",
      "1",
      "1",
      "ecuador"
    )
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("AL BAYT", "12:00 *", "netherlands", "2", "0", "qatar")
  )
//

// CRIAR GRUPO
function createGroup(
  group,
  player1,
  namePlayer1,
  player2,
  namePlayer2,
  player3,
  namePlayer3,
  player4,
  namePlayer4
) {
  return `
  <div class="group" data-aos="fade-up">
      <h2 data-aos="zoom-in">${group}</h2>
      <ul>
        <a href="${player1}.html">
          <li>
            <img src="../assets/teams/icon-${player1}.svg" alt="flag ${player1}">
            <span>
                ${namePlayer1}
            </span>
          </li>
        </a>
      
        <a href="${player2}.html">
          <li>
            <img src="../assets/teams/icon-${player2}.svg" alt="flag ${player2}">
            <span>
                ${namePlayer2}
            </span>
          </li>
        </a>
        
        <a href="${player3}.html">
          <li>
            <img src="../assets/teams/icon-${player3}.svg" alt="flag ${player3}">
            <span>
                ${namePlayer3}
            </span>
          </li>
        </a>
      
        <a href="${player4}.html">
          <li>
            <img src="../assets/teams/icon-${player4}.svg" alt="flag ${player4}">
            <span>
                ${namePlayer4}
            </span>
          </li>
        </a>
      </ul>
  </div>
  `
}

// GRUPO A
document.querySelector("#group-a").innerHTML = createGroup(
  "Grupo a",
  "qatar",
  "Qatar",
  "ecuador",
  "Equador",
  "senegal",
  "Senegal",
  "netherlands",
  "Holanda"
)
