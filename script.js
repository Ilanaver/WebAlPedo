document.addEventListener('DOMContentLoaded', function() {
    const leftOctavos = [
        { team1: 'Equipo A', team2: 'Equipo B' },
        { team1: 'Equipo C', team2: 'Equipo D' },
        { team1: 'Equipo E', team2: 'Equipo F' },
        { team1: 'Equipo G', team2: 'Equipo H' }
    ];

    const leftCuartos = [
        { team1: 'Ganador Partido 1', team2: 'Ganador Partido 2' },
        { team1: 'Ganador Partido 3', team2: 'Ganador Partido 4' }
    ];

    const leftSemis = [
        { team1: 'Ganador Partido 1', team2: 'Ganador Partido 2' }
    ];

    const rightOctavos = [
        { team1: 'Equipo I', team2: 'Equipo J' },
        { team1: 'Equipo K', team2: 'Equipo L' },
        { team1: 'Equipo M', team2: 'Equipo N' },
        { team1: 'Equipo O', team2: 'Equipo P' }
    ];

    const rightCuartos = [
        { team1: 'Ganador Partido 1', team2: 'Ganador Partido 2' },
        { team1: 'Ganador Partido 3', team2: 'Ganador Partido 4' }
    ];

    const rightSemis = [
        { team1: 'Ganador Partido 1', team2: 'Ganador Partido 2' }
    ];

    const renderMatches = (matches, containerId) => {
        const container = document.getElementById(containerId);
        matches.forEach(match => {
            const matchDiv = document.createElement('div');
            matchDiv.classList.add('match');
            matchDiv.textContent = `${match.team1} vs ${match.team2}`;
            container.appendChild(matchDiv);
        });
    };

    renderMatches(leftOctavos, 'left-octavos');
    renderMatches(leftCuartos, 'left-cuartos');
    renderMatches(leftSemis, 'left-semis');
    renderMatches(rightOctavos, 'right-octavos');
    renderMatches(rightCuartos, 'right-cuartos');
    renderMatches(rightSemis, 'right-semis');

    // Añadir el partido final manualmente
    const finalMatch = document.getElementById('final-match');
    finalMatch.textContent = 'Ganador Llave Izquierda vs Ganador Llave Derecha';

    // Función para ordenar la tabla de estadísticas de equipos
    const sortTeamTableByGoals = () => {
        const table = document.getElementById('team-stats-table');
        const tbody = table.tBodies[0];
        const rows = Array.from(tbody.querySelectorAll('tr'));

        rows.sort((a, b) => {
            const aGoals = parseInt(a.cells[1].textContent, 10);
            const bGoals = parseInt(b.cells[1].textContent, 10);
            return bGoals - aGoals;
        });

        rows.forEach(row => tbody.appendChild(row));
    };

    // Función para ordenar la tabla de estadísticas de jugadores
    const sortPlayerTableByGoals = () => {
        const table = document.getElementById('player-stats-table');
        const tbody = table.tBodies[0];
        const rows = Array.from(tbody.querySelectorAll('tr'));

        rows.sort((a, b) => {
            const aGoals = parseInt(a.cells[2].textContent, 10);
            const bGoals = parseInt(b.cells[2].textContent, 10);
            return bGoals - aGoals;
        });

        rows.forEach(row => tbody.appendChild(row));
    };

    document.getElementById('team-goals-header').addEventListener('click', sortTeamTableByGoals);
    document.getElementById('player-goals-header').addEventListener('click', sortPlayerTableByGoals);

    // Añadir funcionalidad para agregar nuevos jugadores
    const newPlayerForm = document.getElementById('new-player-form');

    newPlayerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const playerName = document.getElementById('player-name').value;
        const playerTeam = document.getElementById('player-team').value;
        const playerGoals = document.getElementById('player-goals').value;

        const table = document.getElementById('player-stats-table').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const nameCell = newRow.insertCell(0);
        const teamCell = newRow.insertCell(1);
        const goalsCell = newRow.insertCell(2);

        nameCell.textContent = playerName;
        teamCell.textContent = playerTeam;
        goalsCell.textContent = playerGoals;

        newPlayerForm.reset();
    });
});