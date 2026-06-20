import Image from "next/image";

const DonationSlider = () => {
  const targetGoal = 100000000; // ₦100,000,000
  const currentRaised = 1024000; // ₦80,024,000
  const progressPercentage = (currentRaised / targetGoal) * 100;
  return (
    <>
    <div className="w-full max-w-[1070px] mx-auto py-5 px-2 bg-white">
        <p className="text-[#2E4049] text-[40px] leading-[48px]">₦{currentRaised.toLocaleString()}</p>
        <div>
          <div className="mt-4 h-2 w-full rounded-full bg-slate-100">
            {/* Inner Lime-Green Progress Fill */}
            <div
              className="h-2 rounded-full bg-[#92CD00] transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }} // Dynamic Inline Width styling!
            />
          </div>
          <div className="flex justify-between mt-2">
            <div>
              <span className="block text-xs text-[#667085] font-medium">
                Goal
              </span>
              <span className="font-bold text-[#2E4049]">
                ₦{targetGoal.toLocaleString()}
              </span>
            </div>
            <div className="text-right">
              <span className="block text-xs text-[#667085] font-medium">
                Remaining
              </span>
              <span className="font-bold text-[#2E4049]">
                ₦{(targetGoal - currentRaised).toLocaleString()}
              </span>
            </div>
          </div>
          <div className="flex space-x-4 mt-4 justify-between">
            <p className="flex items-center space-x-2 text-sm text-[#667085]">
              <span>
                <Image
                  src="/daysLeft.svg"
                  alt="Days Left"
                  width={12}
                  height={13}
                />
              </span>
             <span>12 Days left</span> 
            </p>
            <p className="text-[#667085]">
              ❤️ 12354 Contributors
              {/* <span>Remaining</span>❤️ 12354 Contributors */}
            </p>
          </div>
          <div className="flex space-x-4 gap-2 mt-4">
            <button className="flex items-center space-x-2 bg-[#2E4049] text-white px-8 py-4 rounded-[50px] gap-0.5">
             <span className="font-bold uppercase text-[14px] leading-1">Donate</span> 
              <span>
                <Image
                  src="/donate-button.svg"
                  alt="Donate"
                  width={20}
                  height={20}
                />
              </span>
            </button>
            <button>
              <span>
                <Image
                  src="/share-button.svg"
                  alt="Share"
                  width={20}
                  height={20}
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationSlider;
