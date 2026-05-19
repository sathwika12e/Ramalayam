import { useLocation } from "react-router-dom"
import './Css/persondetailedpayments.css'
import { useNavigate } from "react-router-dom"
import {TrashFill} from 'react-bootstrap-icons'
import axios from "axios"
function PersonDetailedPayments(){
    let navigate=useNavigate()
     const location = useLocation()
  const personData = location.state?.personData
  console.log("Received person data:", personData)
//   let deletefun=(payment)=>{
//     delete_url='`https://ramalayam-database.onrender.com/templeapi/devottee/${data.id}/`'
//     axios.delete('')

//   }
    return(
        <div>
            <h1>{personData.name.name}   - Detailed Payments</h1>
            {personData.amtpaiddetails?.map((payment)=>(
                <div  className="payment-item" key={payment.id}>
                    <p>Amount Paid: {payment.amt}</p>
                    <p>Type:{payment.type}</p>
                    <p>Date: {payment['date-time']}</p>
                      <p><TrashFill color="blue" size={15} />del</p>
                </div>
            ))}
        <button onClick={()=>navigate(-1)}>Back</button>
        </div>
    )
}
export default PersonDetailedPayments;