import React, { useState } from 'react'

import Head from './head'
import { history } from '../redux'

const User = (props) => {
  const [value, setValue] = useState("")
  const onChange = (event) => {
    const newValue = event.target.value
    setValue(newValue)
    props.onChange(newValue)
  }
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <input
          id="input-field"
          type="text"
          className="bg-teal-500 text-black font-bold rounded-lg border shadow-lg p-2"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

const Search = () => {
  const [userName, setUser] = useState("")
  const onInputChange = (nickname) => {
    setUser(nickname)
  }
  const linkTo = () => {
    history.push(`/${userName}`)
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <button 
        type="button" 
        id="search-button"
        className="bg-teal-500 text-white font-bold rounded-lg border shadow-lg p-2"
        onClick={linkTo}
      >
        Search!
      </button> 
      <User onChange={onInputChange} />
    </div>  
  )
}

Search.propTypes = {}

export default Search
