'use client';

import { Player } from '@lottiefiles/react-lottie-player';

type Props = {
  animationPath: string;
};

export default function LottieAnimation({ animationPath }: Props) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Player
        autoplay
        loop
        src={animationPath}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}
