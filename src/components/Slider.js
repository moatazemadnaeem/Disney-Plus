import React,{useState} from 'react'
import styled from 'styled-components'
import {imagesSlider} from '../SliderData'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
function Slider() {

    const [ImageSlider,setImageSlider]=useState(0)
    const increment=(e)=>{
        if(imagesSlider.length-1===ImageSlider){
            setImageSlider(0)
        }else{
            setImageSlider(ImageSlider+1)
        }
    }
    const decrement=(e)=>{
        if(0===ImageSlider){
            setImageSlider(imagesSlider.length-1)
        }else{
            setImageSlider(ImageSlider-1)
        }
    }

    return (
        <SliderContainer>
            <Span onClick={increment}><ArrowLeftIcon/></Span>
           <ImageSliderContainer>
                <SliderBadag src={imagesSlider[ImageSlider].ImageSlider} alt=''/>
           </ImageSliderContainer>
            <Span onClick={decrement}><ArrowRightIcon/></Span>
          
        </SliderContainer>
    )
}
const SliderContainer=styled.div`
display: flex;
align-items: center;
justify-content: center;
justify-content: space-evenly;
margin-top:10px;

`
const SliderBadag=styled.img`
width: 100%;
border-radius:10px;
cursor: pointer;
border: 0px solid white; 
transition: border 0.2s;
box-shadow:1px 1px 10px white;

&:hover{
    border: 3px solid white;
    box-shadow:0px 0px 0px white;
}

`

const ImageSliderContainer=styled.div`
width: 60%;

`
const Span=styled.span`
cursor: pointer;

`
export default Slider
