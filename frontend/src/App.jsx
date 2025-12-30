// ... imports ...
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      {/* ... logos ... */}
      
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
        <button onClick={() => setCount((count) => count + 1)} style={{ backgroundColor: '#2196F3' }}>
           Test Final : {count}
        </button>
      </div>
      {/* ... */}
    </>
  )
}
export default App