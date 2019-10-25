import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./ButtonContainer";

class ProductModal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalFlag, closeModal } = value;
          const { id, img, price, title } = value.modalProduct;
          if (!modalFlag) return null;
          else
            return (
              <ModalWrapper>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto col-md-6 col-lg-3 text-capitalize p-4"
                    >
                      <h4 className="text-primary">Item Added to the Cart</h4>
                      <img
                        className="img-fluid"
                        src={img}
                        alt="ProductImg"
                      ></img>
                      <h5>{title}</h5>
                      <h5 className="text-danger text-muted">
                        Price: ${price}
                      </h5>
                      <Link to="/">
                        <ButtonContainer
                          onClick={() => {
                            closeModal(id);
                          }}
                        >
                          Store
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer
                          cart
                          onClick={() => {
                            closeModal(id);
                          }}
                        >
                          Go to Cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalWrapper>
            );
        }}
      </ProductConsumer>
    );
  }
}

export default ProductModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
