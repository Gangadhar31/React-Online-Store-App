import React, { Component } from 'react'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import { ProductConsumer } from '../Context'
import CartList from './CartList'
import CartTotal from './CartTotal'

class CartDetails extends Component {
    render() {
        return (
            <ProductConsumer>
                {values => {
                    const { cartList } = values
                    if (cartList.length > 0)
                    //Passing the 'Values' as props to CartList Component from Context.js 
                    return (
                            <React.Fragment>
                                <Title name='Your' title='Cart' />
                                <CartColumns> </CartColumns>
                                <CartList cartValues={values}></CartList>
                                <CartTotal value={values}> </CartTotal>
                            </React.Fragment>
                        )
                    else
                        return (<EmptyCart></EmptyCart>)
                }

                }
            </ProductConsumer>

        )
    }
}

export default CartDetails
