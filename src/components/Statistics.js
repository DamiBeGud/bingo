import React, { useEffect } from 'react'

function Statistics({gameCount,winingNumbers}) {
    function findObjectsWithHighestCount(map) {
        // Initialize variables to keep track of the highest count and corresponding objects
        let highestCount = 0;
        let highestCountObjects = [];
      
        // Iterate through the map to find the highest count
        map.forEach(value => {
          const count = value.count;
      
          if (count > highestCount) {
            highestCount = count;
            highestCountObjects = [value];
          } else if (count === highestCount) {
            // If there are multiple objects with the same highest count, add them to the result
            highestCountObjects.push(value);
          }
        });
      
        return highestCountObjects;
      }
    useEffect(()=>{
        
        // console.log(findObjectsWithHighestCount(winingNumbers))

   
        
    },[gameCount])
  return (
    <div>
    Statistics
    <p>a</p>
    </div>

  )
}

export default Statistics