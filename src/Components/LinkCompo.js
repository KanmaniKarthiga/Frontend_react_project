import React  from 'react'
import { NavLink } from 'react-router-dom';


// const LinkCompo = () =>{
//     const[isMobile,setIsMobile]=useState(false);
//     return(
//         <div id='Header'>
//             <div className='heading'>
//                 <span id='the'>The</span> 
//                 <span id='siren'>Siren</span>
//             </div>

//             <div className={isMobile ? "nav" : "navbar" } onClick={()=>{setIsMobile(false)}}>
//                 <Link to="/" activeclassname="active" className="links navlink">Home</Link>
//                 <Link to="/Bollywood" activeclassname="active" className="links navlink">Bollywood</Link>
//                 <Link to="/Technology" activeclassname="active" className="links navlink">Technology</Link>
//                 <Link to="/Hollywood" activeclassname="active" className="links navlink">Hollywood</Link>
//                 <Link to="/Fitness" activeclassname="active" className="links navlink">Fitness</Link>
//                 <Link to="/Food" activeclassname="active" className="links navlink">Food</Link>
//             </div>
//             <button className='mobile-menu-icon' onClick={()=>{setIsMobile(!isMobile)}}>
//                 {isMobile ? <RxCross2/> : <GiHamburgerMenu/>  }
//             </button>
//             <div>
//             </div>
//             <hr/>


//         </div>

//     )

// }
// export default LinkCompo;
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
                <span id='the'>The</span>
                <span id='siren'>Siren</span>
                <button className='mobile-menu-icon' onClick={menubox}></button>
            </div>
            <span id='menu_list'>
                <ul>
                    <li className="link_nav"> <NavLink to='/'>Home</NavLink></li>
                    <li className="link_nav"><NavLink to='/bollywood'>Bollywood</NavLink></li>
                    <li className="link_nav"><NavLink to='/technology'>Technology</NavLink></li>
                    <li className="link_nav"><NavLink to='/hollywood'>Hollywood</NavLink></li>
                    <li className="link_nav"> <NavLink to='/fitness'>Fitness</NavLink></li>
                    <li className="link_nav"><NavLink to='/food'>Food</NavLink></li>
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