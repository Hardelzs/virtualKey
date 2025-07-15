// import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Command = ({
  onToggleVisibility,
}:
 {
  onToggleVisibility: () => void;
}) => 
  { 
  
    const handleVisibility = () => {
    onToggleVisibility();
  };

  const handleCommands = () => {
    DropdownMenuTrigger.prototype.onSelect = () => {
      alert("Commands triggered!");
    }
  };

  const handleVoice = () => {
    alert("Voice command triggered!");
  };

  const handleSongs = () => {
    alert("Songs command triggered!");
  };

  const handleTranspose = () => {
    alert("Transpose command triggered!");
  };

  const handleOctave = () => {
    alert("Octave command triggered!");
  };
   const navigate = useNavigate();

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case "p":
            e.preventDefault();
            handleVisibility();
            break;
          case "v":
            e.preventDefault();
            handleVoice();
            break;
          case "s":
            e.preventDefault();
            handleSongs();
            break;
          case "t":
            e.preventDefault();
            handleTranspose();
            break;
          case "o":
            e.preventDefault();
            handleOctave();
            break;
          case "u":
            e.preventDefault();
            alert("Log out triggered!");
            break;
          case "w":
            e.preventDefault();
            alert("New Team triggered!");
            break;
          case "c":
            e.preventDefault();
            handleCommands()
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="absolute top-3 right-3 cursor-pointer">
      <DropdownMenu>
        <DropdownMenuTrigger asChild onSelect={handleCommands}>
          <p className="text-gray-400 text cursor-pointer relative z-10">Command</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <DropdownMenuLabel>VirtualKey</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={handleVisibility}>
              Visibility
              <DropdownMenuShortcut>ctrl+P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={handleVoice}>
              voice
              <DropdownMenuShortcut>ctrl+V</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={handleSongs}>
              Songs
              <DropdownMenuShortcut>ctrl+S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={handleTranspose}>
              Transpose
              <DropdownMenuShortcut>ctrl+T</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={handleOctave}>
              Octave
              <DropdownMenuShortcut>ctrl+O</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={handleOctave}>
              Volume
              <DropdownMenuShortcut>ctrl+M</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Email</DropdownMenuItem>
                  <DropdownMenuItem>Message</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>More...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              New Team
              <DropdownMenuShortcut>ctrl+W</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/docs")}>Documentation</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>ctrl+U</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Command;
