export default function ChatInput(){
    return (
        <div className="h-full flex items-center px-4">
            <div className="field w-full h-auto p-2 border border-primary-content rounded-full bg-primary-content bg-opacity-20 flex items-center gap-3">
                <div className="chat-actions">
                    <i class='bx bx-plus text-xl' ></i>
                </div>
                <input type="text" className=" bg-transparent w-full text-lg p-1 focus:outline-none" placeholder="What's on your mind" />
                <div className="chat-actions flex gap-3">
                    <i class='bx bx-microphone text-xl' ></i>
                    <i class='bx bx-paper-plane text-xl'></i>
                </div>
            </div>
        </div>
    );
}
