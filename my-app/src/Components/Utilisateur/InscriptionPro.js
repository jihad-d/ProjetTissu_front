import React from 'react'
import './inscription.css'
function InscriptionPro(){
    return (
        <div className='containerpro'>

            <form className="inscription" action="http://localhost:5000/api/inscriptionpro" method="post">
            <h1>Inscription Professionnel</h1>
            <br/>
                <label for="">Nom</label>
                <input type="text" name="nom"/>
                <br/>
                <label for="">Prénom</label>
                <input type="text" name="prenom"/>
                <br/>
                <label for="">Email <span>*</span></label>
                <input type="email" name="email" required/>
                <br/>
                <label for="">Téléphone</label>
                <input type="tel" name="tel" maxlength="10"/>
                <br/>
                <label for="">Société <span>*</span></label>
                <input type="text" name="societe"/>
                <br/>
                <label for="">Numéro de SIRET ou TVA <span>*</span></label>
                <input type="text" name="siretTva" maxlength="14" required/>
                <br/>
                <label for="">Adresse</label>
                <input type="text" name="adresse"/>
                <br/>
                <label for="">URL</label>
                <input type="text" name="url"/>
                <br/>
                <label for="">Mot de passe <span>*</span></label>
                <input type="password" name="password" required/>
                <br/>
                <input type="submit" value="Inscription"/>
            </form>
        </div>
    )
}

export default InscriptionPro