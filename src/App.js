import './App.css';
import Header from './Components/Header';
import Banner from './Components/Home/Banner';
import Features from './Components/Home/Features';
import Services from './Components/Home/Services';
import Applicationlink from './Components/Home/Applicationlink';
import Pricingplan from './Components/Home/Pricingplan'
import About from './Components/Home/About'
import Whyapplication from './Components/Home/WhyApplication'
import ContactUs from './Components/Home/ContactUs'
import Footer from './Components/Footer';
// import TimesheetModal from './Components/Home/TimesheetModal';

function App() {
  return (
        <div className="App">
        <Header/>  
        <Banner/> 
         <Features/>
         <Applicationlink/>
        <Services/> 
        <Pricingplan/>
        <Whyapplication/>
        <About/>
        <ContactUs/>
        <Footer/>
        
     </div>
  );
}


export default App;
