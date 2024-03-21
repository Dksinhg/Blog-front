import React from "react";
import "./category.css";
import { Category } from "../../assets/data/data";
// import pic from "../../assets/images/food.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

const SmapleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <GrFormNext className="ican" />
      </button>
    </div>
  );
};

const SmaplePreArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <GrFormPrevious className="ican" />
      </button>
    </div>
  );
};

const category = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SmapleNextArrow />,
    prevArrow: <SmaplePreArrow />,
    Responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className="category">
        <div className="content">
          <Slider {...settings}>
            {Category.map((item) => (
              <div className="boxs" key={item.id}>
                <div className="box">
                  {/* <img src={pic} alt="" width="50%" /> */}
                  {/* <img src={require(`${item.url}`)} alt="" /> */}

                  <img src={item.url} alt="" />
                  {/* </div> */}
                  <div className="overplay">
                    <h4> {item.category} </h4>
                    <p> {item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default category;
