import React from "react";
import "./login.css";
import { useContext } from "react";
import { detailProvider } from "./hook";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';






export default function LoginPage(props){

    const context = useContext(detailProvider);
    const navigate = useNavigate();
    

    function validate(event){
        if(context.handleSubmit(event)){
            Cookies.set("login","true")
            navigate("/");
        }else{
            return false;
        }
    
    }

    


    return (<div className="login-div">
        <h2 className="login-header">Welcome to freeCodeCamp</h2>
    <form  onSubmit={(event)=>{return(validate(event))}}>
   <div id="input-container">  <label>Firstname:</label><br/><input name="firstName" onChange={context.handleChange} placeholder="Firstname" type="text"/><br/></div>
   <div id="input-container"> <label>Lastname:</label><br/><input name="lastName" onChange={context.handleChange} placeholder="Lastname" type="text"/> <br/></div>
   <div id="input-container">  <label>Email:</label><br/><input onChange={context.handleChange} name="email" placeholder="Email" type="email"/><br/><br/></div>
   <div id="input-container"> <button type="submit">Submit</button> </div>

    </form>
     

    </div>)
}