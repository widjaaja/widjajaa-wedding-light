import React, { useEffect, useState } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { motion } from "framer-motion";

import classes from "./Location.module.scss";

interface LocationProps {
  name: string;
  isAudio: boolean;
  onSetAudio: (item: boolean) => void;
  onSetFullScreen: () => void;
  onNavSwipe: (item: string, pos: string) => void;
}

interface LocationState {
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

const Location: React.FC<LocationProps> = ({
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
          onNavSwipe("protocol", "right");
          // setSwipeDirection('up');
        } else {
          onNavSwipe("event", "left");
          // setSwipeDirection('down');
        }
      }
    }, 500);
  };

  const handleTouchEnd = () => {
    setSwipeDirection({ initialX: 0, initialY: 0 });
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAnEMJbJHhbSYVLkk6nBweHMgvMjukihGA",
  });
  const center = { lat: -6.2159841, lng: 106.6823839 };
  const customMarker = {
    path: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM276.8 107c14.7 14.7 14.7 38.6 0 53.3l-14.9 14.9L208.6 122 223.5 107c14.7-14.7 38.6-14.7 53.3 0zM114.1 216.5L186 144.6l53.3 53.3-71.9 71.9c-4.1 4.1-9.2 7-14.9 8.4l-36.6 9.2c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l9.2-36.7c1.4-5.6 4.3-10.8 8.4-14.9z",
    fillColor: "#957443",
    fillOpacity: 2,
    rotation: 0,
    scale: 0.1,
  };

  useEffect(() => {
    // Do something when count changes
  }, []);

  return (
    <motion.div
      className={classes.LocationContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
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
          {!isLoaded ? (
            <LoadingComponent />
          ) : (
            <GoogleMap
              mapContainerClassName={classes.mapContainer}
              center={center}
              zoom={16}
            >
              <MarkerF position={center} draggable />
            </GoogleMap>
          )}

          <div className={classes.locationContent}>
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              Peta Lokasi Acara
            </motion.h3>
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className={classes.title}
            >
              — Rumah Mempelai Pria —
            </motion.span>
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
            >
              Perum buana gardenia blok C3 no 50, RT.005/RW.004, Pinang, Kec.
              Pinang, Kota Tangerang, Banten 14151
            </motion.span>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2 }}
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/qyx6JWcGHc4vpPCy5",
                  "_blank"
                )
              }
              className={classes.btnExpand}
            >
              <i className="fa-solid fa-map-location-dot"></i>
              <span>Buka Maps</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const LoadingComponent = () => {
  return (
    <motion.div className={classes.loadingContent}>
      <motion.div
        animate={{ y: [-5, 5] }}
        transition={{
          delay: 0.2,
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={classes.circle}
      ></motion.div>
      <motion.div
        animate={{ y: [-5, 5] }}
        transition={{
          delay: 0.4,
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={classes.circle}
      ></motion.div>
      <motion.div
        animate={{ y: [-5, 5] }}
        transition={{
          delay: 0.6,
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={classes.circle}
      ></motion.div>
    </motion.div>
  );
};

export default Location;
