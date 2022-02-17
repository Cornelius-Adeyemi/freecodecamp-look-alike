import React, { useContext, createContext, useState } from "react";

const defaultState= {firstName:null,lastName:null, email:null, menu:false,login:false}


function useProvider(){
    const [state, setState] = useState(defaultState);
    

    const handleChange = (event)=>{

        if(event.target.name==="firstName"){
        setState({...state,firstName:event.target.value});
        }else if(event.target.name==="lastName"){
            setState({...state,lastName:event.target.value});
        }else if(event.target.name==="email"){
            setState({...state,email:event.target.value});
        }
    };

    const handleMenu = ()=>{
        setState({...state,menu:!state.menu});
    };

    const handleSubmit = (event)=>{
        if(state.firstName && state.lastName && state.email ){
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
        setState({...state,login:false});
    }

 return {state, handleChange, handleMenu,handleSubmit, handleLogout}
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