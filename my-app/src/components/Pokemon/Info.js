import {useState,useEffect} from 'react';
import PokemonDataView from "./DataView";
import PokemonErrorView from "./ErrorView";
import PokemonPendingView from "./PendingView";
import pokemonAPI from "../../services/pokemon-api";

const Status = {
    IDLE: "idle",
    PENDING: "pending",
    RESOLVED: "resolved",
    REJECTED: 'rejected',
};

export default function PokemonInfo ({pokemonName}) {
    const [pokemon,setPokemon] = useState(null)
    const [error, setError] = useState(null)
    const [status,setStatus] = useState(Status.IDLE)

    useEffect(() => {
        if(!pokemonName) {
            // Первый рендер,pokemonName это пустая строка, не делаем fetch
            return;
        }
        setStatus(Status.PENDING);
        
        pokemonAPI 
        .fetchPokemon(pokemonName)
        .then(pokemon => {
            // Это асинхронный код
            // Здесь важен порядок операций  Сначала получаем покемон а потом меняем статус
            // Т.к сетСтатус вызывает компонент который требует покемона
            setPokemon(pokemon);
            setStatus(Status.RESOLVED)
        })
        .catch(error => {
            setError(error);
            setStatus(Status.REJECTED)
        })
    },[pokemonName]);

    if(status === Status.IDLE) {
        return <div>Введите имя покемона.</div>
    }
    if(status === Status.PENDING) {
        return <PokemonPendingView pokemonName={pokemonName}/>
    }
    if(status === Status.REJECTED) {
        return <PokemonErrorView massage={error.message}/>
    }
    if(status === Status.RESOLVED) {
        return <PokemonDataView pokemon={pokemon}/>
    }
}