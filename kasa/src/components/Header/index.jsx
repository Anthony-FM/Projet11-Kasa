import logo from '../../assest/LOGO.svg'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import colors from '../../utils/colors'

const HeaderContainer = styled.header`
    margin: 40px 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.img`

`

const StyledNav = styled.nav`
    width: 309px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 24px;
    margin-left: 54px;
    color: ${colors.primary}
`
function Header(){
    return <HeaderContainer>
        <Logo src={logo} alt='logo'/>
        <StyledNav>
            <StyledLink to="/" >Accueil</StyledLink>
            <StyledLink to="/a-propos" >A propos</StyledLink>
        </StyledNav>
    </HeaderContainer>
    
}

export default Header