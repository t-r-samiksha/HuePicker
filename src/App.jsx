import Colorpicker from './colorpicker.jsx'
import Imgbox from './imgbox.jsx'
import './main.css'

function App() {
  
  return (
    <>
    <div className="main">
        <h1>Color Picker</h1>
        <Imgbox />
        <Colorpicker />
    </div>
    </>
  );
}

export default App