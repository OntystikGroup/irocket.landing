import { Card, CardBody } from '@nextui-org/react'

export const Contacts = () => {
   return (
      <div className="p-10 bg-slate-100" id='contacts'>
         <div>
            <h2 className="text-4xl font-bold text-center">
               Появились вопросы?
            </h2>
            <p className="text-tiny uppercase font-semibold text-center mt-4">
               Мы поможем найти ответы! С радостью ответим на все ваши вопросы
            </p>
         </div>
         <div className="grid lg:grid-cols-2 mt-[3em] gap-5">
            <div>
               <Card className="p-5">
                  <CardBody className="gap-4">
                     <a
                        className="text-2xl font-bold text-primary text-center"
                        href="tel:+77477174422"
                     >
                        +7 747 717 4422
                     </a>
                     <p className="font-semibold text-center">
                        Лучший способ получить быстрый ответ!
                     </p>
                  </CardBody>
               </Card>
            </div>
            <div>
               <Card className="p-5">
                  <CardBody className="gap-4">
                     <a
                        className="text-2xl font-bold text-primary text-center"
                        href="mailto:test@test.com"
                     >
                        irocket.kz@mail.ru
                     </a>
                     <p className="font-semibold text-center">
                        Отвечаем в рабочее время в течении 10 минут
                     </p>
                  </CardBody>
               </Card>
            </div>
         </div>
      </div>
   )
}
