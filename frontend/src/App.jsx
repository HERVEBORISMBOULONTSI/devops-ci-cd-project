import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      {/* 👇 LE CHANGEMENT VISIBLE EST ICI 👇 */}
      <h1>🚀 DevOps : Déploiement Réussi !</h1>
      
      <div className="card">
        <p style={{ color: '#61dafbaa', fontWeight: 'bold', fontSize: '1.2em' }}>
          ✅ Cette version a été déployée automatiquement par GitHub Actions.
        </p>
        
        <button onClick={() => setCount((count) => count + 1)}>
          Test d'interactivité : {count}
        </button>
        
        <p>
          Si tu vois ce message, c'est que le <code>--force-recreate</code> a fonctionné !
        </p>
      </div>
    </>
  )
}

export default App