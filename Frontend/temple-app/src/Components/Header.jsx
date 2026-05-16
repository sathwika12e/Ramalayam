import RamImage from '../assets/ramimage.webp';
import natureImage from '../assets/nature-header.webp'
import ramheaderimage from '../assets/ram headerimagecopy.jpg'
import templevigrahas from '../assets/Templeimages/templevigrahas.jpeg'

import './Css/Header.css'
function Header(){
    return(
        <div className="header-conatainer" style={{display:"flex",alignItems:"center",justifyContent:"space-around",backgroundImage:`url(${natureImage})`,backgroundSize:"cover",height:"10vh",paddingBottom:"9px"}}>
            
            <img className="image1" src={templevigrahas}/>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",height:"100%",width:"50%",fontSize:"1.5vh"}}>
             <p style={{color:"orangered",fontWeight:"900"}}>జై శ్రీరాం </p>
            <p className="para">శ్రీ కోదండరామస్వామి ఆలయం </p>
             <p className="para"> బోయలపాడు </p>
             </div>
       <img className="image2" src={"https://th.bing.com/th/id/OIP.1EAvvI1dq4z7Qh0zvkN1ggHaHa?w=175&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"}/>
        </div>
    )
}
export default Header;