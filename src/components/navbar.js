import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar=()=>{
        
        return(
            
            <div className='container'>
                <div>
                    <Link to='/'>
                    </Link>
                </div>
                
                    <ul style={{display:`flex`,margin:`1vh`,padding:`1vh`,overflow:`auto`}}>
                        <li className='listitem' ><Link to='/user/:userName'><b>Check bill</b></Link></li>
                        <li className='listitem'><Link to='/about'><b>About</b></Link></li>
                    </ul>
                    <div className='loginlink'>
                                 <Link to='/login' className='loginLinkText' ><b>Login/Register</b></Link>
                    </div>
            </div>
        )
    }
export default NavBar;