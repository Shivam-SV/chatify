import ChatsFooter from "../../components/ChatsFooter";
import ChatsHeader from "../../components/ChatsHeader";

export default function Chats(){
    return (
        <>
            <div className="w-auto grid grid-rows-12 grid-flow-col h-screen border-x border-primary-content">
                <div className="row-span-1 border-b border-primary-content">
                    <ChatsHeader />
                </div>
                <div className="row-span-10">

                </div>
                <div className="row-span-1 border-t border-primary-content">
                    <ChatsFooter />
                </div>
            </div>
        </>
    );
}
