import { useRef } from "react"


const WelcomeAnimation = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  return (
    <div  className="text-center mt-12 overflow-hidden">
      <h2 ref={textRef} className='animate-welcome-text text-5xl uppercase tracking-[40px] font-light'>welcome itzfizz</h2>
    </div>
  )
}

export default WelcomeAnimation
