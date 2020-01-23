import styled from 'styled-components';

export const StyledInput = styled.input`
border: none;
background: none;
border-bottom: 2px solid white;
padding: 10px;
margin: 20px;
width: 30vw;
color: white;
font-family: 'Roboto', sans-serif;
font-style: bold;
font-weight: 500;
font-size: 15px;
line-height: 16px;
::placeholder{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
    letter-spacing: 0.75px;
    text-transform: uppercase;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.35;
}
`

export const StyledButton = styled.button`
width: 10vw;
height: 2.5vw;
margin-top: 15px;
background: #F5EBE7;
font-family: 'Roboto', sans-serif;
font-style: regular;
font-weight: 500;
font-size: 15px;
line-height: 16px;
text-align: center;
letter-spacing: 0.75px;
text-transform: uppercase;
color: #000000;
mix-blend-mode: normal;
opacity: 0.50;
border-radius: 200px;
`