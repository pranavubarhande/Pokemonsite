import PokemonList from "../../components/PokemonList";

const ErrorPage = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2>Uh oh! There's a problem getting the pokemon...</h2>
            <PokemonList />
        </div>
    );
}

export default ErrorPage