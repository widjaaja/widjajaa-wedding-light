import React, { useState, useEffect} from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Bride from './pages/Bride/Bride';
import Event from './pages/Event/Event';
import Location from './pages/Location/Location';
import Protocol from './pages/Protocol/Protocol';
import Gift from './pages/Gift/Gift';
import Wish from './pages/Wish/Wish';

import CoverPages from "./components/CoverPages/CoverPages";
import NavbarPages from "./components/NavbarPages/NavbarPages";

interface AppState {
  activePages: string;
}

const AppRouter = () => {
  const [activePages, setActivePages] = useState<string>("wedding");
  const [isMobileView, setIsMobileView] = useState(false);
  const [isAnimating, setAnimating] = useState(false);

  const handleSetActivePages = (message: string) => {
    setActivePages(message)
  };

  const handleSetAnimating = () => {
    setAnimating(!isAnimating);
  };

  useEffect(() => {
    // Do something when count changes
    
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1024); // Adjust the breakpoint as per your needs
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='mainContainer'>
      <CoverPages name={'name'} onInvitationClick={handleSetAnimating} isAnimate={isAnimating} />
      {isAnimating &&
        <div className='content'>
          <MainComponent activePages={activePages}/>
          <NavbarPages onNavClick={handleSetActivePages} activeNav={activePages}/>
        </div>
      }


    </div>
  );
};

const MainComponent: React.FC<AppState> = ({ activePages }) => {
  switch(activePages) {

    case "wedding":   return <Home name={'name'}/>;
    case "brides":   return <Bride name={'name'}/>;
    case "event": return <Event name={'name'}/>;
    case "location":  return <Location name={'name'}/>;
    case "protocol":  return <Protocol name={'name'}/>;
    case "gifts":  return <Gift name={'name'}/>;
    case "wish":  return <Wish name={'name'}/>;

    default:      return <Home name={'name'}/>;
  }
}

export default AppRouter;
