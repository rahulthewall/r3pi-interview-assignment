import { BigNumber } from 'bignumber.js';

export interface DiscountShape {
  type: string;
  text: string;
  primaryCondition: number;
  secondaryCondition: number;
}

export interface InventoryShape {
    item: string;
    price: BigNumber;
    discount?: DiscountShape;
}

export interface StoreState {
  cart: Object;
  inventory: Array<InventoryShape>;
}

export interface ReduxWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: any; // tslint:disable-line no-any
}
