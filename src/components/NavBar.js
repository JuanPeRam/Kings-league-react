import React from 'react'
import { teamsInfo } from './resources'
import "./styles/NavBar.css"
import logo from "../img/Logo/logo-kings.svg"
export const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='topBar'>
            <ul className='teams-list'>
                {Object.keys(teamsInfo).map((teamName) => (
                    <li key={teamName}>
                        <img src={teamsInfo[teamName].logo} alt={`${teamName} Logo`} />
                    </li>
                ))}
            </ul>

        </div>
        <div className='botBar'>
            <div className='left-list'>
                <a href='/'><img src={logo} alt='kings league logo'></img></a>
                <ul className='options-list'>
                    <li>
                        <a href='/Teams'>Equipos</a>
                    </li>
                    <li><a href='/Players'>Jugador 12 y 13</a></li>
                    <li><a href='/Players'>Partidos</a></li>
                    <li><a href='/Players'>Clasificación</a></li>
                    <li><a href='/Players'>Estadísticas</a></li>
                    <li><a href='/Players'>Presupuestos</a></li>
                </ul>
            </div>
            <div className='right-list'>

            </div>
            
        </div>
    </nav>
  )
}
