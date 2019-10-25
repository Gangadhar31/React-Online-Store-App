import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './ButtonContainer'

class Navbar extends Component {
    render() {
        return (
            <NavWrapper className='navbar navbar-expand-sm sticky-top px-sm-5'>
                <Link to='/'>
                    <img src={logo} alt={'Store Telephone1'} className='navbar-brand'></img>
                    <span className='navbar-text'>e-Commerce Biz</span>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li class="nav-item active ml-5">
                        <Link to='/' className='nav-link'> products </Link>
                    </li>
                </ul>
                <Link to='/cart' className='ml-auto' >
                    <ButtonContainer>
                        <span>
                        <i className="fa fa-cart-plus" aria-hidden="true"/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )

    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
.navbar-text{
    color:var(--mainWhite);
    font-size:1.4rem;   
}
`
export default Navbar
