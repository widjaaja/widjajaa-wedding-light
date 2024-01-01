import React, { useEffect  } from 'react';
import { motion } from "framer-motion";

import classes from './Event.module.scss';

interface EventProps {
  name: string;
  isAudio: boolean;
  onSetAudio: (item: boolean) => void;
}

interface EventState {
  name: string;
}

interface WidgetComponentProps {
  name: string;
  isAudio: boolean;
  onSetAudio: (item: boolean) => void;
}

const WidgetComponent: React.FC<WidgetComponentProps> = ({ name, isAudio, onSetAudio }) => {
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
          <i className="fa-solid fa-maximize"></i>
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

const Event: React.FC<EventProps> = ({ name, isAudio, onSetAudio }) => {
  // Component implementation

  useEffect(() => {
    // Do something when count changes
  }, []);

  return (
    <motion.div  
      className={classes.EventContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={classes.WidgetContainer}>
        <WidgetComponent name={'name'} isAudio={isAudio} onSetAudio={onSetAudio}></WidgetComponent>
        <div className={classes.bgMain}></div>
        <div className={classes.bgBlur}></div>
        <div className={classes.populated}>
          <div className={classes.widgetWrap}>
          <motion.img 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className={classes.imgFlower} 
            src="https://invetin.id/wp-content/uploads/2021/03/bouquet.png" alt="" 
          />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className={classes.dateContent}
            >
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                className={classes.left}>
                <span>SABTU</span>
              </motion.div>
              <motion.div className={classes.center}>
                <h5>FEB</h5>
                <span>03</span>
              </motion.div>
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                className={classes.right}>
                <span>2024</span>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className={classes.locationContent}>
              <span><i className="fa-solid fa-map-location-dot"></i>VILLA SADDAK BANDUNG</span>
              <span>JL. BUKIT PAKAR TIMUR No.76, KABUPATEN BANDUNG </span>

              <div className={classes.eventContent}>
                <motion.span 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 2.5 }}
                  className={classes.title}
                >
                  Akad Nikah
                </motion.span>
                <motion.span
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 2.5 }}
                >
                  PUKUL 08.30 - 10.00 WIB
                </motion.span>
              </div>
              <div className={classes.eventContent}>
                <motion.span 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 3 }}
                  className={classes.title}
                >
                  Resepsi
                </motion.span>
                <motion.span
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 3 }}
                >
                  PUKUL 11.00 – 14.00 WIB
                </motion.span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 3.5 }}
              className={classes.textContent}
            >
              <span>Maha Suci Allah ‘Azza wa Jalla yang menautkan dua hati dalam ikatan suci pernikahan. Semoga menjadi langkah awal kami bisa berkumpul bersama kaum mukminin di surga kelak. Aamiin.</span>
            </motion.div>
            {/* <div className={classes.countdownContent}>
              <span className={classes.title}>Hitung Mundur Acara</span>
              <div className={classes.timeContent}>
                <div className={classes.timeItem}>
                  <span className={classes.time}>00</span>
                  <span className={classes.unit}>Hari</span>
                </div>
                <div className={classes.timeItem}>
                  <span className={classes.time}>00</span>
                  <span className={classes.unit}>Jam</span>
                </div>
                <div className={classes.timeItem}>
                  <span className={classes.time}>00</span>
                  <span className={classes.unit}>Menit</span>
                </div>
                <div className={classes.timeItem}>
                  <span className={classes.time}>00</span>
                  <span className={classes.unit}>Detik</span>
                </div>
              </div>

            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Event