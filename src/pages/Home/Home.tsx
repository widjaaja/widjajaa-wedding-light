import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

import classes from './Home.module.scss';

interface HomeProps {
  name: string;
  isAudio: boolean;
  onSetAudio: (item: boolean) => void;
  onSetFullScreen: () => void;
  onNavSwipe: (item: string, pos: string) => void;
}

interface HomeState {
  name: string;
}

interface WidgetComponentProps {
  name: string;
  isAudio: boolean;
  onSetAudio: (item: boolean) => void;
  onSetFullScreen: () => void;
}

interface swipeDirectionProps {
  initialX: number;
  initialY: number;
}

const WidgetComponent: React.FC<WidgetComponentProps> = ({ name, isAudio, onSetAudio, onSetFullScreen }) => {
  return (
    <motion.div 
      className={classes.WidgetComponent} 
      initial={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <div className={classes.listWidget}>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className={classes.item}
        >
          <i onClick={() => onSetFullScreen()} className="fa-solid fa-maximize"></i>
        </motion.div >
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className={classes.item}
        >
          {isAudio ? 
            <i onClick={() => onSetAudio(false)} className="fa-solid fa-volume"></i>
            :
            <i onClick={() => onSetAudio(true)}  className="fa-solid fa-volume-slash"></i>
          }
          
        </motion.div>
      </div>
    </motion.div>
  )
}

const Home: React.FC<HomeProps> = ({ name, isAudio, onSetAudio, onSetFullScreen, onNavSwipe }) => {
  // Component implementation
  const [swipeDirection, setSwipeDirection] = useState<swipeDirectionProps>({
    initialX: 0,
    initialY: 0
  });

  const handleTouchStart = (e: any) => {
    const touchObj = e.targetTouches[0];
    setSwipeDirection({ initialX: touchObj.clientX, initialY: touchObj.clientY });
 };

 const handleTouchMove = (e: any) => {
    const touchObj = e.targetTouches[0];
    const deltaX = swipeDirection.initialX - touchObj.clientX;
    const deltaY = swipeDirection.initialY - touchObj.clientY;

    setTimeout(() => {
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        // vertical swipe detected
        if (deltaY > 0) {
          onNavSwipe('brides', 'left')
          // setSwipeDirection('up');
        } else {
          onNavSwipe('wedding', 'left')
          // setSwipeDirection('down');
        }
      }       
    }, 500);

 };

 const handleTouchEnd = () => {
    setSwipeDirection({ initialX: 0, initialY: 0 });
 };
  useEffect(() => {
    // Do something when count changes
  }, []);

  return (
    <motion.div 
      className={classes.HomeContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={classes.WidgetContainer}>
        <WidgetComponent name={'name'} isAudio={isAudio} onSetAudio={onSetAudio} onSetFullScreen={onSetFullScreen}></WidgetComponent>
        <div className={classes.bgMain}></div>
        <div className={classes.bgBlur}></div>
        <div className="bird-container bird-container--one">
          <div className="bird bird--one"></div>
        </div>
        
        <div className="bird-container bird-container--two">
          <div className="bird bird--two"></div>
        </div>

        <div className="bird-container bird-container--three">
          <div className="bird bird--three"></div>
        </div>
        
        <div className="bird-container bird-container--four">
          <div className="bird bird--four"></div>
        </div>
        <div 
          className={classes.populated}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={classes.widgetWrap}>
            <motion.h4
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 2 }}
            >
              THE WEDDING OF
            </motion.h4>
            <motion.span 
              className={classes.male}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              Magfira
            </motion.span>
            <motion.span 
              className={classes.sym}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              &
            </motion.span>
            <motion.span 
              className={classes.female}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              Adjie
            </motion.span>
            <motion.div
              className={classes.date}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 2 }}
            >
              <p className={classes.title}>SAVE THE DATE</p>
              <p className={classes.desc}>03 . 02 . 2024</p>
            </motion.div>

          </div>
          <motion.div 
            className={classes.swipeContainer}
            initial={{ y: 50, opacity: 0, transform: "translateX(-50%)" }}
            animate={{ y: 0, opacity: 1, transform: "translateX(-50%)" }}
            transition={{ duration: 2, delay: 3 }}
          >
            <div className={classes.swipeContent}>
              <motion.i 
                animate={{ y: [-5, 5] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                className="fa-light fa-hand-pointer"
              ></motion.i>
              <span>SWIPE UP</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home