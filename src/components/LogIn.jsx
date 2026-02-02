import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login cu:", email, password);
        
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-blue-50 px-4">
            <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Welcome Back</h2>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Email</label>
                        <input 
                            id="email"
                            type="email" 
                            placeholder="name@example.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                            required
                        />
                    </div>

                   
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-sm font-semibold text-gray-700 ml-1">Password</label>
                        <input 
                            id="password"
                            type="password" 
                            placeholder="••••••••" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                            required
                        />
                    </div>

                    
                    <button 
                        type="submit"
                        className="w-full py-3 bg-blue-800 text-white font-bold rounded-lg shadow-lg hover:bg-blue-900 transition-colors mt-2"
                    >
                        Log In
                    </button>

                    <div className="text-center mt-4">
                        <p className="text-gray-600 text-sm">Don't have an account?</p>
                        <button 
                            type="button" 
                            className="text-blue-800 font-bold hover:underline mt-1"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;