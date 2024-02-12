import React from 'react'

function ModifTissu(props) {

  console.log(props.tissuId);
  console.log(props.data);
  const tissu = props.data;

  return (
    <div>
      
     <form action={`http://localhost:5000/modiftissu/${props.tissuId}?_method=PUT`} method="post">
        <input type="hidden" name="_method" value="PUT" />
        <label>Titre</label>
        <input type="text" name="titre" defaultValue={tissu.titre}/>
        <br/>
        <label>Couleur</label>
        <input type="text" name="couleur" defaultValue={tissu.couleur} />
        <br/>
        <label>Description</label>
        <textarea name="description" id="" cols="30" rows="10" defaultValue= {tissu.description}>
        </textarea>
        <br/>
        <input type="submit" value="update tissu" />
    </form>

    {/* <form action={`http://localhost:5000/deleteblog/${props.tissuId}?_method=DELETE`} method="post">
        <input type="hidden" name="_method" value="DELETE" />

        <input type="submit" value="DELETE post" />
    </form> */}

    </div>
  )
}

export default ModifTissu