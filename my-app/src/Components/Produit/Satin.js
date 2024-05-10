import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import './satin.css'
import { Link } from 'react-router-dom'


function Satin() {

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
    axios.get("http://localhost:5000/satin")
      .then(response => {
        console.log(response.data);
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR' });
      })
  }, []);


  return (

    <div className='containertissu'>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1 className='titre'>Satin</h1>
      </div>
      {
        state.loading ? 'Loading...' : state.tissus.map((tissu, index) => {
          return (
            <div className="card" key={index}>
              {tissu.image && <img src={`http://localhost:5000/${tissu.image}`} alt="" style={{ "width": "50%" }} />}
              <h1 className='titretissu'>{tissu.titre}</h1>
              <br />
              <p className='couleur'>Couleur : {tissu.couleur}</p>
              <br />
              <p className='descriptiontissu'>{tissu.description}</p>
              <br />
              {/* <p className='prix'>{tissu.prix}</p>
              <br /> */}
              <button>
                <Link to="/modiftissu" state={{ tissu: tissu }}>
                  <p className='btnmodif'>Modifier</p>
                </Link>
              </button>
              <br />
              <button>
                <Link to="/newproduit" state={{ tissu: tissu }}>
                  <p className='ajtmodele'>Ajouter modèle</p>
                </Link>
              </button>
            </div>
          )
        })
      }
    </div>

  )
}

export default Satin