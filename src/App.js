import React from 'react';
import { Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import CartDetails from './components/Cart'
import ProductList from './components/ProductList';
import PageNotFound from './components/PageNotFound';
import ProductDetails from './components/ProductDetails';
import ProductModal from './components/ProductModal'

function App() {
  return (
    <React.Fragment>
      {/* Navbar is dispalyed on all the pages, so no need to include in switch */}
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={ProductList}></Route>
        <Route path='/details' component={ProductDetails}></Route>
        <Route path='/cart' component={CartDetails}></Route>
        <Route component={PageNotFound}></Route>
      </Switch>
      <ProductModal></ProductModal>
    </React.Fragment>

  );
}
 
export default App;
