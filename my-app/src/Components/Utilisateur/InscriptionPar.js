import React, { useState } from 'react';
import './inscriptionpar.css'

function InscriptionPar (){

    const [affichMdp, setAffichMdp] = useState(false);
    const toggleAffichMdp = () => {
        setAffichMdp(!affichMdp);
    };

    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    function handleChange(e) {
        setPassword(e.target.value)

        const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/

        const isValidPassword = regExp.test(password)

        if (isValidPassword) {
            setMessage("Le mot de passe est valide")
        }
        else {
            setMessage("Le mot de passe doit contenir au minimum 12 caractères")
        }
    }
    
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
                {/* <input type="password" name="mpd" required/> */}
                <input type={affichMdp ? "text" : "password"} name="password" required onChange={handleChange} /><br />
                <p>{message}</p>
                <button type="button" onClick={toggleAffichMdp}>{affichMdp ? "Masquer" : "Afficher"}</button>
                <br/>
                <input type="submit" value="Inscription"/>
            </form>
        </div>

    )
}

export default InscriptionPar