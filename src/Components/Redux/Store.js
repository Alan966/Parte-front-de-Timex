import { createStore } from 'redux';

const initialState = {
    relojesTotales: []
}

const reducer = (state = initialState, {type, id}) => {
    if(type === 'ADD_RELOJ'){
        if(state.relojesTotales.includes(id)){
            return state
        }else{
            return {
                ...state, 
                relojesTotales: state.relojesTotales.concat(id)
            }
        }
    }

    if(type === 'REMOVE_RELOJ'){
        if(state.relojesTotales.includes(id)){
            return{
                ...state, 
                relojesTotales: state.relojesTotales.filter(reloj => reloj !== id)
            }
        }
    }
    return state
}


export default createStore(reducer)