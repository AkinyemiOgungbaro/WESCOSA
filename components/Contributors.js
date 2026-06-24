import Image from "next/image";

const Contributors = () => {
  const tierConfigs = [
    {
      id: "diamond",
      title: "Diamond Contributors",
      subtext: "N5,000,000 and Above",
      textColor: "text-[#B42318]",
      bgColor: "bg-[#F4E9E9]",
      badgeColor: "bg-blue-50 border border-blue-100 rounded-md", 
      icon: "/diamond.svg", 
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
      badgeColor: "bg-amber-50 border border-amber-200 rounded-md",
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
      badgeColor: "bg-yellow-50 border border-yellow-200 rounded-md",
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
      badgeColor: "bg-slate-50 border border-slate-200 rounded-md",
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
      badgeColor: "bg-orange-50 border border-orange-200 rounded-md",
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
    /* FIXED: Wrap the collection in a responsive grid container */
    /* grid-cols-2 on mobile screens, drops back down to 1 column on desktops */
    <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 w-full">
      {tierConfigs.map((tier) => (
        <div
          key={tier.id}
          className="bg-white rounded-lg p-3 md:p-5 border border-[#EAEAEA] w-full flex flex-col justify-between"
        >
          {/* TIER CARD HEADER ZONE */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
            <div className="flex gap-2.5 items-center sm:items-start">
              {/* Responsive 32x32 Badge Icon Slot Frame */}
              <div
                className={`relative w-8 h-8 flex-shrink-0 flex items-center justify-center overflow-hidden ${tier.badgeColor}`}
              >
                <Image
                  src={tier.icon}
                  alt={tier.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>

              {/* Tier Headings Text Column */}
              <div className="flex flex-col min-w-0">
                <h3 className="font-nunito text-[14px] md:text-[16px] font-semibold text-[#1E2B38] tracking-tight leading-tight truncate">
                  {tier.title}
                </h3>
                <span
                  className={`text-[11px] md:text-[13px] font-medium mt-0.5 tracking-wide whitespace-nowrap truncate ${tier.textColor}`}
                >
                  {tier.subtext}
                </span>
              </div>
            </div>

            {/* View All Action Trigger Pill */}
            <div className="self-start sm:self-auto">
              <button
                className={`text-[10px] font-mulish font-bold px-2.5 py-1 rounded-full transition-colors cursor-pointer ${tier.textColor} ${tier.bgColor} hover:brightness-95`}
              >
                View All
              </button>
            </div>
          </div>

          {/* CONTRIBUTOR TIER MEMBERS LIST STACK */}
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-50">
            {tier.contributors.slice(0, 4).map((name, i) => (
              <div
                key={i}
                className="font-mulish text-xs md:text-sm font-medium text-[#667085] hover:text-[#1E2B38] transition-colors cursor-pointer truncate"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contributors;