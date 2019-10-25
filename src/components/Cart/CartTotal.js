import React from 'react'
import { Link } from 'react-router-dom'

function CartTotal({ value }) {
    const { cartTax, cartSubTotal, cartTotal, clearCart } = value
    return (
        <React.Fragment>
            <div class="container">
                <div class="row">
                    <div class="col-10 col-sm-8 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right">
                        <Link to='/'>
                            <button className='btn btn-outline-warning text-danger text-uppercase'
                                type='button'
                                onClick={() => clearCart()}>
                                clear cart
                        </button>
                        </Link>
                        <h4 className='text-title mt-3'>
                            <span> cart subTotal: {cartSubTotal} </span>
                        </h4>
                        <h4 className='text-title mt-2'>
                            <span> cart Tax: {cartTax} </span>
                        </h4>
                        <h4 className='text-title mt-2'>
                            <span> cart Total: {cartTotal} </span>
                        </h4>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CartTotal
