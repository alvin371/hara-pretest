

// asset import
import Avatar from './../../assets/img/avatar.jpg'
import Topian from './../../assets/img/topian.jpg'
import Ultrawide from './../../assets/img/ultrawide.jpg'
const Dashboard = () => {
    return (
        <>
            <div className="z-50">
                <span
                    className="absolute text-white text-4xl top-5 left-4 cursor-pointer"
                    onclick="Openbar()"
                >
                    <i className="bi bi-filter-left px-2 bg-gray-500 rounded-md"></i>
                </span>
                <div
                    className="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000 p-2 w-[300px] overflow-y-auto text-center bg-gray-500 shadow h-screen"
                >
                    <div className="text-gray-100 text-xl">
                        <div className="p-2.5 mt-1 flex items-center rounded-md">
                            <img src={Avatar} className="w-12 h-12 px-1 py-1 bg-blue-600 rounded-md"></img>
                            <h1 className="text-[15px] ml-3 text-xl text-gray-200 font-bold">
                                PT Frond End
                            </h1>
                            <i
                                className="bi bi-x ml-20 cursor-pointer lg:hidden"
                                onclick="Openbar()"
                            ></i>
                        </div>
                        <hr className="my-2 text-gray-600" />

                        <div>
                            <div
                                className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
                            >
                                <i className="bi bi-chat-left-text-fill"></i>
                                <div
                                    className="flex justify-between w-full items-center"
                                    onclick="dropDown()"
                                >
                                    <span className="text-[15px] ml-4 text-gray-200">Profile</span>
                                    <span className="text-sm rotate-180" id="arrow">
                                        <i className="bi bi-chevron-down"></i>
                                    </span>
                                </div>
                            </div>
                            <div
                                className="leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto"
                                id="submenu">
                                <a>
                                    <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
                                        Edit Profile
                                    </h1>
                                </a>
                                <a>
                                    <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
                                        Edit Career
                                    </h1>
                                </a>
                                <a>
                                    <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
                                        Edit Education
                                    </h1>
                                </a>
                            </div>
                            <a>
                                <div
                                    className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
                                >
                                    <i className="bi bi-envelope-fill"></i>

                                    <span className="text-[15px] ml-4 text-gray-200">Messages</span>
                                </div>
                            </a>


                            <a>
                                <div
                                    className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
                                >
                                    <i className="bi bi-box-arrow-in-right"></i>
                                    <span className="text-[15px] ml-4 text-gray-200">Logout</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-5 lg:col-span-4 lg:w-5/6  ml-64">
                <div className="container mx-4 sm:mx-16 my-4 mb-80">
                    <div>
                        <img className="mt-2 h-1/5 z-0" src={Ultrawide} alt="image" />
                    </div>
                    <div
                        className="2xl:-mt-60 xl:-mt-44 md:-mt-44 -mt-40 grid grid-flow-col grid-cols-8 grid-rows-6 gap-8 flex items-end"
                    >
                        <div className="col-span-2 row-span-2 row-start-2 z-10">
                            <a>
                                <img
                                    className="ml-8 rounded-full h-5/6 w-5/6"
                                    src={Avatar}
                                    alt="avatar"
                                />
                            </a>
                        </div>
                        <div
                            className="xl:mt-20 2xl:mt-10 col-span-2 row-span-3 z-10 bg-gray-300 border-4 border-gray-400 gray-400 rounded-lg"
                        >
                            <a>
                                <img src={Topian} alt="" />
                            </a>
                        </div>
                        <div
                            className="col-span-3 row-span-4 bg-gray-300 border-4 border-gray-400 rounded-lg"
                        >
                            <a>
                                <img className="" src={Ultrawide} alt="ultrawide" />
                                <div className="flex justify-between m-2">
                                    <p
                                        className="xl:text-xl md:text-base text-xs font-bold text-amber-500"
                                    >
                                        Riwayat karir 1
                                    </p>
                                    <p></p>
                                    <a
                                        className="justify-self-start z-10 bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-2 sm:px-4 rounded"
                                    >
                                        <p className="md:text-base text-xs">
                                            Edit
                                        </p>
                                    </a>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-span-3 row-span-2 bg-gray-300 border-4 border-gray-400 gray-400 rounded-lg"
                        >
                            <a>
                                <img src={Ultrawide} alt="ultrawide" />
                                <div className="flex justify-between m-2">
                                    <p
                                        className="xl:text-xl md:text-base text-xs font-bold text-amber-500"
                                    >
                                        Riwayat karir 2
                                    </p>
                                    <p></p>
                                    <a
                                        className="justify-self-start z-10 bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-2 sm:px-4 rounded"
                                    >
                                        <p className="md:text-base text-xs">
                                            Edit
                                        </p>
                                    </a>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-span-3 row-span-4 bg-gray-300 border-4 border-gray-400 gray-400 rounded-lg"
                        >
                            <a>
                                <img src={Ultrawide} alt="ultrawide" />
                                <div className="flex justify-between m-2">
                                    <p
                                        className="xl:text-xl md:text-base text-xs font-bold text-amber-500"
                                    >
                                        Riwayat pendidikan 1
                                    </p>
                                    <p></p>
                                    <a
                                        className="justify-self-start z-10 bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-1 sm:px-4 rounded"
                                    >
                                        <p className="md:text-base text-xs">
                                            Edit
                                        </p>
                                    </a>
                                </div>
                            </a>
                        </div>
                        <div
                            className="col-span-3 row-span-2 bg-gray-300 border-4 border-gray-400 gray-400 rounded-lg"
                        >
                            <a>
                                <img src={Ultrawide} alt="ultrawide" />
                                <div className="flex justify-between m-2">
                                    <p
                                        className="xl:text-xl md:text-base text-xs font-bold text-amber-500"
                                    >
                                        Riwayat pendidikan 2
                                    </p>
                                    <p></p>
                                    <a
                                        className="justify-self-start z-10 bg-amber-500 hover:bg-blue-700 text-white font-bold py-2 px-1 sm:px-4 rounded"
                                    >
                                        <p className="md:text-base text-xs">
                                            Edit
                                        </p>
                                    </a>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;