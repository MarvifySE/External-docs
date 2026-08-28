import React, {useEffect, useState} from 'react';

/**
 * Screenshot for the editor guide pages.
 *
 * - Lazy-loaded natively.
 * - When `srcFull` is given, clicking opens an in-page enlarged view
 *   (~85% of the viewport, page dimmed behind) serving the full-resolution
 *   file; the inline `src` stays small so normal reading is light. Without
 *   `srcFull` the image is already at its native resolution and renders as a
 *   plain figure with no zoom affordance.
 */
export default function DocImage({src, srcFull, alt = '', width = 800}) {
  const [open, setOpen] = useState(false);

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
      <p style={{textAlign: 'center'}}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onClick={srcFull ? () => setOpen(true) : undefined}
          title={srcFull ? 'Click to enlarge' : undefined}
          style={{
            maxWidth: width,
            width: '100%',
            display: 'inline-block',
            cursor: srcFull ? 'zoom-in' : undefined,
          }}
        />
      </p>
      {open && srcFull && (
        <div
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image"
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
            aria-label="Close enlarged image"
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
          <img
            src={srcFull}
            alt={alt}
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
