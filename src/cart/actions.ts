import * as constants from './constants';

export interface AddToCart {
    type: constants.ADD_TO_CART;
    item: string;
}

export interface RemoveFromCart {
    type: constants.REMOVE_FROM_CART;
    item: string;
}

export type CartAction = AddToCart | RemoveFromCart;

export function addToCart(item: string): AddToCart {
    return {
        type: constants.ADD_TO_CART,
        item,
    };
}

export function removeFromCart(item: string): RemoveFromCart {
    return {
        type: constants.REMOVE_FROM_CART,
        item,
    };
}