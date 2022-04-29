import '../components-styles/testimonials.scss';
import testimonialImg from '../../images/testimonial.png';
import brackets from '../../images/brackets.png'


function Testimonials() {
    return (
        <section className='testimonials'>
            <img src={testimonialImg} alt="John Smith, CEO"/>
            <p className='testimonial-name'>John Smith, CEO</p>
            <div className='testimonial-paragraph-box'>
                <img src={brackets} className="brackets" alt='testimonial brackets'/>
                <p className='testimonial-paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa
                </p>
                <img src={brackets} className="brackets" alt='testimonial brackets'/>
            </div>
        </section>
    )
}
export default Testimonials