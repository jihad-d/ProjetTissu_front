import React from 'react'

function Accueil() {
    return (
        <div>
            <a href="">
                <img src="./images/hero_accueil_tissu.jpg"></img>
            </a>
            <div class="titre">
                <h1>Tissu du monde</h1>
            </div>
            <button><a href="/inscriptionpro">Professionnel</a></button>
            <button><a href="/inscriptionpar">Particulier</a></button>
        </div>
    )
}

export default Accueil