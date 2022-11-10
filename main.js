function createMenu(icon, menu, page) {
  return `
<ul>
  <a href="pages/${page}.html">
    <li data-aos="fade-down">
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
  "Grupos",
  "grupos"
) +
createMenu(
  "ri-calendar-event-line",
  "Calendário",
  "calendario"
)

function createTeam(team, nameTeam) {
  return `
<ul >
    <div class="bg-teams">
      <a href="pages/${team}.html">
      <li class="teams" data-aos="fade-left">
        <img src="assets/teams/icon-${team}.svg" alt="">
        <p>
          ${nameTeam}
        </p>
       </li>
      </a>
    </div>
</ul>
`
}

// team: Nome do arquivo que tem a imagem
// nameTeam: Como vai aparecer o nome da Seleção no <p>

document.querySelector("#menu-teams").innerHTML =
createTeam("germany", "Alemanha") +
createTeam("saudi-arabia", "Arábia Saudita") +
createTeam("argentina", "Argentina") +
createTeam("australia", "Austrália") +
createTeam("belgium", "Bélgica") +
createTeam("brazil", "Brasil") +
createTeam("cameroon", "Camarões") +
createTeam("canada", "Canadá") +
createTeam("south-korea", "Coreia do Sul") +
createTeam("costa-rica", "Costa Rica") +
createTeam("croatia", "Croácia") +
createTeam("denmark", "Dinamarca") +
createTeam("ecuador", "Equador") +
createTeam("spain", "Espanha") +
createTeam("united-states", "Estados unidos") +
createTeam("france", "França") +
createTeam("ghana", "Gana") +
createTeam("netherlands", "Holanda") +
createTeam("england", "Inglaterra") +
createTeam("iran", "Irã") +
createTeam("japan", "Japão") +
createTeam("morocco", "Marrocos") +
createTeam("mexico", "México") +
createTeam("wales", "País de Gales") +
createTeam("poland", "Polônia") +
createTeam("portugal", "Portugal") +
createTeam("qatar", "Qatar") +
createTeam("senegal", "Senegal") +
createTeam("serbia", "Sérvia") +
  createTeam("switzerland", "Suíça") +
  createTeam("tunisia", "Tunísia") +
  createTeam("uruguay", "Uruguai")
