import TitleText from "./TitleText";
import SpotlightCard from "../Spotlight/Spotlight";

export default function Introduction() {
  return (
    <>
      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="rgba(250, 215, 99, 0.397)"
      >
        <TitleText
          text="Full-Stack Developer"
          className="text-5xl font-bold font-family text-center text-white border-b-2 border-orange pb-2"
          delay={50}
          duration={0.4}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="start"
        />
        <TitleText
          text="Prazer! Me chamo João Victor e sou um desenvolvedor full-stack apaixonado por criar soluções inovadoras e
          eficientes. Com experiência em diversas tecnologias, estou sempre em busca de novos desafios. Entre pixels e endpoints, eu construo ideias que viram produtos."
          className="text-[20px] md:text-2xl font-normal font-family text-center text-white tracking-[-0.1px] pt-2"
          delay={10}
          duration={0.2}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="start"
        />
      </SpotlightCard>
    </>
  );
}
