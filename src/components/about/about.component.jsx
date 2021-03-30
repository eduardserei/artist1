
import { useEffect, useRef, createRef } from 'react';
import "./about.styles.scss";
import john1 from '../../assets/backgrounds/john1.jpeg';
import { gsap, Elastic, Back } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from '../footer/footer.component';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    let backgroundImage = useRef(null);
    let subtitleRef = useRef(null);
    let paragraphRef = useRef(null)
    
    const paragraphText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi autem veritatis optio fugit architecto nam nemo a illo accusamus non ad aspernatur suscipit repudiandae, voluptas maxime alias impedit nostrum sint qui laudantium commodi quae sequi odit.';
    const titleText1 = 'ARTIST';
    const titleText2 = 'NAME';
    const titleTextArray1 = titleText1.split('');
    const titleTextArray2 = titleText2.split('');
    let titleLettersRef1 = useRef(titleTextArray1.map(l => createRef()))
    let titleLettersRef2 = useRef(titleTextArray2.map(l => createRef()))

    
    // let titleRef = useRef(titleText.split('').map(l => createRef()));
    
    useEffect(() => {
        
        // const all = multiple.current.map(el => el.current)
        
        gsap.to(backgroundImage, {
            duration: 3,
            ease: "ease-in",
            filter: "blur(4px)"
        })

        gsap.timeline()
        .from(titleLettersRef1.current, {
            y: -200,
            x: "-75vh",
            duration: 1,
            ease: Elastic.easeOut.config(1.5, 1.5),
            transform: 'scale(4)',
            stagger: {
                each: 0.1,
            },
        })
        .from(titleLettersRef2.current, {
            y: 200,
            x: "75vh",
            duration: 1,
            ease: Elastic.easeOut.config(1.5, 1.5),
            transform: 'scale(4)',
            stagger: {
                each: 0.1,
            },
        })
        .from(subtitleRef.current, {
            duration: 1,
            opacity: 0
        })
        .from(paragraphRef.current, {
            duration: 1,
            opacity: 0,
            x: -150,
            ease: Back.easeOut.config(1.3)
        })
        
    }, [])
    
    return (
        <div className="about-container">
                {/* <img src={arrowDown} alt="scroll-down" className="arrow-down" ref={el => scrollIcon = el} onClick={scrollToBottom}/> */}
                <img src={john1} alt="About Pic" className='about-img' ref={el => backgroundImage = el}/>
                <div className="about-container__info-container"> 
                    <h1 className='about-container__title'>
                        {
                            titleTextArray1.map((letter, index) => {
                                return <span 
                                    key={letter + index}
                                    ref={el => titleLettersRef1.current[index] = el}
                                    className="letter"
                                    >{letter}</span>
                            })
                        }
                        {
                            titleTextArray2.map((letter, index) => {
                                return <span 
                                    key={letter + index}
                                    ref={el => titleLettersRef2.current[index] = el}
                                    className="letter"
                                    >{letter}</span>
                            })
                        }
                    </h1>
                    <h2 className='about-container__subtitle' ref={subtitleRef}>SUBTITLE IF NECESSARY</h2>
                    <p ref={paragraphRef}>{paragraphText}</p>
                </div> 
                <Footer/>
        </div>
    )
}

export default About;
