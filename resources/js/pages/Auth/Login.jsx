import React from 'react'
import AuthLayout from '../../components/AuthLayout'
import {FcGoogle} from "react-icons/fc";
import {FaFacebookF} from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <AuthLayout>
      <div className="w-screen p-4 rounded-md shadow-lg text-for-primary w-sc bg-primary sm:w-96">
        <div className="my-8 heading-section">
        <h1 className='text-3xl font-bold tracking-widest text-center font-pacifico'>Chattify</h1>
        </div>
        <div className="my-4 form-section">
            <form action="">
                <div className="p-2 input-container">
                    <label htmlFor="username" className='ml-1 text-sm'>User name</label>
                    <input type="text" name="username" id="username" className='w-full px-2 py-1 bg-white bg-opacity-25 border-none outline-none text-for-primary' placeholder='User name' />
                </div>
                <div className="p-2 input-container">
                    <label htmlFor="password" className='ml-1 text-sm'>Password</label>
                    <input type="password" name="password" id="password" className='w-full px-2 py-1 bg-white bg-opacity-25 border-none outline-none text-for-primary' placeholder='User name' />
                </div>
                <div className="grid mt-4 button-container place-items-center">
                    <button className='px-6 py-2 font-bold bg-white rounded-lg text-cyan-500'>Login</button>
                </div>
            </form>
        </div>
        <p className="font-bold text-center divider">- OR -</p>
        <div className="flex justify-center gap-4 my-3 auxilury-section">
            <button className='p-2 bg-white rounded-full' title='Sign in with google'><FcGoogle size="1.5rem" /></button>
            <button className='p-2 bg-white rounded-full' title="Sign in with facebook"><FaFacebookF color='#1d3691' size="1.5rem" /></button>
        </div>
        <div className="mt-6 sign-up-box">
            <p className='text-sm font-normal text-center'>Don't Have an account yet? <Link to="/register">Sign Up</Link></p>
        </div>
      </div>
    </AuthLayout>
  )
}
