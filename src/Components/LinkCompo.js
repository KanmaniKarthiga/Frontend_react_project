import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'


const LinkCompo = () =>{
    const[isMobile,setIsMobile]=useState(false);
    return(
        <div id='Header'>
            <div className='heading'>
                <span id='the'>The</span> 
                <span id='siren'>Siren</span>
            </div>
            
            <div className={isMobile ? "nav" : "navbar" } onClick={()=>{setIsMobile(false)}}>
                <Link to="/" activeclassname="active" className="links navlink">Home</Link>
                <Link to="/Bollywood" activeclassname="active" className="links navlink">Bollywood</Link>
                <Link to="/Technology" activeclassname="active" className="links navlink">Technology</Link>
                <Link to="/Hollywood" activeclassname="active" className="links navlink">Hollywood</Link>
                <Link to="/Fitness" activeclassname="active" className="links navlink">Fitness</Link>
                <Link to="/Food" activeclassname="active" className="links">Food</Link>
            </div>
            <button className='mobile-menu-icon' onClick={()=>{setIsMobile(!isMobile)}}>
                {isMobile ? <RxCross2/> : <GiHamburgerMenu/>  }
            </button>
            <div>
            </div>
            <hr/>
            
            
        </div>
       
    )
    
}
export default LinkCompo;
