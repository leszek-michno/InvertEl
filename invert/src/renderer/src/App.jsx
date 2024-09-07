import { useEffect } from 'react'
import { scroller } from 'react-scroll'
import './assets/styles/App.scss'
import List from './components/List'
import CurrentDate from './components/CurrentDate'

function App() {
  const makePDF = () => {
    window.print()
  }

  useEffect(() => {
    scroller.scrollTo('scroll-target', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }, [])

  return (
    <>
      <header>
        <p>Lem-Son Sp. z o.o. - Pub Propaganda</p>
        <h1>Inwentaryzacja </h1>
        <CurrentDate />
        <button onClick={makePDF}>Drukuj</button>
      </header>
      <div
        className="content"
        style={{ height: '100vh', overflowY: 'auto' }}
        id="ContainerElementID"
      >
        <List />
        <div id="scroll-target" style={{ marginTop: 'auto' }}></div>
      </div>
    </>
  )
}

export default App
