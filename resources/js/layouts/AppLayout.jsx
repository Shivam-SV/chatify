export default function AppLayout({children}){
    return(
        <>
            <div className="bg-primary-content bg-opacity-20">
                <div className="app-container">
                    {children}
                </div>
            </div>

        </>
    );
}
