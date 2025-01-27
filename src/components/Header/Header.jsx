import { NavLink, useLocation } from "react-router-dom";


const Header = () => {
    const {pathname} = useLocation()
   

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink>Statistics</NavLink></li>
        <li><NavLink>Dashboard</NavLink></li>
    </>

    return (
        <div className={` mt-3 mx-3 rounded-t-2xl ${pathname !== '/' ? 'bg-white text-black' : 'bg-[#9538E2] text-white'}`}>
            <div className="navbar max-w-[1200px] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#8800f8] rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost md:text-xl -ml-6 md:ml-0 ">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                 <span className="bg-white p-2 rounded-full cursor-pointer mr-2.5"><img className="w-5.5" src="https://img.icons8.com/?size=32&id=15867&format=png" /></span>
                 <span className="bg-white p-2 rounded-full cursor-pointer"><img className="w-5.5" src="https://img.icons8.com/?size=24&id=86721&format=png" /></span>
                </div>
            </div>
        </div>
    );
};

export default Header;