import React, { useEffect  } from 'react';
import { motion } from "framer-motion";

import classes from './Event.module.scss';

interface EventProps {
  name: string;
}

interface EventState {
  name: string;
}

const Event: React.FC<EventProps> = ({ name }) => {
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
        <div className={classes.bgMain}></div>
        <div className={classes.bgBlur}></div>
        <div className={classes.populated}>
          <div className={classes.widgetWrap}>
            <img className={classes.imgFlower} src="https://invetin.id/wp-content/uploads/2021/03/bouquet.png" alt="" />
            <div className={classes.dateContent}>
              <div className={classes.left}>
                <span>SABTU</span>
              </div>
              <div className={classes.center}>
                <h5>NOV</h5>
                <span>13</span>
              </div>
              <div className={classes.right}>
                <span>2021</span>
              </div>
            </div>
            <div className={classes.locationContent}>
              <span><i className="fa-solid fa-map-location-dot"></i>PURI AGUNG LANTAI 4</span>
              <span>GRAND PALACE HOTEL MAKASSAR</span>

              <div className={classes.eventContent}>
                <span className={classes.title}>Akad Nikah</span>
                <span>PUKUL 10.00 WITA</span>
              </div>
              <div className={classes.eventContent}>
                <span className={classes.title}>Resepsi</span>
                <span>PUKUL 11.00 – 14.00 WITA</span>
              </div>
            </div>
            <div className={classes.textContent}>
              <span>Maha Suci Allah ‘Azza wa Jalla yang menautkan dua hati dalam ikatan suci pernikahan. Semoga menjadi langkah awal kami bisa berkumpul bersama kaum mukminin di syurga kelak. Aamiin..</span>
            </div>
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