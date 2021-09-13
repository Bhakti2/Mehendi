import React from "react";
import Icon from '@mdi/react'
import { mdiWhatsapp, mdiInstagram,mdiFacebook,mdiTwitter } from '@mdi/js';


function Footer() {
    return (
      
      <div className ="Footer-div">

      <div className="text-div">
        
        <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer" > <Icon path={mdiWhatsapp}
       className="icon"
        size={1}
        color="#7b787"
        /></a>
        <a href="https://www.instagram.com/"  target="_blank" rel="noreferrer"> <Icon path={mdiInstagram}
       className="icon"
        size={1}
        color="#7b787"
        /></a>
         <a href="https://www.facebook.com/profile.php?id=100011383932302"  target="_blank" rel="noreferrer"><Icon path={mdiFacebook}
       className="icon"
        size={1}
        color="#7b787"
        /></a>
        <a href="https://twitter.com/?lang=en"  target="_blank" rel="noreferrer"> <Icon path={mdiTwitter}
       className="icon"
        size={1}
        color="#7b787"
        /></a>
        <p style={{color:"#7b787"}}> &copy; CopyRight Reseved 2021</p>
        </div>
        </div>

    );
  }
  
  export default Footer;