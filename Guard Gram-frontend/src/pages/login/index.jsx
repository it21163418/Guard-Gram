import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const handleSubmit = () => {
        setIsLoading(true);
        axios.post('http://localhost:5000/login', {
            email: email,
            password: password,
        }).then((res) => {
            console.log(res.data);
            setIsLoading(false);
            //save user in localstorage
            localStorage.setItem('user', email);
            navigate('/form');
            // Redirect to home page or dashboard
        }).catch((err) => {
            console.log(err);
            setIsLoading(false);
            alert("Login failed");
        });
    }

    return (
        <>
            {
                isLoading &&
                <div className="fixed  z-[100] w-[100%] h-[100%] ">
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-[600px] h-[200px] backdrop-blur-xl shadow-xl rounded-md flex flex-col justify-center items-center text-white py-12 ">
                            <div className='min-w-[50px] min-h-[50px] border-t rounded-full border-t-[#fe5c84] animate-spin'>

                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="w-[500px] backdrop-blur-xl shadow-xl rounded-md flex flex-col items-center text-[#4a90e2] py-12">
                <h1 className="text-2xl font-bold mb-8">Welcome Back!</h1>
                
                <div className="w-[90%] flex flex-col items-start my-2">                    
                    <input
                        type="email"
                        className="w-full h-[50px] p-[10px] bg-transparent border border-[#4a90e2] placeholder-[#4a90e2]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Your Email address'
                    />
                </div>
                
                <div className="w-[90%] flex flex-col items-start my-2">
                    <input
                        type="password"
                        className="w-full h-[50px] p-[10px] bg-transparent border border-[#4a90e2] placeholder-[#4a90e2]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                    />
                </div>
                
                <button className="w-[90%] min-h-[35px] bg-[#fe5c84] rounded-sm h-[40px] mt-4 hover:border hover:border-[#9e4457]" style={{ color: '#ffffff' }}onClick={handleSubmit}>Login</button>
                {/*  */}
                <div className="w-[90%] h-[50px] flex flex-col justify-evenly items-start mt-4">
                    <a href="/register" className="text-sm font-semibold hover:border-b-2 hover:border-[#fe5c84]">Create an account</a>
                    <a href="/forget" className="text-sm font-semibold hover:border-b-2 hover:border-[#fe5c84]">Forgot Password?</a>
                </div>
            </div>
        </>
    );
}
