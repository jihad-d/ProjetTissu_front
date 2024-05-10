import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './modiftissu.css'

function ModifTissu() {

  const location = useLocation()
  const { tissu } = location.state
  console.log(tissu)
  const [selectedFile, setSelectedFile] = useState(tissu.image);
  const [titre, setTitre] = useState(tissu.titre)
  const [couleur, setCouleur] = useState(tissu.couleur)
  const [description, setDescription] = useState(tissu.description)


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0].name);
  };
  const handleTitreChange = (event) => {
    setTitre(event.target.value);
  };
  const handleCouleurChange = (event) => {
    setCouleur(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };


  return (
    <div className='containermodif'>
      <br />
      <br />
      <br />
      <br />
      <form className="modifprod" action={`http://localhost:5000/modiftissu/${tissu._id}?_method=PUT`} method="post">
        <input type="hidden" name="_method" value="PUT" />
        <h1>Modifier tissu</h1>

        {tissu.image && <img src={`http://localhost:5000/${tissu.image}`} alt="" style={{ "width": "50%" }} />}
        <label>Nouvelle Image : </label>
        <input className='img' type="file" onChange={handleFileChange} />
        <input className='img' type="hidden" name="image" value={selectedFile} />
        <br />
        <label>Titre</label>
        <input type="text" name="titre" value={titre} onChange={handleTitreChange} />
        <br />
        <label>Couleur</label>
        <input type="text" name="couleur" value={couleur} onChange={handleCouleurChange} />
        <br />
        <label>Description</label>
        <textarea className="description" name="description" id="" cols="30" rows="10" value={description} onChange={handleDescriptionChange}>
        </textarea>
        <br />
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