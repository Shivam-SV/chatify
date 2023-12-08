import Chats from "../chats";
import AppLayout from "../../layouts/AppLayout";
import Chat from "../chat";

export default function Home(){
    return (
        <AppLayout>
            <div className="grid grid-cols-12 w-full h-screen">
                <div className="col-span-3">
                    <Chats />
                </div>
                <div className="col-span-9">
                    <Chat />
                </div>
            </div>
        </AppLayout>
    );
}
