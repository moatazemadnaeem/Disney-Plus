import React from 'react'
import styled from 'styled-components'
import login from '../images/login-background.jpg'
import btmlogo from '../images/cta-logo-two.png'
import toplogo from '../images/cta-logo-one.svg'
function Login() {
    return (
        <Container>
         <img src={login}  alt=''/>  
         <InfoContainer>
            <LogoTop src={toplogo} alt=''/>

            <MidButton>
            <span>GET ALL THERE</span>
            </MidButton>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

           <LogoBottom src={btmlogo} alt=''/>
         </InfoContainer>
        </Container>
    )
}
const Container=styled.div`
position: relative;
height: 90vh;
width: 100%;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index:-1;
    opacity: 0.7;
}

`
const InfoContainer=styled.div`
position: absolute;

top:50%;
left:50%;
transform: translate(-50%, -50%);
p{
    width: 100%;
}
`

const LogoTop=styled.img`


`
const LogoBottom=styled.img`


`
const MidButton=styled.button`
width: 100%;
padding: 15px;
border:none;
outline: none;
background-color: #0063e5;
border-radius:5px;
color: white;
font-weight:bold;
cursor: pointer;
&:hover{
    background-color:#0483ee;
}
`


export default Login
