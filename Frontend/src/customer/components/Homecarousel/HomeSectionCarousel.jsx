import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef, useState } from "react";
import HomeSectionCard from "../homesectioncard/HomeSectionCard";
import { medicine } from "../../../data/medicine/medicine";

const HomeSectionCarousel = () => {
  const carouselRef = useRef();
  const [activeIndex,setActiveIndex] = useState(0);

  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
    carouselRef.current.slidePrev();
  };

  const slideNext = () => {
    setActiveIndex(activeIndex + 1)
    carouselRef.current.slideNext();
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const items = medicine.slice(0, 10).map((item) => (
    <div>
      <HomeSectionCard product={item} />
    </div>
  ));

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 ">
      <div className="relative border bg-[#d4e2fa] rounded-xl p-5">
        <AliceCarousel
          ref={carouselRef}
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
        />
        {activeIndex !== items.length -4 && (<Button
          onClick={slideNext}
          variant="contained"
          className="z-50 bg-white rounded-md"
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translate(50%, -50%) rotate(90deg)",
          }}
          color="secondary"
          aria-label="next"
        >
          <ArrowForwardIosIcon sx={{ transform: "rotate(-90deg)" }} />
        </Button>)}
        {activeIndex !== 0 && (<Button
          onClick={slidePrev}
          variant="contained"
          className="z-50 bg-white"
          color="secondary"
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translate(-50%, -50%) rotate(90deg)",
          }}
          aria-label="previous"
        >
          <ArrowForwardIosIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>)}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
