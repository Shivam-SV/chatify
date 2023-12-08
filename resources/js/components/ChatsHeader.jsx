export default function ChatsHeader(){
    return (
        <>
            <div className="flex p-3 justify-between items-center h-full">
                <div className="logo-section">
                    <h2 className="text-primary font-pacifico text-2xl tracking-wide">Chattify</h2>
                </div>
                <div className="chats-actions flex gap-2">
                    <i class='bx bx-search text-xl' ></i>
                    <i class='bx bx-dots-vertical-rounded text-xl'></i>
                </div>
            </div>
        </>
    );
}
