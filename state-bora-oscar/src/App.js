import React,{useState} from "react";
import "./components/plain-box.css";

const App = () => { 
  const colorPalette = ["white", "green", "purple", "red", "pink"]
  const[colorIndex, setColorIndex] = useState(0);

  

  const colorSelector = () => {
    let newIndex = colorIndex + 1
      if(newIndex >= 5){
        setColorIndex(0)
      } else{
        setColorIndex(newIndex)
      }
  }
  return (
    <>
    <h1>Color Block:</h1>

    <div className="box" 
    onClick={colorSelector}
    >{colorPalette[colorIndex]}
    </div>

    

    </>
  )

  }
export default App;
