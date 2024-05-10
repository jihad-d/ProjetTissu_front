import { Routes, Route } from 'react-router-dom'
import Accueil from './Components/Accueil';
import InscriptionPar from './Components/Utilisateur/InscriptionPar';
import InscriptionPro from './Components/Utilisateur/InscriptionPro';
import Connexion from './Components/Utilisateur/Connexion';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import NewProduit from './Components/Produit/NewProduit';
import Footer from './Components/Footer';
import AfficherTissu from './Components/Produit/AfficherTissu';
// import Tissu from './Components/Produit/Tissu';
// import Profil from './Components/Utilisateur/Profil';
import RecupDataForm from './Components/RecupDataForm';
import NotFound from './Components/NotFound/NotFound';
import Apropos from './Components/Apropos';
import ModifTissu from './Components/Produit/ModifTissu';
import Termes from './Components/Termes';
import Contact from './Components/Contact';
import RecupDataFormPar from './Components/RecupDataFormPar';


function App() {
  return (
    <div className="App">
        <Nav />

        <Routes>

        <Route path="/accueil" element={<Accueil />} />
        <Route path="/" element={<Hero />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/termes" element={<Termes />} />
        <Route path="/contact" element={<Contact />} />
        

        {/* Tissu */}
        <Route path="/newproduit" element={<NewProduit />} />
        <Route path='/affichertissu' element={<AfficherTissu/>} />
        {/* <Route path='/affichertissu' element={<ModifTissu/>} /> */}
        <Route path="/modiftissu" element={<ModifTissu />} />

        {/* CRUD users */}
        <Route path='/inscriptionpro' element={<InscriptionPro />} />
        <Route path='/inscriptionpar' element={<InscriptionPar />} />
        <Route path='/connexion' element={<Connexion />} />
        {/* <Route path='/connexionpro' element={<Connexion />} /> */}
        {/* <Route path='/profil' element={<RecupDataForm />} /> */}
        <Route path='/recupdataform/:id' element={<RecupDataForm />} />
        <Route path='/recupdataformpar/:id' element={<RecupDataFormPar />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/*' element={<NotFound />} />
        
        </Routes>
        <Footer />

    </div>
  )
}

export default App