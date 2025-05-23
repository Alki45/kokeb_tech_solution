'use client';

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function LottieAnimation({ animationPath }: { animationPath: string }) {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      const instance = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath,
      });

      return () => instance.destroy();
    }
  }, [animationPath]);

  return <div ref={container} className="w-full h-[500px]" />;
}
