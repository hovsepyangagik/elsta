import '../components-styles/pricingPlansItem.scss';
import './buttons/DownloadButton';
import PurchaseButton from './buttons/purchaseButton';

function PricingPlansItem(props) {
    return (
        <div className='pricing-plans-item'>
            <div className='price'>
                <p className='price-content'>$  <span className='cost'>{props.cost}</span> <span className='monthly'>/month</span></p>
            </div>
            <div className='pricing-plan-header'>
                <div className='pricing-plan-header-opacity'></div>
                <div className='pricing-plan-header-title-description'>
                    <h5  className='pricing-plan-title'>{props.name}</h5>
                    <p className='pricing-plan-header-description'>{props.description}</p>
                </div>
            </div>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
            </ul>
            <PurchaseButton></PurchaseButton>
        </div>
    )
}
export default PricingPlansItem;