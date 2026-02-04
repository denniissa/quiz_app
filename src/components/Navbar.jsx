import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-300 to-blue-900 text-white shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <Link to="/" className="text-2xl font-bold cursor-pointer">
          Quiz App
        </Link>

        <div className="flex gap-6 font-medium">
          <Link to="/quiz" className="hover:text-blue-200 transition-colors">Quiz</Link>
          <Link to="/lessons" className="hover:text-blue-200 transition-colors">Lessons</Link>
          <Link to="/login" className="hover:text-blue-200 transition-colors">Log-in</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;