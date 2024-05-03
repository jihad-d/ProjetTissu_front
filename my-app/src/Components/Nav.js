import React, {useState, useEffect} from 'react'
import './nav.css'


function Nav() {
  const [showMenu, setShowMenu] = useState(false); 

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu); 
  // };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="/">Tissu du monde</a>
        </div>
        
        <label htmlFor="menu-btn" className="btn menu-btn">
          <span></span> 
          <span></span>
          <span></span>
        </label>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}> 
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
          <li><a href="/contact">Contact</a></li>
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

export default Nav



