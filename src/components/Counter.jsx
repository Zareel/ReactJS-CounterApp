import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-16">
      <h1 className="text-3xl text-center font-bold pt-14">Counter App</h1>
      <div className="w-[450px] h-[450px] bg-gray-500 rounded-xl flex flex-col items-center justify-center gap-12">
        <h1 className="text-6xl font-bold">{counter}</h1>
        <div className="flex gap-10">
          <button
            onClick={() => setCounter(counter + 1)}
            className="px-6 py-2 bg-gray-200 text-slate-800 text-lg font-semibold rounded-sm"
          >
            Up
          </button>
          <button
            onClick={() => setCounter(0)}
            className="px-6 py-2 bg-gray-600 text-lg text-white font-semibold rounded-sm"
          >
            Reset
          </button>
          <button
            onClick={() => setCounter(counter > 0 ? counter - 1 : counter)}
            className="px-6 py-2 bg-gray-200 text-slate-800 text-lg font-semibold rounded-sm"
          >
            Down
          </button>
        </div>
      </div>
    </div>
  );
};
export default Counter;
