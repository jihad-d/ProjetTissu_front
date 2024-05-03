import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './recupdataform.css';

function RecupDataForm() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [societe, setSociete] = useState("");
  const [siretTva, setSiretTva] = useState("");
  const [adresse, setAdresse] = useState("");
  const [url, setUrl] = useState("");
  const [clicBtn, setClicBtn] = useState(0);
  const [showPassword, setShowPassword] = useState(false); // Nouvelle variable d'état pour gérer l'affichage du mot de passe

  const params = useParams();

  // récupérer les données entrées par l'utilisateur pro lors de l'inscription
  useEffect(() => {
    axios.get(`http://localhost:5000/recupdataform/${params.id}`)
      .then(response => {
        console.log(response.data);
        const { data } = response;
        setLoading(false)
        console.log(response.data);
        setNom(response.data.nom)
        setPrenom(response.data.prenom)
        setEmail(response.data.email)
        setTel(response.data.tel)
        setSociete(response.data.societe)
        setSiretTva(response.data.siretTva)
        setAdresse(response.data.adresse)
        setUrl(response.data.url)
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
      <div className='info'>
        <h2>Mes informations</h2><br />
      </div>
      <div className='containerinfo'>
        <form action={`http://localhost:5000/recupdataform/${params.id}?_method=PUT`} method="post">
          <input type="hidden" name="_method" value="PUT" />
          <label for="">Nom</label>
          {/* <p>{nom}</p><br/> */}
          <input type="text" name="nom" defaultValue={nom} /><br />
          <br />
          <label for="">Prenom</label><br />
          {/* <p>{prenom}</p><br/> */}
          <input type="text" name="prenom" defaultValue={prenom} /><br />
          <br />
          <label for="">Email</label><br />
          {/* <p>{email}</p><br/> */}
          <input type="email" name="email" defaultValue={email} required /><br />
          <br />
          <label for="">Téléphone</label><br />
          {/* <p>{tel}</p><br/> */}
          <input type="number" name="tel" defaultValue={tel} maxLength="10" /><br />
          <br />
          <label for="">Société</label><br />
          {/* <p>{societe}</p><br/> */}
          <input type="text" name="societe" defaultValue={societe} required /><br />
          <br />
          <label for="">SIRET ou TVA</label><br />
          {/* <p>{siretTva}</p><br/> */}
          <input type="number" name="siretTva" defaultValue={siretTva} maxLength="14" required /><br />
          <br />
          <label for="">Adresse</label><br />
          {/* <p>{adresse}</p><br/> */}
          <input type="text" name="adresse" defaultValue={adresse} /><br />
          <br />
          <label for="">URL</label><br />
          {/* <p>{url}</p><br/> */}
          <input type="text" name="url" defaultValue={url} /><br />
          <br />
          <label for="">Mot de passe</label><br />
          <input type={showPassword ? "text" : "password"} name="password" required /><br /> {/* Afficher le mot de passe comme du texte si showPassword est vrai */}
          <button type="button" onClick={toggleShowPassword}>{showPassword ? "Masquer" : "Afficher"}</button> {/* Bouton pour activer/désactiver l'affichage du mot de passe */}
          <br />
          <input type="submit" value="Modifier" onClick={handleFieldChange} />
          <a href="http://localhost:5000/deconnexion">Déconnexion</a>
        </form>

        <form action={`http://localhost:5000/supprimerpro/${params.id}?_method=DELETE`} method="post">
          <input type="hidden" name="_method" value="DELETE" />
          <input type="submit" value="Suppression du compte" />
        </form>
      </div>
      {/* <a href="/supprimer/<%=data._id%>?_method=DELETE"><input type="submit" value="Supression du compte"/></a><br/> */}
    </div>
  )
}

export default RecupDataForm;



