import axios from "axios";
import { useState } from "react"

export default function ForgetPWPage(){
    const [email, setEmail] = useState('');
    const [code , selectCode] = useState(-999);
    const [enteredCode, selectEnteredCode] = useState("");
    const [codeMatched, selectCodeMatched] = useState(false);
    const [password , selectPassword] = useState('');
    const [confirmPassword, selectConfirmPassword] = useState('');
    return (
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="w-[400px] backdrop-blur-xl shadow-xl rounded-md flex flex-col justify-center items-center py-10 text-white">
                <h1 className="text-3xl font-bold">Forget Password</h1>
                <input type="email" placeholder="Email" className="w-[300px] h-[40px] border-2 bg-transparent border-[#4a90e2] rounded-md px-4 my-4"
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value);
                }}/>
                <button className="w-[300px] h-[40px] bg-[#fe5c84] text-white rounded-md" onClick={()=>{
                    if(email === ''){
                        alert('Please enter your email');
                        return;
                    }
                    axios.post('http://localhost:5000/forget',{
                        email: email
                    }).then((res)=>{
                        console.log(res.data);
                        selectCode(res.data.code);
                        alert('Email sent successfully');
                    }).catch((err)=>{
                        console.log(err);
                        alert('Email sending failed');
                    })
                }}>Send Email</button>
                            {/* input code page */}
                <div className="w-[300px] h-[200px] flex flex-col justify-center items-center">
                    <input type="number" placeholder="Code" className="w-[300px] h-[40px] border-2 bg-transparent border-[#4a90e2] rounded-md px-4 my-4"
                    value={enteredCode}
                    onChange={(e)=>{
                        selectEnteredCode(e.target.value);
                    }}/>
                    <button className="w-[300px] h-[40px] bg-[#fe5c84] text-white rounded-md" onClick={()=>{
                        if(code === -999){
                            alert('Please enter the code');
                            return;
                        }
                        if(code != enteredCode){
                            alert('Code does not match');
                            return;
                        }
                        selectCodeMatched(true);
                    }}>Verify Code</button>
                    <button className="w-[300px] h-[40px] mt-4 mb-4 bg-[#34495e] text-white rounded-md" onClick={()=>{
                        window.location = '/login';
                    }
                    }>Cancel</button>
                    {
                        codeMatched &&
                        <>
                            <input type="password" placeholder="Password" className="w-[300px] h-[40px] border-2 bg-transparent border-[#4a90e2] rounded-md px-4 my-4"
                            value={password}
                            onChange={(e)=>{
                                selectPassword(e.target.value);
                            }}/>
                            <input type="password" placeholder="Confirm Password" className="w-[300px] h-[40px] border-2 bg-transparent border-[#4a90e2] rounded-md px-4 my-4"
                            value={confirmPassword}
                            onChange={(e)=>{
                                selectConfirmPassword(e.target.value);
                            }}/>
                            <button className="w-[300px] h-[40px] bg-[#fe5c84] text-white rounded-md" onClick={()=>{
                                if(password === '' || confirmPassword === ''){
                                    alert('Please enter your password');
                                    return;
                                }
                                if(password !== confirmPassword){
                                    alert('Passwords do not match');
                                    return;
                                }
                                axios.post('http://localhost:5000/change',{
                                    email: email,
                                    password: password
                                }).then((res)=>{
                                    console.log(res.data);
                                    alert('Password changed successfully');
                                }).catch((err)=>{
                                    console.log(err);
                                    alert('Password changing failed');
                                })
                            }}>Change Password</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}
