import React from "react";
import { useNavigate } from "react-router-dom";


function Lessons() {
    const navigate = useNavigate();
    return (
        <>
         <div className=" w-full py-50 bg-white flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">All the lessons you need!</h1>
                <p className="text-lg my-4">Start learning React from scratch with these lessons.</p>
                <div className="mt-4">
                    <button
                    onClick={() => navigate("/lessons")}
                    className="cursor-pointer px-6 py-2 text-center text-white bg-blue-800 rounded-md shadow-lg hover:bg-white hover:text-blue-800">
                        Get started
                    </button>
                </div>         
        </div>
        
        </>
    )
}

export default Lessons;