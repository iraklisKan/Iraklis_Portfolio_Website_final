declare module 'lottie-react' {
  import { CSSProperties } from 'react';

  export interface LottieProps {
    animationData: any;
    loop?: boolean;
    autoplay?: boolean;
    style?: CSSProperties;
    className?: string;
    width?: number;
    height?: number;
    direction?: 1 | -1;
    speed?: number;
    segments?: [number, number];
    lottieRef?: any;
    onComplete?: () => void;
    onLoopComplete?: () => void;
    onEnterFrame?: () => void;
    onSegmentStart?: () => void;
    onConfigReady?: () => void;
    onDataReady?: () => void;
    onDataFailed?: () => void;
    onLoadedImages?: () => void;
    onDOMLoaded?: () => void;
    onDestroy?: () => void;
  }

  declare const Lottie: React.FC<LottieProps>;
  export default Lottie;
}