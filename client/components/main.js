import React from 'react'
import { Link } from 'react-router-dom'  

import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div
        id="title"
        className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-2"
      >
        Main
      </div>
      <div>
        <Link to="/dashboard/profile/d3f71027-b686-4134-8567-8ce38f5e923f">Go To Profile</Link>
      </div>
      <div>
        <Link to="/dashboard/">Go To Root</Link>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main