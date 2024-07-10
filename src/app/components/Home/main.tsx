import { Button, Link } from '@nextui-org/react'
import MainImage from '@/app/assets/home/hero.svg'
import Image from 'next/image';

export const Main = () => {
   return (
      <div className="grid w-full pt-4 lg:pt-10 bg-slate-100">
         <div className="grid px-10 lg:grid-cols-2">
            <div>
               <Image src={MainImage} alt='Main image' height={600} className="hidden lg:block scale-x-[-1]" />
            </div>
            <div className="grid items-center">
               <div className="flex flex-col justify-center items-center gap-10">
                  <h1 className="text-5xl font-bold text-start">
                     Поставим Ваш магазин <br /> на{' '}
                     <span className="text-primary">1 место</span> и удержим Вас там
                  </h1>
                  <Button
                     as={Link}
                     color="primary"
                     variant="shadow"
                     href='https://app.irocket.kz/register'
                     className="min-w-44 font-semibold"
                     size='lg'
                  >
                     Попробовать бесплатно
                  </Button>
                  <p className="font-semibold text-center pb-10">
                     Не упустите шанс увеличить свои продажи и обеспечить
                     стабильный поток заказов
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
