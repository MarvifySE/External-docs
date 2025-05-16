/**
 * ZoomableImage component for Docusaurus MDX documents.
 *
 * Renders a responsive image with a subtle "expand" (⛶) icon in the top-right corner,
 * indicating to users that the image is clickable to view in full size.
 * When clicked, the image opens in a new browser tab at full resolution.
 *
 * The component is useful for embedding instructional or detailed images
 * without taking up too much screen space, while still allowing full visibility on demand.
 *
 * Props:
 * - src (string): The image source URL or `require(...).default` for local assets.
 * - alt (string): Alternative text for accessibility.
 * - width (string, optional): Relative width of the image container (default: '40%').
 *
 * Example usage in a Docusaurus MDX file:
 *
 * ```mdx
 * import ZoomableImage from '@site/src/components/ZoomableImage';
 *
 * <ZoomableImage
 *   src={require('@site/static/img/my-diagram.webp').default}
 *   alt="Detailed architecture diagram"
 *   width="50%" // optional
 * />
 * ```
 *
 * Note:
 * - Use inside a centered container (e.g., `<p align="center">`) for best layout control.
 * - Local image paths should use `require(...).default` syntax to resolve correctly in Webpack.
 */

import React from 'react';

export default function ZoomableImage({ src, alt, width = '40%' }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        position: 'relative',
        width,
        maxWidth: '100%',
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto',
          cursor: 'zoom-in',
          borderRadius: '8px',
          display: 'block',
        }}
      />
      <span
        style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          background: 'rgba(255, 255, 255, 0.8)',
          color: '#000',
          fontSize: '1.5rem',
          padding: '4px 8px',
          borderRadius: '6px',
          pointerEvents: 'none',
          userSelect: 'none',
          fontWeight: '900',
          lineHeight: '1',
        }}
      >
        ⛶
      </span>
    </a>
  );
}
