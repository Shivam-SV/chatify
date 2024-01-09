export default function AuthLayout({children}){
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center bg-base-100 bg-opacity-20">
                {children}
            </div>
        </>
    )
}
