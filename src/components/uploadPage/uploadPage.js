import { useNavigate } from 'react-router-dom';
import "./uploadDataForm.css"
import UploadDataForm from "./uploadDataForm";
import { useEffect, useState } from 'react';
import HomeNavBar from "../homePage/homeNavBar";
import NavBar from "../navbar";

const UploadPag=()=>{
    const navigate=useNavigate();
    useEffect(()=>{
        fetch('https://backend-messmanager.onrender.com/uploadbill',{
        method:'GET',
        credentials:'include'
    }).then(res=> res.json())
    .then((res)=>{
        console.log(res);
            if(!res.login)
            {
               navigate('/login');
            }
    })
    },[]);
    return(
        <>
        <HomeNavBar/>
        <NavBar/>
        <div className="faq11">
            <UploadDataForm/>
        </div>
        </>
    );
    
}

export default UploadPag;