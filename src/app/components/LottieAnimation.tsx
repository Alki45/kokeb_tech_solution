// components/LottieAnimation.tsx
'use client';

import React from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  animationPath: string;
  className?: string;
}

export default function LottieAnimation({ animationPath, className }: LottieAnimationProps) {
  const [animationData, setAnimationData] = React.useState<any>(null);

  React.useEffect(() => {
    async function fetchAnimation() {
      try {
        const res = await fetch(animationPath);
        if (!res.ok) throw new Error('Failed to fetch animation JSON');
        const json = await res.json();
        setAnimationData(json);
      } catch (error) {
        console.error('Lottie animation loading error:', error);
      }
    }
    fetchAnimation();
  }, [animationPath]);

  if (!animationData) return null;

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      className={className}
      style={{ pointerEvents: 'none' }}
    />
  );
}
