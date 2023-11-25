import React, { useEffect  } from 'react';
import { motion } from "framer-motion";

import classes from './Protocol.module.scss';

interface ProtocolProps {
  name: string;
}

interface ProtocolState {
  name: string;
}

const Protocol: React.FC<ProtocolProps> = ({ name }) => {
  // Component implementation

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
      <div className={classes.bgMain}></div>
      <div className={classes.bgBlur}></div>
      <div className={classes.populated}>
        <div className={classes.widgetWrap}>
          <div className={classes.protocolContent}>
            <h3>Protokol Kesehatan</h3>
            <span className={classes.desc}>Mengingat kondisi pandemi saat ini, kami menghimbau Bapak/Ibu/Saudara/i tamu undangan agar tetap memperhatikan protokol kesehatan dalam rangka upaya pencegahan penyebaran virus Covid-19.</span>
            <div className={classes.listItem}>
              <div className={classes.item}>
                <div className={classes.thumbnail}>
                  <i className="fa-solid fa-face-mask"></i>
                </div>
                <span>Gunakan Masker</span>
              </div>
              <div className={classes.item}>
                <div className={classes.thumbnail}>
                  <i className="fa-solid fa-temperature-list"></i>
                </div>
                <span>Cek Temperatur</span>
              </div>
              <div className={classes.item}>
                <div className={classes.thumbnail}>
                  <i className="fa-duotone fa-hands-bubbles"></i>
                </div>
                <span>Mencuci Tangan</span>
              </div>
              <div className={classes.item}>
                <div className={classes.thumbnail}>
                  <i className="fa-regular fa-people-arrows"></i>
                </div>
                <span>Jaga Jarak</span>
              </div>
              <div className={classes.item}>
                <div className={classes.thumbnail}>
                  <i className="fa-regular fa-handshake-slash"></i>
                </div>
                <span>Tidak Bersalaman</span>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </motion.div>
  );
}

export default Protocol