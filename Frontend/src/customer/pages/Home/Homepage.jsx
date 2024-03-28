import React from "react";
import MainCarousel from "../../components/corosel/MainCarousel";
import HomeSectionCarousel from "../../components/Homecarousel/HomeSectionCarousel";
import HomePageLayout from "../../components/homepagelayout/HomePageLayout";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Homepage() {
 
  return (
    <div>
      <HomePageLayout>
        <MainCarousel />
        <h1 className=" font-bold text-3xl pt-8 ps-5">Trending Near You</h1>
        <p className=" text-gray-400 ps-6">popular in your city</p>
        <div className=" space-y-10 p-4 flex flex-col justify-center">
          <HomeSectionCarousel />
          <HomeSectionCarousel />
          <HomeSectionCarousel />
        </div>
      </HomePageLayout>
    </div>
  );
}
