import * as React from 'react';
import * as _ from 'lodash';
import * as BigNumber from 'bignumber.js';
import { Table } from 'react-bootstrap';
import { InventoryShape, DiscountShape } from '../store/types';

export interface Props {
    inventory: Array<InventoryShape>;
    cart: Object;
}

function calculatePrice(itemPrice: BigNumber.BigNumber, itemQuantity: number, itemDiscount?: DiscountShape): BigNumber.BigNumber { // tslint:disable-line max-line-length
    if (itemDiscount) {
        switch (itemDiscount.type) {
            case 'cumulative':
                const discountedItems: number = Math.floor(itemQuantity / itemDiscount.primaryCondition) * itemDiscount.secondaryCondition; // tslint:disable-line max-line-length
                const undiscountedItems: number = itemQuantity % itemDiscount.primaryCondition;
                const totalItems: number = discountedItems + undiscountedItems;
                return itemPrice.times(totalItems);
            default:
                return itemPrice.times(itemQuantity);
        }
    }
    return itemPrice.times(itemQuantity);
}

function ShoppingCart({ inventory, cart }: Props) {
    const tableHeader = (
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>
        </thead>
    );
    let totalPrice = new BigNumber(0);
    const tableData = _.map(inventory, (inventoryItem, i) => {
        if (cart[inventoryItem.item] > 0) {
            const price = calculatePrice(inventoryItem.price, cart[inventoryItem.item], inventoryItem.discount);
            totalPrice = totalPrice.add(price);
            return (
                <tr key={i}>
                    <td>{inventoryItem.item}</td>
                    <td>{cart[inventoryItem.item]}</td>
                    <td>{price.toFormat(2)}</td>
                </tr>
            );
        }
        return (
            <tr key={i} />
        );
    });
    return (
        <div>
            <Table hover={true}>
                {tableHeader}
                <tbody>
                    {tableData}
                </tbody>
            </Table>
            Total Price: {totalPrice.toFormat(2)}
        </div>
    );
}

export default ShoppingCart;