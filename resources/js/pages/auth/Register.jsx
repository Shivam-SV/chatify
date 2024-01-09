import { Link } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

export default function Register(){
    return (
        <AuthLayout>
            <div className="card p-5 border border-primary">
                <div className="card-title flex-col">
                    <h2 className="font-pacifico tracking-wide text-3xl text-primary">Chatiffy</h2>
                    <p className="text-sm text-gray-500">Loose talk, Have a Chat</p>
                </div>
                <div className="card-body p-4 mt-3">
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="input input-bordered w-full max-w-xs bg-transparent" placeholder="Your good name" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="input input-bordered w-full max-w-xs bg-transparent" placeholder="username@domain.com" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" className="input input-bordered w-full max-w-xs bg-transparent" placeholder="personal phone number" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="input input-bordered w-full max-w-xs bg-transparent" placeholder="Some Secrets" />
                    </div>
                    <div className="input-group text-center">
                        <button className="btn btn-primary btn-sm"><i className='bx bx-lock-open-alt'></i> Sign In</button>
                    </div>
                    <div className="extras">
                        <p className="text-center">Already on chatfy? <Link to='/login' className="text-primary">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}
