import "./footer.styles.scss";

import instagram from '../../assets/social-icons/white/instagram512px.png'
import facebook from '../../assets/social-icons/white/facebook512px.png'
import linkedin from '../../assets/social-icons/white/linkedin512px.png'
import youtube from '../../assets/social-icons/white/youtube512px.png'

const Footer = () => (
    <footer>
        <div className="footer-container">
            <div className="brand">
                Daniel Jordan <span className="trademark">&trade;</span>
            </div>
            <div className="social-icons-container">
                <a href="/contact"><img src={facebook} alt="facebook" className="social-icon"/></a>
                <a href="/contact"><img src={instagram} alt="instagram" className="social-icon"/></a>
                <a href="/contact"><img src={linkedin} alt="twitter" className="social-icon"/></a>
                <a href="/contact"><img src={youtube} alt="youtube" className="social-icon"/></a>
            </div>
            <div className="phone">
                <a href="tel:+40-753-565-454" style={{color: "white"}}>
                    <span className="phone-icon">&#9742;</span>
                    +40-753-565-454 
                </a>
            </div>
        </div>
    </footer>
)

export default Footer;
