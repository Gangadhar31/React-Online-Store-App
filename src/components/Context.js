import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";

//Creating Context name: ProductContext
const ProductContext = React.createContext();
//Provider Name:
const ContextProvider = ProductContext.Provider;
//Consumer Name:
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // The following is commented as the Java Script uses values by reference
      // Hence any changes to products will impact Original values in storeProducts
      // products: storeProducts,
      products: [],
      detailProduct: detailProduct,
      cartList: [],
      modalProduct: [],
      modalFlag: false,
      cartSubTotal: 0,
      cartTax: 0,
      cartTotal: 0
    };
  }

  componentDidMount() {
    this.setProducts();
  }
  //This is the best way to copy values into products variables
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      let singleProduct = { ...item };
      tempProducts = [...tempProducts, singleProduct];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };

  getSingleItem = id => {
    const singleItem = this.state.products.find(item => item.id === id);
    return singleItem;
  };

  handleDetails = id => {
    const singleItem = this.getSingleItem(id);
    this.setState(() => {
      return { detailProduct: singleItem };
    });
  };

  addToCart = id => {
    const tempProduct = [...this.state.products];
    // Find the index for the Id
    const index = tempProduct.indexOf(this.getSingleItem(id));
    //Load the Indexed Product
    let singleProduct = tempProduct[index];
    singleProduct.inCart = true;
    singleProduct.count = 1;
    const price = singleProduct.price;
    singleProduct.total = price;
    //??? How the updated singleProduct values are copied to tempProduct???
    //reseting the products arry with updated values
    //bcz the changes to be reflected in Product page for inCart and AddTo Cart
    //behavioural changes
    this.setState(() => {
      return {
        products: tempProduct,
        cartList: [...this.state.cartList, singleProduct]
      };
    },()=> {
       //Calculate the totals wheneve the cartList is updated
      this.addTotal()
    });
  };

  openModal = id => {
    const singleProduct = this.getSingleItem(id);
    this.setState(() => {
      return { modalProduct: singleProduct, modalFlag: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalFlag: false };
    });
  };

  incrementProduct = (id) =>
  {
      //Find the incremented Product and find the index
      let tempCart = [...this.state.cartList]
      let selectedProduct = tempCart.find(item => item.id ===id)
      let index = tempCart.indexOf(selectedProduct)
      
      //Update the Single Product for count and totals
      let singleProduct = tempCart[index]
      singleProduct.count = singleProduct.count + 1
      singleProduct.total = singleProduct.price * singleProduct.count
     
     //Set the state for the cartList
      this.setState(()=>{
        return {cartList: [...tempCart]}
      },()=>{this.addTotal() })
     
  }
  
  decrementProduct = (id) =>
  {
            //Find the incremented Product and find the index
            let tempCart = [...this.state.cartList]
            let selectedProduct = tempCart.find(item => item.id ===id)
            let index = tempCart.indexOf(selectedProduct)
            
            //Update the Single Product for count and totals
            let singleProduct = tempCart[index]
            singleProduct.count = singleProduct.count - 1

            if(singleProduct.count === 0)
            {
              this.removeProduct(id)
            }
            else{
            singleProduct.total = singleProduct.price * singleProduct.count
           
           //Set the state for the cartList
            this.setState(()=>{
              return {cartList: [...tempCart]}
            },()=>{this.addTotal() })
          } 
  }
  
  removeProduct = (id) =>
  {
    //Remove from the cartList
    let tempCart = [...this.state.cartList]  
    tempCart = tempCart.filter(item =>item.id !== id)

    //Remove/Update from the products
    let tempProduct = [...this.state.products]
    let index = tempProduct.indexOf(this.getSingleItem(id))  
    let removedProduct = tempProduct[index]
    removedProduct.inCart = false
    removedProduct.count = 0
    removedProduct.total = 0
    //??? How the updated removedProduct values are copied to tempProduct???

    //Set State for the updated values
    this.setState(()=>{
     return{
      cartList: [...tempCart],
      products: [...tempProduct]
     }
    },()=> {
      this.addTotal()
    })
      }
  
  clearCart = () =>
  {
    //Reset the cartList with empty values  
    this.setState(()=>{
        return{
          cartList: []
        }
      },()=>{
        //re-calculate the totals once the cartList is cleared
        this.addTotal()
        //Refresh the products array with orignial values
        // to handle the inCart, addTo Cart css functionality on the ProductList page 
        this.setProducts()
      })
  }
  
  addTotal = () => {
    let subTotal = 0
    this.state.cartList.map(item=> subTotal = subTotal + item.total)
    let tempTax = subTotal * 0.1
    //fix to 2 decimal values
    const tax = parseFloat(tempTax.toFixed(2))
    const tempTotal = subTotal + tax
    this.setState(() =>{
      return{      
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: tempTotal
    }
    })
  }
  
  render() {
    return (
      <ContextProvider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          incrementProduct: this.incrementProduct,
          decrementProduct: this.decrementProduct,
          removeProduct: this.removeProduct,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ContextProvider>
    );
  }
}

//Export the Component(ProductProvider) and Consumer
// No need to export the Provider
export { ProductProvider, ProductConsumer };
