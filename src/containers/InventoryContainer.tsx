import { connect, Dispatch } from 'react-redux';
import Inventory from '../components/Inventory';
import { addToCart, removeFromCart, CartAction } from '../cart/actions';
import { StoreState } from '../store/types';

function mapStateToProps({ inventory }: StoreState) {
    return {
        inventory,
    };
}

function mapDispatchToProps(dispatch: Dispatch<CartAction>) {
    return {
        onAddToCart: (item: string) => dispatch(addToCart(item)),
        onRemoveFromCart: (item: string) => dispatch(removeFromCart(item)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
