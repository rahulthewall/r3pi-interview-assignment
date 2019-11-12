import * as _ from 'lodash';
import { CartAction } from './actions';
import { StoreState } from '../store/types';
import { ADD_TO_CART, REMOVE_FROM_CART } from './constants';

export function cartReducer(state: StoreState, action: CartAction): StoreState {
    const currentCart = _.clone(state.cart);
    switch (action.type) {
        case ADD_TO_CART:
            currentCart[action.item] = currentCart[action.item] + 1;
            return {
                ...state,
                cart: currentCart,
            };
        case REMOVE_FROM_CART:
            currentCart[action.item] = Math.max(currentCart[action.item] - 1, 0);
            return {
                ...state,
                cart: currentCart,
            };
        default:
            return state;
    }
}
