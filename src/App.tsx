import React from "react";
import Piano from "./components/Piano";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "./settings/ModeToggle";
import NeuralLinkBackground from "./theme/NeuralLinkBackground";

const App: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gray-200 dark:bg-black min-h-screen flex items-center justify-center">
      <Piano />
       <NeuralLinkBackground />
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ModeToggle />
      </ThemeProvider>
    </div>
  );
};

export default App;
