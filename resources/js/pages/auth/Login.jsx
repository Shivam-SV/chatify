import AuthLayout from "../../layouts/AuthLayout";

export default function Login(){
    return (
        <AuthLayout>
            <div className="card p-5 border border-primary">
                <div className="card-title flex-col">
                    <h2 className="font-pacifico tracking-wide text-3xl text-primary">Chatiffy</h2>
                    <p className="text-sm text-gray-500">Loose talk, Have a Chat</p>
                </div>
                <div className="card-body p-4 mt-3">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" className="input input-bordered w-full max-w-xs" placeholder="Email/Username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="input input-bordered w-full max-w-xs" placeholder="Some Secrets" />
                    </div>
                    <div className="input-group text-center">
                        <button className="btn btn-primary btn-sm"><i className='bx bx-lock-open-alt'></i> Sign Up</button>
                    </div>
                </div>
            </div>
        </AuthLayout>
    )
}
