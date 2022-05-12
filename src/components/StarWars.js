import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import {search} from '../actions/index'

export default function StarWars(){
  const [input, setInput] = useState(1)
  const dispatch = useDispatch()

  return (
    <div>
      <form
      className="searchForm"
        onSubmit={(e) => {
          e.preventDefault()
          if (input === '17') {
            alert('There is no number 17!')
          } else {
            dispatch(search(input))
          }
        }}
      >
        <input 
          
          type="number"
          value={input}
          onChange={ (e) => {
            setInput(e.target.value)
          }}
          min='1'
          max='83'
          >
          </input>
          <button>Submit</button>
          <h4> Enter a number, get a Starwars character</h4>
      </form>
    </div>
  )
}
