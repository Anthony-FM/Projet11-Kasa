// Assets
import logo from '../../assest/LOGO.svg'
// CSS
import './index.css'
// React Router
import {NavLink} from 'react-router-dom'


function Header(){
    return <header className='HeaderContainer'>
        <img src={logo} alt='logo' className='imgHeader'/>
        <nav className='StyledNav'>
            <NavLink 
                to="/" 
                className={({ isActive, isPending }) =>
                    isPending ? "StyledLink" : isActive ? "StyledLinkActive" : "StyledLink"
                } > Accueil
            </NavLink>
            <NavLink 
                to="/a-propos" 
                className={({ isActive, isPending }) =>
                    isPending ? "StyledLink" : isActive ? "StyledLinkActive" : "StyledLink"
                } >A Propos
            </NavLink>
        </nav>
    </header>
    
}

export default Header