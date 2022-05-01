import "../components-styles/mainSection.scss"
import DownloadButton from "./buttons/DownloadButton";
import iphone5s from '../../images/iPhone_5S_white.png';

function MainSection() {
    return (
        <section className="main-section">
            <div className="main-section-opacity"></div>
            <div className="container"> 
                <div className="logo-box">
                    <p className="name-in-logo">elsta</p>
                </div>   
                <div className="main-section-content">
                    <h1>Awesome Design</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labornisi ut aliquip ex ea commodo consequa</p>
                    <DownloadButton></DownloadButton>
                </div>
                <img className="iphone_5s" src={iphone5s} alt="iPhone 5s" title="iPhone 5S" />
            </div>
            
        </section>
    )
        
}
export default MainSection;