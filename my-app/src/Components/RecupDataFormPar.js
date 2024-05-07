import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './recupdataformpar.css';

function RecupDataFormPar() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [dateDeNaissance, setDateDeNaissance] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [clicBtn, setClicBtn] = useState(0);
  const [showPassword, setShowPassword] = useState(false); // Nouvelle variable d'état pour gérer l'affichage du mot de passe

  const params = useParams();

  // récupérer les données entrées par l'utilisateur particulier lors de l'inscription
  useEffect(() => {
    axios.get(`http://localhost:5000/recupdataformpar/${params.id}`)
      .then(response => {
        console.log(response.data);
        const { data } = response;
        setLoading(false)
        console.log(response.data);
        setNom(response.data.nom)
        setPrenom(response.data.prenom)
        setDateDeNaissance(response.data.DateDeNaissance)
        setTel(response.data.tel)
        setEmail(response.data.email)
        setError('')
      })
      .catch(err => {
        setLoading(false)
        setError(err.message)
      })
  }, [])

  const handleFieldChange = () => {
    setClicBtn(clicBtn + 1);

    if (clicBtn >= 1) {
      alert("Information modifiée !");
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <div className='infopar'>
        <h2>Mes informations</h2><br />
      </div>
      <div className='containerinfopar'>
        <form action={`http://localhost:5000/recupdataformpar/${params.id}?_method=PUT`} method="post">
          <input type="hidden" name="_method" value="PUT" />
          <label for="">Nom</label>
          <input type="text" name="nom" defaultValue={nom} /><br />
          <br />
          <label for="">Prénom</label><br />
          <input type="text" name="prenom" defaultValue={prenom} /><br />
          <br />
          <label for="">Date de Naissance</label><br />
          <input type="date" name="dateDeNaissance" defaultValue={dateDeNaissance}/><br />
          <br />
          <label for="">Téléphone</label><br />
          <input type="number" name="tel" defaultValue={tel} maxLength="10" /><br />
          <br />
          <label for="">Email</label><br />
          <input type="email" name="email" defaultValue={email} required /><br />
          <br />
          <label for="">Mot de passe</label><br />
          <input type={showPassword ? "text" : "password"} name="password" required /><br /> 
          <button type="button" onClick={toggleShowPassword}>{showPassword ? "Masquer" : "Afficher"}</button> 
          <br />
          <input type="submit" value="Modifier" onClick={handleFieldChange} />
          <a href="http://localhost:5000/deconnexion">Déconnexion</a>
        </form>

        <form action={`http://localhost:5000/supprimerpar/${params.id}?_method=DELETE`} method="post">
          <input type="hidden" name="_method" value="DELETE" />
          <input type="submit" value="Suppression du compte" />
        </form>
      </div>
    </div>
  )
}

export default RecupDataFormPar;