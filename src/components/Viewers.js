import React from 'react'
import styled from 'styled-components'
import viewer from '../images/viewers-disney.png'
import marvel from '../images/viewers-marvel.png'
import starwars from '../images/viewers-starwars.png'
import pixar from '../images/viewers-pixar.png'
import national from '../images/viewers-national.png'
function Viewers() {
    return (
        <Container>
            <Wrap>
             <img src={viewer} alt=''/>
            </Wrap>
            <Wrap>
             <img src={pixar} alt=''/>
            </Wrap>
            <Wrap>
             <img src={marvel} alt=''/>
            </Wrap>
            <Wrap>
             <img src={starwars} alt=''/>
            </Wrap>
            <Wrap>
             <img src={national} alt=''/>
            </Wrap>
        </Container>
    )
}
const Container=styled.div`
display: flex;
align-items: center;
margin-top: 10px;
justify-content: space-between;
margin: 10px 10px;

`
const Wrap=styled.div`
width: 15%;
height: 15%;
border-radius:10px;
cursor: pointer;
box-shadow:10px 10px 10px #090b13;
border: 1px solid white;
transition: width 0.5s;
box-sizing:border-box;
 img{
     width: 100%;
     height: 100%;
     object-fit: cover;
 }
 
 &:hover{
    width: 15.5%;
    height: 15.5%;
    border: 2px solid white;
    box-shadow:15px 15px 15px #090b13;
 }
`
export default Viewers
