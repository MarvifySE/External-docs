import React, {useEffect, useRef, useState} from 'react';

/**
 * Looping instructional clip for the editor guide pages.
 *
 * - Lazy: no video bytes are fetched until the clip scrolls near the viewport,
 *   and playback pauses while it is scrolled away.
 * - Click opens an in-page enlarged view (~85% of the viewport, page dimmed
 *   behind) so small UI text in the recording becomes readable. Backdrop
 *   click, the close button, or Escape closes it.
 * - Two sources: `src` is the small inline encode the page plays; `srcFull`
 *   (optional) is the full-resolution encode, fetched only when the reader
 *   asks for the enlarged view.
 *
 * `ratio` reserves the box before the video loads, so the page never shifts.
 */
export default function DocVideo({src, srcFull, width = '75%', ratio = '3 / 2'}) {
  const inlineRef = useRef(null);
  const wrapRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  // Attach the source only when scrolled near; pause when scrolled away.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setLoaded(true);
            inlineRef.current?.play?.().catch(() => {});
          } else {
            inlineRef.current?.pause?.();
          }
        });
      },
      {rootMargin: '200px'}
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // While enlarged: Escape closes, page scroll is locked.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <p ref={wrapRef} style={{textAlign: 'center'}}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={inlineRef}
          width={width}
          src={loaded ? src : undefined}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          onClick={() => setOpen(true)}
          title="Click to enlarge"
          style={{
            cursor: 'zoom-in',
            display: 'inline-block',
            maxWidth: '100%',
            aspectRatio: ratio,
          }}
        />
      </p>
      {open && (
        <div
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged video"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
          }}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close enlarged video"
            style={{
              position: 'absolute',
              top: 16,
              right: 20,
              width: 40,
              height: 40,
              borderRadius: 20,
              border: 'none',
              background: 'rgba(255, 255, 255, 0.15)',
              color: '#fff',
              fontSize: 20,
              lineHeight: 1,
              cursor: 'pointer',
            }}
          >
            ×
          </button>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src={srcFull ?? src}
            autoPlay
            loop
            muted
            playsInline
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '85vw',
              maxHeight: '85vh',
              borderRadius: 8,
              boxShadow: '0 12px 48px rgba(0, 0, 0, 0.5)',
              cursor: 'default',
            }}
          />
        </div>
      )}
    </>
  );
}
