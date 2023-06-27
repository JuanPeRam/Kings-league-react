import logo1k from "../img/Logo/1k.svg"
import logo1kInverse from "../img/Logo/1k-inverse.svg"
import background1k from "../img/Backgrounds/1k-bg.jpg"

import logoaniquiladores from "../img/Logo/aniquiladores.svg"
import logoaniquiladoresinverse from "../img/Logo/aniquiladores-inverse.svg"
import backgroundaniquiladores from "../img/Backgrounds/aniquiladores-bg.jpg"

import logobarrio from "../img/Logo/barrio.svg"
import logobarrioinverse from "../img/Logo/barrio-inverse.svg"
import backgroundbarrio from  "../img/Backgrounds/barrio-bg.jpg"

import logojijantes from "../img/Logo/jijantes.svg"
import logojijantesinverse from "../img/Logo/jijantes-inverse.svg"
import backgroundjijantes from "../img/Backgrounds/jijantes-bg.jpg"

import logokuni from "../img/Logo/kunisports.svg"
import logokuniinverse from "../img/Logo/kunisports-inverse.svg"
import backgroundkuni from "../img/Backgrounds/kunisports-bg.jpg"

import logotroncos from "../img/Logo/troncos.svg"
import logotroncosinverse from "../img/Logo/troncos-inverse.svg"
import backgroundtroncos from "../img/Backgrounds/troncos-bg.jpg"

import logopio from "../img/Logo/pio.svg"
import logopioinverse from "../img/Logo/pio-inverse.svg"
import backgroundpio from "../img/Backgrounds/pio-bg.jpg"

import logoporcinos from "../img/Logo/porcinos.svg"
import logoporcinosinverse from "../img/Logo/porcinos-inverse.svg"
import backgroundporcinos from "../img/Backgrounds/porcinos-bg.jpg"

import logorayo from "../img/Logo/rayo.svg"
import logorayoinverse from "../img/Logo/rayo-inverse.svg"
import backgroundrayo from "../img/Backgrounds/rayo-bg.jpg"

import logosaiyans from "../img/Logo/saiyans.svg"
import logosaiyansinverse from "../img/Logo/saiyans-inverse.svg"
import backgroundsaiyans from "../img/Backgrounds/saiyans-bg.jpg"

import logomostoles from "../img/Logo/mostoles.svg"
import logomostolesinverse from "../img/Logo/mostoles-inverse.svg"
import backgroundmostoles from "../img/Backgrounds/mostoles-bg.jpg"

import logoxbuyer from "../img/Logo/xb.svg"
import logoxbuyerinverse from "../img/Logo/xb-inverse.svg"
import backgroundxbuyer from "../img/Backgrounds/xb-bg.jpg"

export const teamsInfo = {
    "1k FC": {
        "logo":logo1k,
        "logo-inverse":logo1kInverse,
        "background": background1k
    },
    "Aniquiladores FC": {
        "logo":logoaniquiladores,
        "logo-inverse":logoaniquiladoresinverse,
        "background": backgroundaniquiladores
    },
    "El Barrio": {
        "logo":logobarrio,
        "logo-inverse":logobarrioinverse,
        "background": backgroundbarrio
    },
    "Jijantes FC": {
        "logo":logojijantes,
        "logo-inverse":logojijantesinverse,
        "background": backgroundjijantes
    },
    "Kunisports": {
        "logo":logokuni,
        "logo-inverse": logokuniinverse,
        "background": backgroundkuni
    },
    "Los Troncos FC": {
        "logo":logotroncos,
        "logo-inverse":logotroncosinverse,
        "background": backgroundtroncos
    },
    "PIO FC": {
        "logo":logopio,
        "logo-inverse": logopioinverse,
        "background": backgroundpio
    },
    "Porcinos FC": {
        "logo":logoporcinos,
        "logo-inverse": logoporcinosinverse,
        "background": backgroundporcinos
    },
    "Rayo de Barcelona": {
        "logo":logorayo,
        "logo-inverse":logorayoinverse,
        "background": backgroundrayo
    },
    "Saiyans FC": {
        "logo":logosaiyans,
        "logo-inverse":logosaiyansinverse,
        "background": backgroundsaiyans
    },
    "Ultimate Móstoles": {
        "logo":logomostoles,
        "logo-inverse": logomostolesinverse,
        "background": backgroundmostoles
    },
    "xBuyer Team": {
        "logo": logoxbuyer,
        "logo-inverse": logoxbuyerinverse,
        "background": backgroundxbuyer
    }
}

fetch("https://api.kingsleague.dev/teams").then( data => data.json())
.then(json => console.log(json))
.catch(error => console.log("Error: "+error))