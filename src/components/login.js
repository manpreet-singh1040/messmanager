import { Component } from "react";
import './login.css';
class Login extends Component{
    render(){
        return(
            <div>
    <div className="background">
        
    </div>
    <form>
        <h3>Login Here</h3>

        <label >Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

        <label >Password</label>
        <input type="password" placeholder="Password" id="password"/>

        <button>Log In</button>
        <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
    </div>
        )
    }
}
export default Login;