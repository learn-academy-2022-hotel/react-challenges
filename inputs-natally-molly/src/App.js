import React from 'react';
import GoodRobot from './components/GoodRobot';
import BadRobot from './components/BadRobot';
import SantaClaus from './components/SantaClaus';
import { useState } from 'react';
import './App.css';

// PSEUDOCODE
// Create a function called userInput
//input: string of user text
//output: altarnated string according to robots
// 

const App= () => {


  const [text, setText]= useState("")


const handleChange = (e) => {
  setText(e.target.value)
  console.log(e)
}



  return (
    <>
 
      <h1>Robot Active listening!</h1>
      <input
      type = "text"
      onChange={handleChange}
      value={text}

      />
 
      <GoodRobot/>
      <BadRobot/>
      <SantaClaus/>
 
 
    </>
  );
}

export default App;
