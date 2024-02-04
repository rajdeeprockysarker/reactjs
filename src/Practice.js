import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const PracticeContext = createContext();

const PracticeContextProvider = (props) => {
  const [brand, setBrand] = useState("Rebook");

  const update = (object) => {
    setBrand(object);
  };

  return (
    <PracticeContext.Provider value={{ brand, update }}>
      {props.children}
    </PracticeContext.Provider>
  );
};

const PracticeClildren = () => {
  const aa = useContext(PracticeContext);

  const onClickhandlr = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users?page=2");
      console.log(response.data.data.length);
      aa.update(JSON.stringify(response));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{aa.brand}</h1>
      <button onClick={onClickhandlr}>Click</button>
    </div>
  );
};

const Practice = () => {
  const onClickButton = () => {
    console.log(color);
    setColor("Yellow");
  };

  const [color, setColor] = useState("Red");

  return (
    <div>
      <PracticeContextProvider>
        <PracticeClildren></PracticeClildren>
      </PracticeContextProvider>
      <h1>rajdeep={color}</h1>

      <button onClick={onClickButton}>Click Me</button>
    </div>
  );
};

export default Practice;
