"use client";

import { useRef, useState } from "react";

export default function ImageMagnifier({ src, width = 480, height = 480 }) {
  const imgRef = useRef(null);

  const [show, setShow] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const zoomLevel = 2.5;
  const lensSize = 300;

  // 👉 LEFT image size
  const IMAGE_SIZE = width;

  // 👉 RIGHT zoom panel (bigger than left)
  const ZOOM_SIZE = 650;

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    x = Math.max(lensSize / 2, Math.min(x, rect.width - lensSize / 2));
    y = Math.max(lensSize / 2, Math.min(y, rect.height - lensSize / 2));

    setPos({ x, y });
  };

  return (
    <div className="relative flex items-start gap-10">
      {/* LEFT IMAGE */}
      <div
        className="relative overflow-hidden"
        style={{ width: IMAGE_SIZE, height }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          ref={imgRef}
          src={src}
          alt="product"
          className="w-full h-full object-contain"
        />

        {show && (
          <>
            {/* TOP */}
            <div
              className="absolute bg-gray-500/40 pointer-events-none z-9"
              style={{
                top: 0,
                left: 0,
                width: "100%",
                height: pos.y - lensSize / 2,
              }}
            />

            {/* LEFT */}
            <div
              className="absolute bg-gray-500/40 pointer-events-none z-9"
              style={{
                top: pos.y - lensSize / 2,
                left: 0,
                width: pos.x - lensSize / 2,
                height: lensSize,
              }}
            />

            {/* RIGHT */}
            <div
              className="absolute bg-gray-500/40 pointer-events-none z-9"
              style={{
                top: pos.y - lensSize / 2,
                left: pos.x + lensSize / 2,
                width: IMAGE_SIZE - (pos.x + lensSize / 2),
                height: lensSize,
              }}
            />

            {/* BOTTOM */}
            <div
              className="absolute bg-gray-500/40 pointer-events-none z-9"
              style={{
                top: pos.y + lensSize / 2,
                left: 0,
                width: "100%",
                height: height - (pos.y + lensSize / 2),
              }}
            />
          </>
        )}

        {/* Lens */}
        {show && (
          <div
            className="absolute bg-white/1 pointer-events-none z-100"
            style={{
              width: lensSize,
              height: lensSize,
              left: pos.x - lensSize / 2,
              top: pos.y - lensSize / 2,
            }}
          />
        )}
      </div>

      {show && (
        <div
          className="absolute ml-[600px] top-0 border border-gray-200 bg-white shadow-xl z-9"
          style={{
            width: ZOOM_SIZE,
            height: ZOOM_SIZE,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${IMAGE_SIZE * zoomLevel}px ${IMAGE_SIZE * zoomLevel}px`,
            backgroundPosition: `
              -${pos.x * zoomLevel - ZOOM_SIZE / 2}px
              -${pos.y * zoomLevel - ZOOM_SIZE / 2}px
            `,
          }}
        />
      )}
    </div>
  );
}
