import React from 'react'
import { Link } from 'react-router-dom';

const LinkCompo = () =>{
    return(
        <div id='Header'>
            <div className='heading'>
                <span id='the'>The</span> 
                <span id='siren'>Siren</span>
            </div>
            
            <div id="navbar">
                <Link to='/' className="navlink">Home</Link>
                <Link to='/Bollywood' className="navlink">Bollywood</Link>
                <Link to='/Tech' className="navlink">Technology</Link>
                <Link to='/Hollywood' className="navlink">Hollywood</Link>
                <Link to='/Fitness' className="navlink">Fitness</Link>
                <Link to='/Food' className="navlink">Food</Link>
            </div>
            <hr/>
            
        </div>
       
    )
}
export default LinkCompo;