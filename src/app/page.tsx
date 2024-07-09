import { Main } from "./components/Home/main";
import Offers from "./components/Home/offer";
import { Feedback } from "./components/Home/feedback";
import { Step } from "./components/Home/step";
import { Faq } from "./components/Home/faq";
import { Contacts } from "./components/Home/contacts";
import Header from "./components/Home/Header";
import { Footer } from "./components/Home/footer";
import Tools from "./components/Home/tools";
import Statistics from "./components/Home/statistics";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Tools />
      <Offers />
      <Feedback />
      <Step />
      <Faq />
      <Statistics />
      <Contacts />
      <Footer />
    </>
  );
}
