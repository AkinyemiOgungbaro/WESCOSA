"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Contributors from "../components/Contributors";
import Document from "../components/Document";
import InfoDisplayCard from "../components/InfoDisplayCard"; // Import the generic card

export default function CampaignDashboard() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About" },
    { id: "documents", label: "Documents" },
    { id: "donation-methods", label: "Other Donation methods" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const sectionIds = ["about", "documents", "donation-methods", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleTabClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTab(id);
    }
  };

  // --- DATA SETS FOR THE CARDS ---
  const bankAccounts = [
    {
      title: "Directly Bank Transfer",
      fields: [
        { label: "Account Number", value: "2223330000456987", isTracking: true },
        { label: "Beneficiary Name", value: "Wesley College Old Students Association" },
        { label: "Bank Name", value: "Zenith Bank" },
      ],


    },

    {
      title: "Directly Bank Transfer",
      fields: [
        { label: "Account Number", value: "2223330000456987", isTracking: true },
        { label: "Beneficiary Name", value: "Organization One" },
        { label: "IFSC Code", value: "WRDSBI0BNKPIS" },
      ],

      
    },
  ];

const contactData = {
  title: "Contact Details",
  fields: [
    { label: "Name", value: "Akinyemi Ogungbaro" },
    { label: "Portfolio", value: "Secretary, Fundraising Committee" },
    { 
      label: "Contact", 
      value: "+234 903 771 6931",
      // Pass the icon right alongside the value!
      icon: (
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M19.0001 9.25558C19.0001 14.3664 14.8243 18.5105 9.67315 18.5105C8.03728 18.5105 6.50038 18.0927 5.16429 17.3589L0 19L1.68335 14.0347C0.833887 12.6398 0.34544 11.0039 0.34544 9.25568C0.34544 4.14383 4.52118 1.65171e-09 9.67315 1.65171e-09C14.8243 -9.5529e-05 19.0001 4.14374 19.0001 9.25558ZM9.67315 1.47404C5.348 1.47404 1.83085 4.96425 1.83085 9.25558C1.83085 10.9574 2.38531 12.5347 3.32447 13.8179L2.34518 16.7073L5.35822 15.7499C6.59611 16.5621 8.07941 17.0363 9.67305 17.0363C13.9964 17.0363 17.5145 13.5458 17.5145 9.25549C17.5146 4.96425 13.9965 1.47404 9.67315 1.47404ZM14.3831 11.3873C14.3253 11.2925 14.1727 11.2357 13.945 11.1223C13.7162 11.0091 12.5915 10.4597 12.3822 10.3846C12.1729 10.3091 12.0194 10.2711 11.8679 10.4978C11.7153 10.7248 11.277 11.2358 11.1433 11.3874C11.0103 11.5391 10.8772 11.5576 10.6485 11.4441C10.4194 11.3309 9.68242 11.0904 8.80946 10.3187C8.13023 9.71642 7.6713 8.97444 7.53727 8.74746C7.40458 8.52076 7.52409 8.3981 7.6373 8.2849C7.74047 8.18278 7.86628 8.01999 7.98063 7.88806C8.09517 7.75508 8.1332 7.66003 8.20943 7.50861C8.28566 7.3571 8.24774 7.22518 8.18994 7.11168C8.13319 6.99848 7.6756 5.88201 7.48483 5.42729C7.29539 4.9739 7.10452 4.9909 6.97049 4.9909C6.83751 4.9909 6.59066 5.03045 6.59066 5.03045C6.59066 5.03045 6.13231 5.0872 5.92309 5.31418C5.71379 5.54087 5.12322 6.09027 5.12322 7.20569C5.12322 8.32196 5.94182 9.40127 6.05607 9.55163C6.17061 9.70334 7.6373 12.0689 9.96194 12.9772C12.2866 13.8852 12.2866 13.5823 12.7059 13.5441C13.1244 13.5071 14.0583 12.9957 14.2491 12.4658C14.4397 11.9356 14.4397 11.4813 14.3831 11.3873Z" fill="#2E4049"/>
</svg>

      )
    },
    { label: "Email", value: "akinyemiogungbaro@gmail.com" },
  ],
};

  return (
    <div className="mx-auto max-w-6xl p-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      {/* LEFT COLUMN */}
      <div className="lg:col-span-2 space-y-8">
        {/* Sticky Tab Bar */}
        <nav className="sticky top-[100px] z-40 bg-white/95 backdrop-blur-sm flex gap-6 md:gap-8 px-4">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={(e) => handleTabClick(e, tab.id)}
              className={`py-4 text-xs md:text-sm font-semibold transition-all relative whitespace-nowrap ${
                activeTab === tab.id ? "text-[#2C6700]" : "text-[#667085] hover:text-slate-600"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#2C6700] rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Section 1: About */}
        <section id="about" className="scroll-mt-24 bg-white p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-4">About</h2>
          <p className="text-sm text-[#667085] leading-relaxed">
            Wesley College of Science (founded as Wesley College on November 5, 1905) is a government controlled, co-educational, senior secondary school located in Ibadan, Oyo State.
          </p>
        </section>

        {/* Section 2: Documents */}
        <Document />

        {/* Section 3: Other Donation Methods */}
        <section id="donation-methods" className="scroll-mt-24 space-y-4">
          <h2 className="text-[24px] font-bold text-[#2E4049]">
            Other Donation Methods
          </h2>
          <div className="flex flex-col gap-4 md:gap-6">
            {bankAccounts.map((account, idx) => (
              <InfoDisplayCard
                key={idx}
                title={account.title}
                fields={account.fields}
                shareTitle="Bank Transfer Info"
              />
            ))}
          </div>
        </section>

        {/* Section 4: Contact Details */}
        <section id="contact" className="scroll-mt-24 space-y-4">
          <h2 className="text-[24px] font-bold text-[#2E4049]">
            Contact Details
          </h2>
          
          {/* Reusing the exact same pixel-perfect structural card layout here */}
<InfoDisplayCard 
    fields={contactData.fields} 
    shareTitle="Direct Contact Details" 
  />        </section>
      </div>

      

      {/* FIXED RIGHT COLUMN */}
      <aside className="w-full lg:sticky lg:top-[156px] space-y-6">
        <Contributors />
      </aside>
    </div>
  );
}