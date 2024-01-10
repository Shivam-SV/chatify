import NoContacts from "./NoContacts";


export default function ChatContacts(){
    const user = [


    ];

    const NotifySignal = (<span className="inline-block p-1 text-primary-content text-xs leading-3 bg-primary rounded-full"></span>);

    return (
        <>
            {
                user.length > 0 ?
                <>
                    <div className="flex flex-col gap-1">
                        {user.map((u, i) => {
                            return (
                                <div className="contact p-2 gap-1 grid grid-flow-col grid-cols-12 shadow-md w-full" key={i}>
                                    <div className="profile-section col-span-2 p-1">
                                        {u.profile}
                                    </div>
                                    <div className="col-span-8">
                                        <h3 className="font-bold text-lg">{u.name}</h3>
                                        <p className="text-neutral text-opacity-50"> {u.notify ? NotifySignal : ''} {u.content}</p>
                                    </div>
                                    <div className="col-span-2 justify-self-end">
                                        <small>{u.time}</small>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </>
                 : <NoContacts />
            }
        </>
    );
}
