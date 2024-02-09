import React from 'react'

function Profil(){

    return(
        <div>
            <h3>Mes informations</h3><br/>

                <form action={`http://localhost:5000/modifier/${UtilisateurProId}?_method=PUT`} method="post">
                    <input type="hidden" name="_method" value="PUT"/>

                    <label for="">Nom</label><br/>
                    <input type="text" name="nom" defaultValue={UtilisateurPro.nom}/><br/>

                    <label for="">Prenom</label><br/>
                    <input type="text" name="prenom" defaultValue={UtilisateurPro.prenom}/><br/>

                    <label for="">Email</label><br/>
                    <input type="email" name="email" defaultValue={UtilisateurPro.email} required/><br/>

                    <label for="">Téléphone</label><br/>
                    <input type="number" name="tel" defaultValue={UtilisateurPro.tel} maxlength="10"/><br/>

                    <label for="">Société</label><br/>
                    <input type="text" name="societe" defaultValue={UtilisateurPro.societe} required/><br/>

                    <label for="">SIRET ou TVA</label><br/>
                    <input type="number" name="siretTva" defaultValue={UtilisateurPro.siretTva} maxlength="14" required/><br/>

                    <label for="">Adresse</label><br/>
                    <input type="text" name="adresse" defaultValue={UtilisateurPro.adresse}/><br/>

                    <label for="">URL</label><br/>
                    <input type="text" name="url" defaultValue={UtilisateurPro.url}/><br/>

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



export default Profil