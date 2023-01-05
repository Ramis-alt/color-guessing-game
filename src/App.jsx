import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isWrongSelection, setIsWrongSelection] = useState(false)
  
  const pickColor = () => {
    const actualColor = getRandomColor();
    //this generates a random color, actualColor will be our correct answer 
    setColor(actualColor);
    setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random())); //sort the order in random
  }


  const getRandomColor = () => {
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

    const color = new Array(6).fill("").map(() => digits[Math.floor(Math.random() * digits.length)]).join(""); // generating a random number

    return `#${color}`;
  };



  useEffect(() => {
    pickColor();
  }, []);

  function handleClick(answer) {
    if (answer === color) {
      //right answer
      alert('CORRECT!!')
      setIsWrongSelection(false)
      pickColor();
    } else {
      //wrong answer
      setIsWrongSelection(true)
    }
  }
  
  return (
    <div className="App">
      <div className='col'>
        {isWrongSelection && <div className='wrong-answer'>Wrong Wrong 🤦🏻!</div>}
        <div className='guess-me' style={{ background: color }}></div>
        {answers.map(answer => (
          <button onClick={() => handleClick(answer)} key={answer}>{answer}</button>
        ))}
      </div>
    </div>
  )
}

export default App
