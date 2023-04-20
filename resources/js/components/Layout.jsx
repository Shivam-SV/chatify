import React from 'react'
import {FaUser} from "react-icons/fa";
import {HiEllipsisVertical} from 'react-icons/hi2';
import {BsClockHistory, BsBookmark, BsPinAngle} from 'react-icons/bs';
import {FiUsers} from 'react-icons/fi';
import Contact from './Contact';
import { ToastContainer } from 'react-toastify';
let iconsSize = "1.2rem";

const contacts = [
    {
        name: 'Martin',
        message: 'Hey, buddy what\'s up?',
        notificationCount: 0,
        isActive: false
    },
    {
        name: 'Anna',
        message: 'Hey, buddy what\'s up?',
        notificationCount: 2,
        isActive: false
    },
    {
        name: 'Goige',
        message: 'Hey, buddy what\'s up?',
        notificationCount: 0,
        isActive: true
    },
    {
        name: 'Jade',
        message: 'Hey, buddy what\'s up?',
        notificationCount: 4,
        isActive: false
    },
    {
        name: 'Shawn',
        message: 'Hey, buddy what\'s up?',
        notificationCount: 3,
        isActive: false
    },
    {
        name: 'Shawn2',
        message: 'Hey, buddy what\'s up?',
        notificationCount: 3,
        isActive: false
    },
    {
        name: 'Shawn3',
        message: 'Hey, buddy what\'s up?',
        notificationCount: 3,
        isActive: false
    },
    {
        name: 'Shawn4',
        message: 'Hey, buddy what\'s up?',
        notificationCount: 3,
        isActive: false
    },
    {
        name: 'Shawn5',
        message: 'Hey, buddy what\'s up?',
        notificationCount: 3,
        isActive: false
    }

];

export default function Layout({children}) {
  return (
    <>
        {/* main */}
        <main className='layout-box font-poppins'>
            {/* Side Bar */}
            <aside className='grid h-[97vh] overflow-y-auto shadow-md text-for-primary sidebar bg-primary min-w-20 sideBar-grid-template'>
                {/* Branding section */}
                <div className="flex items-center justify-between p-4 branding">
                    <h1 className='text-2xl font-bold tracking-widest font-pacifico'>Chattify</h1>
                    <span className='flex items-center justify-center gap-3'>
                        <FaUser size={iconsSize}/>
                        <HiEllipsisVertical size={iconsSize}/>
                    </span>
                </div>
                <div className="p-4 navigations">
                    <div className="search-box">
                        <input type="search" name="search" id="search" className='w-full px-2 py-1 bg-white bg-opacity-25 border-none outline-none text-for-primary' placeholder='Search Chattify' />
                    </div>
                    <div className="flex items-center justify-between py-2 navs">
                        <span className='trasnparent-bg-icons'><BsClockHistory size={iconsSize} /></span>
                        <span className='trasnparent-bg-icons'><FiUsers size={iconsSize}/></span>
                        <span className='trasnparent-bg-icons'><BsBookmark size={iconsSize}/></span>
                        <span className='trasnparent-bg-icons'><BsPinAngle size={iconsSize}/></span>
                    </div>
                </div>
                <div className="flex flex-col gap-4 py-4 overflow-y-auto contacts" style={{boxShadow: "-2px 2px 16px 0px rgba(0,0,0,0.38) inset"}}>
                    {contacts.map((contact) => {
                        return <Contact key={contact.name} name={contact.name} message={contact.message} notificationCount={contact.notificationCount} isActive={contact.isActive} />
                    })}
                </div>
                <div className='p-4 shadow-xl footer branding'>
                    <h3>All right reserved</h3>
                </div>
            </aside>
            <div className="main-container">
                <div className="container mx-auto">{children}</div>
            </div>
        </main>

        {/* footer */}

        <footer>

        </footer>
        <ToastContainer />
    </>
  )
}
