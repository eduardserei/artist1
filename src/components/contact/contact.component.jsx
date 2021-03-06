import "./contact.styles.scss";

import studio6 from '../../assets/studio6.jpeg';

const Contact = ({ sidebarShown }) => (
    <div className="contact-component-container">

        <img src={studio6} alt="Studio Pic"/>

        <div className="contact-container">
        
            <div className="feature-layout">
                <h1>Artistu Vietii</h1>

                <a href="*">
                    <strong>
                        management@artistuvietii.com
                    </strong>
                </a>
            </div>

            <div className='contact-form-container'>
                <form action="post" className='contact-form'>
                    <div className="form-item">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="name">Message</label>
                        <textarea name="message" id="message" cols="10" rows="5"></textarea>
                    </div>
                    <a href="/">
                        <button className='submit-btn'>Send</button>
                    </a>
                    
                </form>
            </div>

        </div>
    </div>
)

export default Contact;
