/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react'
import axios from 'axios' 
import { useParams, Link } from 'react-router-dom' 
import Head from './head'

const Header = ({ userName }) => {
  return (
    <div className="flex items-center justify-rcente">
      <div 
        id="repository-name"
        className="bg-teal-400 text-black font-bold rounded-lg border shadow-lg p-3"
      >
        {userName}
      </div>
      <div
        id="go-back"
        className="bg-teal-400 text-black font-bold rounded-lg border shadow-lg p-3"
      >
        <Link to="/">Go Back</Link>
      </div>
    </div>
  )
}

const Repo = (props) => {
  const repo = props
  return (
    <div className="flex items-center justify-center">
      <div 
        className="bg-teal-500 text-white font-bold rounded-lg border shadow-lg p-5"
      >
        <div key={repo.id} style={{display: "list-item"}}>
          <div style={{width: '300px'}}>{repo.name}</div> 
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
      <Header userName={userName} />
      <GettingList userName={userName} />

    </div>
  )
}

List.propTypes = {}

export default List