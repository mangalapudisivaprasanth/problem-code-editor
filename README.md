# Code Editor Challenge

A modern, feature-rich code editor built with Next.js and TypeScript for solving programming challenges. This platform helps developers practice coding problems with real-time feedback and multi-language support.

## Key Features

### 🚀 Core Functionality
- Write and test code in 8 popular programming languages
- Real-time syntax validation and error checking
- Instant test case execution and feedback
- Auto-save functionality to preserve your progress

### 💻 Development Environment
- Advanced code editor with syntax highlighting
- Intelligent code completion
- Bracket pair matching and auto-closing
- Line numbers and code folding
- Multiple themes (Light/Dark/System)

### 📱 User Interface
- Split-view layout with resizable panels
- Problem statement and code editor side by side
- Clear output panel with test results
- Responsive design for all devices
- Session timer to track coding practice

### 🔧 Technical Features
- Local storage for code persistence
- Custom hooks for state management
- Efficient code execution and testing
- Theme-aware syntax highlighting
- Keyboard shortcuts support

## Languages Supported
- JavaScript (ES6+)
- TypeScript
- Python
- C++
- Rust
- PHP
- Go
- Swift

## Built With
- Next.js 13.5.1
- React 18.2.0
- TypeScript 5.2.2
- Tailwind CSS 3.3.3
- CodeMirror 6
- shadcn/ui components

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Project Organization
```
├── app/                 # Next.js app router
│   ├── layout.tsx      # Root layout with theme provider
│   └── page.tsx        # Main page component
├── components/         
│   ├── editor/         # Code editor components
│   │   ├── CodeEditor.tsx
│   │   ├── EditorHeader.tsx
│   │   └── OutputPanel.tsx
│   ├── problem/        # Problem components
│   └── ui/             # Reusable UI components
├── hooks/              # Custom React hooks
│   └── useCodeStorage.ts
└── lib/               # Utility functions
```

## Features In-Depth

### Code Editor
- Multi-language syntax highlighting
- Real-time code validation
- Auto-completion suggestions
- Code formatting support
- Line-by-line editing
- Multiple cursor support

### Problem Solving
- Detailed problem descriptions
- Input/output examples
- Edge case handling
- Time/space complexity analysis
- Multiple test cases
- Instant feedback

### User Experience
- Intuitive interface
- Keyboard shortcuts
- Code persistence
- Theme customization
- Session management
- Responsive layout

## Development

```bash
# Run linter
npm run lint

# Clean build files
npm run clean
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.

## Acknowledgments
- [Next.js](https://nextjs.org/) - React framework
- [CodeMirror](https://codemirror.net/) - Code editor component
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icons
