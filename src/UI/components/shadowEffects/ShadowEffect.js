import '../../components-styles/shadowEffects/shadowEffect.scss';
import shadowEffect from '../../../images/shadow.png';

function ShadowEffect() {
    return (
        <div className='shadow-line'>
            {/* This is a temporary solution */}
            <img src={shadowEffect} alt="Box Shadow" />
            <img src={shadowEffect} alt="Box Shadow"/>
        </div>
    )
}

export default ShadowEffect