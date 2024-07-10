import { Main } from "next/document";
import { Contacts } from "./components/home/contacts";
import { Faq } from "./components/home/faq";
import { Feedback } from "./components/home/feedback";
import { Footer } from "./components/home/footer";
import Offers from "./components/home/offer";
import Partners from "./components/home/partners";
import Statistics from "./components/home/statistics";
import { Step } from "./components/home/step";
import Tools from "./components/home/tools";

export default function Home() {
  return (
    <>
      <Main />
      <Tools />
      <Offers />
      <Feedback />
      <Step />
      <Statistics />
      <Faq />
      <Partners />
      <Contacts />
      <Footer />
    </>
  );
}
