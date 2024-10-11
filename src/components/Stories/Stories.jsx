import React, { useEffect, useState } from "react";

export default function Stories({ isActive, slides }) {
  const [index, setIndex] = useState(0);
  const [animation, setAnimation] = useState(false);

  const number = slides.length - 1;

  useEffect(() => {
    if (isActive) {
      setAnimation(true);
    } else {
      setIndex(0);
      setAnimation(false);
    }
  }, [isActive, index]);

  const handleNext = () => {
    if (index < number) {
      setIndex(index + 1);
    }
  };

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="w-[250px] h-[450px] bg-secondary-400 relative rounded-lg">
      {/* Click areas */}
      <div className="absolute flex h-full w-full">
        <div className="w-1/2 cursor-pointer" onClick={handlePrevious}></div>
        <div className="w-1/2 cursor-pointer" onClick={handleNext}></div>
      </div>
      {/* Lines Above */}
      <div className="absolute flex justify-evenly gap-2 h-[2px] w-full top-2 px-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="bg-secondary-300 h-full w-full rounded-sm"
          >
            <div
              className={`h-full ${
                slideIndex <= index && animation ? "w-full" : "w-0"
              }  bg-white rounded-sm transition-all duration-1000`}
              onAnimationEnd={() => setAnimation(true)}
            ></div>
          </div>
        ))}
      </div>
      {/* Image */}
      <img className="rounded-lg" src={slides[index]} alt={`Slide ${index}`} />
    </div>
  );
}
