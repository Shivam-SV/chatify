import Chats from "../chats/chats";
import AppLayout from "../../layouts/AppLayout";

export default function Home(){
    return (
        <AppLayout>
            <div className="grid grid-cols-12 w-full h-screen">
                <div className="col-span-3">
                    <Chats />
                </div>
                <div className="col-span-9">

                </div>
            </div>
        </AppLayout>
    );
}
