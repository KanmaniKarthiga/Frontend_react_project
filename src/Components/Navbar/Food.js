import React, { useContext } from "react";
import { Store } from "../Datastore/AllStore";
import { NavLink } from "react-router-dom";

function Food(){
    const [FoodData] = useContext(Store)
    const [TopData] =useContext(Store)
    const [SideData] = useContext(Store)

    const handleclick = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    return(
        <div className="componentFoo">
        <div id="baseContainer">
            <div id="block1">
            <div className="header">Food</div><hr id="hrhead"/>
                {FoodData.filter((item)=> item.category === 'Food').map((data,index) =>{
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
                            <p id="time">Food / <span>August 10 2023</span></p>
                        </NavLink>
                        </div>
                        </div><hr/>
                        </>
                    )
                })}
        </div>
        <div id="block2">
            <div className="header">Top Posts</div><hr id="hrhead"/>
                {TopData.filter((item) => item.category === 'ToppostsFood').map((data,index)=>{
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
                                <h3 className="highlightsCorner">{data.heading}</h3><br/>
                                <h4 className="contentCorner">{data.description}</h4>
                                <p id="time">Food / <span>August 10 2023</span></p>
                            
                            </NavLink>
                            </div>
                        </div>
                        </>
                        )
                    })}
                
                    <img src="https://www.rvadv.com/wp-content/uploads/2020/07/General-1080x1920-1.gif" alt='Not found' className="adbox"/>                                
                
        </div>
        </div>
        <div id="block3F">
            {SideData.filter((item) => item.category === 'FSide').map((data,index)=> {
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
export default Food;