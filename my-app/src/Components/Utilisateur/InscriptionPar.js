import React from 'react'

function InscriptionPar (){
    return(
        <div>
            <h1>Inscription Particulier</h1>

            <form action="http://localhost:5000/api/inscription" method="post">
                <label for="">Nom</label>
                <input type="text" name="nom"/>
                <br/>
                <label for="">Prénom</label>
                <input type="text" name="prenom"/>
                <br/>
                <label for="">Date de naissance</label>
                <input type="date" name="date"/>
                <br/>
                <label for="">Email*</label>
                <input type="email" name="email" required/>
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

export default InscriptionPar