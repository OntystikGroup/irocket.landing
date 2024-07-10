import React from 'react';
import { Button } from '@nextui-org/react';

const CallToAction = () => {
  return (
    <div className="flex items-center justify-between px-28 bg-slate-100 rounded-lg pt-10">
      <div className="flex-1 pr-8">
        <h2 className="text-4xl font-bold mb-4">Появились вопросы?</h2>
        <p className="text-xl mb-8">
          Оставь заявку на онлайн-встречу или звонок, и наши менеджеры свяжутся с тобой
        </p>
        <div className="flex gap-4">
          <Button className="text-white py-4 px-8 rounded-lg" variant='shadow' color='primary'>
            Заказать звонок
          </Button>
          <Button className="py-4 px-8 rounded-lg" variant='bordered' color='primary'>
            Онлайн-встреча
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center py-20">
        <img src='/3d_logo.png' alt="CTA Image" className=" h-80" />
      </div>
    </div>
  );
};

export default CallToAction;
