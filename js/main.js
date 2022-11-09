
function createMenu(icon, menu) {
  return `
<ul>
  <a href="./pages/groups.html">
    <li>
      <i class="${icon}"></i>
      <h3>${menu}</h3>
    </li>
  </a>
</ul>
`
}

document.querySelector("#menu-options").innerHTML = 
createMenu(
  "ri-table-line",
  "Grupos"
) +
createMenu(
  "ri-calendar-event-line",
  "Calendário"
)

let delay = -0.5
function createTeam(team, nameTeam) {
  delay = delay + 0.2
  return `
<ul >
    <a href="./pages/${team}.html">
    <li class="teams" style="animation-delay: ${delay}s">
      <img src="assets/teams/icon-${team}.svg" alt="">
      <p>
        ${nameTeam}
      </p>
     </li>
    </a>
</ul>
`
}

// team: Nome do arquivo que tem a imagem
// nameTeam: Como vai aparecer o nome da Seleção no <p>

document.querySelector("#menu-teams").innerHTML =
  createTeam("qatar", "Qatar") +
  createTeam("ecuador", "Equador") +
  createTeam("senegal", "Senegal") +
  createTeam("netherlands", "Holanda") +
  createTeam("england", "Inglaterra") +
  createTeam("iran", "Irã") +
  createTeam("united-states", "Estados unidos") +
  createTeam("wales", "País de Gales") +
  createTeam("argentina", "Argentina") +
  createTeam("saudi-arabia", "Arábia Saudita") +
  createTeam("mexico", "México") +
  createTeam("poland", "Polônia") +
  createTeam("france", "França") +
  createTeam("denmark", "Dinamarca") +
  createTeam("tunisia", "Tunísia") +
  createTeam("australia", "Austrália") +
  createTeam("spain", "Espanha") +
  createTeam("germany", "Alemanha") +
  createTeam("japan", "Japão") +
  createTeam("costa-rica", "Costa Rica") +
  createTeam("belgium", "Bélgica") +
  createTeam("canada", "Canadá") +
  createTeam("morocco", "Marrocos") +
  createTeam("croatia", "Croácia") +
  createTeam("brazil", "Brasil") +
  createTeam("serbia", "Sérvia") +
  createTeam("switzerland", "Suíça") +
  createTeam("cameroon", "Camarões") +
  createTeam("portugal", "Portugal") +
  createTeam("ghana", "Gana") +
  createTeam("uruguay", "Uruguai") +
  createTeam("south-korea", "Korea do Sul")
