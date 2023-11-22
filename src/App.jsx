import { useState } from 'react'
import { TaskBar } from './components/task_bar/task_bar';
import { ItemProgram } from './components/widgets/item_program/item_program';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  var programs = [
    {
      id: 1,
      name: "Papelera de Reciclaje",
      icon1: "recycle-bin-icon",
      icon2: "recycle-bin-icon-2"
    },
    {
      id: 2,
      name: "Google Chrome",
      icon1: "google-chrome-icon",
      icon2: "google-chrome-icon"
    }
  ]

  return (
    <>

      <div className='home_desk'>
        <div className='desk'>
          {
            programs.map(item => <ItemProgram infoProgram={item} key={item.id} />)
          }
        </div>
        <TaskBar />
      </div>

    </>
  )
}

export default App
