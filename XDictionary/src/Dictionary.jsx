import React from 'react'
import { useState } from 'react';
function Dictionary() {
    const [word, setWord]=useState("");
    function handleSearchbtn(e){
   let text = e.target.value;
   setWord(text);
    }
  return (
   <>
   <h1>Dictionary App </h1>
   <input 
   type="text"
//    value={word}
   placeholder="Search for a Word.."
   />
   <button onClick={handleSearchbtn}>Search</button>
   <h5>Definition:</h5>
   </>
  )
}

export default Dictionary