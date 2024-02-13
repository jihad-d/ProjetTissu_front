import React from 'react'
import './accueil.css'

function Accueil() {
    return (
            <div>
                <header>
                    <div className="titre">
                        <h1>Tissu du Monde</h1>
                    </div>
                </header>
                <div className='inscriptionbtn'>
                    <button><a href="/inscriptionpro">Professionnel</a></button>
                    <button><a href="/inscriptionpar">Particulier</a></button>
                </div>
            </div>
    )
}

export default Accueil