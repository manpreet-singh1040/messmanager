import { useNavigate } from "react-router-dom";

import UploadPag from "../uploadPage/uploadPage";
import { useEffect } from "react";
const UploadPage=(props)=>{
    const {login}=props;
    const navigate=useNavigate();
    useEffect(()=>{
        if(!login)
        {
            console.log(`"hey checking ${login}"`);
            navigate('/login');
        }
    })
    
        return(
            <div>
                
                <UploadPag/>
            </div>
        )
}

export default UploadPage;