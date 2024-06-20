import { Main } from "./components/Home/main";
import { Cards } from "./components/Home/card";
import { Offer } from "./components/Home/offer";
import { Feedback } from "./components/Home/feedback";
import { Step } from "./components/Home/step";
import { Faq } from "./components/Home/faq";
import { Team } from "./components/Home/team";
import { Contacts } from "./components/Home/contacts";
import Header from "./components/Home/Header";
import { Footer } from "./components/Home/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Cards />
      <Offer />
      <Feedback />
      <Step />
      <Faq />
      <Team />
      <Contacts />
      <Footer />
    </>
  );
}
