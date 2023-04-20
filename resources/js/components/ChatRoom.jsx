import React from 'react'
import {FiPhoneCall} from 'react-icons/fi';
import {FaUser} from "react-icons/fa";
import Message from './Message';

let iconsSize = "1.2rem";

const userId = 1;
const friendId = 2;

const messages = [
    {
        messsage: "Hy Emma, How's up",
        fromUserId: 2,
        toUserId:1,
    },
];
export default function ChatRoom() {
  return (
    <>

        <div className='grid h-[97vh] chat-grid-template'>
            {/* Profile Header */}
            <nav className='container flex items-center justify-between p-3 mx-auto shadow-md'>
                <div className="flex items-center gap-3 left-section">
                    <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="friend" className='rounded-full w-11' />
                    <span>
                        <h1 className='text-lg'>Emma Watson</h1>
                        <p className='text-sm leading-3 text-slate-400'> Active now</p>
                    </span>
                </div>
                <div className="flex gap-2 right-section">
                    <span className='p-2 rounded-full text-for-primary bg-primary'><FiPhoneCall size={iconsSize}/></span>
                    <span className='p-2 rounded-full text-for-primary bg-primary'><FaUser size={iconsSize} /></span>
                </div>
            </nav>
            <div className="messages">
                <div className="container flex p-4 mx-auto">
                    <Message />
                </div>
            </div>
            <div className="p-2 messager bg-primary">
                <input type="text" className='w-full p-2 bg-white outline-none text-for-primary bg-opacity-20' placeholder='Type Message' />
            </div>
        </div>
    </>
  )
}
