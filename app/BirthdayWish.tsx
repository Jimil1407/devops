// components/BirthdayWish.tsx
"use client";

import { useEffect, useState } from "react";

const BirthdayWish = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const greetings = [
      "Happy Birthday, Jimil! 🎉 Have an amazing day!",
      "Wishing you joy, success, and lots of cake! 🎂",
      "Hope this year brings you closer to your dreams! 🚀",
      "May your day be filled with happiness and celebration! 🎊",
    ];
    setMessage(greetings[Math.floor(Math.random() * greetings.length)]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-center p-6">
      <h1 className="text-5xl font-bold mb-4 animate-pulse">🎂 Happy Birthday, Jimil! 🎂</h1>
      <p className="text-lg">{message}</p>
    </div>
  );
};

export default BirthdayWish;