import React from "react";

export default function PageWrapper({ children }) {
  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <div className="min-w-[340px] max-w-[340px] mx-auto flex-grow h-full">
        {children}
      </div>
    </div>
  );
}
