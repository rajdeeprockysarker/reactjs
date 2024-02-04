import React, { createContext, useContext, useState } from 'react'

const PracticeContext = createContext();


const Practice = () => {

    const onClickButton = ()=>{
       console.log(color)
       setColor("Yellow")
    }

const [color , setColor] = useState("Red");

  return (
    <div>
      <h1>rajdeep={color}</h1>

      <button onClick={onClickButton}>Click Me</button>
    </div>
  )
}

export default Practice
