import React, { useEffect, useReducer } from 'react'
import axios from 'axios'


function AfficherTissu() {

  const initialState = {
    loading: true,
    error: '',
    tissu: {}
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS': return {
        loading: false,
        error: '',
        tissus: action.payload
      }
      case 'FETCH_ERROR': return {
        loading: false,
        error: 'Something went wrong',
        tissus: {}
      }
      default: return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get("http://localhost:5000/affichertissu")
      .then(response => {
        console.log(response.data);
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR' });
      })
  }, []);

  return (
    // <div>
    //     <h1>{tissu.titre}</h1>
    //     <p>Couleur : {tissu.couleur}</p>
    //     <p>{tissu.description}</p>

    //   <button>Modifier</button>
    //   <button>Supprimer</button>
    // </div>

    <div>
      {
        state.loading ? 'Loading...' : state.tissus.map((tissu, index) => {
          return (


            <div key={index}>
              {/* {blog.imageName && <img src={`http://localhost:5000/tissu`} style={{ "width": "50%" }} />} */}

              <h1>{tissu.titre}</h1>
              <p>Couleur : {tissu.couleur}</p>
              <p>{tissu.description}</p>
            </div>
          )
        })
      }
    </div>

  )
}

export default AfficherTissu