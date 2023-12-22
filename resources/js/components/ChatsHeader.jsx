export default function ChatsHeader(){
    return (
        <>
            <div className="flex px-3 py-2 justify-between items-center h-full">
                <div className="logo-section">
                    <h2 className="text-primary font-pacifico text-2xl tracking-wide">Chattify</h2>
                </div>
                <div className="chats-actions flex gap-2">
                    <i className='bx bx-search text-xl' ></i>
                    <i className='bx bx-dots-vertical-rounded text-xl'></i>
                </div>
            </div>
        </>
    );
}
