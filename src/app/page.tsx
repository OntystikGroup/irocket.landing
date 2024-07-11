import { Main } from "../components/home/main";
import Offers from "../components/home/offer";
import { Feedback } from "../components/home/feedback";
import { Step } from "../components/home/step";
import { Faq } from "../components/home/faq";
import { Contacts } from "../components/home/contacts";
import { Footer } from "../components/home/footer";
import Tools from "../components/home/tools";
import Statistics from "../components/home/statistics";
import Partners from "../components/home/partners";
import Header from "@/components/home/Header";
import CallToAction from "@/components/notifications/callToAction";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Tools />
      <Offers />
      <Feedback />
      <Step />
      <Statistics />
      <Faq />
      <Partners />
      <CallToAction />
      <Footer />
    </>
  );
}
