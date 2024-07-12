import React from "react";
import { Button } from "@nextui-org/react";

const CallToAction = () => {
  return (
    <div id="contacts" className="flex flex-col lg:flex-row-reverse items-center justify-between px-4 sm:px-10 lg:px-28 bg-slate-100 rounded-lg py-10">
      <div className="flex-1 flex justify-center items-center mb-8 lg:mb-0">
        <img
          src="/3d_logo.png"
          alt="CTA Image"
          className="h-40 sm:h-60 lg:h-80"
        />
      </div>
      <div className="flex-1 lg:pl-8 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Появились вопросы?
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Позвоните нам или напишите в WhatsApp, и наши менеджеры свяжутся с вами
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="tel:+77477174422">
            <Button
              className="text-white py-3 px-6 sm:py-4 sm:px-8 rounded-lg w-full"
              variant="shadow"
              color="primary"
            >
              Позвонить нам
            </Button>
          </a>
          <a href="https://wa.me/77477174422">
            <Button
              className="py-3 px-6 sm:py-4 sm:px-8 rounded-lg w-full"
              variant="bordered"
              color="success"
            >
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
