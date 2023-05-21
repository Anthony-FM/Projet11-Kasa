// Assets
import logo from '../../assest/LOGO-blanc.svg'
// CSS
import './index.css'


function Footer(){
    
 return <footer className='StyledFooter'>
    <img src={logo} alt='logo kasa blanc' className='StyledLogo'/>
    <p className='StyledParagraphe'>© 2020 Kasa. All rights reserved</p>
 </footer>
}

export default Footer