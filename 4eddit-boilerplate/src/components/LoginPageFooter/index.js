import React from 'react';
import styled from 'styled-components';


const Footer = styled.footer`
    position: absolute;
    left: 42%;
    right: 4%;
    top: 94.14%;
    bottom: 1%;
    font-family: Roboto;
    font-style: normal;
    font-size: 15px;
    line-height: 15px;
    text-align: justify;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #ED7F61;
` 


function LoginFooter() {
    return (    
        <Footer>4eddit powered by future4</Footer>
    );
}



export default LoginFooter;