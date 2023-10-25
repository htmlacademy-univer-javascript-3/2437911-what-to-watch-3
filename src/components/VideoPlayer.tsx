import {JSX, useEffect, useRef, useState} from 'react';
import {imageDirectory} from '../consts/SrcPath.ts';

type VideoPlayerProps = {
  videoSrc: string;
  posterSrc?: string;
  className?: string;
  isMuted: boolean;
  isPlaying: boolean;
  width?: string | number;
  height?: string | number;
}

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
    if (!isLoaded || !videoRef.current) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.load();
  }, [isPlaying, isLoaded]);

  return (
    <video poster={posterSrc && `${imageDirectory}/${posterSrc}`}
      className={className} ref={videoRef}
      width={width} height={height} muted={isMuted}
    >
      <source src={`video/${videoSrc}`} type='video/mp4'/>
    </video>
  );
}

export default VideoPlayer;
