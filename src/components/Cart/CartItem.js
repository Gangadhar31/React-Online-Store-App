import React from 'react'

function CartItem({ item, values }) {
    const { id, img, title, price, total, count } = item
    const { incrementProduct, decrementProduct, removeProduct } = values
    return (
        <div className='row m-3 text-capitalize text-center'>
            <div className='col-10 mx-auto col-lg-2'>
                <img className='img-fluid' src={img} alt='ProductImage' style={{ width: "5rem", height: "5rem" }} />
            </div>
            <div className='col-10 mx-auto col-lg-2 '>
                <span className='d-lg-none'> <strong>Product: </strong> </span> {title}
            </div>
            <div className='col-10 mx-auto col-lg-2'>
                <span className='d-lg-none'> <strong>Price: </strong> </span> {price}
            </div>
            {/* Quantity */}
            <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                <div className='d-flex justify-content-center'>
                <div className='btn btn-black mx-1'
                onClick={() => decrementProduct(id)}>
                <span>-</span>
            </div>
            <div className='btn btn-black mx-1' >
                <span></span> {count}
            </div>
            <div className='btn btn-black mx-1'
                onClick={() => incrementProduct(id)}>
                <span>+</span>
            </div>
                </div>

            </div>
            {/* End of Quantity */}
            <div className='cart-icon col-10 mx-auto col-lg-2' onClick={()=> removeProduct(id)}>
                <i class="fas fa-trash"></i>
            </div>     
            <div className='col-10 mx-auto col-lg-2'>
                <span> <strong>Item Total: </strong> </span> {total}
            </div>                   
        </div>
    )
}

export default CartItem
