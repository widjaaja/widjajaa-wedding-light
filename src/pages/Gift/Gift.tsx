import React, { useEffect  } from 'react';
import { motion } from "framer-motion";

import classes from './Gift.module.scss';

interface GiftProps {
  name: string;
}

interface GiftState {
  name: string;
}

const Gift: React.FC<GiftProps> = ({ name }) => {
  // Component implementation

  useEffect(() => {
    // Do something when count changes
  }, []);

  return (
    <motion.div 
      className={classes.GiftContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={classes.bgMain}></div>
      <div className={classes.bgBlur}></div>
      <div className={classes.populated}>
        <div className={classes.widgetWrap}>
          <div className={classes.initialContent}>
            <img src="https://invetin.id/wp-content/uploads/2020/12/mahkotaatas1.png" alt="" />
            <span>Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do’a restu kepada kami.</span>
            <span className={classes.quote}>
              “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
              <br/>(QS. Ar-Ruum : 21)
            </span>
            <span>Wassalamu’alaikum Warahmatullahi Wabarakatuh Kami yang berbahagia,</span>
            <span className={classes.bridesName}>Fulan & Fulanah</span>
            <button className={classes.btnExpand}>
              <i className="fa-duotone fa-wallet"></i>
              <span>Amplop Digital</span>
            </button>
          </div>
          <div className={classes.bottomContent}>
            <span>Design with <i className="fa-solid fa-heart"></i> by <b>Adjie Wijaya Kusuma</b></span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Gift