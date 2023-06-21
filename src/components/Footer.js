import React from 'react'
import "./styles/Footer.css"
import klBg from "../img/Backgrounds/KL_landscape.svg"
import qlBg from "../img/Backgrounds/QL_landscape.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faB, faTicket, faShirt} from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faTwitch,faInstagram,faTiktok,faYoutube } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <footer class="footer-container">
        <div class='flex-container footer-top'>
            <img src={klBg} alt='kings league landscape'></img>
            <a href='https://queensleague.pro' target='_blank'><img src={qlBg} alt='queens league landscape'></img></a>
            <ul class="">
                <li><a>Entradas</a></li>
                <li><a>FAQS</a></li>
                <li><a>Contacto</a></li>
                <li><a>Reglamento</a></li>
                <li><a>Draft</a></li>
                <li><a>Fantasy </a></li>
            </ul>
        </div>
        <div className='flex-container footer-bot'>
            <ul>
                <li><a><FontAwesomeIcon icon={faTwitch}/></a></li>
                <li><a><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li><a><FontAwesomeIcon icon={faTiktok}/></a></li>
                <li><a><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li><a><FontAwesomeIcon icon={faYoutube}/></a></li>
            </ul>
            <ul>
                <li><a>Política de Privacidad</a></li>
                <li><a>Aviso legal</a></li>
                <li><a>Plítica de Cookies</a></li>
            </ul>
        </div>
    </footer>
  )
}
