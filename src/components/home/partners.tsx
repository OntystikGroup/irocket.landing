import Image from "next/image";
import Partner1 from "@/app/assets/home/1.webp";
import Partner2 from "@/app/assets/home/2.webp";
import Partner3 from "@/app/assets/home/3.png";
import Partner4 from "@/app/assets/home/4.png";
import Partner5 from "@/app/assets/home/5.png";
import Partner6 from "@/app/assets/home/6_partner.svg";

const partners = [
  { src: Partner1, alt: "SPORT IDEA" },
  { src: Partner2, alt: "LIMPOPO" },
  { src: Partner3, alt: "SMAN" },
  { src: Partner4, alt: "W" },
  { src: Partner5, alt: "TECHNO LIDER" },
  { src: Partner6, alt: "TOP.kz"}
];

const Partners = () => {
  return (
    <div className="bg-slate-100 pt-10">
      <h3 className="text-4xl font-bold text-center mb-8">
        Селлеры <span className="text-primary">нам доверяют</span>
      </h3>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex justify-start lg:justify-center space-x-8 px-4 pb-10">
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
