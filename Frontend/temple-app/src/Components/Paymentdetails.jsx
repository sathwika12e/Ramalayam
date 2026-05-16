// http://1:8000/templeapi/paymentdetails/
import './Css/Mainpage.css'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useRef } from 'react'
function Paymentdetails(){
    const [state,setState]=useState(0)
    const [name,setName]=useState();
    const [type,setType]=useState();
   const [persondetails,setPersondetails]=useState([])
    let amtRef=useRef();
    useEffect(()=>{
        let get_url="https://ramalayam-database.onrender.com/templeapi/devottee/"
        axios.get(get_url).then((response)=>{
            setPersondetails(response.data)
           
            console.log(response.data)
           
        })
    },[state])
   
    let submitfun=()=>{
        let userdetails={"type":type,
            "name":name,
            "amt":amtRef.current.value
        }
        console.log(userdetails)
        let post_url="https://ramalayam-database.onrender.com/templeapi/paymentdetails/"
        axios.post(post_url,userdetails).then((response)=>{amtRef.current.value="",setName(""),setType(""),alert('datasubmitted successfully')})

    
    }
    return(
       <div className="paymentdetails-maincontainer">
        <h3>From payments page</h3>
        <select  value={name} onChange={(e)=>{setName(e.target.value)}}>
          <option value="">Select a person</option>
            {persondetails?.map((i)=>(
                <option key={i.id} value={i.id}>
                    {i.name}
                </option>
            ))}
        </select><br></br><br></br>
         <select  value={type} onChange={(e)=>{setType(e.target.value)}}>
          <option value="">Select a type</option>
          <option value="templechanda">templechanda</option>
           <option value="paintings">paintings</option>
           <option value="kavulu">kavulu</option>
        </select><br></br><br></br>
        <input  ref={amtRef} type="number" placeholder='enter amount'/><br></br><br></br>
        <button  onClick={submitfun}>submit</button>
       </div>
    )
}
export default Paymentdetails;