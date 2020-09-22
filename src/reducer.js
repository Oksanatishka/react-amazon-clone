export const initialState = {
    basket: [],
    // Adding items to basket - for testing purpose in CheckoutProduct.js
    // basket: [
    //     {
    //         id: '12346',
    //         title: 'AmazonBasics Water-Resistant Pet Bed for Small Dogs',
    //         price: 27.3,
    //         rating: 4,
    //         image: 'https://images-na.ssl-images-amazon.com/images/I/61ylVny96HL._AC_SX679_.jpg',
    //     },
    //     {
    //         id: '12346',
    //         title: 'AmazonBasics Water-Resistant Pet Bed for Small Dogs',
    //         price: 27.3,
    //         rating: 4,
    //         image: 'https://images-na.ssl-images-amazon.com/images/I/61ylVny96HL._AC_SX679_.jpg',
    //     },
    // ],
    user: null,
};

// export const actionTypes = {
//     SET_USER: 'SET_USER',
// };

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        // the only the only purpose of this is going to be to update the user when they login or when they log out
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'ADD_TO_BASKET':
            // Logic for Adding item to basket
            // returning the current state & overwriting the value of basket with a new value
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        // break;
        case 'REMOVE_FROM_BASKET':
            // Logic for Removing item from basket

            // we cloned the basket
            let newBasket = [...state.basket];

            // we check to see if product exists
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0) {
                // item exists in basket, remove it
                newBasket.splice(index, 1);
            } else {
                console.warn(`Can't remove product (id: ${action.id}) as its not in basket`);
            }
            return {
                ...state,
                basket: newBasket,
            };
        // break;
        default:
            return state;
    }
};

export default reducer;
