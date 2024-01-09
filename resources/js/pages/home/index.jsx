import Chats from "../chats";
import AppLayout from "../../layouts/AppLayout";
import Chat from "../chat";
import NoCHat from "../../components/NoChat";

export default function Home(){
    return (
        <AppLayout>
            <div className="grid grid-cols-12 w-full h-screen" >
                <div className="lg:col-span-3 md:col-span-4 hidden sm:block">
                    <Chats />
                </div>
                <div className="col-span-12 md:col-span-8 lg:col-span-9">
                    {/* <Chat /> */}
                    <NoCHat />
                </div>
            </div>
        </AppLayout>
    );
}
