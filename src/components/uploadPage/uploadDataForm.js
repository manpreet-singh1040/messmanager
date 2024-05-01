import {useState} from "react";
import "./uploadDataForm.css"
import {useNavigate} from 'react-router-dom'
const UploadDataForm=()=>{
    const[xFile,setxFiles]=useState(null);
    const[hostel,sethostel]=useState('');
    const[submittion,setsubmittion]=useState(false);
    const navigate=useNavigate();
    const submitData=()=>{
        if(hostel!=='' && xFile!==null)
        {
            fetch(`https://backend-messmanager.onrender.com/uploadbill`,{
                method:`POST`,
                headers:{"Content-Type":"application/json"},
                credentials:"include",
                body:JSON.stringify(xFile)
            })
            .then((res)=>{
                if(!res.ok)
                {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((mes)=>{
                if(mes.login)
                {
                    alert(`form submitted!!`);
                    setsubmittion(true);
                }
                else{
                    alert(`form not submitted!! because user not logged in`);
                    navigate('/login');
                    
                }
                sethostel('');
                setxFiles(null);
            })
        }
        else{
            alert(`plz fill all the info before submiting!!`);
        }
    }
    const handleHostel=(event)=>{
        sethostel(event.target.value)
    }
    const handleFilechange=(event)=>{
        setxFiles(event.target.files[0]);
        console.log(event.target.files[0]);
        console.log(JSON.stringify(xFile));
    }

    const sub=()=>{
        return(
            <div className="faq10">
            <div>
                <h2>UPLOAD FORM</h2>
                <label>Hostel:</label><input type="text" onChange={handleHostel}/>
                <label>XLSX Sheet:</label><input type="file" accept=".xlsx" onChange={handleFilechange}/>
                <button onClick={submitData}>SUBMIT</button>
            </div>
        </div>
        );
    }

    const anotherFile=()=>{
        setsubmittion(false);
    }
    
    const nsub=()=>{
        return(
            <div className="faq10">
            <div>
                <h2>UPLOAD FORM</h2>
                <br></br>
                <img alt="tick" src="https://w7.pngwing.com/pngs/328/627/png-transparent-green-tick-mark-thumbnail.png"></img>
                <br></br>
                <button onClick={anotherFile}>SUBMIT ANOTHER FILE</button>
            </div>
        </div>
        )
    }
    const fun=()=>{
        if(submittion)
        {
            return nsub();
        }
        else{
            return sub();
        }
    }
    return(
        <>
        {
            fun()
        }
        </>
        
    );
}

export default UploadDataForm;