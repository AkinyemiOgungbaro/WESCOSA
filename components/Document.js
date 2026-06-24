"use client"; // Required for useState interactivity

import React, { useState } from 'react';
import Image from 'next/image';

export default function Document() {
  // Local state to manage the image pop-out preview
  const [previewImage, setPreviewImage] = useState(null);

  const documents = [
    {
      id: 1,
      title: "WESLEY COLLEGE.pdf",
      info: "1 page • PDF • 663 kB",
      fileUrl: "/WESLEY COLLEGE.pdf",
      type: "pdf"
    },
    {
      id: 2,
      title: "planning research and statistic department.jpeg",
      info: "1 page • JPEG • 78 MB",
      fileUrl: "/planning research and statistic department.jpeg",
      type: "image"
    },
    {
      id: 3,
      title: "STRUCTURAL BRIEF.pdf",
      info: "5 pages • PDF • 845 kB",
      fileUrl: "/files/structural-brief.pdf",
      type: "pdf"
    }
  ];

  const handleOpenAction = (e, doc) => {
    // Prevent standard anchor link behavior if it's an image
    if (doc.type === "image") {
      e.preventDefault();
      setPreviewImage(doc);
    }
  };

  return (
    <section id="documents" className="scroll-mt-24 bg-white p-6 relative">
      <h2 className="text-xl font-bold text-slate-800 mb-6 font-sans">Documents</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <div 
            key={doc.id} 
            className="flex flex-col bg-white border border-slate-200/70 rounded-xl overflow-hidden shadow-xs max-w-sm mx-auto w-full font-sans group"
          >
            {/* Top Container: Box is clickable to view/open */}
            <div 
              className="p-3 pb-4 bg-white flex flex-col cursor-pointer"
              onClick={(e) => handleOpenAction(e, doc)}
            >
              
              {/* PURE CSS EMBEDDED GRAPHIC */}
              <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/60 rounded-t-lg overflow-hidden flex flex-col items-center justify-center gap-2 select-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:16px_16px] opacity-30" />
                
                <svg 
                  className={`w-10 h-10 text-slate-300 transition-transform duration-300 group-hover:scale-110 ${doc.type === 'image' ? 'group-hover:text-emerald-500' : 'group-hover:text-rose-400'}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0-1.125-.504-1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                
                <span className="text-[10px] font-bold tracking-widest text-slate-400 bg-white px-2 py-0.5 rounded shadow-2xs border border-slate-100">
                  {doc.type === 'image' ? 'POP-OUT IMAGE' : 'PREVIEW'}
                </span>
              </div>

              {/* File Info Strip */}
              <div className="bg-[#f4f5f5] p-3 rounded-b-lg border-x border-b border-slate-200/60 flex items-center gap-3">
                <div className={`relative flex-shrink-0 w-9 h-10 rounded flex flex-col items-center justify-center text-white font-extrabold text-[9px] shadow-xs ${doc.type === 'image' ? 'bg-emerald-600' : 'bg-[#d91e36]'}`}>
                  <span className="mt-1 tracking-wider leading-none uppercase">{doc.type === 'image' ? 'JPEG' : 'PDF'}</span>
                  <div className={`absolute top-0 right-0 w-2.5 h-2.5 rounded-bl-xs rounded-tr-sm ${doc.type === 'image' ? 'bg-emerald-800' : 'bg-[#b21226]'}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-[14px] font-semibold text-slate-800 truncate" title={doc.title}>
                    {doc.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-medium">
                    {doc.info}
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Action Section */}
            <div className="grid grid-cols-2 border-t border-slate-100 bg-white divide-x divide-slate-100 text-center font-medium text-[14px]">
              <a 
                href={doc.fileUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={(e) => handleOpenAction(e, doc)}
                className="py-3 text-[#007f5f] hover:bg-slate-50 transition-colors active:bg-slate-100"
              >
                Open
              </a>
              <a 
                href={doc.fileUrl} 
                download 
                className="py-3 text-[#007f5f] hover:bg-slate-50 transition-colors active:bg-slate-100"
              >
                Save as...
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* --- IMAGE POP-OUT MODAL (WhatsApp Style) --- */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 select-none"
          onClick={() => setPreviewImage(null)} // Close modal when clicking dark area
        >
          {/* Top Control Bar */}
          <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent flex items-center justify-between z-50">
            <div className="text-white font-sans max-w-[70%]">
              <h4 className="text-sm font-semibold truncate">{previewImage.title}</h4>
              <p className="text-xs text-slate-300">{previewImage.info}</p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* WhatsApp Style Download Action inside layout */}
              <a 
                href={previewImage.fileUrl} 
                download 
                onClick={(e) => e.stopPropagation()}
                className="text-white hover:text-emerald-400 font-sans text-xs bg-white/10 px-3 py-1.5 rounded-md transition"
              >
                Download ↓
              </a>
              <button 
                className="text-white text-2xl font-light hover:text-slate-300 w-8 h-8 flex items-center justify-center"
                onClick={() => setPreviewImage(null)}
              >
                ✕
              </button>
            </div>
          </div>

          {/* Centralized Image Viewer Container */}
          <div 
            className="relative w-full max-w-4xl h-[75vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Keep overlay active during inner clicks
          >
            <Image
              src={previewImage.fileUrl}
              alt={previewImage.title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}