import { Main } from "@/app/components/home/main";
import Offers from "@/app/components/home/offer";
import { Feedback } from "@/app/components/home/feedback";
import { Step } from "@/app/components/home/step";
import { Faq } from "@/app/components/home/faq";
import { Contacts } from "@/app/components/home/contacts";
import { Footer } from "@/app/components/home/footer";
import Tools from "@/app/components/home/tools";
import Statistics from "@/app/components/home/statistics";
import Partners from "@/app/components/home/partners";

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
