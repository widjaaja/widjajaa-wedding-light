import React, { useEffect, useState  } from 'react';
import { motion } from "framer-motion";

import classes from './Wish.module.scss';

interface WishProps {
  name: string;
}

interface WishState {
  name: string;
}

const Wish: React.FC<WishProps> = ({ name }) => {
  // Component implementation
  const [activeCommentForm, setActiveCommentForm] = useState<boolean>(false);

  useEffect(() => {
    // Do something when count changes
  }, []);

  return (
    <motion.div  
      className={classes.WishContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <div className={classes.bgMain}></div>
      <div className={classes.bgBlur}></div>
      <div className={classes.populated}>
        <div className={classes.widgetWrap}>
          <div className={classes.wishContent}>
            <h3>RSVP dan Ucapan</h3>

            <div className={classes.listContainer}>
              <div className={classes.listItem}>
                <div className={classes.item}>
                  <span className={classes.title}>Ika</span>
                  <span>Alhamdulillahirobillalamin barakallahu fiik</span>
                  <div className={classes.dateTime}>
                    <span>October 22, 2023</span>
                    <span>12:48 pm</span>
                  </div>
                </div>
                <div className={classes.item}>
                  <span className={classes.title}>Ika</span>
                  <span>Selamat menapaki jalan baru bersama, dengan cinta sebagai panduan setiap langkahnya</span>
                  <div className={classes.dateTime}>
                    <span>October 22, 2023</span>
                    <span>12:48 pm</span>
                  </div>
                </div>
                <div className={classes.item}>
                  <span className={classes.title}>Ika</span>
                  <span>Selamat menempuh hidup baru bersama! mett nikahh weyy</span>
                  <div className={classes.dateTime}>
                    <span>October 22, 2023</span>
                    <span>12:48 pm</span>
                  </div>
                </div>
                <div className={classes.item}>
                  <span className={classes.title}>Ika</span>
                  <span>Selamat menempuh hidup baru bersama! mett nikahh weyy</span>
                  <div className={classes.dateTime}>
                    <span>October 22, 2023</span>
                    <span>12:48 pm</span>
                  </div>
                </div>
                <div className={classes.item}>
                  <span className={classes.title}>Ika</span>
                  <span>“Semoga Allah memberkahimu ketika bahagia dan ketika susah dan mengumpulkan kalian berdua dalam kebaikan.” (HR. Abu Daud, no. 2130; Tirmidzi, no. 1091)</span>
                  <div className={classes.dateTime}>
                    <span>October 22, 2023</span>
                    <span>12:48 pm</span>
                  </div>
                </div>
                <div className={classes.item}>
                  <span className={classes.title}>Ika</span>
                  <span>MaasyaaAllah, antum nikah?</span>
                  <div className={classes.dateTime}>
                    <span>October 22, 2023</span>
                    <span>12:48 pm</span>
                  </div>
                </div>
                <div className={classes.item}>
                  <span className={classes.title}>Ika</span>
                  <span>بارك الله لكما وجعل بينكما مودة ورحمة آمين يا رب العالمين</span>
                  <div className={classes.dateTime}>
                    <span>October 22, 2023</span>
                    <span>12:48 pm</span>
                  </div>
                </div>
                <div className={classes.item}>
                  <span className={classes.title}>Ika</span>
                  <span>MaasyaaAllah, antum nikah?</span>
                  <div className={classes.dateTime}>
                    <span>October 22, 2023</span>
                    <span>12:48 pm</span>
                  </div>
                </div>
                <div className={classes.item}>
                  <span className={classes.title}>Ika</span>
                  <span>بارك الله لكما وجعل بينكما مودة ورحمة آمين يا رب العالمين</span>
                  <div className={classes.dateTime}>
                    <span>October 22, 2023</span>
                    <span>12:48 pm</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.btnContent}>
              <button onClick={() => setActiveCommentForm(true)} className={classes.btnExpand}>
                <i className="fa-duotone fa-messages"></i>
                <span>Kirim Ucapan</span>
              </button>
            </div>
            
            {/* Popup Comment Form */}
            {activeCommentForm && 
              <div className={classes.commentContainer}>
                <div className={classes.commentContent}>
                  <div className={classes.closeContainer}>
                    <i onClick={() => setActiveCommentForm(false)} className="fa-duotone fa-xmark"></i>
                  </div>
                  <h5>Kiriman Ucapan :</h5>
  
                  <div className={classes.commentForm}>
                    <div className={classes.commentFormField}>
                      <label htmlFor="">Nama *</label>
                      <input type="text" className={classes.formInput} />
                    </div>
                    <div className={classes.commentFormField}>
                      <label htmlFor="">Kehadiran *</label>
                      <div className={classes.inputRadioContainer}>
                        <div className={classes.inputRadio}>
                          <input type="radio" id='hadir' name="present" value="hadir"/>
                          <label htmlFor="hadir">Hadir</label>
                        </div>
                        <div className={classes.inputRadio}>
                          <input type="radio" id='tidakHadir' name="present" value="tidakHadir"/>
                          <label htmlFor="tidakHadir">Tidak Hadir</label>
                        </div>
                        <div className={classes.inputRadio}>
                          <input type="radio" id='belumPasti' name="present" value="belumPasti"/>
                          <label htmlFor="belumPasti">Belum Pasti</label>
                        </div>
                      </div>
                    </div>
                    <div className={classes.commentFormField}>
                      <label htmlFor="">Ucapan *</label>
                      <textarea name="" id="" cols={30} rows={10}></textarea>
                      <span>0 of 200 max characters.</span>
                    </div>
                  </div>
  
                  <div className={classes.btnContent}>
                    <button onClick={() => setActiveCommentForm(false)} className={classes.btnExpand}>
                      <i className="fa-duotone fa-messages"></i>
                      <span>Kirim Ucapan</span>
                    </button>
                  </div>
                </div>
              </div>
            }


          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Wish