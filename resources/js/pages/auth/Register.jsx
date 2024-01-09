import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { useForm } from "../../hooks/FormHook";
import { toast } from "react-toastify";

export default function Register() {
    const navigate = useNavigate();
    const onSuccess = (response) => {
        toast[response.type](response.message);
        if(response.type == 'success') navigate('/login');
    }

    const {errors, formHandler, inProgress} = useForm(onSuccess);
    return (
        <AuthLayout>
            <div className="card p-5 border border-primary min-w-[25rem]">
                <div className="card-title flex-col">
                    <h2 className="font-pacifico tracking-wide text-3xl text-primary">Chatiffy</h2>
                    <p className="text-sm text-gray-500">Loose talk, Have a Chat</p>
                </div>
                <form action={route('register.new.user')} method="POST" onSubmit={formHandler}>
                    <div className="card-body p-4 mt-3">
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className="input input-bordered w-full max-w-xs bg-transparent" placeholder="Your good name" />
                            { (errors && errors.name) && <label htmlFor="name" className="form-error">{errors.name.join(', ')}</label> }
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" className="input input-bordered w-full max-w-xs bg-transparent" placeholder="username@domain.com" />
                            { (errors && errors.email) && <label htmlFor="email" className="form-error">{errors.email.join(', ')}</label> }
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" maxLength={10} className="input input-bordered w-full max-w-xs bg-transparent" placeholder="personal phone number" />
                            { (errors && errors.phone) && <label htmlFor="phone" className="form-error">{errors.phone.join(', ')}</label> }
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className="input input-bordered w-full max-w-xs bg-transparent" placeholder="Some Secrets" />
                            { (errors && errors.password) && <label htmlFor="password" className="form-error">{errors.password.join(', ')}</label> }
                        </div>
                        <div className="input-group text-center">
                            <button className="btn btn-primary btn-sm" disabled={inProgress} >{inProgress ? <i className='bx bx-loader-alt bx-spin' ></i> : <i className='bx bx-lock-open-alt'></i>} Sign In</button>
                        </div>
                        <div className="extras">
                            <p className="text-center">Already on chatfy? <Link to='/login' className="text-primary">Sign up</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </AuthLayout>
    )
}
