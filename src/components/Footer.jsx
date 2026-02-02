import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="w-full bg-gray-50 border-t border-gray-200 pt-12 pb-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    
                    
                    <div className="text-center md:text-left">
                        <Link to="/" className="text-2xl font-bold text-blue-900">
                            Quiz App
                        </Link>
                        <p className="text-gray-500 mt-2 max-w-xs">
                            Best platform for learning React fast through interactive tests and lessons.
                        </p>
                    </div>

                    
                    <div className="flex flex-wrap justify-center gap-8 font-medium text-gray-600">
                        <Link to="/quiz" className="hover:text-teal-600 transition-colors">Quiz</Link>
                        <Link to="/lessons" className="hover:text-teal-600 transition-colors">Lessons</Link>
                        <Link to="/login" className="hover:text-teal-600 transition-colors">Log-in</Link>
                    </div>
                </div>

                
                <div className="border-t border-gray-200 mt-10 pt-8 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} Quiz App. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;