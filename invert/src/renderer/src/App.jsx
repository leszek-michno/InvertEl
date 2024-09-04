import { useEffect } from 'react'
import { scroller } from 'react-scroll'
import './assets/styles/app.scss'

function App() {
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
        <h1>Inwentaryzacja </h1>
        <p>Lem-Son Sp. z .o.o.</p>
        <p>Pub Propaganda</p>
        <button>Drukuj</button>
      </header>
      <div
        className="content"
        style={{ height: '100vh', overflowY: 'auto' }}
        id="ContainerElementID"
      >
        <h2>Bum bumek</h2>
        <p>Bum bumek</p>
        <p>Bum bumek</p>
        <p>Bum bumek</p>
        <p>Bum bumek</p>
        <p>Bum bumek</p>
        <p>Bum bumek</p>
        <div id="scroll-target" style={{ marginTop: '1000px' }}></div>
      </div>
    </>
  )
}

export default App
