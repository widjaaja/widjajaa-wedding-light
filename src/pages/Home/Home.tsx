import React, { useEffect  } from 'react';
import { motion } from "framer-motion";

import classes from './Home.module.scss';

interface HomeProps {
  name: string;
  isAudio: boolean;
  onSetAudio: (item: boolean) => void;
  onSetFullScreen: () => void;
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

const Home: React.FC<HomeProps> = ({ name, isAudio, onSetAudio, onSetFullScreen }) => {
  // Component implementation

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
        <div className={classes.populated}>
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
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 2 }}
            >
              03 . 02 . 2024
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home