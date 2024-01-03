import React, { useEffect, useState } from 'react';
import { AnimatePresence , motion } from "framer-motion"
import supabase from "../../supabase";

import classes from './CoverPages.module.scss';

import CoverParticles from "../CoverParticles/CoverParticles";

interface CoverPagesProps {
  name: string;
  onInvitationClick: () => void;
  isAnimate: boolean;
}

interface CoverPagesDeviceProps {
  name: string;
  onInvitationClick: () => void;
  isAnimate: boolean;
  guest: string;
}

const CoverPages: React.FC<CoverPagesProps> = ({ name, isAnimate, onInvitationClick }) => {
  // Component implementation
  const [isMobileView, setIsMobileView] = useState(false);
  const [guestData, setGuestData] = useState('Tamu Undangan');
  let search = window.location.search;
  let params = new URLSearchParams(search);

  const getGuestInvitation = async () => { 
    const { data } = await supabase.from("guests").select().eq('slug', params.get('to'));
    console.log(data);
    
    if (Array.isArray(data) && data.length > 0) {
      setGuestData(data[0].name)
    }
  }

  const asideAttr = isMobileView && {
    initial: { display: 'flex', },
    animate: { display: !isAnimate ? "flex" : "none",},
    transition: { duration: 1, delay: 3 },
  };

  useEffect(() => {
    // Do something when count changes
    getGuestInvitation()
  }, []);

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
    <motion.aside {...asideAttr}>
      {!isMobileView ?
        <CoverPagesDesktop 
          name={'desktop'} 
          isAnimate={isAnimate} 
          onInvitationClick={onInvitationClick} 
          guest={guestData}
        />
        :
        <CoverPagesMobile 
          name={'mobile'} 
          isAnimate={isAnimate} 
          onInvitationClick={onInvitationClick} 
          guest={guestData}
        />
      }

    </motion.aside>

  );
}


const CoverPagesDesktop: React.FC<CoverPagesDeviceProps> = ({ name, isAnimate, onInvitationClick, guest }) => {

  return (
    <motion.div 
      className={classes.CoverPagesContainer} 
      initial={{ width: "calc(100% + 480px)", opacity: 1 }}
      animate={{ width: !isAnimate ? "calc(100% + 480px)" : "100%", opacity: 1, display: 'flex' }}
      transition={{ duration: 2, delay: 1 }}
    >
      <CoverParticles name={'polygon'}>               
      </CoverParticles>
    
      <div className={classes.widgetWrap}>
        <h3>You Are Invited!</h3>
        <span className={classes.description}>Bapak/Ibu/Saudara/i</span>
        <span className={classes.guest}>{guest}</span>
        <div className={classes.buttonContent}>
          <AnimatePresence mode='sync'>
            {!isAnimate && 
              <motion.button 
                onClick={onInvitationClick} 
                className={classes.btnExpand}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ width: '60px', opacity: 0 }}
                transition={{ type: "spring", duration: 3 }}
              >
                <i className="fa-duotone fa-envelope"></i>
                <motion.span exit={{ display: "none" }}>Buka Undangan</motion.span>
              </motion.button>
            }
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

const CoverPagesMobile: React.FC<CoverPagesDeviceProps> = ({ name, isAnimate, onInvitationClick, guest }) => {
  return (
    <motion.div 
      className={classes.CoverPagesContainerMob}
      initial={{ transform: 'translateY(0)', opacity: 1 }}
      animate={{ transform: !isAnimate ? 'translateY(0)' : 'translateY(-100vh)', opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <CoverParticles name={'background'}>              
      </CoverParticles>
      <div className={classes.widgetWrap}>
        <h3>You Are Invited!</h3>
        <span className={classes.description}>Bapak/Ibu/Saudara/i</span>
        <span className={classes.guest}>{guest}</span>
        <AnimatePresence mode='sync'>
          {!isAnimate && 
            <motion.button 
              onClick={onInvitationClick} 
              className={classes.btnExpand}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ width: '60px', opacity: 0 }}
              transition={{ type: "spring", duration: 3 }}
            >
              <i className="fa-duotone fa-envelope"></i>
              <motion.span exit={{ display: "none" }}>Buka Undangan</motion.span>
            </motion.button>
          }
        </AnimatePresence>
      </div>
      
    </motion.div>
  );
}

export default CoverPages