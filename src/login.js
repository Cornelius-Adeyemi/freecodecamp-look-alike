import React from "react";
import "./login.css";
import { useContext } from "react";
import { detailProvider } from "./hook";
import { useNavigate } from "react-router-dom";




export default function LoginPage(props){

    const context = useContext(detailProvider);
    const navigate = useNavigate();
    

    function validate(event){
        if(context.handleSubmit(event)){
            navigate("/");
        }else{
            return false;
        }
    
    }

    


    return (<div className="login-div">
        <h2>Welcome to freeCodeCamp</h2>
    <form  onSubmit={(event)=>{return(validate(event))}}>
     <label>Firstname:</label><br/><input name="firstName" onChange={context.handleChange} placeholder="Firstname" type="text"/><br/>
     <label>Lastname:</label><br/><input name="lastName" onChange={context.handleChange} placeholder="Lastname" type="text"/> <br/>
     <label>Email:</label><br/><input onChange={context.handleChange} name="email" placeholder="Email" type="email"/><br/><br/>
     <button type="submit">Submit</button>

    </form>
     

    </div>)
}