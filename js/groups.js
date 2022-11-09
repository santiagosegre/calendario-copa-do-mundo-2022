let delay = -0.5

function createGroup(group, player1, namePlayer1, player2, namePlayer2, player3, namePlayer3, player4, namePlayer4) {
  delay = delay + 0.5
  return `
  <div class="group" style="animation-delay: ${delay}s">
      <h2>${group}</h2>
      <ul>
    <li>
      <img src="../assets/teams/icon-${player1}.svg" alt="flag ${player1}">
      <span>
          ${namePlayer1}
      </span>
  </li>
    <li>
      <img src="../assets/teams/icon-${player2}.svg" alt="flag ${player2}">
      <span>
          ${namePlayer2}
      </span>
  </li>
    <li>
      <img src="../assets/teams/icon-${player3}.svg" alt="flag ${player3}">
      <span>
          ${namePlayer3}
      </span>
  </li>
    <li>
      <img src="../assets/teams/icon-${player4}.svg" alt="flag ${player4}">
      <span>
          ${namePlayer4}
      </span>
  </li>
      </ul>
  </div>
  `
}

// player1 = Nome da Seleção para buscar a imagem SVG
// namePlayes = Nome da Selação que vai aparecer no span

document.querySelector("#groups").innerHTML =
  createGroup(
  "Grupo a", 
  "qatar", "Qatar", 
  "ecuador", "Equador", 
  "senegal","Senegal", 
  "netherlands", "Holanda"
  ) +
  createGroup(
    "Grupo b", 
    "england", "Inglaterra",
    "iran", "Irã",
    "united-states", "Estados unidos", 
    "wales", "País de Gales"
    ) +
  createGroup(
    "Grupo c", 
    "argentina", "Argentina",
    "saudi-arabia", "Arábia Saudita",
    "mexico", "México",
    "poland", "Polônia"
    ) +
  createGroup(
    "Grupo d", 
    "france", "França", 
    "denmark",  "Dinamarca",
    "tunisia", "Tunísia",
    "australia", "Austrália"
    ) +
  createGroup(
    "Grupo e", 
    "spain", "Espanha",
    "germany", "Alemanha",
    "japan", "Japão",
    "costa-rica", "Costa Rica"
    ) +
  createGroup(
    "Grupo f", 
    "belgium", "Bélgica",
    "canada", "Canadá",
    "morocco", "Marrocos",
    "croatia", "Croácia"
    ) +
  createGroup(
    "Grupo g", 
    "brazil", "Brasil",
    "serbia", "Sérvia",
    "switzerland", "Suíça",
    "cameroon", "Camarões"
    ) +
  createGroup(
  "Grupo h", 
  "portugal", "Portugal",
  "ghana", "Gana",
  "uruguay", "Uruguai",
  "south-korea", "Korea do Sul"
  )
