/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import axios from 'axios' 
import { useParams } from 'react-router-dom' 
import Head from './head'

const Header = (props) => {
  

}
const Repo = (props) => {
  const repo = props
  return (
    <div>
      <div 
        className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-5"
      >
        <div key={repo.id} style={{display: "flex"}}>
          <div style={{width: '250px'}}>{repo.name}</div> 
        </div>
      </div>  
    </div>  

  )
}

const GettingList = (props) => {
  const [list, setList] = useState([])
  async function getData() {
    const res = await axios.get(`https://api.github.com/users/${props.userName}/repos`)
    setList(res.data)
  } 
  useEffect(() => {  
     getData()
  }, [props.userName]) 

  return (
    <div>
      {list.map(repo => {
        return <Repo key={repo.id} {...repo} /> 
      })}
    </div>
  )
}

const List = () => {
  const { userName } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <GettingList userName={userName} />
      <Header userName={userName} />
    </div>
  )
}

List.propTypes = {}

export default List