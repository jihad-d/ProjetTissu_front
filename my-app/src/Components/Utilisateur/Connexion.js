import React from 'react'
import './connexion.css'

function Connexion(){
    return(
        <div className='container'>
            <form className="login-form"action="http://localhost:5000/connexion" method="post">
            <h1>Connexion</h1>
            <br/>
            <br/>
                <label for="">Email</label>
                <input type="email" name="email" required/>
                <br/>
                <label for="">Mot de passe</label>
                <input type="password" name="password" required/>
                <br/>
                <input type="submit" value="Connexion"/>
                <br/>
                <a href="/accueil">Inscription</a>
                {/* <a href="#" className='mdp'>Mot de passe oublié</a> */}
                <br/>
            </form>
        </div>
    )
}

export default Connexion