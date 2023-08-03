import './App.css';
import Header from './Components/Header';
import Banner from './Components/Home/Banner';
// import Features from './Components/Home/Features';
// import Services from './Components/Home/Services';
// import Pricingplan from './Components/Home/Pricingplan'
// import About from './Components/Home/About'
// import Whyapplication from './Components/Home/WhyApplication'
import ContactUs from './Components/Home/ContactUs'

function App() {
  return (
    <div className="App">
        <Header/>  
        <Banner/> 
        {/* <Features/>
        <Services/> 
        <Pricingplan/>
        <Whyapplication/>
        <About/> */}
        <ContactUs/>
    </div>
  );
}

export default App;
