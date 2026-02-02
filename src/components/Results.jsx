function Results({userAnswers, questionBank, restartQuiz}) {
    function getScore() {
        let finalScore = 0;
        userAnswers.forEach((answer, index) => {
            if(answer === questionBank[index].answer) {
                finalScore++;
            }
        });
        return finalScore
    }
    const score = getScore()

     return (
        <div className="flex items-center justify-center min-h-screen bg-blue-200 px-4">
            <div className="w-full max-w-xl bg-white shadow-xl rounded-xl p-10 sm:">
            <h2 className="text-center text-2xl font-bold text-blue-900 p-4" >Quiz completed!</h2>
            <p className="text-center p-4 font-bold mt-8">Your score: {score}/{questionBank.length}</p>
            <div className="text-center my-6">
            <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-xl p-2 font-bold  " onClick={restartQuiz}>
                Restart Quiz</button>
            </div>    
            </div>
        </div>
    )
}

export default Results;