import { useState } from 'react';
import "./index.css"
import axios from 'axios';

export default function RegisterPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = () => {
        //match passwords
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        setIsLoading(true);
        axios.post('http://localhost:5000/register', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            password: password,
            confirmPassword: confirmPassword
        }).then((res) => {
            console.log(res.data);
            setIsLoading(false);
            alert("User registered successfully")
            window.location.href = '/login';
        }).catch((err) => {
            console.log(err);
            setIsLoading(false);
            alert("User registration failed")
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
                <h1 className="text-2xl font-bold mb-8" style={{ color: '#fe5c84' }}>Welcome To Instaguard</h1>
                <div className="w-[90%] flex justify-between flex-row items-start my-2 ">
                    <input
                        type="text"
                        className="w-[200px] h-[50px] p-[10px] bg-transparent border border-[#4a90e2]"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='First Name'
                    />
                    <input
                        type="text"
                        className="w-[200px] h-[50px] p-[10px] bg-transparent border border-[#4a90e2]"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Last Name'
                    />
                </div>
                <div className="w-[90%] flex flex-col items-start my-2">                    
                    <input
                        type="email"
                        className="w-full h-[50px] p-[10px] bg-transparent border border-[#4a90e2]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Your Email address'
                    />
                </div>
                <div className="w-[90%] flex flex-col items-start my-2">
                    <input
                        type="text"
                        className="w-full h-[50px] p-[10px] bg-transparent border border-[#4a90e2]"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder='Phone Number'
                    />
                </div>
                <div className="w-[90%] flex flex-col items-start my-2">
                    <input
                        type="text"
                        className="w-full h-[50px] p-[10px] bg-transparent border border-[#4a90e2]"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder='Address'
                    />
                </div>
                <div className="w-[90%] flex flex-col items-start my-2">
                    <input
                        type="password"
                        className="w-full h-[50px] p-[10px] bg-transparent border border-[#4a90e2]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                    />
                </div>
                <div className="w-[90%] flex flex-col items-start my-2">
                    <input
                        type="password"
                        className="w-full h-[50px] p-[10px] bg-transparent border border-[#4a90e2]"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder='Confirm Password'
                    />
                </div>
                <button className="w-[90%] min-h-[35px] bg-[#fe5c84] rounded-sm h-[40px] mt-4 hover:border hover:border-[#994769]" onClick={handleSubmit} style={{ color: '#ffffff' }}>Sign Up</button>
                <div className="w-[90%] h-[50px] flex flex-col justify-evenly items-start mt-4">
                    <p>Already have an account? <span className="text-[#fe5c84] cursor-pointer" onClick={()=>{
                        window.location.href='/login'
                    }} >Login</span></p>
                </div>
            </div>
        </>
    );
}
