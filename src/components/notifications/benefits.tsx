import Image from "next/image";
import BenefitsImage from "@/app/assets/notifications/5.svg";

const benefits = [
  {
    id: 1,
    title: "Увеличение продаж",
    description:
      "Наши клиенты видят значительный рост продаж благодаря улучшенному рейтингу и отзывам.",
    icon: "/dollar-front-color.png",
  },
  {
    id: 2,
    title: "Экономия времени",
    description:
      "Автоматические рассылки позволяют вам сосредоточиться на других аспектах бизнеса, пока мы занимаемся маркетингом.",
    icon: "/clock-front-color.png",
  },
  {
    id: 3,
    title: "Повышение доверия",
    description:
      "Высокий рейтинг и положительные отзывы привлекают новых клиентов и увеличивают доверие к вашему магазину.",
    icon: "/thumb-up-front-color.png",
  },
  {
    id: 4,
    title: "Лояльность клиентов",
    description: 
      "Диалог в мессенджерах помогает найти индивидуальный подход к каждому клиенту, что позитивно сказывается на ваших взаимодействиях с покупателем",
    icon: "/notify-heart-front-color.png",
  }
];

const Benefits = () => {
  return (
    <div className="grid gap-10 px-4 py-10 bg-slate-100 lg:grid-cols-2 lg:px-10">
      <div className="hidden lg:flex justify-center items-center">
        <Image src={BenefitsImage} alt="Benefits image" height={500} width={500} />
      </div>
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center lg:text-left mb-6 lg:mb-10">
          Преимущества работы <span className="text-primary">с нами</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="p-4 sm:p-6 flex items-start bg-white rounded-xl shadow-lg gap-4">
              <Image src={benefit.icon} alt="icon" height={40} width={40} />
              <span>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm">{benefit.description}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
