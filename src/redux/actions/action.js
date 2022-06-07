import { ADD_FAVORITE_DRINK,REMOVE_FAVORITE_DRINK } from "../constants";
export const addFavoriteDrink=(drinkInfo)=>(dispatch)=>{
    const item={
        title:drinkInfo.title,
        id:drinkInfo.id,
        address:drinkInfo.address,
        thumbnail_image:drinkInfo.thumbnail_image,
        score:drinkInfo.score,
        rate:drinkInfo.rate,
        menu:drinkInfo.menu,
        image:drinkInfo.image,
        tel:drinkInfo.tel,
        time:drinkInfo.time,
    }
    dispatch({
        type:ADD_FAVORITE_DRINK,
        payload:item,
    });
};

export const removeFavoriteDrink = (drink) => (dispatch) => {
    dispatch({
        type: REMOVE_FAVORITE_DRINK,
        payload: drink,
    })
}
