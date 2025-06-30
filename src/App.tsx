import React from "react";
import Piano from "./components/Piano";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "./settings/ModeToggle";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Piano />

      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ModeToggle />
      </ThemeProvider>
    </div>
  );
};

export default App;
