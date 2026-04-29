/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7c621] text-black relative overflow-hidden font-sans antialiased p-8 sm:p-16 flex flex-col justify-between">
      {/* Structural Grid Overlays */}
      <div className="absolute inset-0 flex justify-between px-8 sm:px-16 pointer-events-none">
        <div className="w-px h-full bg-black opacity-10"></div>
        <div className="w-px h-full bg-black opacity-10"></div>
        <div className="w-px h-full bg-black opacity-10"></div>
        <div className="w-px h-full bg-black opacity-10"></div>
      </div>

      {/* Abstract Design Graphic */}
      <div className="absolute right-[-50px] top-[15%] pointer-events-none opacity-20">
        <div className="relative">
            <div className="w-[300px] h-8 bg-black rounded-full rotate-[105deg] origin-left"></div>
            <div className="w-16 h-16 border-8 border-black rounded-full absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-[2px] h-[500px] bg-black absolute left-0 top-0 -translate-x-1/2"></div>
        </div>
      </div>

      {/* Header Section */}
      <header className="relative z-10 flex justify-between items-start">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2 sm:mb-4 text-black">Architectural / Hardware</span>
          <div className="text-4xl sm:text-5xl font-black tracking-tighter uppercase leading-none flex items-center gap-4 text-black">
             Delta
          </div>
        </motion.div>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 flex-1 flex flex-col justify-center py-12">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="sm:col-span-8"
          >
            <h1 className="text-[60px] sm:text-[100px] md:text-[120px] xl:text-[160px] text-black font-black leading-[0.8] tracking-tighter uppercase sm:-ml-2 mb-4 sm:mb-8 break-words">
              OPENING<br/>DOORS<br/>SOON.
            </h1>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
