import '../components-styles/footer.scss';
import facebook_Icon from '../../images/footer-icons/facebook.png';
import twitter_Icon from '../../images/footer-icons/twitter.png';
import googlePlus_Icon from '../../images/footer-icons/google+.png';

function Footer() {
    return (
        <footer>
            <div className='footer-opacity'>
                
            </div>
            <div className='container'>
                <div className='footer-left-part'>
                    <div className='footer-logo-box'>
                        <p className='name-in-logo'>elsta</p>
                        <p className='footer-all-rights-reserved'>All Rights Reserved © 2014</p>
                    </div>
                </div>
                <div className='footer-middle-part'>
                    <p>Lorem ipsum</p>
                </div>
                <div className='footer-right-part'>
                    <a href='https://facebook.com/'>
                        <img src={facebook_Icon} className='footer-icons' alt='Facebook icon'/>
                    </a>
                    <a href='https://twitter.com/'>
                        <img src={twitter_Icon} className='footer-icons' alt='Twitter icon'/>
                    </a>
                    <a href='https://plus.google.com/'>
                        <img src={googlePlus_Icon} className='footer-icons' alt='Google+ icon'/>
                    </a>
                </div>        
            </div>
        </footer>
    )
}

export default Footer;