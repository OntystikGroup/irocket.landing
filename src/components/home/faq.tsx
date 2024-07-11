'use client'
import { Accordion, AccordionItem } from '@nextui-org/react'

export const Faq = () => {
   return (
      <div className="mt-[4em] p-10 grid" id='faq'>
         <div>
            <h2 className="text-4xl font-bold text-center">
               Есть сомнения?
            </h2>
            <div className="py-10">
               <Accordion variant="shadow" className="p-5">
                  <AccordionItem
                     key="1"
                     aria-label="Accordion 1"
                     title="Есть ли тестовый период?"
                     className="font-bold text-large"
                  >
                     <p className="text-sm font-semibold">
                        Да, мы предоставляем тестовый период на 3 дня абсолютно
                        бесплатно.
                     </p>
                  </AccordionItem>
                  <AccordionItem
                     key="2"
                     aria-label="Accordion 2"
                     title="Мой магазин не заблокируют?"
                     className=" font-bold text-large"
                  >
                     <p className="text-sm font-semibold">
                        За 3 года работы ни одной блокировки. Бот имитирует
                        действия человека.
                     </p>
                  </AccordionItem>
                  <AccordionItem
                     key="3"
                     aria-label="Accordion 3"
                     title="Мои данные никто не узнает?"
                     className=" font-bold text-large"
                  >
                     <p className="text-sm font-semibold">
                        Ваши данные под надежной трехуровневой защитой. Все
                        пароли шифруются и не разглашаются. Никто из сотрудников
                        iRocket не имеет доступ к паролям.
                     </p>
                  </AccordionItem>
                  <AccordionItem
                     key="4"
                     aria-label="Accordion 4"
                     title="Как быстро бот обновляет цены?"
                     className=" font-bold text-large"
                  >
                     <p className="text-sm font-semibold">
                        Бот обходит все Ваши товары раз в 3-4 минут и
                        моментально отправляет запрос на KASPI с новой ценой.
                     </p>
                  </AccordionItem>
                  <AccordionItem
                     key="5"
                     aria-label="Accordion 5"
                     title="Если мои конкуренты тоже используют Вашу систему?"
                     className=" font-bold text-large"
                  >
                     <p className="text-sm font-semibold">
                        Это исключено! Но все же тестовый период абсолютно
                        бесплатный.
                     </p>
                  </AccordionItem>
                  <AccordionItem
                     key="6"
                     aria-label="Accordion 6"
                     title="Предоставляете закрывающие документы?"
                     className=" font-bold text-large"
                  >
                     <p className="text-sm font-semibold">
                        Принимаем любой способ оплаты. Предоставим все
                        необходимые документы.
                     </p>
                  </AccordionItem>
               </Accordion>
            </div>
         </div>
      </div>
   )
}
