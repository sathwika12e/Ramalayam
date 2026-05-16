import './Css/Mainpage.css'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
function DevotteeDetails(){
    let navigate=useNavigate();
    const [devotees, setDevotees] = useState([])
    const [data,setData]=useState("")
    let [backupdata,setBackupdata]=useState();
    useEffect(()=>{
        let get_url="https://ramalayam-database.onrender.com/templeapi/devottee/"
        axios.get(get_url).then((response)=>{
            setDevotees(response.data)
            backupdata=response.data
            console.log(response.data)    
        })
    },[backupdata])
    return(
        <div className="mainpage">
            <p>Devottee Details</p>
            {/* <input  onChange={(event)=>{setDevotees(backupdata),setData(event.target.value),console.log(event.target.value)}} type="search"/> */}
         
            <button onClick={()=>{navigate('/adddevottee')}}>+Add</button><br></br>
            <div className="tablediv">
                <table className="table" cellSpacing="0" cellPadding="0" border="0">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Name</th>
                            <th>land (in acres)</th>
                        </tr>
                    </thead>
                    <tbody>            
            {devotees?.map((devottee)=>{
                return(                    
                    <tr style={{backgroundColor:"whitesmoke",height:"50px"}}>
                        <td>{devottee.id}</td>
                        <td>{devottee.name}</td>
                        <td>{devottee.land}</td>
                    </tr>               
                )
            })}
             </tbody>
        </table>
        </div>
        </div>
    )
}
export default DevotteeDetails;