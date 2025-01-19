import React from "react";

function Main({ children }) {
  return (
    <div className="Main flex-grow p-5">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.5fr_1fr_1fr_0.5fr] lg:gap-8">
        <div className="rounded-lg bg-[#020617]"></div>
        <div className="rounded-lg bg-[#020617] lg:col-span-2 flex items-center justify-center">
          {children}
        </div>
        <div className="rounded-lg bg-[#020617]"></div>
      </div>
    </div>
  );
}

export default Main;
