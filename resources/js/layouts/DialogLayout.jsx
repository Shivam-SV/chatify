export function DialogLayout({ children, open }) {

    return (
        <>
        <input type="checkbox" id="appModal" className="modal-toggle" defaultChecked={open} />
        <div className="modal" role="dialog">
            <div className="modal-box">
                {children}
            </div>
        </div>
        </>
    );
}
