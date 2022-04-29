import "../components-styles/getTheAppSection.scss"
import DownloadButton from "./buttons/DownloadButton";

function GetTheApp() {
    return (
        <section className="getTheApp">
            <div className="getTheApp-container">
                <div className="getTheApp-paragraphs">
                    <h3>Get The App</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
                    <DownloadButton/>
                </div>
                <div className="getTheApp-video">
                    <video  controls muted poster="/Videos/Video.png">
                        <source src="/Videos/move.mp4" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </section>
    )
}
export default GetTheApp;