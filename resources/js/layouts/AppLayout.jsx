export default function AppLayout({children}){
    return(
        <>
            <div className="bg-base-100">
                <div className="app-container">
                    {children}
                </div>
            </div>

        </>
    );
}
