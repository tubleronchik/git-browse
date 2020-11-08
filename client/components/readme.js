// `https://api.github.com/repos/${userName}/${repoName}`
// `https://raw.githubusercontent.com/${userName}/${repoName}/master/README.md`
import React from 'react'
// import axios from 'axios' 
import { useParams } from 'react-router-dom' 
import Head from './head'
 //непонятно, почему не выводит имя и имя репы
const Readme = () => {
  const { userName, repositoryName } = useParams()
  // const { repositoryName } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        {userName}
        {repositoryName}
      </div>
    </div>
  )
}

Readme.propTypes = {}

export default Readme
