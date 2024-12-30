import React from 'react';

const Modal = ({ isModelOpen, setIsModelOpen, children }) => { 
    if (!isModelOpen) return null; 

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-11/12 md:w-1/2 lg:w-1/3 p-6 relative rounded-lg shadow-lg">
                <button
                    className="absolute top-2 right-2  text-gray-900 text-xl hover:text-gray-800"
                    onClick={() => setIsModelOpen(false)} 
                >
                    X
                </button>
                {children} 
            </div>
        </div>
    );
};

export default Modal;
