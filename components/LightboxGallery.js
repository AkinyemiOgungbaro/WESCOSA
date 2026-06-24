"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LightboxGallery() {
  // 1. Convert media data into an array so we can navigate by index
  const mediaItems = [
    { type: 'image', src: '/building-façade.svg', alt: 'Main building façade' },
    { type: 'image', src: '/rubble-mound.svg', alt: 'Excavated earth and rubble heap' },
    { type: 'image', src: '/ruined-wall.svg', alt: 'Demolished wall structural view' },
    { type: 'video', src: '/site-video-1.mp4', poster: '/video-thumbnail-1.jpg', alt: 'Site Video 1' },
    { type: 'video', src: '/site-video-2.mp4', poster: '/video-thumbnail-2.jpg', alt: 'Site Video 2' },
  ];

  // Track the index of the active media item (-1 or null means closed)
  const [activeIndex, setActiveIndex] = useState(null);

  // Helper functions to go forward and backward
  const showNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  const showPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  // 2. Add Keyboard event listeners (Left/Right Arrows and Escape key)
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') setActiveIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  // Get the currently open item data
  const activeMedia = activeIndex !== null ? mediaItems[activeIndex] : null;

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2">
        
        {/* LEFT COLUMN: Featured Large Image (Index 0) */}
        <div 
          className="relative w-full h-80 md:h-[500px] cursor-pointer group overflow-hidden rounded-lg shadow-sm"
          onClick={() => setActiveIndex(0)}
        >
          <Image
            src={mediaItems[0].src}
            alt={mediaItems[0].alt}
            fill
            priority
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* RIGHT COLUMN: 2x2 Sub-grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-2">
          
          {/* Top Left: Rubble Mound (Index 1) */}
          <div 
            className="relative w-full h-48 md:h-[242px] cursor-pointer group overflow-hidden rounded-lg shadow-sm"
            onClick={() => setActiveIndex(1)}
          >
            <Image
              src={mediaItems[1].src}
              alt={mediaItems[1].alt}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Top Right: Ruined Wall View (Index 2) */}
          <div 
            className="relative w-full h-48 md:h-[242px] cursor-pointer group overflow-hidden rounded-lg shadow-sm"
            onClick={() => setActiveIndex(2)}
          >
            <Image
              src={mediaItems[2].src}
              alt={mediaItems[2].alt}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          {/* Bottom Left: Video Element 1 (Index 3) */}
          <div 
            className="relative w-full h-48 md:h-[242px] bg-black rounded-lg overflow-hidden shadow-sm cursor-pointer group"
            onClick={() => setActiveIndex(3)}
          >
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-black shadow-md transform group-hover:scale-110 transition-transform">▶</div>
            </div>
            <video src={mediaItems[3].src} poster={mediaItems[3].poster} className="absolute inset-0 w-full h-full object-cover" preload="metadata" disabled />
          </div>

          {/* Bottom Right: Video Element 2 (Index 4) */}
          <div 
            className="relative w-full h-48 md:h-[242px] bg-black rounded-lg overflow-hidden shadow-sm cursor-pointer group"
            onClick={() => setActiveIndex(4)}
          >
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-black shadow-md transform group-hover:scale-110 transition-transform">▶</div>
            </div>
            <video src={mediaItems[4].src} poster={mediaItems[4].poster} className="absolute inset-0 w-full h-full object-cover" preload="metadata" disabled />
          </div>

        </div>
      </div>

      {/* --- LIGHTBOX MODAL OVERLAY WITH NAVIGATION --- */}
      {activeMedia && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 select-none"
          onClick={() => setActiveIndex(null)} 
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 text-white text-3xl font-light hover:text-gray-300 focus:outline-none z-50"
            onClick={() => setActiveIndex(null)}
          >
            ✕
          </button>

          {/* LEFT NAVIGATION BUTTON */}
          <button 
            className="absolute left-4 z-50 md:left-8 text-white text-4xl p-2 rounded-full bg-black/40 hover:bg-black/70 transition"
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
          >
            ‹
          </button>

          {/* RIGHT NAVIGATION BUTTON */}
          <button 
            className="absolute right-4 z-50 md:right-8 text-white text-4xl p-2 rounded-full bg-black/40 hover:bg-black/70 transition"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
          >
            ›
          </button>

          {/* Modal content area */}
          <div 
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} 
          >
            {activeMedia.type === 'image' ? (
              <div className="relative w-full h-full">
                <Image
                  src={activeMedia.src}
                  alt={activeMedia.alt}
                  fill
                  className="object-contain"
                  key={activeMedia.src} // Key forces Next.js to replace the image smoothly during transitions
                />
              </div>
            ) : (
              <video 
                src={activeMedia.src}
                key={activeMedia.src} // Key forces the video player to load the new source file immediately
                controls
                autoPlay
                className="max-w-full max-h-full rounded shadow-2xl"
              />
            )}
          </div>
          
          {/* Caption & Tracker */}
          <div className="text-center mt-4 space-y-1">
            <p className="text-gray-400 text-sm font-medium">{activeMedia.alt}</p>
            <p className="text-gray-600 text-xs">{activeIndex + 1} / {mediaItems.length}</p>
          </div>
        </div>
      )}
    </div>
  );
}