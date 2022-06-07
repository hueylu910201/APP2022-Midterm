import { ADD_FAVORITE_DRINK,REMOVE_FAVORITE_DRINK } from "../constants";
const initialFavoriteDrink={
    drink:[],
};
export const addFavReducer=(state=initialFavoriteDrink,action)=>{
    switch(action.type){
        case ADD_FAVORITE_DRINK:
            return{
                ...state,
                drink:[...state.drink,action.payload]
            };
        case REMOVE_FAVORITE_DRINK:
            return{
                ...state,
                drink:state.drink.filter(drink=>drink.id!==action.payload)
            }
        default:
            return state;    
    }
}