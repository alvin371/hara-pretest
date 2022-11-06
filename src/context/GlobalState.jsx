import React, { createContext, useMemo, useReducer } from "react";



export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    // Pokemon
    const [pokemonState, pokemonDispatch] = useReducer(pokemonReducer, initPokemonList);

    const value = useMemo(
        () => ({
            // Pokemon
            pokemonState,
            pokemonDispatch,
        }),
        [
            // Pokemon
            pokemonState,
        ]
    );

    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    );
};
