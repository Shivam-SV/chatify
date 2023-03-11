import React from "react";
import { ToastContainer } from "react-toastify";

export default function AuthLayout({ children }) {
    return (
        <>
            <main className="login-container">
                <div className="grid h-screen place-items-center">
                    {children}
                </div>
            </main>
            <ToastContainer />
        </>
    );
}
