import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PeopleIcon from '@material-ui/icons/People';
import {useParams} from 'react-router-dom'
import {API_URL} from '../ApiMovies'
import axios from 'axios'
function Details() {
    const [movie,set_movie]=useState(null)
    useEffect(()=>{
        const fetchData=async()=>{
             const dataRes=await axios.get(API_URL)
             set_movie(dataRes.data.results)
         }
         fetchData()
     },[])
    let ActualData=null  
    console.log('movie',movie)

    const {id}=useParams()
    console.log('id',id)
    if(movie){
           ActualData=movie.filter((elm)=>{
                if(elm.id.toString()===id){
                    return elm
                }
         }) 
    console.log('ActualData data',ActualData)
    }
    else{
        console.log('no data')
    }
    return (
        <Container>
            {ActualData?(
                <>
                <Title>{ActualData[0].original_title}</Title>
                 <BackGround src={`https://image.tmdb.org/t/p/w500${ActualData[0].poster_path}`} alt=''/>
                
             <ButtonsContainer>
            <ButtonPlay>
               <PlayCircleFilledIcon/>
               <span>PLAY</span>
            </ButtonPlay>
   
            <ButtonTrailer  style={{'color':'white'}}>
            <PlayCircleFilledIcon/>
            <span>TRAILER</span>
            </ButtonTrailer>
           
               <AddCircleIcon style={{'color':'black','background-color':'white','padding':'2px','border-radius':'3px'}} className='add'/>
               <PeopleIcon style={{'color':'black','background-color':'white','padding':'2px','border-radius':'3px'}} className='people'/>
             </ButtonsContainer>
           <Info>
               <p>{ActualData[0].overview}</p>
           </Info>
           </>
            ) :<h1>Loading...</h1>}
           
        </Container>
    )
}
const Container=styled.div`
width: 100%;
height: 100vh;
position: relative;
margin:0 auto;

`
const BackGround=styled.img`
position: absolute;
 width:100%;
 height: 100%;
 object-fit: fill;

 top: 0px;
 left:0px;
 right:0px;
 bottom: -15px;
`
const Logo=styled.img`
width:100%;
height: 100%;
object-fit: cover;
`

const Wrap=styled.div`
position: absolute;
top:10px;
left:10px;

`
const ButtonsContainer=styled.div`
position: absolute;
top:250px;
left:10px;
display: flex;
justify-content: space-evenly;
align-items: center;

.add{
    margin-right:10px;
    cursor:pointer;
}
.people{
    cursor:pointer; 
}
@media (max-width:768px){
   flex-direction:column;
   align-items: flex-start;
   .add{
    margin-right:0px;
    margin-bottom:10px;
   }
}
`
const ButtonPlay=styled.button`
display: flex;
align-items: center;
border: none;
background-color: white;

cursor: pointer;
border-radius:5px;
padding: 10px 10px;
margin-right:10px;
@media (max-width:768px){
    margin-right:0px;
    margin-bottom:10px;
}
`
const ButtonTrailer=styled(ButtonPlay)`

background-color: black;
`
const Info=styled.div`
position: absolute;
top:300px;
left:10px;
width:50%;
@media (max-width:768px){
    top:420px;
    width:90%;
}
p{
    background-color: white;
    padding: 5px;
    border-radius: 5px;
    color: black;
    font-weight: bold;
}
`

const Title=styled.span`
position:absolute;
cursor:pointer;
top:190px;
left:10px;
z-index:1;
background-color: white;
padding:10px;
border-radius:10px;
font-weight: bold;
color:black;

`
export default Details
