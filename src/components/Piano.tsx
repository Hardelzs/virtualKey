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

const keyMap: KeyMap = {
  q: { note: "A-", audio: new Audio("/sounds/C-.wav") },
  w: { note: "B-", audio: new Audio("/sounds/D-.wav") },
  a: { note: "C", audio: new Audio("/sounds/C.wav") },
  s: { note: "D", audio: new Audio("/sounds/D.wav") },
  d: { note: "E", audio: new Audio("/sounds/E.wav") },
  f: { note: "F", audio: new Audio("/sounds/F.wav") },
  g: { note: "G", audio: new Audio("/sounds/G.wav") },
  h: { note: "A", audio: new Audio("/sounds/A.wav") },
  j: { note: "B", audio: new Audio("/sounds/B.wav") },
  k: { note: "C+", audio: new Audio("/sounds/C.m4a") },
  l: { note: "D+", audio: new Audio("/sounds/D.m4a") },
  z: { note: "E+", audio: new Audio("/sounds/E.m4a") },
};

const Piano: React.FC = () => {
  // Define the keys and corresponding notes
  const [activeKeys, setActiveKeys] = useState<string[]>([]);
  const [showKeys, setShowKeys] = useState(true);
  const [volume, setVolume] = useState(1);
  const increaseVolume = () => {
    setVolume((prev) => Math.min(prev + 0.1, 1));
  };
  const descreaseVolume = () => {
    setVolume((prev) => Math.max(prev - 0.1, 0));
  };
  const muteVolume = () => {
    setVolume(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (activeKeys.includes(key)) return;

      if (keyMap[key]) {
        keyMap[key].audio.volume = volume;
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
  }, []);

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

      <div className="flex flex-col gap-2 ml-6 relative z-10">
        <button
          onClick={increaseVolume}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
        >
          🔊 Volume Up
        </button>
        <button
          onClick={descreaseVolume}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          🔉 Volume Down
        </button>
        <button
          onClick={muteVolume}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          🔇 Mute
        </button>
        <div className="text-white text-sm mt-2">
          Current Volume: {(volume * 100).toFixed(0)}%
        </div>
      </div>
    </div>
  );
};

export default Piano;
