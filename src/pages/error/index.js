import PokemonList from "../../components/PokemonList";
import React, { useEffect, useState } from 'react';

const ErrorPage = () => {
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
    return (
        <div style={{display:'flex', flexDirection:'column',width:`${windowWidth}px`, alignItems:'center', margin:10}}>
            <h2 style={{textAlign:'center'}}>Uh oh! There's a problem getting the pokemon...</h2>
            <PokemonList />
        </div>
    );
}

export default ErrorPage