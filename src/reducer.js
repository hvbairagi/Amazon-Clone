// think reducer as a dataLayer

export const initialState = {
    basket: [],
    user: null,
};

// Selector
export const getBasketTotal = (basket)=>
    basket?.reduce((amount, item) => item.price+amount, 0);

// dispatching actions into the store and reducer just listens and knows what to do

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id) // finds only the first match
            let newBasket = [...state.basket];
            console.log(index);
            if(index>=0){
                newBasket.splice(index, 1); // going to the point where the basket was and cuts it by one
            } else{
                console.warn(`Can't remove product (id: ${action.id}) as its not in the basket`)
            }
            return{
                ...state,
                // basket: state.basket.filter(item=>item.id !== action.id) // disadvantage of this: if you select multiple same things and then remove, it will remove all the same items not one
                basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;