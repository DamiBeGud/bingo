import React from 'react'
import { useState,useEffect } from "react";



function Numbers({numbers, addNumber,winingNumbers}) {
    const [gameCount, setGameCount] = useState(0)

    const [localNumbers, setLocalNumbers] = useState()

    const [top6, setTop6] = useState()
    const [top10, setTop10] = useState()
    
    function onClikcAdd(e){
        let mapID = e.target.id
        addNumber(mapID)
        e.target.disabled = true
    }

    function getTopNObjects(map, n) {
        // Create an array from the map entries
        const entries = Array.from(map.entries());
      
        // Sort the array based on count in descending order
        entries.sort((a, b) => b[1].count - a[1].count);
      
        // Take the first n entries
        const topNEntries = entries.slice(0, n);
      
        // Create a new map from the top entries
        const topNMap = new Map(topNEntries);
      
        return topNEntries;
      }
    useEffect(()=>{
        setLocalNumbers(numbers)
        localNumbers?.forEach(element => {
            let btn = document.getElementById(`num${element}`)
            if(btn.disabled === true){
                btn.disabled = false
            }
        });
        setTop6(getTopNObjects(winingNumbers, 6))
        setTop10(getTopNObjects(winingNumbers, 10))
    },[gameCount])
    
    const numbersRenderer = localNumbers?.map(number=>{
        // console.log("rerender run")
        return (<button id={'num' + number} value={number} onClick={(e)=>onClikcAdd(e)} key={number}>{number + 1}</button>)
    })
    const renderTop6 = top6?.map(number => {
        return (
            <div>
                <p>{number[1].number} = {(number[1].count / gameCount) * 100}%</p>
            </div>
        )
    })
    const renderTop10 = top10?.map(number => {
        return (
            <div>
                <p>{number[1].number} = {(number[1].count / gameCount) * 100}%</p>
            </div>
        )
    })
  return (
    <>
    <p>Game Count <span>{gameCount}</span></p>
    <div>Numbers</div>
    <div className="grid">
    {numbersRenderer}
    </div>
    <br />
    <br />

    <button onClick={()=>setGameCount(prev=>prev+1)}>Next Game</button>
    <div>
    <p>Top 6</p>
    <div className='render6'>
    {renderTop6}
    </div>
    </div>

    <div>
    <p>Top 10</p>
    <div className='render10'>
    {renderTop10}
    </div>
    </div>
    </>
  )
}

export default Numbers

