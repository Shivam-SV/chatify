import ChatContacts from "../../components/ChatContacts";
import ChatsHeader from "../../components/ChatsHeader";

export default function Chats(){
    return (
        <>
            <div className="w-100 flex flex-col h-screen border-x border-primary-content">
                <div className="border-b border-primary-content">
                    <ChatsHeader />
                </div>
                <div className="grow overflow-y-auto">
                    <ChatContacts />
                </div>
            </div>
        </>
    );
}
