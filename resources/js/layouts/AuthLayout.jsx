export default function AuthLayout({children}){
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center bg-primary-content bg-opacity-20">
                {children}
            </div>
        </>
    )
}
