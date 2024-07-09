import { Avatar } from '@nextui-org/react';

export const Feedback = () => {
    return (
        <div className="mt-[6em] p-10 bg-slate-100" id="feedback">
            <div className="pt-10">
                <h2 className="text-4xl font-bold text-center">
                    Прочтите, что говорят <span className='text-primary'>наши клиенты</span>
                </h2>
                <p className="text-tiny uppercase font-semibold text-center mt-4">
                    Реальные отзывы наших партнеров. В системе можно оставлять
                    отзывы, которые публикуются здесь
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 pb-20 md:px-20">
                <div className="flex gap-2 bg-white p-6 rounded-lg shadow-lg w-full">
                    <Avatar
                        className="flex-shrink-0 rounded-full object-cover w-10 h-10"
                    />
                    <p className="text-start flex-grow">Мы с партнером действующие продавцы Kaspi. Сделали лучшую аналитику для себя и для вас.</p>
                </div>
                <div className="flex gap-2 bg-white p-6 rounded-lg shadow-lg w-full">
                    <Avatar
                        className="flex-shrink-0 rounded-full object-cover w-10 h-10"
                    />
                    <p className="text-start flex-grow">Сәлеметсіздер ме! Менің есімім Мадияр. Мен iRocket сайты арқылы аналитика жасап жүргеніме біраз уақыт болды.</p>
                </div>
                <div className="flex gap-2 bg-white p-6 rounded-lg shadow-lg w-full">
                    <Avatar
                        className="flex-shrink-0 rounded-full object-cover w-10 h-10"
                    />
                    <p className="text-start flex-grow">Irocket самый точный и быстрый сервис в Казахстане. Рекомендую!</p>
                </div>
                <div className="flex gap-2 bg-white p-6 rounded-lg shadow-lg w-full">
                    <Avatar
                        className="flex-shrink-0 rounded-full object-cover w-10 h-10"
                    />
                    <p className="text-start flex-grow">Отличный сервис, помогающий нам в работе. Рекомендую!</p>
                </div>
                <div className="flex gap-2 bg-white p-6 rounded-lg shadow-lg w-full">
                    <Avatar
                        className="flex-shrink-0 rounded-full object-cover w-10 h-10"
                    />
                    <p className="text-start flex-grow">Очень доволен результатами, которые приносит аналитика iRocket.</p>
                </div>
                <div className="flex gap-2 bg-white p-6 rounded-lg shadow-lg w-full">
                    <Avatar
                        className="flex-shrink-0 rounded-full object-cover w-10 h-10"
                    />
                    <p className="text-start flex-grow">Быстрая и точная аналитика. Отличная поддержка.</p>
                </div>
                <div className="flex gap-2 bg-white p-6 rounded-lg shadow-lg w-full">
                    <Avatar
                        className="flex-shrink-0 rounded-full object-cover w-10 h-10"
                    />
                    <p className="text-start flex-grow">Сервис действительно помогает увеличивать продажи.</p>
                </div>
                <div className="flex gap-2 bg-white p-6 rounded-lg shadow-lg w-full">
                    <Avatar
                        className="flex-shrink-0 rounded-full object-cover w-10 h-10"
                    />
                    <p className="text-start flex-grow">Очень удобный сервис, рекомендую всем!</p>
                </div>
                <div className="flex gap-2 bg-white p-6 rounded-lg shadow-lg w-full">
                    <Avatar
                        className="flex-shrink-0 rounded-full object-cover w-10 h-10"
                    />
                    <p className="text-start flex-grow">Отличный сервис, пользуюсь регулярно.</p>
                </div>
            </div>
        </div>
    );
}
