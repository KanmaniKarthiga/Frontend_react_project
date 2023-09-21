import React, { useContext } from "react";
import { Store } from "./AllStore";
import { Link, useNavigate, useParams } from "react-router-dom";
import profile from "../Images/profile.png"
import facebook from "../Images/facebook.png"
import instagram from "../Images/instagram.png"
import twitter from "../Images/twitter.png"
import youtube from "../Images/youtube.png"
import clapping from "../Images/clapping.png"
import share from "../Images/share.png"


const DynamicCompo = () =>{
    const [data] = useContext(Store)
    const id = useParams().id
    console.log(typeof id)
   
    const navi = useNavigate()

    const navbar = document.getElementById('Header')
    navbar.style.display = "none"
    

    const handleclick = () =>{
        
        window.scrollTo({top: 0, behavior: 'smooth'})   
        navi(-1)
        navbar.style.display = "block"
    }
    
    return(
        <>  
        {data.filter((item) => item.id === parseInt(id)).map((item,index)=>{
            return(
                <>
                <div id="dynamic_header">
                    <div id="dynamic_siren">
                        <Link to='/' style={{color:"white", textDecoration:"none",}} onClick={handleclick} >
                        <span id='the'>The</span> 
                        <span id='siren'>Siren</span>
                        </Link>
                    </div>
                    <button id="get_started">Get Started</button>
                </div>
                <div key={index} id="dynamic_block">
                    <h2 className="dynamic_content">{item.heading}</h2>
                    <button id="dynamic_backbtn" onClick={handleclick}>Back</button>
                    <div className="middle">
                        <div><img src={profile} alt="not found" className="pro_img"/></div>
                        <div id="pro_user">
                            <p style={{fontWeight:"bold"}}>Kanmani Karthiga</p>
                            <p>Aug 28, 2023 10min read</p> 
                        </div>
                        <div className="social_media">
                            <img src={facebook} alt="not found" className="icon"/>
                            <img src={instagram} alt="not found" className="icon"/>
                            <img src={twitter} alt="not found" className="icon"/>
                            <img src={youtube} alt="not found" className="icon"/>
                        </div>
                    </div>
                    <div>
                        <img src={item.image} alt="not found" id="dynamic_img"/>
                    </div>
                    <p className="dynamic_content">{item.content}</p>
                    <div className="Likes">
                        <div>
                            <img src={clapping} alt="not found" className="icon"/>
                            <span className="dynamic_span">9.3k </span>
                        </div>
                        <div>
                            <img src={share} alt="not found" className="icon"/>
                            <span className="dynamic_span">Share this article</span>
                        </div>
                    </div>
                    
                    <div className="middle bottom_profile">
                        <div>
                            <img src={profile} alt="not found" className="pro_img"/>
                        </div>
                        <div id="pro_user" className="bottom_user">
                            <p>Written by</p>
                            <p style={{fontWeight:"bold"}}>Kanmani Karthiga</p>
                            <p>Aug 28, 2023 10min read</p> 
                        </div>
                    </div>
                </div>
                
                </>
                
            )
        })}
        <div className="story">
    
        {data.filter((item) => Math.random(item.id % 3 === 0)).slice(0,3).map((item,index) =>{
            return(
                <>
                <div className="more_siren">                   
                    <img src={item.image} alt="not found" className="story_img"/>
                    <div id="siren_story">
                        <h1 className="story_head">{item.heading}</h1>
                    </div>
                    <div style={{display: "flex", marginTop:"5px"}}>
                        <div>
                            <img src={profile} alt="not found" style={{width: "60px", height:"60px"}}/>
                        </div>
                        <div id="pro_user" style={{marginTop:"3px", marginLeft:"5px"}}>
                            <p style={{fontWeight:"bold"}}>Kanmani Karthiga</p>
                            <p>Aug 28, 2023 10min read</p> 
                        </div>
                    </div>
                </div>
                </>
            )
        })}
        </div>
        
        </>
    )
}
export default DynamicCompo;