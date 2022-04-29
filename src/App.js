import './App.css';
import Advantages from './UI/components/Advantages';
import ContactUs from './UI/components/ContactUs';
import GetTheApp from './UI/components/GetTheApp';
import MainSection from './UI/components/MainSection';
import PricingPlans from './UI/components/PricingPlans';
import ShadowEffect from './UI/components/shadowEffects/ShadowEffect';
import Testimonials from './UI/components/Testimonials';
import WelcomeSection from './UI/components/WelcomeSection';


function App() {
  return (
    <div className="App">
      <MainSection />
      <WelcomeSection />
      <GetTheApp />
      <Advantages />
      <ShadowEffect />
      <Testimonials />
      <ShadowEffect />
      <PricingPlans />
      <ContactUs />
    </div>
  );
}

export default App;
