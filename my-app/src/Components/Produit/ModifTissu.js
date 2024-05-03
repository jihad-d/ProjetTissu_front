import React from 'react'
import { useLocation } from 'react-router-dom'
import './modiftissu.css'

function ModifTissu(props) {

  const location = useLocation()
  const { tissu } = location.state
  console.log(tissu)

  return (
    <div className='containermodif'>
      <br />
      <br />
      <br />
      <br />
      <form className="modifprod" action={`http://localhost:5000/modiftissu/${tissu._id}?_method=PUT`} method="post">
        <input type="hidden" name="_method" value="PUT" />
        <h1>Modifier tissu</h1>
        <label>Image</label>
        <input type="file" name="image" defaultValue={tissu.image} />
        <br/>
        <label>Titre</label>
        <input type="text" name="titre" defaultValue={tissu.titre}/>
        <br/>
        <label>Couleur</label>
        <input type="text" name="couleur" defaultValue={tissu.couleur} />
        <br/>
        <label>Description</label>
        <textarea className="description" id="" cols="30" rows="10" defaultValue= {tissu.description}>
        </textarea>
        <br/>
        <input type="submit" value="Sauvegarder tissu" />
      </form>
  
      <form className="supprimertissu" action={`http://localhost:5000/supprimtissu/${tissu._id}?_method=DELETE`} method="post">
        <input type="hidden" name="_method" value="DELETE" />
        <input type="submit" value="DELETE post" />
      </form>
    </div>
  );
  
  
}

export default ModifTissu