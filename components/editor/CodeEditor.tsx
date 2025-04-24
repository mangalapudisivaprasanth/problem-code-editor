"use client";

import { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { rust } from '@codemirror/lang-rust';
import { cpp } from '@codemirror/lang-cpp';
import { php } from '@codemirror/lang-php';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { githubLight } from '@uiw/codemirror-theme-github';
import { useTheme } from 'next-themes';

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  language: string;
}

export function CodeEditor({ code, onChange, language }: CodeEditorProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const getLanguageExtension = (lang: string) => {
    switch (lang) {
      case 'javascript':
        return javascript();
      case 'typescript':
        return javascript({ typescript: true });
      case 'python':
        return python();
      case 'rust':
        return rust();
      case 'cpp':
        return cpp();
      case 'php':
        return php();
      // For Go and Swift, fallback to JavaScript (as they're not directly available)
      default:
        return javascript();
    }
  };

  const theme = resolvedTheme === 'dark' ? vscodeDark : githubLight;

  if (!mounted) {
    return <div className="w-full h-full flex items-center justify-center">Loading editor...</div>;
  }

  return (
    <div className="w-full h-full overflow-hidden">
      <CodeMirror
        value={code}
        height="100%"
        theme={theme}
        extensions={[getLanguageExtension(language)]}
        onChange={onChange}
        className="h-full"
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          foldGutter: true,
          drawSelection: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          syntaxHighlighting: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          searchKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
        }}
      />
    </div>
  );
}