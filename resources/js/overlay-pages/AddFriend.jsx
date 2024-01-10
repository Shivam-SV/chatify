import { DialogLayout } from "../layouts/DialogLayout";

export default function AddFriend(){
    return (
        <DialogLayout open={true}>
            <div className="modal-header flex gap-2 items-center">
                <div className="input-group w-full">
                    <input type="search" placeholder="Type Username/Email/Name" className="w-full p-3 border-b border-b-neutral-content focus:outline-none focus:border-b focus:border-b-primary ease-in" />
                </div>
                <a href="#"><i className="bx bx-x text-lg"></i></a>
            </div>
        </DialogLayout>
    );
}
