import "./contact.styles.scss";

const hidePlaceholder = (placeholder) => {
    console.log(placeholder);
}

const Contact = ({ sidebarShown }) => (
    <div className="contact-component-container">

        <div className="feature-layout">
            <h1>Contact Artistu Vietii</h1>

            <a href="*">
                <strong>
                    ceva@artistuvietiimanagement.com
                </strong>
            </a>
        </div>

        <div className={`contact-container ${sidebarShown ? 'sidebar-shown' : ''}`}>
            <form action="post">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"
                />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" 
                />
                <label htmlFor="name">Message</label>
                <textarea name="message" id="message" cols="10" rows="5"        
                ></textarea>
                <a href="/">
                    <button>Send</button>
                </a>
                
            </form>
        </div>
    </div>
)

export default Contact;
