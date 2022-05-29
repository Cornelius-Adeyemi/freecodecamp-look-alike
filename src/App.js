import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import amazon from "./image/amazon.svg"
import apple from "./image/apple.png"
import google from "./image/google.svg"
import spotify from "./image/spotify.png"
import microsoft from "./image/microsoft.svg"
import team from "./image/team.jpg"
import Bisi from "./image/Bisi.jpg"
import Footer from './footer';
import {detailProvider, TheAuto} from './hook';
import { useContext } from "react";
import LoginPage from './login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  
} from "react-router-dom";
import Cookies from 'js-cookie'


// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return {count: state.count + 1};
//     case 'decrement':
//       return {count: state.count - 1};
//     default:
//       throw new Error();
//   }
// }



// function useReducer(reduce, initial){
//  const [state, setState] = useState(initial);


//  const dispatch = (action)=>{
//     const newstate = reduce(state, action);
//     setState(newstate);
//  }
// return [state, dispatch]
// } 

// const initialState = {count:0};

//  function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({type: 'decrement'})}>-</button>
//       <button onClick={() => dispatch({type: 'increment'})}>+</button>
//     </>
//   );
// }



function Nav(props){

  const information = useContext(detailProvider);
  
 

  return (<div className='nav-div'><nav className='nav'>
    <ul>
    {information.state.login ===false && <><li className='menu'><Link className='link' to="/login">Login</Link></li></>}
    {information.state.login? <><li className='menu' onClick={information.handleLogout}>Logout</li>
      <li className='menu' onClick={information.handleMenu}>Menu</li></>:""}
    </ul>
    {information.state.menu && <div className='menu-div'> 
      <p>Official freeCodeCamp</p>
      <hr/>
      <p>Things to Expect</p>
      <hr/>
      <p>Just Sample</p>
      <hr/>
      <p>Here we go</p>
    </div>}
  </nav></div>)
}

function HomePage(props){

  const information = useContext(detailProvider);

  

  

  useEffect(()=>{
  
    document.addEventListener("click", information.menuChanger)
    return ()=>{
      document.removeEventListener("click",information.menuChanger)
    }

    
  },[information.state.menu,information.state.login])

  
   
  return(<div>
    <div className='first-div'>

     {information.state.login && <h2 id='name'>Welcome {information.state.firstName}!</h2>}
    <h1>Learn to code — for free.</h1>
    <h1>Build projects.</h1>
    <h1>Earn certifications.</h1>
    

    <p>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten jobs at tech companies including:</p>
    <div className='for-flex'> <img className='icon' src={apple} alt=''/> <img className='icon' src={google} alt=''/> <img className='icon' src={microsoft} alt=''/>
     <img className='icon' src={spotify} alt=''/> <img className='icon' src={amazon} alt=''/> </div>
     <button className='get-started'> Get Started (it's free)</button>
     <div className='img-div'><img className='alone-img' src={team} alt=" " />
     <p className='img-caption'>freeCodeCamp students at a local study group in South Korea.</p></div>
     
    </div>

    <section className='first-section'>
      <h1>As seen in:</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor neque urna, non condimentum <br/>
     augue luctus nec. Vestibulum consectetur nulla non scelerisque laoreet. Nullam blandit, urna vel faucibus <br/>
     lobortis, turpis justo pellentesque erat, ac ultricies ipsum enim at dui. Sed vulputate tempus nulla id<br/>
      posuere. Cras non purus sit amet diam iaculis aliquet. Aliquam posuere tortor eu pellentesque bibendum. 
      <br/>Mauris elementum tincidunt tincidunt. Phasellus sed ornare ligula. Vestibulum facilisis, enim in 
      <br/>elementum consequat, odio nunc eleifend augue, id scelerisque purus lacus eget orci. Donec et 
      <br/>condimentum sapien, vitae pulvinar urna. Mauris eget finibus diam, a mattis dolor.</p>
    </section>
    <section className='alumni-section'>
      <h1>Here is what our alumni say about freeCodeCamp:</h1>
      <div className='alumni'><div className='alumni-img-div'><img src={Bisi} alt=""/></div><div className='alumni-text-div'><h3>Shawn Wang in Singapore</h3>
      <h3>Software Engineer at Amazon</h3><p>"It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a
         six-figure job as a Software Engineer. freeCodeCamp changed my life."</p></div></div>
      <div className='alumni'><div className='alumni-img-div'><img src={Bisi} alt=""/></div><div className='alumni-text-div'><h3>Sarah Chima in Nigeria</h3><h3>Software Engineer at ChatDesk</h3>
      <p>"freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level
         to a very confident level. It was everything I needed to land my first dev job at an amazing company."</p></div></div>
      <div className='alumni'><div className='alumni-img-div'><img src={Bisi} alt=""/></div><div className='alumni-text-div'><h3>Emma Bostian in Sweden</h3><h3>Software Engineer at Spotify</h3>
      <p>"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well
         as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p></div></div>
    </section>

  </div>)
}



function Routing(props){
    let contextValue = useContext(detailProvider)
     
    const authLogin= ()=>{
    //  let cookiesValue = Cookies.get("login")
      
      
      if(Cookies.get("login")){
        let detailStore = JSON.parse(localStorage.getItem("detail"));
        console.log("i'm here");
        contextValue.logToState(detailStore);
      }
    }

    useEffect(()=>{
      authLogin();
    },[])
   
    return(
    <Router>
    <Nav/>
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route path="/login"  element={(contextValue.state.login) ? <Navigate to="/"/>: <LoginPage/>}/>
   </Routes>
  <Footer/>
  </Router>
  )
}





export default function App(){
  return (<div className='app-div'> 
  <TheAuto>
   <Routing/>
  </TheAuto>
  </div>)
}



