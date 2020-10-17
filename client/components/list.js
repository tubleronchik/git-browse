import React, { useState, useEffect } from 'react'
import axios from 'axios' 
import { useParams } from 'react-router-dom' 
import Head from './head'



const GettingList = (props) => {
  const [list, setList] = useState([])
  async function getData() {
    const res = await axios.get(`https://api.github.com/users/${props.userName}/repos`)
    setList(res)
  } 
  useEffect(() => {  
     getData()
  }, []) 
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-teal-500 text-black font-bold rounded-lg border shadow-lg p-10">
        {list}  
      </div>
    </div>
  )
}

const List = () => {
  const { userName } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <GettingList userName={userName} />
    </div>
  )
}

List.propTypes = {}

export default List