import React from "react";

import "./HomePageContent.css";

const HomePageContent = () => {
  return (
    <>
      <section className="about-content_section">
        <img
          src="images/god.png"
          alt="god"
          className="god_image"
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
        />
        <div className="about-content_container">
          <h1>Welcome To</h1>
          <h4 data-aos="fade-right" data-aos-easing="ease-in-sine">
            <span className="logo_title1">Mr</span>{" "}
            <span className="logo_title2">&amp;</span>{" "}
            <span className="logo_title1">Mrs</span> Event Planner
          </h4>
          <div>
            <p className="about-content_container-text">
              We are one of the growing decorators in Pondicherry. We are
              organizing full events such as Wedding Decoration, Reception
              Decoration, Engagement Decoration, Birthday Decoration, Baby
              shower Decoration and Surprise Party Decoration.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES Card */}
      <section className="about-service_section">
        <div
          className="text-title_container"
          data-aos="zoom-in"
          data-aos-offset="0"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="text_title">Our Service</h1>
        </div>
        <div className="about-service_container">
          <div className="service_card_conatiner">
            <div className="service_card__image">
              <a href="/wedding">
                <img src="images/wedding.png" alt="" width="300px" />
              </a>
            </div>
            <div className="service_card__text">
              <h3>
                <a href="/wedding">Wedding</a>
              </h3>
            </div>
          </div>
          {/* card 2 */}
          <div className="service_card_conatiner">
            <div className="service_card__image">
              <a href="/birthday">
                <img
                  src="images/birthday_image.png"
                  alt="birthday"
                  width="300px"
                />
              </a>
            </div>
            <div className="service_card__text">
              <h3>
                <a href="/birthday">Birthday</a>
              </h3>
            </div>
          </div>
          {/* card 3 */}
          <div className="service_card_conatiner">
            <a href="/reception">
              <div className="service_card__image setting_images">
                <img
                  src="images/recepetion_back.png"
                  className="back_decro_image"
                  alt=""
                />
                <img
                  src="images/reception_1.png"
                  className="person_image"
                  alt=""
                />
                <div className="green_color"></div>
                <img
                  src="images/back_letter.png"
                  alt=""
                  className="sideitems_image"
                />
              </div>
            </a>
            <div className="service_card__text">
              <h3>
                <a href="/reception">Reception</a>{" "}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageContent;
