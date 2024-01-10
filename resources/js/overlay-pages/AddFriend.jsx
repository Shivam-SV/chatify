import { DialogLayout } from "../layouts/DialogLayout";

export default function AddFriend(){
    return (
        <DialogLayout open={true}>
            <div className="modal-header flex justify-between items-center">
                <div className="input-group">
                    <input type="search" placeholder="Type Username/Email/Name" className="input w-full max-w-xs focus:outline-none focus:border-none" />
                </div>
                <a href="#"><i className="bx bx-x text-lg"></i></a>
            </div>
        </DialogLayout>
    );
}
