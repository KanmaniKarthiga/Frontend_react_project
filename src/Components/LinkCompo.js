import React  from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    let count = 1;
    function menubox() {

        let menu = document.getElementById('menu_list');
        if ((count % 2) !== 0) {
            menu.style.display = 'block';
            count++;

        }
        else {
            menu.style.display = 'none'
            count++;
        }
    }

    return (
        <div id='Header'>
            <div className='heading'>
                <div>
                    <span id='the'>The</span>
                    <span id='siren'>Siren</span>
                </div>
                <button className='mobile-menu-icon' onClick={menubox}></button>
            </div>
            <span id='menu_list'>
                <ul>
                    <li className="link_nav" > <NavLink to='/' className="media_links">Home</NavLink></li>
                    <li className="link_nav" ><NavLink to='/bollywood' className="media_links">Bollywood</NavLink></li>
                    <li className="link_nav" ><NavLink to='/technology' className="media_links">Technology</NavLink></li>
                    <li className="link_nav" ><NavLink to='/hollywood' className="media_links">Hollywood</NavLink></li>
                    <li className="link_nav" > <NavLink to='/fitness' className="media_links">Fitness</NavLink></li>
                    <li className="link_nav"><NavLink to='/food' className="media_links">Food</NavLink></li>
                </ul>
            </span>
            <div id='navbar'>
                <NavLink to='/' className='navlink'>Home</NavLink>
                <NavLink to='/bollywood' className='navlink'>Bollywood</NavLink>
                <NavLink to='/technology' className='navlink'>Technology</NavLink>
                <NavLink to='/hollywood' className='navlink'>Hollywood</NavLink>
                <NavLink to='/fitness' className='navlink'>Fitness</NavLink>
                <NavLink to='/food' className='navlink'>Food</NavLink>

            </div>
            <hr/>
        </div>

    )
}
export default NavBar;