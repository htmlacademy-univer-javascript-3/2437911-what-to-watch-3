import {JSX, useEffect, useRef, useState} from 'react';

type VideoPlayerProps = {
  videoSrc: string;
  posterSrc?: string;
  className?: string;
  isMuted: boolean;
  isPlaying: boolean;
  width?: string | number;
  height?: string | number;
}

const VIDEO_PLAY_DELAY = 1000;

function VideoPlayer({
  videoSrc,
  posterSrc,
  className,
  isMuted,
  isPlaying,
  width,
  height
}: VideoPlayerProps): JSX.Element {
  const [isLoaded, setIsLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoPlayer = videoRef.current;
    const dataLoadedHandle = () => {
      setIsLoaded(true);
    };

    videoPlayer?.addEventListener('loadeddata', dataLoadedHandle);

    return () => {
      videoPlayer?.removeEventListener('loadeddata', dataLoadedHandle);
    };
  }, []);

  useEffect(() => {
    const videoPlayer = videoRef.current;
    if (!isLoaded || !videoPlayer) {
      return;
    }

    const timerId = setTimeout(() => {
      if (isPlaying) {
        videoPlayer.play();
      }
    }, VIDEO_PLAY_DELAY);

    videoPlayer.load();

    return () => clearTimeout(timerId);
  }, [isPlaying, isLoaded]);

  return (
    <video poster={posterSrc && `${posterSrc}`}
      className={className} ref={videoRef}
      width={width} height={height} muted={isMuted}
    >
      <source src={videoSrc} type='video/mp4'/>
    </video>
  );
}

export default VideoPlayer;
