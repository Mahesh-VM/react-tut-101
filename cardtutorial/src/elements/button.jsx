import styled, { css } from "styled-components";

console.log('button element.')
const Button = styled.button`
border: none;
${props=>props.color && css`
background-color: ${props=>props.length<2 ? props.theme[props.color='primary']: 'green'};
color: ${props=>props.length<2 ? 'black' : 'white'};
`}
padding: 16px 32px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
transition-duration: 0.4s;
cursor: pointer;
`
export default Button;