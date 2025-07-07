import React, { useEffect, useState } from 'react'

function App() {

    const [quotes,setquotes]=useState([]);

    useEffect(()=>{
        fetch('https://dummyjson.com/quotes')
        .then((Response)=>Response.json())
        .then((data)=>{
            const firstquotes=data.quotes.slice(0,10);
            setquotes(firstquotes);
        })
    },[]
    );
  return (
    <div> 
        <h1>10 quotes</h1>
        {quotes.map((quote,index)=>(
            <h4 key={index}>{quote.quote}</h4>
        ))}
    </div>
  )
}

export default App