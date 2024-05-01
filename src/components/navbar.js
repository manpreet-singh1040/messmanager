import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar=()=>{
        
        return(
            
            <div className='container'>
                
                    <ul style={{display:`flex`,margin:`1vh`,overflow:`auto`, float:'left'}}>
                        <li className='listitem'><Link to='/'><b>Home</b></Link></li>
                        <li className='listitem' ><Link to='/user'><b>Check Bill</b></Link></li>
                        <li className='listitem'><Link to='/uploadBill'><b>Upload Bill</b></Link></li>
                    </ul>
                    <div className='loginlink'>
                                 <Link to='/login' className='loginLinkText' ><b>Login/Register</b></Link>
                    </div>
            </div>
        )
    }
export default NavBar;