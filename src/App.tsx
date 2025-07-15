import React from "react";
import Piano from "./components/Piano";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "./settings/ModeToggle";
import NeuralLinkBackground from "./theme/NeuralLinkBackground";
import Pro from "./components/Pro";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Documents from "./Documents/Documents";


const App: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gray-200 dark:bg-black min-h-screen flex items-center justify-center">
      <Piano />
      <Pro />
       <NeuralLinkBackground />
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ModeToggle />
      </ThemeProvider>
      <Router>
        <Routes>
          <Route path="docs" element={<Documents />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
