'use client'
import { useState } from 'react';

const Statistics = () => {
  const [activeTab, setActiveTab] = useState('Авторассылка');

  const autoRassylkaData = [
    { value: '4.7+', description: 'минимальный рейтинг наших продавцов' },
    { value: '1/3', description: 'оставляют отзывы' },
    { value: '10', description: 'минут для подключения' },
    { value: '200+', description: 'активных клиентов' },
  ];

  const dempingData = [
    { value: '3-4', description: 'минут меняем цену' },
    { value: '2x', description: 'прирост в продажах' },
    { value: '15', description: 'минут для подключения' },
    { value: '100+', description: 'активных клиентов' },
  ];

  const data = activeTab === 'Авторассылка' ? autoRassylkaData : dempingData;

  return (
    <div className="mx-10 mt-10">
      <h3 className="text-4xl font-bold text-start">Цифры о нас</h3>
      <p className="text-sm uppercase font-semibold mt-4 text-slate-500">Стабильный и надежный сервис</p>
      <div className="flex gap-4 mt-10">
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'Авторассылка' ? 'text-primary border-b-2 border-primary' : 'text-slate-500'}`}
          onClick={() => setActiveTab('Авторассылка')}
        >
          Авторассылка
        </button>
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'Демпинг' ? 'text-primary border-b-2 border-primary' : 'text-slate-500'}`}
          onClick={() => setActiveTab('Демпинг')}
        >
          Демпинг
        </button>
      </div>
      <div className="flex gap-4 mt-10">
        {data.map((item, index) => (
          <div key={index} className="p-8 shadow-sm rounded-xl border-primary border hover:shadow-massive transition-shadow duration-300">
            <h4 className="text-3xl font-semibold">{item.value}</h4>
            <p className="font-semibold text-slate-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
