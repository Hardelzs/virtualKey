import type React from "react";

interface PianokeyPrps {
  note: string;
  keychar: string;
  isActive: boolean;
}

const PianoKey: React.FC<PianokeyPrps> = ({ note, keychar, isActive }) => {
  return (
    <div
      className={`border w-12 h-32 flex items-center text-black justify-center text-sm font-bold cursor-pointer
      ${isActive ? "bg-yellow-400 dark:bg-green-400" : "bg-white"}
      `}
    >
      {note}
      <div className="absolute bottom-1 text-xs text-gray-500">{keychar}</div>
    </div>
  );
};

export default PianoKey;
