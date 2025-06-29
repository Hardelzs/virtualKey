import React from "react";
import Piano from "./components/Piano";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <Piano />
    </div>
  );
};

export default App;
