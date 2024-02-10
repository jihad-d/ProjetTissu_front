import React from 'react'

function InscriptionPro(){
    return (
        <div>
            <h1>Inscription Professionnel</h1>

            <form action="http://localhost:5000/api/inscriptionpro" method="post">
                <label for="">Nom</label>
                <input type="text" name="nom"/>
                <br/>
                <label for="">Prénom</label>
                <input type="text" name="prenom"/>
                <br/>
                <label for="">Email*</label>
                <input type="email" name="email" required/>
                <br/>
                <label for="">Téléphone</label>
                <input type="tel" name="tel" maxlength="10"/>
                <br/>
                <label for="">Société*</label>
                <input type="text" name="societe"/>
                <br/>
                <label for="">Numéro de SIRET ou TVA*</label>
                <input type="text" name="siretTva" maxlength="14" required/>
                <br/>
                <label for="">Adresse</label>
                <input type="text" name="adresse"/>
                <br/>
                <label for="">URL</label>
                <input type="text" name="url"/>
                <br/>
                <label for="">Mot de passe*</label>
                <input type="password" name="password" required/>
                <br/>
                <br/>
                <input type="submit" value="Inscription"/>
            </form>
        </div>
    )
}

export default InscriptionPro