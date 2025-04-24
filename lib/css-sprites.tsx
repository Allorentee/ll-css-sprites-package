import React from "react";

export function CssSprites({
  position,
  image,
}: {
  position: string;
  image: string;
}) {
  return (
    <div
      style={{
        display: "inline-block",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: position,
        width: "26px",
        height: "26px",
      }}
    />
  );
}
