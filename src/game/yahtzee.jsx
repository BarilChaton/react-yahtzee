import React, { useState } from 'react'

function Yahtzee(props) {
    const [ dice, setDice ] = useState([1, 2, 3, 4, 5])
    const [ scores, setScores ] = useState({})
    
    return (
        <div>
            <div>
                {dice.map((die) => (
                    <div>{die}</div>
                ))}
            </div>
            <table>
                <tbody>
                    {Object.entries(scores).map(([category, score]) => (
                        <tr>
                            <td>{category}</td>
                            <td>{score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}