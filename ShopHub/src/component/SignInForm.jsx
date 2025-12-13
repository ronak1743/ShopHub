import React from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';

const SignInForm = () => {
    return (
        <form>
            {/* Email Input */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="email"
                        id="email"
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="you@example.com" 
                    />
                </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        type="password"
                        id="password"
                        placeholder="********"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        defaultValue="********" 
                    />
                </div>
            </div>

            {/* Sign In Button with Blue-Purple Gradient */}
            <button
                type="submit"
                className="w-full flex justify-center items-center py-2 px-4 rounded-lg shadow-lg text-sm font-medium text-white 
                           bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
            </button>
        </form>
    );
};




export default SignInForm;