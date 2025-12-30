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
      
      {/* TITRE V5 - ROUGE */}
      <h1>🔥 DevOps V5 : MISSION ACCOMPLIE 🔥</h1>
      
      <div className="card" style={{ border: '4px solid #F44336', padding: '20px', borderRadius: '15px' }}>
        <h3 style={{ color: '#F44336' }}>
          Confirmation Finale : ROUGE
        </h3>
        <p>
          Si tu vois ce cadre rouge, félicitations !
          Tu as automatisé le déploiement de A à Z.
          Ton serveur se met à jour tout seul pendant que tu bois ton café. ☕️
        </p>
        
        <button onClick={() => setCount((count) => count + 1)} style={{ backgroundColor: '#F44336', color: 'white', marginTop: '10px' }}>
           Victoire n° : {count}
        </button>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App