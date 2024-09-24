import React from "react";
import Image1 from "../assets/Image1.webp";
import Image2 from "../assets/Image2.jpeg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.webp";
import Image6 from "../assets/Image6.webp";
import Image7 from "../assets/Image7.jpg";
import Image8 from "../assets/Image8.jpg";

const Gallery = () => {
  return (
    <>
      <section
        id="gallery"
        className="lg:h-auto lg:w-[100%] xl:h-auto h-auto md:h-auto pb-10 pt-10 bg-indigo-200 text-black font-bold "
      >
        {/* Section Title */}
        <div className="flex justify-center mb-10">
          <h2 className="lg:text-4xl text-3xl font-bold">Project Gallery</h2>
        </div>

        {/* Gallery Row */}
        <div className="lg:flex xl:flex w-auto lg:ml-60 ">
          {/* Column 1 */}
          <div className="lg:-ml-20 xl:ml-0 mx-[7%] ">
            <h3 className="lg:text-2xl text-xl flex justify-center mb-2 xl:flex xl:justify-start xl:ml-10 xl:mt-0 lg:mt-5 lg:-ml-10">
              Industrial Sheds
            </h3>
            <div className="flex justify-center">
              <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg mb-[20px] ">
                <img
                  src={Image1}
                  alt="Industrial Sheds"
                  className="rounded-md w-auto h-auto lg:w-[250px] lg:mt-2 mb-5 lg:h-[200px] "
                />
              </div>
            </div>

            <h3 className="flex justify-center lg:text-2xl text-xl max-[375px]:ml-7 mb-2 xl:flex xl:justify-start xl:-ml-16">
              Equipment Supporting Structures
            </h3>
            <div className="flex justify-center">
              <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg mb-[20px]">
                <img
                  src={Image2}
                  alt="Equipment Supporting Structures"
                  className="rounded-md w-auto h-auto lg:w-[250px] mb-5 lg:h-[200px]"
                />
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="lg:ml-[0px] xl:ml-[0px] mx-[7%]">
            <h3 className="lg:text-2xl  text-xl flex justify-center max-[375px]:ml-12 mb-2 xl:flex xl:justify-start xl:-ml-10">
              Silos & Supporting Structures
            </h3>
            <div className="flex justify-center">
              <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg mb-[20px]">
                <img
                  src={Image3}
                  alt="Silos & Supporting Structures"
                  className="rounded-md w-auto h-auto lg:w-[250px] mb-5 lg:h-[200px]"
                />
              </div>
            </div>

            <h3 className="lg:text-2xl text-xl flex justify-center mb-2 xl:flex xl:justify-start xl:ml-16">
              Pipe Racks
            </h3>
            <div className="flex justify-center">
              <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg mb-[20px]">
                <img
                  src={Image4}
                  alt="Pipe Racks"
                  className="rounded-md w-auto h-auto lg:w-[250px] mb-5 lg:h-[200px]"
                />
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="lg:ml-[0px] xl:ml-[0px] mx-[7%]">
            <h3 className="lg:text-2xl text-xl flex justify-center mb-2">
              Storage Tank Platforms
            </h3>
            <div className="flex justify-center">
              <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg mb-[20px]">
                <img
                  src={Image5}
                  alt="Storage Tank Platforms"
                  className="rounded-md w-auto h-auto lg:w-[250px] mb-5 lg:h-[200px]"
                />
              </div>
            </div>

            <h3 className="lg:text-2xl text-xl flex justify-center mb-2">
              Vessel Platforms
            </h3>
            <div className="flex justify-center">
              <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg mb-[20px]">
                <img
                  src={Image6}
                  alt="Vessel Platforms"
                  className="rounded-md w-auto h-auto lg:w-[250px] lg:h-[200px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Completed Projects Section */}
        <div className="lg:flex flex justify-center mx-[7%] lg:-ml-20">
          <div className="lg:ml-40 mt-5 lg:mt-0">
            <h6 className="lg:text-1xl text-xl flex justify-center">
              Some Of Our
            </h6>
            <h6 className="lg:text-1xl text-xl flex justify-center mb-2">
              Completed Projects
            </h6>
            <div className="flex justify-center lg:flex">
              <div className="w-full max-w-xs sm:max-w-md lg:max-w-lg mb-[20px] lg:flex">
                <img
                  src={Image7}
                  alt="Completed Projects"
                  className="rounded-md mb-10 lg:ml-0 lg:w-[250px] lg:h-[200px]"
                />
                <img
                  src={Image8}
                  alt="Completed Projects 2"
                  className="rounded-md mb-10  lg:w-[250px] lg:ml-10 lg:h-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
