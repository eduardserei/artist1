import { NavLink } from 'react-router-dom';

import instagram from '../../assets/social-icons/instagram64px.png'
import facebook from '../../assets/social-icons/facebook64px.png'
import linkedin from '../../assets/social-icons/linkedin64px.png'
import youtube from '../../assets/social-icons/youtube64px.png'

import normalLogo from '../../assets/logos/daniel-jordan.jpeg';
// import johnLogo1 from '../../assets/logos/john-logo.png';
// import johnLogo2 from '../../assets/logos/john-logo2.png';

import './side-nav.styles.scss';

const SideNav = () => {

    const handleClick = (ev) => {
        const sameRoute = ev.target.href === window.location.href;
        if (sameRoute) {
            ev.preventDefault();
        }
    }
    
        return (
            <aside className='side-nav-container'>
                <img src={normalLogo} alt={'Logo Missing'} className='side-nav-container__logo' />
                <div className='side-nav-container__nav-links-container'>
                    <ul>
                        <li><NavLink onClick={handleClick} to='/' exact activeStyle={{color: '#000000'}} >Home</NavLink></li>
                        <li><NavLink onClick={handleClick} to='/about' activeStyle={{color: '#000000'}}>About</NavLink></li>
                        <li><NavLink onClick={handleClick} to='/contact' activeStyle={{color: '#000000'}}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="side-nav-container__social-icons-container">
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={linkedin} alt="twitter" />
                    <img src={youtube} alt="youtube" />
                </div>
            </aside>
        )
}

export default SideNav;