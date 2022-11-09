function createGame(player1, hour, player2) {
  return `
<li>
  <img src="../assets/teams/icon-${player1}.svg" alt="flag ${player1}"> 
  <strong>${hour}</strong>
  <img src="../assets/teams/icon-${player2}.svg" alt="flag ${player2}">
</li>  
`
}

let delay = -0.5

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

//CRIAR JOGOS

document.querySelector("#cards").innerHTML =
  createCard("20/11", "domingo", createGame("qatar", "17:00", "ecuador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("england", "14:00", "iran") +
      createGame("senegal", "17:00", "netherlands") +
      createGame("united-states", "20:00", "wales")
  ) +
  createCard(
    "22/11",
    "terça",
    createGame("argentina", "11:00", "saudi-arabia") +
      createGame("denmark", "14:00", "tunisia") +
      createGame("mexico", "17:00", "poland") +
      createGame("france", "20:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    createGame("morocco", "11:00", "croatia") +
      createGame("germany", "14:00", "japan") +
      createGame("spain", "17:00", "costa-rica") +
      createGame("belgium", "20:00", "canada")
  ) +
  createCard(
    "24/11",
    "quinta",
    createGame("switzerland", "11:00", "cameroon") +
      createGame("uruguay", "14:00", "south-korea") +
      createGame("portugal", "17:00", "ghana") +
      createGame("brazil", "20:00", "serbia")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("wales", "11:00", "iran") +
      createGame("qatar", "14:00", "senegal") +
      createGame("netherlands", "17:00", "ecuador") +
      createGame("england", "20:00", "united-states")
  ) +
  createCard(
    "26/11",
    "sábado",
    createGame("tunisia", "11:00", "australia") +
      createGame("poland", "14:00", "saudi-arabia") +
      createGame("france", "17:00", "denmark") +
      createGame("argentina", "20:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    createGame("japan", "11:00", "costa-rica") +
      createGame("belgium", "14:00", "morocco") +
      createGame("croatia", "17:00", "canada") +
      createGame("spain", "20:00", "germany")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("cameroon", "11:00", "serbia") +
      createGame("south-korea", "14:00", "ghana") +
      createGame("brazil", "17:00", "switzerland") +
      createGame("portugal", "20:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("netherlands", "16:00", "qatar") +
      createGame("ecuador", "16:00", "senegal") +
      createGame("wales", "20:00", "england") +
      createGame("iran", "20:00", "united-states")
  ) +
  createCard(
    "30/11",
    "quarta",
    createGame("australia", "16:00", "denmark") +
      createGame("tunisia", "16:00", "france") +
      createGame("poland", "20:00", "argentina") +
      createGame("saudi-arabia", "20:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    createGame("croatia", "16:00", "belgium") +
      createGame("canada", "16:00", "morocco") +
      createGame("japan", "20:00", "spain") +
      createGame("costa-rica", "20:00", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    createGame("ghana", "16:00", "uruguay") +
      createGame("south-korea", "16:00", "portugal") +
      createGame("serbia", "20:00", "switzerland") +
      createGame("cameroon", "20:00", "brazil")
  )
