import './App.css';
import DiceNumbers from './Components/DiceNumbers';
// plans for the dice game //
  // 1. In css we'll crate a class
  // 2. In said class well square box with black borders and white background
  // 3. Crate classname Dice , relate the dice to the asset 
  // 4. crate onclick for classname dice to see the result of the roll
  // 5. crate a roll log I can see my roll logged and see the roll log continue to grow as I roll the dice.

const App = () => {
  const diceNumber = ["1","2", "3" ,"4", "5", "6"]
  
  return (
    <div className="Diceroller">
    </div>
  );
}

<DiceNumbers/>
export default App;
