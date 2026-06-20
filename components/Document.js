import React from 'react';

export default function Document() {
  const documents = [
    {
      id: 1,
      title: "WESLEY COLLEGE.pdf",
      info: "1 page • PDF • 663 kB",
      fileUrl: "/WESLEY COLLEGE.pdf"
    },
    {
      id: 2,
      title: "OGUN STATE HUB PLAN.pdf",
      info: "3 pages • PDF • 1.2 MB",
      fileUrl: "/files/ogun-hub-plan.pdf"
    },
    {
      id: 3,
      title: "STRUCTURAL BRIEF.pdf",
      info: "5 pages • PDF • 845 kB",
      fileUrl: "/files/structural-brief.pdf"
    }
  ];

  return (
    <section id="documents" className="scroll-mt-24 bg-white p-6">
      <h2 className="text-xl font-bold text-slate-800 mb-6 font-sans">Documents</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <div 
            key={doc.id} 
            className="flex flex-col bg-white border border-slate-200/70 rounded-xl overflow-hidden shadow-xs max-w-sm mx-auto w-full font-sans group"
          >
            {/* Top Container: Holds CSS Graphic & text metadata bar */}
            <div className="p-3 pb-4 bg-white flex flex-col">
              
              {/* PURE CSS EMBEDDED GRAPHIC (No image files required!) */}
              <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200/60 rounded-t-lg overflow-hidden flex flex-col items-center justify-center gap-2 select-none">
                
                {/* Minimalist blueprint blueprint/grid effect lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:16px_16px] opacity-30" />
                
                {/* Geometric Document Stamp Vector */}
                <svg 
                  className="w-10 h-10 text-slate-300 transition-transform duration-300 group-hover:scale-110 group-hover:text-rose-400" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0-1.125-.504-1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                
                <span className="text-[10px] font-bold tracking-widest text-slate-400 bg-white px-2 py-0.5 rounded shadow-2xs border border-slate-100">
                  PREVIEW
                </span>
              </div>

              {/* File Info Strip */}
              <div className="bg-[#f4f5f5] p-3 rounded-b-lg border-x border-b border-slate-200/60 flex items-center gap-3">
                <div className="relative flex-shrink-0 w-9 h-10 bg-[#d91e36] rounded flex flex-col items-center justify-center text-white font-extrabold text-[9px] shadow-xs">
                  <span className="mt-1 tracking-wider leading-none">PDF</span>
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#b21226] rounded-bl-xs rounded-tr-sm" />
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
    </section>
  );
}