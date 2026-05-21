import { useNavigate } from "react-router-dom"
import  './Css/Mainpage.css' 
import axios from "axios";
import { useState } from "react";
import {} from 'react-bootstrap-icons'
import LoadingSpinner from "./LoadingSpinner"; 
function TempleExpenditures(){
    let navigate=useNavigate();
    let [data,setData]=useState([])
    let get_url="https://ramalayam-database.onrender.com/templeapi/expensesdetails/"
    axios.get(get_url).then((response)=>{
        setData(response.data)
    })
    return(
        <div>
            <button onClick={()=>navigate("/addexpenditure")}> + Add Expenditure</button>
            <table className="table" >
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>comitteemember</th>
                        <th>type</th>
                        <th>expenditure</th>
                        
                    </tr>
                </thead>
                <tbody>
                 
                  { data.length >=1 ?data?.map((i)=>(
                    <tr>
                        <td>{i.id}</td>
                        <td>{i.comitteemember}</td>
                        <td>{i.expensetype}</td>
                        <td>{i.expenseamount}</td>
                    </tr>
                   )) :<tr><td  colSpan="5"><span style={{marginLeft:"20%"}}></span><LoadingSpinner />Data is loading ...</td></tr>} 

                </tbody>
            </table>
        </div>
    )
}
export default TempleExpenditures;