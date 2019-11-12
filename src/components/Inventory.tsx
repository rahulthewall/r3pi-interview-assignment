import * as React from 'react';
import * as _ from 'lodash';
import { Table, Button } from 'react-bootstrap';
import { AddToCart, RemoveFromCart } from '../cart/actions';
import { InventoryShape } from '../store/types';

export interface Props {
    inventory: Array<InventoryShape>;
    onAddToCart: (item: string) => AddToCart;
    onRemoveFromCart: (item: string) => RemoveFromCart;
}

function Inventory({ inventory, onAddToCart, onRemoveFromCart }: Props) {
    const tableHeader = (
        <thead>
            <tr>
                <th>Item</th>
                <th>Price/Item (in USD)</th>
                <th>Offer</th>
                <th>Add one item to cart</th>
                <th>Remove one item from cart</th>
            </tr>
        </thead>
    );
    const tableData = _.map(inventory, (inventoryItem, i) => {
        return (
            <tr key={i}>
                <td>{inventoryItem.item}</td>
                <td>{inventoryItem.price.toFormat(2)}</td>
                <td>{inventoryItem.discount ? inventoryItem.discount.text : 'No Discount'}</td>
                <td>
                    <Button
                        bsStyle="primary"
                        onClick={() => onAddToCart(inventoryItem.item)}
                    >
                        Add to cart
                    </Button>
                </td>
                <td>
                    <Button
                        bsStyle="primary"
                        onClick={() => onRemoveFromCart(inventoryItem.item)}
                    >
                        Remove
                    </Button>
                </td>
            </tr>
        );
    });
    return (
        <Table hover={true}>
            {tableHeader}
            <tbody>
                {tableData}
            </tbody>
        </Table>
    );
}

export default Inventory;