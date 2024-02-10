import React from 'react'

function Connexion(){
    return(
        <div>
            <h1>Connexion</h1>
            <br/>
            <br/>


            <form action="http://localhost:5000/connexion" method="post">
                <label for="">Email</label>
                <input type="email" name="email" required/>
                <br/>
                <label for="">Mot de passe</label>
                <input type="password" name="password" required/>
                <br/>
                <input type="submit" value="Connexion"/>
                <br/>
                <a href="/accueil">Inscription</a>
                <br/>
            </form>
        </div>
    )
}

export default Connexion