import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [date, setDate] = useState(new Date);


  function setIntervalHour() {
    setInterval(() => {
      var dates = new Date();
      setDate(dates)
    }, 1000);
  }

  setIntervalHour();


  // function setIntervalHour() {
  //   setInterval(() => {
  //     date = new Date()
  //   }, 1000);
  // }

  

  return (
    <>

      <div className='home_desk'>

        <div className='bar_task'>
          <div className='icons_left'>
            <i className="fa-brands fa-windows icon_task"></i>
            <i className="fa-solid fa-magnifying-glass icon_task"></i>
          </div>
          <div className='info_right'>
            <span className='date'>{date.getHours()}:{date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes()}:{date.getSeconds() <= 9 ? '0' + date.getSeconds() : date.getSeconds()}</span>
          </div>
        </div>

      </div>


      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
