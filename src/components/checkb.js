
import { useNavigate } from "react-router-dom";
const Checkb=()=>{


    const navigate=useNavigate();
    const handleclick=()=>{
        fetch('https://backend-messmanager.onrender.com/getcok',{
            credentials: 'include' 
        })
        .then((res)=>{
           // console.log(res.headers.getSetCookie());
          //window.location.href = res.url;
           //navigate('/');
            return res.json();
        })
        .then((res)=>{
            console.log(res);
        })
    }

    return(
        <div>
            <button onClick={handleclick}>get cookie</button>
        </div>
    );
}

export default Checkb;