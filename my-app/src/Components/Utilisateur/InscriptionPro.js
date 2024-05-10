import React, { useState } from 'react';
import './inscription.css'


function InscriptionPro() {

    const [affichMdp, setAffichMdp] = useState(false);
    const toggleAffichMdp = () => {
        setAffichMdp(!affichMdp);
    };

    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [vendeur, setVendeur] = useState(false);
  
    function handleChange(e){
      setPassword(e.target.value)
      
      const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@/$!%_*?&])[A-Za-z\d@/$!%_*?&]{12,}$/
  
      const isValidPassword = regExp.test(password)
  
      if(isValidPassword) {
        setMessage("Le mot de passe est valide")
      }
      else{
        setMessage("Le mot de passe doit contenir au minimum 12 caractères")
      }
    }
    function handleVendeurChange(e) {
        setVendeur(e.target.checked); // Met à jour l'état en fonction de la sélection de l'utilisateur
    }


    return (
        <div className='containerpro'>

            <form className="inscription" action="http://localhost:5000/api/inscriptionpro" method="post">
                <h1>Inscription Professionnel</h1>
                <br />
                <label for="">Nom</label>
                <input type="text" name="nom" />
                <br />
                <label for="">Prénom</label>
                <input type="text" name="prenom" />
                <br />
                <label for="">Email <span>*</span></label>
                <input type="email" name="email" required />
                <br />
                <label for="">Téléphone</label>
                <input type="tel" name="tel" maxlength="10" />
                <br />
                <label for="">Société <span>*</span></label>
                <input type="text" name="societe" />
                <br />
                <label for="">Numéro de SIRET ou TVA <span>*</span></label>
                <input type="text" name="siretTva" maxlength="14" required />
                <br />
                <label for="">Adresse</label>
                <input type="text" name="adresse" />
                <br />
                <label for="">URL</label>
                <input type="text" name="url" />
                <br />
                <label for="">S'inscrire en tant que vendeur:</label>
                <input type="checkbox" name="vendeur" checked={vendeur} onChange={handleVendeurChange} />
                <br />
                <label for="">Mot de passe <span>*</span></label>
                {/* <input type={affichMdp ? "text" : "password"} name="password" required onChange={handleChange} /><br />
                <p>{message}</p> */}
                <input type={affichMdp ? "text" : "password"} name="password" onChange={handleChange} required/>
                <p>{message}</p>
                <br/>
                <button type="button" onClick={toggleAffichMdp}>{affichMdp ? "Masquer" : "Afficher"}</button>
                <br />
                <input type="submit" value="Inscription" />
            </form>
        </div>
    )
}

export default InscriptionPro