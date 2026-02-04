import React from "react";
import { Link } from "react-router-dom";
import SignupValidation from "./SignupValidation";
import { useState } from "react";

function Signup() {
        const[values, setValues] = useState({
            name: '',
            email: '',
            password: ''
        })
    
        const [errors, setErrors] = useState({})
        const handleSubmit = (e) => {
            e.preventDefault();
            setErrors(SignupValidation(values));
        }
        const handleInput = (e) => {
            setValues(prev => ({...prev, [e.target.name] : [e.target.value]}))
        }
    

    return (
        
        <div className="min-h-[80vh] flex items-center justify-center bg-blue-50 px-4">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
                <h2 className="text-center font-bold text-2xl mb-8 text-blue-900">Sign Up!</h2>
                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                        <label  className="text-sm font-semibold text-gray-700 ml-1" htmlFor="name"
                        >Name</label>
                        <input className="w-full px-4 py-3 rounded-lg border border-gray-300
                         focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                         type="name" placeholder="enter name" name="name"
                         onChange={handleInput}/>
                         {errors.name && (
                          <span className="text-red-500"> {errors.name}</span>
                         )}
                        

                    </div>
                    <div>
                        <label  className="text-sm font-semibold text-gray-700 ml-1" htmlFor="email"
                        >Email</label>
                        <input className="w-full px-4 py-3 rounded-lg border border-gray-300
                         focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                         type="email" placeholder="enter email" name="email"
                         onChange={handleInput}/>
                         {errors.email && (
                          <span className="text-red-500"> {errors.email}</span>
                         )}
                        
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-semibold text-gray-700 ml-1" htmlFor="password">Password</label>
                        <input className="w-full px-4 py-3 rounded-lg border border-gray-300
                         focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                         type="password" placeholder="enter password" name="passsword"
                         onChange={handleInput}/>
                         {errors.password && (
                          <span className="text-red-500"> {errors.password}</span>
                         )}
                         
                    </div>
                    <button className="w-full py-3 bg-blue-800 text-white 
                    font-bold rounded-lg shadow-lg hover:bg-blue-900 transition-colors mt-2 cursor-pointer">Sign Up</button>
                     <div className="text-center mt-4">
                    <p className="text-gray-600 text-sm">Already have an account?</p>
                    <Link to="/login" className="text-blue-800 font-bold hover:underline mt-1 cursor-pointer"
                    >Sign in to your account</Link>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Signup;