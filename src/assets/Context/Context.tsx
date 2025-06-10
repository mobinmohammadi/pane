import { Children, createContext, useReducer, type Dispatch } from "react";

type ThemeState = {
  isLight: boolean;
};

type ThemeAction = { type: "TOGGLE_THEME" };

const initialState: ThemeState = {
  isLight: true,
};

const ThemeContext = createContext<{
  state: ThemeState;
  dispatch: Dispatch<ThemeAction>;
}>({
    state : initialState,
    dispatch : () => null
});

function themeReducer(state : ThemeState , action : ThemeAction) : ThemeState {
    switch (action.type){
        case 'TOGGLE_THEME' : {
            return {isLight : !state.isLight}
        }
        default : {
            return state;
        }
    }
}
export const ThemeProvider = ({ children } : {children : React.ReactNode}) => {
    const [state , dispatch] = useReducer(themeReducer , initialState )
    return (
        <ThemeContext.Provider value={{state , dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext