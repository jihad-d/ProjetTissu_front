import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importez l'icône Twitter
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">
                <a href="/">Accueil</a>
                <a href="#">Contact</a>
                <a href="/apropos">À propos de nous</a>
                <a href="#">Termes et conditions</a>
            </div>
            <div className="footer-right">
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faTiktok} /></a>
                {/* Ajoutez d'autres icônes de la même manière */}
            </div>
            <div className="footer-content">
                <p>&copy; 2024 Tissu du Monde.</p>
            </div>
        </footer>
    );
}

export default Footer;
