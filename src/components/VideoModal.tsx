'use client';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';

/* 
 * We are not using ReactPlayer here becasue it conflicts with react strict mode.
 * Instead, we are using native YouTube embed iframe with autoplay.
*/

interface VideoModalSimpleProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModalSimple({ isOpen, onClose, videoUrl }: VideoModalSimpleProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url: string) => {
    try {
      if (url.includes('youtube.com/watch')) {
        const videoId = new URL(url).searchParams.get('v');
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`;
      }
      if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`;
      }
    } catch (error) {
      console.error('Error parsing YouTube URL:', error);
    }
    return url;
  };

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-neutral-900 rounded-card shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-neutral-800/80 p-2 text-neutral-300 transition-colors hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close video"
        >
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Video iframe - native YouTube embed */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video player"
          />
        </div>
      </div>
    </div>
  );
}