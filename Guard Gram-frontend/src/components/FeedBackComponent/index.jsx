import axios from 'axios';
import PropTypes from 'prop-types';
import { useState } from 'react';
export default function FeedBackComponent({onClose , response ,isFake , email , setIsLoading}){
    const [isCorrect , setIsCorrect] = useState(true);
    const [feedback , setFeedback] = useState('');
    return (
        <div className="fixed  z-[100] w-[100%] h-[100%] " >
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[600px]  backdrop-blur-xl shadow-xl rounded-md flex flex-col justify-center items-center text-white py-12 result-div">
                    <h1 className="text-2xl font-bold">How was the response?</h1>
                    <select className="w-[300px] h-[50px] mt-4 mb-4 bg-transparent text-white rounded-md border border-[#4a90e2]" onChange={(e)=>{
                        setIsCorrect(e.target.value);
                    }}>
                        <option value={true}>Correct</option>
                        <option value={false}>Incorrect</option>
                    </select>
                    <textarea className="w-[300px] h-[100px] mt-4 mb-4 bg-transparent text-white rounded-md p-2 border border-[#4a90e2]" value={feedback} placeholder="Enter your feedback here" onChange={(e)=>{
                        setFeedback(e.target.value);
                    }
                    }></textarea>
                    
                    <button className="w-[300px] h-[40px] mt-4 mb-4 bg-[#fe5c84] text-white rounded-md" onClick={()=>{
                        if(!feedback){
                            alert('Please provide feedback');
                            return;
                        }
                        setIsLoading(true);
                        axios.post('http://localhost:5000/feedback', {
                            input: response,
                            feedbackData: {
                                response: isFake?"fake":"real",
                                isCorrect: isCorrect,
                                feedback: feedback,
                                email: email
                            }
                        }).then((res) => {
                            console.log(res);
                            alert('Feedback sent successfully. Thank you!');
                            setIsLoading(false);
                            onClose();
                        }).catch((err) => {
                            console.log(err);
                            setIsLoading(false);
                            alert('An error occurred');
                        });
                    }
                    }>Provide Feedback</button>
                    <button className="w-[300px] h-[40px] mt-4 mb-4 bg-[#2c3e50] text-white rounded-md" onClick={()=>{
                        onClose();
                    }}>Close</button>
                    
                    
                </div>

            </div>
        </div>
    )
}
FeedBackComponent.propTypes = {
    onClose: PropTypes.func,
    response: PropTypes.object,
    isFake: PropTypes.bool,
    email: PropTypes.string,
    setIsLoading: PropTypes.func
}
