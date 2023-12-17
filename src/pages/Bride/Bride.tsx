import React, { useEffect  } from 'react';
import { motion } from "framer-motion";
import classes from './Bride.module.scss';

interface BrideProps {
  name: string;
}

interface BrideState {
  name: string;
}

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8,
  },
}

const Bride: React.FC<BrideProps> = ({ name }) => {
  // Component implementation


  useEffect(() => {
  }, []);

  return (
    <motion.div  
      className={classes.BrideContainer}
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
            <img className={classes.bismillah} src="https://invetin.id/wp-content/uploads/2020/12/bismillah.png" alt="" />
            <span className={classes.title}>Assalamu’alaikum Warahmatullahi Wabarakatuh</span>
            <span className={classes.desc}>Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, insyaaAllah kami akan menyelenggarakan acara pernikahan :</span>
            <div className={classes.profileContent}>
              <motion.img 
                animate={{ y: [-5, 5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                className={classes.profilePic} 
                src="https://invetin.id/wp-content/uploads/2022/02/mulimah-13-thumb.png" 
                alt="" 
              />
              <motion.img 
                animate={{ y: [-5, 5] }}
                transition={{
                  delay: .5,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                className={classes.profilePic} 
                src="https://invetin.id/wp-content/uploads/2022/02/muslim-13-thumb.png" 
                alt="" 
              />
            </div>
            <div className={classes.profilePerson}>
              <h3>Fulanah Khadijah</h3>
              <span>Putra Ketiga dari Bapak Umar Fulan dan Ibu Aisyah Fulanah</span>
            </div>
            <motion.i 
              animate={{ scale: 1.2 }}
              transition={{
                duration: .5,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
             className="fa-solid fa-heart"
            >
            </motion.i>
            <div className={classes.profilePerson}>
              <h3>Fulanah Khadijah</h3>
              <span>Putra Ketiga dari Bapak Umar Fulan dan Ibu Aisyah Fulanah</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const BouncingBall = () => {
  return (
    <div
      style={{
        width: "2rem",
        height: "2rem",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <motion.img
        className={classes.bismillah} 
        src="https://invetin.id/wp-content/uploads/2020/12/bismillah.png"
        transition={bounceTransition}
        animate={{
          y: ["100%", "-100%"],
          backgroundColor: ["#ff6699", "#6666ff"],
        }}
      />
    </div>
  )
}

export default Bride