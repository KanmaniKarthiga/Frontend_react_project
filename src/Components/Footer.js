import React from "react";
import { Link } from "react-router-dom";
import facebook from "./Images/facebook.png"
import instagram from "./Images/instagram.png"
import twitter from "./Images/twitter.png"
import youtube from "./Images/youtube.png"
import github from "./Images/github.png"
import phone from "./Images/phone.png"
import email from "./Images/email.png"

const FooterCompo = () =>{
    const handleclick = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    return(
        <div id="footer">
            <div style={{color:"white"}} className="media_siren">
                <span id='the'>The</span> 
                <span id='siren'>Siren</span>
                <div>
                <Link to='/'><button onClick={handleclick} id="footer_btn">Blog Now</button></Link>
                </div>
            </div>
            
            <div>                
                <ul type="none">
                    <h2 className="footerlink">Explore</h2>
                    <Link to='/bollywood' className="footerlink" onClick={handleclick}><li>Bollywood</li></Link>
                    <Link to='/tech' className="footerlink" onClick={handleclick}><li>Technology</li></Link>
                    <Link to='/hollywood' className="footerlink" onClick={handleclick}><li>Hollywood</li></Link>
                    <Link to='/fitness'className="footerlink" onClick={handleclick}><li>Fitness</li></Link>
                    <Link to='/food' className="footerlink" onClick={handleclick}><li>Food</li></Link> 
                </ul>
            </div>
            <div>
                <ul type="none">
                    <h2 className="footerlink">Connect</h2>
                    <li className="footerlink">Help</li>
                    <li className="footerlink">About</li>
                    <li className="footerlink">Contact us</li>
                </ul>
            </div> 
            <div className="footer_img">
                <img src={facebook} alt="not found" className="icon"/>
                <img src={instagram} alt="not found" className="icon"/>
                <img src={twitter} alt="not found" className="icon"/>
                <img src={youtube} alt="not found" className="icon"/>
                <img src={github} alt="not found" className="icon"/>
                <p id="footer_para">The blog page is about exploring bollywood masti, hollywood witty, techno-park, fitness hacks and food madness!</p>
                <div>
                    <img src={phone} alt="not found" className="icon_new"/>
                    <span className="footer_contact">87560-90345</span>
                </div>
                <div>
                    <img src={email} alt="not found" className="icon_new"/>
                    <span className="footer_contact">karthiga.selva98@gmail.com</span>
                </div>
            
            </div>
        </div>
    )

}
export default FooterCompo;