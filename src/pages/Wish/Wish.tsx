import React, { useEffect, useState  } from 'react';
import moment from 'moment';
import { AnimatePresence , motion } from "framer-motion"
import supabase from "../../supabase";

import classes from './Wish.module.scss';

interface WishProps {
  name: string;
  isAudio: boolean;
  onSetAudio: (item: boolean) => void;
  onSetFullScreen: () => void;
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

const Wish: React.FC<WishProps> = ({ name, isAudio, onSetAudio, onSetFullScreen }) => {
  // Component implementation
  const [activeCommentForm, setActiveCommentForm] = useState<boolean>(false);
  const [listComment, setListComment] = useState<any>([]);
  const [sendWishText, setSendWishText] = useState<string>('Kirim Ucapan');
  const [fields, setFields] = useState({ // <-- create field state
    name: '',
    message: '',
    presence: '', //hadir, tidakHadir, BelumPasti
    guest_id: ''
  });
  
  let search = window.location.search;
  let params = new URLSearchParams(search);

  useEffect(() => {
    // Do something when count changes
    getGuestInvitation()
    getComments()
  }, []);

  const getGuestInvitation = async () => { 
    const { data } = await supabase.from("guests").select().eq('slug', params.get('to'));
    console.log(data);
    
    if (Array.isArray(data) && data.length > 0) {
      setFields({
        name: '',
        message: '',
        presence: '',
        guest_id: data[0].id
      })
      
    }
  }

  const getComments = async () => {
    const { data } = await supabase
      .from("comments")
      .select("id, created_at, name, message, presence, guests (id, name)")
      .order('created_at', { ascending: false });

    if (Array.isArray(data)) {
      console.log(data, 'masook');
      setListComment([...data])
    }
    console.log(listComment);
    
  }

  const changeHandler = (e: any) => {
    const { name, value } = e.target;
    setFields((fields) => ({
      ...fields,
      [name]: value
    }));
  };

  function onChangeDisabled():boolean {
    let res = fields.name.length > 3 && fields.message.length > 3 && fields.presence.length > 3;
    return !res;
  };

  const createComments = async () => {
    const { data, error } = await supabase
    .from('comments')
    .insert(fields)
    .select();

    console.log(data, error);
    setSendWishText('Terkirim!');
    getComments();

    window.setTimeout(() => {
      setFields({
        name: '',
        message: '',
        presence: '',
        guest_id: ''
      })
      setSendWishText('Kirim Ucapan');
      setActiveCommentForm(false);
    }, 1000);

  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
  }

  return (
    <motion.div  
      className={classes.WishContainer}
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
          <div className={classes.wishContent}>
            <h3>RSVP dan Ucapan</h3>

            <div className={classes.listContainer}>
              <div className={classes.listItem}>
                {listComment.map((item: any) =>
                <div key={item.id} className={classes.item}>
                  <span className={classes.title}>{item.name}</span>
                  <span>{item.message}</span>
                  <div className={classes.dateTime}>
                    <span>{moment(item.created_at).format('MMMM D, YYYY h:mm a')}</span>
                  </div>
                </div>
                )}

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
                  <span>“Semoga Allah memberkahimu ketika bahagia dan ketika susah dan mengumpulkan kalian berdua dalam kebaikan.” (HR. Abu Daud, no. 2130; Tirmidzi, no. 1091)</span>
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
            <AnimatePresence>
            {activeCommentForm && 
              <motion.div 
                className={classes.commentContainer}
                initial={{ transform: 'translateY(100vh)', opacity: 0.5 }}
                animate={{ transform: activeCommentForm ? 'translateY(0)' : 'translateY(100vh)', opacity: 1 }}
                exit={{ transform: 'translateY(100vh)', opacity: 0.5 }}
                transition={{ duration: 2, delay: 0 }}
              >
                <form onSubmit={handleSubmit} className={classes.commentContent}>
                  <div className={classes.closeContainer}>
                    <i onClick={() => setActiveCommentForm(false)} className="fa-duotone fa-xmark"></i>
                  </div>
                  <h5>Kiriman Ucapan :</h5>
  
                  <div className={classes.commentForm}>
                    <div className={classes.commentFormField}>
                      <label htmlFor="">Nama *</label>
                      <input 
                        type="text" 
                        name="name"
                        className={classes.formInput} 
                        onChange={changeHandler}
                        value={fields.name} 
                      />
                    </div>
                    <div className={classes.commentFormField}>
                      <label htmlFor="">Kehadiran *</label>
                      <div onChange={changeHandler} className={classes.inputRadioContainer}>
                        <div className={classes.inputRadio}>
                          <input type="radio" id='hadir' name="presence" value="hadir"/>
                          <label htmlFor="hadir">Hadir</label>
                        </div>
                        <div className={classes.inputRadio}>
                          <input type="radio" id='tidakHadir' name="presence" value="tidakHadir"/>
                          <label htmlFor="tidakHadir">Tidak Hadir</label>
                        </div>
                        <div className={classes.inputRadio}>
                          <input type="radio" id='belumPasti' name="presence" value="belumPasti"/>
                          <label htmlFor="belumPasti">Belum Pasti</label>
                        </div>
                      </div>
                    </div>
                    <div className={classes.commentFormField}>
                      <label htmlFor="">Ucapan *</label>
                      <textarea 
                        name="message" id="" rows={4}
                        onChange={changeHandler}
                        value={fields.message} 
                      ></textarea>
                      <span>{fields.message.length} of 200 max characters.</span>
                    </div>
                  </div>
  
                  <div className={classes.btnContent}>
                    <button type="submit"
                      className={classes.btnExpand}
                      onClick={() => createComments()}
                      disabled={onChangeDisabled()}
                    >
                      <i className="fa-duotone fa-messages"></i>
                      <span>{sendWishText}</span>
                    </button>
                  </div>
                </form>
              </motion.div >     
            }
          </AnimatePresence>


          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Wish