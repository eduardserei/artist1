import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import normalLogo from '../../assets/logos/daniel-jordan.jpeg';
// import johnLogo1 from '../../assets/logos/john-logo.png';
// import johnLogo2 from '../../assets/logos/john-logo2.png';

import './mobile-nav.styles.scss'

const MobileNav = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0); 
    const [navTranslate, setNavTranslate] = useState(0);

    const [sidebarShown, setSidebarShown] = useState(false);
    const showSidebar = () => {
        setSidebarShown(prev => !prev)
    }

    const handleClick = (ev) => {
        const sameRoute = ev.target.href === window.location.href;
        if (sameRoute) {
            ev.preventDefault();
        }
    }

    const handleScroll = useCallback(() => {
        const currentScrollPos = window.pageYOffset;
        const scrollingDownwards = currentScrollPos > prevScrollPos;
        const scrollingUpwards = currentScrollPos < prevScrollPos;
        const limit = Math.max( 
            document.body.scrollHeight, 
            document.body.offsetHeight, 
            document.documentElement.clientHeight, 
            document.documentElement.scrollHeight, 
            document.documentElement.offsetHeight 
            ) - window.innerHeight
        const overScroll = currentScrollPos + 10 > limit;
        setPrevScrollPos(window.pageYOffset);

        if(
            currentScrollPos > 0 
            && scrollingDownwards
            && window.innerWidth < 767
            && !overScroll
            ){
            setNavTranslate('-100%');
        } 
        else if (
            scrollingUpwards
            && window.innerWidth < 767
            && !overScroll
        ){
            setNavTranslate(0);
        }

    }, [prevScrollPos])
    

    useEffect(() => {
        
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
        
    }, [handleScroll])

    return (
        <nav className='mobile-nav-container' style={{transform: `translateY(${navTranslate})`}}>
            <NavLink to='/' onClick={(ev) => {
                handleClick(ev)
                setSidebarShown(prev => false)
                }}><img src={normalLogo} alt={'Logo Missing'} className='mobile-nav-container__logo' /></NavLink>
            
            <button className={`menu ${sidebarShown ? 'opened' : ''}`} onClick={showSidebar} aria-label="Main Menu">
                <svg width="45" height="75" viewBox="0 0 100 100">
                    <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                </svg>
            </button>
            <div className={`mobile-nav-container__sidebar ${sidebarShown ? "show" : ''}`}>
                <ul>
                    <li><NavLink to='/' 
                    exact
                    activeStyle={{color: '#000000'}}
                    onClick={(ev)=>{
                        handleClick(ev)
                        showSidebar()
                    }}>Home</NavLink></li>
                    <li><NavLink to='/about' 
                    activeStyle={{color: '#000000'}}
                    onClick={(ev)=>{
                        handleClick(ev)
                        showSidebar()
                    }}>About</NavLink></li>
                    <li><NavLink to='/contact' 
                    activeStyle={{color: '#000000'}}
                    onClick={(ev)=>{
                        handleClick(ev)
                        showSidebar()
                    }}>Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default MobileNav;