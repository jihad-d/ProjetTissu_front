import { Routes, Route } from 'react-router-dom'
import Accueil from './Components/Accueil';
import InscriptionPar from './Components/Utilisateur/InscriptionPar';
import InscriptionPro from './Components/Utilisateur/InscriptionPro';
import Connexion from './Components/Utilisateur/Connexion';
import Nav from './Components/Nav';
import Profil from './Components/Utilisateur/Profil';
import RecupDataForm from './Components/RecupDataForm';


function App() {
  return (
    <div className="App">
        <Nav />

        <Routes>

        <Route path="/accueil" element={<Accueil />} />

        {/* CRUD users */}
        <Route path='/inscriptionpro' element={<InscriptionPro />} />
        <Route path='/inscriptionpar' element={<InscriptionPar />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/profil' element={<Profil />} />
        <Route path='/recupdataform/:id' element={<RecupDataForm />} />

        </Routes>

    </div>
  )
}

export default App