import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './styles.css'
const DetailsPage = () => {
  const location = useLocation()
  
  const { name, sprites, types, moves } = location.state.pokemon;
  return (
    <div className="pokemon-details-container">
      <div className="images-container">
        <div className="card-body">
          <div className={` rounded text-center mb-1 w-100 d-flex flex-column g-3`}>
            <div style={{ minWidth: "20rem" }} className="fs-1 fw-bolder">
              <h1 className="text-capitalize">{name}</h1>
            </div>
            <div className="fs-3 fw-bold m-0">
              <h3>Height: {Math.round(location.state.pokemon.height * 3.93)}cm</h3>
            </div>
            <div className="fs-3 fw-bold m-0">
              <h3>Weight: {Math.round(location.state.pokemon.weight * 0.22)}lbs</h3>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
              <h3>Type: {types[0].type.name}</h3>
            </div>
          </div>
          
          <img style={{ width: "20rem"}} src={sprites.other.home.front_default} alt="Pokemon" />
          <div className="images-row">
            <div className="d-flex d-flex-column justify-content-center align-items-center">
              <img style={{ width: "20rem" }} src={sprites.front_default} alt="Front profile" />
            </div>
            <div className="d-flex d-flex-column justify-content-center align-items-center">
              <img style={{ width: "20rem" }} src={sprites.back_default} alt="Back profile" />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default DetailsPage
