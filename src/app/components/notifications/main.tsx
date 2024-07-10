import { Button } from '@nextui-org/react';

const Main = () => {
  return (
    <div className="grid lg:grid-cols-2 h-screen bg-slate-100 px-10">
      <div className="flex flex-col justify-center lg:mr-20">
        <h1 className="text-5xl font-bold text-start">
          Авторассылка для увелечения <span className='text-primary'>рейтинга</span>
        </h1>
        <p className="text-lg mt-4">
        Автоматизированные рассылки, отзывы и рейтинги - ваш путь к успеху!
        </p>
        <Button className="mt-6 self-start px-24" color="primary" variant='shadow' size='lg'>
          Узнать больше
        </Button>
      </div>
      <div className="flex flex-col justify-center space-y-4 mt-10 lg:mt-0">
        <div className="relative max-w-md self-start">
          <div className="bg-white p-4 rounded-lg shadow-md relative">
            <p>Очень много времени уходит на обработку отзывов. Даже копирование заготовленных ответов из шаблонов не сильно упрощает задачу. Можете чем-то помочь?</p>
            <div className="absolute left-4 transform -translate-y-full top-full w-0 h-0 border-t-8 border-t-white border-x-8 border-x-transparent"></div>
          </div>
        </div>
        <div className="relative max-w-md self-end">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md relative">
            <p>У нас есть уникальный инструмент-конструктор, который умеет генерировать автоматические ответы. Его можно собрать, исходя из твоих потребностей.</p>
            <div className="absolute right-4 transform -translate-y-full top-full w-0 h-0 border-t-8 border-t-blue-100 border-x-8 border-x-transparent"></div>
          </div>
        </div>
        <div className="relative max-w-md self-start">
          <div className="bg-white p-4 rounded-lg shadow-md relative">
            <p>Я не хочу, чтобы покупатель подумал, что ему отвечает робот. Мне нужен индивидуальный подход к каждому клиенту.</p>
            <div className="absolute left-4 transform -translate-y-full top-full w-0 h-0 border-t-8 border-t-white border-x-8 border-x-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
