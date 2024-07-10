import { Button, Card, CardBody, Divider, Link } from '@nextui-org/react'
import StepImage from '@/app/assets/home/6.svg';
import Image from 'next/image';

export const Step = () => {
   return (
      <div className="pt-24 p-10 grid lg:grid-cols-2 justify-center items-center" id='step'>
         <div className="grid justify-center items-center">
            <h2 className="text-4xl font-bold text-center">
               С чего начать?
            </h2>
            <Card className="grid max-w-[400px] mt-10">
               <CardBody className="gap-4 p-8">
                  <p className="font-semibold text-start">
                     {' '}
                     1. Регистрируйтесь у нас на сайте
                  </p>
                  <Divider />
                  <p className="font-semibold text-start">
                     {' '}
                     2. Добавляйте магазин
                  </p>
                  <Divider />
                  <p className="font-semibold text-start">
                     {' '}
                     3. Настраивайте минимальные цены
                  </p>
                  <Divider />
                  <p className="font-semibold text-start">
                     {' '}
                     4. Будьте на первых позициях!
                  </p>
               </CardBody>
            </Card>
            <Button
               as={Link}
               color="primary"
               variant="shadow"
               href='https://app.irocket.kz/register'
               className="min-w-44 font-semibold mt-10"
               size='lg'
            >
               Зарегистрироваться
            </Button>
         </div>
         <div>
            <Image src={StepImage} alt='Image Step' width={480} className="object-cover rounded-xl max-w-[30em] hidden lg:block" />
         </div>
      </div>
   )
}
