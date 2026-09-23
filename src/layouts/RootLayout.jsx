import { FaRegHeart } from "react-icons/fa"
import { FaRegCircleUser } from "react-icons/fa6"
import { IoCartOutline, IoHomeOutline } from "react-icons/io5"
import { TfiMenuAlt } from "react-icons/tfi"
import { NavLink, Outlet } from "react-router"
import {  IoCloseOutline, IoCubeOutline, IoCallOutline, IoInformationCircleOutline } from "react-icons/io5";
import { useState } from "react"

function RootLayout() {

    const [showSideBar, setShowSideBar] = useState(false)
 
    // const handleShowSideBar = () => {
    //     setShowSideBar(true)
    // }

    return (

        <div>

            <div>
                <p className="bg-black text-white text-center py-1">🚚 Free shipping on order over <span className="text-red-500">$50</span> 🌟</p>
            </div>

            <div className=" max-w-7xl mx-auto flex justify-between p-5">

                <div className=" flex items-center gap-x-5">
                    <div onClick={ ()=>{setShowSideBar(true)} }>
                        <TfiMenuAlt className="size-5 md:hidden hover:text-amber-500 hover:cursor-pointer" />
                    </div>
                    <div className="text-xl font-bold">KH</div>
                </div>

                <div className=" hidden md:block">
                    <nav className="flex items-center gap-x-5 ">

                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-amber-500 underline"
                                    : "text-black hover:text-amber-500 hover:underline"
                            }
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/product"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-amber-500 underline"
                                    : "text-black hover:text-amber-500 hover:underline"
                            }
                        >
                            Product
                        </NavLink>

                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-amber-500 underline"
                                    : "text-black hover:text-amber-500 hover:underline"
                            }
                        >
                            Contact
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-amber-500 underline"
                                    : "text-black hover:text-amber-500 hover:underline"
                            }
                        >
                            About
                        </NavLink>
                    </nav>
                </div>

                <div className=" flex items-center gap-x-5">
                    <div>
                        <FaRegHeart className="size-5 hover:text-amber-500 hover:cursor-pointer" />
                    </div>
                    <div>
                        <FaRegCircleUser className="size-5 hover:text-amber-500 hover:cursor-pointer" />
                    </div>
                    <div>
                        <IoCartOutline className="size-5 hover:text-amber-500 hover:cursor-pointer" />
                    </div>
                </div>

            </div>

            {/* //todo: sidebar for mobile */}
            <div className={` ${ showSideBar ? 'left-0':'-left-full' } w-full h-screen fixed top-0 flex transition-all duration-300`}>
                <div className="bg-slate-900 min-w-60 p-5">


                    <div className="bg-slate-900 h-screen flex flex-col gap-y-1">

                        <div 
                            className="bg-red-500 p-2 rounded hover:bg-red-700 hover:cursor-pointer"
                            onClick={ () => {setShowSideBar(false)}}
                            >

                                <div className="flex justify-end gap-x-5 ">
                                    <IoCloseOutline className="text-2xl" />
                                    <p>Close</p>

                                </div>
                        </div>

                        <div className="bg-slate-800 p-2 rounded hover:bg-slate-700">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-amber-500 underline"
                                        : "text-white hover:text-amber-500 hover:underline"
                                }
                            >
                                <div className="flex gap-x-5">
                                    <IoHomeOutline className="text-2xl" />
                                    <p>Home</p>

                                </div>
                            </NavLink>
                        </div>

                        <div className="bg-slate-800 p-2 rounded hover:bg-slate-700">
                            <NavLink
                                to="/product"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-amber-500 underline"
                                        : "text-white hover:text-amber-500 hover:underline"
                                }
                            >
                                <div className="flex gap-x-5">
                                    <IoCubeOutline className="text-2xl" />
                                    <p>Product</p>

                                </div>
                            </NavLink>
                        </div>

                        <div className="bg-slate-800 p-2 rounded hover:bg-slate-700">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-amber-500 underline"
                                        : "text-white hover:text-amber-500 hover:underline"
                                }
                            >
                                <div className="flex gap-x-5">
                                    <IoCallOutline className="text-2xl" />
                                    <p>Contact</p>

                                </div>
                            </NavLink>
                        </div>

                        <div className="bg-slate-800 p-2 rounded hover:bg-slate-700">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-amber-500 underline"
                                        : "text-white hover:text-amber-500 hover:underline"
                                }
                            >
                                <div className="flex gap-x-5">
                                    <IoInformationCircleOutline className="text-2xl" />
                                    <p>About</p>

                                </div>
                            </NavLink>
                        </div>


                    </div>

                </div>
                <div 
                    className="bg-black w-full opacity-[0] transition-all duration-1000"
                    onClick={ () => {setShowSideBar(false)}}>
                    {/* ថ្លា */}
                </div>

            </div>


            <Outlet />

            <div className="bg-slate-950 text-white">
                <div className=" max-w-7xl mx-auto flex justify-between py-8">
                    <div>
                        <p>Copyright &copy; 2026 - MasterIT Store</p>
                    </div>
                    <div>
                        <nav className="flex gap-x-5 ">
                            <a 
                                className="hover:text-amber-500 hover:underline"
                                href="/"
                                >
                                Home
                            </a>
                            <a 
                                className="hover:text-amber-500 hover:underline"
                                href="/contact">
                                Contact us
                            </a>
                            <a 
                                className="hover:text-amber-500 hover:underline"
                                href="/about"
                                >
                                About us
                                    
                            </a>
                            <a 
                                className="hover:text-amber-500 hover:underline"
                                href="/"
                                >
                                Term and Conditional
                            </a>
                        </nav>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default RootLayout