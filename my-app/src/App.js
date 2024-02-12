import { Routes, Route } from 'react-router-dom'
import Accueil from './Components/Accueil';
import InscriptionPar from './Components/Utilisateur/InscriptionPar';
import InscriptionPro from './Components/Utilisateur/InscriptionPro';
import Connexion from './Components/Utilisateur/Connexion';
import Nav from './Components/Nav';
import NewProduit from './Components/Produit/NewProduit';
import Footer from './Components/Footer';
import AfficherTissu from './Components/Produit/AfficherTissu';
import Tissu from './Components/Produit/Tissu';
// import Profil from './Components/Utilisateur/Profil';
import RecupDataForm from './Components/RecupDataForm';


function App() {
  return (
    <div className="App">
        <Nav />

        <Routes>

        <Route path="/accueil" element={<Accueil />} />

        {/* Tissu */}
        <Route path="/tissu" element={<AfficherTissu />} />
        <Route path="/newproduit" element={<NewProduit />} />

        {/* CRUD users */}
        <Route path='/inscriptionpro' element={<InscriptionPro />} />
        <Route path='/inscriptionpar' element={<InscriptionPar />} />
        <Route path='/connexion' element={<Connexion />} />
        {/* <Route path='/profil' element={<RecupDataForm />} /> */}
        <Route path='/recupdataform/:id' element={<RecupDataForm />} />
        <Route path='/footer' element={<Footer />} />
        
        </Routes>
        <Footer />

    </div>
  )
}

export default App