import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./galleryStyle.css";
import { engagement_data } from "./PhotoDatas";

const EngagementPage = () => {
  const [model, setModel] = useState(false);
  const [tempImgsrc, setTempImgsrc] = useState("");
  const getImage = (imgSrc) => {
    console.log(imgSrc);
    setTempImgsrc(imgSrc);
    setModel(true);
  };
  return (
    <div className="gallery_layout">
      <div
        className="text-title_container"
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-easing="ease-in-sine"
      >
        <h3 className="text_title">Engagement Decoration</h3>
      </div>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgsrc} alt="gallery_photo" className="tempImgsrc" />
        <CloseIcon onClick={() => setModel(false)} className="close_icon" />
      </div>
      <section className="gallery_section">
        <div className="gallery_container_box">
          {engagement_data.map((el, id) => (
            <div
              className="gallery_container-imagecard"
              key={id}
              onClick={() => getImage(el.img_url)}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-easing="ease-in-sine"
            >
              <img src={el.img_url} alt="engagement_image" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EngagementPage;
