import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      {/* Modification V3 */}
      <h1>✨ DevOps V3 : SUCCESS ! ✨</h1>
      
      <div className="card" style={{ border: '2px solid #4CAF50', padding: '20px', borderRadius: '10px' }}>
        <h3 style={{ color: '#4CAF50' }}>
          Modification automatique validée
        </h3>
        <p>
          Si ce cadre est vert, c'est que le pipeline CI/CD fonctionne parfaitement.
          Tu n'as plus besoin de toucher au SSH !
        </p>
        
        <button onClick={() => setCount((count) => count + 1)} style={{ backgroundColor: '#4CAF50', color: 'white' }}>
          Compteur de victoires : {count}
        </button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App