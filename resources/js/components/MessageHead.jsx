export default function MessageHead(){
    return (
        <>
            <div className="flex justify-between gap-3 h-full items-center px-4">
                <div className="user-info flex gap-3">
                    <img src="https://placehold.co/40x40" alt="Kina west" />

                    <div className="info-titles">
                        <h1 className="text-xl font-bold leading-6">Kina West</h1>
                        <p className="status"> <span className="inline-block w-2 h-2 bg-primary rounded-full"></span> Online</p>
                    </div>
                </div>
                <div className="message-actions flex gap-3 items-center">
                    <i className='bx bx-palette text-2xl'></i>
                    <i className='bx bx-search text-2xl' ></i>
                    <i className='bx bx-dots-vertical-rounded text-2xl'></i>
                </div>
            </div>
        </>
    );
}
