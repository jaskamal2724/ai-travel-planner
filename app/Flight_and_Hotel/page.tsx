import React from "react";

const Flight_and_Hotel = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Floating travel icons */}
      <div className="absolute top-32 right-1/4 text-6xl opacity-15 animate-float">
        ✈️
      </div>
      <div className="absolute top-60 left-1/3 text-5xl opacity-25 animate-float delay-1000">
        🗺️
      </div>
      <div className="absolute bottom-40 right-1/3 text-5xl opacity-25 animate-float delay-500">
        🏖️
      </div>

      <div className="flex my-14  justify-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
        <span className="text-2xl font-medium text-gray-700 border-2 border-blue-400 p-4 rounded-4xl w-lg text-center">
         ✈️ Your Flights In A Nutshell 🏖️
        </span>
      </div>
    </div>
  );
};

export default Flight_and_Hotel;
