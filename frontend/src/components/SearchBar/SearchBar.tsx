import { useState } from "react"

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
const SearchBar = () => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (value: string) => {
      setInputValue(value)
      //lógica de achar as músicas

    }
  
    return (
      <div className="space-y-4">
        <Command className="rounded-full border shadow-md md:min-w-[450px]">
          <CommandInput placeholder="Search for the best songs.." onValueChange={handleInputChange} />
        </Command>
        {inputValue && <p className="text-sm text-muted-foreground">{inputValue}</p>}
      </div>
    )
}

export default SearchBar