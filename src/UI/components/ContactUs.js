import '../components-styles/contactUs.scss';
function ContactUs() {

    return (
        <section className="contactUs-section">
            <h3>Contact Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit </p>
            <div className='form-container'>
                <form action='#' method="get">
                    <div className='name-email'>
                        <input type="text"  placeholder="Name" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <textarea placeholder="Message....."></textarea>
                    <input type={'submit'} value={'SEND'} className="form-submit-btn"/>
                </form>
            </div>
        </section>
    )
}
export default ContactUs;