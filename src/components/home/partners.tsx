import Image from "next/image";
import Partner1 from "@/app/assets/home/1.webp";
import Partner2 from "@/app/assets/home/2.webp";
import Partner3 from "@/app/assets/home/3.png";
import Partner4 from "@/app/assets/home/4.png";
import Partner5 from "@/app/assets/home/5.png";
import Partner6 from "@/app/assets/home/6_partner.svg";
import Partner7 from "@/app/assets/home/Xiaomi_logo_(2021-).svg";
import Partner8 from "@/app/assets/home/100 kolyasok.png";
import Partner9 from "@/app/assets/home/9.png";
import Partner10 from "@/app/assets/home/1.kz.png";



const partners = [
  { src: Partner1, alt: "SPORT IDEA" },
  { src: Partner2, alt: "LIMPOPO" },
  { src: Partner3, alt: "SMAN" },
  { src: Partner4, alt: "W" },
  { src: Partner5, alt: "TECHNO LIDER" },
  { src: Partner6, alt: "TOP.kz"},
    { src: Partner7, alt: "Xiaomi.kz"},
    { src: Partner8, alt: "100Kolyasok.kz"},
    { src: Partner9, alt: "Ресанта.kz"},
    { src: Partner10, alt: "1.kz"}
];

const Partners = () => {
  return (
    <div className="bg-slate-100 pt-10">
      <h3 className="text-4xl font-bold text-center mb-8">
        Селлеры <span className="text-primary">нам доверяют</span>
      </h3>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex justify-start space-x-8 px-4 pb-10">
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0">
              <Image
                src={partner.src}
                alt={partner.alt}
                className="h-24 w-auto rounded-2xl bg-white p-6 shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
