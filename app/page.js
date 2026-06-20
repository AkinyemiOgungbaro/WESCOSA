import Hero from "@/components/Hero";
import DonationSlider from "@/components/DonationSlider";
import CampaignDashboard from "@/components/DonationMethod";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
