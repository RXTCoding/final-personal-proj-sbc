const initialState={
    cart:[]
}

const SET_CART="SET_CART"

 export function setCart(cart){
     return{
         type: SET_CART,
         paylaod: cart
     }
 }

export default function cartReducer (state= initialState, action){
    switch (action.type){
        case SET_CART:
            return{...state, cart:action.payload}
        default:
            return{...state}
    }
}