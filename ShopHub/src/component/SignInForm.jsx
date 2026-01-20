import React, { useState } from 'react';
import { Mail, Lock, LogIn } from 'lucide-react';
import { useUser } from '../context/UserContext';

const SignInForm = () => {
    const { login } = useUser();


    const [data,setData]=useState({
        email:'',
        password:'',
    })

    const update=(e)=>{
        const { name, value } = e.target;
        setData(p=>({
            ...p,
            [name]:value,
        }));
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const dataToSend={
            ...data,
        };

        try{
            const response = await fetch("https://shophub-production-82e2.up.railway.app/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include", 
                body: JSON.stringify(dataToSend),
            });

            if (response==null) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();

            if(result['resp']){
                console.log("ans",result);
                login({
                    name: result.name,
                    role: result.role,
                    email: result.email,
                });
               
            }
            else{
                console.log("some err ",result['msg']);
            }

        }
        catch(err){
            console.log('Error:',err);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        name='email'
                        value={data.email}
                        onChange={update}
                        type="email"
                        id="email"
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                         
                    />
                </div>
            </div>

            
            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                        name='password'
                        onChange={update}
                        value={data.password}
                        type="password"
                        id="password"
                        placeholder="********"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                         
                    />
                </div>
            </div>

            
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