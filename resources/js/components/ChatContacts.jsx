

export default function ChatContacts(){
    const user = [
        {
            name: 'Aman',
            content:"Have you worked on that?",
            notify: true,
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto rounded-full" alt="Aman" />),
            time: "10:40"
        },
        {
            name: 'Aman',
            content:"Seen",
            notify: true,
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto rounded-full" alt="Aman" />),
            time: "10:40"
        },
        {
            name: 'Aman',
            content:"Have you worked on that?",
            notify: true,
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto rounded-full" alt="Aman" />),
            time: "10:40"
        },
        {
            name: 'Aman',
            content:"Have you worked on that?",
            notify: true,
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto rounded-full" alt="Aman" />),
            time: "10:40"
        },
        {
            name: 'Aman',
            content:"Have you worked on that?",
            notify: true,
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto rounded-full" alt="Aman" />),
            time: "10:40"
        },
        {
            name: 'Aman',
            content:"Have you worked on that?",
            notify: true,
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto rounded-full" alt="Aman" />),
            time: "10:40"
        },
        {
            name: 'Aman',
            content:"Have you worked on that?",
            notify: true,
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto rounded-full" alt="Aman" />),
            time: "10:40"
        },
        {
            name: 'Aman',
            content:"Have you worked?",
            notify: true,
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto rounded-full" alt="Aman" />),
            time: "10:40"
        },
        {
            name: 'Aman',
            content: "2 Messages",
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto rounded-full" alt="Aman" />),
            time: "10:40"
        }
    ];

    const NotifySignal = (<span className="inline-block p-1 text-primary-content text-xs leading-3 bg-primary rounded-full"></span>);

    return (
        <>
            <div className="flex flex-col gap-1">
            {
                user.map((u, i) => {
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
                })
            }
            </div>
        </>
    );
}
