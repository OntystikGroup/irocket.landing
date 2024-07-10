import { Avatar, ScrollShadow } from "@nextui-org/react";

const reviews = [
  {
    id: 1,
    text: "Сервис авторассылки значительно улучшил наш рейтинг и количество положительных отзывов.",
    avatar: "", // Path to the avatar image
  },
  {
    id: 2,
    text: "Благодаря авторассылке мы смогли оперативно информировать клиентов о новинках и акциях.",
    avatar: "", // Path to the avatar image
  },
  {
    id: 3,
    text: "Авторассылка помогла нам повысить лояльность клиентов и привлечь новых покупателей.",
    avatar: "", // Path to the avatar image
  },
  {
    id: 4,
    text: "Сервис демпинга позволил нам увеличить продажи в два раза.",
    avatar: "", // Path to the avatar image
  },
  {
    id: 5,
    text: "Демпинг - отличный инструмент для быстрого изменения цен и привлечения клиентов.",
    avatar: "", // Path to the avatar image
  },
  {
    id: 6,
    text: "Очень доволен результатами использования демпинга для повышения конкурентоспособности.",
    avatar: "", // Path to the avatar image
  },
  {
    id: 7,
    text: "Авторассылка и демпинг - незаменимые инструменты для любого продавца.",
    avatar: "", // Path to the avatar image
  },
  {
    id: 8,
    text: "Благодаря авторассылке и демпингу наш бизнес вышел на новый уровень.",
    avatar: "", // Path to the avatar image
  },
  {
    id: 9,
    text: "Сервис авторассылки и демпинга сэкономил нам массу времени и усилий.",
    avatar: "", // Path to the avatar image
  },
];

export const Feedback = () => {
  return (
    <div
      className="mt-[6em] p-10 bg-gradient-to-r from-slate-100 to-primary-light"
      id="feedback"
    >
      <div className="pt-10">
        <h2 className="text-4xl font-bold text-center">
          Прочтите, что говорят{" "}
          <span className="text-primary">наши клиенты</span>
        </h2>
        <p className="text-tiny uppercase font-semibold text-center mt-4">
          Реальные отзывы наших партнеров. В системе можно оставлять отзывы,
          которые публикуются здесь
        </p>
      </div>
      <ScrollShadow size={50} hideScrollBar className="h-[600px] md:h-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 pt-10 pb-20 lg:px-20">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex gap-2 bg-white p-6 rounded-lg shadow-lg w-full"
            >
              <Avatar
                src={review.avatar}
                className="flex-shrink-0 rounded-full object-cover w-10 h-10"
              />
              <p className="text-start flex-grow">{review.text}</p>
            </div>
          ))}
        </div>
      </ScrollShadow>
    </div>
  );
};
