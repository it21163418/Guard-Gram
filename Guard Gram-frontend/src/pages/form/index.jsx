import { useState } from 'react';
import "./index.css"
import ResultModal from '../../components/ResultModal';
import axios from 'axios';
import { SlLogout } from "react-icons/sl";
import FeedBackComponent from '../../components/FeedBackComponent';
import { CiWarning } from 'react-icons/ci';


export default function Form() {
    const [followerCount, setFollowerCount] = useState('');
    const [followingCount, setFollowingCount] = useState('');
    const [biographyLength, setBiographyLength] = useState('');
    const [mediaCount, setMediaCount] = useState('');
    const [hasProfilePic, setHasProfilePic] = useState(1);
    const [isPrivate, setIsPrivate] = useState(1);
    const [usernameDigitCount, setUsernameDigitCount] = useState('');
    const [usernameLength, setUsernameLength] = useState('');
    const [showResultModal, setShowResultModal] = useState(false);
    const [isFake , setIsFake] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loaded , setLoaded] = useState(false);
    const [sentObj , setSentObj] = useState(null);
    const [showFeedBack , setShowFeedBack] = useState(false);
    const handleSubmit = ()=>{
        setSentObj(
            {
                userFollowerCount: followerCount,
                userFollowingCount: followingCount,
                userBiographyLength: biographyLength,
                userMediaCount: mediaCount,
                userHasProfilPic: hasProfilePic,
                userIsPrivate: isPrivate,
                usernameDigitCount: usernameDigitCount,
                usernameLength: usernameLength
            }
        )
        axios.post('http://localhost:5000/predict', {
            userFollowerCount: followerCount,
            userFollowingCount: followingCount,
            userBiographyLength: biographyLength,
            userMediaCount: mediaCount,
            userHasProfilPic: hasProfilePic,
            userIsPrivate: isPrivate,
            usernameDigitCount: usernameDigitCount,
            usernameLength: usernameLength
        }).then((res) => {
            console.log(res.data);
            setIsFake(!res.data.prediction == "real");
            setShowResultModal(true);
            setLoaded(true);
            setIsLoading(false);
        }).catch((err) => {
            console.log(err);
        });
        
        
    }
    const email = localStorage.getItem('user');
    if (!email&&window.location.pathname!=='/login') {
        window.location.href = '/login';
    }
    return (
        <>   
            {
                isLoading &&
                <div className="fixed  z-[1000] w-[100%] h-[100%] ">
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-[600px] h-[200px] backdrop-blur-xl shadow-xl rounded-md flex flex-col justify-center items-center text-white py-12 ">
                            <div className='min-w-[50px] min-h-[50px] border-t rounded-full border-t-white  animate-spin'>

                            </div>
                        </div>
                    </div>
                </div>
            }
            {
                loaded &&<ResultModal isFake={isFake} show={showResultModal} onClose={() => {                    
                    setShowResultModal(false)
                    setLoaded(false);
                }} openFeedBack={()=>{
                    setShowFeedBack(true);
                    setShowResultModal(false);
                    setLoaded(false);
                }} />   
            }
            {
                showFeedBack && <FeedBackComponent email={email} isFake={isFake} response={sentObj} onClose={()=>{setShowFeedBack(false)}}
                setIsLoading={setIsLoading}
                />
            }
              
            <div className="w-[800px] h-[730px] backdrop-blur-xl shadow-xl rounded-md flex flex-col items-center text-white py-12">

                <SlLogout className='text-4xl text-white cursor-pointer absolute top-4 right-4' onClick={()=>{
                    //confirm
                    if(!confirm('Are you sure you want to logout?'))
                        return;
                    localStorage.removeItem('user');
                    window.location.href = '/login';
                }}/>
                <CiWarning className='text-[42px] text-white cursor-pointer absolute top-4 right-16' onClick={()=>{
                    window.location.href = '/policy';
                }}/>
                <h1 className="text-2xl font-bold"style={{ color: '#fe5c84' }}>Enter Instagram account details</h1>
                <div className="w-[90%] flex flex-col items-start my-2">
                    <label className="text-sm font-semibold">User follower count</label>
                    <input
                        type="text"
                        className="w-full h-[35px] bg-[#00000000] border border-[#4a90e2]"
                        value={followerCount}
                        onChange={(e) => setFollowerCount(e.target.value)}
                    />
                </div>

                <div className="w-[90%] flex flex-col items-start my-2">
                    <label className="text-sm font-semibold">User following count</label>
                    <input
                        type="text"
                        className="w-full h-[35px] bg-[#00000000] border border-[#4a90e2]"
                        value={followingCount}
                        onChange={(e) => setFollowingCount(e.target.value)}
                    />
                </div>

                <div className="w-[90%] flex flex-col items-start my-2">
                    <label className="text-sm font-semibold">User biography length</label>
                    <input
                        type="text"
                        className="w-full h-[35px] bg-[#00000000] border border-[#4a90e2]"
                        value={biographyLength}
                        onChange={(e) => setBiographyLength(e.target.value)}
                    />
                </div>

                <div className="w-[90%] flex flex-col items-start my-2">
                    <label className="text-sm font-semibold">User media count</label>
                    <input
                        type="text"
                        className="w-full h-[35px] bg-[#00000000] border border-[#4a90e2]"
                        value={mediaCount}
                        onChange={(e) => setMediaCount(e.target.value)}
                    />
                </div>

                {/* <div className="w-[90%] flex flex-col items-start my-2">
                    <label className="text-sm font-semibold">User has profile picture</label>
                    <input
                        type="checkbox"
                        checked={hasProfilePic}
                        onChange={(e) => setHasProfilePic(e.target.checked ? 1 : 0)}
                    />
                </div> 
                convert this to select tag*/}
                <div className="w-[90%] flex flex-col items-start my-2">
                    <label className="text-sm font-semibold">User has profile picture</label>
                    <select
                        className="w-full h-[35px] bg-transparent border border-[#4a90e2]"
                        value={hasProfilePic}
                        onChange={(e) => setHasProfilePic(e.target.value)}                >
                        <option className='' value={1}>Yes</option>
                        <option className='' value={0}>No</option>
                    </select>
                </div>


                
                <div className="w-[90%] flex flex-col items-start my-2">
                    <label className="text-sm font-semibold">User is private</label>
                    <select
                        className="w-full h-[35px] bg-transparent border border-[#4a90e2]"
                        value={isPrivate}
                        onChange={(e) => setIsPrivate(e.target.value)}                >
                        <option className='' value={1}>Yes</option>
                        <option className='' value={0}>No</option>
                    </select>
                </div>

                <div className="w-[90%] flex flex-col items-start my-2">
                    <label className="text-sm font-semibold">Username digit count</label>
                    <input
                        type="text"
                        className="w-full h-[35px] bg-[#00000000] border border-[#4a90e2]"
                        value={usernameDigitCount}
                        onChange={(e) => setUsernameDigitCount(e.target.value)}
                    />
                </div>

                <div className="w-[90%] flex flex-col items-start my-2">
                    <label className="text-sm font-semibold">Username length</label>
                    <input
                        type="text"
                        className="w-full h-[35px] bg-[#00000000] border border-[#4a90e2]"
                        value={usernameLength}
                        onChange={(e) => setUsernameLength(e.target.value)}
                    />
                </div>
                <button className="w-[400px] min-h-[35px] bg-[#fe5c84] rounded-md mt-4 hover:border hover:border-[#4a90e2]" onClick={handleSubmit}>Detect account status</button>
            </div>
        </>

    );
}
