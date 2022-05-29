import React, {  createContext, useState } from "react";
import Cookies from 'js-cookie';


const defaultState= {firstName:null,lastName:null, email:null, menu:false,login:false}


function useProvider(){
    const [state, setState] = useState(defaultState);

    const logToState = (value)=>{

        setState({...state,firstName:value.firstName,lastName:value.lastName,email:value.email,login:true})
    }
    
    const setStore = (theStore)=>{

    if(!localStorage.getItem("detail")){
     localStorage.setItem("detail",JSON.stringify(theStore))
    }
    }
    
    const clearCookiesLocal = ()=>{
        Cookies.remove("login");
        localStorage.removeItem("detail");
    }
    

    const handleChange = (event)=>{

        if(event.target.name==="firstName"){
        setState({...state,firstName:event.target.value});
        }else if(event.target.name==="lastName"){
            setState({...state,lastName:event.target.value});
        }else if(event.target.name==="email"){
            setState({...state,email:event.target.value});
        }
    };
    
    const menuChanger = ()=>{

        console.log("inside here")
        if(state.menu===true){
            console.log("inside the if")
        setState({...state,menu:false})
        }
    }

    const handleMenu = ()=>{
        setState({...state,menu:!state.menu});
       

    };

    const handleSubmit = (event)=>{
        if(state.firstName && state.lastName && state.email ){
        let store = {firstName:state.firstName, lastName:state.lastName, email:state.email}
                setStore(store);  
        setState({...state,login:true});

        event.preventDefault();
        
        
        return true;
    } else {
        alert("please fill all the information")
        event.preventDefault();
        return false;
    }
    }

    const handleLogout = ()=>{
        setState({...state,login:false,firstName:null,lastName:null, email:null });
        clearCookiesLocal();
    }

 return {state, logToState, handleChange, handleMenu,handleSubmit, handleLogout,menuChanger}
}



const detailProvider = createContext();


function TheAuto({children}){
    const value = useProvider();
    return (
        <detailProvider.Provider value={value}>
            {children}
        </detailProvider.Provider>
    )
}


export {detailProvider, TheAuto};