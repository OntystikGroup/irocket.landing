import Main from "@/components/dumping/main";
import Opportunities from "@/components/dumping/opportunities";
import PriceManagement from "@/components/dumping/priceManagement";
import { Footer } from "@/components/home/footer";
import Header from "@/components/home/Header";
import CallToAction from "@/components/callToAction";

const DumpingPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Opportunities />
      <PriceManagement />
      <CallToAction />
      <Footer />
    </>
  );
};

export default DumpingPage;
