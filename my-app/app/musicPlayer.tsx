'use client';
import { useRef } from 'react';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    audioRef.current?.play();
  };

  const pauseAudio = () => {
    audioRef.current?.pause();
  };

  return (
    <div>
      <audio ref={audioRef} src="/songs/song1.mp3" />
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
    </div>
  );
}