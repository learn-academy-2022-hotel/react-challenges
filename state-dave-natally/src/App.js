import React from 'react'
import SquareButton from './components/SquareButton'

const App = () => { 
  return (
    <>
      <h2> Color Box</h2>
      <button style={{
          height: "100px", 
          width: "100px" , 
          borderColor: "black", 
          backgroundColor: "white", 
          marginRight: "20 px"}}></button><br></br><br></br>

      <button style={{
          height: "100px", 
          width: "100px", 
          borderColor: "black", 
          backgroundColor: "white"}}> White </button>
    </>
  )
}
<br></br>

const btn = document.getElementById('btn')

let index = 0

const colors = [red, orange, yellow, green, blue, purple, pink]

btn.addEventListener('click', function onClick() {
    btn.style.backgroundColor = colors[i];
    btn.style.color = 'white';

    index - index >= colors.length - 1 ? 0 : index + 1;
})


export default App;