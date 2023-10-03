import React, { useContext } from 'react'
import { Store } from '../Datastore/AllStore';
import { NavLink } from 'react-router-dom';

function Tech(){
    const [TechData] = useContext(Store)
    const [TopData] =useContext(Store)
    const [SideData] = useContext(Store)
    const handleclick = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    return(
        <div className='componentF'>
        <div id="baseContainer">
            <div id="block1">
                <div className="header">Technology</div><hr id="hrhead"/>
                {TechData.filter((item)=> item.category === 'Technology').map((data, index)=>{
                        return(
                            <>
                            <div className="container1" key={index}>
                                <div className='imgContainer'>
                                <NavLink to={`/Dynamiccompo/${data.id}`} onClick={handleclick}>
                                    <img src={data.image} alt='Not found' className='image'/>
                                </NavLink>
                                </div>
                                <div className='contentContainer'>
                                <NavLink to={`/Dynamiccompo/${data.id}`} className="linkStyle" onClick={handleclick}>
                                    <h3 className="highlights">{data.heading}</h3>                           
                                    <h4 className="content">{data.description}</h4>
                                    <p id="time">Technology / <span>August 16 2023</span></p>
                                </NavLink>
                                </div>
                            </div><hr/>
                            </>
                        )
                    })}
            </div>
            <div id="block2">
            <div className="header">Top Posts</div><hr id="hrhead"/>
                {TopData.filter((item) => item.category === 'ToppostsT').map((data,index)=>{
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
                                <p id="time">Technology / <span>August 16 2023</span></p>
                            
                            </NavLink>
                            </div>
                        </div>
                        </>
                        )
                    })}
            <div>
                <img src="https://undone.com/cdn/shop/files/Labcraft_-_Banner_teasing_4_A_Mobile_720x.gif?v=1690518767" alt='Not found' className="adbox"/>                                
            </div>
        </div>
        </div>
        <div id="block3T">
            {SideData.filter((item) => item.category === 'TSide').map((data,index)=> {
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
export default Tech;