import React from "react";
import "../layout-styles/testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
// import "swiper/css/autoplay";

function Testimonial() {
  return (
    <>
      <div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1 className="test-title">Testimonials</h1>
          <p className="test-subtitle">Listen to them not to us</p>
        </div>
        <div className="mt-5 d-flex flex-column align-items-center justify-content-center position-relative">
          <div className="position-absolute top-0 end-0">
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372136/home-page/testimonial/top-right/Vector-15_rb8jn8.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372136/home-page/testimonial/top-right/Vector-14_ykvjlv.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372135/home-page/testimonial/top-right/Vector-13_t2ygub.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372135/home-page/testimonial/top-right/Vector-12_wubd0k.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372135/home-page/testimonial/top-right/Vector-11_qjxucb.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372135/home-page/testimonial/top-right/Vector-10_h2cacc.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372135/home-page/testimonial/top-right/Vector-9_hvyxun.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372136/home-page/testimonial/top-right/Vector-8_sigdfg.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372136/home-page/testimonial/top-right/Vector-7_il7hsh.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372136/home-page/testimonial/top-right/Vector-6_lsho49.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372136/home-page/testimonial/top-right/Vector-5_ufw5rj.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372136/home-page/testimonial/top-right/Vector-4_v4lr8b.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372136/home-page/testimonial/top-right/Vector-3_ttw4th.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372136/home-page/testimonial/top-right/Vector-2_lwul5e.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372136/home-page/testimonial/top-right/Vector-1_w2anso.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372136/home-page/testimonial/top-right/Vector_z5xyef.png"
              alt="top-right-lines"
              className="test-top-right-lines position-absolute top-0 end-0"
            />
          </div>
          <img
            src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372207/home-page/testimonial/Icon_1_pwqu1n.png"
            alt="test-quotes"
            className="test-quotes position-absolute"
          />
          <div className="test-body-wrapper w-100 text-dark d-flex flex-column align-items-center position-relative">
            <Swiper
              // spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="test-body d-flex flex-column">
                <div className="rating-star position-relative">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653373899/home-page/testimonial/Star_ajpoz2.png"
                    alt="rating-star"
                    className="rating-start-img mx-1"
                  />
                </div>
                  <div className="test-message">
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula.
                  </div>
                  <div className="test-name mt-5">Coretta Dossantos</div>
                  <div className="test-place">Mumbai</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="test-body d-flex flex-column">
                <div className="rating-star position-relative">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653373899/home-page/testimonial/Star_ajpoz2.png"
                    alt="rating-star"
                    className="rating-start-img"
                  />
                </div>
                  <div className="test-message mx-1">
                    sldie1
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula.
                  </div>
                  <div className="test-name mt-5">Coretta Dossantos</div>
                  <div className="test-place">Mumbai</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="test-body d-flex flex-column">
                <div className="rating-star position-relative">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653373899/home-page/testimonial/Star_ajpoz2.png"
                    alt="rating-star"
                    className="rating-start-img"
                  />
                </div>
                  <div className="test-message">
                  sldie2
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula.
                  </div>
                  <div className="test-name mt-5">Coretta Dossantos</div>
                  <div className="test-place">Mumbai</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="test-body d-flex flex-column">
                <div className="rating-star position-relative">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653373899/home-page/testimonial/Star_ajpoz2.png"
                    alt="rating-star"
                    className="rating-start-img"
                  />
                </div>
                  <div className="test-message">
                  sldie3
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula.
                  </div>
                  <div className="test-name mt-5">Coretta Dossantos</div>
                  <div className="test-place">Mumbai</div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="test-body d-flex flex-column">
                <div className="rating-star position-relative">
                  <img
                    src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653373899/home-page/testimonial/Star_ajpoz2.png"
                    alt="rating-star"
                    className="rating-start-img"
                  />
                </div>
                  <div className="test-message">
                  sldie4
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec velit neque, auctor
                    sit amet aliquam vel, ullamcorper sit amet ligula.
                  </div>
                  <div className="test-name mt-5">Coretta Dossantos</div>
                  <div className="test-place">Mumbai</div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* <div className="test-message mt-3">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
              vel, ullamcorper sit amet ligula.
            </div>
            <div className="test-name mt-5">Coretta Dossantos</div>
            <div className="test-place">Mumbai</div> */}
          </div>
          <div className="position-absolute bottom-0 start-0">
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372171/home-page/testimonial/bottom-left/Vector-12_knro9w.png"
              alt="bottom-left-lines"
              className="test-bottom-left-lines position-absolute bottom-0 start-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372171/home-page/testimonial/bottom-left/Vector-11_yzh03l.png"
              alt="bottom-left-lines"
              className="test-bottom-left-lines position-absolute bottom-0 start-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372171/home-page/testimonial/bottom-left/Vector-10_ypntof.png"
              alt="bottom-left-lines"
              className="test-bottom-left-lines position-absolute bottom-0 start-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372171/home-page/testimonial/bottom-left/Vector-9_sco8fr.png"
              alt="bottom-left-lines"
              className="test-bottom-left-lines position-absolute bottom-0 start-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372172/home-page/testimonial/bottom-left/Vector-8_t92ora.png"
              alt="bottom-left-lines"
              className="test-bottom-left-lines position-absolute bottom-0 start-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372172/home-page/testimonial/bottom-left/Vector-7_ndeaa1.png"
              alt="bottom-left-lines"
              className="test-bottom-left-lines position-absolute bottom-0 start-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372172/home-page/testimonial/bottom-left/Vector-6_vehr3s.png"
              alt="bottom-left-lines"
              className="test-bottom-left-lines position-absolute bottom-0 start-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372172/home-page/testimonial/bottom-left/Vector-5_o3cfm8.png"
              alt="bottom-left-lines"
              className="test-bottom-left-lines position-absolute bottom-0 start-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372172/home-page/testimonial/bottom-left/Vector-4_smxaqe.png"
              alt="bottom-left-lines"
              className="test-bottom-left-lines position-absolute bottom-0 start-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372171/home-page/testimonial/bottom-left/Vector-3_qfcbvm.png"
              alt="bottom-left-lines"
              className="test-bottom-left-lines position-absolute bottom-0 start-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372171/home-page/testimonial/bottom-left/Vector-2_kxtvav.png"
              alt="bottom-left-lines"
              className="test-bottom-left-lines position-absolute bottom-0 start-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372171/home-page/testimonial/bottom-left/Vector-1_zkf2uy.png"
              alt="bottom-left-lines"
              className="test-bottom-left-lines position-absolute bottom-0 start-0"
            />
            <img
              src="https://res.cloudinary.com/dvlpuvdrd/image/upload/v1653372171/home-page/testimonial/bottom-left/Vector_k3ijak.png"
              alt="bottom-left-lines"
              className="test-bottom-left-lines position-absolute bottom-0 start-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
