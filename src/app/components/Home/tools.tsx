import { Button } from "@nextui-org/react";

const Tools = () => {
  return (
    <div className="mx-10 p-10 shadow-lg border rounded-3xl mt-[-32px] z-20 relative bg-white">
      <h2 className="text-4xl font-bold text-start">
        Здесь есть инструменты <br /> для {""}
        <span className="text-primary">решения ваших задач</span>
      </h2>
      <div className="flex gap-4">
        <div className="mt-8 space-y-2">
          <h3 className="text-2xl font-bold w-fit p-[6px] text-primary rounded-lg border-b border-b-primary">
            Автоизменение цены/Демпинг
          </h3>
          <p>
            Автоматическое регулирование цен на товары в вашем магазине на
            Kaspi.kz, чтобы оставаться конкурентоспособными и привлекать больше
            покупателей.
          </p>
          <Button color="primary" variant="light">
            Подробнее
          </Button>
        </div>
        <div className="mt-8 space-y-2 w-fit">
          <h3 className="text-2xl font-bold w-fit p-[6px] text-primary rounded-lg border-b border-b-primary">
            Авторассылка и отзывы
          </h3>
          <p>
            Наши системы автоматических рассылок помогут вам поддерживать связь
            с клиентами. Информируйте их о статусе их заказа, чтобы они были
            проинформированы о доставке и рекомендовали вас друзьям и знакомым.
          </p>
          <Button color="primary" variant="light">
            Подробнее
          </Button>
        </div>
        <div className="mt-8 space-y-2 w-fit">
          <h3 className="text-2xl font-bold w-fit p-[6px] text-primary rounded-lg border-b border-b-primary">
            Массовая рассылка
          </h3>
          <p>
            Эффективные автоматизированные рассылки для информирования ваших
            клиентов о новинках, акциях, запросе оставить отзыв по архиву и
            специальных предложениях, способствуя увеличению продаж и повышению
            лояльности.
          </p>
          <Button color="primary" variant="light">
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tools;
