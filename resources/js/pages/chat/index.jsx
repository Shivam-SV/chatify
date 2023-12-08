import ChatInput from "../../components/ChatInput";
import MessageHead from "../../components/MessageHead";

export default function Chat(){
    return (
        <div className="w-auto grid grid-rows-12 grid-flow-col h-screen border-x border-primary-content">
            <div className="row-span-1 border-b border-primary-content">
                <MessageHead />
            </div>
            <div className="row-span-10">

            </div>
            <div className="row-span-1 border-t border-primary-content">
                <ChatInput />
            </div>
        </div>
    );
}
