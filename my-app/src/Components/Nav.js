import React from 'react'
import './nav.css'

function Nav() {
    return (
        <nav>
            <div className="wrapper">
            <div className="logo"><a href="/">Tissu du monde</a></div>
                <input type="radio" name="slider" id="menu-btn"/>
                    <input type="radio" name="slider" id="close-btn"/>
                        <ul className="nav-links">
                            <label for="close-btn" className="btn close-btn"><i class="fas fa-times"></i></label>
                            {/* <li><a href="/accueil">Accueil</a></li> */}
                            <li>
                                <a href="/affichertissu" className="desktop-item">Tissu</a>
                                <ul className="drop-menu">
                                    <li><a href="#">Satin</a></li>
                                    <li><a href="#">Coton</a></li>
                                    <li><a href="#">Laine</a></li>
                                    <li><a href="#">Lin</a></li>
                                    <li><a href="/newproduit">Ajouter tissu</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="/connexion">Panier</a></li>
                            <li>
                                <a href="#" className="desktop-item">Profil</a>
                                <ul className="drop-menu">
                                    <li><a href="/connexion">Connexion</a></li>
                                    <li><a href="/inscriptionpro">Inscription professionnel</a></li>
                                    <li><a href="/inscriptionpar">Inscription Particulier</a></li>
                                </ul>
                            </li>
                        </ul>
            </div>
        </nav>
    )
}

export default Nav



