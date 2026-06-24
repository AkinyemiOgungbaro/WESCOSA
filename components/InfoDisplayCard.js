import React, { useState } from "react";

export default function InfoDisplayCard({ title, fields, shareTitle }) {
  const [copied, setCopied] = useState(false);

  // Compile fields array into clean text for copying/sharing
  const formatText = () => {
    if (!Array.isArray(fields)) return "";
    const fieldString = fields
      .map((field) => `${field.label}: ${field.value}`)
      .join("\n");
    return title ? `${title}:\n${fieldString}` : fieldString;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formatText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleShare = async () => {
    const textToShare = formatText();
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle || title || "Shared Details",
          text: textToShare,
        });
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Error sharing: ", err);
        }
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="w-full bg-[#FAFCFD] border border-[#EFF3F5] rounded-[6px] p-4 sm:p-7 flex justify-between gap-4 relative shadow-[0_1px_3px_rgba(0,0,0,0.02)] font-sans select-none">
      {/* LEFT BLOCK: Content Details */}
      <div className="flex-1 min-w-0">
        {/* 👑 Main Title Header: Only rendered if title is provided */}
        {title && (
          <h3 className="font-nunito text-[16px] sm:text-[17px] font-bold text-[#233746] tracking-tight mb-4 sm:mb-5">
            {title}
          </h3>
        )}

        {/* Dynamic Data Rows Table Area */}
        <div className="space-y-4 sm:space-y-[14px] text-[14px]">
          {Array.isArray(fields) &&
            fields.map((field, idx) => (
              /* FIXED: Changed to stacked flex-col on mobile, flex-row on small screens and up */
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start min-w-0 w-full">
                
                {/* Field Label Track */}
                <span className="font-nunito w-full sm:w-36 text-[#667085] sm:text-[#2E4049] text-[13px] sm:text-[16px] font-normal shrink-0 mb-0.5 sm:mb-0">
                  {field.label}
                </span>
                
                {/* Field Value Text Wrapper - FIXED: Removed 'truncate', added break-words and flexibility */}
                <span
                  className={`font-nunito text-[#2E4049] text-[14px] sm:text-[16px] select-all flex items-center flex-wrap gap-1.5 min-w-0 break-words [word-break:break-word] ${
                    field.isBold !== false ? "font-bold" : "font-normal"
                  } ${field.isTracking ? "tracking-[0.01em]" : ""}`}
                >
                  <span className="break-all sm:break-normal">{field.value}</span>

                  {/* 👑 Dynamic Inline Icon: Renders only if field.icon exists */}
                  {field.icon && (
                    <span className="inline-flex shrink-0 items-center">
                      {field.icon}
                    </span>
                  )}
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* RIGHT BLOCK: Vertically Stacked Control Column */}
      <div className="flex flex-col gap-3 justify-start pt-1 shrink-0 relative">
        {/* Copy Action Button */}
        <button
          onClick={handleCopy}
          aria-label={title ? `Copy ${title}` : "Copy details"}
          className="w-8 h-8 rounded-full bg-white border border-[#E2E8ED] flex items-center justify-center text-[#2C3E50] hover:text-black hover:border-slate-300 shadow-[0_1px_2px_rgba(0,0,0,0.04)] cursor-pointer active:bg-slate-50 transition-colors group relative"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_234_4099)">
              <path
                d="M12 4.5V13.5C12 13.6326 11.9473 13.7598 11.8536 13.8536C11.7598 13.9473 11.6326 14 11.5 14H2.5C2.36739 14 2.24021 13.9473 2.14645 13.8536C2.05268 13.7598 2 13.6326 2 13.5V4.5C2 4.36739 2.05268 4.24021 2.14645 4.14645C2.24021 4.05268 2.36739 4 2.5 4H11.5C11.6326 4 11.7598 4.05268 11.8536 4.14645C11.9473 4.24021 12 4.36739 12 4.5ZM13.5 2H4.5C4.36739 2 4.24021 2.05268 4.14645 2.14645C4.05268 2.24021 4 2.36739 4 2.5C4 2.63261 4.05268 2.75979 4.14645 2.85355C4.24021 2.94732 4.36739 3 4.5 3H13V11.5C13 11.6326 13.0527 11.7598 13.1464 11.8536C13.2402 11.9473 13.3674 12 13.5 12C13.6326 12 13.7598 11.9473 13.8536 11.8536C13.9473 11.7598 14 11.6326 14 11.5V2.5C14 2.36739 13.9473 2.24021 13.8536 2.14645C13.7598 2.05268 13.6326 2 13.5 2Z"
                fill="#2E4049"
              />
            </g>
            <defs>
              <clipPath id="clip0_234_4099">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          {/* Micro Tooltip */}
          {copied && (
            <span className="absolute right-10 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap font-medium shadow-xs pointer-events-none animate-fade-in">
              Copied!
            </span>
          )}
        </button>

        {/* Share Action Button */}
        <button
          onClick={handleShare}
          aria-label={title ? `Share ${title}` : "Share details"}
          className="w-8 h-8 rounded-full bg-white border border-[#E2E8ED] flex items-center justify-center text-[#2C3E50] hover:text-black hover:border-slate-300 shadow-[0_1px_2px_rgba(0,0,0,0.04)] cursor-pointer active:bg-slate-50 transition-colors group"
        >
          <svg
            className="w-[13px] h-[13px] translate-x-[-0.5px] translate-y-[0.5px]"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21.6 10.12l-9-8A1.2 1.2 0 0010.5 3v4.05A12.72 12.72 0 002 20a1.2 1.2 0 002.18.73 14.15 14.15 0 0110.32-5.4V19a1.2 1.2 0 002.1.88l9-8a1.2 1.2 0 000-1.76z" />
          </svg>
        </button>
      </div>
    </div>
  );
}