import { useState } from 'react'
import { TaskBar } from './components/task_bar/task_bar';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <div className='home_desk'>
        <TaskBar />

      </div>

    </>
  )
}

export default App
