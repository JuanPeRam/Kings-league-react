import React from 'react'
import { teamsInfo } from './resources'
import "./styles/NavBar.css"
import logo from "../img/Logo/logo-kings.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faB, faTicket, faShirt} from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faTwitch,faInstagram,faTiktok,faYoutube } from '@fortawesome/free-brands-svg-icons'

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
            <ul className='brands-list'>
                    <li><a href='https://twitter.com/KingsLeague' target="_blank"><FontAwesomeIcon icon={faTwitter} size='lg' style={{color: "#000000"}}/></a></li>
                    <li><a href='https://www.instagram.com/kingsleague/?hl=es' target="_blank"><FontAwesomeIcon icon={faInstagram} size='lg' style={{color: "#000000"}}/></a></li>
                    <li><a href='https://www.tiktok.com/@kingsleague?lang=es' target="_blank"><FontAwesomeIcon icon={faTiktok} size='lg' style={{color: "#000000"}}/></a></li>
                    <li><a href='https://www.youtube.com/@KingsLeagueOfficial' target="_blank"><FontAwesomeIcon icon={faYoutube} size='lg' style={{color: "#000000"}}/></a></li>
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
                <ul className="extra-links-list">
                    <li><a href=""><FontAwesomeIcon icon={faTicket}/> ENTRADAS</a></li>
                    <li><a href="https://store.kingsleague.pro" target="_blank"><FontAwesomeIcon icon={faShirt}/> TIENDA</a></li>
                    <li><a href="https://www.twitch.tv/kingsleague" target="_blank"><FontAwesomeIcon icon={faTwitch}/> DIRECTO</a></li>
                </ul>
            </div>
            
        </div>
    </nav>
  )
}
