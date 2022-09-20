import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ScrollProvider } from './Context/scrollContext';

import {Nav} from "./component/Nav/nav"
import { LandingPage } from './pages/LandingPage/landingPage';
import { LogIn } from './pages/Log-In/logIn';
import { ContactPage } from './pages/ContactPage/contactPage';
import { CompanyPage } from './pages/CompanyPage/companyPage';
import { ProductPage } from './pages/ProductPage/productPage';
import { TechPage } from './pages/TechPage/techPage';
export{Nav,LandingPage,LogIn,ContactPage,CompanyPage,ProductPage,TechPage}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ScrollProvider>
    <App />
    </ScrollProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
