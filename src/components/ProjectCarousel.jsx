import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ProjectCard from "./ProjectCard";

function ProjectCarousel({ projects, onProjectClick }) {

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative overflow-visible">
      {/* Desktop Arrows */}
      <button className="project-prev absolute -left-20 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
        <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
      </button>

      <button className="project-next absolute -right-20 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
        <ChevronRightIcon className="h-6 w-6 text-gray-700" />
      </button>

        <div className="hidden lg:block">

          <Swiper
            className="overflow-visible"
            modules={[Navigation]}
            navigation={{
              prevEl: ".project-prev",
              nextEl: ".project-next",
            }}
            loop={true}
            slidesPerView={3}
            spaceBetween={32}
            onSlideChange={(swiper) =>
              setActiveIndex(swiper.realIndex)
            }
          >
            {projects.map((project) => (
              <SwiperSlide
                key={project.id}
                className="py-6"
              >
                <ProjectCard
                  project={project}
                  onLearnMore={() => onProjectClick(project)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="lg:hidden">
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={16}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="py-6">
                <ProjectCard
                  project={project}
                  onLearnMore={() => onProjectClick(project)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {}}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-blue-500 scale-125"
                  : "bg-slate-600 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

      {/* Mobile Arrows */}
      
    </div>
  );
}

export default ProjectCarousel;