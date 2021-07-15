import React,{useEffect} from 'react'
import styled from 'styled-components'
import Movies from './Movies'
import Slider from './Slider'
import axios from 'axios'
import Viewers from './Viewers'
import {API_URL} from '../ApiMovies'
import {useDispatch} from 'react-redux'
import {setMovie} from '../Redux/movies/movieActions'
function HomePage() {
    const dispatch =useDispatch()
    useEffect(()=>{
       const fetchData=async()=>{
            const dataRes=await axios.get(API_URL)
            dispatch(setMovie(dataRes.data.results))
           
        }
        fetchData()
    },[])
    return (
        <Container>
         <Slider/>
         <Viewers/>
         <Movies/>
        </Container>
    )
}

const Container=styled.div`



`
export default HomePage
