import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

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
  
    const params = useParams();
    

    // récupérer les données entrées par l'utilisateur pro lors de l'inscription
    useEffect(()=>{
        axios.get(`/recupdataform/${params.id}`)
        .then(response =>{
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
          .catch(err =>{
            setLoading(false)
            setError(err.message)
          })
    }, [])

  return (
    <div>
            <h3>Mes informations</h3><br/>

                <form action={`http://localhost:5000/modifier/${params.id}?_method=PUT`} method="post">
                    <input type="hidden" name="_method" value="PUT"/>

                    <label for="">Nom</label><br/>
                    <input type="text" name="nom" defaultValue={RecupDataForm.nom}/><br/>

                    <label for="">Prenom</label><br/>
                    <input type="text" name="prenom" defaultValue={RecupDataForm.prenom}/><br/>

                    <label for="">Email</label><br/>
                    <input type="email" name="email" defaultValue={RecupDataForm.email} required/><br/>

                    <label for="">Téléphone</label><br/>
                    <input type="number" name="tel" defaultValue={RecupDataForm.tel} maxlength="10"/><br/>

                    <label for="">Société</label><br/>
                    <input type="text" name="societe" defaultValue={RecupDataForm.societe} required/><br/>

                    <label for="">SIRET ou TVA</label><br/>
                    <input type="number" name="siretTva" defaultValue={RecupDataForm.siretTva} maxlength="14" required/><br/>

                    <label for="">Adresse</label><br/>
                    <input type="text" name="adresse" defaultValue={RecupDataForm.adresse}/><br/>

                    <label for="">URL</label><br/>
                    <input type="text" name="url" defaultValue={RecupDataForm.url}/><br/>

                    <label for="">Mot de passe</label><br/>
                    <input type="password" name="password"/><br/>
                    <br/>

                    <input type="submit" value="Modifier"/>
                </form>

                <a href="/deconnexion/<%=data._id%>"><input type="submit" value="Déconnexion"/></a><br/>
                <a href="/supprimer/<%=data._id%>?_method=DELETE"><input type="submit" value="Supression du compte"/></a><br/>
        </div>
  )
}

export default RecupDataForm