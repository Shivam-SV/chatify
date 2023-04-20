import React from 'react'

export default function Contact({name, message, notificationCount, isActive}) {
  return (
    <div className={"flex items-center justify-between gap-6 contact px-4 py-1 " + (isActive ? 'active' : '')}>
        <div className="flex gap-2 profile">
            <img src="https://ionicframework.com/docs/img/demos/avatar.svg" alt="user profile" className='rounded-full w-11' />
            <div className="info">
                <h1 className="text-lg name">{name}</h1>
                <p className="text-sm truncate bg-opacity-90 text-ellipsis w-36">{message || null}</p>
            </div>
        </div>
        <div className="notifies">
            {notificationCount > 0 ? <span className='px-2 text-sm text-black bg-white rounded-full message-notification'>{notificationCount}</span> : null}
        </div>
    </div>
  )
}
