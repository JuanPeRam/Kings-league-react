import {React, useState} from 'react'
import { teamsInfo } from './resources'
import "./styles/Teams.css"

export const Teams = () => {
    const [query,setQuery] = useState("")
    const filteredTeams = getFilteredTeams(query,teamsInfo)

    function getFilteredTeams(query,teamsinfo){
        if(!query){
            return teamsinfo
        }
        const filteredTeams = {};
  
        for (let team in teamsinfo) {
            const teamData = teamsinfo[team];
            
            if (team.toLowerCase().includes(query.toLowerCase())) {
            filteredTeams[team] = teamData;
            }
        }
    
        return filteredTeams;
    }
  return (
    <>
    <header>
        <h1 class="text-header">Equipos</h1>
    </header>
    <main>
        <div class="search-bar">
            <input id="teamName" type="text" class="team-input" onChange={e => setQuery(e.target.value)} placeholder="Busque un equipo..." autocomplete="off"></input>
            <div class="form-line"></div>
        </div>
        <div id="raw-main" class="card-group">
            {Object.keys(filteredTeams).map((teamName) => (
                    <div key={teamName} className='team-card' style={{backgroundImage: 'url('+filteredTeams[teamName].background+')'}}>
                        <div className='team-logo'>
                            <img src={filteredTeams[teamName]["logo-inverse"]} alt={`${teamName} Logo`} />
                        </div>
                        <div>{teamName}</div>
                    </div>
            ))}
        </div>
    </main>
    </>
  )
}
