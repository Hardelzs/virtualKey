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
} from "@/components/ui/dropdown-menu"
import { useEffect } from "react"

const Command = () => {
  // Example handlers for each command
  const handleVisibility = () => {
    alert("Visibility toggled!")
    // Add your logic here
  }

  const handleVoice = () => {
    alert("Voice command triggered!")
    // Add your logic here
  }

  const handleSongs = () => {
    alert("Songs command triggered!")
    // Add your logic here
  }

  const handleTranspose = () => {
    alert("Transpose command triggered!")
    // Add your logic here
  }

  const handleOctave = () => {
    alert("Octave command triggered!")
    // Add your logic here
  }

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key.toLowerCase()) {
          case "p":
            e.preventDefault()
            handleVisibility()
            break
          case "v":
            e.preventDefault()
            handleVoice()
            break
          case "s":
            e.preventDefault()
            handleSongs()
            break
          case "k":
            e.preventDefault()
            handleTranspose()
            break
          case "o":
            e.preventDefault()
            handleOctave()
            break
          case "q":
            e.preventDefault()
            alert("Log out triggered!")
            break
          case "t":
            e.preventDefault()
            alert("New Team triggered!")
            break
          default:
            break
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="absolute top-3 right-3"><DropdownMenu>
      <DropdownMenuTrigger asChild>
        <p className="text-gray-400 text cursor-pointer     ">Command</p>
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
            <DropdownMenuShortcut>ctrl+K</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={handleOctave}>
            Octave
            <DropdownMenuShortcut>ctrl+O</DropdownMenuShortcut>
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
            <DropdownMenuShortcut>ctrl+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Documentation</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>ctrl+Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu></div>
  )
}

export default Command