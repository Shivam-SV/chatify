import ChatContacts from "../../components/ChatContacts";
import ChatsFooter from "../../components/ChatsFooter";
import ChatsHeader from "../../components/ChatsHeader";

export default function Chats(){
    return (
        <>
            <div className="w-auto flex flex-col h-screen border-x border-primary-content">
                <div className="border-b border-primary-content">
                    <ChatsHeader />
                </div>
                <div className="grow overflow-y-auto">
                    <ChatContacts />
                </div>
                <div className="border-t border-primary-content">
                    <ChatsFooter />
                </div>
            </div>
        </>
    );
}
