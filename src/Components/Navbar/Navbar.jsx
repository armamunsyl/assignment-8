import React from 'react'
import Logo from '../../assets/logo.png'
import GitLogo from '../../assets/GitHub_Invertocat_Logo.svg.png'
import { Link, NavLink } from 'react-router-dom'


function Navbar() {
const links = <>
    <NavLink
        to='/'
        end
        className={({ isActive }) =>
            isActive
                ? "text-[#8248EB] font-semibold underline underline-offset-4"
                : "text-gray-800 hover:text-[#8248EB] transition-all"
        }
    >
        <li>Home</li>
    </NavLink>

    <NavLink
        to='/apps'
        className={({ isActive }) =>
            isActive
                ? "text-[#8248EB] font-semibold underline underline-offset-4"
                : "text-gray-800 hover:text-[#8248EB] transition-all"
        }
    >
        <li>Apps</li>
    </NavLink>

    <NavLink
        to='/installation'
        className={({ isActive }) =>
            isActive
                ? "text-[#8248EB] font-semibold underline underline-offset-4"
                : "text-gray-800 hover:text-[#8248EB] transition-all"
        }
    >
        <li>Installation</li>
    </NavLink>
</>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow hover:bg-green-400">
                        {links}
                    </ul>
                </div>
                <Link to={`/`}><h1 className=" flex items-center text-xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text"><span className='h-6 w-6'><img src={Logo} alt="" /></span>HERO.IO</h1></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center gap-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
                <Link to='https://github.com/armamunsyl/'><button className="btn  bg-gradient-to-r from-purple-500 to-indigo-500 text-white"><span className='h-6 w-6'><img src={GitLogo} alt="" /></span>Contribute</button></Link>
            </div>
        </div>
    )
}

export default Navbar