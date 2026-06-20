import Image from "next/image";

const Contributors = () => {
  const tierConfigs = [
    {
      id: "diamond",
      title: "Diamond Contributors",
      subtext: "N5,000,000 and Above",
      textColor: "text-[#B42318]",
      bgColor: "bg-[#F4E9E9]",
      badgeColor: "bg-blue-50 border-blue-100", // Soft blue ring matching your 32x32 image guide
      icon: "/diamond.svg", // Replace with your diamond crown SVG paths/assets
      contributors: [
        "Mogaji Oyeleke",
        "Ayotunji Oyelakin",
        "Kunle Amoo",
        "Ayo Idowu",
        "Ojelabi Akintunde",
      ],
    },
    {
      id: "platinum",
      title: "Platinum Contributors",
      subtext: "N3,000,000 - N4,999,999",
      textColor: "text-[#B42318]",
      bgColor: "bg-[#F4E9E9]",
      badgeColor: "bg-amber-50 border-amber-200",
      icon: "/platinum.svg",
      contributors: [
        "Mogaji Oyeleke",
        "Ayotunji Oyelakin",
        "Kunle Amoo",
        "Ayo Idowu",
        "Ojelabi Akintunde",
      ],
    },
    {
      id: "gold",
      title: "Gold Contributors",
      subtext: "N1,000,000 - N2,999,999",
      textColor: "text-[#B42318]",
      bgColor: "bg-[#F4E9E9]",
      badgeColor: "bg-yellow-50 border-yellow-200",
      icon: "/gold.svg",
      contributors: [
        "Mogaji Oyeleke",
        "Ayotunji Oyelakin",
        "Kunle Amoo",
        "Ayo Idowu",
        "Ojelabi Akintunde",
      ],
    },
    {
      id: "silver",
      title: "Silver Contributors",
      subtext: "N500,000 - N999,999",
      textColor: "text-[#B42318]",
      bgColor: "bg-[#F4E9E9]",
      badgeColor: "bg-slate-50 border-slate-200",
      icon: "/silver.svg",
      contributors: [
        "Mogaji Oyeleke",
        "Ayotunji Oyelakin",
        "Kunle Amoo",
        "Ayo Idowu",
        "Ojelabi Akintunde",
      ],
    },
    {
      id: "bronze",
      title: "Bronze Contributors",
      subtext: "N499,000 and below",
      textColor: "text-[#B42318]",
      bgColor: "bg-[#F4E9E9]",
      badgeColor: "bg-orange-50 border-orange-200",
      icon: "/bronze.svg",
      contributors: [
        "Mogaji Oyeleke",
        "Ayotunji Oyelakin",
        "Kunle Amoo",
        "Ayo Idowu",
        "Ojelabi Akintunde",
      ],
    },
  ];
  return (
    <>
      {tierConfigs.map((tier) => (
        /* Individual Tier Card Wrapper Container Layout */
        <div
          key={tier.id}
          className="bg-white rounded-lg p-6 border-2 border-[#EAEAEA]  w-full"
        >
          {/* TIER CARD HEADER ZONE */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex gap-3">
              {/* Responsive 32x32 Badge Icon Slot Frame */}
              <div
                className={`relative w-8 h-8 flex-shrink-0 flex items-center justify-center overflow-hidden ${tier.badgeColor}`}
              >
                <span className="text-sm">
                  <Image
                    src={tier.icon}
                    alt={tier.title}
                    width={32}
                    height={32}
                  />
                </span>
                {/* Once you have your standalone SVG badge illustrations ready, use this:
                <Image src={`/${tier.id}-badge.svg`} alt={tier.title} fill className="object-contain p-1" /> 
                */}
              </div>

              {/* Tier Headings Text Column */}
              <div className="flex flex-col">
                <h3 className="font-nunito text-[17px] font-semibold text-[#1E2B38] tracking-tight leading-tight">
                  {tier.title}
                </h3>
                <span
                  className={`text-[14px] font-medium mt-1 tracking-wide ${tier.textColor}`}
                >
                  {tier.subtext}
                </span>
              </div>
            </div>

            {/* View All Action Trigger Pill */}
            <button
              className={`text-[11px] font-mulish font-bold px-3 py-1 rounded-full transition-colors ${tier.textColor} ${tier.bgColor} hover:brightness-95`}
            >
              View All
            </button>
          </div>

          {/* CONTRIBUTOR TIER MEMBERS LIST STACK */}
          <div className="flex flex-col gap-3.5">
            {tier.contributors.map((name, i) => (
              <div
                key={i}
                className="font-mulish text-sm md:text-base font-medium text-[#667085] hover:text-[#1E2B38] transition-colors cursor-pointer"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Contributors;
