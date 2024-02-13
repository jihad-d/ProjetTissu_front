import React from 'react'
import './inscriptionpar.css'

function InscriptionPar (){
    return(
        <div className='containerpar'>

            <form className="inscriptionpar" action="http://localhost:5000/api/inscriptionpar" method="post">
            <h1>Inscription Particulier</h1>
                <label for="">Nom</label>
                <input type="text" name="nom"/>
                <br/>
                <label for="">Prénom</label>
                <input type="text" name="prenom"/>
                <br/>
                <label for="">Date de naissance</label>
                <input type="date" name="date"/>
                <br/>
                <label for="">Email <span>*</span></label>
                <input type="email" name="email" required/>
                <br/>
                <label for="">Mot de passe <span>*</span></label>
                <input type="password" name="password" required/>
                <br/>
                <br/>
                <input type="submit" value="Inscription"/>
            </form>
        </div>

    )
}

export default InscriptionPar