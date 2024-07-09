import Image from "next/image";
import rocket_image from "../../home/15.svg";

const Offers = () => {
  return (
    <div className="flex flex-row mx-20 mt-10 relative">
      <div className="flex-1">
        <h3 className="text-4xl font-bold text-start">
          <span className="font-stapel font-extrabold">IROCKET</span> полезен{" "}
          <br />
          <span className="text-primary">
            на каждом этапе развития
          </span> <br /> на KASPI
        </h3>
        <div className="relative mb-10 h-[700px]">
          <div className="absolute inset-0 bg-ellipse-gradient"></div>
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 800 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M400 50 C450 100, 350 200, 400 250 C450 300, 350 400, 400 450 C450 500, 350 600, 400 650"
              stroke="#ccc"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
          </svg>
          <div className="absolute top-10 left-[calc(25%-50px)] w-60 p-4 bg-white border border-primary rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">Шаг 1</h4>
            <p>Описание первого этапа.</p>
          </div>
          <div className="absolute top-[150px] right-[calc(25%-50px)] w-60 p-4 bg-white border border-primary rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">Шаг 2</h4>
            <p>Описание второго этапа.</p>
          </div>
          <div className="absolute top-[290px] left-[calc(25%-50px)] w-60 p-4 bg-white border border-primary rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">Шаг 3</h4>
            <p>Описание третьего этапа.</p>
          </div>
          <div className="absolute top-[430px] right-[calc(25%-50px)] w-60 p-4 bg-white border border-primary rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">Шаг 4</h4>
            <p>Описание четвертого этапа.</p>
          </div>
          <div className="absolute top-[570px] left-[calc(25%-50px)] w-60 p-4 bg-white border border-primary rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">Шаг 5</h4>
            <p>Описание пятого этапа.</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <Image src={rocket_image} height={600} alt="Rocket Image" />
      </div>
    </div>
  );
};

export default Offers;
