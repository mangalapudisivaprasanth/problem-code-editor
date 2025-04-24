"use client";

import { useState, useEffect } from 'react';

// Default starter code templates for each language
const codeTemplates: Record<string, string> = {
  javascript: 
`/**
 * @param {number[]} nums - Array of integers
 * @return {number} - Sum of all positive integers
 */
function sumOfPositives(nums) {
  // Write your solution here
  let sum = 0;
  
  for (let num of nums) {
    if (num > 0) {
      sum += num;
    }
  }
  
  return sum;
}`,
  
  python: 
`def sum_of_positives(nums):
    """
    :param nums: List of integers
    :return: Sum of all positive integers
    """
    # Write your solution here
    total = 0
    
    for num in nums:
        if num > 0:
            total += num
            
    return total`,
  
  typescript: 
`/**
 * @param nums Array of integers
 * @returns Sum of all positive integers
 */
function sumOfPositives(nums: number[]): number {
  // Write your solution here
  let sum = 0;
  
  for (let num of nums) {
    if (num > 0) {
      sum += num;
    }
  }
  
  return sum;
}`,
  
  go: 
`package main

func SumOfPositives(nums []int) int {
    // Write your solution here
    sum := 0
    
    for _, num := range nums {
        if num > 0 {
            sum += num
        }
    }
    
    return sum
}`,
  
  php: 
`<?php
/**
 * @param array $nums Array of integers
 * @return int Sum of all positive integers
 */
function sumOfPositives($nums) {
    // Write your solution here
    $sum = 0;
    
    foreach ($nums as $num) {
        if ($num > 0) {
            $sum += $num;
        }
    }
    
    return $sum;
}`,
  
  swift: 
`func sumOfPositives(_ nums: [Int]) -> Int {
    // Write your solution here
    var sum = 0
    
    for num in nums {
        if num > 0 {
            sum += num
        }
    }
    
    return sum
}`,
  
  rust: 
`fn sum_of_positives(nums: &[i32]) -> i32 {
    // Write your solution here
    let mut sum = 0;
    
    for &num in nums {
        if num > 0 {
            sum += num;
        }
    }
    
    sum
}`,
  
  cpp: 
`#include <vector>

/**
 * @param nums Vector of integers
 * @return Sum of all positive integers
 */
int sumOfPositives(std::vector<int>& nums) {
    // Write your solution here
    int sum = 0;
    
    for (int num : nums) {
        if (num > 0) {
            sum += num;
        }
    }
    
    return sum;
}`
};

export function useCodeStorage() {
  const [language, setLanguage] = useState<string>('javascript');
  const [code, setCode] = useState<string>(codeTemplates.javascript);
  const [codeMap, setCodeMap] = useState<Record<string, string>>({});

  // Load saved code from localStorage on initial render
  useEffect(() => {
    const savedCodeMap = localStorage.getItem('codeEditorLanguages');
    if (savedCodeMap) {
      const parsedCodeMap = JSON.parse(savedCodeMap);
      setCodeMap(parsedCodeMap);
      
      // Set the code for the current language
      const savedCode = parsedCodeMap[language];
      if (savedCode) {
        setCode(savedCode);
      } else {
        setCode(codeTemplates[language] || codeTemplates.javascript);
      }
    } else {
      // Initialize with default templates
      setCodeMap(codeTemplates);
    }
  }, []);

  // When language changes, save the current code and load the new one
  useEffect(() => {
    // Save current code for the previous language
    const updatedCodeMap = { ...codeMap };
    
    // Check if the new language has code
    if (updatedCodeMap[language]) {
      setCode(updatedCodeMap[language]);
    } else {
      // Initialize with template if no saved code
      setCode(codeTemplates[language] || codeTemplates.javascript);
      updatedCodeMap[language] = codeTemplates[language] || codeTemplates.javascript;
    }
    
    setCodeMap(updatedCodeMap);
    localStorage.setItem('codeEditorLanguages', JSON.stringify(updatedCodeMap));
  }, [language]);

  // Save code to localStorage whenever it changes
  useEffect(() => {
    const updatedCodeMap = { ...codeMap, [language]: code };
    setCodeMap(updatedCodeMap);
    localStorage.setItem('codeEditorLanguages', JSON.stringify(updatedCodeMap));
  }, [code, language]);

  // Reset code to template for the current language
  const resetCode = () => {
    const template = codeTemplates[language] || codeTemplates.javascript;
    setCode(template);
  };

  return {
    code,
    setCode,
    language,
    setLanguage,
    resetCode,
  };
}