
"use client";

export default function BackgroundVideo() {
  return (
    <div className="site-background" aria-hidden="true">
      <video
        className="site-background-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source
          src="/videos/hero-background.mp4"
          type="video/mp4"
        />
      </video>

      <div className="site-background-overlay" />
    </div>
  );
}
