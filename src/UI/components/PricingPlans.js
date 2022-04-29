import '../components-styles/pricingPlans.scss';
import PricingPlansItem from './PricingPlansItem';

function PricingPlans() {
    const pricingPlans = [
        {cost:'25', name: 'Basic', description: 'Description goes here'},
        {cost:'50', name: 'Standard', description: 'Description goes here'},
        {cost:'75', name: 'Deluxe', description: 'Description goes here'},
        {cost:'99', name: 'Deluxe', description: 'Description goes here'}
    ]
    return (
        <section className='pricing-plans'>
            <h3>Pricing Plans</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div className='pricing-plans-container'>
                <PricingPlansItem cost={pricingPlans[0].cost} name={pricingPlans[0].name} description={pricingPlans[0].description}/>
                <PricingPlansItem cost={pricingPlans[1].cost} name={pricingPlans[1].name} description={pricingPlans[1].description}/>
                <PricingPlansItem cost={pricingPlans[2].cost} name={pricingPlans[2].name} description={pricingPlans[2].description}/>
                <PricingPlansItem cost={pricingPlans[3].cost} name={pricingPlans[3].name} description={pricingPlans[3].description}/>
            </div>
        </section>
    )    
}
export default PricingPlans;