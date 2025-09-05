import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

const Animation = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    if (logoRef.current) {
      gsap.fromTo(logoRef.current, 
        { opacity: 0, x: -30 }, 
        { opacity: 1, x: 0, duration: 2 }
      );
    }
  }, []);

  return (
    <div ref={logoRef} className='logo'>Weather App</div>
  );
}

export default Animation;