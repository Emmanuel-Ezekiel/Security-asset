import React from 'react'
import "../../styles/footer.scss"
import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer>
      <div className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>About</h4>
              <hr />
              <p>About our company
							In 2014, a group of graduates of the University of Manchester led by Robert Rose was engaged in the study of the phenomenon of Bitcoin and development of new alternative cryptocurrency types.
							For two years we have launched four data centers and repeatedly upgraded technical equipment</p>
            </div>
            <div className="col">
              <h4>Contact Info</h4>
              <hr />
              <div className="location">
              <MdOutlineLocationOn/>
              <p> 5 Guildford Rd, EAST LAVINGTON,</p>
              </div>
              <div className="location">
              <BsTelephone/>
              <span>077 4339 1140 </span>
              </div>
              <div className="location">
              <CiMail/>
              <span>hello@cryptoforrests.com </span>
              </div>
            </div>
            <div className="col">
              <h4>OurGallery</h4>
              <hr />
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col">
              <h4>NewsLetter</h4>
              <hr />
              <form>
                <input type="email" placeholder='Your Email Address' name="email" required/>
                <button type='submit' ><CiMail/></button>
              </form>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer;
