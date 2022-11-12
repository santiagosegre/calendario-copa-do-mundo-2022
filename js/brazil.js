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

function createGame(player1, hour, player2) {
  return `
  <li data-aos="zoom-in">
    <a href="${player1}.html"><img src="../assets/teams/icon-${player1}.svg" alt="flag ${player1}"> </a>
    <strong>${hour}</strong>
    <a href="${player2}.html"><img src="../assets/teams/icon-${player2}.svg" alt="flag ${player2}"></a>
  </li>  
  `
}
  
// CRIAR CARD DE DATA
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
  
  // jogos do Brasil
document.querySelector("#cards-brazil").innerHTML =
  createCard("24/11", "quinta", createGame("brazil", "20:00", "serbia")) +
  createCard("28/11", "segunda", createGame("brazil", "17:00", "switzerland")) +
  createCard("02/12", "sexta", createGame("cameroon", "20:00", "brazil"))
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

// GRUPO G
document.querySelector("#group-g").innerHTML = createGroup(
  "Grupo g",
  "brazil",
  "Brasil",
  "serbia",
  "Sérvia",
  "switzerland",
  "Suíça",
  "cameroon",
  "Camarões"
)
//

