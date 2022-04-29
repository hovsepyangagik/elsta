import "../../components-styles/buttons-styles/downloadButton.scss"

function DownloadButton() {
    return (
        <div className="downloadButton">
            <a href="../../../images/cover.png" download>Download</a>
        </div>
    )
}

export default DownloadButton;