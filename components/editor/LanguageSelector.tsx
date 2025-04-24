"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LanguageSelectorProps {
  language: string;
  setLanguage: (language: string) => void;
}

export function LanguageSelector({ language, setLanguage }: LanguageSelectorProps) {
  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "typescript", label: "TypeScript" },
    { value: "go", label: "Go" },
    { value: "php", label: "PHP" },
    { value: "swift", label: "Swift" },
    { value: "rust", label: "Rust" },
    { value: "cpp", label: "C/C++" },
  ];

  return (
    <Select value={language} onValueChange={setLanguage}>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}