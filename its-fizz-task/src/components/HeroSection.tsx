import { useEffect, useState } from "react";
const heroTagLines = [
  "little more pop in life",
  "fresh kind of feeling",
  "Bold Bubbles. Bold Energy. Little spark for everyday",
];

const HeroSection = () => {
  const [isvisible, setIsvisble] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsvisble(true);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="mt-20 overflow-hidden text-center">
      {heroTagLines.map((tagLine, index) => (
        <h2
          key={tagLine}
          className={`transition-all duration-700 ease-out uppercase ${
            isvisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          } ${
            index === 0
              ? "text-xl font-medium tracking-widest"
              : index === 1
              ? "mt-6 text-lg font-light tracking-[7px]"
              : "mt-6"
          } `}
          style={{
            transitionDelay: isvisible ? `${index * 250}ms` : "0ms",
          }}
        >
          {tagLine}
        </h2>
      ))}
    </div>
  );
};

export default HeroSection;
