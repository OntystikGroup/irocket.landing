import Header from "@/components/home/Header";
import Benefits from "../../components/notifications/benefits";
import CallToAction from "../../components/callToAction";
import HowItWorks from "../../components/notifications/howItWorks";
import Main from "../../components/notifications/main";
import { Footer } from "@/components/home/footer";

const NotificationsPage = () => {
  return (
    <>
      <Header />
      <Main />
      <HowItWorks />
      <Benefits />
      <CallToAction />
      <Footer />
    </>
  );
};

export default NotificationsPage;
