import {  useState } from "react";
import DisplayBill from "./homePage/displayBill";
import "./rollnoform.css";
const Rollnoform=()=>{
    const[rollno,setRollno]=useState('');
    const[data,setData]=useState([]);


    const handleInput=(event)=>{
        setRollno(event.target.value);
    }
    const handleSubmit=()=>{
        if(rollno.length===8)
        {
            let reqdata={
                rollno:rollno,
                month:1,
                year:24
            };
            let resdata;
            fetch(`http://localhost:3001/checkBill`,{
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
                //console.log(d);
                if(resdata.length!==0)
                {
                    console.log(resdata);
                    setData(resdata);
                 }
                 else{
                    console.log(`error in fecth details!!!`)
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
        if(data.length!==0)
                {
                    
                    return(<DisplayBill billData={data[0]} roll={rollno}/>);
                }
    }
    return(
        <div style={{display:`flex`,justifyContent:`center`,alignItems:`center`,flexDirection:`column`}}>
            <div style={{display:`inline-flex`,width:`100%`,justifyContent:`center`}}>

            <div className="a1">
                <div>ROLL NO.</div>
                <input type="text" onChange={handleInput}/>
                <button className="a2" onClick={handleSubmit}>SUBMIT</button>
            </div>
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