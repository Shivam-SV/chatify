import React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/web";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Auth } from "./context/authContext";
import HashRouter from "./routes/hash";

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
        <Auth>
            <RouterProvider router={router} />
            <div>
                <RouterProvider router={HashRouter} />
            </div>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Auth>
    </React.StrictMode>
);
