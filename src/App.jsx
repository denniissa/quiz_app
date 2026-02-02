import './index.css'
import Navbar from './components/Navbar'
import Quiz from './components/Quiz'
import Home from './components/Home'
import Lessons from './components/Lessons'
import LogIn from './components/LogIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>          
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;