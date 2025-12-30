import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(true)

  // 1. Charger les questions depuis ton API NestJS
  useEffect(() => {
    fetch('http://localhost:3000/api/tcf/oral')
      .then(res => res.json())
      .then(data => {
        setQuestions(data)
        setLoading(false)
      })
      .catch(err => console.error("Erreur API:", err))
  }, [])

  // 2. Gérer le clic sur une réponse
  const handleAnswer = async (choiceId) => {
    try {
      const res = await fetch('http://localhost:3000/api/tcf/check-answer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ choice_id: choiceId })
      })
      const result = await res.json()

      if (result.correct) {
        setScore(score + 1)
        alert("✅ Bonne réponse !") // Tu pourras faire plus joli plus tard
      } else {
        alert("❌ Mauvaise réponse...")
      }

      // Passer à la question suivante
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        setShowResult(true)
      }
    } catch (err) {
      console.error("Erreur vérification:", err)
    }
  }

  // --- RENDU VISUEL ---

  if (loading) return <h1>Chargement de l'examen... ⏳</h1>
  
  if (showResult) return (
    <div className="card">
      <h1>🏆 Examen Terminé !</h1>
      <h2>Ton score : {score} / {questions.length}</h2>
      <button onClick={() => window.location.reload()}>Recommencer</button>
    </div>
  )

  if (questions.length === 0) return <h1>Aucune question trouvée dans la base.</h1>

  const currentQuestion = questions[currentIndex]

  return (
    <div className="app-container">
      <header>
        <h1>🇨🇦 TCF Canada - Entraînement</h1>
        <p>Question {currentIndex + 1} / {questions.length}</p>
      </header>

      <div className="question-card" style={{ border: '2px solid #ddd', padding: '20px', borderRadius: '10px', maxWidth: '600px', margin: '0 auto' }}>
        <span className="badge">{currentQuestion.level}</span>
        <h3>{currentQuestion.question_text}</h3>
        
        {/* Placeholder pour le lecteur audio plus tard */}
        <div style={{ background: '#f0f0f0', padding: '10px', margin: '15px 0', borderRadius: '5px' }}>
          ▶️ <i>[Lecteur Audio ici]</i>
        </div>

        <div className="choices-grid" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {currentQuestion.choices && currentQuestion.choices.map(choice => (
            <button 
              key={choice.id} 
              onClick={() => handleAnswer(choice.id)}
              style={{ padding: '15px', cursor: 'pointer', textAlign: 'left' }}
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App