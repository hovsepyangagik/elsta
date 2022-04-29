import '../../components-styles/shadowEffects/shadowEffect.scss';
import shadowEffect from '../../../images/shadow.png';

function ShadowEffect() {
    return (
        <div className='shadow-line'>
            <img src={shadowEffect} alt="Box Shadow"/>
            <img src={shadowEffect} alt="Box Shadow"/>
        </div>
    )
}

export default ShadowEffect