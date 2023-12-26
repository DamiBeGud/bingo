import { useState } from "react";
import Numbers from "./components/Numbers";
import Statistics from "./components/Statistics";
function App() {

  let numbers = []
  const winingNumbers = new Map()

for(let i=0; i<=47;i++){
  numbers[i] = i;
  winingNumbers.set(`num${i}`, {number: i + 1, count: 0})
}
console.log(winingNumbers)

function addNumber(winingNumber){
  let old = winingNumbers.get(winingNumber)
  // console.log(old)
  winingNumbers.set(winingNumber, {number: old.number, count: old.count + 1})
  // console.log(winingNumbers.get(winingNumber))
  // console.log(winingNumber)
  // console.log(winingNumbers)

}

  return (
    <>
      <Numbers 
        numbers = {numbers}
        addNumber = {addNumber}
        winingNumbers= {winingNumbers}
      />

    </>
  );
}

export default App;
