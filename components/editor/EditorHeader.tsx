"use client";

import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/editor/LanguageSelector";
import { ThemeToggle } from "@/components/editor/ThemeToggle";
import { Clock, Play, RotateCcw } from "lucide-react";
import { formatDuration } from "@/lib/utils";

interface EditorHeaderProps {
  language: string;
  setLanguage: (language: string) => void;
  onRun: () => void;
  onReset: () => void;
  timeElapsed: number;
  isRunning: boolean;
}

export function EditorHeader({
  language,
  setLanguage,
  onRun,
  onReset,
  timeElapsed,
  isRunning,
}: EditorHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-border px-4 py-2 shadow-sm">
      <div className="flex items-center space-x-4">
        <h1 className="text-lg font-semibold">Code Editor Challenge</h1>
        <div className="hidden md:flex items-center text-sm text-muted-foreground space-x-1">
          <Clock className="h-4 w-4" />
          <span>{formatDuration(timeElapsed)}</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="hidden sm:block">
            <LanguageSelector 
              language={language} 
              setLanguage={setLanguage} 
            />
          </div>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onReset}
            className="md:hidden"
            aria-label="Reset code"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onReset}
            className="hidden md:flex"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          
          <Button 
            onClick={onRun} 
            size="sm"
            disabled={isRunning}
            className="md:px-4"
          >
            <Play className="h-4 w-4 md:mr-2" />
            <span className="hidden md:inline">Run Code</span>
          </Button>
        </div>
        
        <ThemeToggle />
      </div>
    </header>
  );
}