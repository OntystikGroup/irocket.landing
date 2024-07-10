import Image from 'next/image';
import { Card, CardBody } from '@nextui-org/react';
import NotificationsImage from '@/app/assets/notifications/16.svg'; // Replace with the actual path to your image

const HowItWorks = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 px-10 py-10">
      <div className="flex flex-col justify-center space-y-6">
        <h3 className="text-4xl font-bold mb-6 text-center lg:text-left">Как это работает:</h3>
        <Card className="p-4">
          <CardBody>
            <h4 className="text-xl font-semibold mb-2">1. Увеличение отзывов и рейтингов:</h4>
            <p className='text-sm'>
              С нашей помощью ваши клиенты будут оставлять больше положительных отзывов, что повысит рейтинг вашего магазина.
              Высокие рейтинги привлекают больше покупателей и повышают доверие.
            </p>
          </CardBody>
        </Card>
        <Card className="p-4">
          <CardBody>
            <h4 className="text-xl font-semibold mb-2">2. Автоматические рассылки:</h4>
            <p className='text-sm'>
              Наши системы автоматических рассылок помогут вам поддерживать связь с клиентами. Информируйте их о новинках, акциях и
              специальных предложениях, чтобы они возвращались за новыми покупками.
            </p>
          </CardBody>
        </Card>
        <Card className="p-4">
          <CardBody>
            <h4 className="text-xl font-semibold mb-2">3. Повышение лояльности клиентов:</h4>
            <p className='text-sm'>
              Поддерживая регулярное общение с вашими клиентами, вы увеличиваете их лояльность. Довольные клиенты чаще возвращаются и
              рекомендуют вас своим знакомым.
            </p>
          </CardBody>
        </Card>
      </div>
      <div className="flex justify-center items-center">
        <Image src={NotificationsImage} height={600} alt="How it works" />
      </div>
    </div>
  );
};

export default HowItWorks;
