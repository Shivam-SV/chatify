import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { useForm } from "../../hooks/FormHook";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { toast } from "react-toastify";

export default function Login(){
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);
    const success = (res) => {
        toast[res.type](res.message);
        if(res.status){
            authContext.actions.setAuth(res.auth);
            navigate('/');
        }
    }

    const {inProgress, formHandler, errors} = useForm(success);
    return (
        <AuthLayout>
            <div className="card p-5 border border-primary min-w-[25rem]">
                <div className="card-title flex-col">
                    <h2 className="font-pacifico tracking-wide text-3xl text-primary">Chatiffy</h2>
                    <p className="text-sm text-gray-500">Loose talk, Have a Chat</p>
                </div>
                <form action={route('login.user')} method="POST" onSubmit={formHandler}>
                <div className="card-body p-4 mt-3">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" className="input input-bordered w-full max-w-xs bg-transparent" placeholder="Email/Username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" className="input input-bordered w-full max-w-xs bg-transparent" placeholder="Some Secrets" />
                    </div>
                    <div className="input-group text-center">
                        <button className="btn btn-primary btn-sm"><i className='bx bx-lock-open-alt'></i> Sign Up</button>
                    </div>
                    <div className="extras">
                        <p className="text-center">New to chatfy? <Link to='/register' className="text-primary">Sign In</Link></p>
                    </div>
                </div>
                </form>
            </div>
        </AuthLayout>
    )
}
