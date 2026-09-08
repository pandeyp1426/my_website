import { useEffect, useRef } from 'react';

export default function CursorSpotlight() {
  const spotlight = useRef(null);

  useEffect(() => {
    const element = spotlight.current;
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    let x = 0;
    let y = 0;

    const hide = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      element.removeAttribute('data-active');
    };

    const move = (event) => {
      if (event.pointerType === 'touch') {
        hide();
        return;
      }
      x = event.clientX;
      y = event.clientY;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        element.style.setProperty('--pointer-x', `${x}px`);
        element.style.setProperty('--pointer-y', `${y}px`);
        element.setAttribute('data-active', '');
        frame = 0;
      });
    };

    const updateAvailability = () => {
      window.removeEventListener('pointermove', move);
      hide();
      if (media.matches) window.addEventListener('pointermove', move, { passive: true });
    };

    updateAvailability();
    media.addEventListener('change', updateAvailability);
    document.documentElement.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);

    return () => {
      hide();
      window.removeEventListener('pointermove', move);
      media.removeEventListener('change', updateAvailability);
      document.documentElement.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
    };
  }, []);

  return <div ref={spotlight} className="cursor-spotlight" aria-hidden="true" />;
}
