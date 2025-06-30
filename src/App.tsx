import Piano from "./components/Piano";
import { ThemeProvider } from "@/components/Theme-Provider";

function App({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Piano />

      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        {children}
      </ThemeProvider>
    </div>
  );
};

export default App;
