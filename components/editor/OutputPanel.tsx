"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface OutputPanelProps {
  output: string[];
}

export function OutputPanel({ output }: OutputPanelProps) {
  const getLineClass = (line: string) => {
    if (line.includes("Passed")) return "text-green-500";
    if (line.includes("Failed") || line.includes("Error")) return "text-red-500";
    if (line.includes("Test Case")) return "font-semibold";
    if (line.includes("Time Complexity") || line.includes("Space Complexity")) 
      return "text-blue-500 dark:text-blue-400";
    if (line.includes("All Test Cases Passed")) 
      return "text-green-500 font-bold";
    return "";
  };

  return (
    <div className="h-full bg-card border-t border-border">
      <div className="p-3 border-b border-border">
        <h3 className="text-sm font-semibold">Output</h3>
      </div>
      <ScrollArea className="h-[calc(100%-38px)] w-full">
        <div className="p-4 font-mono text-sm">
          {output.length === 0 ? (
            <div className="text-muted-foreground italic">
              Run your code to see the output here...
            </div>
          ) : (
            output.map((line, index) => (
              <div 
                key={index} 
                className={cn(
                  "whitespace-pre-wrap mb-1",
                  getLineClass(line)
                )}
              >
                {line || " "}
              </div>
            ))
          )}
        </div>
      </ScrollArea>
    </div>
  );
}