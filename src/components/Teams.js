import React from 'react'
import { teamsInfo } from './resources'
import "./styles/Teams.css"

export const Teams = () => {
  return (
    <>
    <header>
        <h1 class="text-header">Equipos</h1>
    </header>
    <main>
        <div id="raw-main" class="card-group">
            {Object.keys(teamsInfo).map((teamName) => (
                    <div key={teamName} className='team-card' style={{backgroundImage: 'url('+teamsInfo[teamName].background+')'}}>
                        <div className='team-logo'>
                            <img src={teamsInfo[teamName]["logo-inverse"]} alt={`${teamName} Logo`} />
                        </div>
                        <div>{teamName}</div>
                    </div>
            ))}
        </div>
    </main>
    </>
  )
}
