import {JSX, useEffect, useRef, useState} from 'react';

type VideoPlayerProps = {
  videoSrc: string;
  posterSrc?: string;
  className?: string;
  isMuted: boolean;
  isPlaying: boolean;
  width?: string | number;
  height?: string | number;
  videoPlayDelay?: number;
}

function MiniVideoPlayer({
  videoSrc,
  posterSrc,
  className,
  isMuted,
  isPlaying,
  width,
  height,
  videoPlayDelay
}: VideoPlayerProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let isMounted = true;
    const videoPlayer = videoRef.current;
    const dataLoadedHandle = () => {
      setIsLoaded(true);
    };

    if (isMounted) {
      videoPlayer?.addEventListener('loadeddata', dataLoadedHandle);
    }

    return () => {
      videoPlayer?.removeEventListener('loadeddata', dataLoadedHandle);
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const videoPlayer = videoRef.current;
    let timerId: NodeJS.Timeout;
    if (isMounted) {
      if (!isLoaded || !videoPlayer) {
        return;
      }
      timerId = setTimeout(() => {
        if (isPlaying) {
          videoPlayer.play();
        }
      }, videoPlayDelay);

      videoPlayer.load();
    }

    return () => {
      clearTimeout(timerId);
      isMounted = false;
    };
  }, [isPlaying, isLoaded, videoPlayDelay]);

  return (
    <video poster={posterSrc && `${posterSrc}`}
      className={className} ref={videoRef}
      width={width} height={height} muted={isMuted}
    >
      <source src={videoSrc} type='video/mp4'/>
    </video>
  );
}

export default MiniVideoPlayer;
