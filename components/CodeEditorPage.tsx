"use client";

import { useState, useEffect } from 'react';
import { ResizablePanelGroup, ResizablePanel } from '@/components/ui/resizable';
import { ProblemStatement } from '@/components/problem/ProblemStatement';
import { CodeEditor } from '@/components/editor/CodeEditor';
import { OutputPanel } from '@/components/editor/OutputPanel';
import { EditorHeader } from '@/components/editor/EditorHeader';
import { useTheme } from 'next-themes';
import { useCodeStorage } from '@/hooks/useCodeStorage';

export function CodeEditorPage() {
  const { theme } = useTheme();
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState<string[]>([]);
  const { code, setCode, language, setLanguage, resetCode } = useCodeStorage();

  // Timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleRun = async () => {
    setIsRunning(true);
    setOutput(["Running code..."]);
    
    // Simulate code execution with a delay
    setTimeout(() => {
      const simulatedOutputs = {
        "javascript": [
          "Test Case 1: Passed",
          "Input: [1, 2, 3, 4, 5]",
          "Expected Output: 15",
          "Your Output: 15",
          "",
          "Test Case 2: Passed",
          "Input: [-1, -2, 3, 4]",
          "Expected Output: 4",
          "Your Output: 4",
          "",
          "Time Complexity: O(n)",
          "Space Complexity: O(1)",
          "",
          "All Test Cases Passed!",
        ],
        "python": [
          "Test Case 1: Passed",
          "Input: [1, 2, 3, 4, 5]",
          "Expected Output: 15",
          "Your Output: 15",
          "",
          "Test Case 2: Passed",
          "Input: [-1, -2, 3, 4]",
          "Expected Output: 4",
          "Your Output: 4",
          "",
          "Time Complexity: O(n)",
          "Space Complexity: O(1)",
          "",
          "All Test Cases Passed!",
        ],
        "typescript": [
          "Test Case 1: Passed",
          "Input: [1, 2, 3, 4, 5]",
          "Expected Output: 15",
          "Your Output: 15",
          "",
          "Test Case 2: Failed",
          "Input: [-1, -2, 3, 4]",
          "Expected Output: 4",
          "Your Output: 6",
          "",
          "Time Complexity: O(n)",
          "Space Complexity: O(1)",
          "",
          "1 of 2 Test Cases Passed",
        ],
        "go": [
          "Test Case 1: Passed",
          "Input: [1, 2, 3, 4, 5]",
          "Expected Output: 15",
          "Your Output: 15",
          "",
          "Test Case 2: Passed",
          "Input: [-1, -2, 3, 4]",
          "Expected Output: 4",
          "Your Output: 4",
          "",
          "Time Complexity: O(n)",
          "Space Complexity: O(1)",
          "",
          "All Test Cases Passed!",
        ],
        "php": [
          "Test Case 1: Passed",
          "Input: [1, 2, 3, 4, 5]",
          "Expected Output: 15",
          "Your Output: 15",
          "",
          "Test Case 2: Passed",
          "Input: [-1, -2, 3, 4]",
          "Expected Output: 4",
          "Your Output: 4",
          "",
          "Time Complexity: O(n)",
          "Space Complexity: O(1)",
          "",
          "All Test Cases Passed!",
        ],
        "swift": [
          "Test Case 1: Passed",
          "Input: [1, 2, 3, 4, 5]",
          "Expected Output: 15",
          "Your Output: 15",
          "",
          "Test Case 2: Passed",
          "Input: [-1, -2, 3, 4]",
          "Expected Output: 4",
          "Your Output: 4",
          "",
          "Time Complexity: O(n)",
          "Space Complexity: O(1)",
          "",
          "All Test Cases Passed!",
        ],
        "rust": [
          "Test Case 1: Passed",
          "Input: [1, 2, 3, 4, 5]",
          "Expected Output: 15",
          "Your Output: 15",
          "",
          "Test Case 2: Error",
          "Input: [-1, -2, 3, 4]",
          "Error: index out of bounds: the len is 4 but the index is 5",
          "",
          "Runtime Error: Index out of bounds exception",
        ],
        "cpp": [
          "Test Case 1: Passed",
          "Input: [1, 2, 3, 4, 5]",
          "Expected Output: 15",
          "Your Output: 15",
          "",
          "Test Case 2: Passed",
          "Input: [-1, -2, 3, 4]",
          "Expected Output: 4",
          "Your Output: 4",
          "",
          "Time Complexity: O(n)",
          "Space Complexity: O(1)",
          "",
          "All Test Cases Passed!",
        ],
      };
      
      const output = simulatedOutputs[language as keyof typeof simulatedOutputs] || simulatedOutputs.javascript;
      setOutput(output);
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen w-full">
      <EditorHeader 
        language={language} 
        setLanguage={setLanguage} 
        onRun={handleRun} 
        onReset={resetCode}
        timeElapsed={timeElapsed}
        isRunning={isRunning}
      />
      
      <ResizablePanelGroup 
        direction="horizontal" 
        className="flex-grow"
      >
        <ResizablePanel 
          defaultSize={40} 
          minSize={30}
          className="overflow-auto"
        >
          <ProblemStatement />
        </ResizablePanel>
        
        <ResizablePanel defaultSize={60} minSize={30}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel 
              defaultSize={70} 
              minSize={30}
              className="overflow-hidden"
            >
              <CodeEditor 
                code={code} 
                onChange={setCode} 
                language={language}
              />
            </ResizablePanel>
            
            <ResizablePanel defaultSize={30} minSize={20}>
              <OutputPanel output={output} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}