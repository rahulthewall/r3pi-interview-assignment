import { connect } from 'react-redux';
import ShoppingCart from '../components/ShoppingCart';
import { StoreState } from '../store/types';

function mapStateToProps({ cart, inventory }: StoreState) {
    return {
        inventory,
        cart,
    };
}

export default connect(mapStateToProps)(ShoppingCart);
