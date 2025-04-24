export function ProblemStatement() {
  return (
    <div className="h-full bg-card overflow-auto">
      <div className="p-4 border-b border-border bg-card sticky top-0 z-10">
        <h2 className="text-lg font-semibold">Sum of Positive Numbers</h2>
      </div>
      <div className="p-6">
        <section className="mb-6">
          <h3 className="text-md font-medium mb-2">Problem Description</h3>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Given an array of integers, write a function to find the sum of all positive integers in the array.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-md font-medium mb-2">Input Format</h3>
          <p className="text-sm text-foreground/90 leading-relaxed">
            An array of integers where each element can be positive or negative.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-md font-medium mb-2">Output Format</h3>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Return a single integer representing the sum of all positive integers in the array.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-md font-medium mb-2">Constraints</h3>
          <ul className="list-disc pl-5 text-sm text-foreground/90 leading-relaxed">
            <li>The array length will be between 1 and 10^5.</li>
            <li>Each element in the array will be between -10^6 and 10^6.</li>
            <li>The sum of all positive integers will not exceed 10^9.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-md font-medium mb-2">Example 1</h3>
          <div className="bg-muted p-3 rounded-md text-sm font-mono mb-2">
            <p><span className="font-semibold">Input:</span> [1, 2, 3, 4, 5]</p>
            <p><span className="font-semibold">Output:</span> 15</p>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Explanation: The positive integers in the array are 1, 2, 3, 4, and 5. Their sum is 1 + 2 + 3 + 4 + 5 = 15.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-md font-medium mb-2">Example 2</h3>
          <div className="bg-muted p-3 rounded-md text-sm font-mono mb-2">
            <p><span className="font-semibold">Input:</span> [-1, -2, 3, 4]</p>
            <p><span className="font-semibold">Output:</span> 7</p>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Explanation: The positive integers in the array are 3 and 4. Their sum is 3 + 4 = 7.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-md font-medium mb-2">Example 3</h3>
          <div className="bg-muted p-3 rounded-md text-sm font-mono mb-2">
            <p><span className="font-semibold">Input:</span> [-1, -2, -3]</p>
            <p><span className="font-semibold">Output:</span> 0</p>
          </div>
          <p className="text-sm text-foreground/90 leading-relaxed">
            Explanation: There are no positive integers in the array, so the sum is 0.
          </p>
        </section>
      </div>
    </div>
  );
}