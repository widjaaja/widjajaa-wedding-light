import React, { useState, useEffect, useRef } from 'react';
import supabase from "./supabase";

import Home from './pages/Home/Home';
import Bride from './pages/Bride/Bride';
import Event from './pages/Event/Event';
import Location from './pages/Location/Location';
import Protocol from './pages/Protocol/Protocol';
import Gift from './pages/Gift/Gift';
import Wish from './pages/Wish/Wish';

import CoverPages from "./components/CoverPages/CoverPages";
import NavbarPages from "./components/NavbarPages/NavbarPages";

const nasheed = require("./assets/Audio/nasheed-08.mp3");
const birds = require("./assets/Audio/birds.mp3");

interface AppState {
  activePages: string;
}

const AppRouter = () => {
  const [activePages, setActivePages] = useState<string>("wedding");
  const [isMobileView, setIsMobileView] = useState(false);
  const [isAnimating, setAnimating] = useState(false);
  const bodyRef = useRef<any>(null);
  const audioEl = new Audio(nasheed);
  const audioBirdEl = new Audio(birds);

  const handleSetActivePages = (message: string) => {
    setActivePages(message)
  };
  const handleSetAnimating = () => {
    enterFullscreen();
    setTimeout(() => {
      // audioBirdEl.play();
      // audioEl.play();
      setAnimating(!isAnimating);
    }, 100);
    setTimeout(() => {
      // audioBirdEl.pause();
    }, 15000);
  };

  const enterFullscreen = () => {
    const elem = bodyRef.current;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      elem.webkitRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    const document: any = window.document;
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    }
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
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
    <React.Suspense fallback={<div>Loading...</div>}>
      <div ref={bodyRef} className='mainContainer'>
        <CoverPages name={'name'} onInvitationClick={handleSetAnimating} isAnimate={isAnimating} />
        {isAnimating &&
          <div className='content'>
            <MainComponent activePages={activePages}/>
            <NavbarPages onNavClick={handleSetActivePages} activeNav={activePages}/>
          </div>
        }
      </div>
    </React.Suspense>
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
