import React from 'react'
import {AiFillYoutube,AiFillFacebook,AiFillGithub} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
    <div>
    <h2>Crunchy Burger</h2>
    <p>Best burgers you will Ever Taste</p>
    <br/>
    <em>pls give us your valuble feedback</em>
    <br/>
    <strong>All right reserved to @Vishwajeet Verma</strong>
    </div>
    <aside>
        <h4>Connect Us</h4>
        <a href='https://www.facebook.com/profile.php?id=100091402178728'><AiFillFacebook/>
        </a>
         <a href='https://www.youtube.com/channel/UCEdpV1ai10djmv8UDaoIXLw'><AiFillYoutube/>
         </a>
          <a href='https://github.com/'><AiFillGithub/>
            </a>
    </aside>
    </footer> 

  )
}

export default Footer;