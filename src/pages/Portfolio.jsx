import React, { useState } from "react";
import PageHeaderContent from "../components/Pageheader";
import { GoProjectSymlink } from "react-icons/go";
import ImageOne from "../images/image1.png";
import ImageTwo from "../images/image2.webp";
import ImageThree from "../images/ecommerce.webp";
import ImageFour from "../images/lms.webp";
import ImageFive from "../images/airbnb.webp";
import { Link } from "react-router-dom";

const portfolioData = [
  { id: 2, name: "Real Time Video Application", image: ImageOne, link: "https://apnacollegefronted.onrender.com" },
  { id: 3, name: "Blog App", image: ImageTwo, link: "https://github.com/vivekkumar012/Blog-app" },
  { id: 2, name: "Ecommerce", image: ImageThree, link: "" },
  { id: 2, name: "Coursify", image: ImageFour, link: "https://github.com/vivekkumar012/Coursify" },
  { id: 3, name: "Hotel-Booking", image: ImageFive, link: "" },
];

const filterData = [
  { filterId: 1, label: "All" },
  { filterId: 2, label: "Development" },
  { filterId: 3, label: "Design" },
];

const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleFilter = (currentId) => setFilteredValue(currentId);
  const handleHover = (index) => setHoveredValue(index);

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  return (
    <section id="portfolio" className="min-h-screen px-5 py-10">
      <PageHeaderContent
        headerText="My Projects"
        icon={<GoProjectSymlink size={40} />}
      />

      <ul className="flex flex-wrap justify-center gap-4 mb-8 border border-dashed border-yellow-500 rounded-full py-2 mt-5 px-4">
        {filterData.map((item) => (
          <li
            key={item.filterId}
            onClick={() => handleFilter(item.filterId)}
            className={`uppercase cursor-pointer px-4 py-2 text-sm md:text-base transition-all rounded-full font-medium ${
              item.filterId === filteredValue
                ? "bg-yellow-500 text-black"
                : "text-yellow-500"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="relative h-[366px] cursor-pointer group overflow-hidden border border-yellow-500 rounded"
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-yellow-500 bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              {index === hoveredValue && (
                <div className="text-center">
                  <p className="text-3xl md:text-4xl font-semibold text-black whitespace-nowrap animate-typing overflow-hidden border-r-4 border-black pr-2">
                    {item.name}
                  </p>
                  <Link to={item.link} className="mt-10 px-6 py-4 h-4 border border-black text-black hover:bg-black hover:text-white transition rounded text-lg">
                    Visit
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;