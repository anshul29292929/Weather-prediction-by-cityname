import { useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState('initialColor');

  const changeBgColor = (newColor) => {
    document.body.style.backgroundColor = newColor;
  };

  return (
    <>
      <div className="anshul inset-x-0 px-2 fixed flex-wrap">
        <button className="btn_1" onClick={() => { setColor('green'); changeBgColor('green'); }}>
          Green
        </button>
        <button className="btn_1" onClick={() => { setColor('blue'); changeBgColor('blue'); }}>
          Blue
        </button>
        <button className="btn_1" onClick={() => { setColor('red'); changeBgColor('red'); }}>
          Red
        </button>
        <button className="btn_1" onClick={() => { setColor('purple'); changeBgColor('purple'); }}>
          Purple
        </button>
        <button className="btn_1" onClick={() => { setColor('black'); changeBgColor('black'); }}>
          Black
        </button>
        <button className="btn_1" onClick={() => { setColor('white'); changeBgColor('white'); }}>
          White
        </button>
        <button className="btn_1" onClick={() => { setColor('yellow'); changeBgColor('yellow'); }}>
          Yellow
        </button>
      </div>
    </>
  );
}

export default App;


