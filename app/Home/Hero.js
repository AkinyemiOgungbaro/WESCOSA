import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="mx-auto w-full mt-15 md:mt-20 ">
        <div className="mb-6 flex flex-col gap-0.5 px-4 md:px-8 space-y-6">
          <h1 className="text-[39px] text-center font-semibold text-[#2E4049] leading-tight mb-2">Let’s build a Legacy Together! - WESCOSA House Project</h1>
          {/* <p className="flex items-center justify-start py-1 px-3 rounded-2xl space-x-2 text-sm mt-2 bg-[#FEF3F2] w-fit font-medium text-[#B42318]">
            <span>
              <Image
                src="/emergency.svg"
                alt="Emergency"
                width={20}
                height={20}
              />
            </span>
            <span>Emergency Requirement</span>
          </p> */}
        </div>
        {/* 1. The parent container MUST have "relative" and a defined height class */}
        {/* <div className="relative w-full h-75 md:h-125">
          <Image
            src="/heroImage.svg"
            alt="Hero"
            fill // 2. Tells it to fill the entire parent div space automatically
            priority // 3. Optional but highly recommended for Hero elements to load faster
            className="object-cover" // 4. Keeps the aspect ratio clean without stretching the kids' faces
          />
        </div> */}

        <div className="w-full max-w-6xl mx-auto p-4">
      {/* Responsive Layout:
        - 1 Column on mobile viewports
        - 3 Columns on medium screens and up (Left image takes 1 col, right grid takes 2 cols)
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-2">
        
        {/* LEFT COLUMN: Featured Large Image (Full height on desktop) */}
        <div className="relative w-full h-80 md:h-[500px]">
          <Image
            src="/building-façade.svg" // Replace with your image path
            alt="Main building façade"
            fill
            priority // Kept for fast LCP loading
            className="object-cover rounded-lg shadow-sm"
          />
        </div>

        {/* RIGHT COLUMN: 2x2 Sub-grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-2">
          
          {/* Top Left: Rubble Mound (Image) */}
          <div className="relative w-full h-48 md:h-[242px]">
            <Image
              src="/rubble-mound.svg" 
              alt="Excavated earth and rubble heap"
              fill
              className="object-cover rounded-lg shadow-sm"
            />
          </div>

          {/* Top Right: Ruined Wall View (Image) */}
          <div className="relative w-full h-48 md:h-[242px]">
            <Image
              src="/ruined-wall.svg" 
              alt="Demolished wall structural view"
              fill
              className="object-cover rounded-lg shadow-sm"
            />
          </div>

          {/* Bottom Left: Real Video Element 1 */}
          <div className="relative w-full h-48 md:h-[242px] bg-black rounded-lg overflow-hidden shadow-sm">
            <video 
              src="/site-video-1.mp4" // Replace with your video file path
              poster="/video-thumbnail-1.jpg" // Optional: preview image before play
              controls
              className="absolute inset-0 w-full h-full object-cover"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Bottom Right: Real Video Element 2 */}
          <div className="relative w-full h-48 md:h-[242px] bg-black rounded-lg overflow-hidden shadow-sm">
            <video 
              src="/site-video-2.mp4" // Replace with your video file path
              poster="/video-thumbnail-2.jpg" // Optional: preview image before play
              controls
              className="absolute inset-0 w-full h-full object-cover"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>

        </div>

      </div>
    </div>
      </div>
    </>
  );
};

export default Hero;
