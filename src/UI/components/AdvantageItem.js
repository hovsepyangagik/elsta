import '../components-styles/advantageItem.scss';

function AdvantageItem(props) {
    
    return (
        <div className='advantageItem'>
            <div className='advantageItem-imageBox'>
                <img src={props.icon} alt='Mail' className='advantageItem-icon'/>
            </div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default AdvantageItem;