export default function ChatInput(){
    return (
        <div className="h-full flex items-center px-4 py-1">
            <div className="field w-full h-auto p-1 border border-primary-content rounded-full bg-primary-content bg-opacity-20 flex items-center gap-3">
                <div className="chat-actions">
                    <i className='bx bx-plus text-xl' ></i>
                </div>
                <input type="text" className=" bg-transparent w-full text-lg px-1 focus:outline-none" placeholder="What's on your mind" />
                <div className="chat-actions flex gap-3">
                    <i className='bx bx-microphone text-xl' ></i>
                    <i className='bx bx-paper-plane text-xl'></i>
                </div>
            </div>
        </div>
    );
}
