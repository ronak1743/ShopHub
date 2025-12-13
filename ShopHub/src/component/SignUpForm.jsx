import React from 'react';
import { User as UserIcon, Mail, Lock } from 'lucide-react';

const SignUpForm = () => {
    return (
        <form>
            {/* Full Name Input with Icon */}
            <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="text" id="fullName" placeholder="John Doe" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
            </div>

            {/* Email Input with Icon */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="email" id="email" placeholder="you@example.com" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                </div>
            </div>

            {/* Password Input with Icon */}
            <div className="mb-6">
                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                 <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input type="password" id="password" placeholder="********" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                 </div>
            </div>

            {/* Role Selection */}
            <div className="mb-6">
                <p className="block text-sm font-medium text-gray-700 mb-3">I want to:</p>
                <div className="space-y-3">
                    <label className="flex items-center cursor-pointer">
                        <input type="radio" name="role" value="shop" className="form-radio h-4 w-4 text-blue-600" defaultChecked />
                        <span className="ml-3 text-sm text-gray-700">Shop products</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                        <input type="radio" name="role" value="sell" className="form-radio h-4 w-4 text-blue-600" />
                        <span className="ml-3 text-sm text-gray-700">Sell products</span>
                    </label>
                </div>
            </div>

            {/* Create Account Button with Blue-Purple Gradient */}
            <button
                type="submit"
                className="w-full flex justify-center items-center py-2 px-4 rounded-lg shadow-lg text-sm font-medium text-white 
                           bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Create Account
            </button>
        </form>
    );
};

export default SignUpForm;