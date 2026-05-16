import { useLocation } from "react-router-dom"
import './Css/persondetailedpayments.css'
import { useNavigate } from "react-router-dom"
function PersonDetailedPayments(){
    let navigate=useNavigate()
     const location = useLocation()
  const personData = location.state?.personData
  console.log("Received person data:", personData)
    return(
        <div>
            <h1>{personData.name.name}   - Detailed Payments</h1>
            {personData.amtpaiddetails?.map((payment)=>(
                <div className="payment-item" key={payment.id}>
                    <p>Amount Paid: {payment.amt}</p>
                    <p>Type:{payment.type}</p>
                    <p>Date: {payment['date-time'
]}</p>
                </div>
            ))}
        <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    )
}
export default PersonDetailedPayments;