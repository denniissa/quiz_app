import './index.css'
import Quiz from './components/Quiz'
import Results from './components/Results'

function App() {

  return (
    <>
    <nav className="bg-gradient-to-r from-teal-500 to-teal-700 text-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Quiz App</h1>      
        </div>
    </nav>  

      <Quiz /> 
          
    </>
  )
}

export default App
