import ChatInput from "../../components/ChatInput";
import MessageHead from "../../components/MessageHead";

export default function Chat(){
    return (
        <div className="w-auto flex flex-col h-screen border-x border-primary-content">
            <div className=" border-b border-primary-content">
                <MessageHead />
            </div>
            <div className="grow">

            </div>
            <div className=" border-t border-primary-content">
                <ChatInput />
            </div>
        </div>
    );
}
