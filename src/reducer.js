import { createMuiTheme } from "@material-ui/core";

export const initialState = {
    cart: [],
    // product: null,
    // user: null,
    // seller:null,
} 

export const getDeposits = (cart) => cart?.reduce((amount, item) =>
item.price + amount, 0);

 
const reducer = (state, action) => {
    
    switch (action.type) {
        case "DEPOSIT":
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        
        case 'REMOVE_DEPOSIT':
            const index = state.cart.findIndex((cart) =>
                createMuiTheme.id === action.id);
            let newCart = [...state.cart];

            if (index >= 0) {
                newCart.splice(index, 1)
            } else {
                
            }

            return{
            ...state, 
                cart: newCart
}
        default:
            return state;
    }
   
};
export default reducer;