import ChatContacts from "../../components/ChatContacts";
import ChatsFooter from "../../components/ChatsFooter";
import ChatsHeader from "../../components/ChatsHeader";

export default function Chats(){
    return (
        <>
            <div className=" relative">
                <div className="w-100 flex flex-col h-screen border-x border-primary-content">
                    <div className="border-b border-primary-content">
                        <ChatsHeader />
                    </div>
                    <div className="grow overflow-y-auto">
                        <ChatContacts />
                    </div>
                </div>
                <div className="floating-buttons sticky right-1 bottom-3 px-6 flex items-end flex-col">
                    <button className="btn btn-primary btn-sm btn-circle"><i className='bx bx-plus'></i></button>
                </div>
            </div>
        </>
    );
}
