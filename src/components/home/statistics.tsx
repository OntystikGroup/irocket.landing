'use client'
import { useState } from 'react';

const Statistics = () => {
  const [activeTab, setActiveTab] = useState('Авторассылка');

  const notifications = [
    { value: '4.7+', description: 'минимальный рейтинг наших продавцов' },
    { value: '1/3', description: 'оставляют отзывы' },
    { value: '10', description: 'минут для подключения' },
    { value: '1М+', description: 'сообщений отправлено' },
  ];

  const dumpings = [
    { value: '3-4', description: 'минут требуется для изменения цены' },
    { value: '2x', description: 'прирост в продажах' },
    { value: '15', description: 'минут для подключения' },
    { value: '100+', description: 'активных клиентов' },
  ];

  const data = activeTab === 'Авторассылка' ? notifications : dumpings;

  return (
    <div className="p-6 lg:p-10 mt-10 bg-gradient-to-r from-slate-100 to-primary-200">
      <h3 className="text-3xl lg:text-4xl font-bold text-start">Цифры о нас</h3>
      <p className="text-xs lg:text-sm uppercase font-semibold mt-2 lg:mt-4 text-slate-500">Стабильный и надежный сервис</p>
      <div className="flex flex-row gap-4 mt-6 lg:mt-10">
        <button
          className={`px-4 py-2 font-semibold transition-all duration-300 ${activeTab === 'Авторассылка' ? 'text-primary border-b-2 border-primary' : 'text-slate-500 border-b-2 border-transparent'}`}
          onClick={() => setActiveTab('Авторассылка')}
        >
          Авторассылка
        </button>
        <button
          className={`px-4 py-2 font-semibold transition-all duration-300 ${activeTab === 'Демпинг' ? 'text-primary border-b-2 border-primary' : 'text-slate-500 border-b-2 border-transparent'}`}
          onClick={() => setActiveTab('Демпинг')}
        >
          Демпинг
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 lg:mt-10">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-4 lg:p-8 shadow-sm rounded-xl border-primary border hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-2xl lg:text-3xl font-semibold">{item.value}</h4>
            <p className="font-semibold text-slate-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
