import { Button, Link } from '@nextui-org/react';
import { Card, CardBody, CardFooter } from '@nextui-org/react';

export const Cards = () => {
    return (
        <div className="grid p-10 md:px-16 md:gap-32 lg:grid-cols-2 md:grid-cols-1 md:mt-0">
            <div className="grid lg:mt-[-8rem]">
                <Card shadow="lg" className="min-w-[200px] p-4 mb-8">
                    <CardBody className="gap-2">
                        <h4 className="text-center font-bold text-large">
                            До 20 товаров
                        </h4>
                        <p className="text-center font-bold">10 000 тг</p>
                    </CardBody>
                    <CardFooter className="grid justify-center">
                        <Button
                            as={Link}
                            color="danger"
                            variant="ghost"
                            href="https://app.irocket.kz/register"
                            className="min-w-44 font-semibold hover:opacity-100"
                        >
                            Начать продавать
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="grid lg:mt-[-8rem]">
                <Card shadow="lg" className="min-w-[200px] p-4 mb-8">
                    <CardBody className="gap-2">
                        <h4 className="text-center font-bold text-large">
                            До 50 товаров
                        </h4>
                        <p className="text-center font-bold">24 990 тг</p>
                    </CardBody>
                    <CardFooter className="grid justify-center">
                        <Button
                            as={Link}
                            variant="ghost"
                            color="danger"
                            href="https://app.irocket.kz/register"
                            className="min-w-44 font-semibold hover:opacity-100"
                        >
                            Увеличить продажи
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="grid lg:mt-[-8rem]">
                <Card shadow="lg" className="min-w-[200px] p-4 mb-8">
                    <CardBody className="gap-2">
                        <h4 className="text-center font-bold text-large">
                            До 100 товаров
                        </h4>
                        <p className="text-center font-bold">34 990 тг</p>
                    </CardBody>
                    <CardFooter className="grid justify-center">
                        <Button
                            as={Link}
                            variant="ghost"
                            color="danger"
                            href="https://app.irocket.kz/register"
                            className="min-w-44 font-semibold hover:opacity-100"
                        >
                            Повысить прибыль
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <div className="grid lg:mt-[-8rem]">
                <Card shadow="lg" className="min-w-[200px] p-4 mb-8">
                    <CardBody className="gap-2">
                        <h4 className="text-center font-bold text-large">
                            Свыше 100 товаров
                        </h4>
                        <p className="text-center">
                            <span className="font-bold">34 990 тг + 10 000 тг</span> за каждые 100 товаров
                        </p>
                    </CardBody>
                    <CardFooter className="grid justify-center">
                        <Button
                            as={Link}
                            color="danger"
                            variant="shadow"
                            href="https://app.irocket.kz/register"
                            className="min-w-44 font-semibold"
                        >
                            Быть первым!
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
