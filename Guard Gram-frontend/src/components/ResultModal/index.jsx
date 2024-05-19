import logo from '../../assets/logo.jpg'
import PropTypes from 'prop-types'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdError } from "react-icons/md";
import './index.css'
export default function ResultModal({isFake , onClose , openFeedBack}){
    return (
        <div className="fixed  z-[100] w-[100%] h-[100%] " >
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[600px] h-[400px] backdrop-blur-xl shadow-xl rounded-md flex flex-col justify-center items-center text-white py-12 result-div">
                    <div className='w-full flex flex-row justify-center items-center mb-10'>
                        <img src={logo} alt="logo" className="w-[60px] h-[60px] mx-4"/>
                        <h1 className="text-3xl font-bold">Guardgram Result</h1>
                    </div>
                    {
                        isFake ? 
                        <div className='w-full flex flex-row justify-center items-center '>
                            <h1 className="text-3xl font-bold mr-4">Account Is Fake!</h1>
                            <MdError className="text-3xl text-[#e74c3c]"/>
                        </div>
                        :
                        <div className='w-full flex flex-row justify-center items-center'>
                            <h1 className="text-3xl font-bold mr-4">Account Is Real!</h1>
                            <IoCheckmarkDoneCircle className="text-3xl text-[#f04eff]"/>                     

                        </div>
                    }
                    <button className="w-[300px] h-[40px] mt-4 mb-4 bg-[#fe5c84] text-white rounded-md" onClick={()=>{
                        openFeedBack()
                    }
                    }>Provide Feedback</button>
                    <button className="w-[300px] h-[40px] mt-4 mb-4 bg-[#34495e] text-white rounded-md" onClick={()=>{
                        onClose();
                    }}>Close</button>
                    
                   
                </div>

            </div>
        </div>
    )
}

ResultModal.propTypes = {
    isFake: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    openFeedBack: PropTypes.func.isRequired
}
