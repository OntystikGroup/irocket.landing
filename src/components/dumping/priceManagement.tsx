import React from 'react';

const PriceManagement = () => {
  const rows = [
    {
      manual: "Нужно регулярно следить за ценами конкурентов и подстраивать под них свои товары",
      automated: "Самостоятельно проводит конкурентный анализ и автоматически корректирует твои цены на Kaspi.kz",
    },
    {
      manual: "Нужно быстро вносить изменения в стоимость товаров, чтобы не потерять позицию в выдаче",
      automated: "Система полностью берет под контроль цены на 500 товаров одновременно",
    },
    {
      manual: "Необходимость ручного обновления цен при изменении условий рынка",
      automated: "Демпинг бот оперативно обновляет цены в зависимости от изменений на рынке",
    },
  ];

  return (
    <div className="p-4 lg:p-10 bg-slate-100">
      <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">
        Управление ценой с <span className="text-primary font-stapel font-bold">IROCKET</span> и без него
      </h1>
      <div className="md:overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-200">Ручное управление ценой</th>
              <th className="py-2 px-4 border-b-2 border-gray-200 text-primary">Управление ценой с <span className='font-stapel'>IROCKET</span></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td className="py-2 lg:py-4 px-2 lg:px-4 border-b border-gray-200">{row.manual}</td>
                <td className="py-2 lg:py-4 px-2 lg:px-4 border-b border-gray-200">{row.automated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceManagement;
