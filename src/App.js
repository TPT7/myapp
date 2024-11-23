import React from 'react'
import './App.css'

const handleclickevent = (event) => {
  alert('Yeeeyy you did it!!', event)
}
function App() {
  <h1>Welcome Tanatswa, please click the button.</h1>
  return <button onClick={handleclickevent}> Click here</button>
}

export default App

