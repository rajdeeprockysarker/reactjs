import { Button } from "bootstrap";
import { useState } from "react";

function CreateContextparent(props) {
  const [company, setCompany] = useState("rajdeep");
  //onst [brand, setBrand] = useState("Ford");

  const onClickButton = () => {
    console.log("object");
    setCompany("Rajdeepppppp");
    //console.log(a.name);
    return 5;
  };

  return (
    <>
      <h1>{company}</h1>
      <button type="Button" onClick={onClickButton}>
        dfdsfsdfds
      </button>
    </>
  );
}

export default CreateContextparent;
