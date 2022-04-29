import "../components-styles/advantages.scss"
import AdvantageItem from "./AdvantageItem"

import iconMail from '../../images/icons/mail.png';
import iconKey from '../../images/icons/key.png';
import iconSettings from '../../images/icons/settings.png';
import iconUser from '../../images/icons/user.png';

function Advantages() {
    const advantages = [
        { icon: iconMail, title: 'Great concept', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit' },
        { icon: iconUser, title: 'User Friendly', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
        { icon: iconSettings, title: 'Easy to Costmize', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'},
        { icon: iconKey, title: 'Secure Page', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}
    ]

    return (
        <section className="advantages">
            <div className="advantages-container">
                <AdvantageItem icon={advantages[0].icon} title={advantages[0].title} description={advantages[0].description}/>
                <AdvantageItem icon={advantages[1].icon} title={advantages[1].title} description={advantages[1].description}/>
                <AdvantageItem icon={advantages[2].icon} title={advantages[2].title} description={advantages[2].description}/>
                <AdvantageItem icon={advantages[3].icon} title={advantages[3].title} description={advantages[3].description}/>       
            </div>
        </section>
    )
}

export default Advantages