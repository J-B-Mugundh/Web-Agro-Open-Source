import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Crop from './components/models/CropRecommendation';
import Home from './pages/Home';
import About from './pages/About';
import Disease from './components/Disease';
import Fertilizer from './components/models/Fertilizer';
import SoilQuality from './components/models/SoilQuality';
import Footer from './components/Footer';
import GoTop from './components/GoTop';
import NotFound from './NotFound';
import Prices from './components/models/Prices';
import Reports from './components/models/Reports';
import AboutUs from "./components/AboutUs";
import UseScrollToTop from './components/UseScrollToTop';
import Article from './pages/Article';
import TaskReminder from './components/tools/TaskReminder';
import ChatBot from './pages/ChatBot';
import CropRotationRecommendation from './components/models/CropRotationRecommendation';
import DiseaseRecognition from './pages/Disease/DiseaseRecognition';
import SugarcaneRecognition from './pages/Disease/SugarcaneRecognition';
import PaddyRecognition from './pages/Disease/PaddyRecognition';
import Preloader from "./components/PreLoader";
import ProgressScrollDown from "./components/ProgressScrollDown";
import React, { useState, useEffect } from "react";
import Climate from './components/help/Climate';
import Products from "./pages/Products";
import WhyAI from './pages/WhyAI'; // Import the WhyAI component
import TermsAndConditions from './components/TermsAndConditions';
import CookiePolicy from './components/CookiePolicy';
import PlantTaskReminder from './components/tools/PlantTaskReminder';
import MushroomEdibility from './components/models/Mushroom';
import PrivacyPolicy from './components/PrivacyPolicy';
import Licensing from './components/Licensing';
import Feedback from './components/Feedback';
import SoilTestingCentres from './components/SoilTestingCenters';
import WaterManagement from './components/models/WaterManagement';
import BestPractices from './pages/BestPractices';



const MainContent = () => {
  UseScrollToTop();
  const location = useLocation(); // Get the current route
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 5000); // Preloader visible for 5 seconds
    return () => clearTimeout(timer);
  }, []);

  // Check if the current path is the one you want to hide the Navbar for
  const normalizePath = (path) => path.toLowerCase().replace(/^\/+|\/+$/g, '');
  const hideNavbarRoutes = ['navigateproducts', '404'];
  const agroShopRoute = 'agroshop';
  const normalizedPath = normalizePath(location.pathname);
  const hideNavbar = hideNavbarRoutes.includes(normalizedPath) || normalizedPath.startsWith(agroShopRoute);
  const checkShop = normalizedPath.startsWith(agroShopRoute);
  return (
    <>
      {isPreloaderVisible ? (
        <Preloader />
      ) : (
        <div>
         
            <GoTop />
            <ProgressScrollDown />
            <div>
              {!hideNavbar ? <Navbar /> : <ShopNavbar />} {/* Conditional rendering for Navbar */}
              <Routes>
                <Route path="/thank-you" element={<Feedback />} /> {/* Thank You Page Route */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/licensing" element={<Licensing />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/crop" element={<Crop />} />
                <Route path="/water-management" element={<WaterManagement />} />
                <Route path="/fertilizer" element={<Fertilizer />} />
                <Route path="/soil" element={<SoilQuality />} />
                <Route path="/disease" element={<Disease />} />
                <Route path="/crop_recommendation" element={<CropRotationRecommendation />} />
              

                <Route path="/prices" element={<Prices />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/article" element={<Article />} />
                <Route path="/soiltestingcentres" element={<SoilTestingCentres />} />

                <Route path="/TaskReminder" element={<TaskReminder />} />
                
                <Route path="/SugarcaneRecognition" element={<SugarcaneRecognition />} />
                <Route path="/PaddyRecognition" element={<PaddyRecognition />} />
                <Route path="/DiseaseRecognition" element={<DiseaseRecognition />} />
                <Route path="/PlantTaskReminder" element={<PlantTaskReminder />} />
                <Route path="BestPractices" element={<BestPractices/>}/>


                <Route path="/Climate" element={<Climate />} />

                <Route path="/MushroomEdibility" element={<MushroomEdibility />} />
                <Route path="/products" element={<Products />} />
                {/* <Route path="/Auth-page" element={<AuthPage />} /> */}
                <Route path="/whyai" element={<WhyAI />} />
                {/* <Route path="/login" element={<LoginPage />} /> */}
                {/* <Route path="/profile" element={<Profile />} /> */}
                {/* <Route path="/signup" element={<SignUpPage />} />
                <Route path="/verify-email" element={<AccountVerificationPage />} />
                <Route path="/verification" element={<ResendVerificationPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
                {/* <Route path="/news" element={<NewsForum />} /> */}
                {/* <Route path="/ee-shops" element={<ElectricalElectronicsShops />} />
                <Route path="/BestPractices" element={<BestPractices />} />
                <Route path="/DiscussionPage" element={<DiscussionPage />} /> */}
               

                <Route path="*" element={<NotFound />} />
              
               
               


  
              </Routes>
              {checkShop ? <ShopFooter /> : <Footer />}
            </div>
        
        </div>
      )}
    </>
  );
};

export default MainContent;
