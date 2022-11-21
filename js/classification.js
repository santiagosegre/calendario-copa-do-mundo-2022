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
  createMenu(
    "ri-home-5-line",
    "Início", 
    "../index") +
  createMenu(
    "ri-calendar-event-line", 
    "Calendário", 
    "calendario")

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

// player1 = Nome da Seleção para buscar a imagem SVG
// namePlayes = Nome da Selação que vai aparecer no span

document.querySelector("#groups").innerHTML =
  createGroup(
    "Grupo a",
    "qatar",
    "Qatar",
    "ecuador",
    "Equador",
    "senegal",
    "Senegal",
    "netherlands",
    "Holanda"
  ) +
  createGroup(
    "Grupo b",
    "england",
    "Inglaterra",
    "iran",
    "Irã",
    "united-states",
    "Estados unidos",
    "wales",
    "País de Gales"
  ) +
  createGroup(
    "Grupo c",
    "argentina",
    "Argentina",
    "saudi-arabia",
    "Arábia Saudita",
    "mexico",
    "México",
    "poland",
    "Polônia"
  ) +
  createGroup(
    "Grupo d",
    "france",
    "França",
    "denmark",
    "Dinamarca",
    "tunisia",
    "Tunísia",
    "australia",
    "Austrália"
  ) +
  createGroup(
    "Grupo e",
    "spain",
    "Espanha",
    "germany",
    "Alemanha",
    "japan",
    "Japão",
    "costa-rica",
    "Costa Rica"
  ) +
  createGroup(
    "Grupo f",
    "belgium",
    "Bélgica",
    "canada",
    "Canadá",
    "morocco",
    "Marrocos",
    "croatia",
    "Croácia"
  ) +
  createGroup(
    "Grupo g",
    "brazil",
    "Brasil",
    "serbia",
    "Sérvia",
    "switzerland",
    "Suíça",
    "cameroon",
    "Camarões"
  ) +
  createGroup(
    "Grupo h",
    "portugal",
    "Portugal",
    "ghana",
    "Gana",
    "uruguay",
    "Uruguai",
    "south-korea",
    "Coreia do Sul"
  )
