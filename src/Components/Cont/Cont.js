import {useState, useEffect} from 'react';
import * as React from 'react';
import  "./Conte.css"
function Contador() {
    

let cont = 0

const [number, setNumber] = useState(0)

function increment() {
 console.log('btn')
 cont++
 console.log(cont)
 setNumber(number + 1)
}

function decrement() {
    if (number > 0) {
        setNumber(number - 1);
    }
  }
useEffect(()=>{
console.log("UseEffect con array")
},[])

return(
<div>
    <h3 className='DivContain'><p>Cuantas Tortas quiere llevarte</p></h3>
<div className='DivContain'> 
<button onClick={increment} variant="contained" color="primary">+</button>
<span>{number}</span>
<button onClick={decrement} variant="contained" color="secondary" >-</button>
</div>
</div>

)}

export default Contador