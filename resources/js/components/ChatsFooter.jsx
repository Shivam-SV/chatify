export default function ChatsFooter(){
    return (
        <div className="flex p-3 justify-between h-full items-center">
            <div className="me-section flex gap-4">
                <img src="https://placehold.co/40x40" alt="You" />
                <div className="me-info-section">
                    <h3 className="text-lg font-extrabold">Arron smith</h3>
                    <p> <span className="inline-block w-2 h-2 bg-primary rounded-full"></span> 1 new notification</p>
                </div>
            </div>
        </div>
    );
}
