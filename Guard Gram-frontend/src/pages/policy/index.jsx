import { BiHomeCircle } from "react-icons/bi";

export default function PolicyPage(){
    return(
        <div className="w-full h-full flex justify-center items-center relative">
            <BiHomeCircle className="absolute z-[1000] right-[300px] text-[#fe5c84] top-[100px] text-4xl cursor-pointer" onClick={()=>{
                window.location.href = '/';
            }}/>
                  <div className="w-[80%] text-center backdrop-blur-xl shadow-xl rounded-md flex flex-col justify-center items-center text-[#4a90e2] py-12 result-div">
            <h1 className="text-2xl font-bold my-8" style={{ color: '#fe5c84' }}>Privacy Policy</h1>  
            This privacy policy outlines how we collect, use, and protect your data when you use our applications and services. We are committed to safeguarding your privacy and ensuring the security of your personal information. Please read this policy carefully to understand our practices regarding your data.
            <label className="my-4"></label>
            <div className="text-left flex flex-col">
                1. Collection of Data
                We may collect certain categories of data when you use our applications and services. The specific data collected may vary depending on the product, purpose, and your location. We may collect personal data such as your name, email address, and other relevant information necessary for providing our services.
                <label className="my-2"></label>
                2. Use of Data
                We use the collected data for the following purposes:
                Providing and improving our applications and services
                Personalizing your user experience
                Communicating with you, including sending notifications and alerts
                Analyzing usage patterns and trends to enhance our offerings
                Complying with legal obligations and protecting our rights
                <label className="my-2"></label>
                3. Data Protection and Security
                We take appropriate measures to protect your data from unauthorized access, alteration, disclosure, or destruction. We implement industry-standard security practices and regularly review our security measures to ensure the integrity and confidentiality of your data.
                <label className="my-2"></label>
                4. Data Sharing and Third Parties
                We may share your data with trusted third-party service providers who assist us in delivering our applications and services. These third parties are contractually obligated to handle your data securely and only for the purposes specified by us.
                <label className="my-2"></label>
                5. Child Privacy
                Our applications and services are not intended for children under the age of 13. We do not knowingly collect personal information from children without parental consent. If you believe that we have inadvertently collected personal information from a child, please contact us immediately.
                <label className="my-2"></label>
                6. Changes to the Privacy Policy
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes via our website or in-app notifications. We encourage you to review this policy periodically.
                <label className="my-2"></label>
                7. Your Rights
                You have certain rights regarding your personal data, including the right to access, correct, or delete your data. If you have any questions or requests regarding your data. Please contact us at
            </div>
        </div>
    </div>
    )
}
