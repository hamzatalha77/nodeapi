import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const Main = (history: any) => {
  const [name, setName] = useState('')
  const [github, setGithub] = useState('')
  const [live, setLive] = useState('')

  const dispatch = useDispatch()

  return (
    <div className="h-screen w-full bg-slate-400">
      <form action="">
        <input
          type="text"
          placeholder="Project name..."
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Github code source..."
          name="github"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
        <input
          type="text"
          placeholder="Project Url..."
          name="live"
          value={live}
          onChange={(e) => setLive(e.target.value)}
        />
        <button type="submit">Send !</button>
      </form>
    </div>
  )
}

export default Main
