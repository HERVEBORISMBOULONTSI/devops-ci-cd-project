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
      
      {/* TITRE V4 */}
      <h1>💎 DevOps V4 : ULTIMATE TEST 💎</h1>
      
      <div className="card" style={{ border: '4px solid #2196F3', padding: '20px', borderRadius: '15px' }}>
        <h3 style={{ color: '#2196F3' }}>
          Si tu vois ce cadre BLEU...
        </h3>
        <p>
          ...c'est que ton fichier docker-compose local a bien écrasé celui du serveur 
          ET que tout fonctionne encore !
        </p>
        
        <button onClick={() => setCount((count) => count + 1)} style={{ backgroundColor: '#2196F3', color: 'white', marginTop: '10px' }}>
           Test Final : {count}
        </button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App