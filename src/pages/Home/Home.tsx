import React, { useEffect  } from 'react';
import { motion } from "framer-motion";

import classes from './Home.module.scss';

interface HomeProps {
  name: string;
}

interface HomeState {
  name: string;
}

const Home: React.FC<HomeProps> = ({ name }) => {
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
        <div className={classes.bgMain}></div>
        <div className={classes.bgBlur}></div>
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
              Fulan
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
              Fulanah
            </motion.span>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 2 }}
            >
              12 . 12 . 2021
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home