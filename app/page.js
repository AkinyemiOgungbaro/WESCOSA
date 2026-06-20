import Hero from "@/app/Home/Hero";
import DonationSlider from "@/app/Home/DonationSlider";
import CampaignDashboard from "@/app/Home/DonationMethod";
import Header from "./Home/Header";
import Footer from "./Home/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-6xl space-y-8">
        <Hero />
        <DonationSlider />
        <CampaignDashboard />
      </div>
      <Footer />
    </>
  );
}
