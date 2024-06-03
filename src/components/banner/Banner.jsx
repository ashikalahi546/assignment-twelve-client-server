// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[url('/image/carousel1.png')] lg:h-[576px] sm:h-96 h-52 bg-cover bg-center rounded-3xl">
            <div className="bg-[url('/image/blur.png')]  lg:h-[576px] sm:h-96 h-52 bg-cover bg-center rounded-3xl">
              <div className="lg:w-10/12 w-full items-center sm:text-start text-center flex lg:justify-end justify-center sm:py-20 py-8">
                <div className="h-96 lg:block hidden bg-white w-1 rounded"></div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-white ml-5">
                    <h2 className="md:text-4xl text-2xl font-semibold">
                      Join as Employee
                    </h2>
                    <p className="text-sm sm:mt-5 mt-2 leading-5">
                      Piano-led deep house with fat bassline, huge beats &
                      soulful male
                      <span className="sm:block hidden">
                        vocal. Extended club remix v Piano-led deep house with
                        fat bassline,
                      </span>
                      huge beats & soulful male vocal. club remix Piano.
                    </p>
                    <div className="sm:mt-8 mt-3">
                      <Link to="/joinemployee">
                        <button className="bg-primary px-5 py-2 text-white  md:text-sm text-xs  font-medium rounded-lg hover:bg-pink-500 duration-100 delay-150">
                          Join as Employee
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('/image/carousel2.png')] lg:h-[576px] sm:h-96 bg-cover h-44 bg-center rounded-3xl">
            <div className="bg-[url('/image/blur.png')]  lg:h-[576px] sm:h-96 h-52 bg-cover bg-center rounded-3xl">
              <div className="lg:w-10/12 w-full items-center sm:text-start text-center flex lg:justify-end justify-center sm:py-20 py-8">
                <div className="h-96 lg:block hidden bg-white w-1 rounded"></div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-white ml-5">
                    <h2 className="md:text-4xl text-2xl font-semibold">
                      Join as HR Manager
                    </h2>
                    <p className="text-sm sm:mt-5 mt-2 leading-5">
                      Piano-led deep house with fat bassline, huge beats &
                      soulful male
                      <span className="sm:block hidden">
                        vocal. Extended club remix v Piano-led deep house with
                        fat bassline,
                      </span>
                      huge beats & soulful male vocal. club remix Piano.
                    </p>
                    <div className="sm:mt-8 mt-3">
                      <Link to="/joinmanager">
                        <button className="bg-primary px-5 py-2 text-white  md:text-sm text-xs  font-medium rounded-lg hover:bg-pink-500 duration-100 delay-150">
                          Join as HR Manager
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
