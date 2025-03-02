import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lab01 from './compoments/Lab01'
import Lab02 from './compoments/Lab02'
import Lab03 from './compoments/Lab03'
import TodoApp from './compoments/ToDoApp'

function App() {

  return (
    <>
    <Lab01 />
    <br />
    <Lab02 />
    <br/>
    <Lab03/>
    <br />
    <TodoApp />
  </>
  )
}

export default App  
