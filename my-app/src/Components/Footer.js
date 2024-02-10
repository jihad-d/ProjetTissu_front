import React from "react"
import { Icon } from 'semantic-ui-react';
import "./footer.css"

function Footer() {
    return (
        <footer class="footer">
            <div class="footer-left">
                <a href="#">Accueil</a>
                <a href="#">Contact</a>
                <a href="#">À propos de nous</a>
                <a href="#">Termes et conditions</a>
            </div>
            <div class="footer-right">
                <a href="#"><Icon name='twitter' size='large' /></a>
                <a href="#"><Icon name="snapchat" alt="Tiktok"/></a>
                <a href="#"><Icon name='instagram' size='large' /></a>
            </div>
            <div className="footer-content">
                <p>&copy; 2024 Tissu du Monde. Tous droits réservés.</p>
            </div>
        </footer>

    )
}

export default Footer