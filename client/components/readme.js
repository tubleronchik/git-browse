// `https://api.github.com/repos/${userName}/${repoName}`
// `https://raw.githubusercontent.com/${userName}/${repoName}/master/README.md`
import React from 'react'
// import axios from 'axios' 
import { useParams } from 'react-router-dom' 
import Head from './head'

const Readme = () => {
  const { userName } = useParams()
  const { repositoryName } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        
          {userName}
          {repositoryName}
        </div>
       
      </div>
    </div>
  )
}

Readme.propTypes = {}

export default Readme
