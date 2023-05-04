import logo from '../../assest/LOGO.svg'
import './index.css'
import {Link} from 'react-router-dom'


function Header(){
    return <header className='HeaderContainer'>
        <img src={logo} alt='logo' />
        <nav className='StyledNav'>
            <Link to="/" className='StyledLink' >Accueil</Link>
            <Link to="/a-propos" className='StyledLink' >A propos</Link>
        </nav>
    </header>
    
}

export default Header