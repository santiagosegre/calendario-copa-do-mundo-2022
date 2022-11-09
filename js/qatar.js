let delay = -0.5

function createGroup(group, player1, player2, player3, player4) {
  delay = delay + 0.5
  return `
  <div class="group" style="animation-delay: ${delay}s">
      <h2>${group}</h2>
      <ul>
    <li>
      <img src="../assets/teams/icon-${player1}.svg" alt="flag ${player1}">
      <span>
          ${player1}
      </span>
  </li>
    <li>
      <img src="../assets/teams/icon-${player2}.svg" alt="flag ${player2}">
      <span>
          ${player2}
      </span>
  </li>
    <li>
      <img src="../assets/teams/icon-${player3}.svg" alt="flag ${player3}">
      <span>
          ${player3}
      </span>
  </li>
    <li>
      <img src="../assets/teams/icon-${player4}.svg" alt="flag ${player4}">
      <span>
          ${player4}
      </span>
  </li>
      </ul>
  </div>
  `
}

// GRUPO A
document.querySelector("#group-a").innerHTML =
  createGroup("Grupo a", "qatar", "ecuador", "senegal", "netherlands") 
//

function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="../assets/teams/icon-${player1}.svg" alt="flag ${player1}"> 
    <strong>${hour}</strong>
    <img src="../assets/teams/icon-${player2}.svg" alt="flag ${player2}">
  </li>  
  `
}

function createCard(date, day, games) {
  delay = delay + 0.5
  return `
      <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}            
        </ul>
    </div>
    `
}

//JOGOS DO QATAR
document.querySelector("#cards-qatar").innerHTML =
  createCard(
    "20/11", 
    "domingo", 
  createGame("qatar", "17:00", "ecuador")) +

  createCard(
    "25/11",
    "sexta",
    createGame("qatar", "14:00", "senegal")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("netherlands", "16:00", "qatar")
  ) 
  //