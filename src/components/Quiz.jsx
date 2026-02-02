import { useState } from "react";
import Results from "./Results";

function Quiz() {
    const questionBank = [
        {
            question: "How are you?",
            options: ["Sad", "Happy", "Angry"],
            answer: "Happy",
        },
        {
            question: "How is him?",
            options: ["Sad", "Happy", "Angry"],
            answer: "Happy",
        },
        {
            question: "How are you?",
            options: ["Sad", "Happy", "Angry"],
            answer: "Happy",
        },
    ];

    const initialAnswers = [null, null, null];
    const [userAnswers, setUserAnswers] = useState(initialAnswers);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isQuizFinished, setIsQuizFinished] = useState(false);

    const selectedAnswer = userAnswers[currentQuestion]; 

    function handleSelectOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        setUserAnswers(newUserAnswers);
    }

    function goToNext() {
        if (currentQuestion === questionBank.length - 1) {
            setIsQuizFinished(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
    }

    function goToPrevious() {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    function restartQuiz() {
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);
    }

    if (isQuizFinished) {
        return (
            <Results
                userAnswers={userAnswers}
                questionBank={questionBank}
                restartQuiz={restartQuiz}
            />
        );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-6">
            <div className="w-full max-w-xl bg-white shadow-xl rounded-xl p-10">
                <h2 className="text-2xl font-bold text-center mb-6 text-teal-700">
                    Question {currentQuestion + 1} of {questionBank.length}
                </h2>
                <p className="text-lg text-center mb-5">
                    {questionBank[currentQuestion].question}
                </p>

                <div className="flex flex-col gap-4 mb-10">
                    {questionBank[currentQuestion].options.map((option) => (
                        <button
                            key={option}
                            className={`py-3 rounded-lg border transition-colors duration-300
                                ${selectedAnswer === option 
                                    ? "bg-blue-500 text-white border-blue-500" 
                                    : "bg-white text-blue-700 border-blue-300 hover:bg-blue-100"
                                }`}
                            onClick={() => handleSelectOption(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <div className="flex justify-between">
                    <button
                        onClick={goToPrevious}
                        disabled={currentQuestion === 0}
                        className="py-2 px-4 bg-gray-300 rounded-lg disabled:opacity-50 hover:bg-gray-400 transition-colors"
                    >
                        Previous
                    </button>

                    <button
                        onClick={goToNext}
                        disabled={!selectedAnswer}
                        className="py-2 px-4 bg-blue-500 text-white rounded-lg disabled:opacity-50 hover:bg-blue-600 transition-colors"
                    >
                        {currentQuestion === questionBank.length - 1 ? "Finish Quiz" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Quiz;
