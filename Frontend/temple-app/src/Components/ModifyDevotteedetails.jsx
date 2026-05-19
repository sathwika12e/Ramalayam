import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ModifyDevotteedetails() {
  
  let navigate=useNavigate()
    let location = useLocation();
    let data=location?.state.devotteeData
    const[name,setName]=useState(data.name)
  const[land,setLand]=useState(data.land)
   let nameRef=useRef()
    let landRef=useRef()
    let savefun=()=>{
      console.log("data.id",data.id)
      alert("save button clicked")
      let modifieddata={
        "id":data.id,
        "name":nameRef.current.value,
        "land":landRef.current.value
      }
      
      console.log("modifieddata",modifieddata)
      
      let modify_url=`https://ramalayam-database.onrender.com/templeapi/devottee/${data.id}/`
      axios.put(modify_url,modifieddata).then((response)=>{

        console.log(response.data)
        navigate('/devottee')
      }).catch((error)=>{
        console.log(error)
      })

    }
  return (
    <div>
      <h1>Modify Devotteedetails</h1>
      <div>
       <label>Name: <input onChange={(e)=>setName(e.target.value)} ref={nameRef} type="text" value={name}/><br></br><br></br><br></br></label> 
        <label>Land: <input onChange={(e)=>setLand(e.target.value)} ref={landRef} type="number" value={land}/><br></br><br></br><br></br></label>
        <button onClick={savefun}>Save</button>
      </div>
     
    </div>
  );
}
export default ModifyDevotteedetails;