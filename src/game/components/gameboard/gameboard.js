import React, { useState } from 'react'
import { BsDice1, BsDice2, BsDice3, BsDice4, BsDice5, BsDice6 } from 'react-icons/bs'

import Scoreboard from '../scorboard/scoreboard';
import Dice from '../dice/dice'

const GameBoard = () => {
  const [positions, setPositions] = useState([]);

  const addPosition = (randomPos) => {
    setPositions([...positions, randomPos]);
  };

  return (
    <div className='relative w-[50%] h-screen bg-green-700'>
      <Scoreboard />

      {/* Dice area */}
      <div id='DiceArea' className='absolute top-2 right-2 w-[60%] h-3/4 border-4 border-black'>
        <Dice value={1} addPosition={addPosition}/>
        <Dice value={2} addPosition={addPosition}/>
        <Dice value={3} addPosition={addPosition}/>
        <Dice value={4} addPosition={addPosition}/>
        <Dice value={5} addPosition={addPosition}/>
      </div>
    </div>
  );
}

export default GameBoard