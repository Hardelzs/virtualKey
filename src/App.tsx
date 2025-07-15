import React from "react";
import Piano from "./components/Piano";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Documents from "./Documents/Documents";


const App: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gray-200 dark:bg-black min-h-screen flex items-center justify-center">
      <Router>
        <Routes>
          <Route path="/" element={<Piano />} />
          <Route path="/docs" element={<Documents />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
