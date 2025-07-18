import React, { useState, useEffect } from 'react';
import { Sun, Moon, BookOpen, ExternalLink } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Update localStorage and document class when theme changes
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Matrix Engineering Blog
              </h1>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ghost of Tsushima Matrix Blog
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Welcome to my comprehensive blog series on reverse engineering the matrix pipeline 
              of a AAA game. Dive deep into the mathematical foundations of 3D graphics.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-1 w-32 mx-auto rounded-full"></div>
        </div>

        {/* Blog Parts Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 transition-colors duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-medium mr-3">
              Series
            </span>
            Parts
          </h3>
          
          <div className="space-y-6">
            {/* Part 1 */}
            <div className="group">
              <a href="#part1" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
                <span className="font-medium">Part 1: Introduction</span>
                <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 ml-4">
                Setting the foundation for matrix reverse engineering
              </p>
            </div>

            {/* Part 2 */}
            <div className="group">
              <a href="#part2" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
                <span className="font-medium">Part 2: Understanding 3D Transformation Matrices</span>
                <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 ml-4">
                Deep dive into the mathematical core of 3D graphics
              </p>
              
              {/* Sub-parts */}
              <div className="ml-6 mt-4 space-y-3">
                <div className="group/sub">
                  <a href="#part2-1" className="flex items-center text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-200">
                    <span className="text-sm">Part 2.1: View Matrix</span>
                    <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                  </a>
                </div>
                <div className="group/sub">
                  <a href="#part2-2" className="flex items-center text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-200">
                    <span className="text-sm">Part 2.2: Projection Matrix</span>
                    <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                  </a>
                </div>
                <div className="group/sub">
                  <a href="#part2-3" className="flex items-center text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-200 transition-colors duration-200">
                    <span className="text-sm">Part 2.3: View Projection Matrix</span>
                    <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

            {/* Part 3 */}
            <div className="group">
              <a href="#part3" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
                <span className="font-medium">Part 3: Finding & Reversing Matrices</span>
                <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 ml-4">
                Practical techniques for matrix discovery and analysis
              </p>
            </div>

            {/* Part 4 */}
            <div className="group">
              <a href="#part4" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
                <span className="font-medium">Part 4: Reversing SIMD Math</span>
                <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 ml-4">
                Advanced optimization techniques and SIMD operations
              </p>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>Series Progress</span>
              <span>4 Parts Available</span>
            </div>
            <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-3/4 transition-all duration-300"></div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Additional Resources
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Source Code</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Access the complete source code examples and tools used in this series.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h4 className="font-medium text-gray-900 dark:text-white mb-2">Discussion</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Join the community discussion and share your own matrix discoveries.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Reversing The ViewProjection Matrix
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Reverse Engineering the ViewProjection Pipeline in Ghost of Tsushima
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:zieji.tip@proton.me" 
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
              >
                zieji.tip@proton.me
              </a>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                © 2024 Matrix Engineering Blog
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;