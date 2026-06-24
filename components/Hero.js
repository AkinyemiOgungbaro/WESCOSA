import LightboxGallery from './LightboxGallery';

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

      <LightboxGallery />
      </div>
    </>
  );
};

export default Hero;
