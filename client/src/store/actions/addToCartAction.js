export const addToCartAction = (product) => {
    return {
        type: "ADD_TO_CART",
        payload: product,
    }
}