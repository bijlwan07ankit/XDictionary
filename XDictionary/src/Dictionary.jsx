import React from 'react'
import { useState } from 'react';
function Dictionary() {
    const dictionary=[
        {
            word: "React",
            meaning: "A JavaScript library for building user interfaces.",
          },
      
          { word: "Component", meaning: "A reusable building block in React." },
      
          { word: "State", meaning: "An object that stores data for a component." },
        ];
      
    const [text, setText] = useState("");
    const [show, setShow] = useState("");
    let [ans, setAns] = useState(null);

    function handleInput(e){
        setShow("")
   let searchText = e.target.value;
   setText(searchText);
    }
    const handleShow = () => {
        for (let i = 0; i < dictionary.length; i++) {
          if (dictionary[i].word.toLowerCase() === text.toLowerCase()) {
            setShow(dictionary[i].meaning);
            setAns(true);
            return;
          } else {
            setAns(false);
          }
        }
    }

  return (
   <>
   <h1>Dictionary App </h1>
   <input 
   type="text"
//    value={word}
   placeholder="Search for a Word.."
   onChange={(e)=> (handleInput(e))}
   />
   <button onClick={handleShow}>Search</button>
   <h5>Definition:</h5>
   {ans && <p>{show}</p>}
      {ans === false && <p>Word not found in the dictionary.</p>}
   </>
  )
}

export default Dictionary