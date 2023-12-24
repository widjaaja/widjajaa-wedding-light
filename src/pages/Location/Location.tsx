import React from 'react';
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { motion } from "framer-motion";

import classes from './Location.module.scss';

interface LocationProps {
  name: string;
}

interface LocationState {
  name: string;
}

const Location: React.FC<LocationProps> = ({ name }) => {
  // Component implementation
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCxwvVwdI1xX5X4UPVWXX9jxVAEW4LOy58',
  });
  const center = { lat: -6.8608618, lng: 107.6337942 };
  const customMarker = {
    path: "M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM276.8 107c14.7 14.7 14.7 38.6 0 53.3l-14.9 14.9L208.6 122 223.5 107c14.7-14.7 38.6-14.7 53.3 0zM114.1 216.5L186 144.6l53.3 53.3-71.9 71.9c-4.1 4.1-9.2 7-14.9 8.4l-36.6 9.2c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l9.2-36.7c1.4-5.6 4.3-10.8 8.4-14.9z",
    fillColor: "#957443",
    fillOpacity: 2,
    rotation: 0,
    scale: .1,
  };

  return (
    <motion.div
     className={classes.LocationContainer}      
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     transition={{ duration: 2 }}
    >
      <div className={classes.bgMain}></div>
      <div className={classes.bgBlur}></div>
      <div className={classes.populated}>
        <div className={classes.widgetWrap}>
          {!isLoaded ? (
            <LoadingComponent/>
          ) : (
            <GoogleMap
              mapContainerClassName={classes.mapContainer}
              center={center}
              zoom={15}
            >
              <MarkerF 
                position={center}
                draggable
              />
              
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
              —  Villa Saddak Bandung —
            </motion.span>
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }} 
            >
              Jl. Bukit Pakar Timur No.76, Ciburial, Kec. Cimenyan, Kabupaten Bandung, Jawa Barat 40198
            </motion.span>
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2 }} 
              onClick={() => window.open('https://maps.app.goo.gl/qyx6JWcGHc4vpPCy5', '_blank')} className={classes.btnExpand}>
              <i className="fa-solid fa-map-location-dot"></i>
              <span>Buka Maps</span>
            </motion.button>
          </div>
        </div>

      </div>

    </motion.div>
  );
}

export const LoadingComponent = () => {

  return (
    <motion.div className={classes.loadingContent}>
    <motion.div
      animate={{ y: [-5, 5] }}
      transition={{
        delay: .2,
        duration: .6, 
        repeat: Infinity, 
        repeatType: 'reverse'
      }}
      className={classes.circle}
    ></motion.div>
    <motion.div
      animate={{ y: [-5, 5] }}
      transition={{
        delay: .4, 
        duration: .6,  
        repeat: Infinity, 
        repeatType: 'reverse'
      }}
      className={classes.circle}
    ></motion.div>
    <motion.div
      animate={{ y: [-5, 5] }}
      transition={{ 
        delay: .6, 
        duration: .6, 
        repeat: Infinity, 
        repeatType: 'reverse'
      }}
      className={classes.circle}
    ></motion.div>
  </motion.div>
  )
}

export default Location