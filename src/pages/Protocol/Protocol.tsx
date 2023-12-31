import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";

import classes from './Protocol.module.scss';

interface ProtocolProps {
  name: string;
  isAudio: boolean;
  onSetAudio: (item: boolean) => void;
  onSetFullScreen: () => void;
  onNavSwipe: (item: string, pos: string) => void;
}

interface ProtocolState {
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

const Protocol: React.FC<ProtocolProps> = ({ name, isAudio, onSetAudio, onSetFullScreen, onNavSwipe }) => {
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
          onNavSwipe('gifts', 'right')
          // setSwipeDirection('up');
        } else {
          onNavSwipe('location', 'left')
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
      className={classes.ProtocolContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <WidgetComponent name={'name'} isAudio={isAudio} onSetAudio={onSetAudio} onSetFullScreen={onSetFullScreen}></WidgetComponent>
      <div className={classes.bgMain}></div>
      <div className={classes.bgBlur}></div>
      <div 
        className={classes.populated}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={classes.widgetWrap}>
          <div className={classes.protocolContent}>
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              Protokol Kesehatan
            </motion.h3>
            <motion.span 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className={classes.desc}
            >
              Mengingat kondisi pasca pandemi saat ini, kami menghimbau Bapak/Ibu/Saudara/i tamu undangan agar tetap memperhatikan protokol kesehatan dalam rangka upaya pencegahan penyebaran virus Covid-19.
            </motion.span>
            <div className={classes.listItem}>
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                className={classes.item}
              >
                <div className={classes.thumbnail}>
                  <i className="fa-solid fa-face-mask"></i>
                </div>
                <span>Gunakan Masker</span>
              </motion.div>
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 2 }}
                className={classes.item}
              >
                <div className={classes.thumbnail}>
                  <i className="fa-solid fa-temperature-list"></i>
                </div>
                <span>Cek Temperatur</span>
              </motion.div>
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 2.5 }}
                className={classes.item}
              >
                <div className={classes.thumbnail}>
                  <i className="fa-duotone fa-hands-bubbles"></i>
                </div>
                <span>Mencuci Tangan</span>
              </motion.div>
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 3 }}
                className={classes.item}
              >
                <div className={classes.thumbnail}>
                  <i className="fa-regular fa-people-arrows"></i>
                </div>
                <span>Jaga Jarak</span>
              </motion.div>
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 3.5 }}
                className={classes.item}
              >
                <div className={classes.thumbnail}>
                  <i className="fa-regular fa-handshake-slash"></i>
                </div>
                <span>Tidak Bersalaman</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div> 
    </motion.div>
  );
}

export default Protocol