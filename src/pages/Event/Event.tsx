import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import classes from "./Event.module.scss";

interface EventProps {
  name: string;
  isAudio: boolean;
  onSetAudio: (item: boolean) => void;
  onSetFullScreen: () => void;
  onNavSwipe: (item: string, pos: string) => void;
}

interface EventState {
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

const WidgetComponent: React.FC<WidgetComponentProps> = ({
  name,
  isAudio,
  onSetAudio,
  onSetFullScreen,
}) => {
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
          <i
            onClick={() => onSetFullScreen()}
            className="fa-solid fa-maximize"
          ></i>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className={classes.item}
        >
          {isAudio ? (
            <i
              onClick={() => onSetAudio(false)}
              className="fa-solid fa-volume"
            ></i>
          ) : (
            <i
              onClick={() => onSetAudio(true)}
              className="fa-solid fa-volume-slash"
            ></i>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Event: React.FC<EventProps> = ({
  name,
  isAudio,
  onSetAudio,
  onSetFullScreen,
  onNavSwipe,
}) => {
  // Component implementation
  const [swipeDirection, setSwipeDirection] = useState<swipeDirectionProps>({
    initialX: 0,
    initialY: 0,
  });

  const handleTouchStart = (e: any) => {
    const touchObj = e.targetTouches[0];
    setSwipeDirection({
      initialX: touchObj.clientX,
      initialY: touchObj.clientY,
    });
  };

  const handleTouchMove = (e: any) => {
    const touchObj = e.targetTouches[0];
    const deltaX = swipeDirection.initialX - touchObj.clientX;
    const deltaY = swipeDirection.initialY - touchObj.clientY;

    setTimeout(() => {
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        // vertical swipe detected
        if (deltaY > 0) {
          onNavSwipe("location", "right");
          // setSwipeDirection('up');
        } else {
          onNavSwipe("brides", "left");
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
      className={classes.EventContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={classes.WidgetContainer}>
        <WidgetComponent
          name={"name"}
          isAudio={isAudio}
          onSetAudio={onSetAudio}
          onSetFullScreen={onSetFullScreen}
        ></WidgetComponent>
        <div className={classes.bgMain}></div>
        <div className={classes.bgBlur}></div>
        <div
          className={classes.populated}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className={classes.widgetWrap}>
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className={classes.imgFlower}
              src="https://invetin.id/wp-content/uploads/2021/03/bouquet.png"
              alt=""
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
                className={classes.left}
              >
                <span>SABTU</span>
              </motion.div>
              <motion.div className={classes.center}>
                <h5>FEB</h5>
                <span>10</span>
              </motion.div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                className={classes.right}
              >
                <span>2024</span>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className={classes.locationContent}
            >
              <span>
                <i className="fa-solid fa-map-location-dot"></i>RUMAH MEMPELAI
                PRIA
              </span>
              <span>
                PERUM BUANA GARDENIA BLOK C3 NO 50, PINANG, KOTA TANGERANG,
                BANTEN{" "}
              </span>

              <div className={classes.eventContent}>
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 2.5 }}
                  className={classes.title}
                >
                  Ngunduh Mantu
                </motion.span>
                <motion.span
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 2, delay: 2.5 }}
                >
                  PUKUL 10.00 - 17.00 WIB
                </motion.span>
              </div>
              {/* <div className={classes.eventContent}>
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
              </div> */}
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 3.5 }}
              className={classes.textContent}
            >
              <span>
                Maha Suci Allah ‘Azza wa Jalla yang menautkan dua hati dalam
                ikatan suci pernikahan. Semoga menjadi langkah awal kami bisa
                berkumpul bersama kaum mukminin di surga kelak. Aamiin.
              </span>
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
};

export default Event;
