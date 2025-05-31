import React , {useState} from "react"
import './colorpicker.css'

function Colorpicker(){
    const [color,setColor]=useState('black');

    function changecolor(e){
        setColor(e.target.value);
    }

    function handlecopy(e){
        navigator.clipboard.writeText(color).then(()=>{
            alert(`Color copied: ${color}`)
        })
    }

    return(
        <>
        <div class="box">
            
            <div id="colorpicker-container" style={{backgroundColor: color}} onClick={handlecopy} >
                <p>You picked: {color}</p>
            </div>
            <p className="pic-p">Pick a color: </p>
            <input type="color" onChange={changecolor} value={color} />
        </div>
        </>
    )
}
export default Colorpicker