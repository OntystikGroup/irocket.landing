import photo from "@/app/assets/dumping/3d_dumping.png";
import ArrowUpIcon from "@/components/icons/ArrowUp.icon"; // Ensure these are actual React components
import CircleStackIcon from "@/components/icons/CircleStack.icon"; // Ensure these are actual React components
import ChartIcon from "@/components/icons/Chart.icon"; // Ensure these are actual React components

const Opportunities = () => {
  const opportunities = [
    {
      icon: <ChartIcon />,
      title: "Автоматически настраивает цены на товары",
      description:
        "Выбери условия и ценовой диапазон, и инструмент возьмет стоимость товара под управление.",
    },
    {
      icon: <CircleStackIcon />,
      title: "Устанавливает лучшие цены",
      description:
        "Большинство покупателей сравнивают цены на товары от разных продавцов и выбирают наиболее выгодный.",
    },
    {
      icon: <ArrowUpIcon />,
      title: "Мониторит цены вместо тебя",
      description:
        "Забудь о ручном отслеживании цен. Инструмент оценивает карточки конкурентов и помогает всегда оставаться в рынке.",
    },
    // {
    //   icon: <YourIconComponent />,
    //   title: "Не допустит out-of-stock",
    //   description: "Простой контроль остатков на складе за счет автоматического поднятия цены."
    // }
  ];

  return (
    <div className="p-6 lg:p-10">
      <h1 className="text-3xl font-bold mb-6">
        Возможности <span className="text-primary">Демпинг бота</span>
      </h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex justify-center items-center lg:items-start mt-10 lg:mt-0 w-full lg:w-5/12">
          <img src={photo.src} alt="3D Dumping" className="lg:h-64 w-auto mx-auto lg:mx-0" />
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-7/12">
          {opportunities.map((item, index) => (
            <div
              key={index}
              className="flex items-start p-4 bg-white rounded-lg shadow-md"
            >
              <div className="mr-4 bg-slate-200 p-2 rounded-lg">
                {item.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-700 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
