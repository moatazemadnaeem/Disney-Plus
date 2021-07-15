import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../images/logo.svg'
import home from '../images/home-icon.svg'
import search from '../images/search-icon.svg'
import watchlist from '../images/watchlist-icon.svg'
import original from '../images/original-icon.svg'
import movie from '../images/movie-icon.svg'
import series from '../images/series-icon.svg'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {newUser} from '../Redux/user/userAction'
import {auth,provider} from '../firebase'
import {useHistory} from 'react-router-dom'
function Header() {
    let history=useHistory()
    const user=useSelector((state)=>state.user.name)
    const profilephoto=useSelector((state)=>state.user.photo)
    const dispatch=useDispatch()
    const [displayNavMenu,setdisplayNavMenu]=useState('none')
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            console.log('user is',user)
            if(user){
                dispatch(newUser({name:user.displayName,email:user.email,photo:user.photoURL}))
                history.push('/')
            }
            else{
                dispatch(newUser({name:null,email:null,photo:null}))
                history.push('/login')
            }
        })
    },[])
  
    const HandelDispaly=(e)=>{
        if(displayNavMenu==='none'){
            setdisplayNavMenu('')
        }
        else{
            setdisplayNavMenu('none')
        }
    }
    const handelLogIn=(e)=>{
        auth
        .signInWithPopup(provider)
        .then((result) => {
          const  user = result.user;
          dispatch(newUser({name:user.displayName,email:user.email,photo:user.photoURL}))
          console.log('user is',user)
        }).catch((error) => {
           console.log(error.message)
        });
    }
    const handelLogout=(e)=>{
        auth.signOut()
    }
    return (
        <Nav>
           
               
             <Logo src={logo} alt=''/>

          
            {
                    user? <>
                      <Menu onClick={HandelDispaly}><MenuIcon/></Menu> 


                        <NavMenu NavMenuDisplay={displayNavMenu}>
                        <NavInfo>
                        
                            <LogoIcon src={home} alt=''/>
                        
                            <span>Home</span>
                        </NavInfo>
                        <NavInfo>
                        
                            <LogoIcon src={search} alt=''/>
                        
                            <span>Search</span>
                        </NavInfo>
                        <NavInfo>
                        
                            <LogoIcon src={watchlist} alt=''/>
                        
                            <span>WatchList</span>
                        </NavInfo>
                        <NavInfo>
                        
                            <LogoIcon src={original} alt=''/>
                        
                            <span>Originals</span>
                        </NavInfo>
                        <NavInfo>
                        
                            <LogoIcon src={movie} alt=''/>
                        
                            <span>Movies</span>
                        </NavInfo>
                        <NavInfo>
                        
                            <LogoIcon src={series} alt=''/>
                        
                            <span>Series</span>
                        </NavInfo>

                        </NavMenu>

                        <button onClick={handelLogout}>Log out</button>
                        <Link to='/login'>
                                <ProfilePic src={profilephoto}/>

                        </Link>
                                            
                    </>:<button onClick={handelLogIn}>Log In</button>
            }

          
        </Nav>
    )
}
const Nav =styled.nav`
position: sticky;
top:0px;
background-color:#090b13;
width: 100%;
padding: 10px 0;
display:flex ;
justify-content: space-between;
align-items:center;
@media (max-width:768px){
   flex-direction:column;
   align-items: center;
   justify-content: center;
   button{
       margin:10px;
   }
}
button{
    padding: 10px;
    border-radius:5px;
    margin-right:15px;
    border:none;
    outline: none;
    background-color: white;
    border:1px solid black;
    cursor: pointer;
    color:black;
    &:hover{
        background-color: black;
        border:1px solid white;
       color:white;
    }
}
`
const Logo=styled.img`
width: 80px;
margin-left:15px;
cursor: pointer;
@media (max-width:768px){
   margin-left:0px;
}
`
const LogoIcon=styled.img`
width: 30px;
`
const NavMenu=styled.div`
display: flex;
align-items: center;
width: 80%;

justify-content: space-evenly;
margin-left:10px;
@media (max-width:768px){
   
   display:${(props)=>props.NavMenuDisplay};
   flex-direction:column;
   align-items: flex-start;
   
}
`
const NavInfo=styled.div`
display: flex;
align-items: center;
cursor:pointer;
&:hover{
    border-bottom:1px solid white;
}
`

const ProfilePic=styled.img`
width: 40px;
border-radius:50%;
margin-right:15px;
cursor: pointer;
@media (max-width:768px){
   margin-right:0px;
}
`

const Menu=styled.span`

display: none;
cursor: pointer;
@media (max-width:768px){
   display:block;
}

`
export default Header
