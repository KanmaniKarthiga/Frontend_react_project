import React, { useContext } from "react";
import { Store } from "../Datastore/AllStore";
import { NavLink } from "react-router-dom";

function Fitness(){
    const [FitData] = useContext(Store)
    const [TopData] =useContext(Store)
    const [SideData] = useContext(Store)

    const handleclick = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    return(
        <div className="componentFit">
        <div id="baseContainer">
            <div id="block1">
            <div className="header">Fitness</div>
            <hr id="hrhead"/>
                {FitData.filter((item)=> item.category === 'Fitness').map((data,index)=>{
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
                                    <p id="time">Fitness / <span>August 25 2023</span></p>
                                </NavLink>
                                </div>
                            </div><hr/>
                            </>
                        )
                    })}
            </div>
            <div id="block2">
                <div className="header">Top Posts</div>
                <div><hr id="hrhead"/></div>
                    {TopData.filter((item) => item.category === 'ToppostsFit').map((data,index)=>{
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
                                    <p id="time">Fitness / <span>August 25 2023</span></p>
                                    
                                </NavLink>
                                </div>
                            </div>
                            </>
                            )
                    })}
            <div>
                <img src="https://media.tenor.com/UeIBKE3mLSYAAAAM/gym-health.gif" alt='Not found' className="adbox"/>                                
            </div>
            </div>
        </div>
        <div id="block3T">
            {SideData.filter((item) => item.category === 'FitSide').map((data,index)=> {
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
export default Fitness;