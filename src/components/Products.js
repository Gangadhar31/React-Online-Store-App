import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from './Context'
import PropTypes from 'prop-types'

class Products extends Component {
    render() {
        //this.props.product -- This is coming as parameter when Products Component 
        //begin called
        const { id, title, img, price, inCart } = this.props.product
        return (
            <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            < div className='img-container p-5' onClick={()=>value.handleDetails(id)}>
                                <Link to='/details'>
                                    <img className="card-img-top" src={img} alt="Product-Image" />
                                </Link>
                                {/* Cart Button  */}
                                <button className='cart-btn'
                                    disabled={inCart ? true : false}
                                    onClick={() => 
                                    {value.addToCart(id)
                                     value.openModal(id)
                                    }
                                    }>
                                    {inCart ? (<p className='text-capitalize mb-0' disabled >
                                        {" "}
                                        in cart
                                    </p>) : (<i className='fas fa-cart-plus' />)}
                                </button>
                            </div>
                        )
                        }
                    </ProductConsumer>

                    {/* Cart Footer  */}
                    <div className='card-footer d-flex justify-content-between'>
                        <p className='align-self-center mb-0'>{title}</p>
                        <h5 className='text-blue mb-0 font-italic'>
                            <span className='mr-1'> $ </span>
                            {price}
                        </h5>
                    </div>
                </div>

            </ProductWrapper >
        )
    }
}
// The following propTypes used to validate the Type of data coming from the data
//file, if invalid data type is coming,system will throw error automatically
//Component.propTypes
Products.propTypes = {
    product: PropTypes.shape(
        {
            id: PropTypes.number,
            title: PropTypes.string,
            img: PropTypes.string,
            price: PropTypes.number,
            inCart: PropTypes.bool,
        }
    ).isRequired
}
const ProductWrapper = styled.div`
    .card{
        border-color: transparent;
        transition: all 1s linear;
    }
    .card-footer{
        background: transparent;
        border-top: transparent;
        transition: all 1s linear;
    }
    &:hover{
        .card{
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        .card-footer{
            background: rgba(247,247,247);
        }
    }
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .card-img-top{
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top{
        transform: scale(1.2);
    }
    .cart-btn{
        position: absolute;
        bottom:0;
        right:0;
        padding:0.2rem 0.4rem;
        background: var(--lightBlue);
        border: none;
        color: var(--mainWhite);
        border-radius: 0.5rem 0 0 0;
        font-size: 1.4rem;
        transform: translate(100%,100%);
        transition: all 1s linear;
    }
    .img-container:hover .cart-btn{
        transform: translate(0%,0%);
    }
    .cart-btn:hover{
        color: var(--mainBlue);
        cursor: pointer;
    }
`

export default Products
