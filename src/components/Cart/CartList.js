import React from 'react'
import CartItem from './CartItem'

//cartValues is the parameter, as this is functional component,
// we have to enclose in {}
//for Class Components, this can be referred as this.props.cartValues
function CartList({ cartValues }) {
    //cartList is one of the attribute coming from the Context.js
    //We are only fetching cartList attribute out of many
    const { cartList } = cartValues
    //console.log(cartList,cartValues)
    //For the CartItem, we are sending values as props through map functionality
    // for each record in cartList arrary
    return (
        <div className='container-fluid'>
            {cartList.map(item => { return <CartItem key={item.id} 
                                                     item={item} values={cartValues}>
                                            </CartItem>}
                         )}
        </div>
    )
}

export default CartList
