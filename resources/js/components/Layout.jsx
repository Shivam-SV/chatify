import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { HiEllipsisVertical } from "react-icons/hi2";
import { BsClockHistory, BsBookmark, BsPinAngle } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import Contact from "./Contact";
import { ToastContainer } from "react-toastify";
import { myFriends } from "../services/xhrHandler";
import { useSelector } from "react-redux";
import {findUserByKeyword} from "../services/xhrHandler";

let iconsSize = "1.2rem";

export default function Layout({ children }) {
    const auth = useSelector((state) => state.auth);
    const [searchedUsers, setSearchedUsers] = useState([]);
    const Friends = [];
    try {
        let response = myFriends(auth.id, auth.token);
        Friends == response?.data;
    } catch (error) {
        console.log(error);
    }

    const searchUser = async (event) => {
        let response = {};
        try{
            if(event.target.value != ''){
                response = await findUserByKeyword(event.target.value, auth.id);
            }
            setSearchedUsers(response?.data?.data || []);
        }catch(err){
            console.log(err);
        }
    }
    return (
        <>
            {/* main */}
            <main className="layout-box font-poppins">
                {/* Side Bar */}
                <aside className="flex flex-col max-w-[18rem] shadow-md text-for-primary sidebar bg-primary sideBar-grid-template">
                    {/* Branding section */}
                    <div className="flex items-center justify-between p-4 branding">
                        <h1 className="text-2xl font-bold tracking-widest font-pacifico">
                            Chattify
                        </h1>
                        <span className="flex items-center justify-center gap-3">
                            <FaUser size={iconsSize} />
                            <HiEllipsisVertical size={iconsSize} />
                        </span>
                    </div>
                    <div className="p-4 navigations">
                        <div className="relative search-box">
                            <input
                                type="search"
                                name="search"
                                id="search"
                                className="w-full px-2 py-1 bg-white bg-opacity-25 border-none outline-none text-for-primary"
                                placeholder="Search Chattify"
                                onInput={searchUser}
                            />
                            <div className="absolute w-full p-1 bg-white suggestion-box z-2" style={searchedUsers.length == 0 ? {display:'none'} : {}}>
                                <ul className="suggestions">
                                    {searchedUsers.length > 0 ? searchedUsers.map(user => {
                                        return (
                                        <li key={user.id} className="flex items-center justify-between p-2 text-black">
                                            <span>{user.first_name} {user.last_name}</span>
                                            {!user.is_friend ? (<span className="text-blue-500"><AiOutlineUserAdd /></span>) : (<></>)}
                                        </li>
                                    )
                                    }) : (<></>)}
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center justify-between py-2 navs">
                            <span className="trasnparent-bg-icons">
                                <BsClockHistory size={iconsSize} />
                            </span>
                            <span className="trasnparent-bg-icons">
                                <FiUsers size={iconsSize} />
                            </span>
                            <span className="trasnparent-bg-icons">
                                <BsBookmark size={iconsSize} />
                            </span>
                            <span className="trasnparent-bg-icons">
                                <BsPinAngle size={iconsSize} />
                            </span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-4 py-4 overflow-y-auto h-[60%] contacts"
                        style={{
                            boxShadow:
                                "-2px 2px 16px 0px rgba(0,0,0,0.38) inset",
                        }}
                    >
                        {Friends.length > 0 ? (
                            Friends.map((contact) => {
                                return (
                                    <Contact
                                        key={contact.name}
                                        name={contact.name}
                                        message={contact.message}
                                        notificationCount={
                                            contact.notificationCount
                                        }
                                        isActive={contact.isActive}
                                    />
                                );
                            })
                        ) : (
                            <span className="p-2 text-center text-opacity-75 break-words">
                                👋🏼 No friends yet, hit search to add new friends
                            </span>
                        )}
                    </div>
                    <div className="p-4 shadow-xl footer branding">
                        <h3>All right reserved</h3>
                    </div>
                </aside>
                <div className="main-container">
                    <div className="container h-[100%] mx-auto">{children}</div>
                </div>
            </main>

            {/* footer */}

            <footer></footer>
            <ToastContainer />
        </>
    );
}
