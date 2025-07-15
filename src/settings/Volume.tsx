import { useEffect, useState } from "react";

const Volume: React.FC<{
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  isMuted: boolean;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ volume, setVolume, isMuted, setIsMuted }) => {
  const [showVolumeAnim, setShowVolumeAnim] = useState(false);

  const increaseVolume = () => {
    setVolume((prev) => Math.min(prev + 0.1, 1));
    setShowVolumeAnim(true);
  };

  const decreaseVolume = () => {
    setVolume((prev) => Math.max(prev - 0.1, 0));
    setShowVolumeAnim(true);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    setShowVolumeAnim(true);
  };

  useEffect(() => {
    if (showVolumeAnim) {
      const timer = setTimeout(() => setShowVolumeAnim(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [showVolumeAnim]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Volume short
      if (e.shiftKey && e.key === "ArrowUp") {
        e.preventDefault();
        increaseVolume();
      }
      if (e.shiftKey && e.key === "ArrowDown") {
        e.preventDefault();
        decreaseVolume();
      }
      if (e.shiftKey && e.key === "M") {
        e.preventDefault();
        toggleMute();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div>
      <div className="flex flex-col gap-2 ml-6 relative z-10">
        {showVolumeAnim && (
          <div className="absolute top-30 left-80 -translate-x-1/2 bg-white border-black text-black dark:bg-black border dark:border-white bg-opacity-70 dark:text-white px-24 py-12 rounded-md shadow-lg transition-all animate-bounce z-20">
            {isMuted ? "🔇Muted" : `🔈Volume: ${(volume * 100).toFixed(0)}%  `}
          </div>
        )}
      </div>
    </div>
  );
};
export default Volume;
