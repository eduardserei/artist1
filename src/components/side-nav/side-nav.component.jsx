import React from "react";
import { Link } from 'react-router-dom';
import { SocialIcon } from "react-social-icons";

import normalLogo from '../../assets/download.jpeg';
import johnLogo from '../../assets/john-logo-removebg-preview.png';
import johnLogo2 from '../../assets/john-logo2-nobg.png';

import './side-nav.styles.scss';

class SideNav extends React.Component {
    render() {
        return (
                <aside className='side-nav-container'>
                        <img src={normalLogo} alt={'Logo Missing'} className='side-nav-container__logo'/>
                        <div className='side-nav-container__nav-links-container'>
                            <ul>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about'>About</Link></li>
                                <li><Link to='/contact'>Contact</Link></li>
                            </ul>
                            <div className="side-nav-container__social-icons-container">
                                <div>
                                    <SocialIcon url="http://linkedin.com/in/eduardserei"/>
                                </div>
                                <div>
                                    <SocialIcon network="facebook" />
                                </div>
                                <div>
                                    <SocialIcon network="instagram" bgColor='#ff5a01'/>
                                </div>
                                <div>
                                    <SocialIcon network="youtube" />
                                </div>
                                
                                
                                
                            </div>
                        </div>
                </aside>
        )
    }
}

export default SideNav;