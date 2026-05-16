
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function AddDevottee(){
    let nameRef=useRef();
    let landRef=useRef();
    let navigate=useNavigate()
    let submitfun=()=>{
        const UserDetails={
            "name":nameRef.current.value,
             "land":landRef.current.value
        }
       let post_url="https://ramalayam-database.onrender.com/templeapi/devottee/"
       axios.post(post_url,UserDetails).then((response)=>{
        nameRef.current.value=""
        landRef.current.value=""
       
       })
        navigate('/devottee')
    }
    return(
        <div>
            <h1>Add - Details</h1>
            <form>
                <label>
                    name :  <input ref={nameRef} type="text" />

                </label><br></br><br></br>
                <label>
                    land  :  <input ref={landRef} type="number" />

                </label><br></br><br></br>
                <button onClick={submitfun}>add</button>
            </form>
        </div>
    )
}
export default AddDevottee;