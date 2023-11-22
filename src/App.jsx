import { useState } from 'react'
import { TaskBar } from './components/task_bar/task_bar';
import { ItemProgram } from './components/widgets/item_program/item_program';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <div className='home_desk'>
        <div className='desk'>
          <ItemProgram />
        </div>
        <TaskBar />
      </div>

    </>
  )
}

export default App
