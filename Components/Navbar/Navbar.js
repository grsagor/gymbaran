import Link from "next/link";

const menuItems = <>
    <li><Link href=''>Home</Link></li>
    <li><Link href=''>Program</Link></li>
    <li><Link href=''>Blog</Link></li>
    <li><Link href=''>Abuot Us</Link></li>
    <li><button className="bg-blue-900 text-white p-2 rounded-lg px-5">Login</button></li>
</>
const Navbar = () => {
    return (
        <div className="navbar text-black">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">
                    <span className="bg-indigo-500 text-white p-2 rounded-lg">Gym</span>
                    <span className="ml-1">baran</span>
                </a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;