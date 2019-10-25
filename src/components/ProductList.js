import React, { Component } from 'react'
import Products from './Products'
import Title from './Title'
import { ProductConsumer } from './Context'


class ProductList extends Component {
    //Render Functionality
    render() {
        return (
            <React.Fragment>
                <div class="container py-5">
                    <Title name='Rugveda-Ravan' title='Products'></Title>
                    <div class="row">
                        {/* Consuming the Context Values */}
                        <ProductConsumer>
                            {(value) => {
                                return value.products.map(product => {
                                    return <Products key={product.id} product={product}></Products>
                                })
                            }
                            }
                        </ProductConsumer>
                        {/* Consuming the Context Values */}
                    </div>
                </div>
            </React.Fragment>
            //  <Products></Products>

        )
    }
}

export default ProductList
