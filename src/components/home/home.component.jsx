import React, {useEffect, useRef} from "react";

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import arrowDown from "../../assets/util-icons/arrow-down-1.png";

import './home.styles.scss';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    let arrowDownEl = useRef(null);

    useEffect(()=>{
        gsap.to(arrowDownEl, {
            scrollTrigger: {
                start: "top 75%",
                end: "bottom bottom",
                duration: 1,
                trigger: arrowDownEl,
                toggleActions: 'play none none reset', // up - normal, down - reverse,
                // scrub: true,
                // markers: true,
                id: "ICON"
            },
            opacity: 0,
        })
    },[])
    
    
    const scrollToBottom = () => {
        window.scroll(0, document.documentElement.scrollHeight)
    }
    
    return (
        <div className="home">
            <img src={arrowDown} alt="scroll-down" className="arrow-down" ref={el => arrowDownEl = el} onClick={scrollToBottom}/>
            <div className="out-now-container">
                <div className="titles">
                    <div className="title">NEW SONG TITLE - <span>Out NOW</span></div>
                    <div className="title">MY NEW SONG</div>
                </div>
                <iframe 
                    src="https://www.youtube.com/embed/adLGHcj_fmA?enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A3000&widgetid=1" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    title="youtube-title"
                ></iframe>
            </div>
        </div>
    )
}

export default Home;