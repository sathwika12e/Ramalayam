const imageModules = import.meta.glob('../assets/Templeimages/*.{png,jpg,jpeg,svg,gif}', { eager: true })
const photos = Object.values(imageModules).map((module) => module.default)
import './Css/TempleGallery.css'
function TempleGallery(){
    return(
        <div className="first-container" style={{height:"100%"}} >
            <h1 >Temple - Gallery</h1>
            <div className="temple-gallery-container">
                {photos.map((src, index) => (
                    <div key={index} className="each-image-container">
                        <img className="gallery-image" src={src} alt={`Temple ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TempleGallery;   