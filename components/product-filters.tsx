"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const regions = [
  { value: "sumatra", label: "Sumatra" },
  { value: "java", label: "Java" },
  { value: "bali", label: "Bali" },
  { value: "sulawesi", label: "Sulawesi" },
  { value: "flores", label: "Flores" },
  { value: "papua", label: "Papua" },
]

const processes = [
  { value: "washed", label: "Washed" },
  { value: "natural", label: "Natural" },
  { value: "honey", label: "Honey" },
  { value: "wet-hulled", label: "Wet-Hulled" },
  { value: "semi-washed", label: "Semi-Washed" },
]

export function ProductFilters() {
  const [openRegion, setOpenRegion] = useState(false)
  const [openProcess, setOpenProcess] = useState(false)
  const [selectedRegions, setSelectedRegions] = useState<string[]>([])
  const [selectedProcesses, setSelectedProcesses] = useState<string[]>([])

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Popover open={openRegion} onOpenChange={setOpenRegion}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="justify-between w-full md:w-[200px]">
            {selectedRegions.length > 0 ? `${selectedRegions.length} selected` : "Region"}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full md:w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search region..." />
            <CommandList>
              <CommandEmpty>No region found.</CommandEmpty>
              <CommandGroup>
                {regions.map((region) => (
                  <CommandItem
                    key={region.value}
                    onSelect={() => {
                      setSelectedRegions((prev) =>
                        prev.includes(region.value)
                          ? prev.filter((item) => item !== region.value)
                          : [...prev, region.value],
                      )
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedRegions.includes(region.value) ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {region.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <Popover open={openProcess} onOpenChange={setOpenProcess}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="justify-between w-full md:w-[200px]">
            {selectedProcesses.length > 0 ? `${selectedProcesses.length} selected` : "Processing Method"}
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full md:w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search process..." />
            <CommandList>
              <CommandEmpty>No process found.</CommandEmpty>
              <CommandGroup>
                {processes.map((process) => (
                  <CommandItem
                    key={process.value}
                    onSelect={() => {
                      setSelectedProcesses((prev) =>
                        prev.includes(process.value)
                          ? prev.filter((item) => item !== process.value)
                          : [...prev, process.value],
                      )
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedProcesses.includes(process.value) ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {process.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <Button variant="outline" className="w-full md:w-auto">
        Apply Filters
      </Button>

      <Button variant="ghost" className="w-full md:w-auto">
        Reset
      </Button>
    </div>
  )
}
