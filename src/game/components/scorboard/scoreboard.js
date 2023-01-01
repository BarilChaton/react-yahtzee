import React from 'react'
import { BsDice1, BsDice2, BsDice3, BsDice4, BsDice5, BsDice6 } from 'react-icons/bs' 

const ScoreBoard = () => {
  return (
    <div className='absolute grid w-[35%] h-[75%] grid-cols-2 border-2 border-black left-2 top-2 bg-gray-100'>
        {/* Aces */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>Aces</h1>
          <BsDice1 className=' '/>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* Twos */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>Twos</h1>
          <BsDice2 className=' '/>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* Threes */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>Threes</h1>
          <BsDice3 className=' '/>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* Fours */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>Fours</h1>
          <BsDice4 className=' '/>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* Fives */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>Fives</h1>
          <BsDice5 className=' '/>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* Sixes */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>Sixes</h1>
          <BsDice6 className=' '/>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* Total Score */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>Total Score</h1>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* Bonus */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>Bonus</h1>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* Section change */}
        <div className='flex col-span-2 border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>Lower section</h1>
        </div>
        {/* Three of a kind */}
        <div className='flex border-2 border-black gap-2 items-center justify-center'>
          <h1 className='font-bold text-mg'>Three of a kind</h1>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* Four of a kind */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-mg'>Four of a kind</h1>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* Fullhouse */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-mg'>Fullhouse</h1>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* SM Straight */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-mg'>SM Straight</h1>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* LG Straight */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-mg'>LG Straight</h1>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* Yahtzee */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-mg'>Yahtzee!</h1>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* Total of lower section */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-sm'>Total of lower section</h1>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* Total of upper section */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-sm'>Total of upper section</h1>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
        {/* GrandTotal */}
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-mg'>Grandtotal</h1>
          <h1 className='font-bold text-lg'>=</h1>
        </div>
        <div className='flex border-2 border-black gap-1 items-center justify-center'>
          <h1 className='font-bold text-lg'>123</h1>
        </div>
      </div>
  )
}

export default ScoreBoard