import './Css/Mainpage.css'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingSpinner from './LoadingSpinner'
function DevotteeDetails(){
    let count=0
    let navigate=useNavigate();
    const [devotees, setDevotees] = useState([])
    const [data,setData]=useState("")
    //   const [count,setCount]=useState(0)
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
            <p>This is only sampledata</p>
            {/* <input  onChange={(event)=>{setDevotees(backupdata),setData(event.target.value),console.log(event.target.value)}} type="search"/> */}
         
            <button style={{borderRadius:"1vh",backgroundColor:"#0FFF3066",border:"2px solid white"}} onClick={()=>{navigate('/adddevottee')}}>+Add</button><br></br>
            <div className="tablediv">
                <table className="table" cellSpacing="0" cellPadding="0" border="0">
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>Name</th>
                            <th>land (in acres)</th>
                            <th>modify data</th>
                        </tr>
                    </thead>
                    <tbody>            
            {devotees.length>=1?devotees?.map((devottee)=>{
              count+=1
console.log(count)
                return(      
                               
                    <tr style={{backgroundColor:"whitesmoke",height:"50px"}}>
                        <td>{count}</td>
                        <td>{devottee.name}</td>
                        <td>{devottee.land}</td>
                        <td onClick={()=>navigate('/modifydevotteedetails', { state: { devotteeData: devottee } })} style={{color:"blue"}}>modify</td>
                           </tr>               
                )
            }):<tr><td colSpan="5"> <span style={{marginLeft:"20%"}}></span><LoadingSpinner/>Data is loading...</td></tr>}
             </tbody>
        </table>
        </div>
        </div>
    )
}
export default DevotteeDetails;