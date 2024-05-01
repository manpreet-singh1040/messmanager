import {  useState } from "react";
import DisplayBill from "./homePage/displayBill";
import "./rollnoform.css";
const Rollnoform=()=>{
    const[rollno,setRollno]=useState('');
    const[data,setData]=useState([]);


    const handleInput=(event)=>{
        setRollno(event.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(rollno.length===8)
        {
            let reqdata={
                rollno:parseInt(rollno),
            };
            let resdata;
            fetch(`https://backend-messmanager.onrender.com/checkbill`,{
                method:`POST`,
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(reqdata)
            })
            .then((res)=>{
                if(!res.ok)
                {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((d)=>{
                resdata=d;
                console.log(d);
                setData(resdata);
                if(resdata.status)
                {
                    console.log(resdata);
                 }
                 else{
                    alert(`invalid rollno.!!`);
                 }
                //console.log(rollno);
            })
           // setData(resdata);
            }
           else{
            alert(`invalid rollno.!!!`);
            if(data.length!==0)
            {
                setData([]);
            }
           }
    }
    const disFun=()=>{
        if(data.status)
                {
                    
                    return(<DisplayBill billData={data.data} roll={rollno}/>);
                }
    }
    return(
        <div style={{display:`flex`,justifyContent:`center`,alignItems:`center`,flexDirection:`column`}}>
            <div style={{display:`flex`,width:`100%`,justifyContent:`center`}}>

            <form className="a1">
                <h1>Roll No.Form</h1>
                <br/>
                <lable>ROLL NO</lable>
                <input type="text" onChange={handleInput}/>
                <button className="a2" onClick={handleSubmit}>SUBMIT</button>
            </form>
            <br></br>
            </div>
            <div style={{backgroundClip:`transparent`,display:`inline-flex`,width:`100%`,margin:`10px`,padding:`0px`, borderRadius:`15px`,justifyContent:`center`,alignItems:`center`,border:`2px solid black`}}>
            {
                disFun()
            }
            </div>
            
        </div>
    )
}

export default Rollnoform;