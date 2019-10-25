import styled from 'styled-components'
//We can also pass Props to styled components as shown bleow 
// for border-color,color and background properties
//this is passed from the ProductDetails.js
export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--lightBlue);
border-color: ${props =>props.cart? "var(--mainYellow)":"var(--lightBlue)"};
color: ${props =>props.cart? "var(--mainYellow)":"var(--lightBlue)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: .2rem .5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props =>props.cart? "var(--mainYellow)":"var(--lightBlue)"};
    color: var(--mainBlue);
}
&:focus{
    outline: none;
}
`

