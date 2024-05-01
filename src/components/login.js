import {  useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import './login.css';
const Login= (props)=>{
    let navigate=useNavigate();
    const [login,setlogin]=useState(false);
    useEffect(()=>{
        fetch('https://backend-messmanager.onrender.com/login',{
            method:'GET',
            credentials:'include'
        })
        .then((res)=>{
            console.log(res.headers.get('Set-Cookie'));
            return res.json();
        })
        .then((res)=>{
            if(res.login)
            {
                setlogin(true);
                console.log("fuck you");
                
            }
            else{
                setlogin(false);
                console.log("not u");
            }
        })
    },[])
        const handleSubmit=(event)=>{
            console.log(`hey inside`);
            event.preventDefault();
           
            try{
                const formData={
                    username:event.target.elements.username.value,
                    password:event.target.elements.password.value
                }
                if(formData.username!=='' && formData.password!=='')
                {
                    fetch('https://backend-messmanager.onrender.com/login',{
                        method:'POST',
                        credentials: 'include',
                        headers:{'Content-Type':'application/json'},
                        body:JSON.stringify(formData)
                    })
                    .then((res)=> {
                        return res.json();
                    })
                    .then((resMes)=>{
                        console.log(resMes);
                        if(resMes.status)
                        {
                            console.log(`here`)
                            setlogin(true);
                        }
                        else{
                            console.log(`chutiye`);
                            alert(`incorrectform details plz re-enter!!`);
                        }
                    })
                }
            }
            catch(error){
                console.error('Error submitting form:', error.message);
            }
        };
        const gotohome=()=>{
            console.log('button clicked!!');
            navigate('/user');
        };
        const fun=()=>{
            if(login)
            {
                return(
                    <div>
                        <h2>already loged in</h2>
                        <button onClick={gotohome}>back to home page </button>
                    </div>
                );
            }
            else{
                return(
                    <form  onSubmit={handleSubmit}>
        <h3>Login Here</h3>

        <label >Username</label>
        <input type="text" placeholder="Email or Phone" id="username" name="username" />

        <label >Password</label>
        <input type="password" placeholder="Password" id="password" name="password" />

        <button type="submit">Log In</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
                );
            }
        }
        return(
            <div>
    <div className="background">
        
    </div>
    {
        fun()
    }
    </div>
        )
    }

export default Login;