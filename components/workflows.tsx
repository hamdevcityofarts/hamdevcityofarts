"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import WorflowImg01 from "@/public/images/gedoMedecin (1).png";
import WorflowImg02 from "@/public/images/gedoPatient (1).png";
import WorflowImg03 from "@/public/images/gedoLabo (1).png";
import WorflowImg04 from "@/public/images/gedoAssurance (1).png";
import WorflowImg05 from "@/public/images/gedopharma (1).png";

import Spotlight from "@/components/spotlight";



const images = [
  { src: WorflowImg01, alt: "Workflow 01" },
  { src: WorflowImg02, alt: "Workflow 02" },
  { src: WorflowImg03, alt: "Workflow 03" },
  { src: WorflowImg04, alt: "Workflow 04" },
  { src: WorflowImg05, alt: "Workflow 05" },
];


const ImageSlider = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10} // Réduction de l’espace entre les images
        slidesPerView={3} // Afficher 3 images en même temps
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-full h-auto">
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={350}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default function Workflows() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                All in one
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              L'assurance Santé tout en un !
            </h2>
            <p className="text-lg text-indigo-200/65">
              Une Proximité plus que jamais fiable entre votre ecosystème sanitaire et vous! 
            </p>
          </div>
          {/* Spotlight items */}
          <div className="w-full mx-auto flex justify-center">
  <ImageSlider />
</div>

          
        </div>
      </div>
    </section>
  );
}
