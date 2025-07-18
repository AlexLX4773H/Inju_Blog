import React from 'react';
import { ArrowLeft, Calendar, User, Mail } from 'lucide-react';

interface BlogPostProps {
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Navigation */}
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </button>

        {/* Article Header */}
        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-colors duration-300">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2"></div>
          
          <div className="p-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Part 1: Introduction
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  July 17, 2025
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  Matrix Engineering Blog
                </div>
              </div>
            </header>

            {/* Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {/* Prerequisites */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Prerequisites</h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Understanding the assembly language (x86-64)</li>
                  <li>Basics in Reverse Engineering</li>
                  <li>Intermediary knowledge in C++</li>
                  <li>Windows API Familiarity</li>
                </ul>
              </section>

              {/* What Are we Trying to achieve */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What Are we Trying to achieve?</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  In this blog series, we're going to reverse engineer how <em>Ghost of Tsushima</em> constructs its <strong>ViewProjection matrix</strong> — the thing that turns 3D world positions into 2D screen coordinates. This is super important for stuff like ESP overlays (you can't draw a box around an enemy if you don't know where they are on screen).
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We'll be reverse engineering the game's rendering pipeline using tools like IDA Pro, breaking down how the ViewProjection matrix is built step by step including all the weird SIMD instructions it uses. The goal is to figure out where it is, how everything fits together, how its constructed and used in the game.
                </p>
              </section>

              {/* What is an ESP */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What is an ESP?</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  ESP stands for <em>Extra-Sensory Perception</em>. In game hacking, it refers to any feature that shows you information you normally wouldn't be able to see — stuff the game doesn't intend to show.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  For example, an ESP might let you:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                  <li>See players through walls</li>
                  <li>Know their exact health</li>
                  <li>Track what's in their inventory</li>
                  <li>Spot hidden loot, traps etc...</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  This gives a huge unfair advantage over others.
                </p>
              </section>

              {/* What it should look like */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">What it should look like:</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 text-center">
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">ESP Example 1</div>
                    <div className="bg-gray-200 dark:bg-gray-600 h-32 rounded flex items-center justify-center">
                      <span className="text-gray-600 dark:text-gray-300">Game Screenshot with ESP</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 text-center">
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-2">ESP Example 2</div>
                    <div className="bg-gray-200 dark:bg-gray-600 h-32 rounded flex items-center justify-center">
                      <span className="text-gray-600 dark:text-gray-300">Game Screenshot with ESP</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tools Section */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Snippets of what we will be working with:</h2>
                <div className="space-y-6">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">IDA PRO:</h3>
                    <img 
                      src="https://github.com/Zero-irp/ViewProj-Blog/blob/main/assets/images/ida-view.png?raw=true" 
                      alt="IDA PRO Assembly Analysis Screenshot" 
                     className="w-full h-[500px] object-cover rounded bg-gray-200 dark:bg-gray-600 shadow-sm"
                    />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Cheat Engine:</h3>
                   <div className="bg-gray-200 dark:bg-gray-600 h-[600px] rounded flex items-center justify-center shadow-sm">
                      <span className="text-gray-600 dark:text-gray-300">Memory Analysis</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Visual Studio:</h3>
                   <div className="bg-gray-200 dark:bg-gray-600 h-[600px] rounded flex items-center justify-center shadow-sm">
                      <span className="text-gray-600 dark:text-gray-300">Code Development</span>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Reclass:</h3>
                   <div className="bg-gray-200 dark:bg-gray-600 h-[600px] rounded flex items-center justify-center shadow-sm">
                      <span className="text-gray-600 dark:text-gray-300">Structure Analysis</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  This blog series is just me sharing what I've figured out so far while reverse engineering <em>Ghost of Tsushima</em>. There's always more to understand, and I'm sure some things I say might not be 100% perfect, so if you spot something I missed, or you have better insights, I'd really love to hear from you.
                </p>
              </section>

              {/* Contact */}
              <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <User className="h-4 w-4 mr-3 text-blue-600 dark:text-blue-400" />
                    <span>Discord: z1rp#1337</span>
                  </div>
                  <div className="flex items-center text-gray-700 dark:text-gray-300">
                    <Mail className="h-4 w-4 mr-3 text-blue-600 dark:text-blue-400" />
                    <a 
                      href="mailto:Zer0_1rp@proton.me" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      Zer0_1rp@proton.me
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;