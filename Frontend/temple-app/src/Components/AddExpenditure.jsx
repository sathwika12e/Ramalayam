import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
function AddExpenditure(){
    const [committee,setCommittee]=useState("")
    let comitteemember=useRef();
    let typeRef=useRef();
    let amtRef=useRef();
    let submitfun=()=>{
       const details={
        "comitteemember":committee,
            "expensetype":typeRef.current.value,
            "expenseamount":amtRef.current.value
        }
        let post_url="https://ramalayam-database.onrender.com/templeapi/expensesdetails/"
        axios.post(post_url,details).then((response)=>{
            console.log(details)
            typeRef.current.value=""
            amtRef.current.value=""
            alert('data inserted successfully')
        })
    }
    return(
        <div>
            <h1>from add expenditure</h1>
            <div >
                <select onChange={(e)=>{setCommittee(e.target.value),console.log(e.target.value)}}  value={committee}>
                        <option value="">Select Committee Member</option>
                     <option value="vemiReddy srinivasulreddy & Bade VeeraraghavaReddy"> vemiReddy srinivasulreddy & Bade VeeraraghavaReddy</option>
                      <option value="Munagala Papireddy & Janapala MalyadriReddy">Munagala Papireddy & Janapala MalyadriReddy</option>
                      <option value="Kota Ramireddy & Gunupati Prabhakarreddy">Kota Ramireddy & Gunupati Prabhakarreddy</option>
                </select>   <br></br><br></br>
                <input placeholder="expensetype" ref={typeRef} type="text"/><br></br><br></br>
                <input placeholder="amount" ref={amtRef} type="number"/><br></br><br></br>
                <button onClick={submitfun}>Submit</button>
            </div>
        </div>
    )
}
export default AddExpenditure;