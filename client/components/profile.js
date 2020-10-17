import React from 'react'
import { Link, useParams } from 'react-router-dom'  

import Head from './head'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div
        id="title"
        className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-2"
      >
        Profile
      </div>
      <div>
        <Link to="/dashboard/main">Go To Main</Link> 
      </div>
      <div>
        <Link to="/dashboard/">Go To Root</Link>
      </div>
      <div id="username">{user}</div>
    </div>

  )
}

Profile.propTypes = {}

export default Profile