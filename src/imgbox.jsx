import { useState } from "react"
import './imgdisp.css'

function Imgbox(){

    const [img,setimg] = useState(null);

    function imghandler(event){
        const file = event.target.files[0];
        if(file){
            const imgurl = URL.createObjectURL(file)
            setimg(imgurl)
        }
        
    }

    return(
        <>
            <input type="file" accept='image/*' onChange={imghandler} />
            <div className="imgdisp">
                {img&&(<img src={img} />)}
            </div>
            
        </>
    )
}
export default Imgbox