
import { useEffect, useRef } from 'react';
import "./about.styles.scss";
import john1 from '../../assets/backgrounds/john1.jpeg';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import arrowDown from "../../assets/util-icons/arrow-down-1.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    let infoContainer = useRef(null);
    let backgroundImage = useRef(null);
    let scrollIcon = useRef(null);
    let title = useRef(null);

    const scrollToBottom = () => {title.scrollIntoView()}
    
    useEffect(() => {

        gsap.from(backgroundImage, {
            scrollTrigger: {
                start: "top top",
                end: "bottom bottom",
                duration: 1,
                trigger: infoContainer,
                toggleActions: 'play none none reverse', // up - normal, down - reverse,
                scrub: true,
                // markers: true
            },
            filter: "blur(0px)"
        })

        gsap.from(infoContainer, {
            scrollTrigger: {
                start: "top top",
                end: "bottom bottom",
                duration: 1,
                trigger: infoContainer,
                toggleActions: 'play none none reverse', // up - normal, down - reverse,
                scrub: true,
                // markers: true,
                id: "CONTAINER"
            },        
            backgroundColor: 'rgba(0, 0, 0, 0)',
            opacity: 0,
        })

        gsap.to(scrollIcon, {
            scrollTrigger: {
                start: "top top",
                end: "bottom bottom",
                duration: 1,
                trigger: infoContainer,
                toggleActions: 'play none none reset', // up - normal, down - reverse,
                // scrub: true,
                // markers: true,
                id: "ICON"
            },
            opacity: 0,
        })

        
    }, [])
    
    return (
        <div className="about-container">
                <img src={john1} alt="About Pic" className='about-img' ref={el => backgroundImage = el}/>
                <img src={arrowDown} alt="scroll-down" className="arrow-down" ref={el => scrollIcon = el} onClick={scrollToBottom}/>
                <div className="about-container__info-container" ref={el => infoContainer = el} id="info">
                    <h1 className='about-container__title' ref={el => title = el} >ARTIST NAME</h1>
                    <h2 className='about-container__subtitle'>SUBTITLE IF NECESSARY</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi autem veritatis optio fugit architecto nam nemo a illo accusamus non ad aspernatur suscipit repudiandae, voluptas maxime alias impedit nostrum sint qui laudantium commodi quae sequi odit. 
                        Ab nobis dolore saepe nam perspiciatis totam iusto, ullam rem cupiditate fuga corrupti, debitis possimus magni ipsa dolor, repudiandae sunt eum et. Neque voluptatem, vitae dolores consequatur nemo enim impedit molestias, cumque sunt incidunt quo autem dolor nisi repellat porro voluptatibus, sapiente numquam! Quos, dolore. Accusantium provident, suscipit voluptates ratione sunt corporis consequuntur dolor accusamus aperiam minima nisi quae doloribus tenetur. Nisi, harum.</p>
                </div>
        </div>
    )
}

export default About;
