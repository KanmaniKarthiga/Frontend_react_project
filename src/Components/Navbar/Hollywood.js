import React, { useContext } from "react";
import { Store } from "../Datastore/AllStore";
import { NavLink } from "react-router-dom";

function Hollywood(){
    const [HollyData] = useContext(Store)
    const [TopData] =useContext(Store)
    const [SideData] = useContext(Store)

    const handleclick = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    return(
        <div className="componentH">
        <div id="baseContainer">
            <div id="block1">
                <div className="header">Hollywood</div><hr id="hrhead"/>
                <>
                {HollyData.filter((item) => item.category === 'Hollywood').map((data, index) =>{
                    return(
                        <>
                        <div className="container1" key={index}>
                            <div className='imgContainer'>
                            <NavLink to={`/Dynamiccompo/${data.id}`} onClick={handleclick}>
                                <img src={data.image} alt='Not found' className='image'/>
                            </NavLink>
                            </div>
                            <div className="contentContainer">
                            <NavLink to={`/Dynamiccompo/${data.id}`} className="linkStyle" onClick={handleclick}>
                                <h3 className="highlights">{data.heading}</h3>                      
                                <h4 className="content">{data.description}</h4>
                                <p id="time">Hollywood / <span>August 2 2023</span></p>
                            </NavLink>
                            </div>
                        </div><hr/>
                        </>
                    )
                })}
                </>
            </div>
            <div id="block2">
                <div className="header">Top Posts</div>
                <div><hr id="hrhead"/></div>
                    {TopData.filter((item) => item.category === 'ToppostsH').map((data,index)=>{
                        return(
                            <>
                            <div className="container2" key={index}>
                                <div className="imgContainer">
                                <NavLink to={`/Dynamiccompo/${data.id}`} onClick={handleclick}>
                                    <img src={data.image} alt='Not found' className="imageCorner"/>
                                </NavLink>
                                </div>
                                <div className="contentContainer">
                                <NavLink to={`/Dynamiccompo/${data.id}`} className="linkStyle" onClick={handleclick}>                      
                                    <h3 className="highlightsCorner">{data.heading}</h3>
                                    <h4 className="contentCorner">{data.description}</h4>
                                    <p id="time">Hollywood / <span>August 2 2023</span></p>
                                
                                </NavLink>
                                </div>
                            </div>
                            </>
                            )
                        })}
            <div>
                <img src="https://media.sailthru.com/composer/images/sailthru-prod-5xf/editor_images/2.11-SAT-JR-PM-copy-2_01.gif" alt='Not found' className="adbox"/>                                
            </div>
            </div>
        </div>
        <div id="block3">
            {SideData.filter((item) => item.category === 'HSide').map((data,index)=> {
                return(
                    <>
                    <div className="container3" key={index}>
                            <div className="imgContainer">
                            <NavLink to={`/Dynamiccompo/${data.id}`} onClick={handleclick}>
                                <img src={data.image} alt='Not found' className="imageSide"/>
                            </NavLink>
                            </div>
                            <div className="contentContainer">
                            <NavLink to={`/Dynamiccompo/${data.id}`} className="linkStyle" onClick={handleclick}>
                                <h3 className="Sidehead">{data.heading}</h3>
                                <h4 className="Sidecontent">{data.description}</h4>
                            </NavLink>
                            </div>
                            <hr/>
                    </div>
                    </>
                )
            })}
        </div>
        </div>
    )
}
export default Hollywood;