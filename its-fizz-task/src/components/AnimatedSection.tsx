import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CardList from "./cards/CardList";
import WelcomeAnimation from "./WelcomeAnimation";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AnimatedSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
      const stage = document.querySelector("#hero-section");
      if (!stage || !sectionRef.current) return;

      const cards = gsap.utils.toArray<HTMLElement>(".animated-card");
      const welcomeText = sectionRef.current?.querySelector(
        ".animate-welcome-text"
      );

      if (!cards.length || !welcomeText) {
        // console.log("No .animated-card elements found");
        return;
      }

      // each letter in single span for smooth animation of letters

      const letters = welcomeText.textContent?.split("").map((letter) => {
        const span = document.createElement("span");
        span.textContent = letter === " " ? "\u00A0" : letter;
        span.style.display = "inline-block";
        return span;
      });

      if (!letters) return;

      welcomeText.replaceChildren(...letters);

      // initial set-up for cards and text

      gsap.set(letters, {
        opacity: 0,
        x: -15,
      });

      gsap.set(cards, {
        y: 80,
        opacity: 0,
      });

      // animation setup
      
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: `+=${cards.length * 550 + 850}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onLeave: (self) => self.animation?.progress(1)
        },
      });

      timeline.to(cards, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.8,
        ease: "power2.out",
      });

      timeline.to(letters, {
        opacity: 1,
        x: 0,
        duration: 0.25,
        stagger: 0.12,
        ease: "power1.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-10 mx-auto w-full px-6 py-10"
    >
      <CardList />
      <WelcomeAnimation />
    </section>
  );
};

export default AnimatedSection;
