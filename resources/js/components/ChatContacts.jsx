

export default function ChatContacts(){
    const user = [
        {
            name: 'Aman',
            content: (<p><span class="inline-block p-1 w-4 text-primary-content text-xs leading-3 bg-primary rounded-full">1</span> 2 Messages</p>),
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto" alt="Aman" />)
        },
        {
            name: 'Aman',
            content: (<p><span class="inline-block p-1 w-4 text-primary-content text-xs leading-3 bg-primary rounded-full">1</span> 2 Messages</p>),
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto" alt="Aman" />)
        },
        {
            name: 'Aman',
            content: (<p><span class="inline-block p-1 w-4 text-primary-content text-xs leading-3 bg-primary rounded-full">1</span> 2 Messages</p>),
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto" alt="Aman" />)
        },
        {
            name: 'Aman',
            content: (<p><span class="inline-block p-1 w-4 text-primary-content text-xs leading-3 bg-primary rounded-full">1</span> 2 Messages</p>),
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto" alt="Aman" />)
        },
        {
            name: 'Aman',
            content: (<p><span class="inline-block p-1 w-4 text-primary-content text-xs leading-3 bg-primary rounded-full">1</span> 2 Messages</p>),
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto" alt="Aman" />)
        },
        {
            name: 'Aman',
            content: (<p><span class="inline-block p-1 w-4 text-primary-content text-xs leading-3 bg-primary rounded-full">1</span> 2 Messages</p>),
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto" alt="Aman" />)
        },
        {
            name: 'Aman',
            content: (<p><span class="inline-block p-1 w-4 text-primary-content text-xs leading-3 bg-primary rounded-full">1</span> 2 Messages</p>),
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto" alt="Aman" />)
        },
        {
            name: 'Aman',
            content: (<p><span class="inline-block p-1 w-4 text-primary-content text-xs leading-3 bg-primary rounded-full">1</span> 2 Messages</p>),
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto" alt="Aman" />)
        },
        {
            name: 'Aman',
            content: (<p><span class="inline-block p-1 w-4 text-primary-content text-xs leading-3 bg-primary rounded-full">1</span> 2 Messages</p>),
            profile: (<img src="https://placehold.co/40x40" className="h-auto w-auto" alt="Aman" />)
        }
    ];

    return (
        <>
            {
                user.map(u => {
                    return (<>
                        <div className="contact p-2 flex gap-4 align-center">
                            <div className="profile-section flex align-center">
                                {u.profile}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{u.name}</h3>
                                {u.content}
                            </div>
                        </div>
                    </>);
                })
            }
        </>
    );
}
