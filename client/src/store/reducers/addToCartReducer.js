const DEFAULT_STATE = {
    cartList: [],
    size: 0
};

export const addToCartReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            let newState = { ...state };
            // clone the current cartList
            const currentCart = JSON.parse(JSON.stringify(state.cartList));
            // check if the product is already in the cart or not ?
            const index = currentCart.findIndex((element) => element.id === action.payload.id);
            if (index !== -1) {
                currentCart[index].cartQuantity++;
            } else {
                const newProduct = { ...action.payload, cartQuantity: 1 };
                currentCart.push(newProduct);
            }
            state.cartList = currentCart;
            state.size = newState.size + 1;
            // console.log(state);
            break;
        default:
            break;
    }
    return { ...state };
};  