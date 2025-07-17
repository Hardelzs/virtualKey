import { useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/settings/ModeToggle";
import { Loader } from "lucide-react";
import type React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const sectionKeys = [
  "Overview",
  "How It Works",
  "Features",
  "Getting Started",
  "Keyboard Shortcuts",
  "Settings & Customization",
  "Troubleshooting & FAQ",
  "Go Back"
] as const;

type SectionKey = typeof sectionKeys[number];

const sections: Record<SectionKey, string> = {
  "Overview": "VirtualKeys is a minimalist piano app that uses your keyboard instead of on-screen keys. It's distraction free and intuitive.",
  "How It Works": "Each key on your physical keyboard is mapped to a piano note. You press and hear the sound in real time.",
  "Features": "Includes multiple instrument sounds, custom key mapping, volume controls, and auto-save settings.",
  "Getting Started": "Open the app, choose your sound, press any letter key to play, and customize in settings.",
  "Keyboard Shortcuts": "Play: Any key • Volume+: + • Volume-: - • Mute: M • Open Settings: S • Help: D",
  "Settings & Customization": "Customize instrument, remap keys, shift octaves, and fine-tune sound response.",
  "Troubleshooting & FAQ": "No sound? Check your browser volume or output device. Settings not saving? Try refreshing or clearing cache.",
  "Go Back": "Click here to return to the main page."
};

const Documents: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("Overview");

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-black w-full flex flex-col font-mono">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ModeToggle />
      </ThemeProvider>

      {/* Header Section */}
      <div className="w-full max-w-7xl mx-auto mt-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
          {/* Loader Box 1 */}
          <div className="flex items-center justify-center rounded-lg shadow-lg w-full md:w-auto">
            <Loader />
          </div>

          {/* Loader Box 2 with Input */}
          <div className="flex items-center gap-4 rounded-lg shadow-lg w-full md:w-auto">
            <Loader />
            <input
              type="text"
              placeholder="Ask or search"
              className="border-none outline-none bg-transparent px-2 py-1 w-full md:w-48"
            />
          </div>
        </div>
      </div>

      <hr className="mt-3 border-[#363535] w-full" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-6 flex w-full  gap-26 px-4">
        {/* Sidebar */}
        <div className="bg-white dark:bg-[#111111] dark:text-white h-[870px] p-4 rounded-md w-60">
          {Object.keys(sections).map((title) => (
            <button
              key={title}
              onClick={() => setActiveSection(title as SectionKey)}
              className={`block text-left w-full py-2 px-3 rounded hover:bg-[#ebebeb] dark:hover:bg-[#252525] ${
                activeSection === title ? "text-[#da8282] font-semibold" : ""
              }`}
            >
               {title}
            </button>
          ))}
        </div>

        {/* Section Content */}
        <div className="flex-1  p-6  text-gray-900 dark:text-gray-100">
          <h2 className="text-2xl font-bold mb-2">{activeSection}</h2>
          <p className="text-base leading-relaxed">{sections[activeSection]}</p>
        </div>

        {/* developers contenet  */}
        <div className=" flex flex-col gap-4  dark:text-white p-4 cursor-pointer font-mono ">
          <h2 className={` ${activeSection ? "text-red-400": ""}`}>For developers</h2>
          <p>For users</p>
          <hr className="text-black w-[230px] border-[#8d8a8a]"/>
          <h2>Export as PDF</h2>
        </div>
      </div>
    </div>
  );
};

export default Documents;
