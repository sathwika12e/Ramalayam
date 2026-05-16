import axios from "axios"
import { useEffect,useState } from "react"
import './Css/Mainpage.css'
import { useNavigate } from "react-router-dom"
function Collections(){
    const [data,setData]=useState([])
    let navigate=useNavigate()
    useEffect(()=>{
        let get_url="http://127.0.0.1:8000/templeapi/paymentdetails/"
        axios.get(get_url).then((response)=>{
            setData(response.data)
            console.log(response.data)
        })
    },[])
     let sum=0
    return(
        <div>
            <p>From Collections Page</p>
            
        <table className="table table-striped table-hover" style={{width:"80%",margin:"auto",marginTop:"50px"}}>
                    <thead>
                        <tr>
                            {/* <th>NO</th> */}
                            <th>Name</th>
                            <th>land (in acres)</th>
                            <th>Total to Pay (1000 /-)per acre</th>
                            <th>Paid till Now</th>
                            <th>need to pay</th>
                        </tr>
                    </thead>
                      <tbody>            
            {data?.map((i)=>{
                sum=i.amtpaiddetails.map((each)=>each.type==="paintings"?each.amt:"").reduce((a,b)=>a+b)
               console.log('from sum',sum)
                return(   
                                   
                    <tr onClick={() => navigate("/personpayments", { state: { personData: i } })} style={{backgroundColor:"whitesmoke",height:"50px"}}>
                        <td>{i.name.name}</td>
                        <td>{i.name.land} acres</td>
                        <td>{(i.name.land<=3)?3000:((i.name.land)*(i.amtperacre))}</td>
                        <td>{sum}</td>
                        <td>{((i.name.land)*(i.amtperacre))-sum}</td>

                    </tr>               
                )
            })}
             </tbody>
                  
        </table>
        </div>
    )
}
export default Collections;