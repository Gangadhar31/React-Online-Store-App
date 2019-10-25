import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from './Context'
import { ButtonContainer } from './ButtonContainer'

class ProductDetails extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, img, title, price, info, company, inCart } = value.detailProduct
                    return (
                        <div className='container py-5'>
                            {/* Title */}
                            <div className='row'>
                                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* End of Title */}

                            <div className='row'>
                                {/* Show Image Column  */}
                                <div className='col-10 mx-auto col-md-6 col-lg-6'>
                                    <img className='img-fluid' src={img} alt='ProductImg'></img>
                                </div>
                                {/* Product Info */}
                                <div className='col-10 mx-auto col-md-6 col-lg-6 text-capitalize'>
                                    <h2>Model: {title}</h2>
                                    <h4>Made By: <span className='text-uppercase'>{company}</span>
                                    </h4>
                                    <h4 className='text-blue'> <strong>Price: $<span>{price}</span> </strong></h4>
                                    <h4>
                                        <p className='text-capitalize font-weight-bold mt-3 mb-1'>
                                            More Info about Product:</p>

                                        <p className='text-muted lead'>{info}</p>
                                    </h4>
                                    {/* Button Info  */}
                                    <Link to='/'>
                                        <ButtonContainer>
                                            back to Products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                        cart
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id)
                                            value.openModal(id)
                                        }}>
                                        {inCart ? 'inCart' : 'Add ToCart'}
                                    </ButtonContainer>
                                </div>
                            </div>
                            {/* Button Info  */}
                        </div>
                    )
                }
                }
            </ProductConsumer>
        )
    }
}

export default ProductDetails
