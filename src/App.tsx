import * as React from 'react';
import { Provider } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { store } from './store/store';
import Inventory from './containers/InventoryContainer';
import ShoppingCart from './containers/ShoppingCartContainer';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <Grid>
          <h1>React Shopping Cart TS</h1>
          <Row>
          <Col xs={12} md={8}>
            <h2>Inventory</h2>
            <Inventory />
          </Col>
          <Col xs={12} md={4}>
            <h2>Receipt</h2>
            <ShoppingCart />
          </Col>
        </Row>
        </Grid>
      </Provider>
    );
  }
}

export default App;
