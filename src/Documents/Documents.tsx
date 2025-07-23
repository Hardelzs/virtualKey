type SectionKey = keyof typeof sections;
import { useRef, useState } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ModeToggle } from "@/settings/ModeToggle";
import {
  Loader,
  BookOpenText,
  Lightbulb,
  Sparkles,
  Rocket,
  Keyboard,
  Sliders,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
// import html2pdf from "html2pdf.js";
import { useNavigate } from "react-router-dom";

const sections = {
  Overview: `
**KeyAura** is a minimalist piano app that uses your physical keyboard instead of on-screen keys.  
It's distraction-free, responsive, and perfect for ear training and quick melody experiments.`,

  "How It Works": `
Each keyboard key maps to a note.  
You press a key—KeyAura plays the sound.  
Simple, fast, and intuitive for any user.`,

  Features: `
- 🎧 Multiple instruments  
- 🗂 Configurable key mappings  
- 💾 Auto-save settings  
- 🌙 Light and dark theme support`,

  "Getting Started": `
1. Launch KeyAura.  
2. Choose your preferred sound.  
3. Press any letter key to play a note.  
4. Open settings to customize further.`,

  "Keyboard Shortcuts": `
- **Play note**: Any mapped key  
- **Volume Up**: \`⬆️+\`  
- **Volume Down**: \`⬆️-\`  
- **Mute**: \`⬆️M\`  
- **Open Commands**: \`S\`  
- **Show Help**: \`D\``,

  "Settings & Customization": `
Customize your experience:
- 🎵 Change instrument sounds  
- 🗝 Reassign keyboard keys to notes  
- 🔊 Shift octave, volume, attack, and more.`,

  "Troubleshooting & FAQ": `
**No Sound?**  
- Check your speaker/headphone connection.  
- Ensure browser tab isn’t muted.  
- Try refreshing the page.

**Settings not saving?**  
- Your settings are stored locally.  
- Try clearing cache or checking browser permissions.

**MIDI Support?**  
- Coming soon! 🎹`,
};

const sectionIcons = {
  "Overview": BookOpenText,
  "How It Works": Lightbulb,
  "Features": Sparkles,
  "Getting Started": Rocket,
  "Keyboard Shortcuts": Keyboard,
  "Settings & Customization": Sliders,
  "Troubleshooting & FAQ": HelpCircle,
};

const Documents = () => {
  const [activeSection, setActiveSection] = useState<SectionKey>("Overview");
  const navigate = useNavigate();

  const contentRef = useRef<HTMLDivElement>(null);

  // const handleDownloadPDF = () => {
  //   if (contentRef.current) {
  //     html2pdf()
  //       .from(contentRef.current)
  //       .set({
  //         margin: 0.5,
  //         filename: `${activeSection.replace(/\s+/g, "_")}.pdf`,
  //         image: { type: "jpeg", quality: 0.98 },
  //         html2canvas: { scale: 2 },
  //         jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
  //       })
  //       .save();
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-black w-full flex flex-col font-mono">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <ModeToggle />
      </ThemeProvider>

      {/* Header */}
      <div className="w-full max-w-7xl mx-auto mt-6 px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-between">
          <div className="flex p-2 items-center justify-center rounded-lg shadow-lg w-full md:w-auto">
            <Loader /> KeyAura
          </div>

          <div className="flex p-2 items-center gap-4 rounded-lg shadow-lg w-full md:w-auto">
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
        <div className="bg-white text dark:bg-[#111111] dark:text-white  h-[870px] p-4 rounded-2xl w-67 space-y-5 ">


          {Object.entries(sections).map(([title]) => {
            const Icon = sectionIcons[title as keyof typeof sectionIcons];
            return (
              <button
                key={title}
                onClick={() => setActiveSection(title)}
                className={`flex items-center gap-2 text-left w-full py-2 px-3 roundedhover:bg-[#ebebeb] dark:hover:bg-[#252525] ${
                  activeSection === title ? "text-[#da8282] font-semibold" : ""
                }`}
              >
                <Icon size={18} />
                {title}
              </button>
            );
          })}

                    {/* Go back button  */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center mt-107 border p-3 gap-2 text-left w-full py-2 px-3 rounded hover:bg-[#ebebeb] dark:hover:bg-[#252525] text-blue-500 hover:text-blue-900 font-semibold mb-2"
          >
            ← Go Back
          </button>
        </div>

        {/* Content Panel with Animation */}
        <div className="flex-1 p-6  overflow-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">{activeSection}</h2>

              <div ref={contentRef}>
                <div className="prose dark:prose-invert max-w-full text-base leading-relaxed">
                  <ReactMarkdown>{sections[activeSection]}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* developers contenet  */}
        <div className=" flex flex-col gap-4  dark:text-white p-4 cursor-pointer font-mono ">
          <h2 className={` ${activeSection ? "text-red-400" : ""}`}>
            For developers
          </h2>
          <p>For users</p>
          <hr className="text-black w-[230px] border-[#8d8a8a]" />

          <p className="cursor-pointer">
            📄 Download as PDF
          </p>
        </div>
      </div>
    </div>
  );
};

export default Documents;
