import { Button } from "@nextui-org/react";
import Image from "next/image";
import dumpingPhoto from "@/app/assets/dumping/8.svg";

const Main = () => {
  return (
    <div className="grid lg:grid-cols-2 lg:h-screen h-full bg-slate-100 px-4 sm:px-6 lg:px-10 py-10">
      <div className="flex flex-col justify-center lg:ml-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-start">
          Автоизменение цены/Демпинг
        </h1>
        <p className="text-base sm:text-lg mt-4">
          Автоматическое регулирование цен на товары в вашем магазине на
          Kaspi.kz, чтобы оставаться конкурентоспособными и привлекать больше
          покупателей.
        </p>
        <a href="https://app.irocket.kz/register">
          <Button
            className="mt-6 self-start px-10 sm:px-14 lg:px-16 xl:px-20 w-full md:w-auto"
            color="primary"
            variant="shadow"
            size="lg"
          >
            Узнать больше
          </Button>
        </a>
      </div>
      <div className="flex justify-center items-center lg:items-end mt-10 lg:mt-0 relative lg:mb-20">
        <Image
          src={dumpingPhoto}
          alt="3D Dumping"
          className="w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default Main;
