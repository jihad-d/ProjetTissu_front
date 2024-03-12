import React, { useState } from 'react';
import axios from 'axios';
import './newproduit.css';

function NewProduit() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('titre', event.target.titre.value);
    formData.append('couleur', event.target.couleur.value);
    formData.append('description', event.target.description.value);

    axios.post('http://localhost:5000/newproduit', formData)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <br />
      <br />
      <div className='container'>
        <form className="ajtprod" onSubmit={handleSubmit} encType="multipart/form-data">
          <h1>Ajouter un tissu</h1>
          <label>Image</label>
          <input type="file" onChange={handleFileChange} />
          <br />
          <label>Titre</label>
          <input type="text" name="titre" />
          <br />
          <label>Couleur</label>
          <input type="text" name="couleur" />
          <br />
          <label>Description</label>
          <textarea className="description" name="description" cols="30" rows="10"></textarea>
          <br />
          <input type="submit" value="Ajouter nouveau tissu" />
        </form>
      </div>
    </div>
  );
}

export default NewProduit;


