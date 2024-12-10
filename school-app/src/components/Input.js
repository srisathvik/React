import { useState } from "react"

export default function Input(){
    const[isOTPSent, setIsOTPSent] = useState(false);
    const[isVerified, setIsVerified] = useState(false);
    function handleOTP(e){
        e.preventDefault();
        setIsOTPSent(true);
    }
    function handleVerification(e){
        e.preventDefault();
        setIsVerified(true);
    }
    function handleSubmit(e){
        e.preventDefault();
        const data = new FormData(e.target);
        const formObj = Object.fromEntries(data.entries());
        const date = new Date();
        // console.log(date.toDateString('en-US'));
        // console.log(date.toTimeString("en-US"));
        formObj.entryTime = date.toLocaleTimeString("en-US");
        formObj.entryDate = date.toDateString("en-US");
        formObj.status = "active";
        
        console.log(formObj);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="name">Name: </label>
                    <input type="name" name="name" required />
                </p>
                <p>
                    <label htmlFor="mobile">Mobile:  </label>
                    <input type="mobile" name="mobile" required/>
                    <button onClick={handleOTP}>Send OTP</button>
                </p>
                {isOTPSent && (
                    <p>
                    <label htmlFor="otp">OTP:  </label>
                        <input name="otp" type="number" required/>
                        <button onClick={handleVerification}>Verify</button>
                    </p>
                )}
                <p>
                    <label htmlFor="reason" required>Reason: </label>
                    <textarea name="reason" required></textarea>
                </p>
                <button disabled={!isVerified}>Submit</button>
                
            </form>
        </div>
    )
}