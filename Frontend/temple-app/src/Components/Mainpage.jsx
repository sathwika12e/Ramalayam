import './Css/Mainpage.css'
import axios from 'axios'
import { useEffect,useState } from 'react'
import DevotteeDetails from './DevotteeDetails'
import Paymentdetails from './Paymentdetails'
import {Routes,Route} from 'react-router-dom'
import TempleGallery from './TempleGallery'
import AddDevottee from './AddDevottee'
import Collections from './Collections'
import PersonDetailedPayments from './PersonDetailedPayments'
import Events from './Events'
function Mainpage(){
    return(
        <>
        {/* <DevotteeDetails/> */}
        <div  className="mainpage" >
        <Routes>
                     <Route  path='/' element={<Events/>}>  </Route>
            <Route  path='/devottee' element={<DevotteeDetails/>}>  </Route>
            <Route  path='/paymentdetails' element={<Paymentdetails/>}>  </Route>  
            <Route  path='/templegallery' element={<TempleGallery/>}>  </Route>  
            <Route  path='/adddevottee' element={<AddDevottee/>}>  </Route>  
            <Route  path='/collections' element={<Collections/>}>  </Route>  
            <Route  path='/personpayments' element={<PersonDetailedPayments/>}>  </Route>
        </Routes>
        {/* <Paymentdetails/> */}
        </div>
        </>
    )
}
export default Mainpage;