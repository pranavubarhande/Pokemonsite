import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './styles.css'
const DetailsPage = () => {
  const location = useLocation()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  const { name, sprites, types, moves } = location.state.pokemon;
  return (
    <div style={{width: `${windowWidth > 500 ? 500 : windowWidth}px`, alignSelf:'center', display:'flex', flexDirection:'column', alignItems:'center', borderRadius:20, backgroundColor:'beige', margin:'auto', height:'100%', marginTop:'20px' }}>
      <div style={{display:'flex', justifyContent:'center'}}>
        <h1 className="text-capitalize">{name}</h1>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <h3>Height: {Math.round(location.state.pokemon.height * 3.93)}cm</h3>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <h3>Weight: {Math.round(location.state.pokemon.weight * 0.22)}lbs</h3>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <h3>Type: {types[0].type.name}</h3>
      </div>
      <img style={{ width: "70%"}} src={sprites.other.home.front_default} alt="Pokemon" />
      <div style={{width:'100%', display:'flex', justifyContent:'space-evenly'}}>
        <img style={{ width: "30%" }} src={sprites.front_default} alt="Front profile" />
        <img style={{ width: "30%" }} src={sprites.back_default} alt="Back profile" />
      
      </div>

      
    </div>
  )
}

export default DetailsPage
