import { useNavigate } from "react-router-dom";

function HeroComponent() {
    const navigate = useNavigate();
    return (
        <>
            <div className=" w-full py-50 bg-white flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">Learn And Practice!</h1>
                <p className="text-lg my-4">With Quiz App you can learn everything about React and then put your skills to test.</p>
                <div className="mt-4">
                    <button
                    onClick={() => navigate("/lessons")}
                    className="cursor-pointer px-6 py-2 text-center text-white bg-blue-800 rounded-md shadow-lg hover:bg-white hover:text-blue-800">
                        Get started
                    </button>
                </div>         
        </div>
            <div className="w-full bg-white py-10">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-300 to-blue-900 rounded-2xl shadow-xl text-center text-white p-20">
                <h1 className="text-4xl font-bold">Start a quiz!</h1>
                <p className="text-lg my-4">
                    You want to know how good your knowlege about React is? <br />
                    Take the quiz to find out!
                </p>
                <div className="mt-4">
                    <button
                    onClick={() => navigate("/quiz")}
                    className="cursor-pointer px-6 py-2 text-center text-blue-900 bg-white rounded-md shadow-lg hover:bg-blue-800 hover:text-white">
                        Start
                    </button>
                </div>
            </div>
            </div>
            <div className="w-full p-50 bg-white ">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">Log in to see your progress! </h1>
                <p className="text-lg my-4">You dont have an account yet? No worries! Create one now</p>
                <div className="mt-4 flex justify-between">
                    <button
                    onClick={() => navigate("/login")}
                    className="mx-4 cursor-pointer px-6 py-2 text-center text-white bg-blue-800 rounded-md shadow-lg hover:bg-white hover:text-blue-800">
                        Log In
                    </button>
                    <button
                    onClick={() => navigate("/quiz")}
                    className="mx-4 cursor-pointer px-4 py-2 text-center text-white bg-blue-800 rounded-md shadow-lg hover:bg-white hover:text-blue-800">
                        Register
                    </button>
                </div>         
        </div>
        </div>
        </>
    )
}

export default HeroComponent;