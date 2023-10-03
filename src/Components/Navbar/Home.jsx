import React, { useContext } from "react";
import { Store } from "../Datastore/AllStore";
import { NavLink } from "react-router-dom";


function Home(){
    const [homeData] = useContext(Store)
    const [TopData] = useContext(Store)
    const handleclick = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    return(
        <div id="home">
            <div className='homecompo1'>
                <div>
                    <img src='https://i.ytimg.com/vi/8cmvN_4Ehj4/maxresdefault.jpg' alt='bollywood' id='homeimg1'/>
                </div>
                <div>
                    <img src='https://static5.depositphotos.com/1005629/533/i/600/depositphotos_5338696-stock-photo-panna-cotta.jpg' alt='food' id='homeimg2'/>
                    <img src='https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2021-12/211208-working-out-stock-mn-1310-55e1c7.jpg' alt='fitness' id='homeimg3'/>
                </div>
               
            </div> 
            <div id='homecompo2'>The Latest</div><hr id="homehr"/>
            <div className="homelatest">
                {homeData.filter((item)=>item.category === "latest").map((data,index)=>{
                    return(
                        <div id="latest">
                                <div id="imagecontainer">
                                <NavLink to={`/Dynamiccompo/${data.id}`} onClick={handleclick}>
                                    <img src={data.image} alt="Not found" className="imagehome"/>
                                </NavLink>
                                </div>
                            <div id="datacontainer">
                            <NavLink to={`/Dynamiccompo/${data.id}`} className="linkStyle" onClick={handleclick}>
                                <h3 className="highlights">{data.heading}</h3>
                                <h4 className="content">{data.description}</h4>
                                <p id="time">Random / <span>August 29 2023</span></p>
                            </NavLink>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div id='ArticleCompo'>Latest Articles</div><hr id="homehr"/>
            <div id="latestArticles">
                <div>
                    {homeData.filter((item)=>item.category === "latestArticle").map((data,index)=>{
                        return(
                            <div className="containerHome" key={index}>
                                <div className="imgContainer">
                                <NavLink to={`/Dynamiccompo/${data.id}`} onClick={handleclick}>
                                    <img src={data.image} alt="Not found" className="image"/>
                                </NavLink>
                                </div>
                                <div className="contentContainer">
                                <NavLink to={`/Dynamiccompo/${data.id}`} className="linkStyle" onClick={handleclick}>
                                    <h3 className="highlights">{data.heading}</h3>
                                    <h4 className="content">{data.description}</h4>
                                </NavLink>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <img src="https://d3k81ch9hvuctc.cloudfront.net/company/TDkHZN/images/94cfbe3f-bed5-4c57-83e7-9d0f87ea29d0.gif" className="homead" alt='Not found'/>                                
                </div>
            </div>
            
            <div id="homeBlock">
                <h2 className="homeTop-posts">Top Posts</h2>
                <div><hr id="hrhead_home"/></div>
                    {TopData.filter((item) => item.category === 'ToppostsHome').map((data,index)=>{
                        return(
                            <>
                            <div className="containerHome" key={index}>
                                <div className="imgContainer">
                                <NavLink to={`/Dynamiccompo/${data.id}`} onClick={handleclick}>
                                    <img src={data.image} alt='Not found' className="imageCorner"/>
                                </NavLink>
                                </div>
                                <div className="contentContainer topposts">
                                <NavLink to={`/Dynamiccompo/${data.id}`} className="linkStyle" onClick={handleclick}>
                                    <h3 className="highlightsCorner">{data.heading}</h3>
                                    <h4 className="contentCorner">{data.description}</h4>
                                </NavLink>
                                </div>
                            </div>
                            </>
                            )
                        })}
            </div>
        
            <img src="https://webbtelescope.org/files/live/sites/webb/files/home/news/first-images/gallery/_images/STScI-J-HeroERO-Gallery-Fallback-image-1920x1080.jpg?t=tn370" alt="not found" id="ho_img"/>
            
        </div>
        
    )
}
export default Home;