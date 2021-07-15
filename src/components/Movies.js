import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
function Movies() {
    const apidata=useSelector((state)=>state.movie.movies)
    console.log('api data',apidata)
    return (
        <Container>
             <ColumnMoviesContainer>
                 {
                     apidata?apidata.map((elem,key)=>{
                       return(
                           <Wrap key={key}>
                               <Link to={`/details/${elem.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`} alt=''/>
                               </Link>
                       
                        </Wrap>
                       ) 
                     }) :<h1>Loading...</h1>
                 }
           </ColumnMoviesContainer>
             
        </Container>
    )
}
const Container=styled.div`
display: flex;
justify-content: center;

`
const ColumnMoviesContainer=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;

`
const Wrap=styled.div`
width:250px;
height:250px ;
border-radius:10px;
cursor: pointer;
margin: 10px;
box-shadow:10px 10px 10px #090b13;
border: 1px solid white;
transition: width 0.5s,height 0.5s;
 img{
     width: 100%;
     height: 100%;
     border-radius:10px;
     object-fit: cover;
 }
 
 &:hover{
    width:260px;
    height:260px;
    border: 2px solid white;
    box-shadow:15px 15px 15px #090b13;
 }
}
`
export default Movies
