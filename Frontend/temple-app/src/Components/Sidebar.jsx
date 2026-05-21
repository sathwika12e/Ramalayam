import './Css/Sidebar.css'
import { Link } from 'react-router-dom';
function Sidebar(){
    return(
        <div className="sidebar ">
               <Link to="/" > <p>Events</p></Link>
<Link to="/templegallery" > <p>TempleGallery</p></Link>
         <Link to="/devottee" > <p >devoteedetails</p></Link> 
          <Link to="/paymentdetails" > <p>paymentdetails</p></Link>
           <Link to="/collections"><p>Collections</p></Link>
            <Link to="/templeexpenditures"><p>TempleExpenses</p></Link>
        </div>
    )
}
export default Sidebar;