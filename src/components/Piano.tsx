import React, { useEffect, useState } from "react";
import PianoKey from "./PianoKeys";
import Command from "@/settings/Command";
import { ModeToggle } from "@/settings/ModeToggle";

interface KeyMap {

  [key: string]: {
    note: string;
    audio: HTMLAudioElement;
  };

}

const Piano: React.FC = () => {
  // Define the keys and corresponding notes
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [showKeys, setShowKeys] = useState(true); // Add this line

  const keyMap: KeyMap = {
    a: { note: "C", audio: new Audio("/sounds/C.wav") },
    s: { note: "D", audio: new Audio("/sounds/D.wav") },
    d: { note: "E", audio: new Audio("/sounds/E.wav") },
    f: { note: "F", audio: new Audio("/sounds/F.wav") },
    g: { note: "G", audio: new Audio("/sounds/G.wav") },
    h: { note: "A", audio: new Audio("/sounds/A.wav") },
    j: { note: "B", audio: new Audio("/sounds/B.wav") },
    k: { note: "C+", audio: new Audio("/sounds/C.m4a") },
  
  };


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {

      const key = e.key.toLowerCase();

      if (keyMap[key]) {
        // Play sound
        keyMap[key].audio.currentTime = 0;
        keyMap[key].audio.play();


        // Set active key
        setActiveKeys((prev) => [...new Set([...prev, key])]);
      }

    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setActiveKeys((prev) => prev.filter((k) => k !== key));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };

  }, [  ]);

  return (
    <div className="flex gap-1 p-4">
      <Command onToggleVisibility={() => setShowKeys((v) => !v)} />
      <ModeToggle />
      {showKeys &&
        Object.entries(keyMap)
          // .filter(([keyChar]) => activeKeys.includes(keyChar))
          .map(([keyChar, { note }]) => (
            <PianoKey
              key={keyChar}
              note={note}
              keychar={keyChar.toUpperCase()}
              isActive={activeKeys.includes(keyChar)}
            />
          ))}
    </div>
  );
};

export default Piano;
