import * as BigNumber from 'bignumber.js';
import { createStore } from 'redux';
import { cartReducer } from '../cart/reducers';
import { StoreState, ReduxWindow } from './types';

const initialState = {
    cart: {
        apple: 0,
        orange: 0,
        banana: 0,
        papaya: 0,
    },
    inventory: [
    {
        item: 'apple',
        price: new BigNumber(0.25),
    },
    {
        item: 'orange',
        price: new BigNumber(0.30),
    },
    {
        item: 'banana',
        price: new BigNumber(0.30),
    },
    {
        item: 'papaya',
        price: new BigNumber(0.50),
        discount: {
            type: 'cumulative',
            text: '3 for the price of 2',
            primaryCondition: 3,
            secondaryCondition: 2,
        },
    },
  ],
};

declare let window: ReduxWindow;

export const store = createStore<StoreState>(cartReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); // tslint:disable-line max-line-length
