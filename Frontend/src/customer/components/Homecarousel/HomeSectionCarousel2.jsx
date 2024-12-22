import AliceCarousel from "react-alice-carousel";
import { Button, TextField } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef, useState } from "react";
import HomeSectionCard from "../homesectioncard/HomeSectionCard";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findProducts } from "../../../Redux/Customers/Product/Action";

const HomeSectionCarousel2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const param = useParams();
  const { customersProduct } = useSelector((store) => store);
  const location = useLocation();
  const [isLoaderOpen, setIsLoaderOpen] = useState(false);

  const [minPrice, setMinPrice] = useState(0);  
  const [maxPrice, setMaxPrice] = useState(1000); 
  const [disccount , setDisccount]= useState(0);
  const [filterApplied, setFilterApplied] = useState(false);

  const handleLoderClose = () => {
    setIsLoaderOpen(false);
  };

  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  
  const stock = searchParams.get("stock");

  
  useEffect(() => {
    if (filterApplied) {
      const data = {
        minPrice: minPrice,
        maxPrice: maxPrice,
        minDiscount: disccount ,
        stock: stock || 0,
      };
      dispatch(findProducts(data));
      setFilterApplied(false);
    }
  }, [filterApplied]);

  useEffect(() => {
    if (customersProduct.loading) {
      setIsLoaderOpen(true);
    } else {
      setIsLoaderOpen(false);
    }
  }, [customersProduct.loading]);

  const carouselRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
    carouselRef.current.slidePrev();
  };

  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
    carouselRef.current.slideNext();
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 4 },
  };

  const items = customersProduct.products?.content?.slice(1).map((item) => (
    <HomeSectionCard product={item} />
  )) || [];
  

  const handleMinPriceChange = (e) => setMinPrice(Number(e.target.value));
  const handleMaxPriceChange = (e) => setMaxPrice(Number(e.target.value));
  const handleDiscountChange = (e) => setDisccount(Number(e.target.value))


  const handleApplyFilter = () => {
    setFilterApplied(true);  
  };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      <div className="relative border bg-[#d4e2fa] rounded-xl p-5">
        
        <div className="mb-4 flex space-x-4">
          <TextField
            label="Min Price"
            variant="outlined"
            type="number"
            value={minPrice}
            onChange={handleMinPriceChange}
            size="small"
          />
          <TextField
            label="Max Price"
            variant="outlined"
            type="number"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            size="small"
          />

          <TextField
            label="Disccount"
            variant="outlined"
            type="number"
            value={disccount}
            onChange={handleDiscountChange}
            size="small"
          />
         
          <Button
            onClick={handleApplyFilter}
            variant="contained"
            color="primary"
          >
            Filter
          </Button>
        </div>

        <AliceCarousel
          ref={carouselRef}
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
        />
        {activeIndex !== items.length - 4 && (
          <Button
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
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
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
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel2;