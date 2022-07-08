import React from "react";
import img from "./banner01.jpg";
import img1 from "./banner02.jpg";
import img2 from "./banner03.jpg";
import "./imageslider.css";

const Imageslider = () => {
  const imagewidth = (index) => {
    const first = document.querySelector("[data-index='"+index+"']");
    const removeClassFromElement = document.querySelectorAll(".slider")
    removeClassFromElement.forEach(ele => {
      ele.classList.remove('active');
    })
    first.style.width = "100%";
    first.nextElementSibling.style.width = "0%";
  };

  const data = [
    {
      image: img,
      title: "Hiiiiii",
    },
    {
      image: img1,
      title: "Image 2",
    },
    {
      image: img2,
      title: "Image 3",
    },
  ];
  return (
    <>
      <div className="image-slider">
        {data.map((item, index) => {
          return (
            <>
              <div
                key={`slider` + index}
                className="slider"
                onClick={() => imagewidth(index)}
                data-index={index}
              >
                <img src={item.image} alt={item.title}></img>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Imageslider;
