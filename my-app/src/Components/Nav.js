import React from 'react'
import './nav.css'

function Nav() {
    return (
        
        <nav>
            <div class="wrapper">
            <div class="logo"><a href="#">Tissu du monde</a></div>
                <input type="radio" name="slider" id="menu-btn"/>
                    <input type="radio" name="slider" id="close-btn"/>
                        <ul class="nav-links">
                            <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
                            <li><a href="#">Accueil</a></li>
                            <li>
                                <a href="#" class="desktop-item">Tissu</a>
                                <ul class="drop-menu">
                                    <li><a href="#">Satin</a></li>
                                    <li><a href="#">Coton</a></li>
                                    <li><a href="#">Laine</a></li>
                                    <li><a href="#">Lin</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Panier</a></li>
                            <li>
                                <a href="#" class="desktop-item">Profil</a>
                                <ul class="drop-menu">
                                    <li><a href="/connexion">Connexion</a></li>
                                    <li><a href="/inscriptionpro">Inscription professionnel</a></li>
                                    <li><a href="/inscriptionpar">Inscriptin Particulier</a></li>
                                </ul>
                            </li>
                        </ul>
            </div>
        </nav>
    )
}

export default Nav



