import React, { useEffect, useState  } from 'react';
import { AnimatePresence , motion } from "framer-motion"

import logoMandiri from "../../assets/Images/logo-bank-mandiri.png";
import logoHijra from "../../assets/Images/hijra-logo.png"
import logoJenius from "../../assets/Images/logo-jenius.png";

import classes from './Gift.module.scss';

interface GiftProps {
  name: string;
  isAudio: boolean;
  onSetAudio: (item: boolean) => void;
  onSetFullScreen: () => void;
}

interface GiftState {
  name: string;
}

interface WidgetComponentProps {
  name: string;
  isAudio: boolean;
  onSetAudio: (item: boolean) => void;
  onSetFullScreen: () => void;
}

const WidgetComponent: React.FC<WidgetComponentProps> = ({ name, isAudio, onSetAudio, onSetFullScreen }) => {
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
          <i onClick={() => onSetFullScreen()} className="fa-solid fa-maximize"></i>
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

const Gift: React.FC<GiftProps> = ({ name, isAudio, onSetAudio, onSetFullScreen }) => {
  const listBank = {
    "jenius": {
      "kode": "213",
      "norek": "90300229580",
      "nama": "Adjie Wijaya Kusuma"
    },
    "mandiri": {
      "kode": "008",
      "norek": "1260009790360",
      "nama": "Magfira Fairuz"
    },
    "hijra": {
      "kode": "722",
      "norek": "7800110100148547",
      "nama": "Magfira Fairuz"
    },
  }

  // Component implementation
  const [activeGiftPopup, setActiveGiftPopup] = useState<boolean>(false);
  const [activeGift, setActiveGift] = useState<string>('amplop-digital');
  const [activeBank, setActiveBank] = useState<string>('jenius');
  const [selectedBankDetail, setSelectedBankDetail] = useState<any>({});
  const [copyText, setCopyText] = useState<string>('Copy');
  
  useEffect(() => {
    // Do something when count changes
    setSelectedBankDetail(listBank.jenius)
  }, []);

  async function copyContent(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
      setCopyText('Copied!');
      setTimeout(() => {
        setCopyText('Copy');
      }, 1000);
      /* Resolved - text copied to clipboard successfully */
    } catch (err) {
      setCopyText('Copy');
      console.error('Failed to copy: ', err);
      /* Rejected - text failed to copy to the clipboard */
    }
  }

  return (
    <motion.div 
      className={classes.GiftContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <WidgetComponent name={'name'} isAudio={isAudio} onSetAudio={onSetAudio} onSetFullScreen={onSetFullScreen}></WidgetComponent>
      <div className={classes.bgMain}></div>
      <div className={classes.bgBlur}></div>
      <div className={classes.populated}>
        <div className={classes.widgetWrap}>
          <div className={classes.GiftContent}>
            <div className={classes.initialContent}>
              <motion.img 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
                src="https://invetin.id/wp-content/uploads/2020/12/mahkotaatas1.png" alt="" 
              />
              <motion.span
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
              >
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do’a restu kepada kami.
              </motion.span>
              <motion.span 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                className={classes.quote}
              >
                “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
                <br/>(QS. Ar-Ruum : 21)
              </motion.span>
              <motion.span
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 2 }}
              >
                Wassalamu’alaikum Warahmatullahi Wabarakatuh Kami yang berbahagia,
              </motion.span>
              <motion.span 
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 2.5 }}
                className={classes.bridesName}
              >
                Magfira & Adjie
              </motion.span>
              <motion.button
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 2.5 }} 
                onClick={() => setActiveGiftPopup(true)} 
                className={classes.btnExpand}
              >
                <i className="fa-duotone fa-wallet"></i>
                <span>Amplop Digital</span>
              </motion.button>
            </div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 1 }}
              className={classes.bottomContent}
            >
              <span>Design with <i className="fa-solid fa-heart"></i> by <b>Adjie Wijaya Kusuma</b></span>
            </motion.div>

            {/* Popup Amplop Form */}
            <AnimatePresence>
              {activeGiftPopup && 
                <motion.div 
                  className={classes.popupContainer}
                  initial={{ transform: 'translateY(100vh)', opacity: 0.5 }}
                  animate={{ transform: activeGiftPopup ? 'translateY(0)' : 'translateY(100vh)', opacity: 1 }}
                  exit={{ transform: 'translateY(100vh)', opacity: 0.5 }}
                  transition={{ duration: 2, delay: 0 }}
                >
                  <div className={classes.popupContent}>
                    <div className={classes.closeContainer}>
                      <i onClick={() => setActiveGiftPopup(false)} className="fa-duotone fa-xmark"></i>
                    </div>
                    <h5>Wedding Gift</h5>
                    <span className={classes.desc} >Kedatangan dan doa Anda ke pernikahan kami sudah cukup bagi kami. Namun jika anda ingin memberikan kado atau Amplop Digital, kami menyediakan informasi di bawah untuk memudahkan anda. Jazakumullahu khayran</span>

                    <div className={classes.giftContent}>
                      <div className={classes.giftTabContent}>
                        <div onClick={() => setActiveGift('amplop-digital')} className={`${classes.tabItem} ${activeGift === 'amplop-digital' && classes.active}`}>
                          <i className="fa-regular fa-credit-card"></i>
                          <span>Amplop Digital</span>
                        </div>
                        <div onClick={() => setActiveGift('kirim-kado')} className={`${classes.tabItem} ${activeGift === 'kirim-kado' && classes.active}`}>
                          <i className="fa-regular fa-gift"></i>
                          <span>Kirim Kado</span>
                        </div>
                      </div>

                      {activeGift === 'amplop-digital' &&
                        <div className={classes.giftBankContent}>
                          <div onClick={() => {setActiveBank('jenius'); setSelectedBankDetail(listBank.jenius);}} className={`${classes.bankItem} ${activeBank === 'jenius' && classes.active}`}>
                            <img src={logoJenius} alt="" />
                          </div>
                          <div onClick={() => {setActiveBank('mandiri'); setSelectedBankDetail(listBank.mandiri);}} className={`${classes.bankItem} ${activeBank === 'mandiri' && classes.active}`}>
                            <img className={`${classes.bankMandiri}`} src={logoMandiri} alt="" />
                          </div>
                          <div onClick={() => {setActiveBank('hijra'); setSelectedBankDetail(listBank.hijra);}} className={`${classes.bankItem} ${activeBank === 'hijra' && classes.active}`}>
                            <img src={logoHijra} alt="" />
                          </div>
                        </div>
                      }

                      {activeGift === 'amplop-digital' &&
                        <div className={classes.amplopDigitalContent}>
                          <div className={classes.listBank}>
                            <div className={classes.bankDetail}>
                              <span>Kode Bank ({selectedBankDetail.kode})</span>
                              <span>No. Rekening {selectedBankDetail.norek}</span>
                              <span>a.n. {selectedBankDetail.nama}</span>
                              <div className={classes.copyBankContainer}>
                                <span>( klik tombol copy untuk menyalin )</span>
                                <div className={classes.copyBankContent}>
                                  <input type="text" disabled value={selectedBankDetail.norek} />
                                  <div className={classes.btnContent}>
                                    <button onClick={() => copyContent(selectedBankDetail.norek)} className={classes.btnExpand}>
                                      <i className="fa-regular fa-copy"></i>
                                      <span>{copyText}</span>
                                    </button>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>

                        </div>
                      }

                      {activeGift === 'kirim-kado' &&
                        <div className={classes.kirimKadoContent}>
                          <div className={classes.addressBox}>
                            <span className={classes.receiver}>Penerima : Magfira Fairuz</span>
                            <span>Bumi Panyileukan Blok G 6 No. 4, Kec. Panyileukan, Kel. Cipadung Kidul, Kota Bandung, 40614</span>
                          </div>
                          <span>( klik tombol copy untuk menyalin )</span>
                          <div className={classes.btnContent}>
                            <button onClick={() => copyContent('Magfira Fairuz: Bumi Panyileukan Blok G 6 No. 4, Kec. Panyileukan, Kel. Cipadung Kidul, Kota Bandung, 40614')} className={classes.btnExpand}>
                              <i className="fa-regular fa-copy"></i>
                              <span>{copyText}</span>
                            </button>
                          </div>
                        </div>
                      }
                    </div>

                    {/* <div className={classes.btnContent}>
                      <button className={classes.btnExpand}>
                        <i className="fa-brands fa-whatsapp"></i>
                        <span> Konfirmasi WA</span>
                      </button>
                    </div> */}
                  </div>
                </motion.div >     
              }
            </AnimatePresence>
          </div>


        </div>
      </div>
    </motion.div>
  );
}

export default Gift