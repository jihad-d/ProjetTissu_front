import React from 'react'
import './newproduit.css'

function NewProduit() {
  return (

    <div>
    <br/>
    <br/>

    <div className='container'>
        <form className="ajtprod" action="http://localhost:5000/newproduit" method="post">
            <h1>Ajouter un tissu</h1>
            <label for="">Titre</label>
            <input type="text" name="titre" />
            <br/>
            <label for="">Couleur</label>
            <input type="text" name="couleur" />
            <br/>
            {/* <label for="">Image</label>
            <input type="file" name="image" />
            <br/> */}
            <label for="">Description</label>
            <textarea className="description"name="description" id="" cols="30" rows="10">
            </textarea>
            <br/>
            <input type="submit" value="ajouter nouveau tissu" />
        </form>
    </div>


    </div>
  )
}

export default NewProduit