import {LandingPage ,LogIn , ContactPage,CompanyPage,ProductPage,TechPage} from './index';
import { useScroll } from './Context/scrollContext';
import './App.css';

function App() {
  const navBgColor = "#67E2EA"
  const {setBgColor} = useScroll

  const scrollHandler= () =>
  {
    if (window.scrollY > 1)
      setBgColor(navBgColor)
  }


 
  return (
    <div onScroll={scrollHandler} className="App">
      <LandingPage />
      {/* <LogIn /> */}
      {/* <ContactPage /> */}
      {/* <CompanyPage /> */}
      {/* <ProductPage /> */}
      {/* <TechPage /> */}
    </div>
  );
}

export default App;
