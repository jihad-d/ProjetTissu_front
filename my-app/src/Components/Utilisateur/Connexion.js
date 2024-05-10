import React, { useState, useEffect } from 'react';
import './connexion.css'

function Connexion() {
    const [captchaImageSrc, setCaptchaImageSrc] = useState('');

    useEffect(() => {
        fetchCaptchaImage(); // Appel de la fonction fetchCaptchaImage lors du chargement initial du composant
    }, []);

    const fetchCaptchaImage = () => {
        fetch('http://localhost:5000/captcha') // Effectuer une requête GET vers l'endpoint du captcha
            .then(response => response.blob()) // Récupérer les données de l'image sous forme de blob
            .then(blob => {
                // Créer une URL objet à partir du blob pour afficher l'image
                const imageUrl = URL.createObjectURL(blob);
                // Mettre à jour l'état avec l'URL de l'image du captcha
                setCaptchaImageSrc(imageUrl);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération du captcha :', error);
            });
    };
    return(
        <div className='container1'>
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
                {captchaImageSrc && <img src={captchaImageSrc} alt="Captcha" className='captchat-img'/>}
                <input type="text" name="captcha" required />
                <br />
                <input type="submit" value="Connexion"/>
                <br/>
                <a href="/">Inscription</a>
                <a href=''>VOUs etes un pro ? c'est ici</a>
                {/* <a href="#" className='mdp'>Mot de passe oublié</a> */}
                <br/>
            </form>
        </div>
    )
}

export default Connexion