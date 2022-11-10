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

function createGroup(group, player1, player2, player3, player4) {
  return `
  <div class="group" data-aos="fade-up">
      <h2 data-aos="zoom-in">${group}</h2>
      <ul>

    <a href="${player1}.html">
      <li>
        <img src="../assets/teams/icon-${player1}.svg" alt="flag ${player1}">
        <span>
            ${player1}
        </span>
        </li>
    </a>
    <a href="${player2}.html">
      <li>
        <img src="../assets/teams/icon-${player2}.svg" alt="flag ${player2}">
        <span>
            ${player2}
        </span>
        </li>
    </a>
    <a href="${player3}.html">
      <li>
        <img src="../assets/teams/icon-${player3}.svg" alt="flag ${player3}">
        <span>
            ${player3}
        </span>
        </li>
    </a>
    <a href="${player4}.html">
      <li>
        <img src="../assets/teams/icon-${player4}.svg" alt="flag ${player4}">
        <span>
            ${player4}
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
  "ecuador",
  "senegal",
  "netherlands"
)
//

function createGame(player1, hour, player2) {
  return `
  <li data-aos="zoom-in">
    <a href="${player1}.html"><img src="../assets/teams/icon-${player1}.svg" alt="flag ${player1}"> </a>
    <strong>${hour}</strong>
    <a href="${player2}.html"><img src="../assets/teams/icon-${player2}.svg" alt="flag ${player2}"></a>
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

//JOGOS DO QATAR
document.querySelector("#cards-netherlands").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "17:00", "ecuador")) +
  createCard("25/11", "sexta", createGame("qatar", "14:00", "senegal")) +
  createCard("29/11", "terça", createGame("netherlands", "16:00", "qatar"))
//
