import React, {useState} from 'react'
import { BsDice1, BsDice2, BsDice3, BsDice4, BsDice5, BsDice6 } from 'react-icons/bs'

const Dice = ({ value, addPosition }) => {

    const [Positions, setPositions] = useState([]);

    let icon = null

    switch (value) {
        case 1:
            icon = <BsDice1/>
            break
        case 2:
            icon = <BsDice2/>
            break
        case 3:
            icon = <BsDice3/>
            break
        case 4:
            icon = <BsDice4/>
            break
        case 5:
            icon = <BsDice5/>
            break
        case 6:
            icon = <BsDice6/>
            break
        default:
            icon = null
    }

    // Check for overlaps
    const checkForOverlaps = (randomPos) => {
        if (Positions.some((pos) => Math.abs(pos.top - randomPos.top) < 15 && 
        Math.abs(pos.left - randomPos.left) < 15)) {
            const newRandomPos = {
                position: 'absolute',
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                transform: `${Math.random() * 360}deg`,
            }

            return checkForOverlaps(newRandomPos)
        } else {
            addPosition(randomPos);
            return randomPos
        }
    }

    const randomPos = checkForOverlaps({
        position: 'absolute',
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
        transform: `${Math.random() * 360}deg`,
    })

    return (
        <div style={randomPos} className='bg-white text-[42px] rounded-xl'>
            {icon}
        </div>
    )
}

export default Dice