import React from 'react';
import './hero.css'; // Fichier CSS pour styliser le hero
import heroImage from './images/hero_accueil_tissu.jpg'; // Importer l'image du hero

function Hero() {
    return (
        <div className="hero-container">
            <img src={heroImage} alt="Hero" className="hero-image" />
            <div className="hero-content">
                <h1>Tissu du Monde</h1>
                <div className="hero-buttons">
                    <a href="/inscriptionpro"><button>Professionnel</button></a>
                    <a href="/inscriptionpar"><button>Particulier</button></a>
                </div>
            </div>
        </div>
    );
}

export default Hero;



