import React, {useState, useEffect} from 'react'
import './nav.css'


function Nav() {
  const [showMenu, setShowMenu] = useState(false); // État pour contrôler l'affichage du menu

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Inverse l'état du menu lorsqu'on clique sur le bouton
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="/">Tissu du monde</a>
        </div>
        <input type="checkbox" id="menu-btn" checked={showMenu} onChange={toggleMenu} /> {/* Utilisez un checkbox pour le bouton de menu */}
        <label htmlFor="menu-btn" className="btn menu-btn">
          <span></span> {/* Utilisez des spans pour les trois barres du menu */}
          <span></span>
          <span></span>
        </label>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}> {/* Ajoutez la classe 'show' si showMenu est true */}
          <label htmlFor="menu-btn" className="btn close-btn"><i className="fas fa-times"></i></label>
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
  );
}

export default Nav;



