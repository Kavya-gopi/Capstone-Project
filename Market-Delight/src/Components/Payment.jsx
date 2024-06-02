import React from "react";
import FakePaymentImage from "../assets/FakePayment.jpg";
// import Form from 'react-bootstrap/Form';


const Payment =()=>{
    return(
        <>

        <div>
            <p className="text-center fw-bold">Pay Here</p>
            <div>
                <img src={FakePaymentImage} className="center"/>
            </div>
        </div>

        </>
    
        

        
        
    )
}

export default Payment;