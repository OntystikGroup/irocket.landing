import Partner1 from "@/app/assets/home/1.webp";
import Partner2 from "@/app/assets/home/2.webp";
import Partner3 from "@/app/assets/home/3.png";
import Partner4 from "@/app/assets/home/4.png";
import Partner5 from "@/app/assets/home/5.png";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="bg-slate-100 py-10">
      <h3 className="text-4xl font-bold text-center mb-8">
        Селлеры <span className="text-primary">нам доверяют</span>
      </h3>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex justify-center space-x-8 p-4">
          <Image
            src={Partner1}
            alt="Partner 1"
            className="h-24 w-auto rounded-2xl bg-white p-6 shadow-lg"
          />
          <Image
            src={Partner2}
            alt="Partner 2"
            className="h-24 w-auto rounded-2xl bg-white p-6 shadow-lg"
          />
          <Image
            src={Partner3}
            alt="Partner 3"
            className="h-24 w-auto rounded-2xl bg-white p-6 shadow-lg"
          />
          <Image
            src={Partner4}
            alt="Partner 4"
            className="h-24 w-auto rounded-2xl bg-white p-6 shadow-lg"
          />
          <Image
            src={Partner5}
            alt="Partner 5"
            className="h-24 w-auto rounded-2xl bg-white p-6 shadow-lg"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Partners;
